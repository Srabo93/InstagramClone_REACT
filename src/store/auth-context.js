import React, { useState } from "react";

const AuthContext = React.createContext({
  user: "",
  userId: "",
  accessToken: "",
  isLoggedIn: false,
  login: (accessToken) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [accessToken, setAccessToken] = useState(initialToken);
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const userIsLoggedIn = !!accessToken;

  const loginHandler = (token, email, uid) => {
    setAccessToken(token);
    localStorage.setItem("token", token);
    const name = email.split("@")[0];
    setUser(name);
    setUserId(uid);
  };
  const logoutHandler = () => {
    setAccessToken(null);
    setUser(null);
    setUserId(null);
    localStorage.removeItem("token");
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
