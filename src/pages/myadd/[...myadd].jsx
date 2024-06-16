import React, { useState } from "react";
import Swal from "sweetalert2";
import { environments } from "../../../components/environment/environments";
import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";
import styles from "./myadd.module.css";
import { jsPDF } from "jspdf";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
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
} from "@mui/material";
import axios from "axios";

// Dynamically import ReactQuill
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Myadd = ({ postIdData }) => {
  const image = postIdData?.allPosts[0]?.PostDetails?.image;
  const description = postIdData?.allPosts[0]?.PostDetails?.description;
  const category = postIdData?.allPosts[0]?.PostDetails?.category;
  const title = postIdData?.allPosts[0]?.PostDetails?.title;
  const mobileNumber = postIdData?.allPosts[0]?.PostDetails?.mobileNumber;
  const whatsappNumber = postIdData?.allPosts[0]?.PostDetails?.whatsappNumber;
  const city = postIdData?.allPosts[0]?.PostDetails?.city;
  const price = postIdData?.allPosts[0]?.PostDetails?.price;
  const postId = postIdData?.allPosts[0]?.PostDetails?.postId;
  const userId = postIdData?.allPosts[0]?.PostDetails?.userId;

  const generatePDF = () => {
    const doc = new jsPDF();

    // Adding title
    doc.setFontSize(20);
    doc.text("Payment Invoice", 10, 10);

    // Accessing post data correctly
    const postDetails = postIdData.allPosts[0].PostDetails;

    let y = 20;
    doc.setFontSize(12);
    doc.text(`Title: ${postDetails.title || "N/A"}`, 10, y);
    doc.text(`Invoice Post ID: ${postDetails.postId || "N/A"}`, 10, y + 10);
    doc.text(`Mobile Number: ${postDetails.mobileNumber || "N/A"}`, 10, y + 20);

    // Save the PDF
    doc.save("payment_invoice.pdf");
  };

  const [formData, setFormData] = useState({
    userId: userId,
    mobileNumber: mobileNumber,
    title: title,
    price: price,
    whatsappNumber: whatsappNumber,
    city: Array.isArray(city) ? city : [], // Ensure city is an array
    description: description,
    category: category,
    image: null,
    imageUrl: image, // To store the URL of the selected image
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file,
      imageUrl: URL.createObjectURL(file), // Create URL for the selected image
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert city array to comma-separated string
      const formDataToSend = {
        ...formData,
        city: formData.city.join(", "), // Convert array to string
      };
      const response = await axios.put(
        `${environments.BASE_HOST_URL}/api/editPost/${postId}`,
        formDataToSend
      );
      if (response.data.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Updated Post",
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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <LayoutSecond>
      <div>
        <div className="myPost_container">
          <Grid
            sx={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
            item
            xs={12}
          >
            <Button variant="contained" color="primary" onClick={generatePDF}>
              Download Payment Invoice
            </Button>
          </Grid>
          <Box sx={{ maxWidth: 800, mx: "auto", p: 2 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Update Your Ad
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
              <Box sx={{ color: "black" }} marginBottom={10}>
                <ReactQuill
                  value={formData.description}
                  onChange={(value) => setFormData({ ...formData, description: value })}
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
                  onChange={handleSelectChange}
                  value={formData.city}
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
              <Grid container spacing={2}>
                <Grid item xs={6} sm={4}>
                  {formData.imageUrl && <img src={formData.imageUrl} alt="Selected Image" style={{ width: "100%" }} />}
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3 }}
              >
                Updated
              </Button>
            </form>
            <img
              className="cardPayment"
              src={`/media/payment.png`}
              alt={`Image`}
            />
          </Box>
        </div>
      </div>
    </LayoutSecond>
  );
};

export default Myadd;

export async function getServerSideProps(context) {
  const { myadd } = context.query;

  try {
    const response = await axios.get(
      `${environments.BASE_HOST_URL}/api/getPost/${myadd}`
    );

    return {
      props: {
        postIdData: response.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        postIdData: {},
      },
    };
  }
}
