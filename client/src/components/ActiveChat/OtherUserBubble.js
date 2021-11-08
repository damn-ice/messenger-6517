import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";
import MessageBody from "./MessageBody";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex"
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6
  },
  usernameDate: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5
  },
  bubble: {
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    borderRadius: "0 10px 10px 10px"
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: -0.2,
    padding: 8,
    wordWrap: "break-word"
  },
  imageContainer: {
    display: "flex",
    flexWrap: "wrap"
  },
  imageBubble: {
    display: "flex",
    flexDirection: "column",
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    borderRadius: "0 10px 10px 10px",
    margin: 5,
    maxWidth: 150
  },
  image: {
    borderRadius: "0 10px 10px 10px"
  },
  imageWithText: {
    borderTopRightRadius: 10
  }
}));

const OtherUserBubble = (props) => {
  const classes = useStyles();
  const { text, time, otherUser, images } = props;
  
  return (
    <Box className={classes.root}>
      <Avatar alt={otherUser.username} src={otherUser.photoUrl} className={classes.avatar}></Avatar>
      <Box className={classes.messageContainer}>
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>
        <MessageBody classes={classes} images={images} text={text} />
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
