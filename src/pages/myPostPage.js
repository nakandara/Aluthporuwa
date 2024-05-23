import React, { useState } from 'react';
import { useRouter } from "next/router";
import { TextField, TextareaAutosize, Button } from '@mui/material';

const formStyle = {
  width: '100%',
  maxWidth: 600,
  margin: 'auto',
  padding: '16px',
};

const textareaStyle = {
  width: '100%',
  marginBottom: '16px',
  padding: '8px',
  fontSize: '16px',
};

const MyForm = () => {
  const router = useRouter();
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
    router.push("/paymentAprove");
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
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
        style={{ ...textareaStyle, '@media (max-width:600px)': { fontSize: '14px' } }}
      />
      <Button variant="contained" type="submit" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default MyForm;
