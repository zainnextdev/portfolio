'use client';

import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import {
  FooterContainer,
  SocialLinks,
  SocialLink,
  CopyrightText
} from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="mailto:zain.nextdev@gmail.com" aria-label="Email">
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