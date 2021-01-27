import React, { Component } from 'react';
import _ from 'lodash'

// tableBody
class NoteContent extends Component {
  
    
    renderProduct = (product, column) => {
        if (column.content) return column.content(product) 
        
       return _.get(product, column.path) 
    }
    
    createKey = (product, column) => {
        return product._id + (column.path || column.key) 
    }
    render() { 
    
        const {data, columns } = this.props;
        
        
        return ( <tbody> {data.map( product => 
            <tr key={product._id}>
            {columns.map(column => 
                         <td key={this.createKey(product, column)}> 
                         {this.renderProduct(product, column)}
                         </td> )}
                
        </tr>
                                   )}
            
        </tbody> );
    }
}
 
export default NoteContent;