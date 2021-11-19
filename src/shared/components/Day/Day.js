import React from 'react';
import DayHeader from "./DayHeader";
import DayRow from "./DayRow";

const hours = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
]


const Day = () => {
    return (
        <div>
           <table style={{background:"red"}}>
               <DayHeader/>
               <tbody>
               {hours.map((hour,i) =><DayRow hour={hour} key={i}/>)}
               </tbody>
           </table>
        </div>
    );
};

export default Day;
