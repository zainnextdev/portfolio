// src/components/LikeButton/LikeButton.styles.ts
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const heartBeat = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

export const LikeWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.spacings.md} 0;
`;

export const Button = styled.button`
  background-color: #222;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.colors.primary};

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const HeartIcon = styled(motion.div)<{ $liked: boolean }>`
  font-size: 1.2rem;
  color: ${({ $liked, theme }) => $liked ? '#ff4e42' : theme.colors.secondary};
  
  &.liked {
    animation: ${heartBeat} 0.5s ease-in-out;
  }
`;

export const LikeCount = styled.span`
  font-size: 1rem;
  font-weight: 600;
  min-width: 30px; // Prevents layout shift
  text-align: left;
`;