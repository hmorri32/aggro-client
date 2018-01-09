import React, { Component } from "react";
import { beachGritData } from "./scrape/beachGritData.js";
import { stabData } from "./scrape/stabData.js";
import "./Feed.css";

class Feed extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState({ beachGrit: beachGritData, stab: stabData });
  }

  renderStabFeed() {
    const {stab} = this.state;
    return stab.map((array, i) => {
      const href = array[0];
      const imageSrc = array[1];
      const description = array[2];
      return (
        <div className="card">
          <a href={href} className="outro">{description}</a>
          <img src={imageSrc} alt="cool-image" />
        </div>
      )
    })
  }

  renderBeachGritFeed() {
    const { beachGrit } = this.state;
    return beachGrit.map((array, i) => {
      const href = array[0];
      const description = array[1];
      const imageSrc = array[2];
      return (
        <div className="card" key={i}>
          <a href={href} className="outro">{description}</a>
          <img src={imageSrc} alt="cool-image" />
        </div>
      );
    });
  }

  render() {
    return(
      <div className="feed-container">
        {this.renderStabFeed()}
        {this.renderBeachGritFeed()}
      </div>
    )
  }
}

export default Feed;
