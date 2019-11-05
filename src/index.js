import React from 'react';
import ReactDOM from 'react-dom';

import { createBrowserHistory } from "history";
import {Router, Route, Switch} from "react-router-dom";
import 'antd/dist/antd.css';
import Home from "./components/home/Home.js"
import Admin from "./components/admin/Admin.js"
import Ideadetail from "./components/ideadetail/Ideadetail.js"
import Idealist from "./components/idealist/Idealist.js"

const routerhistory=createBrowserHistory()

ReactDOM.render(
    <Router history={routerhistory}>
        <Switch>
            <Route path="/admin" component={Admin}/>
            <Route path="/ideadetail" component={Ideadetail}/>
            <Route path="/idealist" component={Idealist}/>
            <Route path="/" component={Home}/>
        </Switch>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

