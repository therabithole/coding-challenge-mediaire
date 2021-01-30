import React, { Component } from 'react';
import {getNote} from "../services/notesService.js"
class NotesForm extends Component {
    state = { 
        note: {
            title: '',
            authorsId: '',
            source: '',
         
        }}


     componentDidMount() {
        const notesId = this.props.match.params.id;
        console.log(notesId)
        if (notesId === 'new') return;

        const note = getNote(notesId);
        this.setState({note: this.noteViewModel(note)})
     }

  
     handleChange =  ({currentTarget: input }) => {

            const note = {...this.state.note};
            note[input.name] = input.value;
        console.log(note)
            this.setState({note})
            
        }


    noteViewModel(note) {
        return {
            _id: note._id,
            title: note.title,
            autorId: note.authors._id,
            source: note.source}    
       }

       handleSubmit = event => {
        event.preventDefault();
        console.log("default full page reload prevented ")
       }
   
    render() { 

        const {note} = this.state; 

        return (<form onSubmit={this.handleSubmit}>

            <div class="form-group">
              <label for="title"> Title</label>
              <input type="text"
               className="form-control" 
               id="title"
               name="title"
               value= {note.title}
               placeholder="Enter new note title"
               onChange={this.handleChange}/>
            </div>

            <div className="form-group">
              <label for="source"> Source </label>
              <input type="text"
               className="form-control" 
               id="source"
               name="source"
               value= {note.source}
               placeholder="Enter source"
               onChange={this.handleChange}/>
            </div>
            
            <div class="form-group">
              
            </div>
            
            <button className="btn btn-primary">  Change Note </button>
        
          </form> );
    

    
}}
 
export default NotesForm;