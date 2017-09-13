import React, { Component } from "react";
import moment from 'moment';
import earthquakes from "../data/earthquakes";


export default class EarthquakeList extends Component {
  render() {
    let earthquakeFeatures = this.features.map(earthquakes, index) => (
        
    );



    return (
        <div className="col-sm-6" key={earthquakes.features.id}>
          <div className="card">
            <div className="card-block">
              <h4 className="card-title">{earthquakes.features.place}</h4>
              <h6 className="card-subtitle mb-2 text-muted">
                Magnitude: {earthquakes.features.mag}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Time: {moment(earthquakes.features.time).format("llll")}
              </h6>
              <p className="card-text">
                Coordinates: {earthquakes.features.coordinates}
              </p>

              <a href={earthquakes.features.url} className="card-link">
                USGS Event Link
              </a>
            </div>
        </div>
      </div>
    );    
  }
}
return (
<div className="quake-list">

  <div className="row">
    {quakes}
  </div>

  </div>
)