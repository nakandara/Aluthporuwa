import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import { environments } from "../../../components/environment/environments";
import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";
import styles from "./myadd.module.css";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import axios from "axios";

const Myadd = ({ postIdData }) => {

  console.log(postIdData.allPosts,'postIdDatapostIdDatapostIdData');

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

  console.log(userId,'imageimageimageimage');

    const [formData, setFormData] = useState({
        userId:userId,
        mobileNumber:mobileNumber,
        title:title,
        price:price,
        whatsappNumber:whatsappNumber,
        city:city,
        description: description,
        category: category,
        image: null,
        imageUrl: image, // To store the URL of the selected image
      });
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState('');
      const [successMessage, setSuccessMessage] = useState('');
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
          userId: prevFormData.userId, // Use existing userId from formData
          [name]: value,
        }));
      };
      
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${environments.BASE_HOST_URL}/api/editPost/${postId}`, formData);
            console.log(response.data, 'Response received successfully');
            if (response.data.success) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully Updated Post",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            // Show success notification
         else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
         }
           
            // Here you can perform any other actions based on the response, such as updating UI, etc.
        } catch (error) {
            // Handle the error
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: '<a href="#">Why do I have this issue?</a>',
            });
            // Show error notification
           
            // You can also log the error for debugging purposes or perform any other error handling logic.
        }
    };
      
      

  return (
    <LayoutSecond>
      <div>
      <div className="myPost_container">
        <div className="myPost_secondContainer">
          <div className="myPost_heading">UPDATE YOUR ADD</div>
          <div className="cardContainer">
            {/* Display selected image */}
            {formData.imageUrl && (
              <img
                src={formData.imageUrl}
                alt="Selected"
                className="cardImage"
              />
            )}
          </div>

          <form onSubmit={handleSubmit} >
          <div style={{marginBottom:"20px"}}>
              <label htmlFor="description">Title:</label>
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
            </div>
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
            <div>
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
            </div>
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
                value={formData.city ? formData.city : []} // Ensure that the value is an array
              >
                <MenuItem value="Kanthale">Kanthale</MenuItem>
                <MenuItem value="polgolla">polgolla</MenuItem>
                <MenuItem value="godagama">godagama</MenuItem>
                {/* Add more MenuItem components for other cities */}
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
                onChange={handleFileChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      </div>
    </LayoutSecond>
  );
};

export async function getServerSideProps(context) {
  const { myadd } = context.query;
  console.log(context,'contextcontextcontextcontext');

  try {
    const response = await axios.get(
      `${environments.BASE_HOST_URL}/api/getPost/${myadd}`
    );
    console.log(response,'responseresponse');
    if (response) {
    }
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

export default Myadd;





