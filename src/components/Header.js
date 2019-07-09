import React from "react";
import img from "../img/zwis.jpg";
import "../styles/header.css";

class Header extends React.Component {
  state = {};
  render() {
    return (
      <>
        <img src={img} alt="zwis" />
      </>
    );
  }
}

export default Header;
