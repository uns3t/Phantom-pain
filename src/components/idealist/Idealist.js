import React from "react"
import axios from "../../axios"
import "./idealist.css"
import { connect } from 'react-redux'
import {Route} from "react-router-dom";
import {Card, Form, Icon} from 'antd';
import { Modal, Button } from 'antd';
import {Tabs} from "antd";
import { Input } from 'antd';
import { notification } from 'antd';
const { TextArea } = Input;

const { TabPane } = Tabs;

@connect(
    state=>state.user,
)

export default class Idealist extends React.Component{

    state={
        notes:[],
        visible: false,
        notedetail:'',
        notetitle:'',
        notedate:'',
        noteuser:'',
        newnote:{
            title:'',
            note:'',
        }
    }


    componentDidMount() {
        console.log(this.props)
        axios.post("/postnote",{
            token:this.props.token
        }).then((res)=>{
            console.log(res)
            this.setState({
                notes:res.usernote
            })
        })
    }
    handleOk = e => {

        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {

        this.setState({
            visible: false,
        });
    };
    showmodal=(note)=>{
        console.log(note)
        this.setState({
            notedetail:note.note,
            notetitle:note.title,
            notedate:note.time,
            noteuser:note.username,
            visible:true
        })
    }

    addnote=(e)=>{
        e.preventDefault()
        console.log(this.state.newnote)
        axios.post("/postnewnote",{
            note:this.state.newnote.note,
            title:this.state.newnote.title,
            token:this.props.token
        }).then((res)=>{
            if(res.code===0){
                this.openNotification("成功","添加成功")
            }
        })

    }
    openNotification = (tl,msg) => {
        notification.open({
            message: tl,
            description:
                msg,
        });
    };

    render() {

        let notecard=this.state.notes.map((note)=>{
            return (
                <div key={note._id} className="onenote">
                    <Card title={note.title} extra={<a onClick={(e)=>this.showmodal(note,e)}>More</a>} style={{ width: 300 }}>
                        <p>{note.note.substr(0,25)}</p>
                        <p>{note.time}</p>
                    </Card>
                </div>
            )
        })

        return(
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="便签列表" key="1">
                        <div className="allnote">
                            {notecard}
                        </div>
                    </TabPane>

                    <TabPane tab="添加便签" key="2">
                        <div className="addnote">
                            <Form onSubmit={this.addnote} className="login-form">
                                <Form.Item>
                                    <Input
                                        prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="title"
                                        value={this.state.newnote.title}
                                        onChange={(e)=>{
                                            let data = Object.assign({}, this.state.newnote, {
                                                title: e.target.value
                                            })
                                            this.setState({
                                                newnote:data
                                            })
                                        }
                                        }
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <TextArea rows={8}
                                              placeholder="note"
                                              value={this.state.newnote.note}
                                              onChange={(e)=>{
                                                  let data = Object.assign({}, this.state.newnote, {
                                                      note: e.target.value
                                                  })
                                                  this.setState({
                                                      newnote:data
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

                </Tabs>

                <Modal
                    title={this.state.notetitle}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={800}
                >
                    <p>{this.state.noteuser}</p>
                    <div className="thenote">{this.state.notedetail}</div>
                    <p>{this.state.notedate}</p>
                </Modal>
            </div>
        )
    }
}
