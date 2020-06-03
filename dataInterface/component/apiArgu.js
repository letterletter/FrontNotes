import React, { Component } from 'react';
import { Form, Input, Row, Col, Select, Button , Table, Popconfirm} from 'antd'
import { connect } from 'react-redux';
import { actionCreators } from '../store';
const { TextArea} = Input
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
  labelAlign: 'left'
};
class ApiArgu extends Component {

  constructor() {
    super()
    this.state = {
      loading: false,
      ApiArgudataSource: [{
        Id: 1, arguName: 'MaxRecords', arguValue: '1000', arguDesc: '单页最大行数', 
      },
      {
        Id: 2, arguName: 'MaxRecords', arguValue: '1000', arguDesc: '单页最大行数', 
      }
    ],
      apiArguColumnsNew: [
          {
            title: '序号',
            dataIndex: 'Id',
            key: 'Id',
            width: 100
          },
          {
            title: '参数名称',
            dataIndex: 'arguName',
            key: 'arguName',
            width: 100,
            render: (record, row) => <Input onBlur={(value)=>this.handleInputChange(value, row, 'arguName')} style={{ minWidth: 70 }} />,

          },
          {
            title: '参数值',
            dataIndex: 'arguValue',
            key: 'arguValue',
            width: 100,
            render: (record, row) => <Input onBlur={(value)=>this.handleInputChange(value, row, 'arguValue')} style={{ minWidth: 70 }} />,

          },
          {
            title: '参数描述',
            dataIndex: 'arguDesc',
            key: 'arguDesc',
            width: 300,
            render: (record, row) => <Input onBlur={(value)=>this.handleInputChange(value, row, 'arguDesc')} style={{ minWidth: 70 }} />,

          },
        {
          title: '操作',
          dataIndex: 'action',
          key: 'action',
          width: 100,
          render: (text, record) => {
            return (
              <div>
                {/* <Button size="small" type="primary" onClick={() => this.handleEditClick(record)}>编辑</Button> */}
                <Popconfirm
                  title="确认删除?"
                  onConfirm={() => this.handleDeleteClick(record)}
                  okText="确定"
                  cancelText="取消"
                >
                  <a style={{ minWidth: 70 }}>删除</a>
                </Popconfirm>
              </div>
            )
          }
      }
      ],
    }
  }

  componentDidMount() {
    this.props.onRef('ApiArgu', this)
  }

  handleSave= () => {
    console.log('apiargu info', 333)
  }

  handleInputChange = (e, type) => {
    console.log("输入框", e.target.value, type);
    // this.props.setComputeRowSelect(e.target.value, row.key, type);
  }

  handleDeleteClick = (key) => {
    console.log('del record row', key)
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    this.props.deleteApiArguRow(key)
  }
  handleAdd = () => {
    
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      Id: count+1, arguName: '', arguValue: '', arguDesc: ''
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
    this.props.addApiArguRow(count)
  };
  render() {
    return (
      <Form {...formItemLayout}>
        <Row>
              <Col span={8}></Col>
              <Col span={8}></Col><Col span={4}></Col>
              <Col span={4}><Button type="primary" onClick={this.handleAdd}>新建</Button> </Col>
            </Row>
            
            <Table
              dataSource={this.state.ApiArgudataSource}
              columns={this.state.apiArguColumnsNew} bordered rowKey={record => record.Id}
              size="small"
              loading={this.state.loading}
              style={{ padding: 20 }}
              pagination={this.state.paginationNo} />
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
  //  setFieldConfigRow(value, key, type) {
  //     dispatch(actionCreators.setFieldConfigRow(value, key, type))
  //  },
  addApiArguRow(count) {
     dispatch(actionCreators.addApiArguRow(count))
   },
   deleteApiArguRow(key) {
     dispatch(actionCreators.deleteApiArguRow(key))
   }
  //  deleteFieldConfigRow(key) {
  //    dispatch(actionCreators.deleteFieldConfigRow(key))
  //  }
  }
}


export default connect(mapState, mapDispatch)(ApiArgu)



