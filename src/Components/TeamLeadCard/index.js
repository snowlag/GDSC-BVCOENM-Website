import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Facebook, Instagram, GitHub, LinkedIn } from "@mui/icons-material";
import "./style.css";

export default function MemberCard(props) {
  const theme = useTheme();
  const { key, image, name, role, fb, lkdin, gthb, insta, primaryColor } =
    props;

  return (
    <>
      <div className="animateComeFromRightOnce">
        <div class="image-area">
          <div class="img-wrapper">
            <img src={image} alt={name} />
            <p>
              <h2>{name}</h2>
              {role}
            </p>
            <ul>
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
        </div>
      </div>
    </>
  );
}
