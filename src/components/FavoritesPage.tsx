import { useState } from "react";
import Modal from "./Modal";
import { Box, Typography } from "@mui/material";
import FavoritesPageGrid from "./FavoritesPageGrid";
import PageWrapper from "./PageWrapper";
import { PostData } from "./Post";
import useFavorites from "../hooks/useFavorites";

const FavoritesPage = () => {
  const [backdrop, setBackdrop] = useState(false);
  const [favorite, setFavorite] = useState<PostData | null>(null);
  const [posts] = useFavorites();

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
          posts={posts}
          onSetFavorite={setFavorite}
          onSetBackdrop={setBackdrop}
        />
        {backdrop && (
          <Modal
            favorite={favorite}
            open={backdrop}
            onSetBackdrop={setBackdrop}
          />
        )}
      </Box>
    </PageWrapper>
  );
};

export default FavoritesPage;
