import type { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';

type CustomFields = {
  title?: string | ((params: Record<string, string>) => string);
};

export type AppIndexRoute = IndexRouteObject & CustomFields;
export type AppNonIndexRoute = Omit<NonIndexRouteObject, 'children'> &
  CustomFields & {
    children?: AppRoutes;
  };

export type AppRoute = AppIndexRoute | AppNonIndexRoute;
export type AppRoutes = AppRoute[];

export interface CatalogProduct {
  _id: string;
  type: string;
  title: string;
  price: string;
  description: string;
  imgUrl: string;
}
