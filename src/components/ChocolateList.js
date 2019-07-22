import React, {Component} from "react";
import { connect } from "react-redux";
import { Link} from "react-router-dom";
import { getChocolateAC} from "../actionCreators/chocolateAC";
import "./ChololateListItem.css"
import NavBar from "./NavBar";
import Search from "./Search";
import Banner from "./Banner";

class ChocolateList extends Component {

    componentDidMount(){
        this.props.dispatch(getChocolateAC());
        
    
    }
    
    render() 
    {
        return (
        <>


<NavBar/> <Banner/>
<div>
       <button onClick={this.props.history.goBack}>Back</button>
       </div>
        {this.props.isLoading && <p>Loading....</p>}
        {this.props.chocolates.map (c => (
           <> 
           <div className="blist">
           
           {<img src={c.image} style={{height:"250px",width:"250px"}}/>}
           <div className="listname"><Link  style={{    color: "brown" }}to={`/chocolates/${c.id}`}>{c.name}</Link></div>
           
           </div>
            
            {/* <br/> */}
            </>
        ))}
        
        </>
        );
    }

}

function mapStateToProps(appState) {
    return {
        chocolates:appState.chocolateState.chocolates,
        isLoading: appState.chocolateState.isLoading,
       
       
    };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(ChocolateList);