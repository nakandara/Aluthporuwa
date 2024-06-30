import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import { TextField, Button, Typography, Container, Box, CircularProgress } from "@mui/material";
import { useToken } from "../context/TokenContext";
import { environments } from "../../components/environment/environments";
import Link from "next/link";

const SignupPage = () => {
  const router = useRouter();
  const { setToken, setUser } = useToken();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const normalLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${environments.BASE_HOST_URL}/api/createUser`,
        {
          name: username,
          password: password,
          email: email,
          method: "NORMAL",
        }
      );

      const chatResponse = await axios.post(
        "https://socketio-api.vercel.app/api/auth/register",
        {
          username: username,
          email: email,
          password: password,
        }
      );

      if (response.data && response.data.token) {
        const responsel = await axios.post(
          `${environments.BASE_HOST_URL}/api/login`,
          {
            name: username,
            email: email,
            password: password,
          }
        );

        if (responsel.data && responsel.data.token && responsel.data.user) {
          const accessToken = responsel.data.token;
          const user = responsel.data.user;

          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("user", JSON.stringify(user));

          setToken(accessToken);
          setUser(user);

          router.push("/home");

          const response2 = await axios.post(
            `https://socketio-api.vercel.app/api/auth/login`,
            {
              name: username,
              email: email,
              password: password,
            }
          );

          const socketUser = response2.data;
          localStorage.setItem("userone", JSON.stringify(socketUser));
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid credentials",
          });
        }
      }
    } catch (error) {
      setError("An error occurred during registration. Please try again. / ලියාපදිංචි වීමේ දෝෂයක් සිදු විය. කරුණාකර නැවත උත්සාහ කරන්න.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
        }}
      >
        <Typography sx={{color:"black"}} variant="h4" component="h1" gutterBottom>
          Register Page / ලියාපදිංචි පිටුව
        </Typography>
        <form onSubmit={normalLogin} style={{ width: "100%" }}>
          {error && <Typography color="error">{error}</Typography>}
          <TextField
            label="Username / පරිශීලක නාමය"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Email / ඊමේල්"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password / මුරපදය"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box sx={{ mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Register User / පරිශීලකයා ලියාපදිංචි කරන්න"}
            </Button>
          </Box>
        </form>
        <Box sx={{ mt: 2 }}>
          <Link href="/auth/signin" passHref>
            <Button variant="text" color="primary">
              Go to Login Page / ප්‍රවිශ්ට වීමේ පිටුවට යන්න
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SignupPage;
