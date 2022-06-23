import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input
                        type="search"
                        placeholder="Type in your city..."
                        className="form-control"
                        />
                    </div>
                </div>
            </form>
            <h1> Main Weather </h1>
            <ul>
                <li>Date and Time</li>
                <li>Description</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img 
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy"/>50°F
                </div>
                <div className="col-6">
                  <ul>
                      <li>Precipitation</li>
                      <li>Humidity</li>
                      <li>Wind</li>
                 </ul>
                 </div>
            </div>
        </div>
    )
}