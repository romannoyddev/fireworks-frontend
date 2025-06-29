import styled from 'styled-components';
import Ul from '../../styled/ul/ul';
import { NavLink } from 'react-router-dom';

export const CatalogSidebarStyled = styled.aside`
  display: flex;
  justify-content: center;
`;

export const CatalogSidebarNavigationList = styled(Ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CatalogSidebarNavigationLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.blue};
  text-decoration: none;

  &:hover {
    opacity: 0.6;
  }

  &.active {
    color: ${({ theme }) => theme.colors.purple};
    opacity: 1;
    cursor: default;
  }
`;
