import React, { useState } from "react";
import "./Layout.css";
import { ReactComponent as SearchIcon } from "../assests/icons/search.svg";
import { ReactComponent as NotifyBell } from "../assests/icons/bars.svg";
import { ReactComponent as Bars } from "../assests/icons/notification.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Points } from "../assests/icons/points.svg";
import Notifications from "./Notifications";

function Main({ setToggle, toggle }) {
  const [show, setShow] = useState(false);
  return (
    <div id="main">
      <nav>
        <Link to={toggle} onClick={() => setToggle(!toggle)}>
          <Points />
        </Link>
        <ul>
          <li className="search-icon">
            <input type="search" placeholder="Search..."></input>
            <SearchIcon />
          </li>
          <div className="items">
            <li>
              <Bars />
            </li>
            <li className="NotifyBell" onClick={() => setShow(!show)}>
              <NotifyBell />
              {show ? <Notifications /> : <div></div>}
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Main;
