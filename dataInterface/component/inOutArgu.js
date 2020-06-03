import React, { Component } from 'react';
import { Form, Input, Row, Col, Select, Button , Table, Radio, Popconfirm} from 'antd'
const { TextArea} = Input
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
  labelAlign: 'left'
};
class InputOutputArgu extends Component {

  constructor() {
    super()
    this.state = {
      loading: false,
      dataSource: [{
        Id: 1, fieldName: 'ID', input: true, output: false, 
      },
      {
        Id: 2, fieldName: 'BG', input: false, output: true,
      }
    ],
      ArguColumnsNew: [
          {
            title: '序号',
            dataIndex: 'Id',
            key: 'Id',
            width: '100'
          },
          {
            title: '字段名称',
            dataIndex: 'fieldName',
            key: 'fieldName',
            width: '100'
          },
          {
            title: '输入',
            dataIndex: 'input',
            key: 'input',
            width: '100',
            render: (record, row) =>  
            <Form.Item style={{margin:0}}>      
              <Radio value={record} />
            </Form.Item>
          },
          {
            title: '输出',
            dataIndex: 'output',
            key: 'output',
            width: '200',
            render: (record, row) =>  
            <Form.Item style={{margin:0}}>      
              <Radio value={record} />
            </Form.Item>
          },
      ],
    }
  }

  componentDidMount() {
    this.props.onRef('InOutArgu', this)
  }

  handleSave= () => {
    console.log('InOutArgu info', 333)
  }

  render() {
    return (
      <Form {...formItemLayout}>
        <Row>
          <Col span={8}>输入输出参数</Col>
          <Col span={8}></Col><Col span={4}></Col>
          <Col span={4}><Button type="primary">刷新字段</Button> </Col>
        </Row>
            
        <Table
          dataSource={this.state.dataSource}
          columns={this.state.ArguColumnsNew} bordered rowKey={record => record.Id}
          size="small"
          loading={this.state.loading}
          style={{ padding: 20 }}
          pagination={this.state.paginationNo} />
      </Form>
    )
  }
}

export default InputOutputArgu


