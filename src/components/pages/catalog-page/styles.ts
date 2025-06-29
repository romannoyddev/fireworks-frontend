import styled from 'styled-components';
import Ul from '../../styled/ul/ul';
import Main from '../../styled/main/main';

export const CatalogPageStyled = styled(Main)`
  padding: 15px 0;
`;

export const CatalogProductsBoard = styled(Ul)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 25px;
`;
