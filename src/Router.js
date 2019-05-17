import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Order from './components/Order.js';
import Cats from './components/Cats.js';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/contact' component={Contact}></Route>
            <Route path='/order' component={Order}></Route>
            <Route path='/cats' component={Cats}></Route>
        </Switch>
    )
}




export default Router;