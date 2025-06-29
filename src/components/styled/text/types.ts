import type { DefaultTheme } from 'styled-components';

export interface TextProps {
  $textColor: keyof DefaultTheme['colors'];
  $textSize: 's' | 'm' | 'l';
}
