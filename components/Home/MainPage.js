import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Cardl from "../../components/card/Card";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

// Your Video component with text overlay and opacity
const VideoWithTextAndOpacity = () => {
  const router = useRouter();

 

  const LoginPage = () => {
    router.push("/auth/signin");
  };

  return (
    <div style={{ position: "relative" }}>
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
          <span className="responsive-text">
            ඔබගේ මංගල යෝජනාව දැන්ම වෙන් කරවා ගන්න.
          </span>
          <br />
          <Button
            onClick={LoginPage}
            className="responsive_button"
            variant="contained"
            size="large"
          >
            ඉදිරියට යන්න.
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

  const [data, setData] = useState([
    {
      _id: "65741a033e9bcea69d35d74e",
      userId: "651ab367455cb0a4405755b6",
      image:
        "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "111111111111111111111111111111111 1111",
      category: ["Vehicle"],
      postId: "65741a033e9bcea69d35d74f",
      __v: 0,
      socialIcon: ["smile"],
      phoneNumber: "0715297881",
    },
    {
      _id: "65741a033e9bcea69d35d74e",
      userId: "651ab367455cb0a4405755b6",
      image:
        "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "111111111111111111111111111111111 1111",
      category: ["Vehicle"],
      postId: "65741a033e9bcea69d35d74f",
      __v: 0,
      socialIcon: ["smile"],
      phoneNumber: "0715297881",
    },
  
    {
      _id: "65741a033e9bcea69d35d74e",
      userId: "651ab367455cb0a4405755b6",
      image:
        "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "111111111111111111111111111111111 1111",
      category: ["Vehicle"],
      postId: "65741a033e9bcea69d35d74f",
      __v: 0,
      socialIcon: ["smile"],
      phoneNumber: "0715297881",
    },
  
    {
      _id: "65741a033e9bcea69d35d74e",
      userId: "651ab367455cb0a4405755b6",
      image:
        "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "111111111111111111111111111111111 1111",
      category: ["Vehicle"],
      postId: "65741a033e9bcea69d35d74f",
      __v: 0,
      socialIcon: ["smile"],
      phoneNumber: "0715297881",
    },
  
  
  ]);
  return (
    <div>
      <VideoWithTextAndOpacity />
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
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            "& > :not(style)": {
              m: 1,
              width: 328,
             
            },
            
          }}
        >
          {/* <Card sx={{ maxWidth: 300, display: "flex" }}>
          
          </Card>

          <Card sx={{ maxWidth: 300, display: "flex" }}>
            <div className="card_b">
              {" "}
              <CardMedia
                sx={{ height: "120%" }}
                image="/media/chamodh.jpg"
                title="green iguana"
              />
            </div>
            <div className="card_info">
              <div>නම:චලනී පබෝදා</div>
              <div>වයස:21</div>
              <div>ලග්නය:කටක</div>
              <div>උපන් දිනය:1998.09.10</div>
            </div>
          </Card>

          <Card sx={{ maxWidth: 300, display: "flex" }}>
            <div className="card_b">
              {" "}
              <CardMedia
                sx={{ height: "120%" }}
                image="media/tharu.jpg"
                title="green iguana"
              />
            </div>
            <div className="card_info">
              <div>නම:චලනී පබෝදා</div>
              <div>වයස:21</div>
              <div>ලග්නය:කටක</div>
              <div>උපන් දිනය:1998.09.10</div>
            </div>
          </Card>

          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: "200%" }}
              image="media/mol.jpg"
              title="green iguana"
            />
          </Card> */}



{data.map((post, index) => (
                  <div key={index}>
                    <div key={index} height={200} offset={100}>
                      <Cardl
                        src={post.image}
                        index={index}
                        reactionCount={4}
                        post={post}
                        coverSocialIcons={''}
                        description={post.description}
                        imageReaction={(value) =>
                          imageReaction(value, index, post)
                        }
                        animateState={''}
                      />
                    </div>
                  </div>
                ))}
          {/* Change the background color to green */}
        </Box>
      </div>
    </div>
  );
}
