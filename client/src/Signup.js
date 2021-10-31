import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import AuthImage from "./components/Authentication/AuthImage";
import { register } from "./store/utils/thunkCreators";

const Login = (props) => {
  const history = useHistory();
  const { classes, user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Box className={classes.root}>
      <AuthImage />
      <Grid justify="center" container>
        <Box className={classes.formBox}>
          <Grid container item justify="flex-end" alignItems="center" className={classes.status}>
            <Typography>Already have an account?</Typography>
            <Button 
              className={classes.statusButton} 
              variant="contained" 
              onClick={() => history.push("/login")}>
              Login
            </Button>
          </Grid>
          <form onSubmit={handleRegister} className={classes.form}>
            <Grid>
              <Grid><Typography className={classes.formHeading}>Create an account.</Typography></Grid>
              <Grid>
                <FormControl fullWidth className={classes.formInput}>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid>
                <FormControl fullWidth  className={classes.formInput}>
                  <TextField
                    label="E-mail address"
                    aria-label="e-mail address"
                    type="email"
                    name="email"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid>
                <FormControl fullWidth error={!!formErrorMessage.confirmPassword} className={classes.formInput}>
                  <TextField
                    aria-label="password"
                    label="Password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="password"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid>
                <FormControl fullWidth error={!!formErrorMessage.confirmPassword} className={classes.formInput}>
                  <TextField
                    label="Confirm Password"
                    aria-label="confirm password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="confirmPassword"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid container justify="center">
                <Button type="submit" variant="contained" size="large" className={classes.submitButton}>
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
