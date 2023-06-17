import React from "react";
import LayOut from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Elevation from '../../components/Home/Content'

const Home = () => {
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
    <div>
      <LayOut>
     <Elevation/>
      </LayOut>
    </div>
  );
};

export default Home;
