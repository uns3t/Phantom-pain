import React from "react"
import { Router, Route, Link,BrowserRouter,IndexRoute } from 'react-router-dom'
import Home from "./components/home/Home.js"
import Admin from "./components/admin/Admin.js"
import Ideadetail from "./components/ideadetail/Ideadetail.js"
import Idealist from "./components/idealist/Idealist.js"

const router=()=>{(
    <Router history={BrowserRouter}>
        <IndexRoute path="/" component={Home}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/ideadetail" component={Ideadetail}/>
        <Route path="/idealist" component={Idealist}/>
    </Router>
)}

export default router
