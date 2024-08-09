// src/ProfileDashboard.jsx
import React from 'react';
import { Container, Grid, Paper, Avatar, Typography, Button, Divider } from '@mui/material';
import { styled } from '@mui/system';
// import Sidebar from '../components/sidebar';

const ProfileContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const ProfileHeader = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
}));

const ProfileInfo = styled('div')(({ theme }) => ({
  flex: 1,
  marginLeft: theme.spacing(2),
}));

const ProfileDashboard = () => {

  return (
    
    <ProfileContainer maxWidth="md">
      <ProfileHeader>
        <AvatarStyled alt="Profile Picture" src="/static/images/avatar/1.jpg" />
        <ProfileInfo>
          <Typography variant="h5">John Doe</Typography>
          <Typography variant="body2" color="textSecondary">john.doe@example.com</Typography>
          <Button variant="contained" color="primary" style={{ marginTop: 8 }}>
            Edit Profile
          </Button>
        </ProfileInfo>
      </ProfileHeader>
      <Grid container spacing={3} style={{ marginTop: 16 }}>
        <Grid item xs={5} md={2}>
          <Paper elevation={3} style={{ padding: 5 }}>
            <Typography variant="h6">Posts</Typography>
            <Divider style={{ margin: '16px 0' }} />
            {/* Add Post components here */}
          </Paper>
        </Grid>
        <Grid item xs={5} md={2}>
          <Paper elevation={3} style={{ padding: 5 }}>
            <Typography variant="h6">Followers</Typography>
            <Divider style={{ margin: '16px 0' }} />
            {/* Add Followers list here */}
          </Paper>
        </Grid>
        <Grid item xs={5} md={2}>
          <Paper elevation={3} style={{ padding: 5 }}>
            <Typography variant="h6">Following</Typography>
            <Divider style={{ margin: '16px 0' }} />
            {/* Add Following list here */}
          </Paper>
        </Grid>
      </Grid>
    </ProfileContainer>

  );
};

export default ProfileDashboard;
