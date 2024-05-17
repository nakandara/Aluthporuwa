import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function Elevation() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-4 mb-3">
                <div
                  className="card border-success"
                  style={{ maxWidth: "none" }} // Only keep maxWidth: "none"
                >
                  <div className="card-header bg-transparent border-success">
                    Header
                  </div>
                  <div className="card-body text-success">
                    <h5 className="card-title">Success card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-success">
                    Footer
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div
                  className="card border-success"
                  style={{ maxWidth: "none" }} // Only keep maxWidth: "none"
                >
                  <div className="card-header bg-transparent border-success">
                    Header
                  </div>
                  <div className="card-body text-success">
                    <h5 className="card-title">Success card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-success">
                    Footer
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div
                  className="card border-success"
                  style={{ maxWidth: "none" }} // Only keep maxWidth: "none"
                >
                  <div className="card-header bg-transparent border-success">
                    Header
                  </div>
                  <div className="card-body text-success">
                    <h5 className="card-title">Success card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-success">
                    Footer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item>xs=12 sm=4</Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item>xs=12 sm=4</Item>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Item>xs=12 sm=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
