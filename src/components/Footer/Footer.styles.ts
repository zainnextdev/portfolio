// src/components/Footer/Footer.styles.ts
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: ${({ theme }) => theme.spacings.lg} ${({ theme }) => theme.spacings.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.md};
  margin-bottom: ${({ theme }) => theme.spacings.md};
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
  }
`;

export const CopyrightText = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;