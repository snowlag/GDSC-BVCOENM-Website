import React from "react";
import { Grid, Typography } from "@mui/material";
import SubjectCard from "../../Components/subjectCard/subjectCard";

export default function WhatWeDo() {
  return (
    <Grid container align="center" direction="column" margin="40px 10px">
      <Typography variant="h4" component="div">
        What We Dos
      </Typography>
      <Grid item sx={{ height: "auto", marginTop: "30px" }}>
        <SubjectCard />
      </Grid>
      <Grid item sx={{ height: "auto", marginTop: "30px" }}>
        <SubjectCard />
      </Grid>
      <Grid item sx={{ height: 260, marginTop: "30px" }}>
        <SubjectCard />
      </Grid>
    </Grid>
  );
}
