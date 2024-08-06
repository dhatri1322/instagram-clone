import { Avatar, Typography, Box} from '@mui/material';
const Story = ({ username, imageUrl }) => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 1 }}>
        <Avatar src={imageUrl} sx={{ width: 56, height: 56 }} />
        <Typography variant="caption">{username}</Typography>
      </Box>
    );
  };

  export default Story;