// src/components/Hero/index.tsx
'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  HeroContainer, Name, MainHeading, SubHeading, CTAButton, BackgroundBlob
} from './Hero.styles';

const MemoizedName = React.memo(Name);
const MemoizedMainHeading = React.memo(MainHeading);
const MemoizedSubHeading = React.memo(SubHeading);

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
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
      <MemoizedName variants={itemVariants}>Zain Khalid</MemoizedName>
      <MemoizedMainHeading variants={itemVariants}>
        Digital experiences that perform and inspire.
      </MemoizedMainHeading>
      <MemoizedSubHeading variants={itemVariants}>
        I build fast, secure, and user-friendly websites that help businesses succeed, from initial concept to final launch.
      </MemoizedSubHeading>
      <CTAButton 
        as="a"
        href="/#projects"
        variants={itemVariants}
      >
        Explore The Blueprint
      </CTAButton>
    </HeroContainer>
  );
};

export default React.memo(Hero);