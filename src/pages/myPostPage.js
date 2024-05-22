import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import { environments } from "../../components/environment/environments";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import { useToken } from "../context/TokenContext";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import LayoutSecond from "../../components/LayoutSecond/LayoutSecond";

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
    whatsappNumber: "", // Add mobileNumber field
    images: [], // Array to store multiple images
    city: [], // Array to store selected cities
    price: "",
    verify: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      userId: user.userId,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
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
            formData[key].forEach((file) => {
              postData.append("image", file);
            });
          } else {
            postData.append(key, formData[key]);
          }
        }
      }
      const response = await axios.post(
        `${environments.BASE_HOST_URL}/api/createPost`,
        postData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Add Your New Post To Pending Dashboard Please Payment after it put Live post",
          showConfirmButton: false,
          timer: 1500,
        });
        // Navigate to the new page
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

  const submitPayment = () => {
    router.push("/paymentAprove");
  };

  return (
    <LayoutSecond>
      <div className="myPost_container">
        <div className="myPost_secondContainer">
          <div className="myPost_heading">CREATE YOUR AD</div>
          <div className="cardContainer">
            {/* Display selected images */}
            {formData.images.map((file, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                alt={`Selected Image ${index}`}
                className="cardImage"
              />
            ))}
          </div>

          <form onSubmit={handleSubmit} className="myPostForm">
            {/* <div style={{ marginBottom: "20px" }}>
              <label htmlFor="title">Title:</label>
              <TextareaAutosize
                className="myPostFormDescription-textarea"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                aria-label="minimum height"
                minRows={3}
                placeholder="Title"
              />
            </div> */}
             <Typography
                  style={{ marginTop: "20px" }}
                  variant="body2"
                  color="textSecondary"
                >
                Title
                </Typography>
                <TextareaAutosize 
                 sx={{ m: 1, maxWidth: 300 }}
                  fullWidth
                  id="title"
                  name="title"
                  label="Name"
                  value={formData.title}
                onChange={handleChange}
                />
            <div>
              <label htmlFor="description">Description:</label>
              <TextareaAutosize
                className="myPostFormDescription-textarea"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                aria-label="minimum height"
                minRows={3}
                placeholder="Description"
              />
            </div>

            <div className="myPostFormDescription">
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
            </div>

            {/* Add input field for mobile number */}
            <div className="myPostFormDescription">
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <input
                type="number"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </div>
            <div className="myPostFormDescription">
              <label htmlFor="whatsappNumber">WhatsApp Number:</label>
              <input
                type="number"
                id="whatsappNumber"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
              />
            </div>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="City"
                name="city"
                onChange={handleChange}
                multiple // Enable multiple selection
                value={formData.city ? formData.city : []} // Ensure that the value is an array
              >
                <MenuItem value="Kanthale">Kanthale</MenuItem>
                <MenuItem value="polgolla">polgolla</MenuItem>
                <MenuItem value="godagama">godagama</MenuItem>
              </Select>
            </FormControl>

            <div className="myPostFormDescription">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="image">Image:</label>
              <input
                type="file"
                id="image"
                name="image"
                multiple // Allow multiple file selection
                onChange={handleFileChange}
              />
            </div>
            <img
              className="cardPayment"
              src={`/media/payment.png`}
              alt={`Image`}
            />
            <button
              type="submit"
              style={{ margin: "10px" }}
              className="submitBtn"
              onClick={submitPayment}
            >
              PROCEED TO PAYMENT
            </button>
          </form>
        </div>
      </div>
    </LayoutSecond>
  );
};

export default MyAccount;
