import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import React, { useState } from "react";
import Swal from "sweetalert2";
import { useToken } from "../../context/TokenContext";
import axios from "axios";
import { environments } from "../../../components/environment/environments";
import Link from "next/link";

const provider = [
  {
    name: "google",
  },
];

const Signin = () => {
  const { token, setToken, setUser, user } = useToken();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOAuthSignIn = (name) => () => signIn(name);
  const google = () => {
    window.open(`/auth/google`);
  };

  const responseFacebook = async (response) => {
    console.log(response);
    const formData = {
      name: response.name,
      email: response.email,
      password: response.accessToken,
      method: "FACEBOOK",
    };

    try {
      const responsePost = await axios.post(
        "http://localhost:8080/api/createUser",
        formData
      );

      if (responsePost) {
        setLoading(true);

        if (responsePost.data.newUser) {
          localStorage.setItem("accessToken", responsePost.data.token);
          localStorage.setItem(
            "user",
            JSON.stringify(responsePost.data.newUser)
          );
          router.push("/home");
        } else {
          localStorage.setItem("accessToken", responsePost.data.token);
          localStorage.setItem(
            "user",
            JSON.stringify(responsePost.data.existingUser)
          );
          router.push("/home");
        }
      } else {
        console.error("Registration failed: User ID not found in the response");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid",
        });
      }
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response ? error.response.data : error.message
      );
    }

    // Handle the response data, e.g., send it to your backend for authentication
  };

  const normalLogin = async () => {
    try {
      const response = await axios.post(
        `${environments.BASE_HOST_URL}/api/login`,
        {
          name: username,
          email: email,
          password: password,
        }
      );
      console.log(response);

      if (response.data && response.data.token && response.data.user) {
        setLoading(true);
        const accessToken = response.data.token;
        const user = response.data.user;
        console.log(user);

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("user", JSON.stringify(user));

        setToken(accessToken);
        setUser(user);

        router.push("/home");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid credentials",
        });
        // Moved the "Login failed" console log here
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      // You can also log the error here
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid credentials",
      });
    }
  };

  const RegisterUser = async () => {
    router.push("/signupPage");
  };

  if (loading) {
    let timerInterval;
    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 1000);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  } else {
  }

  const googleSignIn = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };

  const forgotPassword = () => {
    router.push("/forgotPassword");
  };

  return (
    <div>
      <div className="sign-in-sign-up-container">
        <h2>Sign In </h2>
        <form onSubmit={normalLogin}>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="buttons">
            <button type="button" onClick={normalLogin} className="sign-in-btn">
              Log In
            </button>
            <button
              type="button"
              onClick={RegisterUser}
              className="sign-up-btn"
            >
              Sign Up
            </button>
            <button type="button" className="google-login-btn">
              Google Login
            </button>
          </div>
        </form>
        <div onClick={forgotPassword} className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Signin;
