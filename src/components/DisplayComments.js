import React from "react";
import { Paper } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";

const DisplayComments = ({ comments, cardId }) => {
  return (
    <React.Fragment>
      {comments
        .filter((comment) => comment.docId === cardId)
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
                  <Avatar src="https://source.unsplash.com/random" />
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    sx={{ paddingLeft: 1 }}
                  >
                    {[filteredComment.createdByUser]}
                  </Typography>
                </Box>
                <Typography variant="paragraph">
                  {[filteredComment.comment]}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        ))}
    </React.Fragment>
  );
};

export default DisplayComments;
