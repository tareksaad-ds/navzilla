import React from "react";
import "./Logo.css";
import image from "../assests/navi2.png";

function Logo() {
  return (
    <div id="navLogo">
      <img id="headerlg" src={image} alt="logo" />
    </div>
  );
}

export default Logo;
