import { Route, Switch, Redirect } from "react-router-dom";
import Navigation from './components/Navigation';
import Notes from './components/Notes';
import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
    <Navigation/>   
    <Route path ="/" component={Notes}/>
    </div>
  );
}

export default App;
