import SectionContainer from '../../styled/section-container/section-container';
import VisuallyHidden from '../../styled/visually-hidden/visually-hidden';
import { CatalogPageStyled, CatalogProductsBoard } from './styles';
import { useParams } from 'react-router-dom';
import CatalogProductsCard from '../../ui/catalog-products-card/catalog-products-card';
import CatalogSidebar from '../../ui/catalog-sidebar/catalog-sidebar';
import { useEffect, useState } from 'react';
import type { CatalogProduct } from '../../../types/types';
import axios from 'axios';

const CatalogPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const currentCategory = category ?? 'all';

  const [products, setProducts] = useState<CatalogProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const url =
      currentCategory === 'all'
        ? 'https://fireworks-backend.onrender.com/products'
        : `https://fireworks-backend.onrender.com/products/type/${currentCategory}`;

    axios
      .get<CatalogProduct[]>(url)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        setError(err.message || 'Ошибка при загрузке данных');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentCategory]);

  return (
    <CatalogPageStyled>
      <VisuallyHidden as="h1">Catalog</VisuallyHidden>
      <SectionContainer>
        <CatalogSidebar />
        <section>
          {loading && <p>Загрузка...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {!loading && !error && products.length > 0 ? (
            <CatalogProductsBoard>
              {products.map((product) => (
                <CatalogProductsCard key={product._id} product={product} />
              ))}
            </CatalogProductsBoard>
          ) : (
            !loading && !error && <p>not found</p>
          )}
        </section>
      </SectionContainer>
    </CatalogPageStyled>
  );
};

export default CatalogPage;
