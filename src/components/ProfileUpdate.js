import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Badge } from "@mui/material";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { Avatar, Button } from "@mui/material";
import UploadImgFile from "./UploadImgFile";

const ProfileUpdate = () => {
  const [text, setText] = useState("");
  const [submit, setSubmit] = useState(false);

  const submitHandler = () => {
    console.log("submithandler");
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
            badgeContent={<UploadImgFile />}
          >
            <Avatar
              alt="Random User"
              src="https://source.unsplash.com/random"
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
