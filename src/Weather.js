import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
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
            <h1> Current City </h1>
            <ul>
                <li>Date and Time</li>
                <li>Description</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img 
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy"
                    />
                    <span className="temperature">50</span>
                     <span className="unit">°F</span>
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