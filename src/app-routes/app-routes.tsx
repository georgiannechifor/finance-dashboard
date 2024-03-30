import { Outlet, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import { MenuLayout } from '../layouts/menu-layout';
import { Dashboard } from '../pages/dashboard/dashboard';
import { APP_ROUTES_CONST } from './app-routes.const';

export const AppRoutes = () => (
  <Layout className="bg-white h-screen flex items-center justify-center">
    <Routes>
      <Route path={APP_ROUTES_CONST.root} element={<Outlet />}>
        <Route path={APP_ROUTES_CONST.financeDashboard} element={<MenuLayout />}>
          <Route index element={<Dashboard />} />
          <Route path={APP_ROUTES_CONST.dashboard} element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  </Layout>
);
