import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography } from '@mui/material';
import { Favorite, Share, MoreVert } from '@mui/icons-material';

const Post = ({ username, imageUrl, caption }) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>{username.charAt(0)}</Avatar>}
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title={username}
      />
      <CardMedia component="img" height="400" image={imageUrl} alt={caption} />
      <CardContent>
        <Typography variant="body2">{caption}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
