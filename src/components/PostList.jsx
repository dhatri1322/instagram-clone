import React, { useState } from 'react';
import CustomOption from "../components/option";
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography } from '@mui/material';
import { Favorite, Share, MoreVert } from '@mui/icons-material';

const Post = ({ username, imageUrl, caption, imageHeight, isOptionOpen, setIsOptionOpen }) => {
  const initial = username ? username.charAt(0) : '?';

  return (
    <Card style={{ width: '50%', margin: '0 auto', marginBottom: '20px' }}>
      <CardHeader 
        avatar={<Avatar>{initial}</Avatar>}
        action={
          <IconButton onClick={() => setIsOptionOpen(!isOptionOpen)}>
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
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  return (
    <div>
      <Post 
        username="IndiaNews" 
        imageUrl="/assets/images/gate.jpg" 
        caption="India Gate, located in New Delhi, is a 42-meter-high war memorial designed by Sir Edwin Lutyens, commemorating Indian soldiers who died in World War I and the Third Anglo-Afghan War. It was inaugurated in 1931 and is made of red and pale sandstone." 
        imageHeight="800"
        isOptionOpen={isOptionOpen}
        setIsOptionOpen={setIsOptionOpen}
      />
      <Post 
        username="JaneSmith" 
        imageUrl="assets/images/ai.jpg" 
        caption="Artificial Intelligence (AI) enables machines to perform tasks requiring human intelligence, like problem-solving and learning. Key subfields include machine learning and natural language processing." 
        imageHeight="450"
        isOptionOpen={isOptionOpen}
        setIsOptionOpen={setIsOptionOpen}
      />
      <Post 
        username="StreetFood12" 
        imageUrl="assets/images/samosa.jpg" 
        caption="Samosa is a popular South Asian snack, typically consisting of a crispy, triangular pastry filled with spiced potatoes, peas, and sometimes meat. It's usually deep-fried and enjoyed with chutneys." 
        imageHeight="600"
        isOptionOpen={isOptionOpen}
        setIsOptionOpen={setIsOptionOpen}
      />
      <Post 
        username="Dhatri13" 
        imageUrl="assets/images/flower.jpeg" 
        caption="Bloom where you are planted." 
        imageHeight="800"
        isOptionOpen={isOptionOpen}
        setIsOptionOpen={setIsOptionOpen}
      />
      {isOptionOpen && (
        <CustomOption isOptionOpen={isOptionOpen} 
        setIsOptionOpen={setIsOptionOpen} />
      )}
    </div>
  );
};

export default PostList;