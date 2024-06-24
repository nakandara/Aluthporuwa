import { signIn, useSession } from "next-auth/react";
import axios from "axios";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { useToken } from "../context/TokenContext";
import { useRouter } from "next/router";
import { environments } from "../../components/environment/environments";

const SignupPage = () => {
  const router = useRouter();
  const { token, setToken, setUser, user } = useToken();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const normalLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    setLoading(true); // Start loading
    setError(null); // Clear previous error
    try {
      const response = await axios.post(
        `${environments.BASE_HOST_URL}/api/createUser`,
        {
          name: username,
          password: password,
          email: email,
          method: "NORMAL",
        }
      );

      const chatResponse = await axios.post(
        "https://socketio-api.vercel.app/api/auth/register",
        {
          username: username,
          email: email,
          password: password,
        }
      );

      if (response.data && response.data.token) {
        const responsel = await axios.post(
          `${environments.BASE_HOST_URL}/api/login`,
          {
            name: username,
            email: email,
            password: password,
          }
        );
        if (responsel.data && responsel.data.token && responsel.data.user) {
          const accessToken = responsel.data.token;
          const user = responsel.data.user;
          console.log(user);

          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("user", JSON.stringify(user));

          setToken(accessToken);
          setUser(user);

          router.push("/home");
          const response2 = await axios.post(
            `https://socketio-api.vercel.app/api/auth/login`,
            {
              name: username,
              email: email,
              password: password,
            }
          );

          const socketUser = response2.data;

          console.log(socketUser, "3333333");
          localStorage.setItem("userone", JSON.stringify(socketUser));
          const getsocketUser = localStorage.getItem("userone");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid credentials",
          });
          console.log("Login failed");
        }
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred during registration. Please try again.");
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div>
      <form className="form" autoComplete="off" onSubmit={normalLogin}>
        <div className="control" style={{ color: "black" }}>
          <h1>Register Page</h1>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="control block-cube block-input">
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
        </div>
        <div className="control block-cube block-input">
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
        </div>
        <div className="control block-cube block-input">
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
        </div>
        <button className="btn block-cube block-cube-hover" type="submit" disabled={loading}>
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
          <div className="text">{loading ? "Registering..." : "Register User"}</div>
        </button>

        <div className="credits">
          <a href="https://codepen.io/marko-zub/" target="_blank"></a>
        </div>
      </form>
    </div>
  );
};

export default SignupPage
