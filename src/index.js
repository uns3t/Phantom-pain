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
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {PersistGate} from 'redux-persist/lib/integration/react';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

const myPersistReducer = persistReducer(persistConfig, reducers)

const store = createStore(myPersistReducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ?
        window.devToolsExtension()
        : f => f
))
const persistor = persistStore(store)

const routerhistory=createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router history={routerhistory}>
                <Switch>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/notelist" component={Idealist}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </Router>
        </PersistGate>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

