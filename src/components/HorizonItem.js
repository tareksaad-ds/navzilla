import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowB } from "../assests/icons/arrownav.svg";

function HorizonItem(props) {
  const [show, setShow] = useState(false);
  return (
    <div id="horizon-sidebar" className="horSb">
      {props.children ? (
        <Link to={props.dest} onClick={() => setShow(!show)}>
          {props.name}
          <ArrowB />
        </Link>
      ) : (
        <Link to={props.dest} onClick={() => setShow(!show)}>
          {props.name}
        </Link>
      )}

      {show && <div id="hormenu">{props.children}</div>}
    </div>
  );
}

export default HorizonItem;
