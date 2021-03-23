import React, { useState } from "react";
import "./Layout.css";
import { ReactComponent as SearchIcon } from "../assests/icons/search.svg";
import Yoojung from "../assests/images/yoojung.jpg";

import { ReactComponent as NotifyBell } from "../assests/icons/bars.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Lang } from "../assests/icons/lang.svg";
import Notifications from "./Notifications";
import Profile from "./Profile";

function Main({ setToggle, toggle }) {
  const [show, setShow] = useState(false);
  const [profile, showPro] = useState(false);
  let langApp = document.getElementById("html").dir;

  return (
    <div id="main">
      <nav>
        <Link to={toggle} onClick={() => setToggle(!toggle)}>
          <Lang />
        </Link>

        <ul>
          <li className="search-icon">
            <input type="search" placeholder="Search..."></input>
            <SearchIcon />
          </li>
          <div className={langApp === "rtl" ? "itemsRTL" : "items"}>
            <li className="profile" onClick={() => showPro(!profile)}>
              <Link>
                <img src={Yoojung} className="proImage" alt="profile"></img>
                {profile ? <Profile /> : <div></div>}
              </Link>
            </li>
            <li className="NotifyBell" onClick={() => setShow(!show)}>
              {show ? null : <span className="notify">4</span>}
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
