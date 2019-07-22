import React , { Component }from "react";
import { connect } from "react-redux";
import {Redirect  } from "react-router-dom";
import NavBar from "./NavBar";
import Search from "./Search";
import Banner from "./Banner";
import { getLogout } from "../actionCreators/chocolateAC";
class Home extends Component {

    handleLogout = () =>
    {
    this.props.dispatch(getLogout())
    }
 
    render() {
        console.log(this.props.isLogged)
    return (
        <>
         {this.props.isLogged ? <div><NavBar/><Search/> </div>  : <Redirect to='/' />}

         <button onClick={this.handleLogout}>Logout</button >
         <Banner/>
         


<div className="content">
Chocolate collection is a crowd sourced portal which gives you details about world renowned brands and chocolates
</div>

     </>   
    )
    }
}


function mapStateToProps(appstate) {
    return { 
        isLogged:appstate.loginState.isLogged

    };
  }
//export default Home;

const connectedComponent = connect(mapStateToProps);
export default connectedComponent(Home);