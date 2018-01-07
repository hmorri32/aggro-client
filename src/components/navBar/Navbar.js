import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const SVGguy = () => {
  return (
    <svg className="aggro-surf-welcome" viewBox="0 0 100 20">
      <defs>
        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="5%" stopColor="#326384" />
          <stop offset="95%" stopColor="#123752" />
        </linearGradient>
        <pattern
          id="wave"
          x="0"
          y="0"
          width="120"
          height="20"
          patternUnits="userSpaceOnUse">
          <path
            id="wavePath"
            d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
            mask="url(#mask)"
            fill="url(#gradient)">
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="1.5s"
              type="translate"
              from="0,0"
              to="40,0"
              repeatCount="indefinite"
            />
          </path>
        </pattern>
      </defs>
      <text
        textAnchor="middle"
        x="50"
        y="15"
        fontSize="14"
        fill="url(#wave)"
        fillOpacity="1">
        AGGRO
      </text>
      <text
        textAnchor="middle"
        x="50"
        y="15"
        fontSize="14"
        fill="url(#gradient)"
        fillOpacity="0.5">
        AGGRO
      </text>
    </svg>
  );
};

export const NavBar = () => {
  return (
    <div className="App-header">
      <Link to="/">
        <SVGguy />
      </Link>
      <h2 className="surf-sauce-h2">ULTRA CHIC ARTISANAL SURF</h2>
      <div className="nav-links">
        <Link to="/map">
          <h2 className="surf-sauce-h2 nav-h2">MAP</h2>
        </Link>
        <Link to="/forecasts">
          <h2 className="surf-sauce-h2 nav-h2">FORECAST</h2>
        </Link>
        <Link to="/hype">
          <h2 className="surf-sauce-h2 nav-h2">HYPE</h2>
        </Link>
        <Link to="/feed">
          <h2 className="surf-sauce-h2 nav-h2">FEED</h2>
        </Link>
      </div>
    </div>
  );
};

// <button
//   className='log-out'
//   onClick={()=> {
//     auth.signOut()
//     this.props.logIn(false)
//     this.props.history.push('/login')
//   }}>
//   Logout
// </button>
