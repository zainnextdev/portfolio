// src/components/Hero/Hero.styles.ts

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 ${({ theme }) => theme.spacings.md};
  text-align: center;
  position: relative; // For positioning child elements
  overflow: hidden; // To contain the background blob
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.8)), url('/hero-background.jpg');
    background-size: cover;
    background-position: center;
    z-index: -2; // Place it behind the text and the animated blob
  }
`;

export const Name = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacings.xs};
`;

export const MainHeading = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.display};
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 1.1;
  background: linear-gradient(90deg, #FFFFFF, #CFCFCF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin-bottom: ${({ theme }) => theme.spacings.sm};
  max-width: 900px;

   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const SubHeading = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.secondary};
  max-width: 700px;
  margin-bottom: ${({ theme }) => theme.spacings.md};

   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

export const CTAButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
  padding: 0.8rem 2.5rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.subtle};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 8px 30px rgba(0, 112, 243, 0.2);
  }
`;

export const BackgroundBlob = styled(motion.div)`
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0, 112, 243, 0.15) 0%, rgba(0, 112, 243, 0) 70%);
  border-radius: 50%;
  filter: blur(100px);
  z-index: -1; // Place it behind all the content
  will-change: transform; // Performance optimization

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 300px;
    height: 300px;
    filter: blur(70px);
  }
`;