import * as React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
import { Divider, Modal } from "@mui/material";

export default function TypographyMenu({ isMoreOpen, setIsMoreOpen }) {
  return (
    <Modal
      open={isMoreOpen}
      onClose={() => {
        setIsMoreOpen(false);
      }}
      BackdropProps={{
        style: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Paper
        style={{
          position: "fixed",
          top: "55%",
          left: "2rem",
          width: "17rem",
          height: "auto",
          zIndex: 2000,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
          color: "#000",
          fontFamily: "sans-serif",
        }}
      >
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <SettingsOutlinedIcon fontSize="small" sx={{ color: "#000" }} />
            </ListItemIcon>
            <Typography variant="inherit">Setting</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <AssignmentOutlinedIcon fontSize="small" sx={{ color: "#000" }} />
            </ListItemIcon>
            <Typography variant="inherit">Your activity</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <BookmarkBorderOutlinedIcon
                fontSize="small"
                sx={{ color: "#000" }}
              />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Saved
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <LightModeOutlinedIcon fontSize="small" sx={{ color: "#000" }} />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Switch appearance
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <AnnouncementOutlinedIcon
                fontSize="small"
                sx={{ color: "#000" }}
              />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Report a problem
            </Typography>
          </MenuItem>
          <hr />
          <MenuItem>
            <Typography variant="inherit" noWrap>
              Switch accounts
            </Typography>
          </MenuItem>
          <Divider className="custom-divider" />
          <MenuItem>
            <Typography variant="inherit" noWrap>
              Log out
            </Typography>
          </MenuItem>
        </MenuList>
      </Paper>
    </Modal>
  );
}
