import React from "react";
import { Button } from "@mui/material";

export default function ReusableButton(props) {
  return (
    <Button
      variant="contained"
      sx={{
        marginTop: "10px",
        backgroundColor: "#6949FF",
        borderRadius: "20px",
        fontFamily: "Urbanist",
        fontWeight: 700,
        fontSize: 16,
      }}
    >
      {props.text}
    </Button>
  );
}
