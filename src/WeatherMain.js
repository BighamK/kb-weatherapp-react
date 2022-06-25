import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherMain (props) {
    return (
        <div className="WeatherMain">
    <h2>{props.data.city}</h2>
    <ul>
        <li>
            <FormattedDate date={props.data.date} /></li>
        <li className="text-capitalize">{props.data.description}</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
            <div className="d-flex">
            <img 
            src={props.data.iconUrl} 
            alt={props.data.description} 
            />
            <span className="temperature">{Math.round(props.data.temperature)}</span>
             <span className="unit">°F</span>
        </div>
        </div>
        <div className="col-6">
          <ul>
              <li>Precipitation: unknown</li>
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind: {props.data.wind} mph</li>
         </ul>
         </div>
    </div>
    </div>
    );
}