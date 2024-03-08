import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import FacebookLogin from "react-facebook-login";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useToken } from "../../context/TokenContext";
import axios from "axios";
import { environments } from "../../../components/environment/environments";

const provider = [
  {
    name: "google",
  },
];

const Signin = () => {
  const { token, setToken, setUser, user } = useToken();
  const router = useRouter();
  const [username, setUsername] = useState("");
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
      method:"FACEBOOK"
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
          localStorage.setItem("user", JSON.stringify(responsePost.data.newUser));
          router.push("/home");
        }else{

          localStorage.setItem("accessToken", responsePost.data.token);
          localStorage.setItem("user", JSON.stringify(responsePost.data.existingUser));
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
          email: username,
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

        <button
          onClick={normalLogin}
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
          <div className="text">Log In</div>
        </button>
        {/* GOOGLE */}

        {provider.map(({ name }) => (
          <button
            key={name}
            onClick={googleSignIn}
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

        <button
          onClick={RegisterUser}
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
          <div className="text">Register User</div>
        </button>
        <div className="credits">
          <a href="https://codepen.io/marko-zub/" target="_blank"></a>
        </div>

        <FacebookLogin
          appId="2120907774936976"
          autoLoad={false} // Set to true if you want to auto-load the login dialog
          fields="name,email,picture" // Requested fields from Facebook profile
          callback={responseFacebook} // Callback function to handle the response
          icon="fa-facebook" // Optional: customize the login button with a FontAwesome icon
          textButton="Login with Facebook" // Optional: customize the text of the login button
        />
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
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHyMsBXRnb4athVhErcsCVr3JLa02FmkU0i4W9cnwbHBYpy4gYJ7v_P-vtbQ8Voe7a8vU&usqp=CAU"
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
