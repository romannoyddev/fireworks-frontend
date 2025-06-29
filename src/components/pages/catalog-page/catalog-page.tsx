import SectionContainer from '../../styled/section-container/section-container';
import VisuallyHidden from '../../styled/visually-hidden/visually-hidden';
import { CatalogPageStyled, CatalogProductsBoard } from './styles';
import catalogProductsMocks from '../../../mocks/catalog-products';
import { useParams } from 'react-router-dom';
import CatalogProductsCard from '../../ui/catalog-products-card/catalog-products-card';
import CatalogSidebar from '../../ui/catalog-sidebar/catalog-sidebar';

const CatalogPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();

  const currentCategory = category ?? 'all';

  const filteredProducts =
    currentCategory !== 'all'
      ? catalogProductsMocks.filter((product) => product.productCategory === currentCategory)
      : catalogProductsMocks;

  return (
    <CatalogPageStyled>
      <VisuallyHidden as="h1">Catalog</VisuallyHidden>
      <SectionContainer>
        <CatalogSidebar />
        <section>
          {filteredProducts.length > 0 ? (
            <CatalogProductsBoard>
              {filteredProducts.map((product) => (
                <CatalogProductsCard key={product.productId} product={product} />
              ))}
            </CatalogProductsBoard>
          ) : (
            <p>not found</p>
          )}
        </section>
      </SectionContainer>
    </CatalogPageStyled>
  );
};

export default CatalogPage;
