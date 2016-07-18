import React, { Component, PropTypes } from 'react';

import ReactDom from 'react-dom';
import DayPicker, {Utils} from '../../../DayPicker.js';


class Demo extends Component {

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
		return (<DayPicker 
			numberOfMonths = {2} 
			canChangeMonth = {false} 
			selectedDays = {day => Utils.isSameDay(selectedDay, day)}
			onDayClick = {this.onDayClickHandler}
		/>);
	}
}





ReactDom.render(<Demo></Demo>, document.getElementById('root'));