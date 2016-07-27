import React, { Component, PropTypes } from 'react';
import DayPicker, {Utils} from '../../../DayPicker.js';


class Ex2 extends Component {
	constructor(...args) {
		super(...args);
		this.onDayClickHandler = this.onDayClickHandler.bind(this);
	}
	state = {
		selectedDay: null
	};
	onDayClickHandler(e, day, modifilers) {
		if (modifilers.disabled) {
			return;
		}
		this.setState({
	    	selectedDay: modifilers.selected ? null : day,
	    });
	}
	render() {
		const { selectedDay } = this.state;
		return (
			<DayPicker 
				numberOfMonths = {2} 
				canChangeMonth = {false} 
				selectedDays = {day => Utils.isSameDay(selectedDay, day)}
				onDayClick = {this.onDayClickHandler}
			/>
		);
	}
}

export default Ex2;