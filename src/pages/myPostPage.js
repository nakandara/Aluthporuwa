import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";

import { useToken } from "../context/TokenContext";

import axios from "axios";
import { Container, Paper, Typography, Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import ProtectedRoute from "../../components/protect/protectedRoute";
import MyInformations from "../../components/MyInformation/MyInformations";
import { environments } from "../../components/environment/environments";

const myPostPage = () => {
  const { user } = useToken();
  const router = useRouter();

  const [fileInputOpen, setFileInputOpen] = useState(false);
  const [data, setData] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleAvatarClick = () => {
    setFileInputOpen(true);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      editAvatarPhoto(file);
    } else {
      uploadProfilePhoto(file);
    }
  };

  const editAvatarPhoto = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("userId", user.userId);

    try {
      const response = await axios.post(
        `${environments.BASE_HOST_URL}/api/editProfilePhoto/${user.userId}`,
        formData
      );

      if (response.data.success) {
      } else {
      }
    } catch (error) {}
  };

  const uploadProfilePhoto = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("userId", user.userId);

    try {
      const response = await axios.post(
        `${environments.BASE_HOST_URL}/api/createProfilePhoto`,
        formData
      );

      if (response.data.success) {
      } else {
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (user && user.userId) {
      const apiUrl = `${environments.BASE_HOST_URL}/api/getProfile/${user.userId}`;
      const apiUrlPhoto = `${environments.BASE_HOST_URL}/api/getProfilePhoto/${user.userId}`;

      async function fetchData() {
        try {
        } catch (error) {}
      }
    }
  }, [user]);

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
     
           
              <div style={{ marginTop: "50px",   backgroundColor: "#e3e3e3fa", }}>
                <Box
                  gridColumn={{ xs: "1", md: "span 12" }}
                  sx={{
                    height: "25vh",
                    display: "grid",
                    marginBottom: "100px",
                    backgroundColor: "blue",
                    color:"red"
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

              <div style={{ marginTop: "50px",   backgroundColor: "#e3e3e3fa", }}>
                <Box
                  gridColumn={{ xs: "1", md: "span 12" }}
                  sx={{
                    height: "25vh",
                    display: "grid",
                    marginBottom: "100px",
                    backgroundColor: "blue",
                    color:"red"
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

export default myPostPage;
