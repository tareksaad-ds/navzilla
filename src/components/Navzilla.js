import React, { useEffect, useState } from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";
import "./Layout.css";
import Logo from "./Logo";
import HorzionSidebar from "./HorzionSidebar";

function Layout(props) {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 650) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }, []);

  return (
    <div>
      <div id="content">
        <Main toggle={toggle} opts={{ ...props }} setToggle={setToggle} />

        {!props.isHorizontal ? (
          <>{toggle ? <Sidebar items={props.items} /> : <Logo />}</>
        ) : (
          <Logo />
        )}
      </div>
      {props.isHorizontal && <HorzionSidebar items={props.items} />}
    </div>
  );
}

export default Layout;
