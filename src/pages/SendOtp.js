import React, { useState } from 'react';
import axios from 'axios';
import { environments } from "../../components/environment/environments";
import { useRouter } from "next/router";

const SendOtp = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('+94');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSendOtp = async () => {
    try {
      const response = await axios.post(`${environments.BASE_HOST_URL}/api/send-otp`, { phoneNumber });
      setMessage(response.data.message);
      setError(false);
      router.push({
        pathname: '/VerifyOtp',
        query: { phoneNumber },
      }); // Navigate to verify-otp page with phone number
    } catch (error) {
      setMessage('Failed to send OTP');
      setError(true);
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    // Prevent the user from removing the country code prefix
    if (value.startsWith('+94')) {
      setPhoneNumber(value);
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
    color: error ? 'red' : 'green',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Send OTP</h2>
      <input
        style={inputStyle}
        type="text"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={handleChange}
      />
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={handleSendOtp}
      >
        Send OTP
      </button>
      {message && <p style={messageStyle}>{message}</p>}
    </div>
  );
};

export default SendOtp;
