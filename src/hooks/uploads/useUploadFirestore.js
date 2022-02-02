import React from "react";
import { useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../API/firebase";
import { useAuth } from "../../Auth/AuthContext";

const useUploadFirestore = (url) => {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (url === null) {
      return;
    }
    const addDocuments = async () => {
      await addDoc(collection(db, "allImages"), {
        url: url,
        createdAt: serverTimestamp(),
      });
      await addDoc(collection(db, "users", `${currentUser.email}`, "uploads"), {
        url,
        createdAt: serverTimestamp(),
        createdByUser: currentUser.email,
      });
    };
    addDocuments();
  }, [url, currentUser.email]);
  return <div></div>;
};

export default useUploadFirestore;
