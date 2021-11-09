import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import MessageBody from "./MessageBody";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
    wordWrap: "break-word"
  },
  bubble:{
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px"
  },
  imageContainer: {
    display: "flex",
    flexWrap: "wrap"
  },
  imageBubble: {
    display: "flex",
    flexDirection: "column",
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
    margin: 5,
    maxWidth: 150
  },
  image: {
    borderRadius: "10px 10px 0 10px",
  },
  imageWithText: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  }
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, images } = props;
  
  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      <MessageBody classes={classes} images={images} text={text} />
    </Box>
  );
};

export default SenderBubble;
