import React, { Component } from 'react';
import medicalLogo from "../assets/Mediaire-Logo-.jpg"
class Logo extends Component {
    state = {  }
    render() { 
        return ( <img className="siteLogo" src={medicalLogo}/>   );
    }
}
 
export default Logo;