import React, { useState } from "react";
import {
  Container,
  Drawer,
  Button,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ThemeProvider } from "@mui/material";
import theme from "../src/theme";

export default function MyApp({ Component, pageProps }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpen = () => setOpenDrawer(true);
  const handleClose = () => setOpenDrawer(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
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
        </Box>

        <Button>
          <span />
          <span />
          <span />
        </Button>
        <Drawer
          open={openDrawer}
          variant="temporary"
          onClose={handleClose}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Box
            sx={{
              minWidth: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mt: 5,
            }}
          >
            <Box sx={{ m: 3 }}>
              <Avatar
                src="/public/logoooo.jpg"
                sx={{ width: 70, height: 70 }}
              />
            </Box>
            <Box
              gap={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button variant="contained">My profile</Button>
              <Button variant="contained">Settings</Button>
              <Button variant="contained">About</Button>
              <Button variant="contained">Contact</Button>
            </Box>
          </Box>
        </Drawer>
        <Container maxWidth="md" sx={{ mt: 15 }}>
          <Component {...pageProps} />;
        </Container>
      </ThemeProvider>
    </>
  );
}
