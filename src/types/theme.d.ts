import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      green: string;
      pink: string;
      blue: string;
      purple: string;
      border: string;
    };
    breakpoints: {
      desktop: string;
    };
  }
}
