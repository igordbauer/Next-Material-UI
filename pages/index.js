import React from "react";
import Form from "../src/components/Form";
import UserList from "../src/components/User/UserList";
import { Box } from "@mui/material";

export default function Index() {
  return (
    <Box sx={{ my: 4 }}>
      <Form />
      <UserList />
    </Box>
  );
}
