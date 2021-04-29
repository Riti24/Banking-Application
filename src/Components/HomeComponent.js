import { Component } from 'react';
import { Link } from 'react-router-dom';

import Home from './HomeComponent';


class Payments extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        }
    }
    showModal=()=>{ //don't need to bind while usiung arrow function
        console.log(this.state.isModalOpen);
        this.setState({
            isModalOpen:!this.state.isModalOpen
        })
    }
    render(){
        return(
        <div>
            <div style={{backgroundColor:'ghostwhite',height:'3rem',paddingTop:'1.5rem'}}>
                <ul className="list-unstyled" style={{display:'inline'}}>
                    <Link className="links" to="/home" >Home</Link>
                    <Link className="links" to="/payments" >Payments</Link>
                    <Link className="links" to="/settings">Settings</Link>
                    <Link className="links" to="/offers">Products & Offers</Link>
                 </ul>
            </div>
            <div className="home-content">
                <div className="container-info-link">
                    <p className="info-link">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                        Payments pending for authorization
                        <a href="#" style={{paddingLeft:'4rem'}}>Filhal khali hai</a>
                    </p>
                    <p className="info-link">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                        Payments pending for authorization
                        <a href="#" style={{paddingLeft:'4rem'}}>Filhal khali hai</a>
                    </p>
                </div>
                <h1 style={{color:'ghostwhite',paddingLeft:'18%',marginBottom:'1%'}}>
                    Your Accounts
                </h1>
                <small style={{color:'ghostwhite',paddingLeft:'18%'}}>Last login Never</small>
                <div className="flex-cont">
                    <ul style={{listStyleType:'none'}}>
                        <li onClick={this.showModal}>bh xs</li>
                        <div className="modal" style={{display:this.state.isModalOpen?'block':'none'}}>
                            gwanjsknsk
                        </div> 
                        <li>bh xs</li>
                        <li>bh xs</li>
                        <li>bh xs</li>
                        <li>bh xs</li>
                        <li>bh xs</li>
                    </ul>
                </div>
            </div>
         </div>
        );
    }
}

export default Payments;