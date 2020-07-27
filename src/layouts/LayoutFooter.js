import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export default class LayoutFooter extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Footer>Ant Design ©2018 Created by Ant UED</Footer>
      </React.Fragment>
    )
  }
}