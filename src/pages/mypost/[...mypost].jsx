import React, { useState, useEffect } from "react";
import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";
import axios from "axios";
import { environments } from "../../../components/environment/environments";
import Typography from "@mui/material/Typography";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/CardMedia";
import Tooltip from "@mui/material/CardMedia";
import MobileProtectedRoute from "../../../components/protect/mobileProtectRoute";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { jsPDF } from "jspdf";
import Button from "@mui/material/Button";

const MyPost = ({ postIdData }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const generatePDF = () => {
    const doc = new jsPDF();

    // Adding title
    doc.setFontSize(400);
    doc.text("Payment Invoice", 10, 10);

    // Accessing post data correctly
    const postDetails = postIdData.allPosts[0].PostDetails;

    let y = 20;
    doc.setFontSize(12);
    doc.text(`Title: Payment per Invoice '}`, 10, y);
    doc.text(`invoice post ID: ${postDetails.postId || "N/A"}`, 10, y + 10);
    doc.text(`Mobile Number: ${postDetails.mobileNumber || "N/A"}`, 10, y + 20);
    doc.text(`Mobile Number: ${postDetails.plane || "N/A"}`, 10, y + 20);

    // Save the PDF
    doc.save("payment_invoice.pdf");
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log(`${text} copied to clipboard`);
    });
  };
  return (
    <LayoutSecond>
      <Box
        sx={{
          flexGrow: 1,
          height: "auto",
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
            ස්තුතියි ඔබගේ දැන්වීම අපට සාර්ථකව ලැබී ඇත. ඔබගේ දැන්වීම LIVE කිරීමට
            කරුණාකර අදාල මුදල ගෙවා රිසිට් පත සහ පහත ඇති payment invoice එක
            downlod කර එය සමග watsapp කරන්න.
          </Grid>
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
              component="a"
              href="whatsapp://send?phone=+94715297881"
              target="_blank"
              rel="noopener noreferrer"
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
              Remarks සදහා ඔබගේ දැන්වීමට අදාළ දුරකථන අංකය පමණක් යොදන්න.
              <br />
              For remarks, please provide only the phone number related to your
              advertisement.
            </Typography>
          </Grid>
          <Grid
            className="paymentAproveCadFive"
            sx={{
              margin: "10px",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "white",
              color: "black",
              display: "grid",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", sm: "flex-start" },
              gap: "10px",
            }}
            item
            xs={12}
            sm={6}
            md={8}
          >
            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  Account Num: 8022368054
                </Typography>
                <Tooltip title="Copy">
                  <IconButton
                    onClick={() => handleCopy("8022368054")}
                    sx={{ ml: 1 }}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </Tooltip>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body1" component="div">
                  W.G Pramod Niroshan Nakandara
                </Typography>
                <Tooltip title="Copy">
                  <IconButton
                    onClick={() => handleCopy("W.G Pramod Niroshan Nakandara")}
                    sx={{ ml: 1 }}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </Tooltip>
              </Box>
              <Typography variant="body1" component="div">
                BOC
              </Typography>
              <Typography variant="body1" component="div">
                Ibbagamuwa
              </Typography>
            </Box>
            <CardMedia
              component="img"
              sx={{
                width: { xs: "100%", sm: "auto" },
                height: "100px",
                objectFit: "contain",
              }}
              image="/media/payment.png"
              alt="Payment Image"
            />
          </Grid>
          <Grid
            sx={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
            item
            xs={12}
          >
            <Button variant="contained" color="primary" onClick={generatePDF}>
              Download Payment Invoice
            </Button>
          </Grid>
        </Grid>
      </Box>
    </LayoutSecond>
  );
};

export async function getServerSideProps(context) {
  const { mypost } = context.query;

  try {
    const response = await axios.get(
      `${environments.BASE_HOST_URL}/api/getPost/${mypost}`
    );

    return {
      props: {
        postIdData: response.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        postIdData: {},
      },
    };
  }
}

export default MyPost;
