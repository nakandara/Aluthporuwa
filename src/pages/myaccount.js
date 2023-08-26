// import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useToken } from '../context/TokenContext';
import { Container, Paper, Typography, Button, IconButton, Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { PhotoCamera } from '@mui/icons-material';


const MyAccount = () => {
  const { token, setToken,setUser ,user} = useToken();
  const router = useRouter();

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
console.log(user);
  return (
    <Layout>
      {/* <div style={{marginTop:"50px"}}>
       
     
      <Container maxWidth="100%">
      <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%',height:"10%" }}>
        <label htmlFor="profile-photo-input">
          <Avatar
            sx={{ width: 120, height: 120, marginBottom: 2, cursor: 'pointer' }}
            alt="Profile Photo"
            src="url_to_profile_photo"
            onClick={handleAvatarClick}
          />
        </label>

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

        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Save
        </Button>
      </Paper>
    </Container>
    </div> */}
    <div style={{marginTop:"50px"}}>
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 12" sx={{ height: '25vh', display: 'grid'}}>
          <Item>
          <label htmlFor="profile-photo-input">
          <Avatar
            sx={{ width: 120, height: 70, marginBottom: 2, cursor: 'pointer' }}
            alt="Profile Photo"
            src="url_to_profile_photo"
            onClick={handleAvatarClick}
          />
          pramod niroshan
        </label>

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

        {/* <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Save
        </Button> */}
          </Item>
        </Box>
       
        <Box gridColumn="span 4">
          <Item>xs=4</Item>
        </Box>
        <Box gridColumn="span 8">
          <Item>xs=8</Item>
        </Box>
      </Box>
    </Box>
    </div>
   
    </Layout>

  );
};

export default MyAccount;
