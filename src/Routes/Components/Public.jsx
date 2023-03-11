import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../Context/AuthContext';
import { appRoutes } from '../../Config';

const { ROUTES } = appRoutes;

function PublicRoute() {
  const { isAuthenticated, loadingAuth } = useAuth();

  if (loadingAuth) return null;

  if (isAuthenticated) {
    return <Navigate to={ROUTES.RESTAURANTS.absolutePath} />;
  }

  return <Outlet />;
}

export default PublicRoute;
