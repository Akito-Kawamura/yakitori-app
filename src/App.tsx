// src/App.tsx
import React from "react";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
};


export default App;
