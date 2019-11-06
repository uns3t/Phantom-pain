import React from "react"
import axios from "../../axios"
import "./idealist.css"
import { connect } from 'react-redux'
import {Route} from "react-router-dom";
import { Card } from 'antd';
import { Modal, Button } from 'antd';
import {Tabs} from "antd";
import { Input } from 'antd';

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
        noteuser:''
    }

    componentDidMount() {
        axios.post("/postnote",{
            username:"test"
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
            notedate:note.date,
            noteuser:note.username,
            visible:true
        })

    }

    render() {

        let notecard=this.state.notes.map((note)=>{
            return (
                <div key={note._id} className="onenote">
                    <Card title={note.title} extra={<a onClick={(e)=>this.showmodal(note,e)}>More</a>} style={{ width: 300 }}>
                        <p>{note.note.substr(0,25)}</p>
                        <p>{note.date}</p>
                    </Card>
                </div>
            )
        })

        return(
            <div>
                <Tabs defaultActiveKey="2">
                    <TabPane tab="便签列表" key="1">
                        <div className="allnote">
                            {notecard}
                        </div>
                    </TabPane>
                    <TabPane tab="添加便签" key="2">
                        <div className="addnote">
                        aaaa
                        </div>
                    </TabPane>

                </Tabs>

                <Modal
                    title={this.state.notetitle}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>{this.state.noteuser}</p>
                    <p>{this.state.notedetail}</p>
                    <p>{this.state.notedate}</p>
                </Modal>
            </div>
        )
    }
}
