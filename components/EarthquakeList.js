import React, { Component } from "react";
import moment from 'moment';
import earthquakes from "../data/earthquakes";


export default class EarthquakeList extends Component {
  render() {
    let quakes = earthquakes.features.map((item, index) => {
    
      return (
        <div className="col-sm-6" key={item.id}>
          <div className="card">
            <div className="card-block">
              <h4 className="card-title">{item.properties.place}</h4>
              <h6 className="card-subtitle mb-2 text-muted">
                Magnitude: {item.properties.mag}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Time: {moment(item.properties.time).format("llll")}
              </h6>
              <p className="card-text">
                Coordinates: {item.geometry.coordinates}
              </p>

              <a href={item.properties.url} className="card-link">
                USGS Event Link
                </a>
            </div>
          </div>
        </div>
      );
    })

    return (
      <div className="quake-list">

        <div className="row">
          {quakes}
        </div>

      </div>
    );
  }   
}