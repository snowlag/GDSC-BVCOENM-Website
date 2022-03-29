import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import "./subjectCard.css";

const cardStyles = makeStyles({
  root: {
    maxWidth: 900,
    display: "flex",
    background: "linear-gradient(45deg, #1b1b1b 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
  },
});

export default function SubjectCard(props) {
  // const classes = cardStyles();

  return (
    <Card
      className="animateComeUpOnce"
      sx={{
        maxWidth: 900,
        display: "flex",
        background: "linear-gradient(45deg, #1b1b1b 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: props.direction,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Image */}
        <CardMedia
          component="img"
          height="auto"
          image={props.cardData.imgsrc}
          alt="Android"
          sx={{ maxWidth: 200 }}
        />

        <Box>
          <CardContent
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {/* Title */}
              {props.cardData.tech}
            </Typography>
            {/* Description */}
            <Typography variant="body2" color="white">
              {props.cardData.description}
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </Card>
  );
}
