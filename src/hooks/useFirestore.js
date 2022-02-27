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

const useFirestore = (collections, user) => {
  const [docs, setDocs] = useState([]);
  const { currentUser } = useAuth();
  useEffect(() => {
    let q;
    if (currentUser !== null) {
      q = query(
        collection(db, collections),
        where("createdByUser", "==", user)
      );
    } else {
      q = collection(db, collections);
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
  }, [collections, user, currentUser]);
  return { docs };
};

export default useFirestore;
