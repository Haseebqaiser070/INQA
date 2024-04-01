import { Navigate, useRoutes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import Layout from './Layout/Layout';
import Contact from './pages/Contact/Contact';
import Plans from './pages/Plans/Plans';

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/contact', element: <Contact /> },
        { path: '/plans', element: <Plans /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);

  return routes;
}
