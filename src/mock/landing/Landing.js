import React from "react";
import Grid from "@mui/material/Grid";
import Clubname from "../../Containers/ClubName";
import Vision from "../../Components/vision/vision";
import WhatWeDo from "../../Containers/WhatWeDo/whatwedo";

export default function Landing() {
  return (
    <div className="landingContainer">
      <div className="sections">
        <Clubname />
        <Vision />
        <WhatWeDo />
      </div>
    </div>
  );
}
