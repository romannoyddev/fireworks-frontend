import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoStyled = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.green};
  text-decoration: none;
  text-transform: uppercase;
`;

export const LogoText = styled.span`
  font-size: 14px;
`;
