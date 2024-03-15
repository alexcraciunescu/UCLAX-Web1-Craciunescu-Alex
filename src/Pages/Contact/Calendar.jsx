import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MyCalendar() {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
    };

    return (
        <div>
            <h1>Calendar</h1>
            <Calendar onChange={onChange} value={date} />
        </div>
    );
}

export default MyCalendar;
