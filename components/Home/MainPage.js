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
        "_id": "66a4a10aeeb5272ad4dd79a2",
        "userId": "6661f7790b2cabbbaa60ed27",
        "brand": "SUV",
        "model": "SUV",
        "trimEdition": "-",
        "yearOfManufacture": "2014",
        "mileage": "128243 km",
        "engineCapacity": "1500",
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "bodyType": "SUV",
        "category": [
            "Cars"
        ],
        "images": [
            {
                "imageUrl": "https://firebasestorage.googleapis.com/v0/b/datamithurunode.appspot.com/o/images%2Fhonda-vezel-x-301334179_large.jpg?alt=media&token=85687b5c-db3e-47e2-945f-db37e22256f2",
                "_id": "66a4a10aeeb5272ad4dd79a3"
            }
        ],
        "negotiable": true,
        "description": "<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">HONDA VEZEL ,year of manufacture 2014, Year of Registration 2014,</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">Rs 8,600,000.00 ,Records available,</span></p><p><br></p><p><br></p><ul><li><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">﻿</span><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>A/C: Front</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>A/C: Rear</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Cruise Control</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Navigation System</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Power Locks</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Power Steering</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Remote Keyless Entry</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>TV/VCR</li></ul><p>Safety</p><ul><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Airbag: Driver</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Airbag: Passenger</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Airbag: Side</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Alarm</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Anti-Lock Brakes</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Fog Lights</li></ul><p>Windows</p><ul><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Power Windows</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Rear Window Defroster</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Rear Window Wiper</li><li><span style=\"background-color: initial;\"><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\"></span>Tinted Glass</li></ul>",
        "plane": "Gold",
        "title": " Honda Vezel x",
        "city": "Colombo/Colombo 2",
        "mobileNumber": " (777) 354-296",
        "whatsappNumber": " (777) 354-296",
        "price": "Rs 8,600,000",
        "socialIcon": [
            "heart"
        ],
        "verify": true,
        "postId": "66a4a10aeeb5272ad4dd79a4",
        "createdAt": "2024-07-27T07:26:02.048Z",
        "updatedAt": "2024-07-27T07:26:26.334Z",
        "__v": 0
    },
    {
        "_id": "66a47b3f2beb0cfe8eaa50a1",
        "userId": "6661f7790b2cabbbaa60ed27",
        "brand": "Hatchback",
        "model": "Hatchback",
        "trimEdition": "-",
        "yearOfManufacture": "1992",
        "mileage": "124958 km",
        "engineCapacity": "1000",
        "fuelType": "Petrol",
        "transmission": "Manual",
        "bodyType": "SUV",
        "category": [
            "Cars"
        ],
        "images": [
            {
                "imageUrl": "https://firebasestorage.googleapis.com/v0/b/datamithurunode.appspot.com/o/images%2Fnissan-march-1003276416_large.jpg?alt=media&token=59ef8b8f-1eea-47e0-83ac-36dd014ad585",
                "_id": "66a47b3f2beb0cfe8eaa50a2"
            },
            {
                "imageUrl": "https://firebasestorage.googleapis.com/v0/b/datamithurunode.appspot.com/o/images%2Fnissan-march-194027542_large.jpg?alt=media&token=0dffb85f-7ea8-416b-9749-ffea866163ce",
                "_id": "66a47b3f2beb0cfe8eaa50a3"
            }
        ],
        "negotiable": true,
        "description": "<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">Nissan K10 කාරය ඉක්මනින් විකිණේ</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">1992 නිෂ්පාදිත වර්ෂය</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">1000CC එන්ජිම</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">A/C 100%</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">ඔරිජිනල්ම බොඩි තත්වය</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">ටින් බොඩි දිරුම් කිසිවක් නොමැත</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">අනර්ඝ ධාවනය</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">සියලුම ලයිට් මීටර් ඔරිජිනල් තත්වයෙන් වැඩ</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">ඩෑෂ් බෝඩ් ඇතුළුව ඇතුලත 100%</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">ඔරිජිනල් දොර බෝඩ්</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">අලුත් බැට්ටරිය</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">පෙට්‍රල් 16-18 ත් අතර වැඩ</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">ඔරිජිනල් තත්වයේ පවතින හොද වාහනයක් සොයන්නෙකුට</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">ඔරිජිනල් පොත ඇතුළු ලියකියවිලි සියල්ල</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">ලක්ෂ 9 ක් ෆිනෑන්ස් ගත හැක</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">වැඩි විස්තර සදහා අමතන්න</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(17, 17, 17);\">0766102600</span></p>",
        "plane": "Silver",
        "title": "Nissan March",
        "city": "Kegalle/Mawanella",
        "mobileNumber": "(076) 610-2600",
        "whatsappNumber": "(076) 610-2600",
        "price": "Rs 1,400,000",
        "socialIcon": [
            "heart"
        ],
        "verify": true,
        "postId": "66a47b3f2beb0cfe8eaa50a4",
        "createdAt": "2024-07-27T04:44:47.128Z",
        "updatedAt": "2024-07-27T04:45:05.126Z",
        "__v": 0
    },
    {
        "_id": "669fa2ef1cd8f5abe0000738",
        "userId": "6661f7790b2cabbbaa60ed27",
        "brand": "Hatchback",
        "model": "Hatchback",
        "trimEdition": "-",
        "yearOfManufacture": "2019",
        "mileage": " 16300 km",
        "engineCapacity": "3",
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "bodyType": "Sedan",
        "category": [
            "Cars"
        ],
        "images": [
            {
                "imageUrl": "https://firebasestorage.googleapis.com/v0/b/datamithurunode.appspot.com/o/images%2Ftoyota-tank-1442596372_large.jpg?alt=media&token=cb0e0095-4dd7-404c-b30f-7a8796b74076",
                "_id": "669fa2ef1cd8f5abe0000739"
            },
            {
                "imageUrl": "https://firebasestorage.googleapis.com/v0/b/datamithurunode.appspot.com/o/images%2Ftoyota-tank-1747124239_large.jpg?alt=media&token=99bb124e-97b5-4619-8e06-80893d8be311",
                "_id": "669fa2ef1cd8f5abe000073a"
            }
        ],
        "negotiable": true,
        "description": "<p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">A/C: Front</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">Navigation System</span></p><ul><li><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\">Power Locks</li><li><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\">Remote Keyless Entry</li><li><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\">Airbag: Driver</li><li><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\">Alloy Wheels</li><li><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\">Sunroof/Moonroof</li><li><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\">Third Row Seats</li><li><img src=\"https://www.autolanka.com/templates/auto_nova/img/blank.gif\">Tow Package</li></ul><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* 1 st owner</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* 1000 cc Turbo engine</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* May 2020 Registration</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* Dual Power Doors</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* LED (Head Lights / Fog lamps)</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* Cruise Control</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* Climate control A/C (Auto A/C)</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* Seat heaters</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* Auto Headlight and Auto Headlight Dim</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* Lane Assist</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* Auto break</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* Auto Stop function</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* 8 Parking sensors</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* 6 Speaker Sound system</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* Android multimedia player / sub woofer</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* dash cam and rear cam</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* 15'' inch Original Alloy wheel</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* Multi Function Steering Wheel</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* 2 Tone Color</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* 2 Original Remote Key</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* Original Owners Manual</span></p><p><span style=\"color: rgb(17, 17, 17); background-color: rgb(255, 255, 255);\">* Personal Imported From Japan(All Document)</span></p>",
        "plane": "Silver",
        "title": "Toyota Tank 2019",
        "city": "Galle/Ambalangoda",
        "mobileNumber": "(077) 695-3542",
        "whatsappNumber": "(077) 695-3542",
        "price": "Rs 11,800,000",
        "socialIcon": [
            "heart"
        ],
        "verify": true,
        "postId": "669fa2ef1cd8f5abe000073b",
        "createdAt": "2024-07-23T12:32:47.992Z",
        "updatedAt": "2024-07-23T12:33:17.030Z",
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
