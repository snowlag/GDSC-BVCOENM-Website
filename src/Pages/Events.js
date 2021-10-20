import React from 'react'
import EventCard from "../Components/EventCard"
import { events } from "../mock/events"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function Events() {
    console.log(events)
    return (
        <div>
             <Grid container spacing={2}>
               <Grid item xs={12} md={6}>
                    Image
               </Grid>
               <Grid item xs={12} md={6}>
                   Courosal
               </Grid>
              </Grid>
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
    )
}
