// src/app/api/likes/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

// Initialize the Redis client from environment variables
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const LIKES_KEY = 'portfolio:likes';
const IP_PREFIX = 'ip:';
const TTL_SECONDS = 86400; // 24 hours in seconds

export async function GET() {
  try {
    const likes = await redis.get(LIKES_KEY);
    return NextResponse.json({ likes: Number(likes) || 0 });
  } catch (error) {
    console.error("Error fetching likes:", error);
    return NextResponse.json({ error: 'Failed to fetch likes' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  // --- THE FIX IS HERE ---
  // Get the user's IP address from request headers.
  // 'x-forwarded-for' is the standard header for this in Vercel and other platforms.
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  // -----------------------

  if (ip === 'unknown') {
    // This is a fallback and should rarely be triggered on a live Vercel deployment.
    return NextResponse.json({ error: 'Could not determine IP address.' }, { status: 400 });
  }

  const ipKey = `${IP_PREFIX}${ip}`;

  try {
    // Check if this IP has liked in the last 24 hours
    const hasLiked = await redis.get(ipKey);

    if (hasLiked) {
      return NextResponse.json({ error: 'You have already liked in the last 24 hours.' }, { status: 429 });
    }

    // Use a transaction to ensure atomicity
    const transaction = redis.multi();
    transaction.incr(LIKES_KEY);
    transaction.set(ipKey, '1', { ex: TTL_SECONDS });

    // In a multi() transaction with upstash/redis, exec() returns an array of results.
    // The result of the INCR command will be the new value.
    const results = await transaction.exec();
    const newLikes = results[0]; // The result of the first command (incr)

    return NextResponse.json({ likes: newLikes });

  } catch (error) {
    console.error("Error incrementing likes:", error);
    return NextResponse.json({ error: 'Failed to increment likes' }, { status: 500 });
  }
}