import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
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
