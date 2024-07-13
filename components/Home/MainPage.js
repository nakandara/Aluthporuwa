import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Cardl from "../../components/card/HomeCard";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

// Your Image component with text overlay and opacity
const ImageWithTextAndOpacity = ({ onLogin }) => {
  return (
    <div style={{ position: "relative" }}>
      <img
        src="/media/pexels-luisphotogram-3551469.jpg"
        alt="Cover"
        style={{ width: "100%", height: "auto", opacity: 0.25 }}
      />
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
          <span className="responsive-text">Book your ad today.</span>
          <br />
          <Button
            onClick={onLogin}
            className="responsive_button"
            variant="contained"
            size="large"
          >
            Proceed
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
        "_id": "66921e9a222fe75b8e3b9700",
        "userId": "6661f7790b2cabbbaa60ed27",
        "brand": "Honda N-Box for sale",
        "model": "Hatchback",
        "trimEdition": "Honda",
        "yearOfManufacture": "2018",
        "mileage": "30000 km",
        "engineCapacity": "660",
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "bodyType": "Hatchback",
        "category": [
            "Cars"
        ],
        "images": [
            {
                "imageUrl": "https://world-api-demo.s3.amazonaws.com/1720852122086-blob",
                "_id": "66921e9a222fe75b8e3b9701"
            },
            {
                "imageUrl": "https://world-api-demo.s3.amazonaws.com/1720852122089-blob",
                "_id": "66921e9a222fe75b8e3b9702"
            }
        ],
        "negotiable": true,
        "description": "<p>Automatic</p><p>Engine Cylinders</p><p>660</p><p>Fuel</p><p>Petrol</p><p>Mileage</p><p>30000 km</p><p>Comfort</p><ul><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>A/C: Front</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>A/C: Rear</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Cruise Control</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Navigation System</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Power Locks</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Power Steering</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Remote Keyless Entry</li><li><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\">TV/VCR</li></ul><p>Safety</p><ul><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Airbag: Driver</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Airbag: Passenger</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Airbag: Side</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Alarm</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Anti-Lock Brakes</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Fog Lights</li></ul><p>Windows</p><ul><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Power Windows</li><li><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\">Rear Window Defroster</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Rear Window Wiper</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Tinted Glass</li></ul><p>Sound System</p><ul><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>CD Changer</li><li><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\">CD Player</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Premium Sound</li></ul><p>Other Features</p><ul><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Alloy Wheels</li><li><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\">Sunroof/Moonroof</li><li><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\">Third Row Seats</li><li><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\">Tow Package</li></ul><p>Additional Information</p><p>Honda N-Box</p><p>2018</p><p>Registered in 2022</p><p>First Owner (Registered Owner)</p>",
        "plane": "Gold",
        "mobileNumber": "(076) 131-7399",
        "whatsappNumber": "(076) 131-7399",
        "price": "Rs 8,000,000",
        "socialIcon": [
            "heart"
        ],
        "verify": true,
        "postId": "66921e9a222fe75b8e3b9703",
        "createdAt": "2024-07-13T06:28:42.284Z",
        "updatedAt": "2024-07-13T06:29:13.412Z",
        "__v": 0
    },
      {
        "_id": "66865d66016454c3719fed41",
        "userId": "6661f7790b2cabbbaa60ed27",
        "brand": "Wagon",
        "model": "Piaggio ape",
        "trimEdition": "Manual",
        "yearOfManufacture": "2011",
        "mileage": "80000 km",
        "engineCapacity": "355",
        "fuelType": "Diesel",
        "transmission": "Manual",
        "bodyType": "Wagon",
        "category": [
          "Three Wheelers"
        ],
        "images": [
          {
            "imageUrl": "https://world-api-demo.s3.amazonaws.com/1720081764048-blob",
            "_id": "66865d66016454c3719fed42"
          }
        ],
        "negotiable": true,
        "description": "<p>Additional Information</p><p>වැඩි විස්තර සදහා අමතන්න</p><p>0775605970</p>",
        "plane": "Gold",
        "mobileNumber": " (077) 560-5970",
        "whatsappNumber": " (077) 560-5970",
        "price": "Rs 975,000",
        "socialIcon": [
          "heart"
        ],
        "verify": true,
        "postId": "66865d66016454c3719fed43",
        "createdAt": "2024-07-04T08:29:26.864Z",
        "updatedAt": "2024-07-04T08:29:53.836Z",
        "__v": 0
      },
      {
        "_id": "668658504de8104461b2f1de",
        "userId": "6661f7790b2cabbbaa60ed27",
        "brand": "2015 Toyota Premio G superior",
        "model": "Sedan",
        "trimEdition": "Automatic",
        "yearOfManufacture": "2015",
        "mileage": " 109000 km",
        "engineCapacity": "-",
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "bodyType": "Sedan",
        "category": [
          "Cars"
        ],
        "images": [
          {
            "imageUrl": "https://world-api-demo.s3.amazonaws.com/1720080460428-blob",
            "_id": "668658504de8104461b2f1df"
          }
        ],
        "negotiable": true,
        "description": "<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(136, 136, 136);\">Additional Information</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">Mint Condition</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">All 3M tinted glasses</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">Full option</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">Alloy wheels</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">2nd Owner</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">Urgent Sale</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">Call for more information</span></p>",
        "plane": "Silver",
        "mobileNumber": "(070) 193-9116",
        "whatsappNumber": "(070) 193-9116",
        "price": "Rs 15,500,000",
        "socialIcon": [
          "heart"
        ],
        "verify": true,
        "postId": "668658504de8104461b2f1e0",
        "createdAt": "2024-07-04T08:07:44.939Z",
        "updatedAt": "2024-07-04T08:08:21.587Z",
        "__v": 0
      },
    ]);
  }, []);

  const handleLogin = () => {
    router.push("/auth/signin");
  };

  return (
    <div>
      <ImageWithTextAndOpacity onLogin={handleLogin} />
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
