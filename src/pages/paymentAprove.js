import Layout from "../../components/Layout";
import React from "react";
import { useToken } from "../context/TokenContext";
import LayoutSecond from "../../components/LayoutSecond/LayoutSecond";
import ProtectedRoute from "../../components/protect/protectedRoute";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
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
            "@media (max-width: 600px)": {
              // Adjust the max-width value as needed
              marginLeft: "20px",
              marginRight: "20px",
              marginTop: "100px",
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid
              className="paymentAproveCad"
              item
              xs={12}
              sm={6}
              md={8}
              sx={{ color: "black", margin: "10px" }}
            >
              ස්තුතියි ඔබගේ දැන්වීම අපට සාර්ථකව ලැබී ඇත. ඔබගේ දැන්වීම LIVE
              කිරීමට කරුණාකර අදාල මුදල ගෙවා රිසිට් පත WhatsApp කරන්න.
            </Grid>
            {/* <Grid
              className="paymentAproveCadSecond"
              item
              xs={12}
              sm={6}
              md={8}
              sx={{ color: "black", margin: "10px" }}
            >
              We have successfully received your ad. Please Pay the relevant
              amount and WhatsApp the receipt to make it LIVE
            </Grid> */}
            <Grid
              className="paymentAproveCadSecond"
              sx={{
                color: "black",
                margin: "10px",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
              }}
              item
              xs={12}
              sm={6}
              md={8}
            >
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "18px", md: "22px" },
                  fontWeight: "500",
                }}
              >
                We have successfully received your ad. Please Pay the relevant
                amount and WhatsApp the receipt to make it LIVE
              </Typography>
            </Grid>
            <Grid
              className="paymentAproveCadThird"
              sx={{
                color: "black",
                margin: "10px",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
              }}
              item
              xs={12}
              sm={6}
              md={8}
            >
              <Box
                component="img"
                className="socialImages"
                src="/media/icons8-whatsapp-48.png"
                alt="WhatsApp Icon"
                sx={{
                  width: "48px",
                  height: "48px",
                  marginRight: "10px",
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "20px", sm: "22px", md: "26px" },
                  fontWeight: "500",
                }}
              >
                +94715297881
              </Typography>
            </Grid>
          
            <Grid
              className="paymentAproveCadForth"
              sx={{
                color: "black",
                margin: "10px",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
              }}
              item
              xs={12}
              sm={6}
              md={8}
            >
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "18px", md: "22px" },
                  fontWeight: "500",
                }}
              >
              Remarks සදහා ඔබගේ දැන්වීමට අදාළ දුරකථන අංකය පමණක් යොදන්න
              </Typography>
            </Grid>
            <Grid
              className="paymentAproveCadFive"
              sx={{
                color: "black",
                margin: "10px",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
              }}
              item
              xs={12}
              sm={6}
              md={8}
            >
              <img
              className="cardPayment"
              src={`/media/payment.png`}
              alt={`Image`}
            />
            </Grid>
          </Grid>
        </Box>
      </ProtectedRoute>
    </LayoutSecond>
  );
};

export default PaymentApprove;
