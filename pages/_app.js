import React, { useState } from "react";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from "../src/theme";
import CustomDrawer from "../src/components/Navbar/CustomDrawer";
import CustomAppbar from "../src/components/Navbar/CustomAppbar";

export default function MyApp({ Component, pageProps }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpen = () => setOpenDrawer(true);
  const handleClose = () => setOpenDrawer(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CustomAppbar {...{ handleOpen }} />
        <CustomDrawer {...{ handleClose, openDrawer }} />
        <Container maxWidth="md" sx={{ mt: 15 }}>
          <Component {...pageProps} />;
        </Container>
      </ThemeProvider>
    </>
  );
}
