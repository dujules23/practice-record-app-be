import './App.css';
import React from "react";
import { Home, Login } from "./view/components/index"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div className="App">
        Hello world.
      <div>
        <Routes>
          <Route exact path={"/"} component={Home} />
          <Route path={"/login"} component={Login} />
        </Routes> 
      </div>
      </div>
      
    
    </Router>
  );
}

export default App;
