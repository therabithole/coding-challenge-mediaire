import React, { Component } from "react";
import {Link } from "react-router-dom";
import Logo from "./Logo"
import "./App.css"

class Navigation extends Component {
  state = {  }
  render() { 
    return (  <section className="header">
 
     <section className="logo-and-nav">
       <ul>
         <li><Link to="/"> <Logo/> </Link ></li>
        
        
       </ul>
     </section>

     </section>
  );
  }
}
 
export default Navigation;





      



