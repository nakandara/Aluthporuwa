import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import MobileProtectedRoute from "../../../components/protect/mobileProtectRoute";
import { environments } from "../../../components/environment/environments";
import axios from "axios";
import { useToken } from "../../context/TokenContext";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import imageCompression from "browser-image-compression";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";
import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";

import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Index = () => {
  const fileInputRef = useRef(null);
  const { user } = useToken();
  const router = useRouter();
  const [formData, setFormData] = useState({
    userId: "",
    plane: "",
    title: "",
    description: "",
    category: "",
    mobileNumber: "",
    whatsappNumber: "",
    images: [],
    city: [],
    price: "",
    verify: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      userId: user.userId,
      [name]: value,
    }));
  };

  const { selectedPlan, vehicle, location, subLocation } = router.query;

  console.log(router.query, "router.query");

  useEffect(() => {
    if (selectedPlan) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        plane: selectedPlan,
      }));
      console.log(`Selected Plan: ${selectedPlan}`);
    }
  }, [selectedPlan]);

  const handleDescriptionChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      description: value,
    }));
  };

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    const totalImages = formData.images.length + files.length;

    if (totalImages > 4) {
      Swal.fire({
        icon: "warning",
        title: "Image Upload Limit",
        text: "You can only upload a maximum of 2 images.",
      });
      return;
    }

    const compressedImages = await Promise.all(
      files.map(async (file) => {
        const options = {
          maxSizeMB: 2,
          maxWidthOrHeight: 1024,
          useWebWorker: true,
        };
        try {
          const compressedFile = await imageCompression(file, options);
          return compressedFile;
        } catch (error) {
          console.error("Error compressing file:", error);
          return file;
        }
      })
    );

    setFormData((prevFormData) => ({
      ...prevFormData,
      images: [...prevFormData.images, ...compressedImages],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = new FormData();
      for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
          if (key === "images") {
            formData[key].forEach((file) =>
              postData.append("image", file)
            );
          } else {
            postData.append(key, formData[key]);
          }
        }
      }
      const response = await axios.post(
        `${environments.BASE_HOST_URL}/api/createPost`,
        postData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(response.data.post.postId);
      console.log(JSON.stringify(response, null, 2), "44444444");
      if (response.data) {
        router.push(`/mypost/${response.data.post.postId}`);
        Swal.fire({
          position: "center",
          icon: "success",
          title:
            "Add Your New Post To Pending Dashboard. Please complete payment to put it live.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LayoutSecond>
      <Box sx={{ maxWidth: 800, mx: "auto", p: 2 }}>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                fontSize: { xs: "24px", sm: "28px", md: "32px" },
                textAlign: "center",
                fontWeight: "bold",
               
                color: "black",
                marginTop: "80px",
              }}
            >
              Create Your Add / ඔබේ වෙළඳ දැන්වීම සාදන්න
            </Typography>
          </Grid>
          <Grid     sx={{
                fontSize: { xs: "14px", sm: "18px", md: "22px" },
                color: "black",
                textAlign: "right",
              }} item xs={12}>
            <Typography
              variant="h4"
              component="h4"
              gutterBottom
          
            >
            <img style={{width:"30px",height:"30px"}}  src="/media/placeholder_117967.png" alt="Silver Icon" className="card-icon" />  location
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <TextField
                fullWidth
                margin="normal"
                label="Plane"
                name="plane"
                value={formData.plane}
                onChange={handleChange}
                variant="outlined"
                disabled
              />
              <TextField
                fullWidth
                margin="normal"
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                variant="outlined"
              />
              <Box sx={{ color: "black" }} marginBottom={10}>
                <ReactQuill
                  value={formData.description}
                  onChange={handleDescriptionChange}
                  theme="snow"
                  className="quill-editor"
                />
              </Box>
              <FormControl fullWidth margin="normal" variant="outlined">
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  label="Category"
                >
                  <MenuItem value="Spa">Spa</MenuItem>
                  <MenuItem value="Full Service">Full Service</MenuItem>
                  <MenuItem value="Vehicles">Vehicles</MenuItem>
                  <MenuItem value="Video call">Video call</MenuItem>
                  <MenuItem value="Couple service">Couple service</MenuItem>
                  <MenuItem value="jobs">Jobs</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                margin="normal"
                label="Mobile Number"
                name="mobileNumber"
                type="tel"
                value={formData.mobileNumber}
                onChange={handleChange}
                variant="outlined"
              />
              <TextField
                fullWidth
                margin="normal"
                label="WhatsApp Number"
                name="whatsappNumber"
                type="tel"
                value={formData.whatsappNumber}
                onChange={handleChange}
                variant="outlined"
              />
              <FormControl fullWidth margin="normal" variant="outlined">
                <InputLabel>City</InputLabel>
                <Select
                  name="city"
                  multiple
                  value={formData.city}
                  onChange={handleChange}
                  label="City"
                >
                  <MenuItem value="Colamba">Colombo</MenuItem>
                  <MenuItem value="Gampaha">Gampaha</MenuItem>
                  <MenuItem value="Kalutara">Kalutara</MenuItem>
                  <MenuItem value="Maha Nuvara">Maha Nuvara</MenuItem>
                  <MenuItem value="Matale">Matale</MenuItem>
                  <MenuItem value="Nuwara Eliya">Nuwara Eliya</MenuItem>
                  <MenuItem value="Galle">Galle</MenuItem>
                  <MenuItem value="Matara">Matara</MenuItem>
                  <MenuItem value="Hambantota">Hambantota</MenuItem>
                  <MenuItem value="Yapanaya">Yapanaya</MenuItem>
                  <MenuItem value="Kilinochchi">Kilinochchi</MenuItem>
                  <MenuItem value="Mannaram">Mannaram</MenuItem>
                  <MenuItem value="Vavuniya">Vavuniya</MenuItem>
                  <MenuItem value="Mullaitivu">Mullaitivu</MenuItem>
                  <MenuItem value="Maddakalapuwa">Maddakalapuwa</MenuItem>
                  <MenuItem value="Ampara">Ampara</MenuItem>
                  <MenuItem value="Trincomalee">Trincomalee</MenuItem>
                  <MenuItem value="Kurunegala">Kurunegala</MenuItem>
                  <MenuItem value="Puttalama">Puttalama</MenuItem>
                  <MenuItem value="Anuradhapura">Anuradhapura</MenuItem>
                  <MenuItem value="Polonnaruwa">Polonnaruwa</MenuItem>
                  <MenuItem value="Badulla">Badulla</MenuItem>
                  <MenuItem value="Monaragala">Monaragala</MenuItem>
                  <MenuItem value="Ratnapura">Ratnapura</MenuItem>
                  <MenuItem value="Kegalle">Kegalle</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                margin="normal"
                label="Price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                variant="outlined"
              />
              <Button
                variant="contained"
                component="label"
                fullWidth
                sx={{ mb: 2 }}
              >
                Upload Images
                <input type="file" hidden multiple onChange={handleFileChange} />
              </Button>
              <Grid container spacing={2}>
                {formData.images.map((file, index) => (
                  <Grid item xs={6} sm={4} key={index}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="140"
                        image={URL.createObjectURL(file)}
                        alt={`Selected Image ${index}`}
                      />
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3 }}
              >
                Proceed to Payment
              </Button>
            </form>
            <img
              className="cardPayment"
              src={`/media/payment.png`}
              alt={`Image`}
            />
          </Grid>
        </Grid>
      </Box>
    </LayoutSecond>
  );
};

export default Index;

