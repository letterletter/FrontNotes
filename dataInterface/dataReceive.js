import React, { Component } from 'react'
import { Button, Row, Col, Tabs, Input, Popconfirm } from 'antd';
import BasicInfo from './component/basicInfo';
import ApiDoc from './component/apiDoc'
import DataFormat from './component/dataFormat'
import ApiArgu from './component/apiArgu'
import TargetDatabase from './component/targetDatabase'
import FieldConfig from './component/fieldConfig'
import {Link } from 'react-router-dom';
import format from '../../util/formatJson'

import './style.css'
const { TabPane } = Tabs;

const panes = [
  {
    title: '基本信息' , key: '1', content: BasicInfo, ref: 'BasicInfo'
  },
  {
    title: '数据格式', key: '2', content: DataFormat, ref: 'DataFormat'
  },
  {
    title: '接口参数', key: '3', content: ApiArgu, ref: 'ApiArgu'
  },
  {
    title: '目标数据库', key: '4', content: TargetDatabase, ref: 'TargetDatabase'
  },
  {
    title: '字段配置', key: '5', content: FieldConfig, ref: 'FieldConfig'
  },
  {
    title: '接口文档', key: '6', content: ApiDoc, ref: 'ApiDoc'
  },

]

class DataReceive extends Component {
  constructor() {
    super()
    this.state = {
      requestType: ['GET', 'POST', 'HEAD', 'PUT', 'DELETE', 'TRACE', 'CONTENT'],
      activeKey: '1',
      dataTypes: ['json', 'xml'],
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
            width: '100'
          },
          {
            title: '参数名称',
            dataIndex: 'arguName',
            key: 'arguName',
            width: '100'
          },
          {
            title: '参数值',
            dataIndex: 'arguValue',
            key: 'arguValue',
            width: '100'
          },
          {
            title: '参数描述',
            dataIndex: 'arguDesc',
            key: 'arguDesc',
            width: '200'
          },
        {
          title: '操作',
          dataIndex: 'action',
          key: 'action',
          width: '200',
          render: (text, record) => {
            return (
              <div>
                <Button size="small" type="primary" onClick={() => this.handleEditClick(record)}>编辑</Button>
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
      fieldConfigColumns: [
        {
          title: '序号',
          dataIndex: 'Id',
          key: 'Id',
          width: '100'
        },
        {
          title: '名称',
          dataIndex: 'name',
          key: 'name',
          width: '100'
        },
        {
          title: '字段名称',
          dataIndex: 'fieldName',
          key: 'fieldName',
          width: '100'
        },
        {
          title: '路径',
          dataIndex: 'path',
          key: 'path',
          width: '200'
        },
      ],
      loading: false,
      paginationNo: {
        pageSize: 10,
        hideOnSinglePage: true
      },
    }
  }
  handleInputChange = (e,  type) => {
    console.log("输入框", e.target.value,  type);
    // this.props.setComputeRowSelect(e.target.value, row.key, type);
  }

  handleDataType = (value) => {
    console.log('changeRT',value)
  }

  handleTabChange = (value) => {
    console.log('tab change', value)
    this.setState({
      activeKey: value
    })
  }

  handleSave = () => {
    console.log('activekey save', this.state.activeKey)
    if(this.state.activeKey === '1') {
      this.BasicInfo.handleSave()
    }
    else if(this.state.activeKey === '2') {
      this.DataFormat.handleSave()
    }
    else if(this.state.activeKey === '3') {
      this.ApiArgu.handleSave()
    }
    else if(this.state.activeKey === '4') {
      this.TargetDatabase.handleSave()
    }
  }


   syntaxHighlight = (json) => {
    if (typeof json !== 'string') {
        json = JSON.stringify(json, undefined, 4);
    }
    json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
        let cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        if(cls == 'key') {
            return '<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="' + cls + '">' + match + '&nbsp;</span>';
        } else {
            return '<span class="' + cls + '">' + match + '</span>';
        }
    }).replace("}", "<br>}");
}

  handleEditClick(record) {
    console.log(record)
  }
  onRef(name, ref) {
    switch(name) {
      case 'BasicInfo':
        this.BasicInfo = ref
        break;
      case 'DataFormat':
          this.DataFormat = ref
          break;
      case 'ApiArgu':
          this.ApiArgu = ref
          break;
      case 'TargetDatabase':
          this.TargetDatabase = ref
          break;
      case 'FieldConfig':
          this.FieldConfig = ref
          break;
      case 'ApiDoc':
          this.ApiDoc = ref
          break;
      default:
        break;
      
    }
  }

  render() {
    return (
      <div>
        <div style={{ padding: '20px 20px 20px 20px', margin: '24px 16px 0 16px', backgroundColor: '#fff', display: 'block' }}>
          <Row>
            <Col span={12}>数据接收服务</Col>
            <Col span={4} offset={8}>
            <Button type="link" size="large" style={{float: 'right', marginRight: '50px'}} >
              <Link  to="/data_api">  &lt; 返回</Link>
              </Button>
            </Col>
          </Row>
        </div>
        <div  style={{ padding: '0 20px 20px 20px', margin: '24px 16px 0 16px', backgroundColor: '#fff' }}>
          <div className="card-container">
        <Tabs defaultActiveKey="1" onChange={this.handleTabChange} >
          {
            panes.map(pane => (
              <TabPane tab={pane.title} key={pane.key}>
                {pane.content? <pane.content onRef={this.onRef.bind(this)} name={pane.ref}></pane.content>: null}
              </TabPane>
            ))
          }
        </Tabs>
        </div>

        </div>
        <div style={{padding: '20px 20px 20px 20px',  backgroundColor: '#fff',   margin: '24px 16px 0 16px '}}>
          <div style={{ width:'300px', margin:'auto'}}>
          <Button type="primary" onClick={this.handleSave}>保存</Button>
          <Button type="primary" style={{marginLeft: '30px'}} ghost>取消</Button>
          </div>
        </div>
      </div>
    )
  }
}


export default DataReceive