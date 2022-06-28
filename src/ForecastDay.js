import React from "react";


export default function ForecastDay(props) {
function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
}

function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
}

function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
    return days[day];
}

    return (
        <div>
        <div className="Daily">{day()}

</div>
<div className="Daily-temps">
   <span className="Daily-temp-max">{maxTemperature()}</span>
    <span className="Daily-temp-min">| {minTemperature()}</span>
</div>
</div>
    );
}