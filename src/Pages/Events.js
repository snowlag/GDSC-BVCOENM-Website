import React from 'react'
import EventCard from "../Components/EventCard"
import { events } from "../mock/events"
import {
    Grid,
    Typography,
    Paper,
    Container
} from '@mui/material'

import Courusal from "../Components/Corousal"
export default function Events() {
    console.log(events)
    return (
        <div>
            <Grid container spacing={3}>
                {/* <Grid item xs={12} md={12}>
                    <div className="events-courosal">
                        <Courusal events={events} />
                    </div>
                </Grid> */}
                <Grid item xs={12} md={12}>
                    <div className="events-description-container">
                        <Typography  color="white" variant="h4" gutterBottom component="div">
                            At GDSC BVCOENM, Events
                            are kind of a big deal!
                        </Typography>
                        <Typography variant="subtitle2" color="#8b8b8b" component="div">
                            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <div className="center-items">
                        <img
                            src="/images/comingsoon.png"
                            alt="coming soon"
                            height="400px"
                            width="400px"
                        />
                    </div>
              
               <Grid container spacing={2}>
                    {events.map(event => (

                        <Grid item xs={12} sm={4} md={3} lg={3}>
                            <EventCard
                                {...event}
                            />
                        </Grid>

                    ))}
                </Grid>

                <div className="center-items">
                        <img
                            src="/images/completed.png"
                            alt="coming soon"
                            height="400px"
                            width="500px"
                        />
                    </div>
              
               <Grid container spacing={2}>
                    {events.map(event => (

                        <Grid item xs={12} sm={4} md={3} lg={3}>
                            <EventCard
                                {...event}
                            />
                        </Grid>

                    ))}
                </Grid>



        </div>
    )
}
