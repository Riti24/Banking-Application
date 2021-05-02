import React, { Component } from 'react';
import Navbar from './NavbarComponent';
import '../App.css';
import Home from './HomeComponent';
import {Redirect,Link} from 'react-router-dom';
import {LoginData} from "../shared/logindata";


class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        username:"",
        password:"",
        logData:LoginData,
        loading:true
      }
     
      
    }
     componentDidMount=()=>{
      const url="http://localhost:3001/login";
      // const response=  fetch(url);
      // const data= response.json();
      // console.log(data); 
      fetch(url)
      .then(response=>response.json())
      .then(data=>console.log(data))
      .catch(error=>console.log(error))

    }
   
    changeHandler=(e)=>{
      const id=e.target.name;
      const value=e.target.value;
       this.setState({
        [id]:value
       })
    }
   submitLogin=(e)=>{
    
      let verify=this.state.logData.filter((data)=>data.username==this.state.username && data.password==this.state.password);
      if (verify.length !=0)
      {
        
        this.props.history.push("/Home");
      }
      else
      {
        alert("chala ja ...");
       
      }
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