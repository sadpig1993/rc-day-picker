import React, { Component, PropTypes } from 'react';

import ReactDom from 'react-dom';
import DayPicker, {Utils} from 'rc-day-picker';


class Ex5 extends Component {

	constructor(...args) {
		super(...args);

		this.showPrevious = this.showPrevious.bind(this);
		this.showNext = this.showNext.bind(this);
	}

	state = {
    	year: (new Date()).getFullYear(),
  	};
  	
  	showPrevious() {
  		this.setState({
    		year: this.state.year - 1,
    	});
  	}

  	showNext() {
  		this.setState({
    		year: this.state.year + 1,
    	});
  	}

	render() {
		const { year } = this.state;
		
		return (
			<div>
				<h1>
					<a onClick={this.showPrevious}>{year - 1}</a>
	          		{year}
	          		<a onClick={this.showNext}>{year + 1}</a>
          		</h1>
				<DayPicker 
				numberOfMonths = {12} 
				canChangeMonth = {false}
				initialMonth = {new Date(year, 0, 1)}
				></DayPicker>
			</div>
		);
	}
}


export default Ex5;


// ReactDom.render(<Demo></Demo>, document.getElementById('root'));