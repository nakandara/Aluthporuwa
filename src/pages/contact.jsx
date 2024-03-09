// ContactUs.js

import React, { useState } from 'react';
import LayoutSecond from '../../components/LayoutSecond/LayoutSecond'
import ProtectedRoute from "../../components/protect/protectedRoute"; 
 // Make sure to import your global styles

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission (e.g., sending an email, storing in a database, etc.)
    console.log('Form submitted:', formData);
    // Clear the form fields after submission
    setFormData({ name: '', email: '', message: '' });
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
