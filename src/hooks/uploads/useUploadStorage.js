import { useState, useEffect } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useAuth } from "../../Auth/AuthContext";

const useUploadStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (file === null || undefined) {
      return;
    }
    const storage = getStorage();
    const randomId = Math.floor(Math.random() * (50 - 1) + 50);
    const allImgRef = ref(storage, "allImages/" + randomId + file.name);
    const userImgref = ref(
      storage,
      `user/${currentUser.email}/uploads/${file.name}`
    );

    uploadBytesResumable(userImgref, file);
    const uploadImages = uploadBytesResumable(allImgRef, file);

    uploadImages.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
        console.log(`StorageHook2 ${err}`);
      },
      async () => {
        const url = await getDownloadURL(uploadImages.snapshot.ref);
        setUrl(url);
      }
    );
  }, [file, currentUser.email]);

  return { progress, url, error };
};

export default useUploadStorage;
