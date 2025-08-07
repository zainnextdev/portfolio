import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled(motion.section)`
  padding: ${({ theme }) => theme.spacings.xl} ${({ theme }) => theme.spacings.md};
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacings.lg} ${({ theme }) => theme.spacings.sm};
  }
`;