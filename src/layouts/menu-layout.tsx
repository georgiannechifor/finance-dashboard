import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { BellOutlined, LeftOutlined, RightOutlined, SettingOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Button, Divider, Image, Layout, Menu, Row } from 'antd';
import GeorgianAvatar from '../assets/georgian.jpg';
import Logo from '../assets/logo.jpg';
import { getItem } from '../utils/menu-utils';

const items = [
  getItem('Dashboard', 'dashboard', <FontAwesomeIcon icon={['fas', 'layer-group']} />),
  getItem('Wallets', 'wallets', <FontAwesomeIcon icon={['fas', 'wallet']} />),
  getItem('Merchants', 'merchants', <FontAwesomeIcon icon={['fas', 'store']} />)
];

const bottomItems = [getItem('Notifications', 'notifications', <BellOutlined />), getItem('Settings', 'settings', <SettingOutlined />)];

export const MenuLayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Layout className="w-full h-screen">
      <Layout.Sider theme="light" collapsible collapsed={collapsed} trigger={null} width={260}>
        <Row className={`flex flex-row ${collapsed ? 'justify-center' : 'justify-between'} items-center mt-5 mb-10 px-2`}>
          <Image src={Logo} preview={false} className="!h-16" />

          <Button
            type="text"
            icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px'
            }}
          />
        </Row>

        <Menu
          onSelect={(item) => navigate(item.key)}
          mode="inline"
          theme="light"
          defaultSelectedKeys={[window.location.href.split('/').at(-1) ?? 'dashboard']}
          className="border-none w-full flex-1"
          items={items}
        />

        <div className="flex flex-col justify-end flex-1 mb-5 w-full">
          <Divider orientation="center" />
          <Menu selectable={false} mode="inline" theme="light" items={bottomItems} className="!border-none w-full" />

          <Row className="items-center gap-3 w-full justify-start mx-5 mt-5">
            <Avatar src={GeorgianAvatar} size={40} />
            {!collapsed && <span className="text-md">Georgian Nechifor</span>}
          </Row>
        </div>
      </Layout.Sider>

      <Layout.Content className="p-10 bg-transparent h-screen">
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};
