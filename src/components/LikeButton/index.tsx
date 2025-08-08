// src/components/LikeButton/index.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { LikeWrapper, Button, HeartIcon, LikeCount } from './LikeButton.styles';

const LOCAL_STORAGE_KEY = 'portfolio_liked_timestamp';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [visitorId, setVisitorId] = useState<string | null>(null);

  useEffect(() => {
    // This function runs once when the component mounts.
    const initialize = async () => {
      // 1. Generate the unique browser fingerprint.
      try {
        const fp = await FingerprintJS.load();
        const result = await fp.get();
        setVisitorId(result.visitorId);
      } catch (e) {
        console.error("FingerprintJS failed to load or run", e);
        setError("Could not verify device.");
      }

      // 2. Check local storage for a quick UI update.
      const likedTimestamp = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (likedTimestamp && Date.now() - parseInt(likedTimestamp, 10) < 24 * 60 * 60 * 1000) {
        setHasLiked(true);
      } else {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      }

      // 3. Fetch the initial like count from the server.
      try {
        const response = await fetch('/api/likes');
        if (response.ok) {
          const data = await response.json();
          setLikes(data.likes);
        }
      } catch (e) {
        console.error("Failed to fetch likes", e);
      } finally {
        setIsLoading(false);
      }
    };

    initialize();
  }, []); // The empty dependency array ensures this runs only once.

  const handleLike = async () => {
    // Prevent action if already liked, still loading, or fingerprint failed.
    if (hasLiked || isLoading || !visitorId) return;

    // Optimistic UI update for a snappy feel.
    setHasLiked(true);
    setLikes(prev => prev + 1);
    const heartIcon = document.querySelector('.like-heart');
    heartIcon?.classList.add('liked');

    try {
      // Send the unique visitorId to our backend API.
      const response = await fetch('/api/likes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ visitorId }),
      });

      const data = await response.json();

      if (response.ok) {
        // Success: Update count with server's response and set local storage lock.
        setLikes(data.likes);
        localStorage.setItem(LOCAL_STORAGE_KEY, Date.now().toString());
      } else {
        // Failure: Revert the UI update and show the error from the server.
        setError(data.error || 'Failed to like.');
        setLikes(prev => prev - 1);
        setHasLiked(false);
      }
    } catch (e) {
      // Network or other critical error: Revert the UI update.
      setError('An error occurred. Please try again.');
      setLikes(prev => prev - 1);
      setHasLiked(false);
    }

    // Clean up visual effects and error messages after a short delay.
    setTimeout(() => heartIcon?.classList.remove('liked'), 500);
    setTimeout(() => setError(''), 4000);
  };

  return (
    <LikeWrapper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <Button 
        onClick={handleLike} 
        disabled={hasLiked || isLoading || !visitorId} 
        aria-label="Like this portfolio"
      >
        <HeartIcon $liked={hasLiked} className="like-heart">
          <FaHeart />
        </HeartIcon>
        <LikeCount>{isLoading ? '...' : likes.toLocaleString()}</LikeCount>
        <span>{hasLiked ? 'Thank you!' : 'Appreciate my work?'}</span>
      </Button>
      {error && <p style={{color: '#ff4e42', marginLeft: '1rem', fontSize: '0.8rem'}}>{error}</p>}
    </LikeWrapper>
  );
};

export default LikeButton;