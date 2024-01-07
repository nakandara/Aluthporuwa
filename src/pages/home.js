import React, { useEffect } from "react";
import LayoutSecond from "../../components/LayoutSecond/LayoutSecond";
import { useToken } from '../context/TokenContext';
import { useRouter } from "next/router";
import Elevation from '../../components/Home/Content';
import ProtectedRoute from "../../components/protect/protectedRoute"; 

const Home = () => {
  const { token, user } = useToken();
  const router = useRouter();



  return (
    <div>
      <ProtectedRoute>
      <LayoutSecond>
        <div style={{ marginTop: "50px" }} className="bone_image">
          <Elevation />
        </div>
      </LayoutSecond>
      </ProtectedRoute>
    </div>
  );
};

export default Home;
