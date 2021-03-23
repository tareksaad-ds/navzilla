import React from "react";
import HorizonItem from "./HorizonItem";
import "./Layout.css";

function HorzionSidebar() {
  return (
    <nav className="hor-sidebar">
      <HorizonItem name={"Dashboard"} dest={"#dashboard"} />
      <HorizonItem name={"Drop"}>
        <a href="#drop1">Drop 1</a>
        <a href="#drop2">Drop 2</a>
        <a href="#drop3">Drop 3</a>
      </HorizonItem>
      <HorizonItem name={"Profile"}>
        <a href="#edit">Edit Profile</a>
        <a href="#logout">Logout</a>
      </HorizonItem>

      <HorizonItem name={"Messages"}>
        <a href="#inbox">Inbox</a>
        <a href="#spam">Spam</a>
        <a href="#unread">Unread Messages</a>
      </HorizonItem>
      <HorizonItem name={"Notes"} dest={"#notes"} />
    </nav>
  );
}

export default HorzionSidebar;
