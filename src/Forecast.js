import React from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast() {
function handleResponse(response) {

}

let apiKey = "6a8171dcf4cbfa0f9704ad8a2b755aa0";let longitude = 40.7;
let latitude = 74;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;




axios.get(apiUrl).then(handleResponse);
    return ( <div className="Forecast">
        <div className="row">
<div className="col-2">
    <div className="Daily">
    Tues
    Sunny
    </div>
    <div className="Daily-temps">
        <span className="Daily-temp-max">80°</span>
        <span className="Daily-temp-min">| 55°</span>
    </div>
    </div>
</div>
        </div>
    );
}