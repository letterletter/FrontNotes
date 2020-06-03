import React, { Component } from 'react';
import { Form, Input, Row, Col } from 'antd'
import { connect } from 'react-redux';
import { actionCreators } from '../store';
const { TextArea} = Input
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
  labelAlign: 'left'
};
class BasicInfo extends Component {

  constructor(props) {
    super(props)
    this.handleSave = this.handleSave.bind(this)
  }
  handleInputChange = (e, type) => {
    console.log("输入框", e.target.value, type);
    // this.props.setComputeRowSelect(e.target.value, row.key, type);
  }
  handleSave(){
    console.log('badic info', 111)
  }

  componentDidMount() {
    this.props.onRef('BasicInfo', this)
  }
  render() {
    return (
      <Form {...formItemLayout} >
        <Row>
              {/* <Col span={8}>
            <Form.Item label="服务编号" >
              <Input onBlur={e => this.handleInputChange(e, 'serviceId')} />
            </Form.Item>
            </Col> */}
            <Col span={8} >
            <Form.Item label="服务名称" >
              <Input onBlur={e => this.handleInputChange(e, 'serviceName')} />
            </Form.Item>
            </Col>
            </Row>
            <Form.Item label="服务描述">
            </Form.Item>
            <Form.Item >
              <TextArea rows={4} span={12} onBlur={e => this.handleInputChange(e, 'serviceDesc')} />
            </Form.Item>
      </Form>
    )
  }
}



const mapState = (state) => {
  const { basicInfo} = state.DataInterfaceReducer;
  const obj = {basicInfo}
  console.log('basicInfo',obj)
  return {
    basicInfo
  }
}

const mapDispatch = (dispatch) => {
  return {
    setBasicInfoFields(value, type) {
      dispatch(actionCreators.setBasicInfoFields(value, type))
    },
  }
}


export default connect(mapState, mapDispatch)(BasicInfo)


