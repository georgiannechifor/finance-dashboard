import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app-routes/app-routes';
import { APP_ROUTES_CONST } from './app-routes/app-routes.const';
import './utils/font-awesome-icons';
import 'antd/dist/reset.css';
import './index.scss';
import '../ant-global-overrides.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={APP_ROUTES_CONST.root}>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
