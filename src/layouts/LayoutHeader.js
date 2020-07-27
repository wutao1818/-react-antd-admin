import React from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        个人设置
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        退出登录
      </a>
    </Menu.Item>
  </Menu>
);

export default class LayoutHeader extends React.Component {
  render(){
    return (
      <Dropdown overlay={menu}>
        <a href="aaa" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          吴涛 <DownOutlined />
        </a>
      </Dropdown>
    )
  }
}