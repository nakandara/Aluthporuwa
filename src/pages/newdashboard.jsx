import React from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const newdashboard = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
  
    if (status === "loading") {
      return <h1>Loading...</h1>;
    }
  
    if (status === "unauthenticated") {
      // Redirect the user to the sign-in page
      router.push("/auth/signin");
      return null;
    }
  return (
    <div>newdashboard</div>
  )
}

export default newdashboard