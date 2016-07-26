import React, { Component, PropTypes } from 'react';

import ReactDom from 'react-dom';
import DayPicker, {Utils} from 'rc-day-picker';


class Ex4 extends Component {

	constructor(...args) {
		super(...args);

		this.onDayClickHandler = this.onDayClickHandler.bind(this);
		this.selected = this.selected.bind(this);
	}

	state = {
		from: null,
		to: null
	};

	onDayClickHandler(e, day, modifilers) {
		if (modifilers.disabled) {
			return;
		}
		
		// const range = Utils.addDayToRange(day, this.state);
		let start = this.state.start;
        let end = this.state.end;

        if (!start || !end || !Utils.isSameDay(start, end)) {
            start = day;
            end = day;
        }
        else {
            end = day;
            if (end < start) {
                end = start;
                start = day;
            }
        }

    	this.setState({
    		start: start,
    		end: end
    	});
	}

	selected(day) {
		let { start, end } = this.state;
    	return (start && Utils.isSameDay(day, start))
    		|| (end && Utils.isSameDay(day, end)) 
    		|| (day > start && day < end);
    }

	render() {
		let start = this.state.start;
        let end = this.state.end;

		return (<DayPicker 
			numberOfMonths = {2} 
			canChangeMonth = {true} 
			selectedDays = {day => this.selected(day)}
			onDayClick = {this.onDayClickHandler}
		/>);
	}
}

export default Ex4;



// ReactDom.render(<Demo></Demo>, document.getElementById('root'));