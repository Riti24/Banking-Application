import React, { Component } from 'react';
import Navbar from './NavbarComponent';
import Login from './LoginComponent';
import Home from './HomeComponent';
import { Redirect, Route,Switch } from 'react-router';
import Payments from './PaymentsComponent';
import Footer from './FooterComponent';
import Offers from './Offers';

class Main extends Component{
    render(){
        return(
            <div className="App">
                <Navbar></Navbar>
                <Switch>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/payments" component={Payments}></Route>
                <Route exact path="/offers" component={Offers}></Route>
                <Redirect to="/home"></Redirect>
                </Switch>
                <Footer></Footer>
            </div>
        );
    }
}

export default Main;