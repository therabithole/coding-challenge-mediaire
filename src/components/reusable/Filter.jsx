import React, { Component } from 'react';


const Sidebar = (props) => {
    
    const {items, textProperty, idProperty, onItemSelect, selectedItem, } = props;
   
    
    return ( <React.Fragment>
         <ul className="list-group filter">
         <h5> FILTER BY AUTHOR </h5>
            {items.map(item=> 
                <li onClick={()=> onItemSelect(item)} key={item[idProperty]}
            className={item === selectedItem ? "list-group-item active" : "list-group-item"}>{item[textProperty]}
                </li>)}
             </ul> 

            </React.Fragment> );
}
 
export default Sidebar;