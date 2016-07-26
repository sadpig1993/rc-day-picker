import React, { Component, PropTypes } from 'react';

import ReactDom from 'react-dom';
import DayPicker, {Utils} from 'rc-day-picker';


class Ex3 extends Component {

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




export default Ex3;
// ReactDom.render(<Demo></Demo>, document.getElementById('root'));