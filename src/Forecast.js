import React from "react";
import "./Forecast.css";

export default function Forecast() {
    return <div className="Forecast">
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
}