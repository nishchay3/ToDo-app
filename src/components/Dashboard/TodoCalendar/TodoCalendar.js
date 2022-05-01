import React, { useState } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import './TodoCalendar.scss';

export default function TodoCalendar() {
  const [calDate, setCalDate] = useState(new Date());

  function onChange(calDate) {
    setCalDate(calDate);
  }

  return (
    <div className="todo-calendar">
      <Calendar onChange={onChange} value={calDate} />
    </div>
  );
}
