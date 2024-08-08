import React, { useState } from "react";
import Story from "../components/Story";
import PostList from "../components/PostList";
import Footer from "../components/footer";
import CustumMore from "../components/more";
import CustumCreate from "../components/create";
import CustumNotification from "../components/notification";
import MenuIcon from '@mui/icons-material/Menu';
import Search from '../components/search';

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Explore as ExploreIcon,
  // Movie as ReelsIcon,
  Send as MessageIcon,
  Favorite as NotificationIcon,
  AddBox as CreateIcon,
  AccountCircle as ProfileIcon,
  More as ReadMoreTwoTone,
} from "@mui/icons-material";

const Sidebar = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const drawerWidth = 240;

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          fontFamily: "sans-serif",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box
          sx={{
            overflow: "hidden",
            // width: 250,
            // height: "100%",
            // backgroundColor: "white",
            // position: "relative",
            zIndex: 1000,
          }}
        >
          <br></br>
          <img
            src="/assets/images/insta.png"
            style={{ marginLeft: "1.25rem", marginTop: "1.25rem" }}
            height={28}
            width={125}
            alt="instagram"
          ></img>
          <br></br>
          <br></br>
          <List>
            <ListItem button onClick={() => window.location.reload()}>
              <ListItemIcon sx={{ color: "#000" }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <ListItemIcon sx={{ color: "#000" }}>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItem>
            <ListItem button>
              <ListItemIcon sx={{ color: "#000" }}>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItem>
            {/* <ListItem button>
              <ListItemIcon sx={{ color: "#000" }}>
                <ReelsIcon />
              </ListItemIcon>
              <ListItemText primary="Reels" />
            </ListItem> */}
            <ListItem button>
              <ListItemIcon sx={{ color: "#000" }}>
                <MessageIcon />
              </ListItemIcon>
              <ListItemText primary="Message" />
            </ListItem>
            <ListItem
              button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            >
              <ListItemIcon sx={{ color: "#000" }}>
                <NotificationIcon />
              </ListItemIcon>
              <ListItemText primary="Notification" />
            </ListItem>
            <ListItem button onClick={() => setIsCreateOpen(!isCreateOpen)}>
              <ListItemIcon sx={{ color: "#000" }}>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItem>
            <ListItem button>
              <ListItemIcon sx={{ color: "#000" }}>
                <ProfileIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <Box
              sx={{
                marginTop: "20rem",
              }}
            >
              <ListItem button onClick={() => setIsMoreOpen(!isMoreOpen)}>
                <ListItemIcon sx={{ color: "#000" }}>
                  <MenuIcon/>
                </ListItemIcon>
                <ListItemText primary="More"></ListItemText>
              </ListItem>
            </Box>
          </List>
        </Box>
      </Drawer>

      {isMoreOpen && (
        <CustumMore isMoreOpen={isMoreOpen} setIsMoreOpen={setIsMoreOpen} />
      )}
      {isCreateOpen && (
        <CustumCreate
          isCreateOpen={isCreateOpen}
          setIsCreateOpen={setIsCreateOpen}
        />
      )}
      {isNotificationOpen && (
        <CustumNotification
          isNotificationOpen={isNotificationOpen}
          setIsNotificationOpen={setIsNotificationOpen}
        />
      )}
      {isSearchOpen && (
        <Search
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
      )}

      <div>
        <Story />
      </div>

      <div>
        <PostList />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};
export default Sidebar;
