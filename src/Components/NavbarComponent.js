import React, { Component } from 'react';
import '../App.css';


class Navbar extends Component{
    render(){
        console.log("navbar")
        return(
         <div className='Navbar'>
             <div ><i className="fas fa-piggy-bank"></i>logo
             </div>
         </div>
        );
    }
}

export default Navbar;