// src/app/projects/[slug]/ProjectDetailClient.tsx

'use client'; // This directive is essential as we are using hooks and styled-components.

import styled from 'styled-components';
import { Project } from '@/data/projects';
import { Section } from '@/components/Section';
import ImageGallery from '@/components/ImageGallery';
import { TechList, TechTag, LinkContainer, ProjectLink } from '@/styles/common.styles';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Styled components defined specifically for this page layout.
const ProjectHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacings.lg};
`;

const ProjectTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.display};
  margin-bottom: ${({ theme }) => theme.spacings.xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

const ProjectCategory = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

const ProjectDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.spacings.lg};
  margin-top: ${({ theme }) => theme.spacings.lg};

 @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div``;

const Sidebar = styled.div`
  position: sticky;
  top: 120px; // Aligns with the header height + some padding
  align-self: start; // Prevents the sidebar from stretching
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: static; // Remove the "sticky" behavior on mobile so it just stacks normally
  }
`;

const DetailSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.md};

  h3 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const SectionHeading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.8;
  font-size: 1.1rem;
`;


interface ProjectDetailClientProps {
  project: Project;
}

const ProjectDetailClient: React.FC<ProjectDetailClientProps> = ({ project }) => {
  return (
    <Section as="main" style={{paddingTop: '8rem', paddingBottom: '8rem'}}>
      <ProjectHeader>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectCategory>{project.category}</ProjectCategory>
      </ProjectHeader>

      <ImageGallery images={project.images} />

      <ProjectDetailsGrid>
        <MainContent>
          <SectionHeading>About This Project</SectionHeading>
          
          {/* Render structured details if they exist, otherwise fall back to the simple description */}
          {project.details && project.details.length > 0 ? (
            project.details.map(detail => (
              <DetailSection key={detail.heading}>
                <h3>{detail.heading}</h3>
                <Description>{detail.text}</Description>
              </DetailSection>
            ))
          ) : (
            <Description>{project.description}</Description>
          )}
        </MainContent>
        
        <Sidebar>
          <SectionHeading>Tech Stack & Links</SectionHeading>
          <TechList>
            {project.techStack.map(tech => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </TechList>

          <LinkContainer style={{marginTop: '2rem', flexDirection: 'column', alignItems: 'flex-start'}}>
            {project.liveLink && (
              <ProjectLink href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Live Site
              </ProjectLink>
            )}
            {project.githubLink && (
              <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub Repository
              </ProjectLink>
            )}
          </LinkContainer>
        </Sidebar>
      </ProjectDetailsGrid>
    </Section>
  );
};

export default ProjectDetailClient;