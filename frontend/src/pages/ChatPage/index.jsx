import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";
import styles from "../../styles/chatPage";
import InputBox from "../../components/InputBox";

export default function ChatPage() {
  return (
    <React.Fragment>
      <Box sx={{ position: "relative", overflow: "hidden", paddingTop:'70px' }}>
        <List sx={{ maxWidth:"100%" }}>
          <ListItem sx={{ justifyContent: "flex-start" }}>
            <Typography sx={{ ...styles.rexMsg }}>
              Hello User! I&apos;m ReX
            </Typography>
          </ListItem>
          <ListItem sx={{ justifyContent: "flex-start" }}>
            <Typography sx={{ ...styles.rexMsg }}>
              What aspect of your career would you like guidance on?
            </Typography>
          </ListItem>
          <ListItem sx={{ justifyContent: "flex-end" }}>
            <Typography sx={{ ...styles.userMsg }}>
              I&apos;m thinking about changing my job, but I&apos;m not sure
              where to start.
            </Typography>
          </ListItem>
        </List>
      </Box>
      <InputBox />
    </React.Fragment>
  );
}
