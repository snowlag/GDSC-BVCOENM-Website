import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import "./index.css";
export default function index() {
  return (
    <div className="team-page-into">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={6}>
          <div className="page-header">
            <strong className="heading blue"> MEET </strong>
            <strong className="heading red"> OUR </strong>
            <strong className="heading yellow"> AMAZING </strong>
            <strong className="heading green"> TEAM </strong>
          </div>

          <p class="desc section-decription">
            Teamwork is the ability to work together toward a common vision. The
            ability to direct individual accomplishments toward organizational
            objectives. It is the fuel that allows common people to attain
            uncommon results.
          </p>
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
            maxWidth="100vw"
            src="images/teams.png"
            alt="Image"
            loading="lazy"
          />
        </Grid>
      </Grid>
    </div>
  );
}
