// src/components/About/About.styles.ts

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr; // Image column is smaller
  gap: ${({ theme }) => theme.spacings.lg};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const ImageWrapper = styled(motion.div)`
  width: 100%;
  max-width: 350px;
  aspect-ratio: 1 / 1; // Makes it a perfect square
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden; // Important for the border-radius on the Next/Image
  justify-self: center; // Centers the image when grid column is wider
`;

export const ProfileImage = styled(Image)`
  filter: grayscale(100%);
  transition: filter 0.5s ease-in-out, transform 0.5s ease-in-out;
  
  // The hover effect is controlled by the parent wrapper
  ${ImageWrapper}:hover & {
    filter: grayscale(0%);
    transform: scale(1.05);
  }
`;

export const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: center;
  }
`;

export const AboutHeading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  margin-bottom: ${({ theme }) => theme.spacings.sm};

  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const AboutBody = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacings.md};
  max-width: 600px;
`;