import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography } from '@mui/material';
import { Favorite, Share, MoreVert } from '@mui/icons-material';

const Post = ({ username, imageUrl, caption, imageHeight }) => {
  const initial = username ? username.charAt(0) : '?';

  return (
    <Card style={{ width: '50%', margin: '0 auto', marginBottom: '20px' }}>
      <CardHeader
        avatar={<Avatar>{initial}</Avatar>}
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title={username || 'Unknown User'}
      />
      <CardMedia component="img" height={imageHeight} image={imageUrl} alt={caption} />
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

const PostList = () => {
  return (
    <div>
      <Post 
        username="JohnDoe" 
        imageUrl="https://via.placeholder.com/400" 
        caption="This is the first post" 
        imageHeight="400"
      />
      <Post 
        username="JaneSmith" 
        imageUrl="https://via.placeholder.com/300" 
        caption="This is the second post" 
        imageHeight="300"
      />
    </div>
  );
};

export default PostList;
