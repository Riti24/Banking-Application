import React, { Component } from 'react';
import '../App.css';



class Navbar extends Component{

    render(){
        console.log("navbar")
        return(
         <div className="Navbar" style={{ backgroundImage: 'url("/assets/images/background-navbar.jpg")'}}>
             <i className="fa fa-university"></i>   
             <h5>My Bank</h5> 
             <div style={{float:'Right'}}>
             <i className="fa fa-university"></i>  
             </div>
         </div>
        );
    }
}

// function checkLogin(){
//     if(){
//         loggedin();
//     }

//     else{
//         notloggedin();
//     }
// }

// function notloggedin(){
// return(
//     <div>
//         <div className="Navbar">
//              <h1>Logo</h1>
//              <i className="fas fa-piggy-bank"></i>    
//          </div>
    
//     </div>
// )

// }

// function loggedin(){
// return(
//     <div className="Navbar">
//              <h1>Logo</h1><i className="fas fa-piggy-bank"></i>   

//     </div>
// )
// }

export default Navbar;