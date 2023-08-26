// TokenContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    localStorage.getItem("accessToken", token);
    setToken(localStorage.getItem("accessToken", token))
  }, [token]);

  return (
    <TokenContext.Provider value={{ token, setToken,user, setUser }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
