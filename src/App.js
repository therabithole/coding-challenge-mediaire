import { Route, Switch, Redirect } from "react-router-dom";
import Navigation from './components/Navigation';
import Notes from './components/Notes';
import NotesForm from './components/NotesForm';
import logo from './logo.svg';
import './App.css';




function App() {
  return (
    <div className="myApp">
    <Navigation/>
    <Switch>
    <Route path="/notes/:id" component={NotesForm}/>
    <Route path ="/" component={Notes}/>
  
    </Switch>
    </div>
  );
}

export default App;
