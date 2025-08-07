'use client'; // This is the key! This whole component is for the client.

import React from 'react';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '@/lib/registry';
import { theme } from '@/styles/theme';
import { GlobalStyles } from '@/styles/GlobalStyles';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}