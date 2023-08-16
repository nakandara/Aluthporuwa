import React, { useState, useContext } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleContext from '../contex/ToggleContext';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import AccountMenu from './MyAccount/Myaccount'

export default function Header() {
 
  const [loginD, setLoginD] = useState(true);
  const router = useRouter();
  
  const { toggle, setToggle } = useContext(ToggleContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };
   // Replace with your image URL

  if (loginD) {
    return (
      <div>
        
        <div className="header__one">
        <MenuIcon className="toggle__icon" onClick={handleToggle}/>
        scfsfsf <br />
      
         <AccountMenu />
          {/* <button onClick={() => signOut()}>Sign out</button> */}
        </div>
      </div>
    );
  }

  const handleSignIn = () =>
    router.push(`/auth/signin?callbackUrl=${router.asPath}`);

  return (
    <>
      Not signed in <br />
      <button onClick={handleSignIn}>Sign in</button>
    </>
  );
}
