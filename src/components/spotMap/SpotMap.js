import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import { Controls } from "../mapControls/Controls.js";
import AppContainer from "../../containers/AppContainer";
import SpotMarker from "../spotMarker/SpotMarker";
import satellite from "./assets/satellite.svg";
import globe from "./assets/globe.svg";
import "./SpotMap.css";

class SpotMap extends Component {
  constructor() {
    super();
    this.state = {
      mapLayers: [
        { type: "Satellite", url: "World_Imagery/MapServer/", img: satellite },
        { type: "Nat Geo", url: "NatGeo_World_Map/MapServer/", img: globe }
      ],
      currentLayer: "NatGeo_World_Map/MapServer/",
      position: [35.2208, -119.6982],
      maxBounds: [[180, -180], [-180, 180]],
      zoom: 7,
      spots: ""
    };
  }

  componentWillMount = async () => await this.props.fetchSpots();

  resetMap() {
    this.setState({ spots: "", zoom: 2, position: [0, -0] });
  }

  renderSpots() {
    const { zoom } = this.state;
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

  handleClick(e) {
    const { mapLayers } = this.state;
    return mapLayers.map(layer => {
      if (layer.type === e.target.id) {
        this.setState({ currentLayer: layer.url });
      }
    });
  }

  render() {
    const {
      zoom,
      position,
      mapLayers,
      currentLayer,
      maxBounds
    } = this.state;

    return (
      <div>
        <Controls
          mapLayers={mapLayers}
          handleClick={this.handleClick.bind(this)}
        />
        <Map
          updateWhenZooming={false}
          minZoom={2}
          animate={true}
          useFlyTo={true}
          ref={input => (this.map = input)}
          center={position}
          zoom={zoom}
          maxBounds={maxBounds}
        >
          <TileLayer
            url={`https://server.arcgisonline.com/ArcGIS/rest/services/${currentLayer}/tile/{z}/{y}/{x}`}
          />
          {this.renderSpots()}
        </Map>
      </div>
    );
  }
}

export default AppContainer(SpotMap);
