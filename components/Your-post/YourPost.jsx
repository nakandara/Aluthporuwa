import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


const buttonStyle = {
    backgroundColor: 'yourDesiredColor', // Change 'yourDesiredColor' to the color you want
    color: 'white', // Text color
  }

export default function YourPost() {
  return (
    <Button
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
      style={buttonStyle}
      className='YourPostColor'
    >
      Post Your Add
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}