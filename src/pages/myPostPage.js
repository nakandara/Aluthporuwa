import React, { useState } from 'react';
import { TextField, TextareaAutosize, Button } from '@mui/material';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        variant="outlined"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextareaAutosize
        aria-label="Message"
        rowsMin={4}
        placeholder="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        style={{ width: '100%', marginBottom: '16px' }}
      />
      <Button variant="contained" type="submit" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default MyForm;
