import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { ReactComponent as HomeBg } from "../../assets/HomeBg.svg";
import ReusableButton from "../../components/Button";

export default function LandingPage() {
  return (
    <Box sx={{ width: "100%", placeItems: "center", display: "grid" }}>
      <HomeBg />
      <ReusableButton text="Start chatting with ReX" />
    </Box>
  );
}
