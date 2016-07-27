import React, { Component, PropTypes } from 'react';

import ReactDom from 'react-dom';
import DayPicker, {Utils} from '../../../DayPicker.js';


class Ex8 extends Component {

	constructor(...args) {
		super(props);
		this.state = {
            start: props.start,
            end: props.end
        };

        this.handleDayClick = this.handleDayClick.bind(this);
	}
	componentWillReceiveProps(nextProps) {
        this.state.start = nextProps.start;
        this.state.end = nextProps.end;
        this.setState(this.state);
    }

    handleDayClick(e, day, modifiers) {
        if (modifiers.disabled) {
            return;
        }

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

        this.state.start = start;
        this.state.end = end;
        this.setState(this.state);
        // this.props.onValueChange(this.state.start, this.state.end);
    }

	render() {
		// let className = [this.props.className].join(' ');
        let start = this.state.start;
        let end = this.state.end;

        let modifiers = {
            selected(day) {
                return (start && Utils.isSameDay(day, start))
                || (end && Utils.isSameDay(day, end));
            },
            between(day) {
                return start && end && Utils.isDayBetween(day, start, end);
            }
            // disabled: day => !isCloseBetween(day, this.props.allowPickStart, this.props.allowPickEnd)
        };
		
		return (<DayPicker 
			numberOfMonths = {2} 
			modifiers = {modifiers}
			onDayClick={this.handleDayClick}
		/>);
	}
}


export default Ex8;


// ReactDom.render(<Demo></Demo>, document.getElementById('root'));