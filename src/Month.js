import React, { Component, PropTypes } from 'react';
import WeekLabel from './WeekLabel.js';
import Week from './Week.js';
import {getWeekArray, getMonthIndexRange} from './Utils.js';

export default class Month extends Component {

	static propTypes = {
  		month: PropTypes.instanceOf(Date).isRequired,
  		className: PropTypes.string,
  		captionElement: PropTypes.node.isRequired,
  		disabledDays: PropTypes.func,
  		selectedDays: PropTypes.func,
  		onDayClick: PropTypes.func,

  		fixedWeeks: PropTypes.bool
  	};

  	static defaultProps = {
  		month: new Date(),
  		className: 'DayPicker-Month'
    };

	render () {
		const weekLabels = [];
		const { month, className, captionElement, selectedDays, disabledDays, fixedWeeks, onDayClick } = this.props;

		for (let i = 0; i < 7; i++) {
			const eleProps = {
		      className: 'DayPicker-Weekday',
		      weekDay: i,
		      key: i
		    };
			const ele = React.createElement(WeekLabel, eleProps);
			weekLabels.push(ele);
		}

		// let month = new Date();
		const { weekArray, weekIndexRange } = getWeekArray(month);
		const weekEles = weekArray.map((week, index) => {
			return (<Week weekDays = {week} 
					key = {index}
					month = {month} 
					weekIndexRange = {weekIndexRange}
					weekIndex = {index}
					selectedDays = {selectedDays}
    				disabledDays = {disabledDays}
    				fixedWeeks = {fixedWeeks}
    				onDayClick = {onDayClick}
    				></Week>);
		});
		const captionProps = {
			date: month
			// onClick: onCaptionClick ? e => onCaptionClick(e, month) : undefined,
		};

		return (
			<div className={className}>
				{React.cloneElement(captionElement, captionProps)}
				<div className="DayPicker-Weekdays">
					<div className="DayPicker-WeekdaysRow">
					{weekLabels}
					</div>
				</div>
				<div className="DayPicker-Body">
					{weekEles}
				</div>
			</div>
		);
	}
}