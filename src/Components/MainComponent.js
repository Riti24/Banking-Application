import React, { Component } from 'react';
import Navbar from './NavbarComponent';
import Footer from './FooterComponent'

class Main extends Component{
    render(){
        return(
         <div >
         <Navbar ></Navbar>
         <div style={{height:'60vh'}}></div>
         <Footer ></Footer>
         </div>
        );
    }
}

export default Main;