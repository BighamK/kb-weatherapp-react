import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const [weatherData, setWeatherData] = useState({ ready: false });
    
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            city: response.data.name,
            date: "Friday 10:45"
        });
    }
   
    if (weatherData.ready) {
    return (
        <div className="Weather">
            <h1>Weather Forecast</h1>
            <form>
                <div className="row">
                    <div className="col-9">
                        <input
                        type="search"
                        placeholder="Type in your city..."
                        className="form-control"
                        autoFocus="on"
                        />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </div>
            </form>
            <h2>{weatherData.name}</h2>
            <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img 
                    src={weatherData.iconUrl} 
                    alt={weatherData.description} 
                    />
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                     <span className="unit">°F</span>
                </div>
                <div className="col-6">
                  <ul>
                      <li>Precipitation: unknown</li>
                      <li>Humidity: {weatherData.humidity} %</li>
                      <li>Wind: {weatherData.wind} mph</li>
                 </ul>
                 </div>
            </div>
        </div>
    );
    } else {

    const apiKey = "6a8171dcf4cbfa0f9704ad8a2b755aa0";
    let city = "Portland";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}