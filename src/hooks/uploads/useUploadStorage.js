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
    if (file === null) {
      return;
    }
    const storage = getStorage();
    const randomId = Math.floor(Math.random() * (500 - 1) + 500);
    const allImgRef = ref(storage, `All_Images/ ${randomId} ${file.name}`);
    const userImgref = ref(
      storage,
      `Users/${currentUser.email}/uploads/${file.name}`
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
