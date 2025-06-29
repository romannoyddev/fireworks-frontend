import styled, { css, keyframes } from 'styled-components';
import Ul from '../../styled/ul/ul';
import Button from '../../styled/button/button';
import type { NavigationListProps } from './types';
import { NavLink } from 'react-router-dom';

const slideDown = keyframes`
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const SiteNavigationStyled = styled.nav``;

export const SiteNavigationOpenButton = styled(Button)`
  color: ${({ theme }) => theme.colors.purple};
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const SiteNavigationCloseButton = styled(Button)`
  color: ${({ theme }) => theme.colors.purple};
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const SiteNavigationList = styled(Ul)<NavigationListProps>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  right: 0;
  min-width: 320px;
  padding: 25px 20px;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 10;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      animation: ${slideDown} 0.3s ease forwards;
    `}

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    position: static;
    flex-direction: row;
    min-width: auto;
    padding: 0;
    background-color: transparent;
    animation: none;
  }
`;

export const SiteNavigationLink = styled(NavLink)`
  display: block;
  color: ${({ theme }) => theme.colors.purple};
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    &.active {
      text-decoration: underline;
      cursor: default;
    }
  }
`;
