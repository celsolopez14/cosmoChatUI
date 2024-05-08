import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";
import styles from "../../styles/chatPage";
import InputBox from "../../components/InputBox";

export default function ChatPage({ chatSession }) {
  const handleText = async (text) => {
    // websocket connection
    console.log("Sending text to db");
  };

  return (
    <React.Fragment>
      <Box
        sx={{ position: "relative", overflow: "hidden", paddingTop: "70px" }}
      >
        <List sx={{ maxWidth: "100%" }}>
          {chatSession.messages.map((message)=>(
            <ListItem sx={{ justifyContent: message.role === "model" ? "flex-start" : "flex-end" }}>
            <Typography fullWidth sx={message.role === "model" ? {...styles.rexMsg} : {...styles.userMsg}}>
              {message.content}
            </Typography>
          </ListItem>
          ))}
        </List>
      </Box>
      <InputBox onHandleText={handleText} />
    </React.Fragment>
  );
}
