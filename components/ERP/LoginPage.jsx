import axios from 'axios';
import React, { useEffect, useState } from 'react';


const LoginPage = () => {

    const [token, setToken] = useState('');

  

    
    const loginGoogle = () => {
        window.open("http://localhost:8080/auth/google", "_self");
      };
    

      const faceBookGoogle = async () => {
        window.location.href = 'http://localhost:8080/auth/facebook';
      }
  

  return (
    <div>
      <button onClick={loginGoogle}>Login</button>
      <button onClick={faceBookGoogle}>faceBookGoogle</button>

      <div></div>
    </div>
  );
};

export default LoginPage;
