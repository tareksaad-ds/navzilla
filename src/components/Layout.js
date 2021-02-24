import React, { useState } from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";
import "./Layout.css";
import Logo from "./Logo";

function Layout() {
  const [toggle, setToggle] = useState(true);

  return (
    <div id="content">
      <Main toggle={toggle} setToggle={setToggle} />
      {toggle ? <Sidebar /> : <Logo />}
    </div>
  );
}

export default Layout;
