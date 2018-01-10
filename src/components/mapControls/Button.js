import React from "react";

export const Button = ({ handleClick, className, icon, id }) => {
  return (
    <div onClick={e => handleClick(e)} id={id}>
      <span id={id} className="map-type" onClick={e => handleClick(e)} />
      <button className={className}>
        <img
          onClick={e => handleClick(e)}
          id={id}
          className="map-toggle-btn"
          src={icon}
        />
      </button>
    </div>
  );
};
