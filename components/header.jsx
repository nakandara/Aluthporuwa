import React, { useState, useContext } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleContext from '../contex/ToggleContext';

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  
  const { toggle, setToggle } = useContext(ToggleContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  if (session && session.user) {
    return (
      <div>
        <MenuIcon className="toggle__icon" onClick={handleToggle}/>
        <div className="header__one">
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
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
