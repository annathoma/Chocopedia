import React, {Component} from "react";
import { connect } from "react-redux";
import { getBrandAC} from "../actionCreators/chocolateAC";
import { Link} from "react-router-dom";
import NavBar from "./NavBar";
import Banner from "./Banner";
import "./ChololateListItem.css"
class BrandList extends Component {
    componentDidMount(){
        this.props.dispatch(getBrandAC());
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
        {this.props.brands.map (b => (
        <>
            <div className="blist" >
           <img  src={b.logo} style={{height:"250px",width:"250px"}}/>
            <div className="listname"> <Link  style={{    color: "brown" } }to={`/brands/${b.id}`}>{b.name}</Link></div>
        
            </div>
        </>

        ))}

        
        </>
        );
    }

}

function mapStateToProps(appState) {
    return {
        brands:appState.brandState.brands,
        isLoading: appState.brandState.isLoading
    };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(BrandList);