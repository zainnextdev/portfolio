// src/components/ProjectCard/index.tsx
'use client';
import React from 'react';
import { Project } from '@/data/projects';
import { FaArrowRight } from 'react-icons/fa';
import {
  CardLink,
  CardContent,
  Category,
  Title,
  ViewProjectPrompt
} from './ProjectCard.styles';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <CardLink href={`/projects/${project.slug}`}>
      <CardContent>
        <div>
          <Category>{project.category}</Category>
          <Title>{project.title}</Title>
        </div>
        <ViewProjectPrompt>
          View Project <FaArrowRight />
        </ViewProjectPrompt>
      </CardContent>
    </CardLink>
  );
};

export default ProjectCard;