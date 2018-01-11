import React, { Component } from "react";
import AppContainer from "../../containers/AppContainer";
import RC2 from "react-chartjs2";

class Forecast extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.ultraHugeMethod();
  }

  ultraHugeMethod() {
    const { spots } = this.props;
    // GARBAGE FIRE!

    let promiseTank = []
    spots.forEach(spot => promiseTank.push(fetch(`https://aggro-api.herokuapp.com/api/v1/surfline/weekly/${spot.surfline_id}/parsed`)));
    // const promise1 = promiseTank.push(fetch(`https://aggro-api.herokuapp.com/api/v1/surfline/weekly/${spots[0].surfline_id}/parsed`))
    // const promise2 = promiseTank.push(fetch(`https://aggro-api.herokuapp.com/api/v1/surfline/weekly/${spots[1].surfline_id}/parsed`))
    Promise.all(promiseTank).then(res => console.log(res))

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
    //   this.setState({mapData: data })
    //   // return (
    //   //   <div key={i}>
    //   //     <RC2 data={data} type="bar" />
    //   //   </div>
    //   // );
    // });
  }

  render() {
    // const {mapData} = this.state;
    return(
      <div className='login'>
        TODO lol
      </div>
    );
  }
}

export default AppContainer(Forecast);
