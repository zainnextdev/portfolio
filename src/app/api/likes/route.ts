// src/app/api/likes/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const LIKES_KEY = 'portfolio:likes';
const VISITOR_PREFIX = 'visitor:';
const TTL_SECONDS = 86400;

// --- A GOOD STARTING NUMBER THAT LOOKS ORGANIC ---
const INITIAL_LIKES_COUNT = 321; 
// -------------------------------------------------

export async function GET() {
  try {
    let likes = await redis.get<number>(LIKES_KEY);

    // --- THE SMART INITIALIZATION LOGIC ---
    // If the 'likes' key doesn't exist in the database yet...
    if (likes === null) {
      // ...set it to our initial desired count.
      await redis.set(LIKES_KEY, INITIAL_LIKES_COUNT);
      likes = INITIAL_LIKES_COUNT;
    }
    // ------------------------------------

    return NextResponse.json({ likes: likes });
  } catch (error) {
    console.error("Error fetching likes:", error);
    return NextResponse.json({ error: 'Failed to fetch likes' }, { status: 500 });
  }
}

// The POST function remains completely unchanged.
export async function POST(request: NextRequest) {
  const { visitorId } = await request.json();

  if (!visitorId) {
    return NextResponse.json({ error: 'Missing Visitor ID.' }, { status: 400 });
  }

  const visitorKey = `${VISITOR_PREFIX}${visitorId}`;

  try {
    const hasLiked = await redis.get(visitorKey);

    if (hasLiked) {
      return NextResponse.json({ error: 'This device has already liked in the last 24 hours.' }, { status: 429 });
    }

    const transaction = redis.multi();
    transaction.incr(LIKES_KEY);
    transaction.set(visitorKey, '1', { ex: TTL_SECONDS });

    const results = await transaction.exec();
    const newLikes = results[0];

    return NextResponse.json({ likes: newLikes });
  } catch (error) {
    console.error("Error incrementing likes:", error);
    return NextResponse.json({ error: 'Failed to increment likes' }, { status: 500 });
  }
}