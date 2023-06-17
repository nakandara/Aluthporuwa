import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = ({}) => {
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen ? "sidebar" : "");
  const toggleBar = () => {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className={` ${isOpen ? "sidebar" : "sidebar_open"}`}>
      <ul className="sidebar__menu">
        <div className="menu__icon">
          <div className="logo_one">logo</div>
          <MenuIcon className="toggle__icon" onClick={toggleBar} />
        </div>
        <div className="sidebar__menu-item">
          <li>
            <Link href="/">Dashnoard</Link>
          </li>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>Menu Item 3</li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
