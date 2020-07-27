import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { menus, routes } from '../router/routes';

const { SubMenu } = Menu;
const { Sider } = Layout;

export default class LayoutMenu extends React.Component {
  static defaultProps = {
    menus,
  };
  render(){
    const { menus } = this.props;
    return (
      <Layout>
        <Sider width={200} className="site-layout-background">
          <div className="ant-sider-logo" id="logo">
            <h1><Link to="/home">管理系统</Link></h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {
              menus.map((item) => {
                const { key, icon, menuTitle } = item;
                return (
                  <SubMenu key={key} icon={icon} title={menuTitle}>
                    {
                      routes.map((item2, index2)=>{
                        const { subKey, path, title } = item2;
                          return (subKey===key)?(<Menu.Item key={index2+1}><Link to={path}>{title}</Link></Menu.Item>):''
                      })
                    }
                  </SubMenu>
                )
              })
            }
          </Menu>
        </Sider>
      </Layout>
    )
  }
}