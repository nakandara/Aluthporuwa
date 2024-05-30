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
          <span className="responsive-text">Book your add today.</span>
          <br />
          <Button
            onClick={LoginPage}
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
  const [data, setData] = useState([
    {
      "_id": "6656469ace306164d5008921",
      "userId": "66437d4055b327e8eaf7b6db",
      "images": [
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/1716930202545-IMG_6172.jpeg",
              "_id": "6656469ace306164d5008922"
          }
      ],
      "description": "<p><strong>T OK❤️🌟FULL SERVICE💙🌟💙CAM SHOW AVAILABLE💛💫💙Rs.10000💵❤️💛💙</strong></p><p>Posted on 24 Jan 9:57 pm,&nbsp;<strong>polgolla</strong></p><p><br></p><p>Phone Number&nbsp;4444444444444442222222</p><p><strong>Description</strong></p><p>💙📞Chat on WhatsApp📞💙</p><p>💓 🌟0719097458🌟💓</p><p><br></p><p>🔥Hi..Have a nice day</p><p>💥Im INSHU</p><p>🔥21 years hot &amp; y girl👍</p><p>💥white skin 💛🤍</p><p>🔥High 5.1👍</p><p>💥This is My Real pictures 💯</p><p>🔥Today stay in BAMBALAPITY area</p><p><br></p><p>❤‍🔥I am doing FULL SERVICE with safety (with condom)</p><p>❤‍🔥I have a very safety and very clean place</p><p>❤‍🔥Available in car parking HIDDEN IN location</p><p><br></p><p>💫❤️FULL SERVICE CHARGES❤️💫</p><p><br></p><p>🧶1 Hour 1 Shot Rs 10000/=( without Room )</p><p><br></p><p>🧶2 hour 2 Shot Rs.18000(with out Room )</p><p><br></p><p>🧶3 Hour 2 Shot Rs25000 (without Room)</p><p><br></p><p>🧶Full Night For</p><p>Rs.30000 unlimited shots ( with out Room )</p><p><br></p><p>🌹💛My Conditions 💛🌹</p><p><br></p><p>🌺 Bo.obs Suck OK ✔️</p><p>🌺Suck Ok✔️[ WITHOUT CONDOM ]...</p><p>🌺 Lip Kiss ✔️ ...</p><p>🌺 69 Position Ok ✔️ ....</p><p>🌺 Lik🤪ing Ok ✔️ ...</p><p>🌺 Any Position Ok ✔️ ...</p><p>🌺 NO Anal ❌...</p><p><br></p><p>🌟🌹🌺 Visit OK ( + )Rs3000 TEXI Chg Deposit 1st I will comfrom VISIT OK 🌺🌹</p><p><br></p><p>❤️☘️Cam show Available</p>",
      "title": "Yyyyyyyyyy",
      "city": "godagama",
      "mobileNumber": "0715297881",
      "whatsappNumber": "0715297881",
      "price": "2000",
      "category": [
          "Spa"
      ],
      "socialIcon": [
          "heart"
      ],
      "verify": true,
      "postId": "6656469ace306164d5008923",
      "createdAt": "2024-05-28T21:03:22.725Z",
      "updatedAt": "2024-05-28T21:03:48.164Z",
      "__v": 0
  },
  {
      "_id": "665635ffb3e0565b9d59bb16",
      "userId": "66437d4055b327e8eaf7b6db",
      "images": [
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/1716925951234-IMG_1051%20%282%29.JPG",
              "_id": "665635ffb3e0565b9d59bb17"
          },
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/1716925951238-WhatsApp%20Image%202024-05-24%20at%2017.52.44.jpeg",
              "_id": "665635ffb3e0565b9d59bb18"
          }
      ],
      "description": "<p>cssccscsccsccsvsvsvsvsv vsvsvsvv scfs <span style=\"background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);\">[Message clipped]&nbsp;&nbsp;</span></p><p><a href=\"https://mail.google.com/mail/u/0?ui=2&amp;ik=89564a1cbd&amp;view=lg&amp;permmsgid=msg-f:1800101404795616155\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(17, 85, 204);\">View entire messagescfssc svsvv <em>svsv </em></a></p><p><strong style=\"background-color: rgb(255, 255, 255); color: rgb(17, 85, 204);\"><em>ffsfs gsgsv </em></strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);\">[Message clipped]&nbsp;&nbsp;</span></p><ul><li><a href=\"https://mail.google.com/mail/u/0?ui=2&amp;ik=89564a1cbd&amp;view=lg&amp;permmsgid=msg-f:1800101404795616155\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(17, 85, 204);\">View entire message</a></li></ul><p><br></p><p><br></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);\">[Message clipped]&nbsp;&nbsp;</span></p><p><a href=\"https://mail.google.com/mail/u/0?ui=2&amp;ik=89564a1cbd&amp;view=lg&amp;permmsgid=msg-f:1800101404795616155\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(17, 85, 204);\">View entire message</a></p><ol><li><span style=\"background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);\">[Message clipped]&nbsp;&nbsp;</span></li><li><a href=\"https://mail.google.com/mail/u/0?ui=2&amp;ik=89564a1cbd&amp;view=lg&amp;permmsgid=msg-f:1800101404795616155\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: rgb(255, 255, 255); color: rgb(17, 85, 204);\">View entire message</a></li><li><br></li><li><br></li><li><br></li><li><br></li></ol><h3><br></h3>",
      "title": "svvsvs",
      "city": "Kanthale,godagama",
      "mobileNumber": "444444444444444",
      "whatsappNumber": "55555555555555",
      "price": "666666666666",
      "category": [
          "full service"
      ],
      "socialIcon": [
          "heart"
      ],
      "verify": true,
      "postId": "665635ffb3e0565b9d59bb19",
      "createdAt": "2024-05-28T19:52:31.516Z",
      "updatedAt": "2024-05-28T19:52:52.733Z",
      "__v": 0
  },
  {
      "_id": "665632701515be9b39abd691",
      "userId": "66437d4055b327e8eaf7b6db",
      "images": [
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/1716925040696-IMG_1051%20%282%29.JPG",
              "_id": "665632701515be9b39abd692"
          },
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/1716925040710-1712047861.jpg",
              "_id": "665632701515be9b39abd693"
          }
      ],
      "description": "<p>To integrate <code style=\"color: var(--tw-prose-code);\">react-quill</code> <strong>into your form for the description</strong> input, you'll need to install <code style=\"color: var(--tw-prose-code);\">react-quill</code> <em>and its type definitions if you're using TypeScript</em>. Then, update your component to use <code style=\"color: var(--tw-prose-code);\">ReactQuill</code> for the description field instead of <code style=\"color: var(--tw-prose-code);\">TextareaAutosize</code>. 🥰🥰🥰🥰</p><p><br></p><h1>scscscscc🥰🥰🥰</h1><p><br></p><ol><li><em>and its type definitions if you're using TypeScript</em>. Then, update your component to use <code style=\"color: var(--tw-prose-code); background-color: rgb(240, 240, 240);\">ReactQuill</code> for the description field instead of <code style=\"color: var(--tw-prose-code); background-color: rgb(240, 240, 240);\">TextareaAutosize</code>.</li><li><em>and its type definitions if you're using TypeScript</em>. Then, update your component to use <code style=\"color: var(--tw-prose-code); background-color: rgb(240, 240, 240);\">ReactQuill</code> for the description field instead of <code style=\"color: var(--tw-prose-code); background-color: rgb(240, 240, 240);\">TextareaAutosize</code>.</li></ol><p><em>and its type definitions if you're using TypeScript</em>. Then, update your component to use <code style=\"color: var(--tw-prose-code); background-color: rgb(240, 240, 240);\">ReactQuill</code> for the description field instead of <code style=\"color: var(--tw-prose-code); background-color: rgb(240, 240, 240);\">TextareaAutosize</code>.</p><p><br></p><ol><li><em>and its type definitions if you're using TypeScript</em>. Then, update your component to use <code style=\"color: var(--tw-prose-code); background-color: rgb(240, 240, 240);\">ReactQuill</code> for the description field instead of <code style=\"color: var(--tw-prose-code); background-color: rgb(240, 240, 240);\">TextareaAutosize</code>.</li></ol><p><strong>                           <u>dghdgdgdgdgdgdg</u></strong>🥰🥰</p><p><br></p><ul><li><em>and its type definitions if you're using TypeScript</em>. Then, update your component to use <code style=\"color: var(--tw-prose-code); background-color: rgb(240, 240, 240);\">ReactQuill</code> for the description field instead of <code style=\"color: var(--tw-prose-code); background-color: rgb(240, 240, 240);\">TextareaAutosize</code>.</li><li><em>and its type definitions if you're using TypeScript</em>. Then, update your component to use <code style=\"color: var(--tw-prose-code); background-color: rgb(240, 240, 240);\">ReactQuill</code> for the description field instead of <code style=\"color: var(--tw-prose-code); background-color: rgb(240, 240, 240);\">TextareaAutosize</code>.</li></ul><p><br></p><p><br></p><p><br></p>",
      "title": "To integrate react-quill into your form for the description input, follow these steps:",
      "city": "Kanthale,godagama",
      "mobileNumber": "444444444444444",
      "whatsappNumber": "55555555555555",
      "price": "666666666666",
      "category": [
          "full service"
      ],
      "socialIcon": [
          "heart"
      ],
      "verify": true,
      "postId": "665632701515be9b39abd694",
      "createdAt": "2024-05-28T19:37:20.995Z",
      "updatedAt": "2024-05-28T19:37:38.265Z",
      "__v": 0
  },
  {
      "_id": "66562b5dca30ee78479ae300",
      "userId": "66437d4055b327e8eaf7b6db",
      "images": [
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/1716923229198-WhatsApp%20Image%202024-05-24%20at%2017.52.44.jpeg",
              "_id": "66562b5dca30ee78479ae301"
          }
      ],
      "description": "<h2><strong>wewewew</strong></h2>",
      "title": "weewewe",
      "city": "Kanthale",
      "mobileNumber": "444444444444442",
      "whatsappNumber": "55555555555555",
      "price": "666666666666",
      "category": [
          "full service"
      ],
      "socialIcon": [
          "heart"
      ],
      "verify": true,
      "postId": "66562b5dca30ee78479ae302",
      "createdAt": "2024-05-28T19:07:09.516Z",
      "updatedAt": "2024-05-28T19:07:42.136Z",
      "__v": 0
  },
  {
      "_id": "6652df891e8f421f97dda16f",
      "userId": "6652dd18f8ed2c777be2ff64",
      "images": [
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/1716707209190-IMG-20240506-WA0030.jpg",
              "_id": "6652df891e8f421f97dda170"
          },
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/1716707209256-94757150985_status_6e08bf6c1e5247f8a7952871af39cbfa.jpg",
              "_id": "6652df891e8f421f97dda171"
          }
      ],
      "description": "For test otp ඔබ copy කරන සෑම වාක්‍යයක්ම clip එකක් ලෙසින් මෙහි දිස්වෙයි. එම clips එබීමෙන් වාක්‍යයම එකවර ලිවිය හැක.",
      "title": "Test otp",
      "city": "polgolla,godagama",
      "mobileNumber": "0715297881",
      "whatsappNumber": "0715297881",
      "price": "2600",
      "category": [
          "Full service "
      ],
      "socialIcon": [
          "heart"
      ],
      "verify": true,
      "postId": "6652df891e8f421f97dda172",
      "createdAt": "2024-05-26T07:06:49.482Z",
      "updatedAt": "2024-05-26T07:09:03.639Z",
      "__v": 0
  },
  {
      "_id": "664f11703e39a16127117008",
      "userId": "66437d4055b327e8eaf7b6db",
      "images": [
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/1716457840271-IMG_6084.jpeg",
              "_id": "664f11703e39a16127117009"
          },
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/1716457840275-IMG_6086.jpeg",
              "_id": "664f11703e39a1612711700a"
          }
      ],
      "description": "discription second",
      "title": "Title second",
      "city": "polgolla",
      "mobileNumber": "33",
      "whatsappNumber": "33",
      "price": "333",
      "category": [
          "Bbeb"
      ],
      "socialIcon": [
          "heart"
      ],
      "verify": true,
      "postId": "664f11703e39a1612711700b",
      "createdAt": "2024-05-23T09:50:40.489Z",
      "updatedAt": "2024-05-23T09:51:15.692Z",
      "__v": 0
  },
  {
      "_id": "664f007809634ad58acd9cc4",
      "userId": "66473dc955b327e8eaf7b7a0",
      "images": [
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/1716453495659-Screenshot%20from%202024-05-20%2023-07-50.png",
              "_id": "664f007809634ad58acd9cc5"
          }
      ],
      "description": "l;;l;l;lhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
      "title": "dvxdvdvdvdvkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
      "city": "polgolla",
      "mobileNumber": "444444444444444",
      "whatsappNumber": "55555555555555",
      "price": "666666666666",
      "category": [
          "full service"
      ],
      "socialIcon": [
          "heart"
      ],
      "verify": true,
      "postId": "664f007809634ad58acd9cc6",
      "createdAt": "2024-05-23T08:38:16.056Z",
      "updatedAt": "2024-05-23T08:38:32.020Z",
      "__v": 0
  },
  {
      "_id": "664bac73f3d5a177d009e173",
      "userId": "66437d4055b327e8eaf7b6db",
      "images": [
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/1716235378179-F7453FF4-22EB-4DC4-90B4-A4E9D898D955-removebg-preview.png",
              "_id": "664bac73f3d5a177d009e174"
          },
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/1716235378182-IMG_1051.JPG",
              "_id": "664bac73f3d5a177d009e175"
          }
      ],
      "description": "ebeebdbebebe\r\n\r\n\r\n\r\nD\r\nD\r\nD\r\nD\r\nD\r\nD\r\nD\r\nD",
      "title": "\r\nA\r\nAma\r\n\r\nA\r\nA\r\nAmammamnsnns\r\nS\r\nS\r\nS",
      "city": "polgolla,godagama",
      "mobileNumber": "0715297881",
      "whatsappNumber": "0725678991",
      "price": "20000",
      "category": [
          "spa"
      ],
      "socialIcon": [
          "heart"
      ],
      "verify": true,
      "postId": "664bac73f3d5a177d009e176",
      "createdAt": "2024-05-20T20:02:59.276Z",
      "updatedAt": "2024-05-20T20:04:21.997Z",
      "__v": 0
  },
  {
      "_id": "664b807e9c9fac2f72c19e5b",
      "userId": "66473dc955b327e8eaf7b7a0",
      "images": [
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/1716224126046-Screenshot%20from%202024-05-20%2018-08-17.png",
              "_id": "664b807e9c9fac2f72c19e5c"
          },
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/1716224126085-Screenshot%20from%202024-05-20%2015-27-41.png",
              "_id": "664b807e9c9fac2f72c19e5d"
          }
      ],
      "description": "ස්තුතියි\r\nඔබගේ දැන්වීම අපට සාර්ථකව ලැබී ඇත.\r\nඔබගේ දැන්වීම\r\nLIVE\r\nකිරීමට කරුණාකර අදාල මුදල ගෙවා රිසිට් පත WhatsApp කරන්න.\r\n\r\nWe have successfully received your ad. Please Pay the relevant amount and WhatsApp the receipt to make it LIVE\r\n\r\n\r\n +94771318189\r\n\r\nVIP ADS: Rs 3000/-\r\nSUPER ADS: Rs 1500/-\r\nNORMAL ADS: Rs 700/-\r\n\r\nVIP VIDEO ADS RS 4000/-\r\nSUPER VIDEO ADS RS 2500/\r\nRemarks සදහා ඔබගේ දැන්වීමට අදාළ දුරකථන අංකය පමණක් යොදන්න\r\n\r\n\r\nPayment Options\r\n\r\n\r\n 0771318189\r\n\r\n\r\n\r\n\r\n 039200120063553\r\n\r\n DE SILVA\r\n\r\nPeople's Bank\r\n\r\nKalutara\r\n\r\n\r\n\r\n 003101001947\r\n\r\n De Silva\r\n\r\nCargill's Bank\r\n\r\nColombo\r\n\r\nMain Links\r\nHome\r\nAbout Us\r\nContact Us\r\nFAQ\r\nTerms of Use\r\nPrivacy Policy\r\nAgents\r\nContact Agent\r\nFake Ads\r\nFake Details\r\nAds\r\nPOST AD\r\nAgent Login\r\nImportant links\r\nlive cam\r\nFull service\r\nSpa\r\nRooms\r\nBoys\r\nVisit\r\nShe male\r\nMassage\r\nJobs\r\nAd agent\r\nPersonal ads\r\nNra\r\nඔබගේ ඕනෑම දැන්වීමක් අප වෙබ් අඩවියේ පලකල හැකි අතර ඔබ පලකරන දැන්වීමේ කිසිදු වගකීමක් අප විසින් නොගන්න බව දන්වා සිටිමු. මෙය නිදහස් වෙබ් අඩවියකි. කරුණාකර ගෙවීම් (බැංකු, ජංගම, ආදිය) ගැන ඉතා සැලකිලිමත් වන්න. මුදල් මාරු කිරීමට අනන්‍යතා තොරතුරු ලබා ගන්න. අපි සපයන්නේ මාර්ගගත වෙළඳ දැන්වීම් පමණි. ඔබේ ගනුදෙනු සඳහා අපි වගකිව යුතු නොවේ. Please be very careful about payments (Bank, Mobile, etc). Do a video call or get identity details before transfer money. We only provide online advertising. We are not responsible for your transactions.\r\n\r\nCopyright © 2023 Lanka Ads. All Rights Reserved.",
      "title": "ස්තුතියි\r\nඔබගේ දැන්වීම අපට සාර්ථකව ලැබී ඇත.\r\nඔබගේ දැන්වීම\r\nLIVE\r\nකිරීමට කරුණාකර අදාල මුදල ගෙවා රිසිට් පත WhatsApp කරන්න.",
      "city": "polgolla,Kanthale",
      "mobileNumber": "0715297881",
      "whatsappNumber": "0715297883",
      "price": "6003",
      "category": [
          "full service"
      ],
      "socialIcon": [
          "heart"
      ],
      "verify": true,
      "postId": "664b807e9c9fac2f72c19e5e",
      "createdAt": "2024-05-20T16:55:26.384Z",
      "updatedAt": "2024-05-20T16:56:51.091Z",
      "__v": 0
  },
  {
      "_id": "664a19c0abd2c0d7901b4585",
      "userId": "66437d4055b327e8eaf7b6db",
      "images": [
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/Screenshot%20from%202024-05-14%2022-44-03.png",
              "_id": "664a19c0abd2c0d7901b4586"
          },
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/N-43583346.webp",
              "_id": "664a19c0abd2c0d7901b4587"
          },
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/N-45698326.webp",
              "_id": "664a19c0abd2c0d7901b4588"
          }
      ],
      "description": "fwwf",
      "title": "dwd",
      "city": "polgolla",
      "mobileNumber": "1313",
      "whatsappNumber": "3113",
      "price": "2424",
      "category": [
          "wfwf"
      ],
      "socialIcon": [
          "heart"
      ],
      "verify": true,
      "postId": "664a19c0abd2c0d7901b4589",
      "createdAt": "2024-05-19T15:24:48.059Z",
      "updatedAt": "2024-05-19T15:26:12.393Z",
      "__v": 0
  },
  {
      "_id": "6649f7f677c6fad937110562",
      "userId": "66437d4055b327e8eaf7b6db",
      "images": [
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/1716123629796-Screenshot%20from%202024-05-10%2015-08-24.png",
              "_id": "6649f7f677c6fad937110563"
          },
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/1716123629814-N-75652274.webp",
              "_id": "6649f7f677c6fad937110564"
          }
      ],
      "description": "deg",
      "title": "gfgd",
      "city": "godagama",
      "mobileNumber": "666",
      "whatsappNumber": "3333",
      "price": "666666666666",
      "category": [
          "full service"
      ],
      "socialIcon": [
          "heart"
      ],
      "verify": true,
      "postId": "6649f7f677c6fad937110565",
      "createdAt": "2024-05-19T13:00:38.789Z",
      "updatedAt": "2024-05-19T13:00:54.018Z",
      "__v": 0
  },
  {
      "_id": "6649be8c9302793f715d93cc",
      "userId": "66437d4055b327e8eaf7b6db",
      "images": [
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/Screenshot%20from%202024-05-19%2001-08-01.png",
              "_id": "6649be8c9302793f715d93cd"
          }
      ],
      "description": "fs",
      "title": "scsc",
      "city": "polgolla",
      "mobileNumber": "444444444444444",
      "whatsappNumber": "55555555555555",
      "price": "666666666666",
      "category": [
          "full service"
      ],
      "socialIcon": [
          "heart"
      ],
      "verify": true,
      "postId": "6649be8c9302793f715d93ce",
      "createdAt": "2024-05-19T08:55:40.836Z",
      "updatedAt": "2024-05-19T15:27:49.365Z",
      "__v": 0
  },
  {
      "_id": "66489ac8abd2c0d7901b421d",
      "userId": "66473dc955b327e8eaf7b7a0",
      "images": [
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/Screenshot%20from%202024-05-14%2022-46-20.png",
              "_id": "66489ac8abd2c0d7901b421e"
          }
      ],
      "description": "fnfnf",
      "title": "fbnfbnf",
      "city": "polgolla",
      "mobileNumber": "352353535",
      "whatsappNumber": "666746747",
      "price": "666666666666",
      "category": [
          "fnfnfn"
      ],
      "socialIcon": [
          "heart"
      ],
      "verify": true,
      "postId": "66489ac8abd2c0d7901b421f",
      "createdAt": "2024-05-18T12:10:48.547Z",
      "updatedAt": "2024-05-19T20:55:42.931Z",
      "__v": 0
  },
  {
      "_id": "66485ef1abd2c0d7901b4162",
      "userId": "66437d4055b327e8eaf7b6db",
      "images": [
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/IMG-20240506-WA0021.jpg",
              "_id": "66485ef1abd2c0d7901b4163"
          },
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/IMG-20240416-WA0006.jpg",
              "_id": "66485ef1abd2c0d7901b4164"
          }
      ],
      "description": "Sex fun threesome ccouple sawping",
      "title": "Sex fun play toy come amd enjoy toy",
      "city": "Kanthale,polgolla",
      "mobileNumber": "0715297881",
      "whatsappNumber": "0715297881",
      "price": "2000",
      "category": [
          "Full service "
      ],
      "socialIcon": [
          "heart"
      ],
      "verify": true,
      "postId": "66485ef1abd2c0d7901b4165",
      "createdAt": "2024-05-18T07:55:29.409Z",
      "updatedAt": "2024-05-18T08:02:08.121Z",
      "__v": 0
  },
  {
      "_id": "66478bd765dbf9b38c1bb6ff",
      "userId": "66473dc955b327e8eaf7b7a0",
      "images": [
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/Screenshot%20from%202024-05-08%2012-04-36.png",
              "_id": "66478bd765dbf9b38c1bb700"
          }
      ],
      "description": "fsfsfsa",
      "title": "5ffgfgfgfgfg",
      "city": "polgolla",
      "mobileNumber": "22222",
      "whatsappNumber": "24444",
      "price": "22324242424",
      "category": [
          "spa"
      ],
      "socialIcon": [
          "heart"
      ],
      "verify": true,
      "postId": "66478bd765dbf9b38c1bb701",
      "createdAt": "2024-05-17T16:54:47.214Z",
      "updatedAt": "2024-05-17T16:55:18.506Z",
      "__v": 0
  },
  {
      "_id": "66478ae9c7c2d4a604e02fc2",
      "userId": "66473dc955b327e8eaf7b7a0",
      "images": [
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/1715484455.jpg",
              "_id": "66478ae9c7c2d4a604e02fc3"
          }
      ],
      "description": "scscsc",
      "title": "scscsc",
      "city": "polgolla",
      "mobileNumber": "244242",
      "whatsappNumber": "2432532",
      "price": "2222222222",
      "category": [
          "fwwfwf"
      ],
      "socialIcon": [
          "heart"
      ],
      "verify": true,
      "postId": "66478ae9c7c2d4a604e02fc4",
      "createdAt": "2024-05-17T16:50:50.007Z",
      "updatedAt": "2024-05-17T16:51:27.221Z",
      "__v": 0
  },
  {
      "_id": "66437962795b434d78f3e30d",
      "userId": "6639fa6c55b327e8eaf7b5d6",
      "images": [
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/Screenshot%20from%202024-05-14%2013-41-51.png",
              "_id": "66437962795b434d78f3e30e"
          }
      ],
      "description": "tetete",
      "title": "et",
      "city": "polgolla",
      "mobileNumber": "444444444444444",
      "whatsappNumber": "55555555555555",
      "price": "3434343",
      "category": [
          "et"
      ],
      "socialIcon": [
          "heart"
      ],
      "verify": true,
      "postId": "66437962795b434d78f3e30f",
      "__v": 0
  },
  {
      "_id": "66473c089b55ea90ba902038",
      "userId": "660fc738f7361dd96696cce5",
      "images": [
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/Screenshot%20from%202024-05-14%2022-46-04.png",
              "_id": "66473c089b55ea90ba902039"
          },
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/Screenshot%20from%202024-05-14%2022-47-40.png",
              "_id": "66473c089b55ea90ba90203a"
          }
      ],
      "description": "fhfgjhgjjgjgj",
      "title": "fsfsfsfs",
      "city": "godagama",
      "mobileNumber": "444444444444444",
      "whatsappNumber": "55555555555555",
      "price": "666666666666",
      "category": [
          "sfsasfasf"
      ],
      "socialIcon": [
          "heart"
      ],
      "verify": true,
      "postId": "66473c089b55ea90ba90203b",
      "__v": 0
  },
  {
      "_id": "66473c8d9b55ea90ba902093",
      "userId": "660fc738f7361dd96696cce5",
      "images": [
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/N-74532519.webp",
              "_id": "66473c8d9b55ea90ba902094"
          },
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/N-41166419.webp",
              "_id": "66473c8d9b55ea90ba902095"
          }
      ],
      "description": "ssssssssssssssssss",
      "title": "cccccccccccccccs",
      "city": "polgolla,Kanthale",
      "mobileNumber": "4444444444444442",
      "whatsappNumber": "5555555555555567",
      "price": "666666666666",
      "category": [
          "spa"
      ],
      "socialIcon": [
          "heart"
      ],
      "verify": true,
      "postId": "66473c8d9b55ea90ba902096",
      "__v": 0
  },
  {
      "_id": "66473f689b55ea90ba902142",
      "userId": "66473dc955b327e8eaf7b7a0",
      "images": [
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/N-97001070.webp",
              "_id": "66473f689b55ea90ba902143"
          },
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/N-41166419.webp",
              "_id": "66473f689b55ea90ba902144"
          },
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/N-74532519.webp",
              "_id": "66473f689b55ea90ba902145"
          },
          {
              "imageUrl": "https://world-api-demo.s3.amazonaws.com/N-97109216.webp",
              "_id": "66473f689b55ea90ba902146"
          }
      ],
      "description": "😍 l m speak sinhala and English ✔️\r\n👉 Visit Ok. 5star Hotel Only . (10000)\r\n\r\n\r\n🔥IM සදමාලි ( sadamali )\r\n🔥 30 Years hot & y girl\r\n👉l am Doing Full Service only ✔️\r\n👉Today stay In bambalapitiya ✔️\r\n👉 l m in my Room With this suot 💯\r\n👉lm only take one at one time ✔️\r\n👉only me 💯\r\n👉 this one is 100%Real proflle Dont worry about that 💯\r\n🔥 Full service charges\r\n\r\n👉 5000)ONE HOUR ONE SOHT ) A/C with my Room charges\r\n\r\n👉6000) ONE HOUR 2 SHOT) With my Room Charges\r\n\r\n👉 full night ok 25000 with my Room charges\r\n\r\n👉you can stay with me until the time is over 💯\r\n👉 i give my service as at the ad 💯\r\n\r\n🥰MY CONDITION\r\n👉Licking ok😜\r\n👉 lip kis ok 💋\r\n👉Doggye Style ok✔️\r\n👉 any posison ok✔️\r\n👉 boobs sk ok😜✔️\r\n👉 big boobs siz 41 🍅\r\n👉 suck ok without condom💯\r\n👉 (Enjoy with Safety\r\nwith condom )💯\r\n👉🏻l m very clean and Freindly & Teen Girl...\r\n👉🏻 come and Enjoy with unlimited Fun...\r\n\r\n🚫 No Anal 🚫No Cam Service 🚫No A N L 🚫No massje 🚫No Treesom 🚫no selection🚫\r\n\r\n👉❌I AM NO DRENKS AND SMOKiNg 👉🏻Not My Locatin 🚫\r\n\r\n♥️I Have Safety my Hotel room 💯 bambalapitiya ,🌹💗l have a 100%Very Safety and very clean my place & Car Park Available ....🚙🛵\r\n\r\n🥰Welcome Genuine Caustomer 🥰 ( Please Dont Time Pass ).. 😍Thank you❤️\r\n0742113594\r\n\r\n👉 (Only Take 18+ ) Sl Ads , lanka ads , Sl ad , lanka add\r\n\r\n",
      "title": "🍓5000)ONE HOUR ONE SOHT)2 SOHT 6000 (with my Room ) doing FUll SERVlCE Only ) i am in bambalapitiya BEAUTY Girl බම්බලපිටිය )No A N L 🚫 VIST ok 10000 5star hotel only ✔️",
      "city": "godagama,polgolla",
      "mobileNumber": "0715297881",
      "whatsappNumber": "55555555555555",
      "price": "222222",
      "category": [
          "full service"
      ],
      "socialIcon": [
          "heart"
      ],
      "verify": true,
      "postId": "66473f689b55ea90ba902147",
      "__v": 0
  },
  ]);



  console.log(data,'6666666666666666');
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
           
          }}
        >
         

          {data.map((post, index) => (
            <div key={index}>
              <div key={index} height={200} offset={100}>
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
            </div>
          ))}
          {/* Change the background color to green */}
        </Box>
      </div>
    </div>
  );
}
