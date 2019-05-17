import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/contact' component={Contact}></Route>
        </Switch>
    )
}




export default Router;