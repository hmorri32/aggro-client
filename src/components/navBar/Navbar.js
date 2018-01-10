import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import NavBarContainer from "../../containers/NavBarContainer";
import {SVGguy} from "../svgGuy/svgGuy";

class NavBar extends Component {
  constructor() {
    super();
  }

  logOut(e) {
    const { history, actions } = this.props;
    e.preventDefault();
    actions.logOutUser();
    history.push("/login");
  }

  render() {
    return (
      <div className="App-header">
        <Link to="/">
          <SVGguy />
        </Link>
        <h2 className="surf-sauce-h2">ULTRA CHIC ARTISANAL SURF</h2>
        {this.props.logged_in ? (
          <div className="nav-links">
            <Link to="/map">
              <h2 className="surf-sauce-h2 nav-h2">MAP</h2>
            </Link>
            <Link to="/forecast">
              <h2 className="surf-sauce-h2 nav-h2">FORECAST</h2>
            </Link>
            <Link to="/hype">
              <h2 className="surf-sauce-h2 nav-h2">HYPE</h2>
            </Link>
            <Link to="/feed">
              <h2 className="surf-sauce-h2 nav-h2">FEED</h2>
            </Link>
            <a href="/logout" onClick={e => this.logOut(e)}>
              <h2 className="surf-sauce-h2 nav-h2">LOG OUT</h2>
            </a>
          </div>
        ) : (
          <div className="nav-links">

          </div>
        )}
      </div>
    );
  }
}

export default NavBarContainer(NavBar);


// <Link to="/login">
//   {" "}
//   <h2 className="surf-sauce-h2 nav-h2">LOG IN</h2>
// </Link>