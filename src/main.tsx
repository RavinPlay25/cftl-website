import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider, theme as antdTheme } from 'antd';
import 'antd/dist/reset.css';
import './styles/global.css';
import { AppRoutes } from './routes/AppRoutes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        algorithm: antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: '#E60023',
          colorInfo: '#E60023',
          colorSuccess: '#C8102E',
          colorWarning: '#E60023',
          colorText: '#1F1F1F',
          colorTextSecondary: '#6B7280',
          colorBgBase: '#FFFFFF',
          colorBgLayout: '#F8F8F8',
          borderRadius: 10,
          fontSize: 16,
          controlHeight: 42,
        },
        components: {
          Button: {
            borderRadius: 10,
            colorPrimaryHover: '#C8102E',
            colorPrimaryActive: '#A90F27',
          },
          Card: {
            borderRadiusLG: 16,
          },
          Menu: {
            itemColor: '#4B5563',
            itemSelectedColor: '#E60023',
            itemHoverColor: '#E60023',
            itemBg: 'transparent',
            itemSelectedBg: '#FFE7EA',
          },
          Tabs: {
            itemSelectedColor: '#E60023',
            itemHoverColor: '#E60023',
            inkBarColor: '#E60023',
          },
        },
      }}
    >
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>,
);
