import React, { useState } from "react";
import * as dateFns from "date-fns";

import './Calendar.css'


function Calendar () {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";
    
    return (
    <div className="header row flex-middle">
      <div className="col col-start">
        <div className="icon" onClick={() => prevMonth()}>
          chevron_left
        </div>
      </div>
      <div className="col col-center">
        <span>
          {dateFns.format(currentMonth, dateFormat)}
        </span>
      </div>
      <div className="col col-end" onClick={() => nextMonth()}>
        <div className="icon">chevron_right</div>
      </div>
    </div>
  );
  };

  const renderDays = () => {
    
  };

  const renderCells = () => {
    
  };

  const onDateClick = day => {

  };

  const nextMonth = () => {
    setCurrentMonth(
      dateFns.addMonths(currentMonth, 1)
    );
  };

  const prevMonth = () => {
    setCurrentMonth(
      dateFns.subMonths(currentMonth, 1)
    );
  };

  return(
    <div className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};



export default Calendar;