import React, { useState,useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { Container, Paper, Typography, Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import { useRouter } from "next/router";
import { styled } from '@mui/material/styles';
import ProtectedRoute from "../../components/protect/protectedRoute"; 
import MyInformations from "../../components/MyInformation/MyInformations"; 
import { environments } from "../../components/environment/environments";
import { useToken } from '../context/TokenContext';

const MyAccount = () => {
  const {  user } = useToken();
  const router = useRouter();
 

  const [fileInputOpen, setFileInputOpen] = useState(false);
  const [data, setData] = useState('');
  const [image, setImage] = useState('');
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
    } catch (error) {
      
    }
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
    } catch (error) {
    
    }
  };

  useEffect(() => {
    if (user && user.userId) {
      
      const apiUrl = `${environments.BASE_HOST_URL}/api/getProfile/${user.userId}`;
      const apiUrlPhoto = `${environments.BASE_HOST_URL}/api/getProfilePhoto/${user.userId}`;
     
      // Create an async function to fetch data
      async function fetchData() {
        try {
          
          const response = await axios.get(apiUrl);
          const responsePhoto = await axios.get(apiUrlPhoto);
          console.log(response.data?.profile);
          if (!response.data) {
            throw new Error('Network response was not ok');
          }
          const data = response.data?.profile;
         
          setData(data); // Update the state with the fetched data
          setImage(responsePhoto.data?.imageUrl)
          setLoading(false); // Set loading to false when data is loaded
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false); // Set loading to false in case of an error
        }
      }
  
      fetchData();
    }
  }, [user]);
  


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
console.log(image);
  return (
    <Layout>
      <ProtectedRoute>
      <div style={{ marginTop: "50px" }}>
        <Box sx={{ width: 1 }}>
          <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "repeat(12, 1fr)" }} gap={2}>
            <Box gridColumn={{ xs: "1", md: "span 12" }} sx={{ height: '25vh', display: 'grid', marginBottom: "100px"}}>
              <Item>
                <label htmlFor="profile-photo-input">
                  <Avatar
                    sx={{ width: 120, height: 70, marginBottom: 2, cursor: 'pointer' }}
                    alt="Profile Photo"
                    src={image}
                    onChange={handleFileInputChange}
                    onClick={handleAvatarClick}
                  />
                </label>
                <Typography>Hello, {user.name}!</Typography>
                <Typography>Email: {user.email}</Typography>
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
            <Box gridColumn={{ xs: "1", md: "span 8" }}>
              <Item>
                <Typography>My Information Step 01</Typography>
                <MyInformations name={user.name} data={data}/>
              </Item>
            </Box>
            <Box gridColumn={{ xs: "1", md: "span 4" }}>
              <Item>
              <Typography>My Information Step 02</Typography>
              <Typography> Name :  {data.username}</Typography>
                <Typography> Birthday : {data.birthday}</Typography>
                <Typography> Gender : {data.gender}</Typography>
                <Typography> Religion : {data.religion}</Typography>
                <Typography> Race : {data.race}</Typography>
                <Typography>Caste :  {data.caste}</Typography>
                <Typography> District : {data.district}</Typography>
                <Typography>City : {data.city}</Typography>
              </Item>
            </Box>
          </Box>
        </Box>
      </div>
      </ProtectedRoute>
     
    </Layout>
  );
};

export default MyAccount;
