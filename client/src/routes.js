import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { fetchUser } from "./store/utils/thunkCreators";
import Signup from "./Signup.js";
import Login from "./Login.js";
import { Home, SnackbarError } from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: 1200
  },
  formBox: {
    width: "100%",
    paddingLeft: 40,
    paddingRight: 40,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 80,
      paddingRight: 80
    }
  },
  form: {
    "& input": {
      marginTop: 10
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 40,
      paddingRight: 40
    }
  },
  formInput: {
    marginBottom: 30
  },
  formHeading: {
    marginBottom: 10,
    fontSize: 30,
    fontWeight: 600
  },
  status: {
    marginTop: 20,
    marginBottom: 60,
    color: "#B8B8B8" 
  },
  statusButton: {
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: "white",
    padding: "10px 40px",
    color: "#3A8DFF",
    marginLeft: 30
  },
  submitButton: {
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: "#3A8DFF",
    color: "white",
    padding: "10px 40px"
  }
}))

const Routes = (props) => {
  const { user, fetchUser } = props;
  const [errorMessage, setErrorMessage] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (user.error) {
      // check to make sure error is what we expect, in case we get an unexpected server error object
      if (typeof user.error === "string") {
        setErrorMessage(user.error);
      } else {
        setErrorMessage("Internal Server Error. Please try again");
      }
      setSnackBarOpen(true);
    }
  }, [user.error]);

  if (props.user.isFetchingUser) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {snackBarOpen && (
        <SnackbarError
          setSnackBarOpen={setSnackBarOpen}
          errorMessage={errorMessage}
          snackBarOpen={snackBarOpen}
        />
      )}
      <Switch>
        <Route path="/login" >
          <Login classes={classes} />
        </Route>
        <Route path="/register">
          <Signup classes={classes} />
        </Route>
        <Route
          exact
          path="/"
          render={(props) => (props.user?.id ? <Home /> : <Signup classes={classes} />)}
        />
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser() {
      dispatch(fetchUser());
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
