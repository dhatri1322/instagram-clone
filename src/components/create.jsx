import * as React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import SensorsIcon from "@mui/icons-material/Sensors";
import { Modal } from "@mui/material";
export default function TypographyMenu({ isCreateOpen, setIsCreateOpen }) {
  return (
    <Modal
      open={isCreateOpen}
      onClose={() => {
        setIsCreateOpen(false);
      }}
      BackdropProps={{
        style: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Paper
        sx={{
          width: 200,
          zIndex: 9999,
          height: 90,
          position: "fixed",
          top: "50%",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
          color: "#000",
          fontFamily: "sans-serif",
        }}
      >
        <MenuList>
          <MenuItem
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="inherit">Post</Typography>
            <ListItemIcon>
              <PermMediaIcon fontSize="small" sx={{ color: "#000" }} />
            </ListItemIcon>
          </MenuItem>
          <MenuItem
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="inherit">Live video</Typography>
            <ListItemIcon>
              <SensorsIcon fontSize="small" sx={{ color: "#000" }} />
            </ListItemIcon>
          </MenuItem>
        </MenuList>
      </Paper>
    </Modal>
  );
}
