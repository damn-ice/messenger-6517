import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import backgroundImage from '../../assets/images/bg-img.png';
import bubble from '../../assets/images/bubble.svg';

const useStyles = makeStyles((theme) => ({
  authImage: {
    background: `linear-gradient(180deg, rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0.85)), url(${backgroundImage}) center no-repeat`,
    backgroundSize: "cover",
    height: "100vh",
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
    opacity: "0.85",
    [theme.breakpoints.up('sm')]: {
      display: "flex"
    }
  },
  bubble: {
    width: "20%"
  },
  heading: {
    padding: 30,
    textAlign: "center",
    fontSize: 30
  }
}))

const AuthImage = () => {
  const classes = useStyles();

    return(
      <Box className={classes.authImage}>
        <img src={bubble} alt="chat icon" className={classes.bubble}/>
        <Typography className={classes.heading}>Converse with anyone with any language</Typography>
      </Box>
    )
}

export default AuthImage