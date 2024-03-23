// import React, { useState, useEffect, useRef } from "react";
// import LayoutSecond from "../../components/LayoutSecond/LayoutSecond";

// import FormControl from "@mui/material/FormControl";
// import axios from "axios";
// import { Container, Paper, Typography, Avatar } from "@mui/material";
// import InputLabel from "@mui/material/InputLabel";
// import Box from "@mui/material/Box";
// import { useRouter } from "next/router";
// import { styled } from "@mui/material/styles";
// import TextField from "@mui/material/TextField";
// import ProtectedRoute from "../../components/protect/protectedRoute";
// import MyInformations from "../../components/MyInformation/MyInformations";
// import { environments } from "../../components/environment/environments";
// import { useToken } from "../context/TokenContext";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import Icon from "@mui/material/Icon";
// import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
// import Swal from "sweetalert2";

//  const url = `${environments.BASE_HOST_URL}/api/createPost`;
// const urlGet = `${environments.BASE_HOST_URL}/api/getPosts`;
// const editUrl = `${environments.BASE_HOST_URL}/api/editProfilePhoto`;
// const GetProfileUrl = `${environments.BASE_HOST_URL}/api/getProfile`;

// const MyAccount = () => {
//   const { user } = useToken();
//   const router = useRouter();

//   const [images, setImages] = useState([]);
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");

//   const fileInputRef = useRef(null);

//   const handleFileUpload = async (e) => {
//     try {
//       const files = Array.from(e.target.files);
//       const base64Images = await Promise.all(files.map(convertToBase64));
//       setImages([...images, ...base64Images]);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const createPost = async (e) => {
//     e.preventDefault();
//     try {
//       const data = {
//         images: images,
//         userId: user.userId,
//         description: description,
//         category: category,
//       };
//       const response = await axios.post(url, data);

//       if (response.data.success) {
//         Swal.fire("Successfully created Post");
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: "Response went wrong!",
//         });
//       }
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Something went wrong!",
//       });
//     }
//   };

//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   }));

//   const convertToBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(file);
//       fileReader.onload = () => {
//         resolve(fileReader.result);
//       };
//       fileReader.onerror = (error) => {
//         reject(error);
//       };
//     });
//   };

//   const handleButtonClick = () => {
//     fileInputRef.current.click(); // Programmatically trigger file input click
//   };

//   return (
//     <LayoutSecond>
//       <div className="myPost_container">
//         <div className="myPost_secondContainer">
//           <div className="myPost_heading">CREATE YOUR ADD</div>
//           <div>
//             <Box
//               gridColumn={{ xs: "1", md: "span 12" }}
//               onClick={handleButtonClick}
//               sx={{
//                 height: "80px",
//                 width: "80px",
//                 display: "flex",
//                 borderRadius: "10px",
//                 marginBottom: "50px",
//                 backgroundColor: "blue",
//                 color: "red",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 marginLeft: "45%",
//               }}
//             >
//               <AddToPhotosIcon />
//               <>
//                 <div className="App">
//                   <form>
//                     <label htmlFor="file-upload" className=""></label>
//                     <input
//                       type="file"
//                       ref={fileInputRef}
//                       style={{ display: "none" }}
//                       accept=".jpeg, .png, .jpg"
//                       onChange={(e) => handleFileUpload(e)}
//                     />
//                   </form>
//                 </div>
//               </>
//             </Box>
//           </div>
//           <div>
//             {" "}
//             {images.map((image, index) => (
//               <img
//                 key={index}
//                 className="myPostImage_uploader"
//                 src={image}
//                 alt={`Uploaded Image ${index + 1}`}
//                 style={{
//                   maxWidth: "90%",
//                   maxHeight: "110px",
//                   marginLeft: "10px",
//                   marginTop: "10px",
//                 }}
//               />
//             ))}
//           </div>
//           <div>
//             <FormControl
//               sx={{ marginTop: "30px", width: "50%", marginLeft: "20%" }}
//             >
//               <InputLabel id="demo-simple-select-label">Category.</InputLabel>
//               <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 value={category}
//                 label="Age"
//                 onChange={(e) => setCategory(e.target.value)}
//               >
//                 <MenuItem value="Land">Land</MenuItem>
//                 <MenuItem value="Spa">Spa</MenuItem>
//                 <MenuItem value="Vehicle">Vehicle</MenuItem>
//               </Select>
//             </FormControl>
//           </div>
//           <div>
//             {" "}
//             <TextField
//               label="Description"
//               multiline
//               rows={4}
//               variant="outlined"
//               sx={{
//                 marginTop: "30px",
//                 width: "50%",
//                 marginLeft: "20%",
//                 marginBottom: "20px",
//               }}
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Description"
//             />
//           </div>
//           <div>
//             <button onClick={(e) => createPost(e)} className="custom-button">
//               Post
//             </button>
//           </div>
//         </div>
//       </div>
//     </LayoutSecond>
//   );
// };

// export default MyAccount;

// function convertToBase64(file) {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = () => {
//       resolve(fileReader.result);
//     };
//     fileReader.onerror = (error) => {
//       reject(error);
//     };
//   });
// }

import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import { environments } from "../../components/environment/environments";
import axios from "axios";
import { useToken } from "../context/TokenContext";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import LayoutSecond from "../../components/LayoutSecond/LayoutSecond";

const MyAccount = () => {
  const fileInputRef = useRef(null);
  const { user } = useToken();
  const router = useRouter();
  const [formData, setFormData] = useState({
    userId: "",
    description: "",
    category: "",
    image: null,
    imageUrl: null, // To store the URL of the selected image
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
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file,
      imageUrl: URL.createObjectURL(file), // Create URL for the selected image
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = new FormData();
      postData.append("userId", formData.userId);
      postData.append("description", formData.description);
      postData.append("category", formData.category);
      postData.append("image", formData.image);

      const response = await axios.post(
        `${environments.BASE_HOST_URL}/api/createPost`,
        postData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      if (response.data) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Create Your New Post",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/post");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
      // Handle success or redirect to another page
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Programmatically trigger file input click
  };

  return (
    <LayoutSecond>
      <div className="myPost_container">
        <div className="myPost_secondContainer">
          <div className="myPost_heading">CREATE YOUR ADD</div>
          <div>
            {/* Display selected image */}
            {formData.imageUrl && (
              <img src={formData.imageUrl} alt="Selected" style={{ maxWidth: "100%", height: "auto" }} />
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
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
    </LayoutSecond>
  );
};

export default MyAccount;
