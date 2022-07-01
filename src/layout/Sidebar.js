import React from "react";
import { IconAngleDown, IconBriefcase, IconHome } from "../utils/icons";
import { menuList } from "../utils/SidebarMenu";
import Radium, { StyleRoot } from "radium";
import "../styles/Sidebar.scss";

function Sidebar(props) {
  const { route, openSidebar } = props;

  const style = {
    "@media(max-width: 768px)": {
      width: `${openSidebar ? "283px" : "0px"}`,
    },
  };
  return (
    <>
      <StyleRoot>
        <div className="sidebarContainer " style={style}>
          <button>
            <IconBriefcase />
            <span>Switch Organization</span>
            <IconAngleDown />
          </button>
          <a href="/">
            <IconHome>
              <span>Dashboard</span>
            </IconHome>
          </a>
          {menuList.map((item) => (
            <div className="category">
              <p>{item.category}</p>
              {item.menu.map((menu) => (
                <a
                  href={"/"}
                  className={`${
                    route.replace("/", "") === menu.title.toLowerCase()
                      ? "active"
                      : ""
                  }`}
                >
                  {menu.icon}
                  <span>{menu.title}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </StyleRoot>
    </>
  );
}

export default Sidebar;
