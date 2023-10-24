import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const dialogStyle = {
  width: "80%",
  height:"80%", // Default width for larger screens
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
      <div className="profile_InfoPopup_four" >
      <div className="profile_InfoPopup_two">1</div>
        <div className="profile_InfoPopup_three">2</div>
      </div>
        
      </div>
      </Dialog>
    </>
  );
}
