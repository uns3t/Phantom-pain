import React from "react"
import {Tabs} from "antd";
const { TabPane } = Tabs;


export default class Admin extends React.Component{
    render() {
        return(
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="便签列表" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="添加便签" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
