import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import './style/index.scss';
import LayoutMenu from './LayoutMenu';
import LayoutHeader from './LayoutHeader';
import LayoutFooter from './LayoutFooter';
import Views from '../router';

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Layout>
            <Sider>
              <LayoutMenu></LayoutMenu>
            </Sider>
            <Layout className="global-ant-layout">
              <Header>
                <LayoutHeader></LayoutHeader>
              </Header>
              <Content>
                <Views></Views>
              </Content>
              <LayoutFooter></LayoutFooter>
            </Layout>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
