import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from '../../logo.svg';
import AppContainer from '../../containers/AppContainer'
import SpotMap from '../spotMap/SpotMap'
import {NavBar} from '../navBar/Navbar'
import Hype from '../hype/Hype'
import Feed from '../feed/Feed'

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchSpots()
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/map' component={SpotMap}/>
        <Route exact path="/hype" component={Hype} />
        <Route exact path="/feed" component={Feed} />
      </div>
    );
  }
}

// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to React</h1>
// </header>
// <p className="App-intro">
//   SUH DUDE!!
// </p>
export default AppContainer(App);
