import React from 'react';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';

export const menus = [
  {
    key: 'sub1',
    icon: <UserOutlined />,
    menuTitle: '首页商品'
  },
  {
    key: 'sub2',
    icon: <LaptopOutlined />,
    menuTitle: '其他配置'
  },
]

// 路由配置
export const routes = [
  {
    subKey: 'sub0',
    path: '/home',
    view: import('../pages/home'),
    title: '首页'
  },
  {
    subKey: 'sub1',
    path: '/main/list',
    view: import('../pages/business/products/list'),
    title: '商品列表'
  },
  {
    subKey: 'sub1',
    path: '/main/detail',
    view: import('../pages/business/products/detail'),
    title: '商品详情'
  },
  {
    subKey: 'sub2',
    path: '/active/config',
    view: import('../pages/business/active/config'),
    title: '活动配置'
  },
]

