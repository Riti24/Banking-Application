import React, { Component } from 'react';
import Navbar from './NavbarComponent';
import Login from './LoginComponent';
import Home from './HomeComponent';
import { Redirect, Route,Switch } from 'react-router';

class Main extends Component{
    render(){
        return(
            <div className="App">
                <Navbar></Navbar>
                <Switch>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/home" component={Home}></Route>
                <Redirect to="/home"></Redirect>
                </Switch>
            </div>
        );
    }
}

export default Main;