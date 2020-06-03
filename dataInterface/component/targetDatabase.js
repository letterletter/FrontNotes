import React, { Component } from 'react';
import { Form, Input, Row, Col, Radio } from 'antd'
import { connect } from 'react-redux';
import { actionCreators } from '../store';
const { TextArea} = Input
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
  labelAlign: 'left'
};

const formItemstyle = {
  marginBottom: '10px'
}
class TargetDB extends Component {

  handleInputChange = (e, type) => {
    console.log("输入框", e.target.value, type);
    this.props.handleInputChange(e.target.value, type)
    // this.props.setComputeRowSelect(e.target.value, row.key, type);
  }

  componentDidMount() {
    this.props.onRef('TargetDatabase', this)
  }

  handleSave= () => {
    console.log('targetdatabase info', 222)
  }
  render() {
    return (
      <Form {...formItemLayout}>
        <Row>
              <Col span={8}>
            <Form.Item label="目标数据库连接" span={6} style={formItemstyle} >
              <Input onBlur={e => this.handleInputChange(e, 'serviceId')} />
            </Form.Item>
            </Col>
            <Col span={8} >
            <Form.Item label="目标表" style={formItemstyle} >
              <Input onBlur={e => this.handleInputChange(e, 'serviceName')} />
            </Form.Item>
            </Col>
            </Row>
            <Row>
              <Col span={8}>
            <Form.Item label="每批提交行数" style={formItemstyle} >
              <Input onBlur={e => this.handleInputChange(e, 'rows')} />
            </Form.Item>
            </Col>
            <Col span={8} >
            <Form.Item label="失败后回滚" style={formItemstyle} >
              <Radio  onChange={e => console.log('checked', e)}></Radio>
            </Form.Item>
            </Col>
            </Row>
            <Row>
              <Col span={8}>
            <Form.Item label="目标写入前操作" style={formItemstyle} >
              <Input onBlur={e => this.handleInputChange(e, 'rows')} />
            </Form.Item>
            </Col>
            <Col span={8} >
            <label>插入前不删除数据</label>
            </Col>
            </Row>
            <Row>
              <Col span={8}>
            <Form.Item label="目标写入前操作" style={formItemstyle} >
              <Input onBlur={e => this.handleInputChange(e, 'rows')} />
            </Form.Item>
            </Col>
            </Row>
      </Form>
    )
  }
}


const mapState = (state) => {
  const { targetDBInfos} = state.DataInterfaceReducer;
  const obj = {targetDBInfos}
  console.log('targetDBInfos',obj)
  return {
    targetDBInfos
  }
}

const mapDispatch = (dispatch) => {
  return {
    // handleSave(requestData) {
    //   dispatch(actionCreators.saveCon(requestData))
    // },
    // testInterfaceCon(requestData) {
    //   dispatch(actionCreators.testApiCon(requestData))
    // },
 
    setTargetFieldInfo(value, type) {
      dispatch(actionCreators.setTargetFieldInfo(value, type))
    }
  //   setWebServiceFields(value, type) {
  //     dispatch(actionCreators.setWebServiceFields(value, type))
  //   },
  //  setFieldConfigRow(value, key, type) {
  //     dispatch(actionCreators.setFieldConfigRow(value, key, type))
  //  },
  //  addFieldConfigRow(count) {
  //    dispatch(actionCreators.addFieldConfigRow(count))
  //  },
  //  deleteFieldConfigRow(key) {
  //    dispatch(actionCreators.deleteFieldConfigRow(key))
  //  }
  }
}


export default connect(mapState, mapDispatch)(TargetDB)


