// src/pages/verify-otp.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useToken } from "../context/TokenContext";
import { environments } from "../../components/environment/environments";
import { useRouter } from 'next/router';

const VerifyOtp = () => {
  const { user } = useToken();
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [userId, setUserId] = useState(''); 
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (router.query.phoneNumber) {
      setPhoneNumber(router.query.phoneNumber);
    }
  }, [router.query]);
  
  useEffect(() => {
    if (user) {
        setUserId(user.userId)
      console.log(user.userId, 'data');
    }
  }, [user]);
  console.log(user,'data');
  console.log(userId,'99999');
  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post(`${environments.BASE_HOST_URL}/api/verify-otp`, { phoneNumber, otp,userId });
      setMessage(response.data.message);
      alert(response.data.message)
    } catch (error) {
      setMessage('Failed to verify OTP');
      console.error('Error:', error);
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
    padding: '20px',
  };

  const titleStyle = {
    color: '#333',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '100%',
    maxWidth: '400px',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100%',
    maxWidth: '400px',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const messageStyle = {
    marginTop: '20px',
    color: 'green',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Verify OTP</h2>
 
      <input
        style={inputStyle}
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={handleVerifyOtp}
      >
        Verify OTP
      </button>
      {message && <p style={messageStyle}>{message}</p>}
    </div>
  );
};

export default VerifyOtp;
