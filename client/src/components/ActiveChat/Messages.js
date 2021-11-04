import React, { useMemo } from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";

const Messages = (props) => {

  const { messages, otherUser, userId } = props;
  const reversedMessages = useMemo(() => [...messages].reverse(), [messages])

  return (
    <Box>
      {reversedMessages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} images={message.attachments} />
        ) : (
          <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} images={message.attachments} />
        );
      })}
    </Box>
  );
};

export default Messages;
