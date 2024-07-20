import React, { createContext, useState, useEffect } from "react";

export const DesignContext = createContext();

const MAX_DESIGNS = 20;

export const DesignProvider = ({ children }) => {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    const storedDesigns = JSON.parse(localStorage.getItem("designs")) || [];
    setDesigns(storedDesigns);
  }, []);

  const addDesign = (newDesign) => {
    let updatedDesigns = [...designs, newDesign];

    if (updatedDesigns.length > MAX_DESIGNS) {
      updatedDesigns = updatedDesigns.slice(
        updatedDesigns.length - MAX_DESIGNS
      );
    }

    setDesigns(updatedDesigns);
    localStorage.setItem("designs", JSON.stringify(updatedDesigns));
  };

  return (
    <DesignContext.Provider value={{ designs, addDesign }}>
      {children}
    </DesignContext.Provider>
  );
};
