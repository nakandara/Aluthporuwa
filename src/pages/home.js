import React, { useEffect } from "react";
import LayOut from "../../components/Layout";
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
      <LayOut>
        <div style={{ marginTop: "50px" }} className="bone_image">
          <Elevation />
        </div>
      </LayOut>
      </ProtectedRoute>
    </div>
  );
};

export default Home;
