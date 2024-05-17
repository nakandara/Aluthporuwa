import Layout from "../../components/Layout";
import React, { useState, useEffect } from "react";
import { useToken } from "../context/TokenContext";

import LayoutSecond from "../../components/LayoutSecond/LayoutSecond";
import ProtectedRoute from "../../components/protect/protectedRoute";

const About = () => {
  const { user } = useToken();

  return (
    <LayoutSecond>
      <ProtectedRoute>
        <div className="about-container">
          <div className="about-content">
            <h1 className="header_about">About Us</h1>
            <p className="about-text">
              Welcome to QuickAds Hub! At QuickAds Hub, we are dedicated to
            
            </p>
          </div>
          <div className="image-container">
            <img
              src="https://assets.mycast.io/actor_images/actor-a-random-person-728077_large.jpg?1680712989"
              alt="Image 1"
              className="about-image"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZgMtZPiKDogC0YaRpGpRwIqRT_mUfILfM-rLB4mHDrA&s"
              alt="Image 2"
              className="about-image"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6b7z1i9sBpO7-GwDzttPw3X3NAWJLa2KAdrGTXn7Ug&s"
              alt="Image 3"
              className="about-image"
            />
          </div>
          <div className="about-content">
            <p className="about-text">
              Our core values include [list of core values or principles your
              company upholds], and we prioritize [describe what your company
              prioritizes, such as customer satisfaction, innovation, etc.] in
              everything we do. At QuickAds Hub, we believe in [describe any
              unique aspects or philosophies of your company]. Our goal is to
              [describe your long-term vision or aspirations]. Thank you for
              visiting our website. We look forward to [describe what you look
              forward to with your customers, such as serving them, working
              together, etc.].
            </p>
          </div>
        </div>
      </ProtectedRoute>
    </LayoutSecond>
  );
};

export default About;
