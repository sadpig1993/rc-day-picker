import React from 'react';
import DayPicker from '../../../DayPicker.js';

export default function SimpleCalendar() {
  return <DayPicker onDayClick={(e, day) => console.log(day)} />;
}