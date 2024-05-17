import Layout from "../../components/Layout";
import React from "react";
import { useToken } from "../context/TokenContext";
import LayoutSecond from "../../components/LayoutSecond/LayoutSecond";
import ProtectedRoute from "../../components/protect/protectedRoute";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const PaymentApprove = () => {
  return (
    <LayoutSecond>
      <ProtectedRoute>
        <Box
          sx={{
            flexGrow: 1,
            height: "100vh",
            margin: "100px",
            "@media (max-width: 600px)": { // Adjust the max-width value as needed
              marginLeft: "20px",
              marginRight: "20px",
              marginTop:"100px"
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid className="paymentAproveCad" item xs={12} sm={6} md={8} sx={{color:"black",margin:"10px"}}>
            ඔබගේ දැන්වීම අපහට ලැබී ඇත.පහත account වලට අදාල package මුදල් බැර කර ඇදාල Risit පත මෙම අංකයට watsapp කරන්න.
            </Grid>
            <Grid className="paymentAproveCadSecond" item xs={12} sm={6} md={8} sx={{color:"black",margin:"10px"}}>
            විනාඩී 10-20 අතර ඔබගේ දැන්වීම live දිස්වනු ඇත.
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <Item>xs=12 sm=6 md=8</Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item>xs=12 sm=6 md=4</Item>
            </Grid>
          </Grid>
        </Box>
      </ProtectedRoute>
    </LayoutSecond>
  );
};

export default PaymentApprove;
