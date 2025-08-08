'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import {
  FooterContainer,
  SocialLinks,
  SocialLink,
  CopyrightText
} from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <SocialLinks>
        <SocialLink 
          href="https://github.com/zainnextdev"
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
        >
          <FaGithub />
        </SocialLink>
        <SocialLink 
          href="https://linkedin.com/in/zain-khalid-dev"
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </SocialLink>
        <SocialLink 
          href="mailto:zain.nextdev@gmail.com" 
          aria-label="Email"
        >
          <FaEnvelope />
        </SocialLink>
      </SocialLinks>
      <CopyrightText>
        © {new Date().getFullYear()} Zain Khalid. All Rights Reserved.
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;