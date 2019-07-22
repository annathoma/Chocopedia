import React, { Component } from "react";
import {  getUserAC, changeInput } from "../actionCreators/chocolateAC";
import { connect } from "react-redux";
import {Link, Redirect  } from "react-router-dom";
import Banner from "./Banner";

class SignUp extends Component {

  handleChange =  e => { 
    console.log(e)
    this.props.dispatch(changeInput(e.target.name, e.target.value));
  };

  handleSignUp(e) 
  {
    e.preventDefault();
    console.log(e)
   const user ={
     firstName:this.props.firstName,
     lastName:this.props.lastName,
     email: this.props.email,
     password:this.props.password
   }

    this.props.dispatch(getUserAC(user));
  }

  render() {
   
 return (
     <>
     <Banner/>
     {this.props.isReg ? <Redirect to='/' /> : <Redirect to='/signup' />}
     
     <div className="loginBox">
     <form onSubmit={(e)=>this.handleSignUp(e)} >
     <h3>SignUp</h3>
     <div className="form-group">
       <label for="firstName">First Name</label>
       <input
         type="text" className="form-control" 
         name="firstName"
         onChange={this.handleChange}
         required
       />
      </div>
      <div className="form-group">
       <label for="lastName">Last Name</label>
       <input
         type="text"
         className="form-control" 
         name="lastName"
         onChange={this.handleChange}
         required
       />
      </div>
      <div className="form-group">
     <label for="email">Email address</label>
     <input
       type="email"
       className="form-control" 
       name="email"
       onChange={this.handleChange}
       required
     />
    </div>
    <div className="form-group">
     <label for="password">Password</label>
     <input
       type="password"
       name="password"
       className="form-control" 
       onChange={this.handleChange}
       required
     />
     </div>
    <input type="submit" value="Sign Up"/>
    
     
      </form>
      <label>Already have an account?</label>
      <p><Link to={`/`}>Login here</Link></p>
      </div>
     </>
    
     
 );
     }
}

function mapStateToProps(appstate) {
   return { 
  firstName:appstate.userState.firstName, 
    lastName:appstate.userState.lastName, 

    email:appstate.userState.email, 

    password:appstate.userState.password, 
    isReg:appstate.userState.isReg
   };
 }

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(SignUp);