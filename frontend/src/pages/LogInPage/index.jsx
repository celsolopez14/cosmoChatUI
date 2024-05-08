import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { loginAccount } from "../../api/sessions";
import { MyContext } from "../../context/context";

export default function LogInPage() {
  const navigate = useNavigate();
  const { updateUsername, updateJWT, jwt } = React.useContext(MyContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const response = await loginAccount(
      {
        email: data.get("email"),
        password: data.get("password"),
      },
      updateUsername,
      updateJWT
    );

    if (response.statusCode === 200) {
      navigate("/drawer");
    } else {
      console.log(response.status);
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#6949FF" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          sx={{ fontFamily: "Urbanist", fontWeight: 700, fontSize: 25 }}
        >
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              marginTop: "10px",
              backgroundColor: "#6949FF",
              borderRadius: "20px",
              fontFamily: "Urbanist",
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item>
              <Link
                onClick={handleRegister}
                variant="body2"
                sx={{
                  color: "#6949FF",
                  fontFamily: "Urbanist",
                  cursor: "pointer",
                }}
              >
                {"Don't have an account? Register here"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
