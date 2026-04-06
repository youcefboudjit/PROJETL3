import React from "react";
import "../../styles/Header.css";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { CiMail } from "react-icons/ci";

const Header = () => {
  return (
    <header className="header">
      {/* LEFT */}
      <div className="header-left">
        <h2>Languages School</h2>
      </div>

      {/* CENTER */}
      <div className="header-center">
        <div className="search-box">
          <FiSearch />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      {/* RIGHT */}
      <div className="header-right">
        <div className="icon">
          <IoNotificationsOutline />
        </div>
        <div className="icon">
          <CiMail />
        </div>

        <div className="profile">
          <BiUserCircle />
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;