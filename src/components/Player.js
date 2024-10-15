// Player.js

import React from "react";
import './Player.css';

function Player() {
    return (
        <div className="player">
        <div className="player-main">
          <div className="info">
            <div className="current">current</div>
            <div className="title">Dayoung</div>
            <div className="artist">JP</div>
          </div>
          <div className="time">
            2:34 / 5:67
          </div>
        </div>
      </div>
    );
}

export default Player;