import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component{
    render(){
        return(
        <div>
            <div style={{backgroundColor:'ghostwhite',height:'3rem',paddingTop:'1.5rem'}}>
                <ul className="list-unstyled" style={{display:'inline'}}>
                    <Link className="links" to="/home">Home</Link>
                    <Link className="links" to="/payments">Payments</Link>
                    <Link className="links" to="/settings">Settings</Link>
                    <Link className="links" to="/offers">Products & Offers</Link>
                 </ul>
            </div>
            <div className="home-content">
                <h1>Filhal khali hai</h1>
            </div>
         </div>
        );
    }
}

export default Home;