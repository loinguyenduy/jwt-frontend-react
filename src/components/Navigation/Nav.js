import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const Nav = (props) => {
  const [isShow, setIsShow] = useState(true);
  let location = useLocation()

  useEffect(() => {

    let session = sessionStorage.getItem("account");
    if (location.pathname === '/login') {
      setIsShow(false);
    }
  }, []);

  return (
    <>
      {isShow === true && (
        <div className="topnav">
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/users"> Users </NavLink>
          <NavLink to="/projects"> projects </NavLink>
          <NavLink to="/about"> about </NavLink>
        </div>
      )}
    </>
  );
};

export default Nav;
