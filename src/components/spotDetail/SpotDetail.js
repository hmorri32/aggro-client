import React, { Component } from "react";
import AppContainer from "../../containers/AppContainer.js";
import { yungKeys } from "../../helpers/keys.js";
import "./SpotDetail.css";

class SpotDetail extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    const { spotData } = this.props.location;
    this.setState({ spot: spotData });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchSurflineData();
  }

  fetchSurflineData = async () => {
    const { spot } = this.state;
    const res = await fetch(
      `https://aggro-api.herokuapp.com/api/v1/surfline/weekly/${
        spot.surfline_id
      }`
    );
    const forecast = await res.json();
    this.setState({ surflineForecast: forecast });
  };

  createMarkup() {
    if (this.state.surflineForecast) {
      return {
        __html: `${this.state.surflineForecast.Analysis.short_term_forecast}`
      };
    }
  }

  myJankyComponent() {
    return (
      <div className="analysis" dangerouslySetInnerHTML={this.createMarkup()} />
    );
  }

  render() {
    const { surflineForecast, spot } = this.state;
    return (
      <div className="detail-container">
        <h2>{surflineForecast && surflineForecast.name}</h2>
        <h3>
          Conditions:{" "}
          {surflineForecast &&
            surflineForecast.Analysis.generalCondition[0]}{" "}
        </h3>
        <h3>
          {surflineForecast &&
            surflineForecast.Analysis.surfRange[0]}
        </h3>

        {this.myJankyComponent()}
        <div className="frames">
          <iframe
            className="frames"
            width="100%"
            height="650"
            src={`https://embed.windytv.com/embed2.html?lat=${spot.lat}&lon=${spot.lon}&zoom=8&level=surface&overlay=wind&menu=&message=&marker=&forecast=12&calendar=now&location=coordinates&type=map&actualGrid=&metricWind=kt&metricTemp=%C2%B0C`}
            frameBorder="0"
          />
          <iframe
            className="frames"
            width="100%"
            height="650"
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/place?key=${yungKeys}&q=${spot.lat}, ${spot.lon}&maptype=satellite`}
          />
        </div>
      </div>
    );
  }
}

export default AppContainer(SpotDetail);
