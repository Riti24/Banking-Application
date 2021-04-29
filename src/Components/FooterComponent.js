import React, { Component } from 'react';
import '../App.css';



class Footer extends Component{
    render(){
        return(
         <div className="Navbar" style={{ backgroundImage: 'url("/assets/images/background-navbar.jpg")',height:'20vh'}}>
             <p style={{paddingLeft:'10%' ,color:'ghostwhite'}}>Created by Ritika & Nikhil</p>
         </div>
        );
    }
}

export default Footer;