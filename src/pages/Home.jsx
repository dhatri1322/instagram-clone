import React from 'react';
import Story from './story';
import PostList from './PostList';
import Footer from '../components/footer';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Explore as ExploreIcon,
  Movie as ReelsIcon,
  Send as MessageIcon,
  Favorite as NotificationIcon,
  AddBox as CreateIcon,
  AccountCircle as ProfileIcon,
  More as ReadMoreTwoTone,
} from '@mui/icons-material';

const Sidebar = () => {
  const drawerWidth = 240;

  return (
    <>
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ overflow: 'auto' }}>
        <br></br>
        <img src ="/assets/images/insta.png" height={28} width={125} alt='instagram'></img>
        <br></br>
        <br></br>
        <List>
          <ListItem button>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><SearchIcon /></ListItemIcon>
            <ListItemText primary="Search" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ExploreIcon /></ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ReelsIcon /></ListItemIcon>
            <ListItemText primary="Reels" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><MessageIcon /></ListItemIcon>
            <ListItemText primary="Message" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><NotificationIcon /></ListItemIcon>
            <ListItemText primary="Notification" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><CreateIcon /></ListItemIcon>
            <ListItemText primary="Create" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ProfileIcon /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <Box
          sx={{
            display: 'flex',
            marginTop:'18.5rem'
          }}>
          <ListItem button>
            <ListItemIcon><ReadMoreTwoTone /></ListItemIcon>
            <ListItemText primary="More"></ListItemText>
          </ListItem>
          </Box>
        </List>
      </Box>
    </Drawer>

    
      <div>
       <Story/>
      </div>
      
      
      <div>
        <PostList/>
      </div>



      <div>
        <Footer/>
      </div>
      </>
  );

};
export default Sidebar;


