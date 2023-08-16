import React, { useState ,useContext} from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleContext from '../contex/ToggleContext';

const Sidebar = ({}) => {
   const { toggle, setToggle } = useContext(ToggleContext);
   console.log(toggle);
 
  const [isOpen, setIsOpen] = useState(true);
 
  const toggleBar = () => {
    if (toggle === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className={` ${toggle ? "sidebar_close" : "sidebar"}`}>
      <ul className="sidebar__menu">
        <div className="menu__icon">
          <div className="logo_one">logo</div>
          {/* <MenuIcon className="toggle__icon" onClick={toggleBar} /> */}
        </div>
        <div className="sidebar__menu-item">
          <li>
            <Link href="/">Dashnoard</Link>
          </li>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashnoard</Link>
          </li>
       
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
