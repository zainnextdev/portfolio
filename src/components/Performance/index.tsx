// src/components/Performance/index.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/Section';
import { SectionHeader, SectionTitle, SectionSubtitle } from '@/components/SectionHeader';
import { PerformanceContainer, TextContent, ImageWrapper, ScoreKey, ScoreKeyItem, ScoreIndicator } from './Performance.styles';
import PerformanceAccordion from '../PerformanceAccordion';

const Performance = () => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>The Performance Promise</SectionTitle>
        <SectionSubtitle>
          A beautiful website is useless if it&apos;s slow. I engineer applications for elite performance, ensuring the best user experience and top search rankings. Here's how Google measures it.
        </SectionSubtitle>
      </SectionHeader>
      <PerformanceContainer>
        <TextContent>
          <PerformanceAccordion />

          <ScoreKey>
            <h5>Understanding the Scores</h5>
            <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Google Lighthouse grades web pages on a scale of 0 to 100, with clear benchmarks for quality:
            </p>
            <ScoreKeyItem>
              <ScoreIndicator score="good" />
              <div><strong>90-100 (Good):</strong> Indicates an elite, highly-optimized experience. This is the target for all my projects.</div>
            </ScoreKeyItem>
            <ScoreKeyItem>
              <ScoreIndicator score="average" />
              <div><strong>50-89 (Needs Improvement):</strong> The page is usable but has performance issues that can lead to user frustration.</div>
            </ScoreKeyItem>
            <ScoreKeyItem>
              <ScoreIndicator score="poor" />
              <div><strong>0-49 (Poor):</strong> The page provides a slow, potentially frustrating experience for users.</div>
            </ScoreKeyItem>
          </ScoreKey>

        </TextContent>
        <ImageWrapper>
          <p style={{ textAlign: 'center', padding: '1rem', color: '#888', fontStyle: 'italic' }}>
            <strong>A Report Card from Google:</strong> The image shown is a real Lighthouse report from one of my projects. Achieving scores in the green &quot;Good&quot; range signals a high-quality site to both your visitors and Google&apos;s algorithm, directly impacting your business&apos;s credibility and visibility.
          </p>
          <Image
            src="/lighthouse-report.png"
            alt="Lighthouse performance report showing scores in the green 'Good' range (90-100)"
            width={1200}
            height={750}
            style={{ width: '100%', height: 'auto' }}
          />
        </ImageWrapper>
      </PerformanceContainer>
    </Section>
  );
};

export default Performance;