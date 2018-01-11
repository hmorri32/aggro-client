import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppContainer from "../../containers/AppContainer";
import RC2 from "react-chartjs2";
import "./Forecast.css";

class Forecast extends Component {
  constructor() {
    super();
  }

  buildCharts() {
    const { spotsWithForecast } = this.props;
    return spotsWithForecast.map((spot, i) => {
      if (spot.forecast) {
        let times = spot.forecast.map(
          forecast => `${forecast.day} ${forecast.hour}`
        );
        let max = spot.forecast.map(forecast => forecast.size_ft);

        let data = {
          labels: times,
          datasets: [
            {
              label: "Spitcast Max",
              backgroundColor: "mediumseagreen",
              borderColor: "#52B3D9",
              borderWidth: 1,
              hoverBackgroundColor: "white",
              hoverBorderColor: "#52B3D9",
              data: max
            }
          ]
        };

        return (
          <div key={i}>
            <Link to={{pathname: `forecast/${spot.surfline_id}`, spotData: spot}}>
              <h2>{spot.name}</h2>
            </Link>
            <RC2 data={data} type="bar" />
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div
        className="forecast"
        ref={div => {
          this.yungDiv = div;
        }}>
        {this.props.spotsWithForecast && this.buildCharts()}
      </div>
    );
  }
}

export default AppContainer(Forecast);

/* eslint-disable */

// ultraHugeMethod() {
// const { spots } = this.props;
// GARBAGE FIRE!

// spots.forEach(spot => {
//   fetch(`https://aggro-api.herokuapp.com/api/v1/surfline/weekly/${spot.surfline_id}/parsed`)
//   .then(stuff => stuff.json())
//   .then(json => {

//   })
// })

// let promiseTank = []
// spots.forEach(spot => promiseTank.push(fetch(`https://aggro-api.herokuapp.com/api/v1/surfline/weekly/${spot.surfline_id}/parsed`)));
// Promise.all(promiseTank).then(res => console.log(res))

// return spots.map(async (spot, i) => {
//   const { surfline_id, msw_id, spitcast_id } = spot;
//   let surfLineWeekly = [];
//   let dates = [];
//   if (surfline_id !== null) {
//     const res = await fetch(
//       `https://aggro-api.herokuapp.com/api/v1/surfline/weekly/${
//         spot.surfline_id
//       }/parsed`
//     );
//     let forecast = await res.json();
//     let surflineData = forecast[`${surfline_id}`];
//     for (let key in surflineData) {

//       dates.push(key);
//       surfLineWeekly.push(surflineData[key]["max_height"]);
//       surfLineWeekly.push(surflineData[key]["max_height"]);
//     }
//   }
//   // fetch(`https://aggro-api.herokuapp.com/api/v1/surfline/weekly/${spot.surfline_id }/parsed`)
//   // .then(response => response.json())
//   // .then(json => {
//   //   console.log(json)
//   //   for (let key in json) {
//   //    dates.push(key);
//   //    surfLineWeekly.push(json[key]["max_height"]);
//   //    surfLineWeekly.push(json[key]["max_height"]);
//   //   }
//   // })

//   const data = {
//     labels: dates,
//     datasets: [
//       {
//         label: "Surfline Max",
//         backgroundColor: "#52B3D9",
//         borderColor: "#52B3D9",
//         borderWidth: 1,
//         hoverBorderColor: "#52B3D9",
//         data: surfLineWeekly,
//         stack: 1
//       }
//     ]
//   };

//   return (
//     <div key={i}>
//       <RC2 data={data} type="bar" />
//     </div>
//   );
// });
// }
