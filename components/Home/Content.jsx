import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const dialogStyle = {
  width: "100%",
  height: "80%", // Default width for larger screens
  maxWidth: "none", // Remove the max-width constraint
};

export default function Elevation() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const popupAccount = () => {
    handleOpen();
  };


  const boxStyle = {
    border: '5px solid #ccc', // Border style and color
    padding: '20px', // Padding inside the box
  };
  
  const content = `
    Live Cam සදහා වන "verified" හා "verified 100% cash back Guaranteed"
    සහ෭ත live cam සෙවාවන්හි "verified" Label සහ෭ත දැන්වීම් අප ආයතනය
    මගින් සත්‍ය දැන්වීම් බවට තහවුරු කර ඇති අතර "verified 100% cash back
    Guaranteed" Label සහ෭ත දැන්වීම් සදහා ආයතනය මගින් වගකියනු ඇත.
    "verified 100% cash back Guaranteed" ලෙස නම්කර ඇති දැන්වීමක් මගින්
    පමණක් ඔබ යම්කිසි වංචාවලට හසුවුවහොත් අප ආයතනය මගින් ඔබට ඔබගේ මුදල
    නැවත ලබා ගත හැකිය. Live Cam සෙවාවන් ලබාගැනීමේදී හැකි සැමවිටම
    "verified" හෝ "verified 100% cash back Guaranteed" Label සහ෭ත
    දැන්වීම් මගින් ඔබට ගුණාත්ම සේවාවක් ලබාගත හැක "verified" හා "verified
    100% cash back Guaranteed" Label සහ෭ත දැන්වීමක් මගින් වංචාවකට
    අසුවුවහොත් පහත සදහන් අත්යවශ තොරතුරු සමග ඔබගේ පැමිණිල්ල අප වෙත
    whatsapp කරන්න 1 . Ad Screenshot Or Link (දැන්වීමේ සදහන් දුරකථන
    අංකයම තිබිය යුතුය. ) 2 . Bank Transfer Details 3 . Chat History
    Details
  `;
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <div className="card">
          <div onClick={popupAccount} className="cardtemp ">
            <div className="center flex">
              <div className="oneinside">
                <div className="det_one">
                  <div>නම:</div>
                  <div>චලනී පබෝදා</div>
                </div>
                <div className="det_one">
                  <div className="det_sec">වයස:</div>
                  <div>21</div>
                </div>
                <div className="det_one">
                  <div>ලග්නය:</div>
                  <div>කටක</div>
                </div>
                <div className="det_one">
                  <div>උපන් දිනය:</div>
                  <div>1998.09.10</div>
                </div>
              </div>
              <div className="secondside">
                <CardMedia
                  sx={{ height: "100%" }}
                  image="/media/chamodh.jpg"
                  title="green iguana"
                />
              </div>
            </div>
          </div>

          <div onClick={popupAccount} className="cardtemp ">
            <div className="center flex">
              <div className="oneinside">
                <div className="det_one">
                  <div>නම:</div>
                  <div>චලනී පබෝදා</div>
                </div>
                <div className="det_one">
                  <div className="det_sec">වයස:</div>
                  <div>21</div>
                </div>
                <div className="det_one">
                  <div>ලග්නය:</div>
                  <div>කටක</div>
                </div>
                <div className="det_one">
                  <div>උපන් දිනය:</div>
                  <div>1998.09.10</div>
                </div>
              </div>
              <div className="secondside">
                <CardMedia
                  sx={{ height: "100%" }}
                  image="/media/chamodh.jpg"
                  title="green iguana"
                />
              </div>
            </div>
          </div>
          <div onClick={popupAccount} className="cardtemp ">
            <div className="center flex">
              <div className="oneinside">
                <div className="det_one">
                  <div>නම:</div>
                  <div>චලනී පබෝදා</div>
                </div>
                <div className="det_one">
                  <div className="det_sec">වයස:</div>
                  <div>21</div>
                </div>
                <div className="det_one">
                  <div>ලග්නය:</div>
                  <div>කටක</div>
                </div>
                <div className="det_one">
                  <div>උපන් දිනය:</div>
                  <div>1998.09.10</div>
                </div>
              </div>
              <div className="secondside">
                <CardMedia
                  sx={{ height: "100%" }}
                  image="/media/chamodh.jpg"
                  title="green iguana"
                />
              </div>
            </div>
          </div>
          <div onClick={popupAccount} className="cardtemp ">
            <div className="center flex">
              <div className="oneinside">
                <div className="det_one">
                  <div>නම:</div>
                  <div>චලනී පබෝදා</div>
                </div>
                <div className="det_one">
                  <div className="det_sec">වයස:</div>
                  <div>21</div>
                </div>
                <div className="det_one">
                  <div>ලග්නය:</div>
                  <div>කටක</div>
                </div>
                <div className="det_one">
                  <div>උපන් දිනය:</div>
                  <div>1998.09.10</div>
                </div>
              </div>
              <div className="secondside">
                <CardMedia
                  sx={{ height: "100%" }}
                  image="/media/chamodh.jpg"
                  title="green iguana"
                />
              </div>
            </div>
          </div>
          <div onClick={popupAccount} className="cardtemp ">
            <div className="center flex">
              <div className="oneinside">
                <div className="det_one">
                  <div>නම:</div>
                  <div>චලනී පබෝදා</div>
                </div>
                <div className="det_one">
                  <div className="det_sec">වයස:</div>
                  <div>21</div>
                </div>
                <div className="det_one">
                  <div>ලග්නය:</div>
                  <div>කටක</div>
                </div>
                <div className="det_one">
                  <div>උපන් දිනය:</div>
                  <div>1998.09.10</div>
                </div>
              </div>
              <div className="secondside">
                <CardMedia
                  sx={{ height: "100%" }}
                  image="/media/chamodh.jpg"
                  title="green iguana"
                />
              </div>
            </div>
          </div>
          <div onClick={popupAccount} className="cardtemp ">
            <div className="center flex">
              <div className="oneinside">
                <div className="det_one">
                  <div>නම:</div>
                  <div>චලනී පබෝදා</div>
                </div>
                <div className="det_one">
                  <div className="det_sec">වයස:</div>
                  <div>21</div>
                </div>
                <div className="det_one">
                  <div>ලග්නය:</div>
                  <div>කටක</div>
                </div>
                <div className="det_one">
                  <div>උපන් දිනය:</div>
                  <div>1998.09.10</div>
                </div>
              </div>
              <div className="secondside">
                <CardMedia
                  sx={{ height: "100%" }}
                  image="/media/chamodh.jpg"
                  title="green iguana"
                />
              </div>
            </div>
          </div>
          <div onClick={popupAccount} className="cardtemp ">
            <div className="center flex">
              <div className="oneinside">
                <div className="det_one">
                  <div>නම:</div>
                  <div>චලනී පබෝදා</div>
                </div>
                <div className="det_one">
                  <div className="det_sec">වයස:</div>
                  <div>21</div>
                </div>
                <div className="det_one">
                  <div>ලග්නය:</div>
                  <div>කටක</div>
                </div>
                <div className="det_one">
                  <div>උපන් දිනය:</div>
                  <div>1998.09.10</div>
                </div>
              </div>
              <div className="secondside">
                <CardMedia
                  sx={{ height: "100%" }}
                  image="/media/chamodh.jpg"
                  title="green iguana"
                />
              </div>
            </div>
          </div>
          <div onClick={popupAccount} className="cardtemp ">
            <div className="center flex">
              <div className="oneinside">
                <div className="det_one">
                  <div>නම:</div>
                  <div>චලනී පබෝදා</div>
                </div>
                <div className="det_one">
                  <div className="det_sec">වයස:</div>
                  <div>21</div>
                </div>
                <div className="det_one">
                  <div>ලග්නය:</div>
                  <div>කටක</div>
                </div>
                <div className="det_one">
                  <div>උපන් දිනය:</div>
                  <div>1998.09.10</div>
                </div>
              </div>
              <div className="secondside">
                <CardMedia
                  sx={{ height: "100%" }}
                  image="/media/chamodh.jpg"
                  title="green iguana"
                />
              </div>
            </div>
          </div>
          <div onClick={popupAccount} className="cardtemp ">
            <div className="center flex">
              <div className="oneinside">
                <div className="det_one">
                  <div>නම:</div>
                  <div>චලනී පබෝදා</div>
                </div>
                <div className="det_one">
                  <div className="det_sec">වයස:</div>
                  <div>21</div>
                </div>
                <div className="det_one">
                  <div>ලග්නය:</div>
                  <div>කටක</div>
                </div>
                <div className="det_one">
                  <div>උපන් දිනය:</div>
                  <div>1998.09.10</div>
                </div>
              </div>
              <div className="secondside">
                <CardMedia
                  sx={{ height: "100%" }}
                  image="/media/chamodh.jpg"
                  title="green iguana"
                />
              </div>
            </div>
          </div>
          <div onClick={popupAccount} className="cardtemp ">
            <div className="center flex">
              <div className="oneinside">
                <div className="det_one">
                  <div>නම:</div>
                  <div>චලනී පබෝදා</div>
                </div>
                <div className="det_one">
                  <div className="det_sec">වයස:</div>
                  <div>21</div>
                </div>
                <div className="det_one">
                  <div>ලග්නය:</div>
                  <div>කටක</div>
                </div>
                <div className="det_one">
                  <div>උපන් දිනය:</div>
                  <div>1998.09.10</div>
                </div>
              </div>
              <div className="secondside">
                <CardMedia
                  sx={{ height: "100%" }}
                  image="/media/chamodh.jpg"
                  title="green iguana"
                />
              </div>
            </div>
          </div>
          <div onClick={popupAccount} className="cardtemp ">
            <div className="center flex">
              <div className="oneinside">
                <div className="det_one">
                  <div>නම:</div>
                  <div>චලනී පබෝදා</div>
                </div>
                <div className="det_one">
                  <div className="det_sec">වයස:</div>
                  <div>21</div>
                </div>
                <div className="det_one">
                  <div>ලග්නය:</div>
                  <div>කටක</div>
                </div>
                <div className="det_one">
                  <div>උපන් දිනය:</div>
                  <div>1998.09.10</div>
                </div>
              </div>
              <div className="secondside">
                <CardMedia
                  sx={{ height: "100%" }}
                  image="/media/chamodh.jpg"
                  title="green iguana"
                />
              </div>
            </div>
          </div>
          <div onClick={popupAccount} className="cardtemp ">
            <div className="center flex">
              <div className="oneinside">
                <div className="det_one">
                  <div>නම:</div>
                  <div>චලනී පබෝදා</div>
                </div>
                <div className="det_one">
                  <div className="det_sec">වයස:</div>
                  <div>21</div>
                </div>
                <div className="det_one">
                  <div>ලග්නය:</div>
                  <div>කටක</div>
                </div>
                <div className="det_one">
                  <div>උපන් දිනය:</div>
                  <div>1998.09.10</div>
                </div>
              </div>
              <div className="secondside">
                <CardMedia
                  sx={{ height: "100%" }}
                  image="/media/chamodh.jpg"
                  title="green iguana"
                />
              </div>
            </div>
          </div>
          <div onClick={popupAccount} className="cardtemp ">
            <div className="center flex">
              <div className="oneinside">
                <div className="det_one">
                  <div>නම:</div>
                  <div>චලනී පබෝදා</div>
                </div>
                <div className="det_one">
                  <div className="det_sec">වයස:</div>
                  <div>21</div>
                </div>
                <div className="det_one">
                  <div>ලග්නය:</div>
                  <div>කටක</div>
                </div>
                <div className="det_one">
                  <div>උපන් දිනය:</div>
                  <div>1998.09.10</div>
                </div>
              </div>
              <div className="secondside">
                <CardMedia
                  sx={{ height: "100%" }}
                  image="/media/chamodh.jpg"
                  title="green iguana"
                />
              </div>
            </div>
          </div>
          <div onClick={popupAccount} className="cardtemp ">
            <div className="center flex">
              <div className="oneinside">
                <div className="det_one">
                  <div>නම:</div>
                  <div>චලනී පබෝදා</div>
                </div>
                <div className="det_one">
                  <div className="det_sec">වයස:</div>
                  <div>21</div>
                </div>
                <div className="det_one">
                  <div>ලග්නය:</div>
                  <div>කටක</div>
                </div>
                <div className="det_one">
                  <div>උපන් දිනය:</div>
                  <div>1998.09.10</div>
                </div>
              </div>
              <div className="secondside">
                <CardMedia
                  sx={{ height: "100%" }}
                  image="/media/chamodh.jpg"
                  title="green iguana"
                />
              </div>
            </div>
          </div>
          <div onClick={popupAccount} className="cardtemp ">
            <div className="center flex">
              <div className="oneinside">
                <div className="det_one">
                  <div>නම:</div>
                  <div>චලනී පබෝදා</div>
                </div>
                <div className="det_one">
                  <div className="det_sec">වයස:</div>
                  <div>21</div>
                </div>
                <div className="det_one">
                  <div>ලග්නය:</div>
                  <div>කටක</div>
                </div>
                <div className="det_one">
                  <div>උපන් දිනය:</div>
                  <div>1998.09.10</div>
                </div>
              </div>
              <div className="secondside">
                <CardMedia
                  sx={{ height: "100%" }}
                  image="/media/chamodh.jpg"
                  title="green iguana"
                />
              </div>
            </div>
          </div>
          <div onClick={popupAccount} className="cardtemp ">
            <div className="center flex">
              <div className="oneinside">
                <div className="det_one">
                  <div>නම:</div>
                  <div>චලනී පබෝදා</div>
                </div>
                <div className="det_one">
                  <div className="det_sec">වයස:</div>
                  <div>21</div>
                </div>
                <div className="det_one">
                  <div>ලග්නය:</div>
                  <div>කටක</div>
                </div>
                <div className="det_one">
                  <div>උපන් දිනය:</div>
                  <div>1998.09.10</div>
                </div>
              </div>
              <div className="secondside">
                <CardMedia
                  sx={{ height: "100%" }}
                  image="/media/chamodh.jpg"
                  title="green iguana"
                />
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        disableScrollLock
        PaperProps={{ style: dialogStyle }}
        className="profile_InfoPopup"
      >
        <div className="profile_InfoPopup_one">
          <div className="profile_InfoPopup_five">
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </div>
          <div className="main_onen">
            <div className="profile_InfoPopup_img">
              <img src="/media/chamodh.jpg" alt="girl one"/>
            </div>
          <Typography style={boxStyle}>
          {content}
          </Typography>
          </div>
          
          <div className="profile_InfoPopup_four">
            <div className="profile_InfoPopup_two"></div>
            <div className="profile_InfoPopup_three">2</div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
