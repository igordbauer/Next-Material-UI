import React from "react";
import { AppBar, Box, Badge, Avatar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
const CustomAppbar = ({ handleOpen }) => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton onClick={handleOpen}>
          <MenuIcon />
        </IconButton>
        <Box
          gap={1}
          sx={{
            display: "flex",
          }}
        >
          <IconButton>
            <Badge color="error" badgeContent={4}>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <Avatar src="/public/logoooo.jpg" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppbar;
