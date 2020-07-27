import React from 'react';
import { Table, Pagination, Spin, Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import reqwest from 'reqwest';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const count = 10;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

export default class LayoutContent extends React.Component {
  state = {
    initLoading: true,
    data: [],
    list: [],
  };

  componentDidMount() {
    this.getData(res => {
      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
      });
    });
  }

  getData = callback => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: res => {
        callback(res);
      },
    });
  };

  onLoadMore = (pageNumber) => {
    console.log('Page: ', pageNumber);
    this.setState({
      initLoading: true,
      list: this.state.data.concat([...new Array(count)].map((item, index) => ({ loading: true, name: {} })))
    });
    this.getData(res => {
      const data = res.results;
      this.setState(
        {
          data,
          list: data,
          initLoading: false,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'));
        },
      );
    });
  };

  render() {
    let { initLoading, list } = this.state;
    list = list.map((item, index)=>({...item, key: index, fullName: `${item.name.title} ${item.name.first} ${item.name.last}`}))
    const columns = [
      {
        title: '姓名',
        dataIndex: 'fullName',
        key: 'fullName',
      },
      {
        title: '性别',
        dataIndex: 'gender',
        key: 'gender',
      },
      {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: '国籍',
        dataIndex: 'nat',
        key: 'nat',
      },
      {
        title: '操作',
        key: 'action',
        sorter: true,
        render: () => (
          <span>
            <Button type="primary" style={{ marginRight: 16 }}>删除</Button>
            <Button type="primary">编辑</Button>
          </span>
        ),
      },
    ];

    return (
      <Spin indicator={antIcon} spinning={initLoading} tip="加载中。。。">
        <div className="site-card-border-less-wrapper">
          <h1>首页banner设置</h1>
          <Table dataSource={list} columns={columns} />
          <div className="pagina">
            <Pagination showQuickJumper defaultCurrent={1} total={500} onChange={this.onLoadMore} />
          </div>
        </div>
      </Spin>
    );
  }
}
