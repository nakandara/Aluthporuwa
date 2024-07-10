import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function HomeContact() {
  return (
    <Box sx={{ flexGrow: 1, mt: 2, ml: 2, mr: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
         
          <Image 
    src="/media/casual-life-3d-young-woman-in-headset-taking-notes-in-front-of-laptop-and-showing-v-sign.png" 
    alt="QuickAds Hub"
    width={205} // Adjust width as necessary
    height={205} // Adjust height as necessary
  />
         
        </Grid>
        <Grid item xs={4}>
       Contact US

        </Grid>
      </Grid>
    </Box>
  );
}
