import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useToken } from '../../context/TokenContext';
import axios from "axios";
import { environments } from "../../../components/environment/environments";

const provider = [
  {
    name: "google",
  },
];

const Signin = () => {

  const { token, setToken } = useToken();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  


  console.log(process.env.BASE_URL);
  const handleOAuthSignIn = (name) => () => signIn(name);
  const google = () => {
    window.open(`/auth/google`);
  };
  console.log(process.env.BASE_URL);
  const normalLogin = async () => {
    
 
    try {
      const response = await axios.post(
     
        `${environments.BASE_HOST_URL}/api/login`,
        {
          email: username,
          password: password,
        }
      );
  
      console.log(response, "fffffffffffffff");
      if (response.data) {
        localStorage.setItem("accessToken", response.data.token);
        // Store the token in local storage
        setToken(response.data.token);
        // Redirect the user after successful sign-in
        router.push("/home");
      } else {
        // Handle unsuccessful login (show an error message, etc.)
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
          <h1>Sign In</h1>
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
        <button onClick={normalLogin} className="btn block-cube block-cube-hover" type="button">
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
          <div  className="text">Log In</div>
        </button>
        {/* GOOGLE */}

        {provider.map(({ name }) => (
         
          <button
            key={name}
            onClick={handleOAuthSignIn(name)}
            className="btn block-cube block-cube-hover"
            type="button"
          >
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
            <div className="text">{name}</div>
          </button>
        ))}

        <div className="credits">
          <a href="https://codepen.io/marko-zub/" target="_blank"></a>
        </div>
      </form>
    </div>
  );
};

export default Signin;

// import React from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';

// const Signin = () => {
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     try {
//       const response = await axios.post(`https://poruwa-back.onrender.com/api/createUser`, {
//         name: 'testone',
//         email: email,
//         password: password,
//       });

//       if (response.data) {
//         console.log('Logged in:', response.data);
//         router.push('https://web.facebook.com/reel/219207587757365');
//       } else {
//         console.log('Login failed');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   };

//   return (
//     <div className="container">
//        <div className="image-container">
//         <img
//           className="logo"
//           src="https://thumb-lvlt.xhcdn.com/a/c2ArvoRrhK6TAGBc3dDSZA/023/442/166/v2/2560x1440.212.webp"
//           alt="Facebook Logo"
//         />
//       </div>
//       <img className="logo" src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" alt="Facebook Logo" />
//       <form className="form" autoComplete="off" onSubmit={handleSubmit}>
//         <div className="input-container">
//           <input type="text" id="email" required />
//           <label htmlFor="email">Email or Phone</label>
//         </div>
//         <div className="input-container">
//           <input type="password" id="password" required />
//           <label htmlFor="password">Password</label>
//         </div>
//         <button type="submit" className="login-button">Log In</button>
//         <div className="divider">
//           <div className="divider-line"></div>
//           <div className="divider-text">or</div>
//           <div className="divider-line"></div>
//         </div>
//         <a href="#" className="divider-text">Create New Account</a>
//         <a href="#" className="divider-text">Forgot Password?</a>
//       </form>
//     </div>
//   );
// };

// export default Signin;
