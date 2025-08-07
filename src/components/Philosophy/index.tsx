// src/components/Philosophy/index.tsx

'use client';

import React from 'react';
import { Variants } from 'framer-motion';
import { Section } from '@/components/Section';
import {
  PhilosophyGrid,
  PhilosophyCard,
  CardIcon,
  CardHeading,
  CardBody,
} from './Philosophy.styles';
import { FaLayerGroup, FaCode, FaBullhorn } from 'react-icons/fa'; // Icons for each card

const Philosophy = () => {
  // Animation for the card to fade in as it enters the viewport
  const cardVariants: Variants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <Section>
      <PhilosophyGrid>
        <PhilosophyCard
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
        >
          <CardIcon><FaLayerGroup /></CardIcon>
          <CardHeading>Deep Logic & Systems</CardHeading>
          <CardBody>
            My expertise in C++ and C# provides a deep understanding of performance and robust architecture—the bedrock of any powerful application.
          </CardBody>
        </PhilosophyCard>

        <PhilosophyCard
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
        >
          <CardIcon><FaCode /></CardIcon>
          <CardHeading>Modern Web & Full-Stack</CardHeading>
          <CardBody>
            I construct seamless applications using Next.js, ensuring dynamic functionality, ironclad security, and a flawless user experience.
          </CardBody>
        </PhilosophyCard>

        <PhilosophyCard
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
        >
          <CardIcon><FaBullhorn /></CardIcon>
          <CardHeading>Strategic Growth & Design</CardHeading>
          <CardBody>
            A product is only successful if it&apos;s seen. My skills in SEO and marketing ensure your project not only performs perfectly but also captivates its audience.
          </CardBody>
        </PhilosophyCard>
      </PhilosophyGrid>
    </Section>
  );
};

export default Philosophy;