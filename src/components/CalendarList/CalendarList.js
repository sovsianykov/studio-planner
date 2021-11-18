import React from 'react';
import { Grid } from "@mui/material";

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


  const listA =rehearsalsList.filter(el =>el.studio === "A")
  const listB =rehearsalsList.filter(el =>el.studio === "B")
  const listC =rehearsalsList.filter(el =>el.studio === "C")
  const listD =rehearsalsList.filter(el =>el.studio === "D")


    return (
        <Grid container spacing={2} >
            <Grid item xs={12} md={6} >
                <MyCalendar list={listA} name={"A"} />
            </Grid>
            <Grid item xs={12} md={6} >
                <MyCalendar list={listB} name={"B"}/>
            </Grid>
            <Grid item xs={12} md={6} >
                <MyCalendar list={listC} name={"C"}/>
            </Grid>
            <Grid item xs={12} md={6} >
                <MyCalendar list={listD} name={"D"}/>
            </Grid>
        </Grid>
    );
};

export default CalendarList;
