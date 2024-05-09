import React from "react";
import { TextField, Grid, IconButton } from "@mui/material";
import { ReactComponent as MessageButton } from "../../assets/MessageButton.svg";

export default function InputBox({ onHandleText }) {
  const [text, setText] = React.useState("");
  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    onHandleText(text);
    setText("");
  };
  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{ bottom: 0, position: "fixed" }}
      spacing={2}
    >
      <Grid item xs={8} md={6}>
        <TextField
          value={text}
          onChange={onTextChange}
          id="txtField"
          label=""
          rows={4}
          placeholder="Type a messsage to ReX..."
          fullWidth
          sx={{
            height: "56px",
            borderRadius: "12px",
            border: "1px solid transparent",
            paddingLeft: "5px",
          }}
        />
      </Grid>
      <Grid item>
        <IconButton
          onClick={handleSubmit}
          sx={{ paddingTop: "2px", paddingLeft: "0px" }}
        >
          <MessageButton />
        </IconButton>
      </Grid>
    </Grid>
  );
}
