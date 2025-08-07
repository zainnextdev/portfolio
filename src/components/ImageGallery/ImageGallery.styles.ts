// src/components/ImageGallery/ImageGallery.styles.ts
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.md};
`;

export const MainImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9; // A good default aspect ratio
  background-color: #111;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const MainImage = styled(Image)`
  // 'contain' ensures the whole image is visible, regardless of its dimensions
  object-fit: contain; 
  width: 100%;
  height: 100%;
`;

export const ThumbnailRail = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.sm};
  justify-content: center;
`;

export const Thumbnail = styled.div<{ $isActive: boolean }>`
  position: relative;
  width: 100px;
  height: 60px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid ${({ $isActive, theme }) => $isActive ? theme.colors.accent : 'transparent'};
  transition: border-color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    transition: background-color 0.3s ease;
  }
  
  &:hover::after {
    background-color: rgba(0,0,0,0.2);
  }
  
  ${({ $isActive }) => $isActive && `
    &::after {
      background-color: transparent;
    }
  `}
`;