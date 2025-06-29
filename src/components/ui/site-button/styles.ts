import styled from 'styled-components';
import type { SiteButtonProps } from './types';

export const SiteButtonStyled = styled.a<SiteButtonProps>`
  display: block;
  border: 2px solid ${({ theme, $buttonColor }) => theme.colors[$buttonColor]};
  color: ${({ theme, $buttonColor }) => theme.colors[$buttonColor]};
  border-radius: 25px;
  text-align: center;
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;
`;
