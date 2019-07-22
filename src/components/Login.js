import React, { Component } from "react";
import {  getUserAC, changeInput, getLoginAC } from "../actionCreators/chocolateAC";
import { connect } from "react-redux";
import {Link, Redirect  } from "react-router-dom";
import NavBar from "./NavBar";
import Banner from "./Banner";

class Login extends Component {
  handleChange =  e => { 
    console.log(e)
    this.props.dispatch(changeInput(e.target.name, e.target.value));
  };
  handleLogin(e) 
  {
    e.preventDefault();
    console.log(e)
   
    this.props.dispatch(getLoginAC(this.props.email,this.props.password));

  }


  render() {
    return (
        <>
<Banner/>

  {this.props.isLogged ? <Redirect to='/home' /> : <Redirect to='/' />}
  <div className="loginBox">
  <form onSubmit={(e)=>this.handleLogin(e)}>
  <div className="form-group">
    <label for="email">Email address</label>
    <input type="email" className="form-control" 
    name="email"
    placeholder="Enter email"
    onChange={this.handleChange}
    required
    />
  </div>
  <div className="form-group">
    <label for="pwd">Password</label>
    <input type="password" className="form-control"  
    name="password"
    placeholder="Password"
    onChange={this.handleChange}
    required
    />
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<div>Don't have an account?  <span><Link to={`/signup`}>Create one</Link></span></div>
      
</div>
    
    
    
    

    
    
    
    
    
    
{/*     
     <div className="loginBox">
        <h1 style={{paddingLeft: "40%",fontFamily: "serif"}}>Login</h1>
       
        <form onSubmit={(e)=>this.handleLogin(e)} >
   <div>
   <label>Email address : </label>
   </div>
   <div>
   <input
          type="email"
          value={this.props.email}
          name="email"
          onChange={this.handleChange}
        />
        <p id="email_error"></p>
   </div>
        <label>Password : </label>
        <input
          type="password"
          name="password"
          value={this.props.password}
          onChange={this.handleChange}
        />
        <p id="password_error"></p>
       <input type="submit" value="Login"/>
       
        
         </form>
         <label>Don't have an account?</label>
       <p><Link to={`/signup`}>Create one</Link></p>
</div> */}
       
        </>
         
    );
        }

}

function mapStateToProps(appstate) {
  return { 
   email:appstate.loginState.email, 
   password:appstate.loginState.password, 
   isLogged:appstate.loginState.isLogged

  };
}

const connectedComponent = connect(mapStateToProps);
export default connectedComponent(Login);