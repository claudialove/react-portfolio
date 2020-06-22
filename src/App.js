import React from 'react';
import './App.css';
//this parent component holds all of the <Route> type components
//and tells app what to render when
//we use an alias to call browser-router as just router
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
    </div>
    </Router>
  );
}

export default App;
