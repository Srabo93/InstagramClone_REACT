import React from "react";
import { Avatar, Paper } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const DisplayComments = ({ comments, cardDoc }) => {
  return (
    <React.Fragment>
      {comments
        .filter((comment) => comment.docId === cardDoc.id)
        .map((filteredComment) => (
          <Paper elevation={1} sx={{ mt: 1 }} key={filteredComment.id}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingBottom: 1,
                  }}
                >
                  {filteredComment.img ?? (
                    <Avatar src={filteredComment.userImg}></Avatar>
                  )}
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    sx={{ paddingLeft: 1 }}
                  >
                    {filteredComment.createdByUser.split("@")[0]}
                  </Typography>
                </Box>
                <Typography variant="paragraph">
                  {filteredComment.comment}
                </Typography>
                {/* <Typography variant="caption" sx={{ paddingLeft: 1 }}>
                  {new Date(
                    filteredComment.createdAt.seconds * 1000
                  ).toLocaleDateString("en-EN")}
                </Typography> */}
              </CardContent>
            </Card>
          </Paper>
        ))}
    </React.Fragment>
  );
};

export default DisplayComments;
