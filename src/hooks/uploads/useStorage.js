import { useState, useEffect, useContext } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../API/firebase";
import AuthContext from "../../store/auth-context";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const storage = getStorage();
    const randomId = Math.floor(Math.random() * (50 - 1) + 50);
    const allImgRef = ref(storage, "allImages/" + randomId + file.name);
    const userImgref = ref(
      storage,
      `images/user/${authCtx.userId}/` + file.name
    );

    const uploadImages = uploadBytesResumable(allImgRef, file);
    const uploadTask2 = uploadBytesResumable(userImgref, file);

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
        await addDoc(collection(db, "images", "user", `${authCtx.userId}`), {
          url,
          createdAt: serverTimestamp(),
          createdByUser: authCtx.userId,
        });
        await addDoc(collection(db, "allImages"), {
          url,
          createdAt: serverTimestamp(),
        });
        setUrl(url);
      }
    );
  }, [file, authCtx.userId, authCtx.user]);
  return { progress, error, url };
};

export default useStorage;
