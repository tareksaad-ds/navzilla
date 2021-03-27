import React from "react";
import "./Layout.css";
import image from "../assests/navi2.png";
import SidebarItem from "./SidebarItem";
import { ReactComponent as Dashboard } from "../assests/icons/dashboard.svg";
import { ReactComponent as Drop } from "../assests/icons/drop.svg";
import { ReactComponent as Profile } from "../assests/icons/profile.svg";
import { ReactComponent as Messages } from "../assests/icons/messages.svg";
import { ReactComponent as Notes } from "../assests/icons/notes.svg";
import SidebarGroups from "./SidebarGroups";

function Sidebar(props) {

  const itemRender = (item) => {
    if(item.type === 'link'){
      return <SidebarItem svg={item.icon} name={item.title} dest={item.link} />
    }else if(item.type === 'menu'){
      return (
      <SidebarItem svg={item.icon} name={item.title}>
          {(Array.isArray(item.menu) && item.menu.length > 0) && (
            <>
              {item.menu.map((menuItem, ind) => (
                <a key={ind} href={menuItem.link}>{menuItem.title}</a>
              ))}
            </>
          )}
      </SidebarItem>
      );
    }
  }
  
  return (
    <div id="side">
      <div id="logo">
        <img id="headerlg" src={image} alt="logo" />
      </div>
      <div className="sidebar">
        {/* This is the dynamic way */}
        {
          (Array.isArray(props.items) && props.items.length > 0) && (
            props.items.map((item) => {
              return itemRender(item);
            }
          ))
        }
        {/* This is the traditional way */}
        <SidebarItem svg={Dashboard} name={"Dashboard"} dest={"#dashboard"} />
        <SidebarItem svg={Drop} name={"Drop"}>
          <a href="#drop1">Drop 1</a>
          <a href="#drop2">Drop 2</a>
          <a href="#drop3">Drop 3</a>
        </SidebarItem>
        {/* ------------------- */}
        <SidebarGroups title={"Leaderboard"}>
          <a href="#tariq">Tarek Suarez</a>
          <a href="#medz">Ahmed Saad</a>
        </SidebarGroups>
        <SidebarItem svg={Profile} name={"Profile"}>
          <a href="#edit">Edit Profile</a>
          <a href="#logout">Logout</a>
        </SidebarItem>

        <SidebarItem svg={Notes} name={"Notes"} dest={"#notes"} />
        <SidebarItem svg={Messages} name={"Messages"}>
          <a href="#inbox">Inbox</a>
          <a href="#spam">Spam</a>
          <a href="#unread">Unread Messages</a>
        </SidebarItem>
        <SidebarGroups title={"Charts"}>
          <a href="#chart1">Chart 1</a>
          <a href="#chart2">Chart 2</a>
          <a href="#chart3">Chart 3</a>
        </SidebarGroups>
      </div>
    </div>
  );
}

export default Sidebar;
