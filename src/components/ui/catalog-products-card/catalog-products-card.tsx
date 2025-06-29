import type { CatalogProduct } from '../../../types/types';
import {
  CatalogProductsCardImg,
  CatalogProductsCardStyled,
  CatalogProductsCardText
} from './styles';

type Props = {
  product: CatalogProduct;
};

const CatalogProductsCard: React.FC<Props> = ({ product }) => {
  return (
    <CatalogProductsCardStyled>
      <CatalogProductsCardImg src={product.imgUrl} alt={product.title} width={100} height={100} />
      <CatalogProductsCardText as="h3" $textColor="green" $textSize="l">
        {product.title}
      </CatalogProductsCardText>
      <CatalogProductsCardText as="p" $textColor="green" $textSize="m">
        $ {product.price}
      </CatalogProductsCardText>
    </CatalogProductsCardStyled>
  );
};

export default CatalogProductsCard;
