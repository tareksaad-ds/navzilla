import React from "react";
import { Link } from "react-router-dom";
function Profile() {
  let langApp = document.getElementById("html").dir;

  return (
    <div>
      <div className={langApp === "ltr" ? "pro" : "rtlPro"}>
        <Link to="edit">Edit Profile</Link>
        <Link to="settings">Settings</Link>
        <Link to="logout">Logout</Link>
      </div>
    </div>
  );
}

export default Profile;
