import React from "react";
import "./Layout.css";

function SidebarGroups(props) {
  return (
    <div className="group-sidebar">
      <h4 id="gb-title">{props.title}</h4>
      <br />
      <br />
      <div id="gb-items">{props.children}</div>
    </div>
  );
}

export default SidebarGroups;
