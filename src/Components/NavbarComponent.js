import React, { Component } from 'react';
import '../App.css';
import Home from './HomeComponent';


// const Logged=(props)=>{
// console.log(window.location.pathname);
// // console.log(window.match);
// // console.log(window.history);
// return(<div></div>)
// }   


// const CheckLogin=()=> {
//     const path=window.location.pathname;
//     console.log(path);
//     if(path=="/login"){
//         return loggedin();
//     }

//     else{
//         return notloggedin();
//     }
// }

class Navbar extends Component{

    render(){
        
        return(
            <div>
                {/* <CheckLogin></CheckLogin> */}
                <div className="Navbar" style={{ backgroundImage: 'url("/assets/images/background-navbar.jpg")', 
         boxShadow:' 20px 20px 50px grey' ,color:'mintcream'}}>
             <i className="fa fa-university Pad ">
                 <div>My Bank</div>
                 </i>
                 
             
             <div className="right">
             <i  className="fa fa-envelope-open " aria-hidden="true">
                 <div>e-mail</div></i>
             <i  className="fa fa-user Pad" aria-hidden="true">
                 <div>Profile</div></i>
             <i className="fa fa-phone Pad" aria-hidden="true">
                 <div>Contact</div></i>
             {/* <button style={{opacity:'1' }}>Logout &nbsp;&nbsp;&nbsp; */}

             <i className="fa fa-sign-out Pad" aria-hidden="true">
                 <div>Logout</div>
             </i>
             {/* </button> */}
             </div> 
             
             
             
         </div>
            </div>
        
        );
    }
}



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
//     <div className="Navbar" style={{ backgroundImage: 'url("/assets/images/background-navbar.jpg")', 
//          boxShadow:' 20px 20px 50px grey' ,color:'mintcream'}}>
//              <i className="fa fa-university Pad ">
//                  <div>My Bank</div>
//                  </i>
                 
             
//              <div className="right">
//              <i  className="fa fa-envelope-open " aria-hidden="true">
//                  <div>e-mail</div></i>
//              <i  className="fa fa-user Pad" aria-hidden="true">
//                  <div>Profile</div></i>
//              <i className="fa fa-phone Pad" aria-hidden="true">
//                  <div>Contact</div></i>
//              {/* <button style={{opacity:'1' }}>Logout &nbsp;&nbsp;&nbsp; */}

//              <i className="fa fa-sign-out Pad" aria-hidden="true">
//                  <div>Logout</div>
//              </i>
//              {/* </button> */}
//              </div> 
             
             
             
//          </div>
// )
// }

export default Navbar;