import React, { Component } from 'react';
import Navbar from './NavbarComponent';
import Login from './LoginComponent';

class Main extends Component{
    render(){
        return(
         <div>
           <Navbar></Navbar>
           <Login></Login>
         </div>
        );
    }
}

export default Main;