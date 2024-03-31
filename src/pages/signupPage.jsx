import { signIn, useSession } from "next-auth/react";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { environments } from "../../components/environment/environments";

const SignupPage = () => { // Renamed to 'SignupPage'
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const normalLogin = async () => {
    try {
      const response = await axios.post(
        `${environments.BASE_HOST_URL}/api/createUser`,
        {
          name: username,
          password: password,
          
          email:email,
          method:"NORMAL"
        }
      );

      if (response.data && response.data.token) {
        router.push("/auth/signin");
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <form className="form" autoComplete="off" onSubmit={normalLogin}>
      <div className="control">
          <h1>Register Page</h1>
        </div>
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
            placeholder="email"
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
        <button onClick={normalLogin}  className="btn block-cube block-cube-hover" type="button">
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
          {/* .bg2 */}
          <div  className="text">Register User</div>
        </button>
      
        {/* GOOGLE */}

       

        <div className="credits">
          <a href="https://codepen.io/marko-zub/" target="_blank"></a>
        </div>
      </form>
    </div>
  );
};

export default SignupPage; // Updated component name
