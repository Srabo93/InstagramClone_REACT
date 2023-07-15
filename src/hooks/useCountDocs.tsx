import { useState, useEffect } from "react";
import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "../firebase";

const useCountDocs = (collectionName: string) => {
  const [collectionLength, setCollectionLength] = useState(0);

  useEffect(() => {
    try {
      (async () => {
        const allDocs = await getCountFromServer(
          collection(db, collectionName)
        );
        setCollectionLength(allDocs.data().count);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [collectionName]);

  return [collectionLength];
};

export default useCountDocs;
