import React, { Component, PropTypes } from 'react';

import ReactDom from 'react-dom';
import DayPicker, {Utils} from '../../../DayPicker.js';


class Demo extends Component {

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





ReactDom.render(<Demo></Demo>, document.getElementById('root'));