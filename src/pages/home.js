import React, { useEffect } from "react";
import LayOut from "../../components/Layout";

import { useToken } from '../context/TokenContext';
import { useRouter } from "next/router";
import Elevation from '../../components/Home/Content';

const Home = () => {
  const { token } = useToken();

  const router = useRouter();
  console.log('Token:', token);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken !== null && accessToken !== "unauthenticated") {
      router.push("/home");
    } else {
      router.push("/auth/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <LayOut>
        <div style={{marginTop:"50px"}}>
<Elevation/>
        </div>
       
      </LayOut>
    </div>
  );
};

export default Home;
