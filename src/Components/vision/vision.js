import { Box, Typography } from "@mui/material";
import React from "react";

export default function Vision() {
  return (
    <Box
      sx={{
        margin: "30px 0",
        padding: "30px 0",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        background:
          "linear-gradient(45deg, #1b1b1b 30%, #bd714a 50%,#1b1b1b 90% )",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
      }}
    >
      <Typography variant="h4">Our Vision</Typography>
      <Typography variant="h6">
        We at GDSC BVCOENM hope to empower young developers discover their
        talents and help them
      </Typography>
    </Box>
  );
}
