import React, { Component, PropTypes } from 'react';

import ReactDom from 'react-dom';
import DayPicker, {Utils} from '../../../DayPicker.js';


class Demo extends Component {

	constructor(...args) {
		super(...args);
	}

	state = {
		from: new Date(),
		to: Utils.addMonths(new Date(), 1)
	};

	render() {
		const { from, to } = this.state;
		return (<DayPicker 
			numberOfMonths = {1} 
			canChangeMonth = {true} 
			disabledDays = {day => Utils.isDayInRange(day, { from, to })}
		/>);
	}
}





ReactDom.render(<Demo></Demo>, document.getElementById('root'));