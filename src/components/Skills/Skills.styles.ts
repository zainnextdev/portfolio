// src/components/Skills/Skills.styles.ts
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillCategoryCard = styled(motion.div)`
  background-color: #111;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacings.md};
  margin-bottom: ${({ theme }) => theme.spacings.md};
`;

export const CategoryTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.75rem;
  margin-bottom: ${({ theme }) => theme.spacings.md};
  padding-bottom: ${({ theme }) => theme.spacings.sm};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: ${({ theme }) => theme.spacings.md};
`;

export const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
`;

export const SkillIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.secondary};
  transition: color 0.3s ease, transform 0.3s ease;

  ${SkillItem}:hover & {
    color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.1);
  }
`;

export const SkillName = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
  transition: color 0.3s ease;
  
  ${SkillItem}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;