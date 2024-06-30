import React, { useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import axios from "axios";
import { useToken } from "../../context/TokenContext";
import { environments } from "../../../components/environment/environments";
import Link from "next/link";
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import CircularProgress from '@mui/material/CircularProgress';

const Signin = () => {
  const { token, setToken, setUser, user } = useToken();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const normalLogin = async () => {
    setLoading(true); // Start loading
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
        const accessToken = response.data.token;
        const user = response.data.user;
        console.log(user);

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("user", JSON.stringify(user));
        
        setToken(accessToken);
        setUser(user);

        router.push("/post");

        const response2 = await axios.post(
          `https://socketio-api.vercel.app/api/auth/login`,
          {
            name: username,
            email: email,
            password: password,
          }
        );

        console.log(response2.data, "yyyyyyyyyyyyyy");

        const socketUser = response2.data;

        console.log(socketUser, '3333333');
        localStorage.setItem("userone", JSON.stringify(socketUser));
        const getsocketUser = localStorage.getItem("userone");
        console.log(getsocketUser, 'wwwwwwwwwwwwwwww');
        
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid credentials ඇතුල් වීමේ දෝෂයක් සිදු විය. කරුණාකර නැවත උත්සාහ කරන්න.",
        });
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid credentials / ඇතුල් වීමේ දෝෂයක් සිදු විය. කරුණාකර නැවත උත්සාහ කරන්න.",
      });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const RegisterUser = async () => {
    router.push("/signupPage");
  };

  const googleSignIn = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };

  const forgotPassword = () => {
    router.push("/forgotPassword");
  };

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <div>
      <div className="top-bar">
        <IconButton onClick={handleHomeClick} style={{ color: 'black' }}>
          <HomeIcon />
        </IconButton>
      </div>
      <div className="sign-in-sign-up-container">
        <h2>Sign In/ඇතුල් වන්න</h2>
        <form onSubmit={(e) => { e.preventDefault(); normalLogin(); }}>
          <input
            name="username"
            type="text"
            placeholder="Username / පරිශීලක නාමය"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            name="email"
            type="email"
            placeholder="Email / ඊමේල්"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="password"
            type="password"
            placeholder="Password / මුරපදය"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="buttons">
            <button type="button" onClick={normalLogin} className="sign-in-btn" disabled={loading}>
              {loading ? <CircularProgress size={24} /> : "Log In / ඇතුල් වන්න"}
            </button>
            <button
              type="button"
              onClick={RegisterUser}
              className="sign-up-btn"
              disabled={loading}
            >
              Sign Up / ලියාපදිංචි වන්න
            </button>
            <button type="button" className="google-login-btn" disabled={loading}>
              Google Login / Google Login
            </button>
          </div>
        </form>
        <div onClick={forgotPassword} className="forgot-password">
          <a href="#">Forgot Password? / මුරපදය අමතකද? </a>
        </div>
      </div>
    </div>
  );
};

export default Signin;
