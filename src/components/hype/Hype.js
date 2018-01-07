import React from "react";
import hangfive from "./assets/aggro-pix/hangfive.jpg";
import abstractblueblack from "./assets/aggro-pix/abstractblueblack.jpg";
import abstractoil from "./assets/aggro-pix/abstractoil.jpg";
import boardslidebrah from "./assets/aggro-pix/boardslidebrah.jpg";
import chic from "./assets/aggro-pix/chic.jpg";
import dusk from "./assets/aggro-pix/dusk.jpg";
import hipsters from "./assets/aggro-pix/hipsters.jpg";
import jesussurfs from "./assets/aggro-pix/jesussurfs.jpg";
import palms from "./assets/aggro-pix/palms.jpg";
import snapper from "./assets/aggro-pix/snapper.jpg";
import pipe from "./assets/aggro-pix/pipe.jpg";
import ship from "./assets/aggro-pix/ship.jpg";
import tubez from "./assets/aggro-pix/tubez.jpg";
import "./Hype.css";

const Hype = () => {
  return (
    <div className="montage">
      <iframe
        className="vidz"
        src="https://player.vimeo.com/video/200922358?color=ffd9db&byline=0&portrait=0"
        width="640"
        height="360"
        frameBorder="0"
        allowFullScreen
      />
      <iframe
        className="vidz"
        src="https://player.vimeo.com/video/72287506?color=ffffff&byline=0&portrait=0"
        width="640"
        height="360"
        frameBorder="0"
        allowFullScreen
      />
      <iframe
        className="vidz"
        src="https://player.vimeo.com/video/90429499?color=ffffff&byline=0&portrait=0"
        width="640"
        height="360"
        frameBorder="0"
        allowFullScreen
      />
      <img alt="" src={boardslidebrah} className="vidz" />
      <img alt="" src={chic} className="vidz" />
      <img alt="" src={abstractoil} className="vidz" />
      <img alt="" src={dusk} className="vidz" />
      <iframe
        className="vidz"
        src="https://player.vimeo.com/video/151367434?color=ffffff&byline=0&portrait=0"
        width="640"
        height="360"
        frameBorder="0"
        allowFullScreen
      />
      <img alt="" src={hangfive} className="vidz" />
      <img alt="" src={abstractblueblack} className="vidz" />
      <img alt="" src={hipsters} className="vidz" />
      <iframe
        className="vidz"
        src="https://player.vimeo.com/video/151743858?color=ffffff&byline=0&portrait=0"
        width="640"
        height="360"
        frameBorder="0"
        allowFullScreen
      />
      <img alt="" src={palms} className="vidz" />
      <img alt="" src={jesussurfs} className="vidz" />
      <img alt="" src={snapper} className="vidz" />
      <img alt="" src={pipe} className="vidz" />
      <img alt="" src={ship} className="vidz" />
      <img alt="" src={tubez} className="vidz" />
    </div>
  );
};

export default Hype;
