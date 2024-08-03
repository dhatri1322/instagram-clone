import React from 'react';
import { Typography, Stack, Box } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingTop: '2.9rem'
      }}
    >
      <Box sx={{ bgcolor: 'white', width: '100%', py: 2 }}>
        <Stack
           direction="row"
           justifyContent="center"
           alignItems="flex-start"
           spacing={2}
        >
          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>Meta</Typography>
          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>About</Typography>
          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>Blog</Typography>
          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>Jobs</Typography>
          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>Help</Typography>
          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>API</Typography>
          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>Privacy</Typography>
          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>Terms</Typography>
          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>Locations</Typography>
          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>Instagram Lite</Typography>
          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>Threads</Typography>
          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>Contact Uploading & Non-Users</Typography>
          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>Meta Verified</Typography>
        </Stack>
        <Typography
          variant="body2"
          align="center"
          sx={{ fontSize: '0.75rem', mt: 1 }}
        >
          © 2024 Instagram from Meta
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
