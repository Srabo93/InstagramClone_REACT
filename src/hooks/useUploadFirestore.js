import { useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../API/firebase";
import { useAuth } from "../Auth/AuthContext";

const useUploadFirestore = (url, file) => {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (url === null || file === null) {
      return;
    }
    const addDocuments = async () => {
      await addDoc(collection(db, `Uploads`), {
        url,
        fileName: file.name,
        createdByUser: currentUser.email,
        createdAt: serverTimestamp(),
      });
    };

    addDocuments();
  }, [url, file, currentUser.email]);
};

export default useUploadFirestore;
