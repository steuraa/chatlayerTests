import React, { useEffect, useState } from "react";
import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/react-hooks";
import {  makeStyles } from "@material-ui/core";
import ChatInput from "./ui/ChatInput";
import ChatHeader from "./ui/ChatHeader";
import ChatOutput from "./ui/ChatOutput";
const useStyles = makeStyles(() => {
  return {
    root: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      overflow: "hidden",
    },
  };
});
const POST = gql`
  query post($message: String) {
    post(message: $message) {
      message
    }
  }
`;

const ChatbotContainer = () => {
  const classes = useStyles();
  const [input, setInput] = useState("");
  // loading should come from the query, but the return is instant in this setup
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [sendPost, { data: { post = {}, error } = {} }] = useLazyQuery(POST, {
    variables: { message: input },
  });
  // useEffect has timeOut to simulate loading
  useEffect(() => {
    if (post.message) {
      const timer = setTimeout(() => {
        setMessages([...messages, { message: post.message, align: "left" }]);
        setLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [post.message]);
  const send = () => {
    setMessages([...messages, { message: input, align: "right" }]);
    setLoading(true);
    sendPost({ variables: { message: input } });
    setInput("");
  };

  return (
    <div className={classes.root}>
      <ChatHeader />
      <ChatOutput messages={messages} loading={loading} />
      <ChatInput
        input={input}
        onClickSend={send}
        onTyping={(event) => setInput(event.target.value)}
      ></ChatInput>
    </div>
  );
};

export default ChatbotContainer;
