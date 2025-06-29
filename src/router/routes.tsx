import CatalogPage from '../components/pages/catalog-page/catalog-page';
import HomePage from '../components/pages/home-page/home-page';
import NotFoundPage from '../components/pages/not-found-page/not-found-page';
import type { AppRoutes } from '../types/types';

export const appRoutes: AppRoutes = [
  {
    path: '/',
    element: <HomePage />,
    title: 'Fireworks | home'
  },
  {
    path: '*',
    element: <NotFoundPage />,
    title: 'Fireworks | not found'
  },
  {
    path: 'catalog',
    title: 'Fireworks | catalog',
    children: [
      {
        index: true,
        element: <CatalogPage />,
        title: 'Fireworks | catalog'
      },
      {
        path: ':category',
        element: <CatalogPage />,
        title: ({ category }) => `Fireworks | catalog ${category}`
      }
    ]
  }
];
