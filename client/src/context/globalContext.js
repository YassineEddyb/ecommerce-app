import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isAuth, setIsAuth] = useState(false);


  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <GlobalContext.Provider value={{ isMobile, isAuth, setIsAuth }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
