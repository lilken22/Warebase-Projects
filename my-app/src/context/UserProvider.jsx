import React, { useState, useEffect } from "react";
import { userContext } from "./userContext"; // ✅ correct path

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const updateUser = (userInfo) => {
    setUser(userInfo);
    localStorage.setItem("user", JSON.stringify(userInfo));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <userContext.Provider value={{ user, updateUser, logout }}>
      {children}
    </userContext.Provider>
  );
};

