import React, { Component } from "react";
import { connect } from "react-redux";
import { getBrandAC, getChocolatebybrandAC } from "../actionCreators/chocolateAC";
import NavBar from "./NavBar";

import Banner from "./Banner";

class BrandDetails extends Component {

    componentDidMount()
    {
    this.props.dispatch(getBrandAC());
      this.props.dispatch(getChocolatebybrandAC(this.props.match.params.id));
    }
    render() {
        //console.log(this.props.chocolates)  
        let v= this.props.brands.filter(b=>(
            b.id==this.props.match.params.id
          ))
    return (
        <>
        <NavBar/> <Banner/>
        <div>
        <button onClick={this.props.history.goBack}>Back</button>
        </div>
        {v.map (c => (
           <>
           <div>
               <div className="bdetails"> 
           {c.name}</div>
           <div      style={{margin: "40px"}}>
            {c.desc}</div>
            </div>
            
            </>
        ))}
        {this.props.chocolates.map (c => (
           <>
             <div className="blist">
            { <img src={c.image}  style={{height:"250px",width:"250px"}}/>}
             <div className="det">{c.name}</div>
            </div>
            </>
        ))}
        </>
    );
        }
}


function mapStateToProps(appstate) {
    // console.log(appstate)
     return {
     
      brands: appstate.brandState.brands,
      chocolates: appstate.chocolatebybrandState.chocolates
      
     };
   }
   
const connectedComponent = connect(mapStateToProps);

export default connectedComponent(BrandDetails);