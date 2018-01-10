import React, { Component } from "react";
import PropTypes from "prop-types";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import AppContainer from "../../containers/AppContainer";
import { Link } from "react-router-dom";
import { withContext } from "../contextProvider/ContextProvider";

L.Icon.Default.imagePath = ".";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

class SpotMarker extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {
    const LinkWithContext = withContext(Link, this.context);
    const { spot, resetMap, zoom, lat, lon } = this.props;
    return (
      <Marker position={[parseFloat(lat), parseFloat(lon)]}>
        <Popup keepInView={true} className="custom-popup">
          <div>
            <h3>{spot.name}</h3>
            <LinkWithContext
              to={{
                pathname: `/forecast/${spot.surfline_id}`,
                spotData: spot
              }}>
              <button>Click me</button>
            </LinkWithContext>
          </div>
        </Popup>
      </Marker>
    );
  }
}

export default AppContainer(SpotMarker);
