import React, { useState } from "react";
import "./Layout.css";
import { ReactComponent as Arrow } from "../assests/icons/arrow.svg";
import { Link } from "react-router-dom";

export default function SidebarItem(props) {
  const [show, setShow] = useState(false);

  return (
    <div id="sidelink" className="sblink">
      {props.children ? (
        <Link to={props.dest} onClick={() => setShow(!show)}>
          <Arrow /> {props.svg ? <props.svg height={60} /> : null}
          {props.name}
        </Link>
      ) : (
        <Link to={props.dest} onClick={() => setShow(!show)}>
          {props.svg ? <props.svg height={60} /> : null}
          {props.name}
        </Link>
      )}

      {show && <div id="submenu">{props.children}</div>}
    </div>
  );
}
