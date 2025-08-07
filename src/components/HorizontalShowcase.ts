import styled from 'styled-components';

export const HorizontalShowcase = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.md};
  padding: ${({ theme }) => theme.spacings.md} 0;
  
  // The magic for horizontal scrolling
  overflow-x: auto;
  scroll-snap-type: x mandatory; // Snaps cards into place
  
  // Hiding the scrollbar for a cleaner look across browsers
  -ms-overflow-style: none;  // IE and Edge
  scrollbar-width: none;  // Firefox
  &::-webkit-scrollbar {
    display: none; // Chrome, Safari, and Opera
  }

  // Add some padding on the sides so cards don't touch the edge
  // This is a trick to make it look like it's inside the main container
  &::before, &::after {
    content: '';
    width: calc((100vw - 1200px) / 2); // Adjust 1200px to match your Section's max-width

    @media (max-width: 1200px) {
      width: ${({ theme }) => theme.spacings.md};
    }
  }
`;