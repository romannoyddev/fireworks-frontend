import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Comic Neue';
    src: url('${import.meta.env.BASE_URL}fonts/comic-neue-v8-latin-300.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Comic Neue';
    src: url('${import.meta.env.BASE_URL}fonts/comic-neue-v8-latin-regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Comic Neue';
    src: url('${import.meta.env.BASE_URL}fonts/comic-neue-v8-latin-700.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  #root,
  body {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  html {
    margin-right: calc((100vw - 100%) * -1);
    overflow-x: hidden;
  }

  body {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.purple};
    font-family: 'Comic Neue', sans-serif;
  }
`;
