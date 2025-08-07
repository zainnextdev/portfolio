// src/components/Hero/index.tsx

'use client';

import React from 'react';
import { Variants } from 'framer-motion'; // Import the Variants type
import {
  HeroContainer,
  Name,
  MainHeading,
  SubHeading,
  CTAButton,
  BackgroundBlob,
} from './Hero.styles';

const Hero = () => {
  // Explicitly type the variants object
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Explicitly type this one as well
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeInOut', // This string is valid, but typing the object helps TS
      },
    },
  };

  return (
    <HeroContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <BackgroundBlob
        animate={{
          x: [0, 100, 0, -50, 0],
          y: [0, -50, 50, 100, 0],
          rotate: [0, 10, -10, 5, 0],
          scale: [1, 1.1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <Name variants={itemVariants}>ZAIN KHALID</Name>

      <MainHeading variants={itemVariants}>
        Digital experiences that perform and inspire.
      </MainHeading>

      <SubHeading variants={itemVariants}>
        I build fast, secure, and user-friendly websites that help businesses succeed, from initial concept to final launch.
      </SubHeading>

      <CTAButton variants={itemVariants}>
        Explore The Blueprint
      </CTAButton>
    </HeroContainer>
  );
};

export default Hero;