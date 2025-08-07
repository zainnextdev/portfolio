// src/app/projects/[slug]/page.tsx

import React from 'react';
import { projects, Project } from '@/data/projects';
import { notFound } from 'next/navigation';
import ProjectDetailClient from './ProjectDetailClient';

// This function for generating static pages at build time is correct and remains.
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// This helper function for data fetching is also correct and remains.
async function getProject(slug: string): Promise<Project | undefined> {
  // In a real app, this could be an async API call: await fetch(...)
  return projects.find((p) => p.slug === slug);
}


// --- THE DEFINITIVE FIX IS HERE ---

// 1. Define a 'Props' type that accurately reflects what Next.js passes to a page component.
// This includes 'params' and 'searchParams'.
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// 2. The component is async and uses the new 'Props' type.
// We are no longer destructuring in the function signature.
export default async function ProjectPage(props: Props) {
  // 3. Destructuring now happens safely inside the function body.
  const { slug } = props.params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  // Pass the clean, resolved data as a prop to our Client Component.
  return <ProjectDetailClient project={project} />;
}