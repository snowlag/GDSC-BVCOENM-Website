import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import "./style.css";
export default function index() {
  return (
    <div className="content-header">
      <Grid container spacing={2}>
        <Grid
          className="content-header-parent-left"
          item
          xs={12}
          md={12}
          lg={6}
        >
          <div className="content-header-parent-left-name">
            <div>
              <img height="200px" width="200px" src="/logo.svg" alt="Image" />
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                color="white"
              >
                Google Developer Student Clubs
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                color="gray"
              >
                Bharati vidyapeeth College of Engineering , Navi Mumbai
              </Typography>
            </div>
            <div className="content-header-tagline">
              <Typography
                variant="h3"
                gutterBottom
                component="div"
                color="white"
              >
                A developers community by students, for the students!
              </Typography>
            </div>

            <div className="content-header-sub-tagline">
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                color="gray"
              >
                We at GDSC BVCOENM hope to empower young developers discover
                their talents and help them
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid
          className="content-header-parent-right"
          item
          xs={12}
          md={12}
          lg={6}
        >
          <img
            height="500px"
            className="content-header-image-right"
            width="700px"
            src="https://dscvit.com/images/landing.svg"
            alt="Image"
          />
        </Grid>
      </Grid>
    </div>
  );
}
