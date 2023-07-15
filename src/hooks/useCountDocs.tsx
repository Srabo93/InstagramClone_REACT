import { useState, useEffect } from "react";
import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "../firebase";

const useCountDocs = (collectionName: string) => {
  const [collectionLength, setCollectionLength] = useState(0);

  useEffect(() => {
    (async () => {
      const allDocs = await getCountFromServer(collection(db, collectionName));
      setCollectionLength(allDocs.data().count);
    })();
  }, [collectionName]);

  return [collectionLength];
};

export default useCountDocs;
