import styled from 'styled-components';
import Text from '../../styled/text/text';
import type { FeaturedProductsCardStyledProps } from './types';

export const FeaturedProductsCardStyled = styled.li<FeaturedProductsCardStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${({ theme, $color }) => theme.colors[$color]};
  border-radius: 20px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const FeaturedProductsCardTitle = styled(Text)`
  text-align: center;
  margin-top: 10px;
`;
