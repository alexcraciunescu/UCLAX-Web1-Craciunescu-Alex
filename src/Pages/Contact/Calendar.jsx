import React, { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

function MyCalendar() {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
    };

    return (
        <CalendarStyled>
            <h2>Calendar</h2>
            <Calendar onChange={onChange} value={date} />
        </CalendarStyled>
    );
}

export default MyCalendar;

const CalendarStyled = styled.div`
    margin: 30px 0px;

    h2 {
    }
`;
