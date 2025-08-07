// src/components/ProjectCard/ProjectCard.styles.ts

import styled, { css } from 'styled-components';
import Link from 'next/link';

// Custom background using CSS gradients to create a high-tech, abstract and subtle visual flair.
// This ensures the cards are not just flat, colored boxes.
const cardBackground = css`
  background-color: #1a1a1a;
  background-image: 
    radial-gradient(circle at 100% 0%, ${({ theme }) => theme.colors.accent}1A 0%, transparent 30%),
    radial-gradient(circle at 0% 100%, ${({ theme }) => theme.colors.accent}1A 0%, transparent 25%);
`;

// The main component is changed from a div to a Next.js Link for semantic HTML and proper navigation.
// It is styled as a block element to take up the full dimensions.
export const CardLink = styled(Link)`
  display: block;
  position: relative;
  width: 400px;
  height: 250px; // A shorter, landscape-oriented height since there's no primary image.
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  flex-shrink: 0; // Important for horizontal flex containers to prevent shrinking.
  cursor: pointer;
  text-decoration: none; // Removes the default underline from the link.
  color: inherit; // Ensures text inside inherits the color from the body.
  
  ${cardBackground}

  // Smooth transitions for hover effects to feel premium.
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  // A subtle lift and shadow effect on hover to provide feedback to the user.
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  }

  // Responsive adjustments for smaller screens.
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 320px;
    height: 200px;
  }
`;

// A container for the text content, using flexbox to space out the elements.
export const CardContent = styled.div`
  position: relative;
  z-index: 2; // Ensures content is above any potential pseudo-elements or backgrounds.
  padding: ${({ theme }) => theme.spacings.md};
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Pushes the title/category to the top and the prompt to the bottom.
  height: 100%;
`;

export const Category = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.2;
  margin-top: 0.25rem;
`;

// The "View Project" prompt at the bottom of the card.
export const ViewProjectPrompt = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
  align-self: flex-start; // Ensures it doesn't stretch to full width.

  svg {
    transition: transform 0.3s ease;
  }

  // A micro-interaction: the arrow moves slightly to the right on hover, guiding the user.
  ${CardLink}:hover & svg {
    transform: translateX(5px);
  }
`;