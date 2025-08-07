// src/components/PerformanceAccordion/PerformanceAccordion.styles.ts
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AccordionItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: ${({ theme }) => theme.spacings.sm};
`;

export const AccordionHeader = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacings.sm} 0;
  width: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.sm};
`;

export const IconWrapper = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Title = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
`;

export const ChevronWrapper = styled(motion.div)``;

export const AccordionContent = styled(motion.section)`
  overflow: hidden;
  padding-left: calc(1.5rem + ${({ theme }) => theme.spacings.sm});
`;

export const ContentText = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  padding-bottom: ${({ theme }) => theme.spacings.md};
  line-height: 1.7;

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;