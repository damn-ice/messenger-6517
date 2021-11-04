import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";
import ImageMessage from "./ImageMessage";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex"
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
  messageContainer: {
    display: "flex",
    flexWrap: "wrap"
  },
  bubble: {
    display: "flex",
    flexDirection: "column",
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    borderRadius: "0 10px 10px 10px",
    margin: 5,
    maxWidth: 150
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: -0.2,
    padding: 8,
    wordWrap: "break-word"
  },
  image: {
    borderTopRightRadius: 10
  }
}));

const OtherUserBubble = (props) => {
  const classes = useStyles();
  const { text, time, otherUser, images } = props;
  return (
    <Box className={classes.root}>
      <Avatar alt={otherUser.username} src={otherUser.photoUrl} className={classes.avatar}></Avatar>
      <Box>
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>
        <Box className={classes.messageContainer}>
          {images ? 
            images.map((image, index) => (
              <Box className={classes.bubble} key={index}>
                { index === 0 && text ? 
                    <>
                      <ImageMessage image={image} className={classes.image} alt={text} />
                      <Typography className={classes.text}>{text}</Typography>
                    </>:
                    <ImageMessage image={image} className={classes.image} />
                }
              </Box>
            )):
            <Box className={classes.bubble}>
              <Typography className={classes.text}>{text}</Typography>
            </Box>
          }
        </Box>
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
