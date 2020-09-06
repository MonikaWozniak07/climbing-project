import React from "react";
import video from "../img/Rock Climbing - 925.mp4";
import "../styles/header.css";

class Header extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="video">
          <video className="climbVideo" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </>
    );
  }
}

export default Header;
