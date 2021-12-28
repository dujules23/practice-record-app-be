import logo from './logo.svg';
import './App.css';
import React from "react";
import { Login } from "./view/components/index"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  
  return (
    <Router>
    <div className="App">
    </div>
    <Switch>
      <Route exact path={"/login"} component={Login} />
      
    </Switch>  
    
    </Router>
  );
}

export default App;
