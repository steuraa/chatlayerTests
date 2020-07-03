import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      color: "white",
    },
    alignLeft: {
      alignItems: "flex-start",
      alignSelf: "flex-start",
      backgroundColor: "#524a4a",
    },
    alignRight: {
      alignItems: "flex-end",
      alignSelf: "flex-end",
      backgroundColor: "#2b792b",
    },
  };
});

const ChatMessage = ({ align, message }) => {
  const classes = useStyles();
  const className = classNames(classes.root, {
    [classes.alignLeft]: align === "left",
    [classes.alignRight]: align === "right",
  });
  return (
    <Typography className={className} variant="body1">
      {message}
    </Typography>
  );
};

export default ChatMessage;
