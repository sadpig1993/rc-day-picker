import React, { Component, PropTypes } from 'react';
import {formatWeekday} from './Utils.js';
import Day from './Day.js';

export default class week extends Component {

	static propTypes = {
		className: PropTypes.string,
		weekDays: PropTypes.array,
		weekIndexRange: PropTypes.object,
		weekIndex: PropTypes.number,
		month: PropTypes.instanceOf(Date).isRequired,
		disabledDays: PropTypes.func,
  		selectedDays: PropTypes.func,
  		onDayClick: PropTypes.func,

  		fixedWeeks: PropTypes.bool

	};
	static defaultProps = {
  	};

  	constructor(...args) {
		super(...args);
	}

	render () {
		let className = this.props.className || 'DayPicker-Day';
		let { weekDays, 
			weekIndex, 
			weekIndexRange, 
			selectedDays, 
			disabledDays, 
			month,
			fixedWeeks,
			onDayClick
		} = this.props;

		const days = weekDays.map((day, index) => {
			// let dayIndex = weekIndex * 7 + index;
			// let empty = (dayIndex > weekIndexRange.endIndex || 
						// dayIndex < weekIndexRange.startIndex);
			const isOutside = day.getMonth() !== month.getMonth();

			let empty = isOutside && !fixedWeeks;
			return (<Day className = {className} 
					children = {day.getDate()} 
					day = {day} 
					month = {month}
					key = {index}
					empty = {empty}
					selectedDays = {selectedDays}
    				disabledDays = {disabledDays}
    				fixedWeeks = {fixedWeeks}
    				onDayClick = {onDayClick}
    				></Day>);
		});

		return (
			<div className="DayPicker-Week">
				{days}
			</div>
		);
		
	}
}