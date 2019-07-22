import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch} from "react-router-dom";
import ChocolateList from './components/ChocolateList';
import ChocolateDetails from './components/ChocolateDetails';
import Home from './components/Home';
import NavBar from './components/NavBar';
import BrandList from './components/BrandList';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Search from './components/Search';
import BrandDetails from './components/BrandDetails';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {

 /*
  let chocolateResponse= fetch(`http://localhost:4000/chocolates`)
 .then(function(response) {
   response.json();
   //console.log(response);
   let r= JSON.stringify(response);
   console.log(r)
   return r;
 })
 */

  
  
  return (
    <div>
  
   
   
   <Switch>
     <Route path="/" exact component={Login} />
     <Route path="/signup" exact component={SignUp} />
     <Route path="/home" exact component={Home} />
     <Route path="/chocolates" exact component={ChocolateList} />
     <Route path="/chocolates/:id" component={ChocolateDetails} />
     <Route path="/brands" exact component={BrandList} />
     <Route path="/brands/:id" component={BrandDetails} />
     
     

   </Switch>
   <Footer/>
   
   </div>
  
  );
  
}

export default App;
