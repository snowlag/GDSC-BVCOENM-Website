import React from "react";
import EventCard from "../Components/EventCard";
import { events } from "../mock/events";
import { Grid, Typography, Paper, Container } from "@mui/material";

import Courusal from "../Components/Corousal";
export default function Events() {
  console.log(events);
  return (
    <div>
      <div className=" event-header center-items">
        <div className="head1">
          <h1 class="display-4 font-weight-bold" style={{ fontWeight: 10 }}>
            Upcoming Events...
          </h1>
        </div>
      </div>

      <Grid container spacing={2}>
        {events.map((event) => (
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <EventCard {...event} />
          </Grid>
        ))}
      </Grid>

      <div className="center-items">
        <div className="head1">
          <h1
            class="display-4 font-weight-bold mb-4"
            style={{ fontWeight: 10 }}
          >
            Completed Events
          </h1>
        </div>
      </div>

      <Grid container spacing={2}>
        {events.map((event) => (
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <EventCard {...event} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
