import React from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../API/firebase";
import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const registerWithEmailAndPassword = async (email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    setUser(user);
    return true;
  };

  const signWithEmailAndPassword = async (email, password) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    setUser(user);
    return true;
  };

  const logout = () => {
    signOut(auth);
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(user);
      setIsAuthenticating(false);
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  const values = {
    user,
    isAuthenticating,
    registerWithEmailAndPassword,
    signWithEmailAndPassword,
    logout,
  };

  return (
    <AuthContext.Provider value={values}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
};
