import React, { createContext, useContext, useState } from 'react';

const ClickedValuesContext = createContext();

export const ClickedValuesProvider = ({ children }) => {
  const [clickedValues, setClickedValues] = useState({});

  const handleClick = (category, value) => {
    setClickedValues(prev => ({
      ...prev,
      [`${category}-${value}`]: true
    }));
  };

  return (
    <ClickedValuesContext.Provider value={{ clickedValues, handleClick }}>
      {children}
    </ClickedValuesContext.Provider>
  );
};

export const useClickedValues = () => useContext(ClickedValuesContext);
