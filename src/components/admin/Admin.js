import React from "react"
import "./admin.css"
import axios from "../../axios"
import {Button, Form, Icon, Input, Tabs} from "antd";
import { Table, Divider, Tag } from 'antd';
const { TabPane } = Tabs;
const { TextArea } = Input;



export default class Admin extends React.Component{
    state={
        quotations:[],
        newquotation:'',
        _id:''
    }

    componentDidMount() {
        axios.get("/getallquotation").then((res)=>{
            console.log(res)
            this.setState({
                quotations:res.quotation
            })
        })
    }

    addquotation=(e)=>{
        e.preventDefault()
        axios.post("/postnewquotation",{
            quotation:this.state.newquotation
        }).then((res)=>{
            if(res.code===0){
                console.log("添加成功")
            }
        })
    }

    deletequotation=(e)=>{
        e.preventDefault()
        axios.post("/postdeletequotation",{
            _id:this.state._id
        }).then((res)=>{
            if(res.code===0){
                console.log("删除成功")
            }
        })
    }

    render() {
        const columns = [
            {
                title: '语录',
                dataIndex: 'quotation',
            },
            {
                title: 'id',
                dataIndex: '_id',
            },

        ];
        return(
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="语录列表" key="1">
                        <Table columns={columns} dataSource={this.state.quotations} />
                    </TabPane>
                    <TabPane tab="添加语录" key="2">
                        <div className="addquotation">
                            <Form onSubmit={this.addquotation} className="login-form">
                                <Form.Item>
                                    <TextArea rows={8}
                                              placeholder="quotation"
                                              value={this.state.newquotation}
                                              onChange={(e)=>{
                                                  this.setState({
                                                      newquotation:e.target.value
                                                  })
                                              }
                                              }
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Button htmlType="submit" className="login-form-button">
                                        添加
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </TabPane>
                    <TabPane tab="删除语录" key="3">
                        <div className="addquotation">
                            <Form onSubmit={this.deletequotation} className="login-form">
                                <Form.Item>
                                    <Input
                                        prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="quotationid"
                                        value={this.state._id}
                                        onChange={(e)=>{

                                            this.setState({
                                                _id:e.target.value
                                            })
                                        }
                                        }
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Button htmlType="submit" className="login-form-button">
                                        删除
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
