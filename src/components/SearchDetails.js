import React, { Component } from "react";
import { connect } from "react-redux";
import { getChocolateAC, getSearchAC } from "../actionCreators/chocolateAC";
import Home from "./Home";

class SearchDetails extends Component {
  
   componentDidMount()
   {
     this.props.dispatch(getChocolateAC());
   }

  
    render() {
      console.log(this.props.chocolates)
      console.log(this.props.name)
      const val=this.props.chocolates.filter(c=> 
        ( 
          (c.name.toLowerCase()).includes((this.props.name).toLowerCase()) 
        ) );
        console.log(val)
    return (
        <>
        
        {val.map (c => (
                <> 
   <div className="blist">
           
           {<img src={c.image} style={{height:"250px",width:"250px"}}/>}
           <div className="det">{c.name}</div>
           
           </div>

               {/* {c.name}
               { <img src={c.image} />}
              <br/> */}
               </>
              ))
            }
            {val.length==0 &&<span>No data available</span>}
        </>
    );
        }
}


function mapStateToProps(appstate) {
     return {
        name: appstate.searchState.name,
        chocolates: appstate.chocolateState.chocolates

     };
   }
   
const connectedComponent = connect(mapStateToProps);

export default connectedComponent(SearchDetails);