import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


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
        style={{ opacity: 0.19 }} // Change this value to set the desired opacity (0 to 1)
      >
         <source src="/media/heart.webm" type="video/webm" />
      
        Your browser does not support the video tag.
      </video>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <h1 style={{ color: 'white', fontSize: '2rem', textShadow: '2px 2px 4px rgba(128, 128, 128, 0.5)' }}>
  <span className="responsive-text">ඔබගේ මංගල යෝජනාව දැන්ම වෙන් කරවා ගන්න.</span>
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
    <VideoWithTextAndOpacity />
  );
}
