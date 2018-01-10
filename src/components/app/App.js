import React, { Component } from "react";
import { Route } from "react-router-dom";
import AppContainer from "../../containers/AppContainer";
import SpotMap from "../spotMap/SpotMap";
import { NavBar } from "../navBar/Navbar";
import Hype from "../hype/Hype";
import Feed from "../feed/Feed";
import Login from "../login/Login";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/map" component={SpotMap} />
        <Route exact path="/hype" component={Hype} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

export default AppContainer(App);
