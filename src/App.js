import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Form from "./shared/components/Form/Form";
import CalendarList from "./components/CalendarList/CalendarList";

function App() {
  return (
    <div className="App" style={{ margin: 10 }}>
      <Navbar />
      {/*<CalendarList />*/}
      <Form />
    </div>
  );
}

export default App;
