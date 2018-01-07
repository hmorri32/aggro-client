import React, { Component } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import AppContainer from "../../containers/AppContainer";
import { Link } from "react-router-dom";

L.Icon.Default.imagePath = ".";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

class SpotMarker extends Component {
  render() {
    const { spot, resetMap, zoom, lat, lon } = this.props;
    return(
      <Marker position={[parseFloat(lat), parseFloat(lon)]}>
        <Popup keepInView={true} className='custom-popup'>
          <h3>{spot.name}</h3>
        </Popup>
      </Marker>
    )
  }
}

export default SpotMarker;
