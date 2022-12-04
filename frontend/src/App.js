import "./App.css";
import React, { useState, useEffect } from "react";
import LineChart from "./WeatherChart";
import WeatherChart from "./WeatherChart";

function App() {
  const [jsonData, setJsonData] = useState({});
  const [currentTemp, setCurrentTemp] = useState({});

  useEffect(() => {
    function getData() {
      fetch("http://localhost:3333/api/weatherforecast")
        .then((response) => response.json())
        .then((data) => {
          setCurrentTemp(data.current.temp_f);
          setJsonData(data);
        });
    }
    getData();
    const interval = setInterval(() => getData(), 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <div className="menu-div">
        <label>Menu</label>
        <a href="">Hourly chart</a>
      </div>
      <div className="menu-div" style={{ width: "80%" }}>
        <WeatherChart current={currentTemp} data={jsonData} />
      </div>
    </div>
  );
}

export default App;
