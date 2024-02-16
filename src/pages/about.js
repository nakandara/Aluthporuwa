import Layout from "../../components/Layout";
import React, { useState, useEffect } from "react";
import { useToken } from "../context/TokenContext";

import LayoutSecond from '../../components/LayoutSecond/LayoutSecond'
import ProtectedRoute from "../../components/protect/protectedRoute"; 


const About = () => {
  const { user } = useToken();
 
  return (
    <LayoutSecond>
      <ProtectedRoute>
      <div>
      <div
        className="multi-color-gradient"
        style={{ marginTop: "50px", height: "100vh" }}
      >
        <div>
          <h1 className="header_about">අප ගැන</h1>
        </div>
      </div>
    </div>
      </ProtectedRoute>
   
    </LayoutSecond>
  );
};

export default About;
