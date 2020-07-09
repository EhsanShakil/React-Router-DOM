import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "green" };
  return (
    <div>
      <NavLink exact to="/" activeStyle={activeStyle}>
        Home
      </NavLink>
      {"|"}
      <NavLink exact to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      {"|"}
      <NavLink exact to="/services" activeStyle={activeStyle}>
        Services
      </NavLink>
      {"|"}
      <NavLink exact to="/contact" activeStyle={activeStyle}>
        Contact
      </NavLink>
    </div>
  );
};

export default Header;
