import React, { Component } from 'react'
import { Button, Table, Row, Col, Input, Menu, Dropdown, Icon } from 'antd';
import { withRouter } from 'react-router';

const { Search } = Input
class DataList extends Component {
  constructor() {
    super()
    this.columns = [
      {
        title: '服务编号',
        dataIndex: 'serviceId',
        key: 'serviceId',
        width: '100'
      },
      {
        title: '服务名称',
        dataIndex: 'serviceName',
        key: 'serviceName',
        width: '100'
      },
      {
        title: '服务类别',
        dataIndex: 'serviceType',
        key: 'serviceType',
        width: '100'
      },
      {
        title: '目标/源链接',
        dataIndex: 'stot',
        key: 's-t',
        width: '150'
      },
      {
        title: '时间',
        dataIndex: 'time',
        key: 'time',
        width: '300'
      },
    ]
    this.state = {
      dataSource: [{serviceId: 112352, serviceName: 's-发布', serviceType: '数据发布', stot: '源-数据库test',time: '2020-01-11 08:23:22'}],
      title: '',
      loginfo: '',
      createShow: false,
      show: false,
      paginationNo: {
        pageSize: 10,
        hideOnSinglePage: true
      },
      loading: false
    }
  }
 
  handleMenuClick = (e) => {
    //数据接收
    if(e.key === "1")
    {
      this.props.history.push('/data_receive')
    }
    //数据发布
    if(e.key === "2")
    {
      this.props.history.push('/data_publish')
    }
  }
 
  render() {
    const menu = (
      <Menu onClick = {this.handleMenuClick}>
        <Menu.Item  key = '1'>
            数据接收
        </Menu.Item>
        <Menu.Item key = '2'>  
            数据发布 
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <div style={{ padding: '20px 20px 20px 20px', margin: '24px 16px 0 16px', backgroundColor: '#fff', display: 'block' }}>
          <Row>
            <Col span={12}> <h1>数据接口服务</h1></Col>
            <Col span={12} >     
              <div>
                <Dropdown overlay={menu}>
                  <Button size="large" type="primary">新建<Icon type="down" /></Button>
                </Dropdown>
                {/* <Button size="large" type="primary" onClick={this.handleCreate}>新建</Button> */}
                <Search
                  style={{ width: 400, marginRight: '20px' }}
                  placeholder="请输入"
                  enterButton="搜索"
                  size="large"
                  onSearch={value => console.log(value)}
                />
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ padding: '0 20px 20px 20px', margin: '24px 16px 0 16px', backgroundColor: '#fff' }}>
          <Table
            dataSource={this.state.dataSource}
            columns={this.columns} bordered rowKey={record => record.serviceId}
            size="small"
            loading={this.state.loading}
            style={{ padding: 20 }}
            pagination={this.state.paginationNo} />
          
        </div>
      </div>
    )
  }
}
export default withRouter(DataList)
