import React, { Component } from 'react'
import { Button, Form, Table,Row, Col, Tabs, Select, Input } from 'antd';
import {Link } from 'react-router-dom';
import BasicInfo from './component/basicInfo'
import SourceCon from './component/sourceConnect'
import InOutArgu from './component/inOutArgu'
import DataPreview from './component/preview'
import ApiArgu from './component/apiArgu'
import ApiDoc from './component/apiDoc'
import './style.css'
const { TabPane } = Tabs;
const { TextArea} = Input
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
  labelAlign: 'left'
};


//06/03
const panes = [
  {
    title: '基本信息' , key: '1', content: BasicInfo, ref: 'BasicInfo'
  },
  {
    title: '源连接', key: '2', content: SourceCon, ref: 'SourceCon'
  },
  {
    title: '输入输出参数', key: '3', content: InOutArgu, ref: 'InOutArgu'
  },
  {
    title: '数据预览', key: '4', content: DataPreview, ref: 'DataPreview'
  },
  {
    title: '接口参数', key: '5', content: ApiArgu, ref: 'ApiArgu'
  },
  {
    title: '接口文档', key: '6', content: ApiDoc, ref: 'ApiDoc'
  },

]
class DataPublish extends Component {
  constructor() {
    super()
   
    this.state = {
      activeKey: '1',
      requestType: ['GET', 'POST', 'HEAD', 'PUT', 'DELETE', 'TRACE', 'CONTENT'],
      dataSource: [{
        Id: 1, name: 'ID', path: '$.Rows.ID', fieldType: '字符型', delspace: '去除左空格'
      }],
      loading: false,
      paginationNo: {
        pageSize: 10,
        hideOnSinglePage: true
      },
    }
  }


  onRef(name, ref) {
    switch(name) {
      case 'BasicInfo':
        this.BasicInfo = ref
        break;
      case 'SourceCon':
          this.SourceCon = ref
          break;
      case 'InOutArgu':
          this.InOutArgu = ref
          break;
      case 'DataPreview':
          this.DataPreview = ref
          break;
      case 'ApiArgu':
          this.ApiArgu = ref
          break;
      case 'ApiDoc':
          this.ApiDoc = ref
          break;
      default:
        break;
      
    }
  }

  handleTabChange = (value) => {
    console.log('tab change', value)
    this.setState({
      activeKey: value
    })
  }
  handleSave = () => {
    console.log('save')
  }
  render() {
    return (
      <div>
        <div style={{ padding: '20px 20px 20px 20px', margin: '24px 16px 0 16px', backgroundColor: '#fff', display: 'block' }}>
          <Row>
            <Col span={12}>数据发布服务</Col>
            <Col span={4} offset={8}>
            <Button type="link" size="large" style={{float: 'right', marginRight: '50px'}} >
              <Link  to="/data_api">  &lt; 返回</Link>
              </Button>
            </Col>
          </Row>
        </div>
        <div  style={{ padding: '0 20px 20px 20px', margin: '24px 16px 0 16px', backgroundColor: '#fff' }}>
        <div className="card-container">
        <Tabs defaultActiveKey="1" onChange={this.handleTabChange}>
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


export default DataPublish