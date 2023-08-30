import React, { createContext, useContext, useState,useEffect } from "react";

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);


  
  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");
    
    if (storedToken && storedUser) {
      const userObj = JSON.parse(storedUser);
      setUser(userObj);
      setToken(storedToken);
    } else {
      // Handle the case where either the token or user is not available in localStorage
    }
  }, []);

  return (
    <TokenContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  return useContext(TokenContext);
};
