import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";
import Sidebar from "./Sidebar";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        {/*Sidebar */}
        <Sidebar />
        {/*body */}
        <Body spotify={spotify} />
      </div>
      {/*Footer */}
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
