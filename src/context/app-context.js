import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isContactUsOpen, setContactUsIsOpen] = useState(false);

  const toggleContactUs = () => {
    setContactUsIsOpen(!isContactUsOpen);
  };

  return (
    <AppContext.Provider
      value={{
        isContactUsOpen,
        toggleContactUs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
