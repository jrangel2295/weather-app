import React, {useState} from "react";
import './index.css';
// import axios from 'axios'

function App() {

  return (
    <div className="app">
      <p> this working</p>
      <div className="container"></div>
      <div className="top"></div>
      <div className="location">
        <h1>Austin</h1>
      </div>
      <div className="temp">
        <h1>65°F</h1>
      </div>
      <div className="description"></div>
      <div className="humidity">
        <h1>spicy</h1>
      </div>
      <div className="feels">
        <p>hot af</p>
      </div>
      <div className="bottom"></div>

    </div>
  );
}

export default App;
