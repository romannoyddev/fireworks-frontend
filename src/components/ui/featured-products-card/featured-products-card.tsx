import Img from '../../styled/img/img';
import { FeaturedProductsCardStyled, FeaturedProductsCardTitle } from './styles';
import type { FeaturedProductsCardProps } from './types';

const FeaturedProductsCard: React.FC<FeaturedProductsCardProps> = ({
  title,
  color,
  imgUrl,
  imgHeight,
  imgWidth
}) => {
  return (
    <FeaturedProductsCardStyled $color={color}>
      <Img
        src={`${import.meta.env.BASE_URL}${imgUrl}`}
        alt={title}
        width={imgWidth}
        height={imgHeight}
      />
      <FeaturedProductsCardTitle as="h3" $textColor={color} $textSize="s">
        {title}
      </FeaturedProductsCardTitle>
    </FeaturedProductsCardStyled>
  );
};

export default FeaturedProductsCard;
