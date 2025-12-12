import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="topnav">
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/news"> news </NavLink>
      <NavLink to="/contact"> contact </NavLink>
      <NavLink to="/about"> about </NavLink>
    </div>
  );
};

export default Nav;
