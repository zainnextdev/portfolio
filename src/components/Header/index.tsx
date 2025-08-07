// src/components/Header/index.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { 
  HeaderNav, 
  NavContainer, 
  LogoLink, 
  NavLinks, 
  NavLink,
  MobileMenuButton,
  ChevronWrapper,
  MobileNavPanel,
  MobileNavLinks,
  MobileNavLink,
} from './Header.styles';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const panelVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto', 
      transition: { duration: 0.3, ease: 'easeInOut' } 
    },
  };

  return (
    <HeaderNav $isScrolled={isScrolled}>
      <NavContainer>
        <LogoLink href="/">ZK.</LogoLink>
        
        {/* Desktop Navigation */}
        <NavLinks>
          <NavLink href="/#projects">Work</NavLink>
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#contact">Contact</NavLink>
        </NavLinks>

        {/* Refined Mobile Navigation Button */}
        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <ChevronWrapper
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaChevronDown />
          </ChevronWrapper>
        </MobileMenuButton>
      </NavContainer>

      {/* Mobile Drop-down Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileNavPanel
            $isScrolled={isScrolled} 
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <MobileNavLinks>
              <MobileNavLink href="/#projects" onClick={() => setIsMenuOpen(false)}>
                Work
              </MobileNavLink>
              <MobileNavLink href="/#about" onClick={() => setIsMenuOpen(false)}>
                About
              </MobileNavLink>
              <MobileNavLink href="/#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </MobileNavLink>
            </MobileNavLinks>
          </MobileNavPanel>
        )}
      </AnimatePresence>
    </HeaderNav>
  );
};

export default Header;