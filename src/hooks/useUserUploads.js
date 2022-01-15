import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../API/firebase";

const useUserUploads = (uid) => {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    async function fetchData(uid) {
      const querySnapshot = await getDocs(
        collection(db, "images", "user", uid)
      );
      let documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      console.log(documents);
      setUploads(documents);
    }
    fetchData();
    return () => {};
  }, [uid, uploads]);
  // return { uploads };
};

export default useUserUploads;
