import React from "react";
import "../../styles/Sidebar.css";
import { MdDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { TbSchool } from "react-icons/tb";
import { SiGoogleclassroom } from "react-icons/si";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { BiBookAlt } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="menu">
      <div className="logo">
        <BiBookAlt className="logo-icon" />
        <h2>Languages School</h2>
      </div>

      <div className="menu--list">
        <a href="#" className="item">
          <MdDashboard className="icon"/>
          Dashboard
        </a>

        <a href="#" className="item">
          <FiUsers className="icon"/>
          Students
        </a>

        <a href="#" className="item">
          <TbSchool className="icon"/>
          Teachers
        </a>

   <a href="#" className="item"> <SiGoogleclassroom className="icon"/> Classes </a>

        <a href="#" className="item">
          <IoNotificationsOutline className="icon"/>
          Notifications
        </a>

        <a href="#" className="item">
          <IoSettingsOutline className="icon"/>
          Settings
        </a>
        <a href="#" className="item">
          <TbLogout className="icon"/>
          LogOut
        </a>
      </div>
    </div>
  );
};

export default Sidebar; 