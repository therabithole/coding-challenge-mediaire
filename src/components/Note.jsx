import React, { Component } from 'react'
import Sort from "./reusable/Sort";
import NoteContent from './NoteContent';

class Note extends Component {
    state = {  }
    render() { 
              
    const {columns , data, sortColumn, onSort} = this.props;
        
        return (

    <table className="table">
        <Sort 
        columns= {columns}
        sortColumn = {sortColumn}
        onSort = {onSort} 
        />
        <NoteContent
        data={data} columns={columns}/>

</table> );
    }
}
 
export default Note;