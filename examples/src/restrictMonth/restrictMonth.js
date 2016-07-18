import React, { Component, PropTypes } from 'react';

import ReactDom from 'react-dom';
import DayPicker, {Utils} from '../../../DayPicker.js';




const fromMonth = new Date(2015, 0, 1, 0, 0);
const toMonth = new Date(2015, 9, 20, 23, 59);

class Demo extends Component {
  render() {
    return (
      <DayPicker
        numberOfMonths = {2}
        fixedWeeks = {true}
        initialMonth = {fromMonth}
        fromMonth = {fromMonth}
        toMonth = {toMonth}
        disabledDays = {day => fromMonth > day || day > toMonth}
        onDayClick = {(e, day, { disabled }) => {
          if (!disabled) {
            console.log(day.toLocaleDateString());
          }
        }}
      />
    );
  }
  
}

ReactDom.render(<Demo></Demo>, document.getElementById('root'));