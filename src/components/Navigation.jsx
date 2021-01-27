import React, { Component } from "react";
import {Link } from "react-router-dom";

class Navigation extends Component {
  state = {  }
  render() { 
    return (  <section className="header">
    <section className="logo">  </section> 
 
     <section className="navigation">
       <ul>
         <li><Link to="/"> Home Page </Link ></li>
        
        
       </ul>
     </section>

     </section>
  );
  }
}
 
export default Navigation;





      



