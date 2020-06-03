import React, { Component } from 'react';
import { Form, Input, Row, Col, Select } from 'antd'
import { connect } from 'react-redux';
import { actionCreators } from '../store';

const { TextArea} = Input
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
  labelAlign: 'left'
};
class DataFormat extends Component {

  constructor() {
    super()
    this.state={
      dataTypes: ['json', 'xml'],
    }
  }

  componentDidMount() {
    this.props.onRef('DataFormat', this)
  }
  handleSave= () => {
    console.log('dataformat info', 222)
  }

  handleInputChange = (e, type) => {
    console.log("输入框", e.target.value, type);
    this.props.setDataFormat(e.target.value, type)
  }
  handleDataType = e => {
    console.log('type', e)
    this.props.setDataFormat(e, 'type')

  }
  render() {
    return (
      <Form {...formItemLayout}>
        <Row>
              <Col span={8}>
                <Form.Item label="数据格式">
                  <Select 
                    placeholder="请选择" 
                    onChange={(e) =>  this.handleDataType(e)}
                    getPopupContainer={triggerNode => triggerNode.parentElement}
                  >
                    {this.state.dataTypes.map((item,index) => (
                      <Select.Option key={index} value={item}>
                        {item}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          <Form.Item label="示例数据"></Form.Item>
              <Form.Item >

                <TextArea   rows={16} span={16} onBlur={e => this.handleInputChange(e, 'data')} />
              </Form.Item>
      </Form>
    )
  }
}

const mapState = (state) => {
  const { dataFormat} = state.DataInterfaceReducer;
  const obj = {dataFormat}
  console.log('dataFormat',obj)
  return {
    dataFormat
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
    setDataFormat(value, type) {
      dispatch(actionCreators.setDataFormat(value, type))
    },
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


export default connect(mapState, mapDispatch)(DataFormat)



