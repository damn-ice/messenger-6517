import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import ImageMessage from "./ImageMessage";

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
  messageContainer: {
    display: "flex",
    flexWrap: "wrap"
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
    wordWrap: "break-word"
  },
  bubble: {
    display: "flex",
    flexDirection: "column",
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
    margin: 5,
    maxWidth: 150
  },
  image: {
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
  );
};

export default SenderBubble;
