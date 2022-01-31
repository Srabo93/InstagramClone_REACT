import { useState, useEffect } from "react";
import { useAuth } from "../auth/useAuth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../API/firebase";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const { user } = useAuth();
  useEffect(() => {
    const storage = getStorage();
    const randomId = Math.floor(Math.random() * (50 - 1) + 50);
    const allImgRef = ref(storage, "allImages/" + randomId + file.name);
    const userImgref = ref(
      storage,
      `images/user/${user}/uploads/${user.email}`
    );

    const uploadImages = uploadBytesResumable(allImgRef, file);
    uploadBytesResumable(userImgref, file);

    uploadImages.on(
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
        const url = await getDownloadURL(uploadImages.snapshot.ref);
        await addDoc(collection(db, "users", `${user}`, "uploads"), {
          url,
          createdAt: serverTimestamp(),
          createdByUser: user,
        });
        await addDoc(collection(db, "allImages"), {
          url,
          createdAt: serverTimestamp(),
        });
        setUrl(url);
      }
    );
  }, [file, user]);
  return { progress, error, url };
};

export default useStorage;
