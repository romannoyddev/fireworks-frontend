import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme.ts';
import App from './app.tsx';
import { GlobalStyles } from './styles/global-styles.ts';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);
