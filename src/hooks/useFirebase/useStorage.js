import { useState, useEffect } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  const randomId = Math.floor(Math.random() * (50 - 1) + 50);

  useEffect(() => {
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + randomId + file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        const docRef = await addDoc(collection(db, "images"), {
          url,
          createdAt: serverTimestamp(),
        });

        setUrl(url);
      }
    );
  }, [file]);
  return { progress, error, url };
};

export default useStorage;
