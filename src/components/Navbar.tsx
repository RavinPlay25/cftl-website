import { Button, Grid, Layout, Menu, Space } from 'antd';
import { GlobalOutlined, MenuOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { navItems } from '../data/content';
import cftlLogo from '../assets/cftl-logo.jpg';

const { Header } = Layout;
const { useBreakpoint } = Grid;

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const screens = useBreakpoint();
  const [open, setOpen] = useState(false);
  const activeKey = location.pathname.startsWith('/branches')
    ? '/branches'
    : location.pathname.startsWith('/gallery')
      ? '/gallery'
      : location.pathname;

  return (
    <Header
      className="site-navbar"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        paddingInline: 16,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
        <img src={cftlLogo} alt="College of Fast Track Learning logo" style={{ height: screens.md ? 52 : 34, width: 'auto' }} />

        {screens.md ? (
          <Space size="middle">
            <Menu mode="horizontal" selectedKeys={[activeKey]} items={navItems} onClick={({ key }) => navigate(key)} style={{ borderBottom: 'none', minWidth: 700 }} />
            <Button icon={<GlobalOutlined />} disabled>
              Sinhala (Soon)
            </Button>
          </Space>
        ) : (
          <Space>
            <Button icon={<GlobalOutlined />} disabled size="small">
              SI
            </Button>
            <Button icon={<MenuOutlined />} onClick={() => setOpen(!open)} size="small" />
          </Space>
        )}
      </div>

      {!screens.md && open ? (
        <div style={{ background: '#fff', borderTop: '1px solid #e5e7eb' }}>
          <Menu mode="inline" selectedKeys={[activeKey]} items={navItems} onClick={({ key }) => {
            navigate(key);
            setOpen(false);
          }} />
        </div>
      ) : null}
    </Header>
  );
};
