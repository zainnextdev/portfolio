// src/components/Header/index.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and Close icons
import { 
  HeaderNav, 
  NavContainer, 
  LogoLink, 
  NavLinks, 
  NavLink,
  MobileNavIcon,
  MobileNavPanel,
  MobileNavLinks
} from './Header.styles';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Prevent scrolling when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto'; // Cleanup on component unmount
    };
  }, [isMenuOpen]); // Re-run effect when menu state changes

  const panelVariants: Variants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'tween', duration: 0.3 } },
  };

  const navLinkVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <HeaderNav $isScrolled={isScrolled}>
        <NavContainer>
          <LogoLink href="/">ZK.</LogoLink>
          
          {/* Desktop Navigation */}
          <NavLinks>
            <NavLink href="/#projects">Work</NavLink>
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </NavLinks>

          {/* Mobile Navigation Icon */}
          <MobileNavIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileNavIcon>
        </NavContainer>
      </HeaderNav>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileNavPanel
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <MobileNavLinks>
              <NavLink 
                as={motion.a}
                href="/#projects" 
                onClick={() => setIsMenuOpen(false)}
                variants={navLinkVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                Work
              </NavLink>
              <NavLink 
                as={motion.a}
                href="/#about" 
                onClick={() => setIsMenuOpen(false)}
                variants={navLinkVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                About
              </NavLink>
              <NavLink 
                as={motion.a}
                href="/#contact" 
                onClick={() => setIsMenuOpen(false)}
                variants={navLinkVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                Contact
              </NavLink>
            </MobileNavLinks>
          </MobileNavPanel>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;