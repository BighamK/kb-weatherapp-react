import React, { useState } from "react";

export default function TemperatureConv(props) {
    const [unit, setUnit] = useState("fahrenheit");

function showCelcius (event) {
    event.preventDefault();
    setUnit("celsius");
}

function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
}


    if (unit === "fahrenheit") {

    return (
        <div className="TemperatureConv"> 
 <span className="temperature">{Math.round(props.fahrenheit)}</span>
             <span className="unit">°F | {" "}
              <a href="/" onClick={showCelcius}>
                  °C</a>
                  </span>

        </div>
    );
} else {
    let celsius = (props.fahrenheit - 32) * 5/9; 
    return (
        <div className="TemperatureConv">
        <span className="temperature">{Math.round(celsius())}</span>
        <span className="unit">
        <a href="/" onClick={showFahrenheit}>
        °F</a>{" "}
        | °C
        </span>
        </div>
    );
}
}