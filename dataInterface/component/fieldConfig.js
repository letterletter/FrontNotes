
import React, { Component } from 'react';
import { Form, Input, Row, Col, Table, Select, Popconfirm, Button } from 'antd'
import { connect } from 'react-redux';
import { actionCreators } from '../store';
const { TextArea} = Input

const { Option } = Select;
class FieldConfig extends Component {

  constructor(props) {
    super(props)
    this.columns = [
      {
        title: '序号',
        dataIndex: 'Id',
        key: 'Id',
        width: '100'
      },
      {
        title: '名称',
        dataIndex: 'fieldName',
        key: 'fieldName',
        width: '100',
        render: (record, row) => <Input onBlur={(value)=>this.handleInputChange(value, row, 'fieldName')} style={{ minWidth: 70 }} />,

      },
      {
        title: '路径',
        dataIndex: 'path',
        key: 'path',
        width: '150',
        render: (record, row) => <Input onBlur={(value)=>this.handleInputChange(value, row, 'path')} style={{ minWidth: 70 }} />,
      },
      {
        title: '字段类型',
        dataIndex: 'type',
        key: 'type',
        width: '100',
        render:(record, row) => (<Select onChange={(value)=>this.handleSelectChange(value, row, 'type')} style={{ minWidth: 70,width:150 }}>
          {this.state.typeList.map(item => (
            <Option key={item.key} value={item.value} title={item.text}>{item.text}</Option>
          ))}
        </Select>)
      },
      {
        title: '去除空格',
        dataIndex: 'trimType',
        key: 'trimType',
        width: '100',
        render:(record, row) => (<Select onChange={(value)=>this.handleSelectChange(value, row, 'trimType')} style={{ minWidth: 70,width:150 }}>
          {this.state.delList.map(item => (
            <Option key={item.key} value={item.value} title={item.text}>{item.text}</Option>
          ))}
        </Select>)
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        width: '100',
        render: (text, record) => {
          return (
            <div>
              <Popconfirm
                title="确认删除?"
                onConfirm={() => this.handleDeleteClick(record.key)}
                okText="确定"
                cancelText="取消"
              >
                <Button size="small" style={{ backgroundColor: 'rgb(238, 177, 63)', marginLeft: 10 }}>
                  删除
                  </Button>
              </Popconfirm>
              
            </div>
          )


        }
      },
    ]
    this.state = {
      dataSource: [],
      count: 0,
      typeList: [
        {key: 1, value: 1, text: 'number'},
        {key: 2, value: 2, text: 'String'},
        {key: 3, value: 3, text: 'Date'},
        {key: 4, value: 4, text: 'boolean'},
        {key: 5, value: 5, text: 'integer'},
        {key: 6, value: 6, text: 'bigNumber'},
        {key: 7, value: 7, text: 'serializable'},
        {key: 8, value: 8, text: 'binary'},
        {key: 9, value: 9, text: 'timestamp'},
        {key: 10, value: 10, text: 'inet'},
      ],
      delList: [
        {key: 0, value: 0, text: '不去除'},
        {key: 1, value: 1, text: '去除左空格'},
        {key: 2, value: 2, text: '去除右空格'},
        {key: 3, value: 3, text: '去除左右空格'},
      ],
      loading: false,
      paginationNo: {
        pageSize: 10,
        hideOnSinglePage: true
      },
    }
    this.handleSave = this.handleSave.bind(this)
  }

  handleSelectChange = (value, row, type) => {
    console.log("选择框", value, row.key, type)
    // this.props.setFieldConfigRow(value, row.key, type)
    // this.props.setComputeRowSelect(value, row.key, type);
  }
  handleInputChange = (e, row, type) => {
    console.log("输入框", e.target.value, row.key, type);
    // this.props.setFieldConfigRow(e.target.value, row.key, type)

    // this.props.setComputeRowSelect(e.target.value, row.key, type);
  }
  handleSave(){
    console.log('badic info', 111)
  }

  componentDidMount() {
    this.props.onRef('FieldConfig', this)
  }

  handleDeleteClick = (key) => {
    console.log('del record row', key)
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    this.props.deleteFieldConfigRow(key)
  }
  handleAdd = () => {
    
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      Id: count+1, fieldName: '', path: '', type: '', trimType: ''
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
    this.props.addFieldConfigRow(count)
  };
  render() {
    return (
      <div>
        <Row>
          <Col span={14}></Col>
          <Col span={10}>
            <Button type="primary" onClick={this.handleAdd}>添加</Button> 
            <Button style={{marginLeft: '25px'}} type="primary">添加全部</Button>
            <Button style={{marginLeft: '25px'}} type="primary">删除全部</Button>
            <Button style={{marginLeft: '25px'}} type="primary">刷新字段</Button>
          </Col>
        </Row>
        <Table
          dataSource={this.state.dataSource}
          columns={this.columns} bordered rowKey={record => record.key}
          size="small"
          style={{ padding: 20 }}
          pagination={this.state.paginationNo} />
      </div>
    )
  }
}

const mapState = (state) => {
  const { fieldConfigInfo} = state.DataInterfaceReducer;
  const obj = {fieldConfigInfo}
  console.log('fieldConfigInfo',obj)
  return {
    fieldConfigInfo
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
    setBasicInfoFields(value, type) {
      dispatch(actionCreators.setBasicInfoFields(value, type))
    },
  //   setWebServiceFields(value, type) {
  //     dispatch(actionCreators.setWebServiceFields(value, type))
  //   },
   setFieldConfigRow(value, key, type) {
      dispatch(actionCreators.setFieldConfigRow(value, key, type))
   },
   addFieldConfigRow(count) {
     dispatch(actionCreators.addFieldConfigRow(count))
   },
   deleteFieldConfigRow(key) {
     dispatch(actionCreators.deleteFieldConfigRow(key))
   }
  }
}


export default connect(mapState, mapDispatch)(FieldConfig)


