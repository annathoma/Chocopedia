import React, { Component } from "react";
import { connect } from "react-redux";
import { getChocolateAC, getSearchAC, changeInput } from "../actionCreators/chocolateAC";
import BrandDetails from "./BrandDetails";
import ChocolateList from "./ChocolateList";
import SearchDetails from "./SearchDetails";
import {  Redirect } from "react-router-dom";
class Search extends Component {
  constructor() {     
    super(); 
    this.state = {
        isClicked: false   
      }
    }
 
    handleChange =  e => { 
      this.setState({       
        isClicked: false   }); 
      
      console.log(e)
      this.props.dispatch(changeInput(e.target.name, e.target.value));
    };

  handleSearch = () =>
   {
     
    this.setState({       
      isClicked: true   }); 
    
   }


    render() 
    {
      
        return(
        <>
          <input
        type="text"
        name="name"
        placeholder="Search..."
        onChange={this.handleChange}
      />
       <button onClick= {this.handleSearch}>Search</button> 
       {this.state.isClicked? <SearchDetails {...this.props}/> : ""}
   
      
                 
      </>
        ) 

      
      }//render
  
}//cls

function mapStateToProps(appstate) {
    //  return {
    //    name: appstate.searchState.name
       
    //  };
   }

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Search);