import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = ({ }) => {
  const[isOpen,setIsOpen] = useState(true)
  console.log(isOpen ? "sidebar" : "");
const toggleBar = () =>{
  if (isOpen === true) {
    setIsOpen(false)
  }
  else{
    setIsOpen(true)
  }
}

  return (
    <div  className={` ${isOpen ? "sidebar" : "sidebar_open"}`} >
      <ul className="sidebar__menu">
        <div className="menu__icon">
          <div className="logo_one">logo</div>
          <MenuIcon onClick={toggleBar}/>
        </div>
        <li className="sidebar__menu-item">
          <Link href="/">Go to Example Page</Link>
        </li>
        <li className="sidebar__menu-item">
          <Link href="/home">Home</Link>
        </li>
        <li className="sidebar__menu-item">Menu Item 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;
