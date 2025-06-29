import { BrowserRouter } from 'react-router-dom';
import SiteHeader from './components/layout/site-header/site-header';
import AppRoutes from './router/app-routes';

function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <AppRoutes />
      <footer>created by @romannoyd</footer>
    </BrowserRouter>
  );
}

export default App;
