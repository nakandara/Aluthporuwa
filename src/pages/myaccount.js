import React, { useState, useEffect, useRef } from "react";
import LayoutSecond from "../../components/LayoutSecond/LayoutSecond";
import axios from "axios";
import { Container, Paper, Typography, Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import ProtectedRoute from "../../components/protect/protectedRoute";
import MyInformations from "../../components/MyInformation/MyInformations";
import { environments } from "../../components/environment/environments";
import { useToken } from "../context/TokenContext";

const url = `${environments.BASE_HOST_URL}/api/createProfilePhoto`;
const urlGet = `${environments.BASE_HOST_URL}/api/getProfilePhoto`;
const editUrl = `${environments.BASE_HOST_URL}/api/editProfilePhoto`;
const GetProfileUrl = `${environments.BASE_HOST_URL}/api/getProfile`;

const MyAccount = () => {
  const { user } = useToken();
  const router = useRouter();

  const [fileInputOpen, setFileInputOpen] = useState(false);
  const [data, setData] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [infoData, setInfoData] = useState("");

  const [postImage, setPostImage] = useState({ image: "" });

  const fileInputRef = useRef(null);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`${GetProfileUrl}/${user.userId}`);
      console.log(response);
      if (response.data) {
        setInfoData(response.data.profile);
      } else {
        console.log(response.error);
      }
    } catch (error) {}
  };

  console.log(infoData);
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
    fetchProfile();
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
    try {
      const file = e.target.files[0];

      const response = await axios.get(`${urlGet}/${user.userId}`);

      if (response.data.length > 0) {
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
    } catch (error) {
      console.error("Error fetching data:", error);
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
    <LayoutSecond>
      <ProtectedRoute>
        <div className="multi-color-gradient " style={{ marginTop: "60px" }}>
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
                        <div
                          style={{
                            fontSize: "24px", // Adjust the font size as needed
                            fontWeight: "bold", // Make the text bold
                            color: "#333", // Set the text color
                            backgroundColor: "#f0f0f0", // Set background color
                            padding: "10px", // Add some padding for spacing
                            borderRadius: "5px", // Add rounded corners
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            margin: "10px", // Add a subtle shadow
                          }}
                        >
                          USER INFORMATION
                        </div>
                        <div className="myaccount-profile-image-flex">
                          <div>
                            {" "}
                            <Avatar
                              alt=""
                              src={postImage.image || ""}
                              style={{ height: "250px", width: "200px" }}
                              className="uploaded-image"
                            />
                          </div>
                          <div className="myaccount-profile-image-details">
                            RECOMMEND
                          </div>
                        </div>
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
              <Box gridColumn={{ xs: "1", md: "span 8", marginTop: "50px" }}>
                <Item>
                  
                  <MyInformations name={user.name} data={data} />
                </Item>
              </Box>
              <Box gridColumn={{ xs: "1", md: "span 4", marginTop: "45px" }}>
                <TableContainer component={Paper}>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Typography variant="subtitle1">
                            My Informations
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography variant="subtitle2">Name</Typography>
                        </TableCell>
                        <TableCell>
                          {infoData && infoData.username
                            ? infoData.username
                            : ""}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography variant="subtitle2">Birthday</Typography>
                        </TableCell>

                        <TableCell>
                        {infoData && infoData.birthday ? formatDate(infoData.birthday) : ""}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography variant="subtitle2">Gender</Typography>
                        </TableCell>

                        {infoData && infoData.gender ? infoData.gender : ""}
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography variant="subtitle2">Religion</Typography>
                        </TableCell>

                        <TableCell>
                          {infoData && infoData.religion
                            ? infoData.religion
                            : ""}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography variant="subtitle2">District</Typography>
                        </TableCell>

                        <TableCell>
                          {infoData && infoData.district
                            ? infoData.district
                            : ""}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography variant="subtitle2">City</Typography>
                        </TableCell>

                        <TableCell>
                          {infoData && infoData.city ? infoData.city : ""}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Box>
        </div>
      </ProtectedRoute>
    </LayoutSecond>
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
