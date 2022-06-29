import React, { useState } from "react";

import WeatherMain from "./WeatherMain";
import ForecastWeek from "./ForecastWeek";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            precipitation: response.data.precipitation,
            city: response.data.name,
            date: new Date(response.data.dt * 1000)
        });
    }

    function search() {
        const apiKey = "6a8171dcf4cbfa0f9704ad8a2b755aa0";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);
    }


   function handleSubmit(event) {
       event.preventDefault();
       search();
   }

   function handleCityChange(event) {
setCity(event.target.value);
   }
   


    if (weatherData.ready) {
    return (
        <div className="container">
        <div className="Weather">
            <h1>Weather Forecast</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input
                        type="search"
                        placeholder="Type in your city..."
                        className="form-control"
                        autoFocus="on"
                        onChange={handleCityChange}
                        />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </div>
            </form>
            <WeatherMain data={weatherData} />
            <ForecastWeek coordinates={weatherData.coordinates} />
</div>
        </div>
    );
    } else {
        search();
    return "Loading...";
  }
}