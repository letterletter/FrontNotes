import React, { Component } from 'react';
import { Form, Input, Row, Col } from 'antd'
const { TextArea} = Input
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
  labelAlign: 'left'
};
class ApiDoc extends Component {

  constructor(props) {
    super(props)
    this.handleSave = this.handleSave.bind(this)
  }

  handleSave(){
    console.log('Apidoc info', 111)
  }

  componentDidMount() {
    this.props.onRef('ApiDoc', this)
  }
  render() {
    return (
      <div>
        doc
      </div>
    )
  }
}

export default ApiDoc


