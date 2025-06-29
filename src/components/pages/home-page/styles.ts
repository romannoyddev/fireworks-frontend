import styled from 'styled-components';
import Text from '../../styled/text/text';
import Ul from '../../styled/ul/ul';

export const HeroSection = styled.section`
  padding: 30px 0;
`;

export const HeroTitle = styled(Text)`
  text-align: center;
  text-transform: uppercase;
`;

export const HeroDescription = styled(Text)`
  text-align: center;
  margin-top: 15px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    text-align: start;
  }
`;

export const HeroButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 450px;
    gap: 15px;
  }
`;

export const FeaturedProducts = styled.section`
  padding: 30px 0;
`;

export const FeaturedProductsTitle = styled(Text)`
  text-align: center;
  text-transform: uppercase;
`;

export const FeaturedProductsList = styled(Ul)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 15px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
