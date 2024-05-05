import React from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <img src={assets.profile_image} alt="" className="profile" />
    </div>
  );
};

export default NavBar;
