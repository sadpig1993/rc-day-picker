import React from 'react';
import DayPicker from 'rc-day-picker';

export default function SimpleCalendar() {
  return <DayPicker onDayClick={(e, day) => console.log(day)} />;
}