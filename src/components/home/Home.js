import { Drawer, Button, Radio } from 'antd';
import React from "react"
import axios from "../../axios.js";
import "./home.css"
import "animate.css"

const RadioGroup = Radio.Group;


export default class Home extends React.Component{
    constructor(props){
        super(props)

        this.changequotation=this.changequotation.bind(this)
    }
    state={
        quotation:"我会穿过那七大海洋，将我的爱意带到你身边",
        visible: false,
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };

    componentDidMount() {
        axios.get("/getquotation").then((res) => {
            console.log(res)
            this.setState({
                quotation:res.quotation.quotation,
            })

            console.log(this.state)

        })

    }

    changequotation(){
        axios.get("/getquotation").then((res) => {
            console.log(res)
            this.setState({
                quotation:res.quotation.quotation,
            })

            console.log(this.state)

        })

    }

    render() {
        return(
            <div>
                <div className="quotation animated fadeIn" onClick={this.changequotation}>
                    {this.state.quotation}
                </div>
                <div className="touser">
                    <div className="buttondetail" onClick={this.showDrawer}>签订契约</div>

                    <div className="buttondetail">Link start</div>
                </div>
                <div>

                    <Drawer
                        title="契約を結ぶ"
                        placement={this.state.placement}
                        closable={true}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Drawer>
                </div>
            </div>
        )
    }
}
