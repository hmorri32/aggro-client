import React from "react";
import { Button } from "./Button.js";
import "./Controls.css";

export const Controls = ({ mapLayers, handleClick }) => {
  const renderButtons = () => {
    return mapLayers.map((layer, i) => {
      return (
        <Button
          className="map-btn"
          key={i}
          icon={layer.img}
          id={layer.type}
          handleClick={handleClick}
        />
      );
    });
  };

  return <aside className="controls">{renderButtons()}</aside>;
};