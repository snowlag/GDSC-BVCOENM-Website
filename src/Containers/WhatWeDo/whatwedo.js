import React from "react";
import { Grid, Typography } from "@mui/material";
import SubjectCard from "../../Components/SubjectCard/subjectCard";
import { data } from "../../mock/whatwedo";

export default function WhatWeDo() {
  return (
    <Grid container align="center" direction="column" margin="40px 10px">
      <Typography variant="h3" component="div">
        What We Do
      </Typography>
      <Grid item sx={{ height: "auto", marginTop: "30px" }}>
        <SubjectCard cardData={data[0]} direction="row" />
      </Grid>
      <Grid item sx={{ height: "auto", marginTop: "30px" }}>
        <SubjectCard cardData={data[1]} direction="row-reverse" />
      </Grid>
      <Grid item sx={{ height: 260, marginTop: "30px" }}>
        <SubjectCard cardData={data[2]} direction="row" />
      </Grid>
    </Grid>
  );
}
