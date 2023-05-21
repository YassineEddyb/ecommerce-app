import React, { createContext, useState, useEffect, useContext } from "react";

import axios from "../utils/axiosConfig";
import GlobalContext from "./globalContext";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const { setIsAuth, setInitLoading } = useContext(GlobalContext);

  useEffect(() => {
    const updateUser = async () => {
      try {
        await axios.patch("api/users/me", user, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        });
      } catch (err) {
        // console.log(err);
      }
    };
    updateUser();
  }, [user]);

  useEffect(() => {
    setInitLoading(true);
    const fetchUser = async () => {
      try {
        const res = await axios.get("api/users/me", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        });
        setUser(res.data.user);
        setIsAuth(true);
        setInitLoading(false);
      } catch (err) {
        // console.log(err);
        setInitLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
