import React from "react";
import "./Logo.css";
import image from "../assests/navsm.png";

function Logo() {
  return (
    <div id="navLogo">
      <img id="headerlg" src={image} alt="logo" />
    </div>
  );
}

export default Logo;
