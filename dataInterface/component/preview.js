import React, { Component } from 'react';
import { Form, Input, Row, Col, Select, Button , Table, Radio, Popconfirm} from 'antd'
import format from '../../../util/formatJson'

const { TextArea} = Input
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
  labelAlign: 'left'
};
class Preview extends Component {
  constructor() {
    super()
    this.state = {
      previewData: {}
    }
  }

  componentDidMount() {
    this.props.onRef('DataPreview', this)
  }

  handleSave= () => {
    console.log('DataPreview info', 333)
  }

  render() {
    return (
      <Form {...formItemLayout}>
        <Row>
          <Col span={8}>
            <Form.Item label="数据格式" >
              <Input value="JSON" disabled />
            </Form.Item>
            </Col>
            <Col span={8} >
            <Button>数据格式预览</Button>
            </Col>
        </Row>
        <Form.Item>
          <TextArea rows = {10} span={12} value={format(this.state.previewData)} />
        </Form.Item>
      </Form>
    )
  }
}

export default Preview


