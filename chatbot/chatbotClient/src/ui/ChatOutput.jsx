import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ChatMessage from "./ChatMessage";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
  };
});

const ChatOutput = ({ loading, messages }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {messages.map(message => {
        return <ChatMessage message={message.message} align={message.align} />;
      })}
      {loading && <ChatMessage message={"loading"} align={"left"} />}
    </div>
  );
};

export default ChatOutput;
