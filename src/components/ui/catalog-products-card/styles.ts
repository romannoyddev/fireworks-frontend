import styled from 'styled-components';
import Img from '../../styled/img/img';
import Text from '../../styled/text/text';

export const CatalogProductsCardStyled = styled.li`
  border: 3px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  padding: 10px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(0.95);
  }
`;

export const CatalogProductsCardImg = styled(Img)`
  margin: 0 auto;
`;

export const CatalogProductsCardText = styled(Text)`
  text-align: center;
  margin-top: 10px;
`;
