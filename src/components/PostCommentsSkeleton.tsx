import { Typography, Avatar, Skeleton, Box, Stack } from "@mui/material";
const PostCommentsSkeleton = () => {
  return (
    <>
      <Stack
        spacing={2}
        m={2}
        direction="row"
        sx={{ maxWidth: "80%", minWidth: "80%" }}
      >
        <Skeleton variant="circular">
          {" "}
          <Avatar />
        </Skeleton>
        <Skeleton width="100%">
          <Typography>.</Typography>
        </Skeleton>
      </Stack>
      <Box m={2}>
        <Skeleton variant="rectangular" width="100%">
          <div style={{ paddingTop: "15%" }}></div>
        </Skeleton>
      </Box>
    </>
  );
};

export default PostCommentsSkeleton;
