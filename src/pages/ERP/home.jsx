import React, { useState, useEffect } from "react";
import { useToken } from "../../context/TokenContext";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";
import ProtectedRoute from "../../../components/protect/protectedRoute";
import LoginPage from "../../../components/ERP/LoginPage";

const home = () => {
  const [userData, setUserData] = useState(null);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch("http://localhost:8080/auth/success", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        if (response) {
          const resObject = await response.json();
          console.log(resObject, "responseresponseresponse");
          setUser(resObject.user);
        } else {
          throw new Error("Authentication failed");
        }
      } catch (err) {
        console.error(err);
      }
    };

    getUser();
  }, []);


  const responseFacebook = async (response) => {
    console.log(response);
const formData = {
  fullName:response.name,
  email:response.email,
  confirmPassword:response.accessToken,
  password:response.accessToken,
  method:"FACEBOOK"
  
}
console.log(formData,'777777777');

    try {
      const response = await axios.post(
        "http://localhost:8080/users/faceBookRegister",
        formData
      );

      if (response.data.userId) {
        setShowAdditionalFields(true);
        localStorage.setItem("userId", response.data.userId);
        console.log("Registration successful. User ID:", response.data.userId);
      } else {
        console.error("Registration failed: User ID not found in the response");
      }
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response ? error.response.data : error.message
      );
    }

    // Handle the response data, e.g., send it to your backend for authentication
  };

  return (
    <div>
      <div
        className="multi-color-gradient"
        style={{ marginTop: "50px", height: "100vh" }}
      >
        <div>
          <h1 className="header_about">අප ගැන</h1>
          <LoginPage />
        </div>
        <FacebookLogin
          appId="2120907774936976"
          autoLoad={false} // Set to true if you want to auto-load the login dialog
          fields="name,email,picture" // Requested fields from Facebook profile
          callback={responseFacebook} // Callback function to handle the response
          icon="fa-facebook" // Optional: customize the login button with a FontAwesome icon
          textButton="Login with Facebook" // Optional: customize the text of the login button
        />

        {/* <GoogleLogin
          clientId="775938270547-r04ajoo56tpl8jt99fs7aa5757fgf0fq.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        /> */}
      </div>
    </div>
  );
};

export default home;
