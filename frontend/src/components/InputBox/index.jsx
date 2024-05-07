import React from "react";
import { TextField, Grid } from "@mui/material";
import { ReactComponent as MessageButton } from "../../assets/MessageButton.svg";

export default function InputBox() {
  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{ bottom: 0, position: "fixed" }}
    >
      <Grid item sx={{ display: "flex" }}>
        <TextField
          id="outlined-multiline-static"
          label=""
          rows={4}
          placeholder="Type a messsage to ReX..."
          sx={{
            marginBottom: 5,
            width: "300px",
            height: "56px",
            marginRight: "10px",
            borderRadius: "12px",
            border: "1px solid transparent",
          }}
        />
        <MessageButton width="56px" height="56px" />
      </Grid>
    </Grid>
  );
}
