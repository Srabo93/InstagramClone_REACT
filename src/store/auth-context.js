import React, { useState } from "react";

const AuthContext = React.createContext({
  user: "",
  accessToken: "",
  isLoggedIn: false,
  login: (accessToken, email) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialUser = localStorage.getItem("user");
  const [accessToken, setAccessToken] = useState(initialToken);
  const [user, setUser] = useState(initialUser);
  const userIsLoggedIn = !!accessToken;

  const loginHandler = (token, email, uid) => {
    const name = email.split("@")[0];
    localStorage.setItem("token", token);
    localStorage.setItem("user", name);

    setAccessToken(token);
    setUser(name);
  };
  const logoutHandler = () => {
    setAccessToken(null);
    setUser(null);

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const ContextValue = {
    user: user,
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
