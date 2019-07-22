import React, { Component } from "react";
import { connect } from "react-redux";
import {getChocolateAC } from "../actionCreators/chocolateAC";

import NavBar from "./NavBar";
import Search from "./Search";
import Banner from "./Banner";

class ChocolateDetails extends Component {

    componentDidMount()
    {
      this.props.dispatch(getChocolateAC());
    }
    render() {
        console.log(this.props.chocolates)  
        let v= this.props.chocolates.filter(c=>(
          c.id==this.props.match.params.id
        ))
        console.log(v)
    return (
      
        <div>
          <NavBar/> <Banner/>
          <div>
        <button onClick={this.props.history.goBack}>Back</button></div>
        {v.map (c => (
           <>
           



            <div className="blist">

<div className="cname"> 
           {c.name}</div>
           <div      style={{paddingLeft: "41px",
    marginTop: "3%"}}>
            {c.desc}</div>
            { <img src={c.image} style={{height:"250px",width:"250px"}}/>}
            </div>
            
          
            </>
        ))}
        </div>
    );
        }
}


function mapStateToProps(appstate) {
     return {
      chocolates: appstate.chocolateState.chocolates
      
     };
   }
   
const connectedComponent = connect(mapStateToProps);

export default connectedComponent(ChocolateDetails);