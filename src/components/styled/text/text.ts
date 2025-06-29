import styled from 'styled-components';
import type { TextProps } from './types';

const sizeMap = {
  s: { mobile: '16px', desktop: '32px' },
  m: { mobile: '24px', desktop: '36px' },
  l: { mobile: '32px', desktop: '40px' }
} as const;

const Text = styled.span<TextProps>`
  font-size: ${({ $textSize }) => sizeMap[$textSize].mobile};
  font-weight: 400;
  color: ${({ theme, $textColor }) => theme.colors[$textColor]};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ $textSize }) => sizeMap[$textSize].desktop};
  }
`;

export default Text;
