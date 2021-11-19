import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Day from "./shared/components/Day/Day";
import {Grid} from "@mui/material";


function App() {
  return (
    <div className="App" >
      <Navbar />
      <Grid container style={{ marginTop: 80, display:"flex", flexDirection:"column",alignItems:'center' }} >
          <Grid item xs={12} mp={4}>
              <Day/>
          </Grid>
      </Grid>
    </div>
  );
}

export default App;
