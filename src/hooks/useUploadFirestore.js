import { useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../API/firebase";
import { useAuth } from "../Auth/AuthContext";

const useUploadFirestore = (url) => {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (url === null) {
      return;
    }
    const addDocuments = async () => {
      await addDoc(collection(db, "Users"), {
        url,
        createdByUser: currentUser.email,
        createdAt: serverTimestamp(),
      });
    };

    addDocuments();
  }, [url, currentUser.email]);
};

export default useUploadFirestore;
