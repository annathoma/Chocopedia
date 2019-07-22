import React , { Component } from "react";
import { NavLink ,Redirect} from "react-router-dom";
import { connect } from "react-redux";
import { getLoginSuccess, getLoginSearch } from "../actionCreators/chocolateAC";
import Search from "./Search";
import Home from "./Home";
class NavBar extends Component {

  // componentDidMount()
  // {
  //   this.props.dispatch(getLoginSearch());
  // }
  
  render() {
   
  return (
    <nav style={{background:"bisque"}}> 
      <ul >
      <li className="companyName">
        Chocolate Collection
        </li>
        <li >
  <NavLink to="/home" activeStyle={{color:"red", backgroundColor:"yellow"}}
          exact
          >Home</NavLink>
        </li>
        <li>
          <NavLink to="/chocolates" activeStyle={{color:"red", backgroundColor:"yellow"}}
          exact
          >Chocolates</NavLink>
        </li>
        <li>
          <NavLink to="/brands" activeStyle={{color:"red", backgroundColor:"yellow"}}
          exact
          >Brands</NavLink>
        </li>
      
      </ul>
      
    </nav>
    
  );
}
}

// function mapStateToProps(appstate) {
//   return {  
//    isLogged:appstate.loginState.isLogged

//   };
// }

//const connectedComponent = connect(mapStateToProps);
//export default connectedComponent(NavBar);

export default NavBar;


