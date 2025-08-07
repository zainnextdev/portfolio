// src/styles/common.styles.ts

import styled from 'styled-components';

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacings.xs};
`;

export const TechTag = styled.span`
  background-color: ${({ theme }) => theme.colors.accent}20;
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 500;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.sm};
`;

export const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  svg {
    font-size: 1.2rem;
  }
`;