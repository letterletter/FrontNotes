import React, { Component } from 'react';
import { Form, Input, Row, Col, Button } from 'antd'
const { TextArea} = Input
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
  labelAlign: 'left'
};

const formItemstyle = {
  marginBottom: '10px'
}
class SourceConnect extends Component {

  handleInputChange = (e, type) => {
    console.log("输入框", e.target.value, type);
    // this.props.setComputeRowSelect(e.target.value, row.key, type);
  }

  componentDidMount() {
    this.props.onRef('SourceCon', this)
  }

  handleSave= () => {
    console.log('SourceCon info', 222)
  }
  render() {
    return (
      <Form {...formItemLayout}>
        <Row>
          <Col span={8}>
          <Form.Item label="源数据连接" span={6} style={formItemstyle} >
            <Input onBlur={e => this.handleInputChange(e, 'serviceId')} />
          </Form.Item>
          </Col>
          <Col span={8} >
          <Form.Item label="源表选择" style={formItemstyle} >
            <Input onBlur={e => this.handleInputChange(e, 'serviceName')} />
          </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item label="源表查询语句" style={formItemstyle} >
            </Form.Item>
          </Col>
          <Col span={8}>
            <Button>生成查询语句</Button>
            <Button>查询预览</Button>
          </Col>
        </Row>
        <Form.Item >
          <TextArea rows={4} span={12} onBlur={e => this.handleInputChange(e, 'serviceDesc')} />
        </Form.Item>
      </Form>
    )
  }
}

export default SourceConnect


