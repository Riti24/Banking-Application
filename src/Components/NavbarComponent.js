import React, { Component } from 'react';
import '../App.css';


class Navbar extends Component{
    
    render(){
        console.log("navbar")
        return(
         <div className="Navbar">
             <h1>Logo</h1>
             <i className="fas fa-piggy-bank"></i>    
         </div>
        );
    }
}

export default Navbar;