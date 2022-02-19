import { useAuth } from "../../Auth/AuthContext";

const useAddToFavorites = (imgSrc) => {
  const { currentUser } = useAuth();
  console.log(imgSrc);
  if (imgSrc === null) return;

  const addFavorites = async (imgSrc) => {
    await addDoc(collection(db, "Users", `${currentUser.email}`, `Favorites`), {
      imgSrc,
      createdAt: serverTimestamp(),
    });
  };

  addFavorites();
};

export default useAddToFavorites;
