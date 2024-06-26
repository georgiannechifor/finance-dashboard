import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const getItem = (label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem =>
  ({
    key,
    icon,
    children,
    label,
    type
  }) as MenuItem;
