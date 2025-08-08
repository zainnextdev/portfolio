// src/components/LikeButton/index.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { LikeWrapper, Button, HeartIcon, LikeCount } from './LikeButton.styles';

const LOCAL_STORAGE_KEY = 'portfolio_liked_timestamp';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check local storage to see if the user has liked within 24 hours
    const likedTimestamp = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (likedTimestamp) {
      const timeSinceLike = Date.now() - parseInt(likedTimestamp, 10);
      if (timeSinceLike < 24 * 60 * 60 * 1000) {
        setHasLiked(true);
      } else {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      }
    }

    // Fetch initial like count
    const fetchLikes = async () => {
      try {
        const response = await fetch('/api/likes');
        const data = await response.json();
        if (response.ok) {
          setLikes(data.likes);
        }
      } catch (e) {
        console.error("Failed to fetch likes", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLikes();
  }, []);

  const handleLike = async () => {
    if (hasLiked) return;

    // Add a visual effect immediately
    setHasLiked(true);
    setLikes(prev => prev + 1);
    const heartIcon = document.querySelector('.like-heart');
    heartIcon?.classList.add('liked');

    try {
      const response = await fetch('/api/likes', { method: 'POST' });
      const data = await response.json();

      if (response.ok) {
        setLikes(data.likes);
        localStorage.setItem(LOCAL_STORAGE_KEY, Date.now().toString());
      } else {
        setError(data.error || 'Failed to like.');
        setLikes(prev => prev - 1); // Revert optimistic update on error
        setHasLiked(false);
      }
    } catch (e) {
      setError('An error occurred.');
      setLikes(prev => prev - 1);
      setHasLiked(false);
    }

    setTimeout(() => heartIcon?.classList.remove('liked'), 500);
    setTimeout(() => setError(''), 3000);
  };

  return (
    <LikeWrapper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Button onClick={handleLike} disabled={hasLiked || isLoading} aria-label="Like this portfolio">
        <HeartIcon $liked={hasLiked} className="like-heart">
          <FaHeart />
        </HeartIcon>
        <LikeCount>{isLoading ? '...' : likes.toLocaleString()}</LikeCount>
        <span>{hasLiked ? 'Thanks!' : 'Appreciate my work?'}</span>
      </Button>
      {error && <p style={{color: 'red', marginLeft: '1rem'}}>{error}</p>}
    </LikeWrapper>
  );
};

export default LikeButton;