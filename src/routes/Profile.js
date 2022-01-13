import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
import { auth } from "../API/firebase";
import { deleteUser } from "firebase/auth";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Button, Container } from "@mui/material";

const Profile = () => {
  const authCtx = useContext(AuthContext);
  const user = authCtx.user;
  const navigate = useNavigate();

  const deleteAccountHandler = async () => {
    try {
      await deleteUser(auth.currentUser);
      authCtx.logout();
      navigate("/");
    } catch (error) {
      // An error ocurred
      authCtx.logout();
      navigate("/login");
      console.log(error);
    }
  };
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
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
            {user}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description about the user Description about the user Description
            about the user Description about the user Description about the user
            Description about the user Description about the user Description
            about the user Description about the user Description about the user
            Description about the user Description about the user Description
            about the user
          </Typography>
        </CardContent>
        <Button variant="outlined" onClick={deleteAccountHandler}>
          Delete Account
        </Button>
      </Card>
    </Container>
  );
};

export default Profile;
