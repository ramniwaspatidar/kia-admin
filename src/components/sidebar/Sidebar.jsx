import React, { Component } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import "./styles.css";
import menu from "../../assets/menu.png";
import { useState } from "react";
import dashBoard from "../../assets/dashBoard.png";
import driver from "../../assets/driver.png";
import logo from "../../assets/logo.png";

import logout from "../../assets/logout.png";
import subscribers from "../../assets/subscribers.png";
import admin from "../../assets/admin.png";
import truck from "../../assets/truck.png";
import Cookies from "js-cookie";

const Sidebar = ({ children }) => {
  const [isOPen, setOpen] = useState(false);

  const navigate = useNavigate();

  const menuItems = [
    {
      path: "/",
      name: "Dashboard",
      icon: dashBoard,
    },
    // {
    //   path: "/job",
    //   name: "Jobs",
    //   icon: truck,
    // },
    {
      path: "/driver-request",
      name: "Driver Request",
      icon: truck,
    },

    // {
    //   path: "/request-code",
    //   name: "Request Code",
    //   icon: truck,
    // },
    // {
    //   path: "/subscribers",
    //   name: "Subscribers",
    //   icon: subscribers,
    // },

    // {
    //   path: "/driver",
    //   name: "Driver",
    //   icon: driver,
    // },
    // {
    //   path: "/admin",
    //   name: "Admins Accounts",
    //   icon: admin,
    // },

    {
      path: "/",
      name: "Sign Out",
      icon: logout,
    },
  ];

  const toggle = () => setOpen(!isOPen);

  return (
    <div className="container">
      <div style={{ width: isOPen ? "300px" : "60px" }} className="sidebar">
        <div className="header">
          <div className="top_section">
            <div className="bars">
              <img src={menu} onClick={toggle} alt="Logo" />
            </div>
          </div>
          {isOPen ? (
            <img style={{ width: 200, height: 200, alignSelf: "center" }} src={logo} onClick={toggle} alt="Logo" />
          ) : (
            ""
          )}
        </div>

        {menuItems.map((item, index) => {
          return (
            <div
              className="item-container"
              onClick={() => {
                if (item.name === "Sign Out") {
                  Cookies.remove("firebaseToken");
                }
                navigate(item.path);
              }}
            >
              <img className="icon" src={item.icon} alt="Logo" />
              {isOPen && (
                <div to={item.path} key={index} className="link" activeClassName="active">
                  <div className="link_text">{item.name}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
