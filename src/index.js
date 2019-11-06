import React from 'react';
import ReactDOM from 'react-dom';
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createBrowserHistory } from "history";
import {Router, Route, Switch} from "react-router-dom";
import 'antd/dist/antd.css';
import Home from "./components/home/Home.js"
import Admin from "./components/admin/Admin.js"
import Idealist from "./components/idealist/Idealist.js"
import reducers from "./redux/redux.js"

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ?
        window.devToolsExtension()
        : f => f
))

const routerhistory=createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
        <Router history={routerhistory}>
            <Switch>
                <Route path="/admin" component={Admin}/>
                <Route path="/notelist" component={Idealist}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

