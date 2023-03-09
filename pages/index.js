import React from "react";
import Form from "../src/components/Form";
import UserList from "../src/components/User/UserList";
import SideContainer from "../src/components/Layout/SideContainer";
import SupContainer from "../src/components/Layout/SupContainer";
import InfContainer from "../src/components/Layout/InfContainer";
import { Box } from "@mui/material";
import SwiperSlider from "../src/components/SwiperSlider";

export default function Index() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: 0.2, height: "100vh" }}>
        <SideContainer />
      </Box>
      <Box
        sx={{
          width: 0.8,
          height: "100vh",
        }}
      >
        <Box sx={{ height: "30%" }}>
          <SupContainer />
        </Box>
        <Box sx={{ height: "70%" }}>
          <InfContainer />
        </Box>
      </Box>
    </Box>
  );
}
