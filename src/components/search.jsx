import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function TemporaryDrawer({ isSearchOpen, setIsSearchOpen }) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const toggleDrawer = (newOpen) => () => {
    setIsSearchOpen(newOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        backgroundColor: "rgba(255,255,255)",
        zIndex: 99999999,
        position: "fixed",
        left: "4.5rem",
        top: "4.5rem",
        height: "100vh",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
        color: "#000",
        fontFamily: "sans-serif",
      }}
      role="presentation"
    >
      <List>
        <p
          style={{
            marginLeft: "1.5rem",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          Search
        </p>
      </List>
      <List>
        <TextField
          variant="outlined"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer
        BackdropProps={{
          style: {
            backgroundColor: "transparent",
          },
        }}
        open={isSearchOpen}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
