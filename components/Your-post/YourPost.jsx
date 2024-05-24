import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useRouter } from 'next/router';




const buttonStyle = {
    backgroundColor: 'yourDesiredColor', // Change 'yourDesiredColor' to the color you want
    color: 'white', // Text color
  }

export default function YourPost() {
  const router = useRouter();


const MyPost = () =>{
  router.push('/campaign'); 
}


const GoBack = () => {
  router.push('/home'); 
}

const isMyPostPage = router.pathname === '/myPostPage';

  return (
    <>
    

      {isMyPostPage ?  null :  <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          style={buttonStyle}
          className='YourPostColor'
          onClick={MyPost}
        >
          Post Your Ad
        </Button>}
    </>
  );
}