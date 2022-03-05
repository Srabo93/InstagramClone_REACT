import { useState, useEffect } from "react";
import {
  collection,
  orderBy,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../API/firebase";
import { useAuth } from "../Auth/AuthContext";

const useFirestore = (collections, config) => {
  const [docs, setDocs] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    let q;
    if (currentUser !== null && collections === "Uploads") {
      q = query(
        collection(db, collections),
        where("createdByUser", "==", config)
      );
    } else if (currentUser !== null && collections === "Favorites") {
      q = query(
        collection(db, collections),
        where("likedByUser", "==", currentUser.email)
      );
    } else {
      q = query(collection(db, collections));
    }

    const unsubscribe = onSnapshot(
      q,
      orderBy("createdAt", "asc"),
      (querySnapshot) => {
        let documents = [];
        querySnapshot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      }
    );
    return () => unsubscribe();
  }, [collections, config, currentUser]);
  return { docs };
};

export default useFirestore;
