
import * as authorsAPI from "./authorService";
const notes = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Gamestonk and the case for investor caution",
    authors:  { _id: "5b21ca3eeb7f6fbccd471818", name: "Max Mustermann" },
    source: "Reuters",  
    publishDate: "2019-02-17",
 
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "UK says it expects no vaccine interruption from EU; Brussels admits Irish 'blunder'",
    authors:  { _id: "5b21ca3eeb7f6fbccd471814", name: "Jane Doe" },
    source: "Reuters",  
    publishDate: "2019-02-17",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Putin's former judo partner says he owns palace which opposition links to Russian leader",
    authors:  { _id: "5b21ca3eeb7f6fbccd471820", name: "John Doe" },
    source: "Reuters",  
    publishDate: "2019-02-17",
    
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Germany is already ordering vaccines for 2022, minister says",
    authors:  { _id: "5b21ca3eeb7f6fbccd471818", name: "Max Mustermann" },
    source: "Reuters",  
    publishDate: "2019-02-17",
    
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Robinhood, Reddit protected from lawsuits",
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

