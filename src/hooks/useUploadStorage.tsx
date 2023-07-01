import { useState, useEffect } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import useAppStore from "../store";
import { FormData } from "../components/UploadImg";

type UploadStorageResult = {
  progress: number;
  error: any;
  url: string | null;
};

const useUploadStorage = (file: FormData | undefined): UploadStorageResult => {
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<any>(null);
  const [url, setUrl] = useState<string | null>(null);
  const currentUser = useAppStore((state) => state.user);

  useEffect(() => {
    if (
      file === undefined ||
      file.file === undefined ||
      file.description === undefined ||
      file.title === undefined
    ) {
      return;
    }
    if (file === null) return;

    const storage = getStorage();
    const userImgref = ref(
      storage,
      `Posts/${currentUser.email}/${file?.file.name}`
    );

    const uploadImages = uploadBytesResumable(userImgref, file.file);

    uploadImages.on(
      "state_changed",
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const imageUrl = await getDownloadURL(uploadImages.snapshot.ref);
        await addDoc(collection(db, "Posts"), {
          title: file.title,
          description: file.description,
          imageUrl: imageUrl,
          fileName: file.file.name,
          createdAt: serverTimestamp(),
          user: currentUser,
        });
        setUrl(imageUrl);
      }
    );
  }, [file, currentUser]);

  return { progress, url, error };
};

export default useUploadStorage;
