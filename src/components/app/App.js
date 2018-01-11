import React, { Component } from "react";
import { Route } from "react-router-dom";
import AppContainer from "../../containers/AppContainer";
import SpotMap from "../spotMap/SpotMap";
import NavBar from "../navBar/Navbar";
import Hype from "../hype/Hype";
import Feed from "../feed/Feed";
import Login from "../login/Login";
import Forecast from "../forecast/Forecast";
import SpotDetail from "../spotDetail/SpotDetail";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.checkAuth = this.checkAuth.bind(this);
  }

  componentWillMount() {
    this.props.fetchSpotsWithForecast();
    this.checkAuth();
  }

  checkAuth() {
    const { sessionReducer, history } = this.props;
    sessionReducer ? history.push("/map") : history.push("/login");
  }

  render() {
    return (
      <div className="App">
        <NavBar history={this.props.history} />
        <Route exact path="/map" component={SpotMap} />
        <Route exact path="/forecast" component={Forecast} />
        <Route exact path="/forecast/:id" component={SpotDetail} />
        <Route exact path="/hype" component={Hype} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/login" component={Login} />

      </div>
    );
  }
}

export default AppContainer(App);
