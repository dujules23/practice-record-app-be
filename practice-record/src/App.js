import './App.css';
import React from "react";
import { Home, Login } from "./view/components/index"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;
