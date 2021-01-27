
import * as authorsAPI from "./authorService";
const notes = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "This is a news story",
    authors:  { _id: "5b21ca3eeb7f6fbccd471818", name: "Max Mustermann" },
    source: "Reuters",  
    publishDate: "2019-02-17",
 
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "This is a news story",
    authors:  { _id: "5b21ca3eeb7f6fbccd471814", name: "Jane Doe" },
    source: "Reuters",  
    publishDate: "2019-02-17",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "yhis is a news story",
    authors:  { _id: "5b21ca3eeb7f6fbccd471820", name: "John Doe" },
    source: "Reuters",  
    publishDate: "2019-02-17",
    
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Ehis is a news story",
    authors:  { _id: "5b21ca3eeb7f6fbccd471818", name: "Max Mustermann" },
    source: "Reuters",  
    publishDate: "2019-02-17",
    
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "This is a news story",
    authors:  { _id: "5b21ca3eeb7f6fbccd471818", name: "Max Mustermann" },
    source: "Reuters",  
    publishDate: "2019-02-17",
    
  },

];

export function getNotes() {
  return notes;
}

export function getNote(id) {
  return notes.find(n => n._id === id);
}

export function saveNote(note) {
  let noteInDb = notes.find(n => n._id === note._id) || {};
  noteInDb.title = note.title;
  noteInDb.author = authorsAPI.authors.find(a => a._id ===note.authorsId);
  noteInDb.source = note.source
  noteInDb.author = note.author;

  if (!noteInDb._id) {
    noteInDb._id = Date.now().toString();
    notes.push(noteInDb);
  }

  return noteInDb;
}

