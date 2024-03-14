import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
import { environments } from "../../components/environment/environments";

const forgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${environments.BASE_HOST_LOCAL_URL}/api/forgot-password`, { email }); // Adjust this path if needed
      setMessage(response.data);
    } catch (error) {
      setMessage('Something went wrong. Please try again later.');
    }
  };

  const goBack = () => {
    router.push("/auth/signin");
  };

  return (
    <div className="sign-in-sign-up-container">
      <h2>FORGOT PASSWORD</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <div className="buttons">
          <button type="submit" className="sign-in-btn">SEND EMAIL</button>
        </div>
      </form>
      {message && <p>{message}</p>}
      <div onClick={goBack} className="forgot-password">
      <a href="#">GO SIGN IN PAGE</a>
    </div>
    </div>
  );
};

export default forgotPassword;
