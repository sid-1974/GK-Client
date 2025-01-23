import React, { createContext, useContext, useState,useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(() => {
    
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser)); 
    }
  }, []);

  const clearUser = () => {
    setUserData(null);
    localStorage.removeItem("user"); 
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, clearUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
