import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Facebook, Instagram, GitHub, LinkedIn } from "@mui/icons-material";
export default function MemberCard(props) {
  const theme = useTheme();
  const { key, image, name, role, fb, lkdin, gthb, insta } = props;
  return (
    <>
      <div className="animateComeUpOnce">
        <Card
          raised="true"
          sx={{ display: "flex", backgroundColor: "black", color: "white" }}
        >
          <CardMedia
            component="img"
            sx={{
              width: 151,
              height: 151,
              borderRadius: "50%",
            }}
            image={image}
            alt={name}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="h5"
                sx={{ fontWeight: "400" }}
              >
                {name}
              </Typography>
              <Typography variant="subtitle1" component="div">
                {role}
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton
                className="social-icons"
                aria-label="Facebook"
                sx={{ color: "white" }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                className="social-icons"
                aria-label="play/pause"
                sx={{ color: "white" }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                className="social-icons"
                aria-label="next"
                sx={{ color: "white" }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                className="social-icons"
                aria-label="next"
                sx={{ color: "white" }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
        </Card>
      </div>
    </>
  );
}
