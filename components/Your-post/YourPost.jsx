import * as React from 'react';
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
  fontSize: '0.8rem', // Smaller font size for smaller screens
  padding: '8px 16px', // Adjust padding for smaller screens
};

export default function YourPost() {
  const router = useRouter();
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Define your breakpoint here

  const handleMyPostClick = () => {
    router.push('/campaign'); 
  }

  const isMyPostPage = router.pathname === '/myPostPage';

  return (
    <>
      {!isMyPostPage && (
        <Button
          variant="contained"
          startIcon={<CloudUploadIcon />}
          style={isSmallScreen ? smallButtonStyle : buttonStyle}
          className='YourPostColor lightning-border'
          onClick={handleMyPostClick}
        >
          Post Your Ad
        </Button>
      )}
    </>
  );
}
