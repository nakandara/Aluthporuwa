import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Cardl from "../../components/card/HomeCard";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

// Your Video component with text overlay and opacity
const VideoWithTextAndOpacity = ({ onLogin }) => {
  return (
    <div style={{ position: "relative" }}>
      <video
        width="100%"
        height="auto"
        autoPlay
        loop
        muted
        style={{ opacity: 0.25 }}
      >
        <source src="/media/poruwaimage.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "2rem",
            textShadow: "2px 2px 4px rgba(128, 128, 128, 0.5)",
          }}
        >
          <span className="responsive-text">Book your add today.</span>
          <br />
          <Button
            onClick={onLogin}
            className="responsive_button"
            variant="contained"
            size="large"
          >
            Proceed.
          </Button>
        </h1>
      </div>
    </div>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const router = useRouter();

  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
     
      {
        "_id": "6668af2647a5e7d722d4eb89",
        "userId": "66437d4055b327e8eaf7b6db",
        "images": [
          {
            "imageUrl": "https://world-api-demo.s3.amazonaws.com/1718136613836-IMG_6423.png",
            "_id": "6668af2647a5e7d722d4eb8a"
          }
        ],
        "description": "PLEASE LIKE & SHARE ME 👍...",
        "plane": "Gold",
        "title": "Lihini 🦋 Shemale Live Cam & Full Service 🥰",
        "city": "Colamba",
        "mobileNumber": " 0768034662",
        "whatsappNumber": " 0768034662",
        "price": "1000",
        "category": ["Full Service"],
        "socialIcon": ["heart"],
        "verify": true,
        "postId": "6668af2647a5e7d722d4eb8b",
        "createdAt": "2024-06-11T20:10:14.147Z",
        "updatedAt": "2024-06-11T20:14:37.233Z",
      },
    ]);
  }, []);

  const handleLogin = () => {
    router.push("/auth/signin");
  };

  return (
    <div>
      <VideoWithTextAndOpacity onLogin={handleLogin} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          className="card_style"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data.map((post, index) => (
            <div key={index}>
              <Cardl
                src={post}
                index={index}
                reactionCount={4}
                post={post}
                coverSocialIcons={""}
                description={post.description}
                imageReaction={(value) => imageReaction(value, index, post)}
                animateState={""}
              />
            </div>
          ))}
        </Box>
      </div>
    </div>
  );
}
