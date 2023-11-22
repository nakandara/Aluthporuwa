import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Container, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Swal from 'sweetalert2';
import { useToken } from "../context/TokenContext";
import { environments } from "../../components/environment/environments";

const MyPostPage = () => {
  const { user } = useToken();
  const [age, setAge] = useState("");
  const [image, setImage] = useState('/media/downloadpictureuploader .jpeg');
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file); // Store the selected file in selectedFile state
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); // Update the image state with the new image data URL
      };
      reader.readAsDataURL(file);
    }
  };

  const autoSize = (event) => {
    const textbox = event.target;
    textbox.style.height = "auto";
    textbox.style.height = `${textbox.scrollHeight}px`;
  };

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleSubmit = async (file) => {
    const formData = new FormData();
    formData.append("userId", user.userId);
    formData.append("image", file);
    formData.append("category", category);
    formData.append("description", description);

    try {
      const response = await axios.post(
        `${environments.BASE_HOST_URL}/api/createPost`,
        formData
      );

      if (response.data.success) {
        Swal.fire("Successfully created Post");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "response went wrong!",
        
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
       
      });
    }
  };

  return (
    <Layout>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(selectedFile);
        }}
      >
        <div style={{ marginTop: "70px", marginBottom: "100vh" }}>
          <div style={{ marginTop: "10px", backgroundColor: "#e3e3e3fa" }}>
            <Box
              gridColumn={{ xs: "1", md: "span 12" }}
              onClick={() => {
                const uploadInput = document.getElementById("upload-photo");
                if (uploadInput) {
                  uploadInput.click(); // Click the file input when the Box is clicked
                }
              }}
              sx={{
                height: "35vh",
                display: "grid",
                marginBottom: "100px",
                backgroundColor: "blue",
                color: "red",
              }}
            >
              <Item>
                <div className="postPage_images_upload">
                  <label htmlFor="upload-photo">
                    Upload Images
                    <input
                      style={{ display: "none" }}
                      id="upload-photo"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </label>
                  {image && (
                    <img
                      className="slider_postPage_image"
                      src={image}
                      alt="Uploaded Image"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "200px",
                        marginTop: "10px",
                      }}
                    />
                  )}
                </div>

              </Item>
            </Box>
            
          </div>
          <FormControl sx={{ marginTop:"100px"}} fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category.
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Age"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <MenuItem value={10}>Land</MenuItem>
                    <MenuItem value={20}>Spa</MenuItem>
                    <MenuItem value={30}>Vehicle</MenuItem>
                  </Select>
                </FormControl>
         <div>
         <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              onInput={autoSize}
              className="textArea_t"
            ></textarea>
         </div>
         <div class="centered-view">
  <button class="custom-button">Click Me</button>
</div>

        </div>
        
      </form>
    </Layout>
  );
};

export default MyPostPage;
