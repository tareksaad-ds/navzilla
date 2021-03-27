import React from "react";
import "./Layout.css";
import image from "../assests/navi2.png";
import SidebarItem from "./SidebarItem";
import SidebarGroups from "./SidebarGroups";

function Sidebar(props) {
  const itemRender = (item) => {
    if (item.type === "link") {
      return <SidebarItem svg={item.icon} name={item.title} dest={item.link} />;
    } else if (item.type === "menu") {
      return (
        <SidebarItem svg={item.icon} name={item.title}>
          {Array.isArray(item.menu) && item.menu.length > 0 && (
            <>
              {item.menu.map((menuItem, ind) => (
                <a key={ind} href={menuItem.link}>
                  {menuItem.title}
                </a>
              ))}
            </>
          )}
        </SidebarItem>
      );
    } else if (item.type === "group") {
      return (
        <SidebarGroups title={item.title}>
          {Array.isArray(item.menu) && item.menu.length > 0 && (
            <>
              {item.menu.map((menuItem, ind) => {
                return itemRender(menuItem);
              })}
            </>
          )}
        </SidebarGroups>
      );
    }
  };

  return (
    <div id="side">
      <div id="logo">
        <img id="headerlg" src={image} alt="logo" />
      </div>
      <div className="sidebar">
        {/* This is the dynamic way */}
        {Array.isArray(props.items) &&
          props.items.length > 0 &&
          props.items.map((item) => {
            return itemRender(item);
          })}
      </div>
    </div>
  );
}

export default Sidebar;
