// import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import Usermap from '../../components/Home/Usermap'
import { Container, Paper, Typography, Button, IconButton, Avatar } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';


const MyAccount = () => {

  const router = useRouter();

  const [fileInputOpen, setFileInputOpen] = useState(false);

  const handleAvatarClick = () => {
    setFileInputOpen(true);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    // Handle the selected file, you can use this to upload the file
  };


  return (
    <Layout>
      <div style={{marginTop:"50px"}}>
       
     
      <Container maxWidth="100%">
      <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
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
    </div>
    </Layout>

  );
};

export default MyAccount;
