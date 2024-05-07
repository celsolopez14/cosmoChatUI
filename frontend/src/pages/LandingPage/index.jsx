import * as React from "react";
import Box from "@mui/material/Box";
import { ReactComponent as HomeBg } from "../../assets/HomeBg.svg";
import ReusableButton from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <Box sx={{ width: "100%", placeItems: "center", justifyContent: "center", display: "grid" }}>
      <HomeBg />
      <ReusableButton text="Start chatting with ReX" onClick={handleClick} />
    </Box>
  );
}
