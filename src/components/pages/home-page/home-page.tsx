import featuredProductsMocks from '../../../mocks/featured-products';
import Main from '../../styled/main/main';
import SectionContainer from '../../styled/section-container/section-container';
import FeaturedProductsCard from '../../ui/featured-products-card/featured-products-card';
import SiteButton from '../../ui/site-button/site-button';
import {
  FeaturedProducts,
  FeaturedProductsList,
  FeaturedProductsTitle,
  HeroButtonsWrapper,
  HeroDescription,
  HeroSection,
  HeroTitle
} from './styles';

const HomePage: React.FC = () => {
  return (
    <Main>
      <HeroSection>
        <SectionContainer>
          <HeroTitle as="h1" $textColor="pink" $textSize="l">
            Light up the night
          </HeroTitle>
          <HeroDescription as="p" $textColor="blue" $textSize="m">
            Hight quality fireworks <br />
            for any occasion
          </HeroDescription>
          <HeroButtonsWrapper>
            <SiteButton $buttonColor="pink">Shop now</SiteButton>
            <SiteButton $buttonColor="green">Learn more</SiteButton>
          </HeroButtonsWrapper>
        </SectionContainer>
      </HeroSection>
      <FeaturedProducts>
        <SectionContainer>
          <FeaturedProductsTitle as="h2" $textColor="purple" $textSize="m">
            Featured products
          </FeaturedProductsTitle>
          <FeaturedProductsList>
            {featuredProductsMocks.map((product, index) => (
              <FeaturedProductsCard
                key={index}
                color={product.color}
                title={product.title}
                imgUrl={product.imgUrl}
                imgHeight={product.imgHeight}
                imgWidth={product.imgWidth}
              />
            ))}
          </FeaturedProductsList>
        </SectionContainer>
      </FeaturedProducts>
    </Main>
  );
};

export default HomePage;
