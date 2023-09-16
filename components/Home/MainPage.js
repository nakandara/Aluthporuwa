import * as React from 'react';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


// Your Video component with text overlay and opacity
const VideoWithTextAndOpacity = () => {
  return (
    <div style={{ position: 'relative' }}>
      <video
        width="100%"
        height="auto" // Adjust the height as needed
        autoPlay
        loop
        muted
        style={{ opacity: 0.25 }} // Change this value to set the desired opacity (0 to 1)
      >
         <source src="/media/poruwaimage.webm" type="video/webm" />
      
        Your browser does not support the video tag.
      </video>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <h1 style={{ color: 'white', fontSize: '2rem', textShadow: '2px 2px 4px rgba(128, 128, 128, 0.5)' }}>
  <span className="responsive-text">ඔබගේ මංගල යෝජනාව දැන්ම වෙන් කරවා ගන්න.</span>
  <br/>
  <Button className='responsive_button' variant="contained" size="large">
  ඉදිරියට යන්න.
        </Button>
</h1>

      </div>
    </div>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <div>
  <VideoWithTextAndOpacity />
  <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
  <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically
      '& > :not(style)': {
        m: 1,
        width: 228,
        height: 228,
      },
    }}
  >
     <Paper elevation={0} sx={{ backgroundColor: 'gray' }} /> {/* Change the background color to red */}
    <Paper elevation={0} sx={{ backgroundColor: 'gray' }} /> {/* Change the background color to blue */}
    <Paper elevation={0} sx={{ backgroundColor: 'gray' }} /> {/* Change the background color to green */}
  </Box>
  </div>
  
</div>

    
    
  );
}
