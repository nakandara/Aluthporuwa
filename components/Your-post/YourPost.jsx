import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useRouter } from 'next/router';
import useMediaQuery from '@mui/material/useMediaQuery';

const buttonStyle = {
  backgroundColor: '#1976d2', // Change to your desired color
  color: 'white', // Text color
  padding: '10px 20px', // Add padding for better touch target on mobile
};

const smallButtonStyle = {
  ...buttonStyle,
  padding: '5px 10px', // Smaller padding for smaller screens
  fontSize: '0.8rem', // Smaller font size for smaller screens
};

export default function YourPost() {
  const router = useRouter();
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Define your breakpoint here

  const MyPost = () => {
    router.push('/campaign'); 
  }

  const GoBack = () => {
    router.push('/home'); 
  }

  const isMyPostPage = router.pathname === '/myPostPage';

  return (
    <>
      {!isMyPostPage && (
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          style={isSmallScreen ? smallButtonStyle : buttonStyle}
          className='YourPostColor lightning-border'
          onClick={MyPost}
        >
          Post Your Ad
        </Button>
      )}
    </>
  );
}
