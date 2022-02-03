import { useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../API/firebase";
import { useAuth } from "../../Auth/AuthContext";

const useUploadFirestore = (url, detail = false, title, description) => {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (url === null) {
      return;
    }
    const addDocuments = async () => {
      await addDoc(collection(db, "All_Images"), {
        url: url,
        createdAt: serverTimestamp(),
      });
      await addDoc(
        collection(db, "Users", `${currentUser.email}`, `Quick_Uploads`),
        {
          url,
          createdAt: serverTimestamp(),
          createdByUser: currentUser.email,
        }
      );
    };
    const addDetailedDocuments = async () => {
      await addDoc(collection(db, "All_Images"), {
        url: url,
        createdAt: serverTimestamp(),
      });
      await addDoc(
        collection(db, "Users", `${currentUser.email}`, `Detailed_Uploads`),
        {
          title,
          description,
          url,
          createdAt: serverTimestamp(),
          createdByUser: currentUser.email,
        }
      );
    };

    if (detail !== true) {
      addDocuments();
    } else {
      addDetailedDocuments();
    }
  }, [url, currentUser.email, detail, title, description]);
};

export default useUploadFirestore;
