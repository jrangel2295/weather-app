import React, { useState } from "react";
import "./index.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=2c212c1c3d954bc552ac091e646cf2f9`;

  const searchLocation = event => {
    if (event.key === "Enter") {
      axios.get(url).then(response => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          placeholder="Enter Location"
          onKeyPress={searchLocation}
          type="text"
        ></input>
      </div>
      <div className="container">
        <div className="top"></div>
        <div className="location">
          <h1>{data.name}</h1>
        </div>
        <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>
      <div className="bottom">
        <div className="humidity">
          {data.main ? <p>{data.main.humidity}%</p> : null}
        </div>
        <div className="feels">
          {data.main ? <p>{data.main.feels_like.toFixed()}°F</p> : null}
          {/* <p>feels like</p> */}
        </div>
      </div>
    </div>
  );
}

export default App;
