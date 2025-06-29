import type { DefaultTheme } from 'styled-components';

export interface FeaturedProductsCardProps {
  color: keyof DefaultTheme['colors'];
  title: string;
  imgUrl: string;
  imgWidth: string | number;
  imgHeight: string | number;
}

export interface FeaturedProductsCardStyledProps {
  $color: keyof DefaultTheme['colors'];
}
