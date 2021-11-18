import React from 'react';
import { Grid } from "@mui/material";
import {eventLists} from "../../content";
import MyCalendar from "../../shared/components/MyCalendar/MyCalendar";
import {useFetch} from "../../hooc/useFetch";


const CalendarList = () => {
    const { rehearsalsList , loading, error } = useFetch();

    if (loading) {
        return <h1>Loading ...</h1>;
    }
    if (error) {
        return <h1>Something vent wrong ...</h1>;
    }
    console.log(rehearsalsList)




    return (
        <Grid container spacing={2} >
            <Grid item xs={12} md={6} >
                <MyCalendar list={rehearsalsList.filter(el =>el.studio === "A")}/>
            </Grid>
            <Grid item xs={12} md={6} >
                <MyCalendar list={rehearsalsList.filter(el =>el.studio === "B")}/>
            </Grid>
            <Grid item xs={12} md={6} >
                <MyCalendar list={rehearsalsList.filter(el =>el.studio === "C")}/>
            </Grid>
            <Grid item xs={12} md={6} >
                <MyCalendar list={rehearsalsList.filter(el =>el.studio === "D")}/>
            </Grid>
        </Grid>
    );
};

export default CalendarList;
