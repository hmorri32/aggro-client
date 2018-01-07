import React, { Component } from 'react';
import logo from '../../logo.svg';
import AppContainer from '../../containers/AppContainer'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchSpots()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          SUH DUDE!!
        </p>
      </div>
    );
  }
}

export default AppContainer(App);
