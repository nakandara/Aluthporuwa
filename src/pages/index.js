import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

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
            <div className="step_heading"> QuickAds Hub Step</div>
            <div className="card">
              <div className="cardtemp ">
                <div className="center flex">
                 

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
