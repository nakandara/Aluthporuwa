import React, { useState } from 'react';
import { useRouter } from "next/router";
import { TextField, TextareaAutosize, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  form: {
    width: '100%',
    maxWidth: 600,
    margin: 'auto',
    padding: '16px',
  },
  textarea: {
    width: '100%',
    marginBottom: '16px',
    padding: '8px',
    fontSize: '16px',
    '@media (max-width:600px)': {
      fontSize: '14px',
    },
  },
});

const MyForm = () => {
  const classes = useStyles();
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
    <form onSubmit={handleSubmit} className={classes.form}>
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
        className={classes.textarea}
      />
      <Button variant="contained" type="submit" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default MyForm;
