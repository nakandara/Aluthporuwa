import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useToken } from "../context/TokenContext";
import { Container, Paper, Typography, Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import ProtectedRoute from "../../components/protect/protectedRoute";

const MyPostPage = () => {
  const { user } = useToken();
  const router = useRouter();

  const [image, setImage] = useState("");

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  if (!user) {
    return <div>Loading user data...</div>;
  }
  console.log(image);
  return (
    <Layout>
      <ProtectedRoute>
        <div style={{ marginTop: "50px" }}>
          <div style={{ marginTop: "50px", backgroundColor: "#e3e3e3fa" }}>
            <Box
              gridColumn={{ xs: "1", md: "span 12" }}
              sx={{
                height: "25vh",
                display: "grid",
                marginBottom: "100px",
                backgroundColor: "blue",
                color: "red",
              }}
            >
              <Item>
                <Typography>Hello, {user.name}!</Typography>
                <Typography>Email: {user.email}</Typography>
                <Typography variant="h6" gutterBottom>
                  Upload Profile Photo
                </Typography>
              </Item>
            </Box>
          </div>

          <div style={{ marginTop: "50px", backgroundColor: "#e3e3e3fa" }}>
            <Box
              gridColumn={{ xs: "1", md: "span 12" }}
              sx={{
                height: "25vh",
                display: "grid",
                marginBottom: "100px",
                backgroundColor: "blue",
                color: "red",
              }}
            >
              <Item>
                <Typography>Hello, {user.name}!</Typography>
                <Typography>Email: {user.email}</Typography>
                <Typography variant="h6" gutterBottom>
                  Upload Profile Photo
                </Typography>
              </Item>
            </Box>
          </div>
        </div>
      </ProtectedRoute>
    </Layout>
  );
};

export default MyPostPage;
