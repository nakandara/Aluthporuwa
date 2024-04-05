import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MainPage from "../../components/Home/MainPage";
import Footer from "./../../components/footer";
import LayoutSecond from "../../components/LayoutSecond/LayoutSecond";

function DrawerAppBar(props) {
  const router = useRouter();
  const { window } = props;

  return (
    <LayoutSecond>
      <Box
        sx={{
          backgroundColor: "black",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ marginTop: "80px", flex: 1 }}>
          <MainPage />
        </div>
        <section>
          <div className="step">
            <div className="step_heading"> අතිනත් Step</div>
            <div className="card">
              <div className="cardtemp ">
                <div className="center flex">
                  <div className="">
                    <video
                      className="step_images"
                      autoPlay
                      loop
                      muted
                      // Change this value to set the desired opacity (0 to 1)
                    >
                      <source src="/media/one.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="secondside">
                    <img
                      className="step_images"
                      src={`/media/lsssssssss.avif`}
                      alt={`Image`}
                    />
                  </div>
                </div>
              </div>
              <div className="cardtemp ">
                <div className="center flex">
                <div className="">
                    <video
                      className="step_images"
                      autoPlay
                      loop
                      muted
                      // Change this value to set the desired opacity (0 to 1)
                    >
                      <source src="/media/two.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="secondside">
                    <img
                      className="step_images"
                      src={`/media/19198948.jpg`}
                      alt={`Image`}
                    />
                  </div>
                </div>
              </div>
              <div className="cardtemp ">
                <div className="center flex">
                <div className="">
                    <video
                      className="step_images"
                      autoPlay
                      loop
                      muted
                      // Change this value to set the desired opacity (0 to 1)
                    >
                      <source src="/media/three.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="secondside">
                    <img
                      className="step_images"
                      src={`/media/20943483.jpg`}
                      alt={`Image`}
                    />
                  </div>
                </div>
              </div>

              <div className="cardtemp ">
                <div className="center flex">
                <div className="">
                    <video
                      className="step_images"
                      autoPlay
                      loop
                      muted
                      // Change this value to set the desired opacity (0 to 1)
                    >
                      <source src="/media/four.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="secondside">
                    <img
                      className="step_images"
                      src={`/media/2903544.jpg`}
                      alt={`Image`}
                    />
                  </div>
                </div>
              </div>

              <div className="cardtemp ">
                <div className="center flex">
                <div className="">
                    <video
                      className="step_images"
                      autoPlay
                      loop
                      muted
                      // Change this value to set the desired opacity (0 to 1)
                    >
                      <source src="/media/five.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="secondside">
                    <img
                      className="step_images"
                      src={`/media/2760432.jpg`}
                      alt={`Image`}
                    />
                  </div>
                </div>
              </div>

              <div className="cardtemp ">
                <div className="center flex">
                <div className="">
                    <video
                      className="step_images"
                      autoPlay
                      loop
                      muted
                      // Change this value to set the desired opacity (0 to 1)
                    >
                      <source src="/media/six.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="secondside">
                    <img
                      className="step_images"
                      src={`/media/3969587.jpg`}
                      alt={`Image`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="contact-container">
            <div className="contact_topic">අපව සම්බන්ධ කරගන්න</div>
            <div></div>
          </div>
        </section>
      </Box>
    </LayoutSecond>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
