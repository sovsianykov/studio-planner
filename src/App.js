import React from "react";
import {Grid} from "@mui/material";
import MyCalendar from "./shared/components/MyCalendar/MyCalendar";

function App() {
  return (
    <div className="App">
      <Grid container >
          <Grid item xs={12} md={6} lg={3}>
              <h5>Studio 1</h5>
              <MyCalendar/>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
              <h5>Studio 2</h5>
              <MyCalendar/>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
              <h5>Studio 3</h5>
              <MyCalendar/>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
              <h5>Studio 4</h5>
              <MyCalendar/>
          </Grid>
      </Grid>

    </div>
  );
}

export default App;
