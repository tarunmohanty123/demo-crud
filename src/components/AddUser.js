import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: theme.spacing(2),
  },
}));

const AddUser = () => {
  const classes = useStyles();

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    emailAddress: "",
    passwords: "",
  });

  const [errorObj, setErrorObj] = useState({});

  const validateForm = () => {
    let errorList = {};

    if (!userDetails.firstName) {
      errorList.firstName = "Please enter your First Name";
    }
    if (!userDetails.lastName) {
      errorList.lastName = "Please enter your Last Name";
    }
    if (!userDetails.username) {
      errorList.username = "Please enter your User Name";
    }
    if (!userDetails.emailAddress) {
      errorList.emailAddress = "Please enter your Email address";
    }
    if (!userDetails.passwords) {
      errorList.passwords = "Please enter your Password";
    }

    if (Object.keys(errorList).length === 0) {
      setErrorObj({});
      return true;
    } else {
      setErrorObj(errorList);
      errorList = {};
      return false;
    }
  };

  const updateValue = (key, value) => {
    setUserDetails({ ...userDetails, [key]: value });
  };

  const handelSave = () => {
    if (!validateForm()) return;
    console.log(userDetails);
  };

  const handelCancel = () => {
    setErrorObj({});
    setUserDetails({});
  };

  return (
    <Card>
      <CardHeader title="Add User" />
      <Divider />
      <Box marginTop={3} marginBottom={3} marginLeft={4} marginRight={4}>
        <TextField
          fullWidth
          id="outlined-basic"
          variant="outlined"
          label="First Name"
          onChange={(e) => updateValue("firstName", e.target.value)}
          error={!!errorObj.firstName}
          helperText={errorObj.firstName}
        />
        <Box marginTop={2}>
          <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
            label="Last Name"
            onChange={(e) => updateValue("lastName", e.target.value)}
            error={!!errorObj.lastName}
            helperText={errorObj.lastName}
          />
        </Box>
        <Box marginTop={2}>
          <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
            label="Username"
            onChange={(e) => updateValue("username", e.target.value)}
            error={!!errorObj.username}
            helperText={errorObj.username}
          />
        </Box>
        <Box marginTop={2}>
          <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
            label="Email"
            type="email"
            onChange={(e) => updateValue("emailAddress", e.target.value)}
            error={!!errorObj.emailAddress}
            helperText={errorObj.emailAddress}
          />
        </Box>
        <Box marginTop={2}>
          <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
            label="Password"
            type="password"
            onChange={(e) => updateValue("passwords", e.target.value)}
            error={!!errorObj.passwords}
            helperText={errorObj.passwords}
          />
        </Box>
      </Box>
      <Divider />
      <CardActions className={classes.buttonContainer}>
        <Button variant="outlined" onClick={handelCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handelSave}>
          Add
        </Button>
      </CardActions>
    </Card>
  );
};
export default AddUser;
