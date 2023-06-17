import React, { createContext, useState } from 'react';

const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  const toggleValue = {
    toggle,
    setToggle,
  };

  return (
    <ToggleContext.Provider value={toggleValue}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContext;
