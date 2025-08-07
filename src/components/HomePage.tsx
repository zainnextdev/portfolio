'use client';

import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import About from '@/components/About';
import { Section } from '@/components/Section';
import { SectionHeader, SectionTitle, SectionSubtitle } from '@/components/SectionHeader';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { HorizontalShowcase } from '@/components/HorizontalShowcase';
import Performance from '@/components/Performance';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';

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
      <section id="projects"> {/* Use a section tag with an ID */}
        <Section>
          <SectionHeader>
            <SectionTitle>The Blueprint</SectionTitle>
            <SectionSubtitle>
              A selection of my featured work...
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