import React, { Component, PropTypes } from 'react';

import ReactDom from 'react-dom';
import DayPicker, {Utils} from 'rc-day-picker';


class Ex6 extends Component {

	constructor(...args) {
		super(...args);
	}


	render() {
		
		return (<DayPicker 
			numberOfMonths = {2} 
			fixedWeeks = {true}
		/>);
	}
}




export default Ex6;

// ReactDom.render(<Demo></Demo>, document.getElementById('root'));