import React from "react";
import "../styles/nav.css";
import { NavLink } from "react-router-dom";

const list = [
  { name: "start", path: "/", exact: true },
  { name: "sklep", path: "/store" },
  { name: "kontakt", path: "/contact" }
];

const Navigation = () => {
  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      <ul>{menu}</ul>
    </>
  );
};

export default Navigation;
