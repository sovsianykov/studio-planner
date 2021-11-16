import React from "react";
import {Grid, Typography} from "@mui/material";
import MyCalendar from "./shared/components/MyCalendar/MyCalendar";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App" style={{margin: 10 }} >
        <Navbar/>
      <Grid container spacing={2} >
          <Grid item xs={12} md={6} >
              <Typography variant='h5' align='center' margin='40px 20px 0 20px'>
                  Studio 1
              </Typography>
              <MyCalendar/>
          </Grid>
          <Grid item xs={12} md={6} >
              <Typography variant='h5' align='center' marginTop='50px'>
                  Studio 2
              </Typography>
              <MyCalendar/>
          </Grid>
          <Grid item xs={12} md={5} >
              <Typography variant='h5' align='center' marginTop='20px'>
                  Studio 3
              </Typography>
              <MyCalendar/>
          </Grid>
          <Grid item xs={12} md={5} >
              <Typography variant='h5' align='center' marginTop='50px'>
                  Studio 4
              </Typography>
              <MyCalendar/>
          </Grid>
      </Grid>

    </div>
  );
}

export default App;
