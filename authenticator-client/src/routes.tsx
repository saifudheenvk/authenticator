import { AuthTabs } from "@pages/auth";
import Dashboard from "@pages/dashboard/Dashboard";
import Error from "@pages/error/Error";
import ProtectedRoute from "@pages/ProtectedRoute";
import { useRoutes } from 'react-router-dom';

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <AuthTabs/>
    },
    {
      path: '/app/dashboard',
      element: (
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
      )
    },
    {
      path: '*',
      element: <Error/>
    }
  ]);

  return routes;
};


export default AppRoutes;
