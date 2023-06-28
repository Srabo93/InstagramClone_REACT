import { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import useAppStore from "../store";
import Modal from "./Modal";
import { Box, Typography } from "@mui/material";
import FavoritesPageGrid from "./FavoritesPageGrid";
import PageWrapper from "./PageWrapper";
import { PostData } from "./Post";

export type Favorite = {
  postId: string;
  id: string;
};

const FavoritesPage = () => {
  const [backdrop, setBackdrop] = useState(false);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [favoriteData, setFavoriteData] = useState<PostData | null>(null);
  const currentUser = useAppStore((state) => state.user);

  useEffect(() => {
    let cleanup = false;
    const fetchFavoriteIds = async () => {
      try {
        const q = query(
          collection(db, "Users2", `${currentUser.uid}`, "Favorites")
        );
        const favoriteDataArray: Favorite[] = [];
        const queryFavorites = await getDocs(q);

        queryFavorites.forEach((doc) => {
          const likeData = doc.data();
          likeData.id = doc.id;
          favoriteDataArray.push(likeData as Favorite);
        });
        if (!cleanup) {
          setFavorites(favoriteDataArray);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchFavoriteIds();

    return () => {
      cleanup = true;
    };
  }, [currentUser.uid]);

  return (
    <PageWrapper>
      <Box>
        <Typography
          variant="h3"
          textAlign="center"
          color="primary"
          gutterBottom
        >
          Your Favorites
        </Typography>
        <FavoritesPageGrid
          favorites={favorites}
          onSetFavorite={setFavoriteData}
          onSetBackdrop={setBackdrop}
        />
        {backdrop && (
          <Modal
            favorite={favoriteData}
            open={backdrop}
            onSetBackdrop={setBackdrop}
          />
        )}
      </Box>
    </PageWrapper>
  );
};

export default FavoritesPage;
