import React, { useState } from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";
import "./Layout.css";
import Logo from "./Logo";
import HorzionSidebar from "./HorzionSidebar";

function Layout() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <div id="content">
        <Main toggle={toggle} setToggle={setToggle} />

        {toggle ? <Sidebar /> : <Logo />}
      </div>
      {toggle === false ? <HorzionSidebar /> : null}
    </div>
  );
}

export default Layout;
