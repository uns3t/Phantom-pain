import {Drawer, Button, Form, Icon, Input, notification} from 'antd';
import React from "react"
import axios from "../../axios.js";
import "./home.css"
import "animate.css"
import { connect } from 'react-redux'
import {loginSuccess} from '../../redux/user.redux.js'
import {Route} from "react-router-dom";

@connect(
    state=>state.user,
    {loginSuccess}
)

class Home extends React.Component{

    state={
        quotation:"我会穿过那七大海洋，将我的爱意带到你身边",
        signupvisible: false,
        loginvisible: false,
        signupform:{
            username:'',
            pwd:'',
            pwdconfirm:''
        },
        loginform:{
            username: "",
            pwd:""
        }

    }
    signupshowDrawer = () => {
        this.setState({
            signupvisible: true,
        });
    };

    signuponClose = () => {
        this.setState({
            signupvisible: false,
        });
    };
    loginshowDrawer = () => {
        this.setState({
            loginvisible: true,
        });
    };

    loginonClose = () => {
        this.setState({
            loginvisible: false,
        });
    };


    componentDidMount() {
        this.changequotation()
    }

    changequotation=()=>{
        axios.get("/getquotation").then((res) => {
            this.setState({
                quotation:res.quotation.quotation,
            })
        })

    }

    tosignup=(e)=>{
        e.preventDefault()
        axios.post("/postsignup",this.state.signupform).then((res)=>{
            if(res.code===0){
                this.openNotification("成功","注册成功")
            }
        })
    }

    tologin=(e)=>{
        e.preventDefault()
        axios.post("/postlogin",this.state.loginform).then((res)=>{
            if(res.code===0){
                this.openNotification("成功","登陆成功")
                this.props.loginSuccess({token:res.token})
                this.props.history.push("/notelist")
            }


        })
    }
    openNotification = (tl,msg) => {
        notification.open({
            message: tl,
            description: msg,
        });
    };

    render() {
        return(
            <div>
                <div className="home">
                    <div className="quotation animated fadeIn" onClick={this.changequotation}>
                        {this.state.quotation}
                    </div>
                    <div className="touser">
                        <div className="buttondetail" onClick={this.signupshowDrawer}>签订契约</div>

                        <div className="buttondetail" onClick={this.loginshowDrawer}>Link start</div>
                    </div>
                </div>
                <div>

                    <Drawer
                        title="契約を結ぶ"
                        placement="left"
                        closable={true}
                        onClose={this.signuponClose}
                        visible={this.state.signupvisible}
                        width={300}
                    >
                        <Form onSubmit={this.tosignup} className="login-form">
                            <Form.Item>
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                        value={this.state.signupform.username}
                                        onChange={(e)=>{
                                            let data = Object.assign({}, this.state.signupform, {
                                                username: e.target.value
                                            })
                                            this.setState({
                                                signupform:data
                                            })
                                        }
                                        }
                                    />
                            </Form.Item>
                            <Form.Item>
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                        value={this.state.signupform.pwd}
                                        onChange={(e)=>{
                                            let data = Object.assign({}, this.state.signupform, {
                                                pwd: e.target.value
                                            })
                                            this.setState({
                                                signupform:data
                                            })
                                        }
                                        }
                                    />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="PasswordConfirm"
                                    value={this.state.signupform.pwdconfirm}
                                    onChange={(e)=>{
                                        let data = Object.assign({}, this.state.signupform, {
                                            pwdconfirm: e.target.value
                                        })
                                        this.setState({
                                            signupform:data
                                        })
                                    }
                                    }
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit" className="login-form-button">
                                    注册
                                </Button>
                            </Form.Item>
                        </Form>
                    </Drawer>



                    <Drawer
                        title="Link Start"
                        placement="right"
                        closable={true}
                        onClose={this.loginonClose}
                        visible={this.state.loginvisible}
                        width={300}
                    >
                        <Form onSubmit={this.tologin} className="login-form">
                            <Form.Item>
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                    value={this.state.loginform.username}
                                    onChange={(e)=>{
                                        let data = Object.assign({}, this.state.loginform, {
                                            username: e.target.value
                                        })
                                        this.setState({
                                            loginform:data
                                        })
                                    }
                                    }
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                    value={this.state.loginform.pwd}
                                    onChange={(e)=>{
                                        let data = Object.assign({}, this.state.loginform, {
                                            pwd: e.target.value
                                        })
                                        this.setState({
                                            loginform:data
                                        })
                                    }
                                    }
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button htmlType="submit" className="login-form-button">
                                    登陆
                                </Button>
                            </Form.Item>
                        </Form>
                    </Drawer>
                </div>
            </div>
        )
    }
}

export default Home
