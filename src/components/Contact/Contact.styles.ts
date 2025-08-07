// src/components/Contact/Contact.styles.ts
import styled from 'styled-components';

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacings.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const ContactInfo = styled.div``;

export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.sm};
  margin-bottom: ${({ theme }) => theme.spacings.md};
  font-size: 1.1rem;

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.sm};
`;

export const Input = styled.input`
  background-color: #1a1a1a;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.8rem 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Textarea = styled.textarea`
  background-color: #1a1a1a;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.8rem 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 150px;
  outline: none;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const SubmitButton = styled.button`
  // Re-using styles from an existing component if you have a primary button, or define new ones
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
  padding: 0.8rem 2.5rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: opacity 0.3s ease;
  align-self: flex-start;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;