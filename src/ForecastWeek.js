import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";


export default function ForecastWeek(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

function handleResponse(response) {
 setForecast(response.data.daily);
 setLoaded(true);
}

if (loaded) {
    return ( 
        <div className="Forecast">
            <div className="row">
                {forecast.map(function (dailyForecast, index) {
                    if (index < 5) {
                    return (
               <div className="col" key={index}>

        <ForecastDay data={dailyForecast} />
        </div>
                );
                    } else {
                        return null;
                    }
                })}
                </div>
            </div>
            );
} else {
    let apiKey = "6a8171dcf4cbfa0f9704ad8a2b755aa0";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    
    
    axios.get(apiUrl).then(handleResponse);
    return null;
}
}