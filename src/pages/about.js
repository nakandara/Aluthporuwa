import React from "react";
import LayoutSecond from "../../components/LayoutSecond/LayoutSecond";
import { useToken } from "../context/TokenContext";


const About = () => {
  const { user } = useToken();

  return (
    <LayoutSecond>
      <div className="about-container">
        <div className="about-content">
          <h1 className="header_about">About Us</h1>
          <p className="about-text">
            Welcome to QuickAdsHub! At QuickAdsHub, we are dedicated to connecting buyers and sellers through a user-friendly platform designed for quick and easy posting of advertisements for vehicles and properties.
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
            <strong>Our Mission</strong>
            <br />
            Our mission is to provide a seamless and efficient experience for our users. We aim to connect buyers and sellers through a user-friendly interface, ensuring that everyone can find what they need with just a few clicks. We strive to make the process of posting and discovering advertisements straightforward and stress-free.
            <br /><br />
            <strong>What We Offer</strong>
            <br />
            - <strong>Wide Range of Listings:</strong> From vehicles to properties, QuickAdsHub offers a diverse selection of advertisements to meet your needs.
            <br />
            - <strong>User-Friendly Interface:</strong> Our platform is designed with simplicity in mind, making it easy for users of all ages to navigate and find what they are looking for.
            <br />
            - <strong>Quick and Easy Posting:</strong> Sellers can quickly post their advertisements with detailed descriptions, photos, and contact information, reaching potential buyers in no time.
            <br />
            - <strong>Secure and Reliable:</strong> We prioritize the safety and security of our users, providing a trusted platform for buying and selling.
            <br /><br />
            <strong>Why Choose QuickAdsHub?</strong>
            <br />
            - <strong>Efficiency:</strong> Save time with our streamlined posting and browsing features.
            <br />
            - <strong>Variety:</strong> Access a wide variety of listings in one place.
            <br />
            - <strong>Community:</strong> Join a growing community of buyers and sellers who trust QuickAdsHub for their advertisement needs.
            <br />
            - <strong>Support:</strong> Our dedicated support team is always here to help with any questions or concerns.
            <br /><br />
            <strong>Join Us Today!</strong>
            <br />
            Whether you’re looking to buy, sell, or just browse, QuickAdsHub is the perfect place to start. Join our community today and experience the convenience of buying and selling with QuickAdsHub.
            <br /><br />
            Thank you for choosing QuickAdsHub!
          </p>
        </div>
      </div>
    </LayoutSecond>
  );
};

export default About;
