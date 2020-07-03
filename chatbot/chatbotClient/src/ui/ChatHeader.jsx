import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: "#3f51b5",
      color: "white",
      margin: theme.spacing(1)
    },
  };
});

const ChatHeader = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.root} variant="h3">
      ChatBot
    </Typography>
  );
};

export default ChatHeader;
