// src/components/HomePage.tsx
'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import About from '@/components/About';
import { Section } from '@/components/Section';
import { SectionHeader, SectionTitle, SectionSubtitle } from '@/components/SectionHeader';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { HorizontalShowcase } from '@/components/HorizontalShowcase';

const Skills = dynamic(() => import('@/components/Skills'));
const Performance = dynamic(() => import('@/components/Performance'));
const Contact = dynamic(() => import('@/components/Contact'));

const HomePage = () => {
  return (
    <main>
      <Hero />
      <div id="about">
        <Philosophy />
        <About />
      </div>
      <Skills />
      <Performance />

      <section id="projects">
        <Section>
          <SectionHeader>
            <SectionTitle>The Blueprint</SectionTitle>
            <SectionSubtitle>
              A selection of my featured work, showcasing a commitment to
              quality, performance, and user-centric design.
            </SectionSubtitle>
          </SectionHeader>
        </Section>
        <HorizontalShowcase>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </HorizontalShowcase>
      </section>

      <Contact />
    </main>
  );
};

export default HomePage;