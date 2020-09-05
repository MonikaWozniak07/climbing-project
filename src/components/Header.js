import React from "react";
// import img from "../img/zwis.jpg";
import video from "../img/Rock Climbing - 925.mp4";
import "../styles/header.css";

class Header extends React.Component {
  state = {};
  render() {
    return (
      <>
        {/* <img src={img} alt="zwis" /> */}
        <video className="climbVideo" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </>
    );
  }
}

export default Header;
