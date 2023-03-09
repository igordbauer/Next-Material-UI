import React, { useState } from "react";
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from "./shared/util/validators";
import CustomDialog from "./shared/UI/CustomDialog";
import {
  CardHeader,
  CardContent,
  CardActions,
  Paper,
  Button,
} from "@mui/material";
import useForm from "./shared/hooks/useForm";
import CustomInput from "./shared/FormComponents/CustomInput";
import { createUser } from "../controller/user-controller";

const initialInputValues = {
  name: {
    value: "",
    isValid: false,
  },
  description: {
    value: "",
    isValid: false,
  },
};

const Form = () => {
  const [formsState, inputHandler] = useForm(initialInputValues, false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    document.location.reload(true);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    handleOpen();
    await createUser(formsState);
  };

  return (
    <>
      <Paper
        elevation={10}
        sx={{
          p: 2,
          mb: 2,
          minWidth: "275px",
          width: 1,
          backgroundColor: "#fff",
        }}
      >
        <form onSubmit={submitHandler}>
          <CardHeader title="Create User" />
          <CardContent>
            <CustomInput
              inputId="name"
              type="text"
              initialValue={formsState.inputs.name.value}
              initialValidity={false}
              label="Name"
              placeholder="Please enter your name"
              validators={[VALIDATOR_REQUIRE()]}
              sx={{ width: 1 }}
              errorText="Please enter a valid name"
              onChangeInput={inputHandler}
            />
            <CustomInput
              inputId="description"
              type="text"
              multiline
              initialValue={formsState.inputs.description.value}
              initialValidity={false}
              label="Description"
              placeholder="Please enter your task description"
              validators={[VALIDATOR_REQUIRE()]}
              sx={{ width: 1, my: 2 }}
              rows={5}
              errorText="Please enter a task description"
              onChangeInput={inputHandler}
            />
          </CardContent>
          <CardActions
            sx={{ m: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              disabled={!formsState.isValid}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </CardActions>
        </form>
      </Paper>
      {open && (
        <CustomDialog
          onClose={handleClose}
          open={open}
          cancelButtonText="Close"
          title="User created successfully!"
          cardContent={null}
        />
      )}
    </>
  );
};

export default Form;
