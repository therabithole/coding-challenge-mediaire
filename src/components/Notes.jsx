import React, { Component } from 'react';

import { getNotes } from '../services/notesService';
import { getAuthors } from '../services/authorService';

import {Link} from "react-router-dom";
import NotesBody from './NotesBody';

import Filter from "./reusable/Filter"
import SearchNotes from './reusable/SearchNotes';

import _ from "lodash"




class Notes extends Component {
    state = { 
       notes : [],
       selectedItem: null,
       searchQuery: "",
      sortColumn: {path: "title", order: 'asc'}
     }

componentDidMount() {
    
    this.setState({notes: getNotes(), authors: getAuthors()})

    
}

handleNotesSelect = item => {
    this.setState({selectedItem: item, searchQuery: ""});
}

  
handleSort = sortColumn =>{
    this.setState({sortColumn})
}


handleSearch = query => {
    console.log(query)
    this.setState({searchQuery: query , selectedItem: null})
}

getPageData = () => {

    const {notes: allNotes, searchQuery, selectedItem , sortColumn} = this.state;
    
    let filtered = allNotes;
    if(searchQuery) {
       filtered = allNotes.filter(note => note.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
    } else if (selectedItem && selectedItem._id) {
        filtered = allNotes.filter( note => note.authors._id === selectedItem._id)
    }
       
    const sortedNotes = _.orderBy(filtered, [sortColumn.path],[sortColumn.order] )
   
        
    return {totalCount: filtered.length, data: sortedNotes } 
}


    render() { 

        const {length: count} = this.state.notes
        
        const { sortColumn, searchQuery} = this.state;
      

       
        if(count === 0) 
        return <p> There are no notes on our platform </p> 

   
const {data: sortedNotes} = this.getPageData();

        return ( 
        <section className="content notes">
   
        <Filter
        items={this.state.authors}
        selectedItem={this.state.selectedItem}
        onItemSelect={this.handleNotesSelect}
        textProperty="name"
        idProperty="_id"
        />
            <section className="header">
            <SearchNotes value={searchQuery} 
            onChange={this.handleSearch}/>
           
</section>
  
            <section className="products note">
           
              <NotesBody 
              notes ={sortedNotes}
            
              onSort={this.handleSort}
              sortColumn={sortColumn}
              />    
                </section> 
           
        </section> );
    }
}
 
export default Notes;