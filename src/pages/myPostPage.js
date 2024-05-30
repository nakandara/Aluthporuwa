import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import { environments } from "../../components/environment/environments";
import axios from "axios";
import { useToken } from "../context/TokenContext";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic';
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
import LayoutSecond from "../../components/LayoutSecond/LayoutSecond";

import 'react-quill/dist/quill.snow.css';


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const MyAccount = () => {
  const fileInputRef = useRef(null);
  const { user } = useToken();
  const router = useRouter();
  const [formData, setFormData] = useState({
    userId: "",
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

  const handleDescriptionChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      description: value,
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: [...prevFormData.images, ...files],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = new FormData();
      for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
          if (key === "images") {
            formData[key].forEach((file) => postData.append("image", file));
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
      if (response.data) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Add Your New Post To Pending Dashboard. Please complete payment to put it live.",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/paymentAprove");
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
        <Typography variant="h4" component="h1" gutterBottom>
          Create Your Ad
        </Typography>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <TextField
            fullWidth
            margin="normal"
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            variant="outlined"
          />
          <Box sx={{color:"black"}} marginBottom={10}>
            <ReactQuill 
              value={formData.description} 
              onChange={handleDescriptionChange} 
              theme="snow" 
              className="quill-editor"
            />
          </Box>
          <TextField
            fullWidth
            margin="normal"
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            variant="outlined"
          />
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
              <MenuItem value="Kanthale">Kanthale</MenuItem>
              <MenuItem value="polgolla">Polgolla</MenuItem>
              <MenuItem value="godagama">Godagama</MenuItem>
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
          <Button variant="contained" component="label" fullWidth sx={{ mb: 2 }}>
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
      </Box>
    </LayoutSecond>
  );
};

export default MyAccount;
