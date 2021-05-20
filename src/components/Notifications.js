import React from "react";
import NotifyItem from "./NotifyItem";
import image1 from "../assests/images/Lucy.jpg";
import image2 from "../assests/images/Lisa.jpg";
import image3 from "../assests/images/Doyeon.jpg";
import image4 from "../assests/images/Jisoo.jpg";
import "./Layout.css";

function Notifications() {
  let langApp = document.getElementById("html").dir;
  return (
    <div className={langApp === "rtl" ? "wrapperRTL" : "wrapper"}>
      <div className="notification_wrap"></div>
      <div className="dropdown">
        <NotifyItem
          image={image1}
          action={"Lucy commented on"}
          time={"20 minutes ago"}
        />
        <NotifyItem
          image={image2}
          action={"Lisa liked your"}
          time={"50 minutes ago"}
        />
        <NotifyItem
          image={image3}
          action={"Doyoen commented on"}
          time={"2 hours ago"}
        />
        <NotifyItem
          image={image4}
          action={"Jisoo commented on"}
          time={"8 hours ago"}
        />
      </div>
    </div>
  );
}

export default Notifications;
