import React from "react";
import { useAuth } from "../Auth/AuthContext";
import { Link } from "react-router-dom";
import ContainerWrapper from "../UI/ContainerWrapper";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Button } from "@mui/material";

const Profile = () => {
  const { currentUser } = useAuth();
  return (
    <ContainerWrapper>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Card sx={{ maxWidth: "sm", padding: 3, textAlign: "center" }}>
          <Avatar
            alt="Random User"
            src="https://source.unsplash.com/random"
            sx={{
              width: 240,
              height: 240,
              margin: "0 auto",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {currentUser.email.split("@")[0]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hello there {currentUser.email.split("@")[0]}! Thank you very much
              for Signin up at PhotoGallery, we are a platform where anyone can
              provide its own pictures and gather inspiration by others! We cant
              wait to see what your favorite pictures are and what you will load
              up! Lets check to the most important Sites!
            </Typography>
          </CardContent>
          <Link
            to="/uploads"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button variant="outlined" color="primary" sx={{ m: 1 }}>
              Uploads
            </Button>
          </Link>
          <Link
            to="/favorites"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button variant="outlined" color="primary" sx={{ m: 1 }}>
              Favorites
            </Button>
          </Link>
        </Card>
      </Box>
    </ContainerWrapper>
  );
};

export default Profile;
