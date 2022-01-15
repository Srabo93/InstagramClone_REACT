import React, { useState } from "react";

const AuthContext = React.createContext({
  user: "",
  userId: "",
  accessToken: "",
  isLoggedIn: false,
  login: (accessToken, email, uid) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialUser = localStorage.getItem("user");
  const [accessToken, setAccessToken] = useState(initialToken);
  const [user, setUser] = useState(initialUser);
  const [userId, setUserId] = useState(null);
  const userIsLoggedIn = !!accessToken;

  const loginHandler = (token, email, uid) => {
    const name = email.split("@")[0];
    localStorage.setItem("token", token);
    localStorage.setItem("user", name);
    localStorage.setItem("userId", uid);
    setUserId(uid);
    setAccessToken(token);
    setUser(name);
    setUserId(uid);
  };
  const logoutHandler = () => {
    setAccessToken(null);
    setUser(null);
    setUserId(null);
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const ContextValue = {
    user: user,
    userId: userId,
    accessToken: accessToken,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={ContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
