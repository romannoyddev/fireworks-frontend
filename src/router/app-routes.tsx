import { useRoutes } from 'react-router-dom';
import { appRoutes } from './routes';
import usePageTitle from '../hooks/use-page-title';

const AppRoutes = () => {
  usePageTitle(appRoutes);
  const element = useRoutes(appRoutes);

  return element;
};

export default AppRoutes;
