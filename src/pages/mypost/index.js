import React, { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import MobileProtectedRoute from "../../../components/protect/mobileProtectRoute";
import { environments } from "../../../components/environment/environments";
import axios from "axios";
import { useToken } from "../../context/TokenContext";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import imageCompression from "browser-image-compression";
import { storage } from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
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
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
  CircularProgress,
  Modal,
} from "@mui/material";
import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";
import DeleteIcon from "@mui/icons-material/Delete";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid"];
const transmissions = ["Manual", "Automatic", "Semi-Automatic"];

const Index = () => {
  const fileInputRef = useRef(null);
  const { user } = useToken();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [formData, setFormData] = useState({
    userId: "",
    condition: "",
    brand: "",
    city: "",
    model: "",
    trimEdition: "",
    yearOfManufacture: "",
    mileage: "",
    title: "",
    engineCapacity: "",
    fuelType: "",
    category: "",
    transmission: "",
    bodyType: "",
    description: "",
    price: "",
    negotiable: false,
    images: [],
  });
  const { selectedPlan, vehicle, location, subLocation } = router.query;

  useEffect(() => {
    if (selectedPlan) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        plane: selectedPlan,
        category: vehicle,
        city: `${location}/${subLocation}`,
      }));
    }
  }, [selectedPlan]);

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

  const handleRemoveImage = (index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: prevFormData.images.filter((_, i) => i !== index),
    }));
  };

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    const totalImages = formData.images.length + files.length;

    if (totalImages > 4) {
      Swal.fire({
        icon: "warning",
        title: "Image Upload Limit",
        text: "You can only upload a maximum of 4 images.",
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

    const uploadedImages = await Promise.all(
      compressedImages.map(async (image) => {
        return new Promise((resolve, reject) => {
          const storageRef = ref(storage, `images/${image.name}`);
          const uploadTask = uploadBytesResumable(storageRef, image);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setUploadProgress((prevProgress) => ({
                ...prevProgress,
                [image.name]: progress,
              }));
            },
            (error) => {
              console.error("Error uploading file:", error);
              reject(error);
            },
            async () => {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              resolve(downloadURL);
            }
          );
        });
      })
    );

    setFormData((prevFormData) => ({
      ...prevFormData,
      images: [...prevFormData.images, ...uploadedImages],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const postData = new FormData();
      for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
          if (key === "images") {
            formData[key].forEach((url) => postData.append("image", url));
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
    } finally {
      setLoading(false);
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
              Create Your Ad / ඔබේ වෙළඳ දැන්වීම සාදන්න
            </Typography>
          </Grid>
          <Grid
            sx={{
              fontSize: { xs: "14px", sm: "18px", md: "22px" },
              color: "black",
              textAlign: "right",
            }}
            item
            xs={12}
          >
            <Typography
              variant="h4"
              component="h4"
              gutterBottom
              sx={{ fontSize: { xs: "12px", sm: "16px", md: "20px" } }}
            >
              <img
                style={{ width: "30px", height: "30px" }}
                src="/media/placeholder_117967.png"
                alt="Location Icon"
                className="card-icon"
              />{" "}
              {location}/{subLocation}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <FormControl style={{ color: "black" }} component="fieldset">
                <div style={{ color: "black" }}>Condition</div>
                <RadioGroup
                  row
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="New"
                    control={<Radio />}
                    label="New"
                  />
                  <FormControlLabel
                    value="Used"
                    control={<Radio />}
                    label="Used"
                  />
                  <FormControlLabel
                    value="Recondition"
                    control={<Radio />}
                    label="Recondition"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                name="title"
                label="Title"
                value={formData.title}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="brand"
                label="Brand"
                value={formData.brand}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="model"
                label="Model"
                value={formData.model}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="trimEdition"
                label="Trim/Edition"
                value={formData.trimEdition}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="yearOfManufacture"
                label="Year of Manufacture"
                value={formData.yearOfManufacture}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="mileage"
                label="Mileage"
                value={formData.mileage}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />

              <TextField
                name="engineCapacity"
                label="Engine Capacity"
                value={formData.engineCapacity}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Fuel Type</InputLabel>
                <Select
                  name="fuelType"
                  value={formData.fuelType}
                  onChange={handleChange}
                >
                  {fuelTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel>Transmission</InputLabel>
                <Select
                  name="transmission"
                  value={formData.transmission}
                  onChange={handleChange}
                >
                  {transmissions.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Body Type"
                  name="bodyType"
                  value={formData.bodyType}
                  onChange={handleChange}
                />
              </FormControl>

              <Box sx={{ color: "black" }} mt={2}>
                <ReactQuill
                  theme="snow"
                  value={formData.description}
                  onChange={handleDescriptionChange}
                />
              </Box>
              <TextField
                name="price"
                label="Price"
                value={formData.price}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <FormControlLabel
                control={
                  <Radio
                    checked={formData.negotiable}
                    onChange={(e) =>
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        negotiable: e.target.checked,
                      }))
                    }
                  />
                }
                label="Negotiable"
              />
              <Box mt={2}>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => fileInputRef.current.click()}
                >
                  Upload Images
                </Button>
              </Box>
              <Grid container spacing={2} mt={2}>
                {formData.images.map((url, index) => (
                  <Grid item key={index}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="140"
                        image={url}
                        alt={`Uploaded Image ${index + 1}`}
                      />
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleRemoveImage(index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {Object.keys(uploadProgress).map((fileName) => (
                <Typography key={fileName} variant="body2" color="textSecondary">
                  {fileName}: {Math.round(uploadProgress[fileName])}%
                </Typography>
              ))}

              <TextField
                fullWidth
                margin="normal"
                label="Mobile Number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                variant="outlined"
                placeholder="Enter your mobile number"
              />
              <TextField
                fullWidth
                margin="normal"
                label="WhatsApp Number"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                variant="outlined"
                placeholder="Enter your WhatsApp number"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: "1rem" }}
                disabled={loading} // Disable button when loading
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>

      <Modal
        open={loading}
        onClose={() => setLoading(false)}
        aria-labelledby="loading-modal"
        aria-describedby="loading-modal-description"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      </Modal>
    </LayoutSecond>
  );
};

export default Index;