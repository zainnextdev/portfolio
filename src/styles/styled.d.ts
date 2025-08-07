// src/styles/styled.d.ts

import 'styled-components';
import { theme } from './theme';

// Infer the type from the theme object itself
type Theme = typeof theme;

// Use declaration merging to extend the module directly
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}