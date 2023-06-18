import { Typography, Avatar, Skeleton, Box } from "@mui/material";
const PostSkeleton = () => {
  return (
    <Box sx={{ maxWidth: "80%", minWidth: "80%" }}>
      <Skeleton variant="circular">
        {" "}
        <Avatar />
      </Skeleton>
      <Skeleton width="100%">
        <Typography>.</Typography>
      </Skeleton>
      <Skeleton variant="rectangular" width="100%">
        <div style={{ paddingTop: "50%" }}></div>
      </Skeleton>
      <Skeleton width="100%">
        <Typography>.</Typography>
      </Skeleton>
      <Box display="flex" flexDirection="row">
        <Skeleton variant="circular">
          <Avatar sx={{ width: 24, height: 24 }} />
        </Skeleton>
        <Skeleton variant="circular">
          <Avatar sx={{ width: 24, height: 24 }} />
        </Skeleton>
        <Skeleton variant="circular">
          <Avatar sx={{ width: 24, height: 24 }} />
        </Skeleton>
      </Box>
    </Box>
  );
};

export default PostSkeleton;
