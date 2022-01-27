import { useEffect, useContext } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../API/firebase";
import AuthContext from "../../store/auth-context";

const useFavourites = (url) => {
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    uploadFavorites();
  }, [url]);

  const uploadFavorites = async () => {
    await addDoc(collection(db, "users", `${authCtx.user}`, "favourites"), {
      url,
      likeCreatedAt: serverTimestamp(),
    });
  };
};

export default useFavourites;
