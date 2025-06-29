import type { ReactNode } from 'react';
import type { DefaultTheme } from 'styled-components';

export interface SiteButtonProps {
  children: ReactNode;
  $buttonColor: keyof DefaultTheme['colors'];
}
