import React, { Component } from "react";
import { Route } from "react-router-dom";
import AppContainer from "../../containers/AppContainer";
import SpotMap from "../spotMap/SpotMap";
import NavBar from "../navBar/Navbar";
import Hype from "../hype/Hype";
import Feed from "../feed/Feed";
import Login from "../login/Login";
import Forecast from "../forecast/Forecast";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.checkAuth = this.checkAuth.bind(this);
  }
  // componentDidMount() {
  //   this.props.fetchSpots();
  // }
  componentWillMount() {
    this.checkAuth();
  }

  checkAuth() {
    const { sessionReducer, history } = this.props;
    sessionReducer ? history.push("/map") : history.push("/login");
    console.log(sessionReducer);
  }

  render() {
    return (
      <div className="App">
        <NavBar history={this.props.history} />
        <Route exact path="/map" component={SpotMap} />
        <Route exact path="/forecast" component={Forecast} />
        <Route exact path="/hype" component={Hype} />
        <Route exact path="/feed" component={Feed} onEnter={this.checkAuth} />
        <Route exact path="/login" component={Login} />

      </div>
    );
  }
}

export default AppContainer(App);
