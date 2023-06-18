import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PostComments from "./PostComments";
import PostLikes from "./PostLikes";
import { Collapse } from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

type PostProps = {
  post: PostData;
};
type PostData = {
  caption: string;
  createdAt: { seconds: number; nanoseconds: number };
  fileName: string;
  id: string;
  imageUrl: string;
  title: string;
  userId: string;
  user: {
    displayName: string;
    email: string;
    photoUrl: string;
    createdAt: { seconds: number; nanoseconds: number };
  };
};

const Post = ({ post }: PostProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: "80%", m: 3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} src={post.user.photoUrl}></Avatar>
        }
        title={post.title}
        subheader={new Date(post.createdAt.seconds).toDateString()}
      />
      <CardMedia component="img" height="194" image={post.imageUrl} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <PostLikes postId={post.id} />
        <IconButton sx={{ ml: 3 }} color="primary" aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          color="primary"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <PostComments postId={post.id} />
      </Collapse>
    </Card>
  );
};

export default Post;
