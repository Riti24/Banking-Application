import React, { Component } from 'react';
import Navbar from './NavbarComponent';
import '../App.css';
import Home from './HomeComponent';
import {Redirect,Link} from 'react-router-dom';


class Login extends React.Component {

    constructor(props) {
      super(props);
      this.state={
        username:"",
        password:""
      }
      // this.changeHandler=this.changeHandler.bind(this);
      // this.submitLogin=this.submitLogin.bind(this);
      
    }
    changeHandler=(e)=>{
      const id=e.target.name;
      const value=e.target.value;
       this.setState({
        [id]:value
       })
    }
   submitLogin=(e)=>{
     console.log(this.state.username);
     this.props.history.push("/Home");
     e.preventDefault();

     
   }
  
    render() {
      return (
          <div className="inner-container">
          <div className="box">

            Login
              <form>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username" value={this.state.username} onChange={this.changeHandler} />

  
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password" value={this.state.password} onChange={this.changeHandler}/>
  
            <button
              type="button"
              className="login-btn"
              onClick={this.submitLogin}>Login</button>
              
              {/* <Link to="/home" >Log up</Link> */}
              </form>
          </div>
          </div>
      );

    }
  
  }
export default Login;