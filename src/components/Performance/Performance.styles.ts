// src/components/Performance/Performance.styles.ts
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PerformanceContainer = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.lg};

 @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacings.md}; // Reduce the gap on mobile
  }
`;

export const TextContent = styled(motion.div)``;

export const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const VitalsList = styled.ul`
  list-style: none;
  margin-top: ${({ theme }) => theme.spacings.md};
  padding-left: 1.5rem;
`;

export const VitalItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacings.sm};
  position: relative;
  
  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.accent};
    position: absolute;
    left: -1.5rem;
    font-weight: 700;
  }
`;

export const VitalTitle = styled.h4`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

export const VitalDescription = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.9rem;
`;

export const ScoreKey = styled.div`
  margin-top: ${({ theme }) => theme.spacings.md};
  padding: ${({ theme }) => theme.spacings.sm};
  background-color: #111;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};

  h5 {
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacings.sm};
  }
`;

export const ScoreKeyItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.sm};
  margin-bottom: ${({ theme }) => theme.spacings.xs};
  font-size: 0.9rem;
`;

// A function to return color based on score range
const getScoreColor = (score: 'good' | 'average' | 'poor') => {
  switch (score) {
    case 'good': return '#0cce6b'; // Green
    case 'average': return '#ffa400'; // Orange
    case 'poor': return '#ff4e42'; // Red
    default: return '#fff';
  }
};

export const ScoreIndicator = styled.div<{ score: 'good' | 'average' | 'poor' }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ score }) => getScoreColor(score)};
  flex-shrink: 0;
`;