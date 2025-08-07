// src/components/Philosophy/Philosophy.styles.ts

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PhilosophyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacings.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const PhilosophyCard = styled(motion.div)`
  background-color: #111111;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacings.md};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CardIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacings.sm};
`;

export const CardHeading = styled.h3`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacings.xs};
`;

export const CardBody = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.7;
`;