import React, { useState,useEffect } from "react";
import Layout from "../../components/Layout";
import { useToken } from '../context/TokenContext';
import { Container, Paper, Typography, Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import { useRouter } from "next/router";
import { styled } from '@mui/material/styles';

const MyAccount = () => {
  const { token, setToken, user } = useToken();
  const router = useRouter();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken !== null && accessToken !== "unauthenticated") {
      router.push("/myaccount");
    } else {
      router.push("/auth/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [fileInputOpen, setFileInputOpen] = useState(false);

  const handleAvatarClick = () => {
    setFileInputOpen(true);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    // Handle the selected file, you can use this to upload the file
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  if (!user) {
    return <div>Loading user data...</div>;
  }

  return (
    <Layout>
      <div style={{ marginTop: "50px" }}>
        <Box sx={{ width: 1 }}>
          <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "repeat(12, 1fr)" }} gap={2}>
            <Box gridColumn={{ xs: "1", md: "span 12" }} sx={{ height: '25vh', display: 'grid', marginBottom: "100px"}}>
              <Item>
                <label htmlFor="profile-photo-input">
                  <Avatar
                    sx={{ width: 120, height: 70, marginBottom: 2, cursor: 'pointer' }}
                    alt="Profile Photo"
                    src="url_to_profile_photo"
                    onClick={handleAvatarClick}
                  />
                </label>
                <Typography>Hello, {user.user.name}!</Typography>
                <Typography>Email: {user.user.email}</Typography>
                <Typography variant="h6" gutterBottom>
                  Upload Profile Photo
                </Typography>
                {fileInputOpen && (
                  <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="profile-photo-input"
                    type="file"
                    onChange={handleFileInputChange}
                  />
                )}
              </Item>
            </Box>
            <Box gridColumn={{ xs: "1", md: "span 4" }}>
              <Item>
                <Typography>My Information</Typography>
              </Item>
            </Box>
            <Box gridColumn={{ xs: "1", md: "span 8" }}>
              <Item>xs=8</Item>
            </Box>
          </Box>
        </Box>
      </div>
    </Layout>
  );
};

export default MyAccount;
