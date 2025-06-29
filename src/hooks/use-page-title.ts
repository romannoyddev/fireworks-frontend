import { useLayoutEffect } from 'react';
import { useLocation, matchRoutes } from 'react-router-dom';
import type { AppRoutes } from '../types/types';

const usePageTitle = (routes: AppRoutes, defaultTitle = 'Fireworks') => {
  const location = useLocation();

  useLayoutEffect(() => {
    const matches = matchRoutes(routes, location);

    if (matches) {
      const lastMatch = [...matches].reverse().find((match) => match.route.title);

      if (lastMatch?.route.title) {
        const { route, params } = lastMatch;

        const safeParams: Record<string, string> = {};
        for (const key in params) {
          const value = params[key];
          if (typeof value === 'string') {
            safeParams[key] = value;
          }
        }

        const title = typeof route.title === 'function' ? route.title(safeParams) : route.title;

        document.title = title ?? defaultTitle;
        return;
      }
    }

    document.title = defaultTitle;
  }, [location, routes, defaultTitle]);
};

export default usePageTitle;
