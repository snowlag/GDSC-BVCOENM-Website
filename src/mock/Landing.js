import React from "react";
import Grid from "@mui/material/Grid";
import Clubname from "../Containers/ClubName";
import WhatWeDo from "../Containers/WhatWeDo/whatwedo";
import Vision from "../Components/Vision/vision.js";

export default function Landing() {
  return (
    <div>
      <Clubname />
      <Vision />
      <WhatWeDo />
    </div>
  );
}
