import React, { createContext, useState, useEffect } from "react";

import axios from "../utils/axiosConfig";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  console.log(localStorage.getItem["jwt"]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("api/users/me", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        });
        setUser(res.data.user);
      } catch (err) {
        console.log(err);
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
