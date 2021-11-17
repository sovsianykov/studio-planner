import React from 'react';
import { Grid } from "@mui/material";
import {eventLists} from "../../content";
import MyCalendar from "../../shared/components/MyCalendar/MyCalendar";


const CalendarList = () => {
    {eventLists.filter(el =>el.studio === "A")}
    return (
        <Grid container spacing={2} >
            <Grid item xs={12} md={6} >
                <MyCalendar list={eventLists.filter(el =>el.studio === "A")}/>
            </Grid>
            <Grid item xs={12} md={6} >
                <MyCalendar list={eventLists.filter(el =>el.studio === "B")}/>
            </Grid>
            <Grid item xs={12} md={6} >
                <MyCalendar list={eventLists.filter(el =>el.studio === "C")}/>
            </Grid>
            <Grid item xs={12} md={6} >
                <MyCalendar list={eventLists.filter(el =>el.studio === "D")}/>
            </Grid>
        </Grid>
    );
};

export default CalendarList;
