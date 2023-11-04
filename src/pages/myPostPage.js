import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useToken } from "../context/TokenContext"; // Check the import
import { Container, Paper, Typography, Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import { useRouter } from "next/router"; // Check the import
import { styled } from "@mui/material/styles";
import ProtectedRoute from "../../components/protect/protectedRoute";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MyPostPage = () => {
  const { user } = useToken();
  const router = useRouter();

  const [image, setImage] = useState("");
  const [age, setAge] = useState(""); // Use 'useState' consistently

  const autoSize = (event) => {
    const textbox = event.target;
    textbox.style.height = "auto";
    textbox.style.height = `${textbox.scrollHeight}px`;
  };

  // Define 'handleChange' function as needed

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

  return (
    <Layout>
      <ProtectedRoute>
        <div style={{ marginTop: "50px" }}>
          <div style={{ marginTop: "10px", backgroundColor: "#e3e3e3fa" }}>
            <Box
              gridColumn={{ xs: "1", md: "span 12" }}
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
                  Upload Images
                  <img
                    className="slider_postPage_image"
                    src="/media/chamodh.jpg"
                    alt="Image 3"
                  />
                </div>

                <FormControl sx={{ marginTop: "20px" }} fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category.
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Land</MenuItem>
                    <MenuItem value={20}>Spa</MenuItem>
                    <MenuItem value={30}>Vehicle</MenuItem>
                  </Select>
                </FormControl>
                <textarea
                  className="auto-size-textbox"
                  onInput={autoSize}
                  placeholder="Description"
                  style={{ marginBottom: "30px" }}
                ></textarea>
              </Item>
            </Box>
          </div>

          <div style={{ marginTop: "340px", backgroundColor: "#e3e3e3fa" }}>
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
