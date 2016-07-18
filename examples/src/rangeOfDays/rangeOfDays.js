import React, { Component, PropTypes } from 'react';

import ReactDom from 'react-dom';
import DayPicker, {Utils} from '../../../DayPicker.js';


class Demo extends Component {

	constructor(...args) {
		super(...args);

		this.onDayClickHandler = this.onDayClickHandler.bind(this);
	}

	state = {
		from: null,
		to: null
	};

	onDayClickHandler(e, day, modifilers) {
		if (modifilers.disabled) {
			return;
		}
		const range = Utils.addDayToRange(day, this.state);
    	this.setState({
    		from: range.from,
    		to: range.to
    	});
	}

	render() {
		const { from, to } = this.state;
		return (<DayPicker 
			numberOfMonths = {2} 
			canChangeMonth = {true} 
			selectedDays = {day => Utils.isDayInRange(day, { from, to })}
			onDayClick = {this.onDayClickHandler}
		/>);
	}
}





ReactDom.render(<Demo></Demo>, document.getElementById('root'));