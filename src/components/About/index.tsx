// src/components/About/index.tsx

'use client';

import React from 'react';
import { Variants } from 'framer-motion';
import { Section } from '@/components/Section';
import {
  AboutContainer,
  ImageWrapper,
  ProfileImage,
  TextContent,
  AboutHeading,
  AboutBody,
} from './About.styles';
import { CTAButton } from '../Hero/Hero.styles'; // Reusing our awesome button

const About = () => {
  const animationVariants: Variants = {
    offscreen: {
      x: -100, // Starts off-screen to the left
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1,
      },
    },
  };

  const imageVariants: Variants = {
    offscreen: {
      scale: 0.8,
      opacity: 0,
    },
    onscreen: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut'
      },
    },
  };

  return (
    <Section>
      <AboutContainer>
        <ImageWrapper
          variants={imageVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <ProfileImage
            src="/profile.jpg"
            alt="Zain Khalid - Digital Architect"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </ImageWrapper>
        <TextContent
          variants={animationVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          <AboutHeading>
            The Architect Behind the Code<span>.</span>
          </AboutHeading>

          <AboutBody>
            Hello, I&apos;m Zain. I&apos;m a developer with a unique blend of deep technical skill and a keen eye for design. My background in C++ and C# means I don&apos;t just build websites; I understand how to make them truly fast and efficient from the ground up.
            <br/><br/>
            I specialize in turning complex challenges into clean, user-friendly, and high-performing web applications. For me, a successful project isn&apos;t just about great code—it&apos;s about creating a valuable tool that helps your business grow and your users succeed.
          </AboutBody>
          
          <CTAButton as="a" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            View My Résumé
          </CTAButton>
        </TextContent>
      </AboutContainer>
    </Section>
  );
};

export default About;