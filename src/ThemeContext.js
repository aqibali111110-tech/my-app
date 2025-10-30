import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mod, setMod] = useState("light");

  function changeMod() {
    if (mod === "dark") {
      setMod("light");
      document.body.setAttribute("web-theme", "light");
    } else {
      setMod("dark");
      document.body.setAttribute("web-theme", "dark");
    }
  }

  return (
    <ThemeContext.Provider value={{ mod, changeMod }}>
      {children}
    </ThemeContext.Provider>
  );
};


// Easy-to-use custom hook
export const useTheme = () => useContext(ThemeContext);
