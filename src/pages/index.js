import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import LayOut from '../../components/Layout';
import Sidebar from "../../components/Sidebar";
import { useState } from "react";

export default function Component() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session && session.user) {
    return (
      <>
        <LayOut>
        gdgdgd 
        </LayOut>
      
      </>
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
