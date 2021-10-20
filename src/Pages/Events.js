import React from 'react'
import EventCard from "../Components/EventCard"
import { events } from "../mock/events"
import {
    Grid,
    Typography,
    Paper
} from '@mui/material'

import Courusal from "../Components/Corousal"
export default function Events() {
    console.log(events)
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <div className="events-courosal">
                        <Courusal events={events} />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>

                    <Typography variant="h3" gutterBottom component="div">
                        GDSC BVCOENM EVENTS
                    </Typography>

                </Grid>

            </Grid>
            <div className="upcoming-events-container">
                <h3>Upcoming Events</h3>
                <Grid container spacing={2}>
                    {events.map(event => (
                        <Grid item xs={12} md={2}>
                            <EventCard
                                {...event}
                            />
                        </Grid>
                    ))}
                </Grid>

            </div>

            <div className="completed-events-container">
                <h3>Completed Events</h3>
                <Grid container spacing={2}>
                    {events.map(event => (
                        <Grid item xs={12} md={2}>
                            <EventCard
                                {...event}
                            />
                        </Grid>
                    ))}
                </Grid>

            </div>



        </div>
    )
}
