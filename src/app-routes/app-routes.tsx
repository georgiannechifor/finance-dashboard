import { Outlet, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import { Dashboard } from '../pages/dashboard/dashboard';
import { APP_ROUTES_CONST } from './app-routes.const';

export const AppRoutes = () => (
  <Layout className="bg-white h-screen flex items-center justify-center">
    <Routes>
      <Route element={<Outlet />}>
        <Route path={APP_ROUTES_CONST.root} element={<Dashboard />} />
      </Route>
    </Routes>
  </Layout>
);
