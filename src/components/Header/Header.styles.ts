// src/components/Header/Header.styles.ts
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const HeaderNav = styled(motion.header)<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: ${({ theme }) => theme.spacings.sm} ${({ theme }) => theme.spacings.md};
  
  // Dynamic background effect based on scroll position
  background-color: ${({ $isScrolled }) => $isScrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent'};
  backdrop-filter: blur(${({ $isScrolled }) => $isScrolled ? '10px' : '0px'});
  border-bottom: 1px solid ${({ $isScrolled, theme }) => $isScrolled ? theme.colors.border : 'transparent'};

  transition: background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const LogoLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  font-size: 1.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacings.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none; // Hide on mobile for now; a mobile menu is a future enhancement
  }
`;

export const NavLink = styled(Link)`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;