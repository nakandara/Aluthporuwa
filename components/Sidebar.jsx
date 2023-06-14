import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Go to Example Page</Link>
        </li>
        <li><Link href="/home">Home</Link></li>
        <li>Menu Item 3</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
