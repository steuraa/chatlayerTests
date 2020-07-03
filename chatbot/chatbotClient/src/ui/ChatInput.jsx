import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      justifyContent: "space-between",
      padding: theme.spacing(1),
    },
    textField: {
      padding: theme.spacing(1),
      height: "4vh",
    },
    button: {
      marginLeft: theme.spacing(1),
      backgroundColor: "#3f51b5",
      minHeight: "4vh",
    },
  };
});

const ChatInput = ({ input, onTyping, onClickSend }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField
        className={classes.textField}
        color={"primary"}
        fullWidth
        placeholder={"Type a message"}
        onChange={onTyping}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onClickSend();
          }
        }}
        value={input}
      ></TextField>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={onClickSend}
        endIcon={<SendIcon></SendIcon>}
      >
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
