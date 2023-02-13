import React from "react";
import Form from "../src/components/Form";
import UserList from "../src/components/User/UserList";
import { Container, Box } from "@mui/material";

export default function Index() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Form />
        <UserList />
      </Box>
    </Container>
  );
}
