import React, { Component } from "react";
import AppContainer from "../../containers/AppContainer.js";
import { yungKeys } from "../../helpers/keys.js";
import RC2 from "react-chartjs2";

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
    this.fetchSurflineTides();
    this.fetchDailyReport();
  }

  fetchDailyReport = async () => {
    const { spot } = this.state;
    let spitDaily, surflineDaily, mswDaily;

    if (spot.surfline_id) {
      const res = await fetch(`https://aggro-api.herokuapp.com/api/v1/surfline/daily/${spot.surfline_id }/parsed`);
      const forecast = await res.json();
      surflineDaily = forecast[`${spot.surfline_id}`];
    }

    if (spot.spitcast_id) {
      const res = await fetch(`http://aggro-api.herokuapp.com/api/v1/spitcast/daily/${spot.spitcast_id}`);
      const forecast = await res.json();
      spitDaily = forecast;
    }

    if (spot.msw_id) {
      const res = await fetch(`http://localhost:3000/api/v1/msw/weekly/${spot.msw_id}`);
      const forecast = await res.json();
      mswDaily = forecast;
    }

    this.setState({
      surflineDaily: surflineDaily,
      spitDaily: spitDaily,
      mswDaily: mswDaily
    });
  };

  dailyForecastChart() {
    const { surflineDaily, spitDaily, mswDaily } = this.state;
    let surflineMin = [];
    let surflineMax = [];
    let dates = [];
    for (let key in surflineDaily) {
      dates.push(key);
      surflineMin.push(surflineDaily[key]["min_height"]);
      surflineMax.push(surflineDaily[key]["max_height"]);
    }
    let spitData;
    let spitTimes;
    let halfSpitTime;
    if (spitDaily) {
      spitData = spitDaily.map(data => data.size_ft);
      spitTimes = spitDaily.map(data => `${data.day} ${data.hour}`);
      halfSpitTime = spitTimes.splice(0, Math.floor(spitTimes.length / 3.5));
    }

    let mswMax;

    if (mswDaily) {
      mswMax = mswDaily.map(forecast => forecast.swell.absMaxBreakingHeight);
    }

    const data = {
      labels: halfSpitTime || dates,
      datasets: [
        // {
        //   label: "Surf Min",
        //   backgroundColor: "mediumseagreen",
        //   borderColor: "#52B3D9",
        //   borderWidth: 1,
        //   hoverBackgroundColor: "#C5EFF7",
        //   hoverBorderColor: "#52B3D9",
        //   data: surflineMin,
        //   stack: 1
        // },
        {
          label: "MSW Max",
          borderColor: "#52B3D9",
          borderWidth: 1,
          hoverBackgroundColor: "#C5EFF7",
          hoverBorderColor: "#52B3D9",
          data: mswMax,
          stack: 3
        },
        {
          label: "Surfline Max",
          backgroundColor: "#52B3D9",
          borderColor: "#52B3D9",
          borderWidth: 1,
          hoverBorderColor: "#52B3D9",
          data: surflineMax,
          stack: 1
        }, {
          label: "Spitcast Max",
          backgroundColor: "mediumseagreen",
          borderColor: "#52B3D9",
          borderWidth: 1,
          hoverBackgroundColor: "white",
          hoverBorderColor: "#52B3D9",
          data: spitData,
          stack: 2
        }
      ]
    };

    const options = {
      scales: {
        xAxes: [
          {
            stacked: true
          }
        ],
        yAxes: [
          {
            stacked: true
          }
        ]
      }
    };

    return (
      <div className="frames">
        <RC2 data={data} options={options} type="bar" />
      </div>
    );
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

  fetchSurflineTides = async () => {
    const { spot } = this.state;
    const res = await fetch(
      `http://localhost:3000/api/v1/surfline/tides/${spot.surfline_id}`
    );
    const tides = await res.json();
    this.setState({ surflineTides: tides });
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

  renderConditions() {
    const { surflineForecast } = this.state;
    if (surflineForecast) {
      const { generalCondition } = surflineForecast.Analysis;
      if (generalCondition[0]) {
        return `Conditions: ${generalCondition[0]}`;
      }
    }
  }

  tideChart() {
    const { surflineTides } = this.state;
    let tides = surflineTides.dataPoints.map(d => d.height);
    let times = surflineTides.dataPoints.map(t => t.utctime);
    let halfTimes = times.splice(0, Math.floor(tides.length / 2));
    let halfTides = tides.splice(0, Math.floor(tides.length / 2));

    const data = {
      labels: halfTimes,
      datasets: [
        {
          label: "Tides",
          fill: false,
          borderColor: "#2C3E50",
          pointBorderColor: "#2C3E50",
          pointBackgroundColor: "#fff",
          pointHoverBackgroundColor: "#2C3E50",
          pointHoverBorderColor: "#fff",
          pointRadius: 2,
          pointHitRadius: 2,
          data: halfTides
        }
      ]
    };

    return (
      <div className="frames">
        <RC2 data={data} type="line" />
      </div>
    );
  }

  render() {
    const { surflineForecast, spot, surflineTides } = this.state;
    return (
      <div className="detail-container">
        <h2>{surflineForecast && surflineForecast.name}</h2>
        <h3>{this.renderConditions()}</h3>
        <h3>{surflineForecast && surflineForecast.Analysis.surfRange[0]}</h3>
        {this.myJankyComponent()}
        {this.dailyForecastChart()}
        {surflineTides && this.tideChart()}
        <div className="frames">
          <iframe
            className="frames"
            width="100%"
            height="650"
            src={`https://embed.windytv.com/embed2.html?lat=${spot.lat}&lon=${
              spot.lon
            }&zoom=8&level=surface&overlay=wind&menu=&message=&marker=&forecast=12&calendar=now&location=coordinates&type=map&actualGrid=&metricWind=kt&metricTemp=%C2%B0C`}
            frameBorder="0"
          />
          <iframe
            className="frames"
            width="100%"
            height="650"
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/place?key=${yungKeys}&q=${
              spot.lat
            }, ${spot.lon}&maptype=satellite`}
          />
        </div>
      </div>
    );
  }
}

export default AppContainer(SpotDetail);
