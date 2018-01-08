import React, { Component } from "react";
import { Map, TileLayer, Polyline } from "react-leaflet";
import AppContainer from "../../containers/AppContainer";
import SpotMarker from "../spotMarker/SpotMarker";
import "./SpotMap.css";

class SpotMap extends Component {
  constructor() {
    super();
    this.state = {
      mapLayers: [
        { type: "Satellite", url: "World_Imagery/MapServer/" },
        { type: "Nat Geo", url: "NatGeo_World_Map/MapServer/" },
        { type: "Physical", url: "World_Physical_Map/MapServer/" },
        { type: "Street", url: "World_Street_Map/MapServer/" }
      ],
      currentLayer: "NatGeo_World_Map/MapServer/",
      current: "",
      position: [35.2208, -119.6982],
      maxBounds: [[180, -180], [-180, 180]],
      zoom: 7,
      spots: ""
    };
  }

  resetMap() {
    this.setState({ spots: "", zoom: 2, position: [0, -0] });
  }

  renderSpots() {
    const { current, zoom } = this.state;
    const { spots } = this.props;
    if (spots.length > 0) {
      return spots.map((spot, i) => {
        return (
          <SpotMarker
            spot={spot}
            zoom={zoom}
            resetMap={() => this.resetMap()}
            lat={spot.lat}
            lon={spot.lon}
            key={i}
          />
        );
      });
    }
  }

  render() {
    const {
      zoom,
      position,
      spots,
      mapLayers,
      currentLayer,
      maxBounds
    } = this.state;

    return (
      <Map
        updateWhenZooming={false}
        minZoom={2}
        animate={true}
        useFlyTo={true}
        ref={input => (this.map = input)}
        center={position}
        zoom={zoom}
        maxBounds={maxBounds}>
        <TileLayer
          url={`https://server.arcgisonline.com/ArcGIS/rest/services/${currentLayer}/tile/{z}/{y}/{x}`}
        />
        {this.renderSpots()}
      </Map>
    );
  }
}

export default AppContainer(SpotMap);