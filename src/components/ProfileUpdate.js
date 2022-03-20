import React, { useState, useEffect } from "react";
import UploadProfileImg from "./UploadProfileImg";
import { onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { Avatar, Button } from "@mui/material";
import { useAuth } from "../Auth/AuthContext";
import { db } from "../API/firebase";
import { Badge } from "@mui/material";

const ProfileUpdate = () => {
  const [text, setText] = useState("");
  const [avatar, setAvatar] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    onSnapshot(doc(db, "Users", currentUser.uid), (doc) => {
      setAvatar(doc.data());
    });
  }, [currentUser.uid]);

  const submitHandler = async () => {
    if (text === "") return;
    await setDoc(
      doc(db, "Users", currentUser.uid),
      {
        name: currentUser.email,
        description: text,
      },
      { merge: true }
    );
    setText("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          padding: 3,
          display: "flex",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Badge
            component="div"
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={<UploadProfileImg />}
          >
            <Avatar
              alt="Random User"
              src={avatar?.img}
              sx={{
                width: 240,
                height: 240,
                margin: "0 auto",
              }}
            />
          </Badge>

          <TextField
            label="Description"
            multiline
            rows={4}
            value={text}
            placeholder="Tell us something about us!"
            sx={{ mt: 1 }}
            onChange={(e) => setText(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            color="success"
            sx={{ m: 1 }}
            onClick={submitHandler}
          >
            Save Edit
          </Button>
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button variant="outlined" color="secondary" sx={{ m: 1 }}>
              Go Back
            </Button>
          </Link>
        </Box>
      </Card>
    </Box>
  );
};

export default ProfileUpdate;
