import React, { useEffect, useState } from "react";
import { useAuth } from "../../Auth/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../API/firebase";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Button } from "@mui/material";

const Profile = () => {
  const [profileData, setProfileData] = useState([]);
  const { currentUser } = useAuth();
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "Users", currentUser.uid), (doc) => {
      setProfileData(doc.data());
    });

    return () => unsub();
  }, [currentUser.uid]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ maxWidth: "sm", padding: 3, textAlign: "center" }}>
        <Avatar
          alt="Random User"
          src={profileData.img ?? profileData.img}
          sx={{
            width: 240,
            height: 240,
            margin: "0 auto",
          }}
        />
        {!profileData && (
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
        )}
        {profileData && (
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {currentUser.email.split("@")[0]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {profileData.description}
            </Typography>
          </CardContent>
        )}

        <Link
          to="/uploads"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button variant="outlined" color="primary" sx={{ m: 1 }}>
            Uploads
          </Button>
        </Link>
        <Link
          to="/updateprofile"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button variant="outlined" color="info" sx={{ m: 1 }}>
            Edit Profile
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
  );
};

export default Profile;
