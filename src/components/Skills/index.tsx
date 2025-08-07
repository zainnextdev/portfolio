// src/components/Skills/index.tsx
'use client';
import React from 'react';
import { Variants } from 'framer-motion';
import { skillsData } from '@/data/skills';
import { Section } from '@/components/Section';
import { SectionHeader, SectionTitle, SectionSubtitle } from '@/components/SectionHeader';
import { SkillCategoryCard, CategoryTitle, SkillsGrid, SkillItem, SkillIcon, SkillName } from './Skills.styles';

const Skills = () => {
  const cardVariants: Variants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', bounce: 0.2, duration: 0.8 },
    },
  };

  const itemVariants: Variants = {
    offscreen: { scale: 0.5, opacity: 0 },
    onscreen: { scale: 1, opacity: 1 },
  };

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>My Toolkit</SectionTitle>
        <SectionSubtitle>
          A curated collection of the languages, frameworks, and technologies I use to architect and build modern web applications.
        </SectionSubtitle>
      </SectionHeader>
      
      {skillsData.map((category, index) => (
        <SkillCategoryCard
          key={category.title}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <CategoryTitle>{category.title}</CategoryTitle>
          <SkillsGrid>
            {category.skills.map(skill => (
              <SkillItem
                key={skill.name}
                variants={itemVariants}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <SkillIcon as={skill.Icon} />
                <SkillName>{skill.name}</SkillName>
              </SkillItem>
            ))}
          </SkillsGrid>
        </SkillCategoryCard>
      ))}
    </Section>
  );
};

export default Skills;