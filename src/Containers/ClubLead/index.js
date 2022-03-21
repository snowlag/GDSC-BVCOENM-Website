import { Grid, Icon, IconButton, Typography } from "@mui/material";
import {
  Facebook,
  Instagram,
  GitHub,
  LinkedIn,
  FormatQuote,
} from "@mui/icons-material";
import React from "react";
import "./style.css";
export default function ClubLead({ Lead }) {
  return (
    <>
      <div className="Lead-page">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom="true"
          color="white"
          sx={{
            fontFamily: "san-serif",
            fontSize: "3rem",
            textAlign: "center",
            marginBottom: "2rem",
            fontStyle: "italic",
          }}
        >
          Message from the Club Lead!
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <div className="club-lead animateComeFromLeftOnce">
              <div className="picture">
                <img
                  className="img-fluid "
                  src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/mayuresh_kulkarni_c4xNZhB.jpg"
                />
              </div>
              <div className="team-content">
                <h3 className="name">Mayursh Kulkarni</h3>
                <h4 className="title">GDSC Club Lead</h4>
              </div>
              <ul className="social">
                <li>
                  <IconButton
                    className="social-icons"
                    aria-label="Facebook"
                    sx={{ color: "white" }}
                  >
                    <Facebook />
                  </IconButton>
                </li>
                <li>
                  <IconButton
                    className="social-icons"
                    aria-label="Instagram"
                    sx={{ color: "white" }}
                  >
                    <Instagram />
                  </IconButton>
                </li>
                <li>
                  <IconButton
                    className="social-icons"
                    aria-label="Github"
                    sx={{ color: "white" }}
                  >
                    <GitHub />
                  </IconButton>
                </li>
                <li>
                  <IconButton
                    className="social-icons"
                    aria-label="LinkedIn"
                    sx={{ color: "white" }}
                  >
                    <LinkedIn />
                  </IconButton>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <p className="quote animateComeFromRightOnce">
              <FormatQuote />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              et dui euismod, Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Praesent et dui euismod, Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Praesent et dui euismod, Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Praesent et dui
              euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent et dui euismod, Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Praesent et dui euismod, Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Praesent et dui euismod, Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Praesent et dui
              euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent et dui euismod, <FormatQuote />
            </p>
            <br></br>
            <p className="quote-by">-- Mayuresh Kulkarni</p>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
