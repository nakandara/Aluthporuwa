import * as React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import useInView from './useInView'; // Ensure this import points to your hook

// Define the keyframes for the animation
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Item = styled(Box)(({ theme, isContent, inView }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'black',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: isContent ? '1px solid #ddd' : 'none',
  borderRadius: isContent ? '8px' : 'none', // Add border radius if isContent
  animation: isContent && inView ? `${slideIn} 1s ease-out` : 'none', // Apply animation only for content items
  marginBottom: isContent ? theme.spacing(2) : 'none', // Margin bottom for content items
}));

const ContentItem = ({ children }) => {
  const [setRef, inView] = useInView({
    threshold: 0.1, // Adjust threshold as needed
  });

  return (
    <Item ref={setRef} isContent inView={inView} sx={{ color: 'white', p: 2 }}>
      {children}
    </Item>
  );
};

export default function HomeContact() {
  return (
    <Box sx={{ flexGrow: 1, mt: 2, ml: 2, mr: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box
            sx={{ display: 'flex', justifyContent: 'center' }}
            className="fade-in-up"
          >
            <Image 
              src="/media/casual-life-3d-young-woman-in-headset-taking-notes-in-front-of-laptop-and-showing-v-sign.png" 
              alt="QuickAds Hub"
              width={150} // Adjusted width
              height={150} // Adjusted height
              layout="fixed" // Ensure the image maintains its size
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={9}>
          <ContentItem>
            <Typography variant="h6" component="div" sx={{ mb: 1 }}>
              Contact Us
            </Typography>
            <Typography variant="body1" component="div" sx={{ mb: 1 }}>
              <strong>Email:</strong> quickadshub@gmail.com
            </Typography>
            <Typography variant="body1" component="div">
              <strong>Phone:</strong> +94715297881
            </Typography>
          </ContentItem>
        </Grid>
      </Grid>
    </Box>
  );
}
