import React, { useState } from "react";
import axios from "axios";

import WeatherMain from "./WeatherMain";
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
            date: new Date(response.data.dt * 1000)
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
            <WeatherMain data={weatherData}/>

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