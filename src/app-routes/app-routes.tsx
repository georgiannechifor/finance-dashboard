import { Outlet, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import { MenuLayout } from '../layouts/menu-layout';
import { Dashboard } from '../pages/dashboard';
import { Merchants } from '../pages/merchants';
import { Wallets } from '../pages/wallets';
import { APP_ROUTES_CONST } from './app-routes.const';

export const AppRoutes = () => (
  <Layout className="bg-white h-screen flex items-center justify-center">
    <Routes>
      <Route path={APP_ROUTES_CONST.root} element={<Outlet />}>
        <Route path={APP_ROUTES_CONST.financeDashboard} element={<MenuLayout />}>
          <Route index element={<Dashboard />} />
          <Route path={APP_ROUTES_CONST.dashboard} element={<Dashboard />} />
          <Route path={APP_ROUTES_CONST.wallets} element={<Wallets />} />
          <Route path={APP_ROUTES_CONST.merchants} element={<Merchants />} />
        </Route>
      </Route>
    </Routes>
  </Layout>
);
