import React, { useState, createContext, useEffect } from "react";

export const ThemeBgContext = createContext();

const ThemeContext = ({ children }) => {
  const storage = JSON.parse(localStorage.getItem("theme"));

  const [theme, setTheme] = useState(storage);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const handleTheme = () => {
    if (storage) {
      setTheme((prev) => (prev ? "light" === "dark" : "light"));
    } else {
      setTheme((prev) => (prev ? "light" === "dark" : "light"));
    }
  };

  const state = {
    theme: theme,
    handleTheme: handleTheme,
  };
  return (
    <div>
      <ThemeBgContext.Provider value={state}>
        {children}
      </ThemeBgContext.Provider>
    </div>
  );
};

export default ThemeContext;
