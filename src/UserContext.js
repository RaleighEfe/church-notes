"use client";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const useAuth = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsAuth(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
  };
  return (
    <UserContext.Provider value={value}>
      {!isAuth && children}
    </UserContext.Provider>
  );
};
