import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from 'next/router';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function Elevation() {

  const router = useRouter();

  const handleButtonClick = () => {
    const socketUser = localStorage.getItem("userone");
    const query = new URLSearchParams(socketUser);

 
    const targetUrl = `https://sokettest-second-frontend.vercel.app/messenger?${socketUser}`;
    window.location.href = targetUrl;
    
  };


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));



  const cards = [
    {
      header: "All Adds + 11234",
      title: "Total Advertisements",
      text: "Explore our extensive collection of ads. With over 11,234 advertisements, we provide a vast range of choices to meet your needs.",
      backgroundColor: "#f8d7da", // Light red
      icon: "/media/all.png", // Icon for this card
    },
    {
      header: "Users +34567",
      title: "Active Users",
      text: "Join a thriving community of over 34,567 active users. Connect, share, and engage with like-minded individuals.",
      backgroundColor: "#d1ecf1", // Light blue
      icon: "/media/active-user.png", // Icon for this card
    },
    {
      header: "Gold Adds 3834+",
      title: "Premium Advertisements",
      text: "Discover exclusive deals and offers with our premium advertisements. Over 3,834 high-value listings await your attention.",
      backgroundColor: "#d4edda", // Light green
      icon: "/media/diamond.png", // Icon for this card
    },
    {
      header: "Silver Adds 4874+",
      title: "Silver Plan Advertisements",
      text: "Access exclusive deals and offers with our Silver Plan advertisements. Over 4,874 quality listings are available for you.",
      backgroundColor: "#e2e3e5", // Light gray
      icon: "/media/small.png", // Icon for this card
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
              {cards.map((card, index) => (
                <div key={index} className="col-md-4 mb-3">
                  <div
                    className="card border-success shadow-lg"
                    style={{
                      maxWidth: "none",
                      transition: "transform 0.2s",
                      backgroundColor: card.backgroundColor,
                    }}
                  >
                    <div
                      className="card-header border-success"
                      style={{
                        fontWeight: "bold",
                        backgroundColor: card.backgroundColor,
                      }}
                    >
                      {card.header}
                    </div>
                    <div className="card-body text-success">
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-text">{card.text}</p>
                    </div>
                    <div
                      className="card-footer bg-transparent border-success"
                      style={{
                        backgroundColor: card.backgroundColor,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <img src={card.icon} alt="icon" style={{ width: '64px', height: '64px' }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
      <div>
      {/* <button onClick={handleButtonClick}>Go to Second Project</button> */}
    </div>
    </Box>
  );
}
