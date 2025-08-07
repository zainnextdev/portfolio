// src/components/Header/index.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { HeaderNav, NavContainer, LogoLink, NavLinks, NavLink } from './Header.styles';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state if user scrolls down more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderNav $isScrolled={isScrolled}>
      <NavContainer>
        <LogoLink href="/">ZK.</LogoLink>
        <NavLinks>
          <NavLink href="/#projects">Work</NavLink>
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#contact">Contact</NavLink>
        </NavLinks>
      </NavContainer>
    </HeaderNav>
  );
};

export default Header;