import React from "react";
import { Box, Typography } from "@material-ui/core";
import ImageMessage from "./ImageMessage";

const MessageBody = (props) => {
  const { classes, images, text } = props; 

  return (
    <>
      {images ?
        images.length === 1 && text ?
          <Box className={classes.imageBubble}>
            <ImageMessage image={images[0]} className={classes.imageWithText} alt={text} />
            <Typography className={classes.text}>{text}</Typography>
          </Box>:
          <>
            {text && <Box className={classes.bubble}>
              <Typography className={classes.text}>{text}</Typography>
            </Box>}
            <Box className={classes.imageContainer}>
              {images.map((image) => (
                <Box className={classes.imageBubble} key={image}>
                  <ImageMessage image={image} className={classes.image} />
                </Box>
              ))}
            </Box>
          </>
        :
        <Box className={classes.bubble}>
          <Typography className={classes.text}>{text}</Typography>
        </Box>
      }
    </>
  );
}

export default MessageBody;
