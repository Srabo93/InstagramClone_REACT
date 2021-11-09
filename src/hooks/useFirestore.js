import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const useFirestore = (collections) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    async function fetch() {
      const querySnapshot = await getDocs(collection(db, collections));
      let documents = [];

      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    }
    fetch();
    return () => fetch();
  }, [collections]);

  return { docs };
};

export default useFirestore;
