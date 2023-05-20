import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [initLoading, setInitLoading] = useState(true);
  const [sideBar, setSideBar] = useState(false);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <GlobalContext.Provider
      value={{
        screenWidth,
        isAuth,
        setIsAuth,
        isLoading,
        setIsLoading,
        initLoading,
        setInitLoading,
        sideBar,
        setSideBar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
