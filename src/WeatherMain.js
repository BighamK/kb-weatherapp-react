import React from "react";
import FormattedDate from "./FormattedDate";
import TemperatureConv from "./TemperatureConv";


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
                <div className="float-left">
            <img 
            src={props.data.iconUrl} 
            alt={props.data.description} 
            />
            </div>
            <div className="mt-3">
           <TemperatureConv fahrenheit={props.data.temperature} />
           </div>
        </div>
        </div>
        <div className="col-6">
          <ul>
              <li>Precipitation: {props.data.rain['1h']}</li>
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind: {props.data.wind} mph</li>
         </ul>
         </div>
    </div>
    </div>
    );
}