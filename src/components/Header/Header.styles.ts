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
  
  // This pseudo-element creates the background for the main header bar.
  // It is the source of truth for our styling.
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ $isScrolled }) => $isScrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent'};
    backdrop-filter: blur(${({ $isScrolled }) => $isScrolled ? '10px' : '0px'});
    border-bottom: 1px solid ${({ $isScrolled, theme }) => $isScrolled ? theme.colors.border : 'transparent'};
    transition: background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease;
    z-index: -1;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacings.sm} ${({ theme }) => theme.spacings.md};
  position: relative;
`;

// ... LogoLink, NavLinks, NavLink, MobileMenuButton, ChevronWrapper are all correct and unchanged ...
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
    display: none;
  }
`;

export const NavLink = styled(Link)`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;

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

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

export const ChevronWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
`;


// --- THE FINAL, REFINED FIX IS HERE ---
export const MobileNavPanel = styled(motion.div)<{ $isScrolled: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  
  // The panel's background is now directly and identically tied to the header's state.
  background-color: ${({ $isScrolled }) => $isScrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent'};
  backdrop-filter: blur(${({ $isScrolled }) => $isScrolled ? '10px' : '0px'});
  border-bottom: 1px solid ${({ $isScrolled, theme }) => $isScrolled ? theme.colors.border : 'transparent'};

  border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  
  // Ensure the transition matches the header's for a synchronized effect.
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease;
`;
// -------------------------------------

export const MobileNavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacings.sm} 0;
`;

export const MobileNavLink = styled(Link)`
  padding: ${({ theme }) => theme.spacings.sm} ${({ theme }) => theme.spacings.md};
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  font-weight: 500;
  text-align: center;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent}20;
    color: ${({ theme }) => theme.colors.primary};
  }
`;