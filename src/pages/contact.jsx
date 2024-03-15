
import React, { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { useToken } from "../context/TokenContext";
import LayoutSecond from '../../components/LayoutSecond/LayoutSecond'
import ProtectedRoute from "../../components/protect/protectedRoute"; 
import { environments } from "../../components/environment/environments";
 // Make sure to import your global styles

const ContactUs = () => {
  const { user } = useToken();
  const [formData, setFormData] = useState({
    userId:'',
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      userId: user.userId,
      
    });
  };

  const handleSubmit = async (e) => {
  
    e.preventDefault();
    try {

      const response = await axios.post(`${environments.BASE_HOST_LOCAL_URL}/api/createContact`, formData);
      console.log(response.data);
      if (response.data) {
        setFormData({
          userId: '',
          name: '',
          email: '',
          message: '',
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been sent",
          showConfirmButton: false,
          timer: 1500
        });
      }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };

  return (
    <LayoutSecond>
    <ProtectedRoute>
    <div className="contact-us-container"  style={{ marginTop: "90px", height: "80vh" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="input-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
          required
        />

        <label htmlFor="email" className="input-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
          required
        />

        <label htmlFor="message" className="input-label">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="input-field"
          required
        ></textarea>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
    </ProtectedRoute>
   
   </LayoutSecond>
  );
};

export default ContactUs;
