import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Note from "./Note";


class NotesBody extends Component {
    
    state = {
        columns : [
        {path: 'title', label: "TITLE", content: note => <Link to={`/notes/${note._id}`}> {note.title}</Link>  },  
          {path: 'publishDate', label: "PUBLISH DATE" },
          {path: 'authors.name', label: "AUTHOR"},      
          {path: 'source', label: "SOURCE"},
      
        
    
        ]
    }
    
    render() { 
       
        const {notes, sortColumn, onSort} = this.props;
    
        return ( <Note
                columns={this.state.columns}
                data={notes}
                sortColumn={sortColumn}
                onSort={onSort}/> );
    }
}
 
    
  
 
export default NotesBody;
