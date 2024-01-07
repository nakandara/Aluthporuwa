import Layout from "../../components/Layout";
import React, { useState, useEffect } from "react";

import LayoutSecond from '../../components/LayoutSecond/LayoutSecond'



const About = () => {

  return (
    <LayoutSecond>
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
    </LayoutSecond>
  );
};

export default About;
