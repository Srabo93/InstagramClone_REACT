import { useState, useEffect } from "react";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase/config";

const useFirestore = (collections) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(collection(db, collections));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let documents = [];
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });
    return () => unsubscribe();
  }, [collections]);
  return { docs };
};

export default useFirestore;
