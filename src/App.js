import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Form from "./shared/components/Form/Form";
import CalendarList from "./components/CalendarList/CalendarList";
import Cell from "./shared/components/Cell/Cell";
import Day from "./shared/components/Day/Day";

function App() {
  return (
    <div className="App" style={{ marginTop: 100 }}>
      <Navbar />
      {/*<CalendarList />*/}
      {/*<Form />*/}
       <Day/>

    </div>
  );
}

export default App;
