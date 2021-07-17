import React from "react";
import "../styles/Player.css";
import Sidebar from "./Sidebar";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar/>
        <Body/>
      </div>
    </div>
  );
}

export default Player;
