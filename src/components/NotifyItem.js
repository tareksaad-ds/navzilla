import React from "react";
import "./Layout.css";

function NotifyItem(props) {
  return (
    <div className="notify_item">
      <div className="notify_img">
        <img src={props.image} alt="profile_pic" />
      </div>
      <div className="notify_info">
        <p>
          {props.action}
          <span>Timeline Share</span>
        </p>
        <span className="notify_time">{props.time}</span>
      </div>
    </div>
  );
}

export default NotifyItem;
