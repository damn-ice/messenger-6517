import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import AuthImage from "./components/Authentication/AuthImage";
import authStyles from "./components/Authentication/authStyles";
import { login } from "./store/utils/thunkCreators";

const Login = (props) => {
  const history = useHistory();
  const classes = authStyles();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Box className={classes.root}>
      <AuthImage />
      <Grid container justify="center">
        <Box className={classes.formBox}>
          <Grid container item justify="flex-end" alignItems="center" className={classes.status}>
            <Typography color="secondary">Don't have an account?</Typography>
            <Button 
              className={classes.statusButton} 
              variant="text"
              onClick={() => history.push("/register")}>
              Create account
            </Button>
          </Grid>
          <form onSubmit={handleLogin} className={classes.form}>
            <Grid>
              <Grid><Typography variant="h4" className={classes.formHeading}>Welcome back!</Typography></Grid>
              <Grid>
                <FormControl fullWidth className={classes.formInput} required>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                  />
                </FormControl>
              </Grid>
              <FormControl fullWidth className={classes.formInput} required>
                <TextField
                  label="Password"
                  aria-label="password"
                  type="password"
                  name="password"
                />
              </FormControl>
              <Grid container justify="center">
                <Button type="submit" variant="contained" color="primary" size="large" className={classes.submitButton}>
                  Login
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
