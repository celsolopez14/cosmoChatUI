import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";
import styles from "../../styles/chatPage";
import InputBox from "../../components/InputBox";
import { MyContext } from "../../context/context";

export default function ChatPage({ chatSession }) {
  const { jwt } = React.useContext(MyContext);
  const [messages, setMessages] = React.useState([]);
  const [webSocketRef, setWebSocketRef] = React.useState(null);

  React.useEffect(() => {
    setMessages(chatSession.messages);
    const webSocket = new WebSocket(
      `ws://localhost:5151/ws/chat/${chatSession.id}?Authorization=${jwt}`
    );

    webSocket.onopen = () => {
      console.log("WebSocket connection established.");
      setWebSocketRef(webSocket);
    };

    webSocket.onmessage = (event) => {
      setMessages((prevMessages) => [
        ...prevMessages, { role: "model", content: event.data }]);
    };
    webSocket.onclose = () => {
      console.log("WebSocket connection closed.");
    };
  }, [chatSession]);

  const handleText = (text) => {
    if (text.trim() === "") return;

    if (webSocketRef && webSocketRef.readyState === WebSocket.OPEN) {
      webSocketRef.send(text);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "user", content: text },
      ]);
    } else {
      console.log(webSocketRef);
      console.error("WebSocket connection is not open.");
    }
  };

  const renderTextWithCodeStyling = (text) => {
    const containsCode = text.includes("```");
    return containsCode ? <code>{text}</code> : text;
  };

  return (
    <React.Fragment>
      <Box
        sx={{ position: "relative", overflow: "hidden", paddingTop: "70px" }}
      >
        <List sx={{ maxWidth: "100%", maxHeight: "76.5vh", overflow: "auto" }}>
          {messages.map((message) => (
            <ListItem
              key={`${message.id}`}
              sx={{
                justifyContent:
                  message.role === "model" ? "flex-start" : "flex-end",
              }}
            >
              <Typography
                sx={
                  message.role === "model"
                    ? { ...styles.rexMsg }
                    : { ...styles.userMsg }
                }
              >
                {renderTextWithCodeStyling(message.content)}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{position:"absolute", borderRadius:"22px"}}>
      <InputBox onHandleText={handleText} />
      </Box>
    </React.Fragment>
  );
}
