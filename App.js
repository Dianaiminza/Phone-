import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Default from './Components/Default';
import Details from './Components/Details';
class App extends Component{
  render(){
  return (
   <React.Fragment>
<Navbar></Navbar>

<Switch>
<Route path exact="/" component ={ProductList}></Route>
<Route path="/details" component ={Details}></Route>
<Route path="/cart" component ={Cart}></Route>

<Route component ={Default}></Route>

</Switch>


   </React.Fragment>
  );
}
}

export default App;
