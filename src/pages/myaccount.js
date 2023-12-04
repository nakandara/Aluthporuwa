import React, { useState, useEffect, useRef } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { Container, Paper, Typography, Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import ProtectedRoute from "../../components/protect/protectedRoute";
import MyInformations from "../../components/MyInformation/MyInformations";
import { environments } from "../../components/environment/environments";
import { useToken } from "../context/TokenContext";


const url = `${environments.BASE_HOST_URL}/api/createProfilePhoto`
const urlGet = `${environments.BASE_HOST_URL}/api/getProfilePhoto`
const editUrl =  `${environments.BASE_HOST_URL}/api/editProfilePhoto`

const MyAccount = () => {
  const { user } = useToken();
  const router = useRouter();

  const [fileInputOpen, setFileInputOpen] = useState(false);
  const [data, setData] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  const [postImage, setPostImage] = useState({ image: "" });

  const fileInputRef = useRef(null);

  const fetchProfilePhoto = async () => {
    try {
      const response = await axios.get(`${urlGet}/${user.userId}`);

      if (response.data && response.data.length > 0) {
        const photoUrl = response.data[0].image;
        setPostImage({ image: photoUrl });
        setAvatarSrc(photoUrl); // Set Avatar source here
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchProfilePhoto();
  }, [user]);

  const createPost = async (newImage) => {
    try {
      await axios.post(url, newImage);

      fetchProfilePhoto();
    } catch (error) {
      console.log(error);
    }
  };

  const EditPost = async (newImage) => {
    try {
      await axios.post(`${editUrl}/${user.userId}`, newImage);

      fetchProfilePhoto();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const base64 = await convertToBase64(file);
      const userId = user.userId;
      console.log(base64);
      setPostImage({ ...postImage, image: base64, userId: user.userId });
      EditPost({ image: base64, userId });
    } else {
      const base64 = await convertToBase64(file);
      const userId = user.userId;
      console.log(base64);
      setPostImage({ ...postImage, image: base64, userId: user.userId });
      createPost({ image: base64, userId });
    }
  };



  

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
  const handleButtonClick = () => {
    fileInputRef.current.click(); // Programmatically trigger file input click
  };
  return (
    <Layout>
      <ProtectedRoute>
        <div className="multi-color-gradient" style={{ marginTop: "60px" }}>
          <Box sx={{ width: 1 }}>
            <Box
              display="grid"
              gridTemplateColumns={{ xs: "1fr", md: "repeat(12, 1fr)" }}
              gap={2}
            >
              <Box
                gridColumn={{ xs: "1", md: "span 12" }}
                sx={{ height: "25vh", display: "grid", marginBottom: "100px" }}
              >
                <Item>
                  <div className="App">
                    <form>
                      <label
                        htmlFor="file-upload"
                        className="custom-file-upload"
                        onClick={handleButtonClick}
                      >
                        <Avatar
                          alt=""
                          src={postImage.image || ""}
                          style={{ height: "250px", width: "200px" }}
                          className="uploaded-image"
                        />
                      </label>
                      <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }} // Hide the default file input
                        accept=".jpeg, .png, .jpg"
                        onChange={(e) => handleFileUpload(e)}
                      />
                    </form>
                  </div>
                </Item>
              </Box>
              <Box gridColumn={{ xs: "1", md: "span 8" }}>
                <Item>
                  <Typography>My Information Step 01</Typography>
                  <MyInformations name={user.name} data={data} />
                </Item>
              </Box>
              <Box gridColumn={{ xs: "1", md: "span 4" }}>
                <Item>
                  <Typography>My Information Step 02</Typography>
                  <Typography> Name : {data.username}</Typography>
                  <Typography> Birthday : {data.birthday}</Typography>
                  <Typography> Gender : {data.gender}</Typography>
                  <Typography> Religion : {data.religion}</Typography>
                  <Typography> Race : {data.race}</Typography>
                  <Typography>Caste : {data.caste}</Typography>
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

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
