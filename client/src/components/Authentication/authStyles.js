import { makeStyles } from "@material-ui/core/styles";

const authStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  formBox: {
    width: "100%",
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10)
    }
  },
  form: {
    "& input": {
      marginTop: theme.spacing(1)
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5)
    }
  },
  formInput: {
    marginBottom: theme.spacing(3)
  },
  formHeading: {
    marginBottom: theme.spacing(2),
    fontWeight: "bold"
  },
  status: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(8)
  },
  statusButton: {
    fontFamily: "Open Sans, sans-serif",
    backgroundColor: "white",
    padding: theme.spacing(2, 7),
    color: "#3A8DFF",
    marginLeft: theme.spacing(4),
    boxShadow: "0 1px 10px rgba(0, 0, 0, 0.2)"
  },
  submitButton: {
    padding: theme.spacing(2, 7)
  }
}));

export default authStyles;