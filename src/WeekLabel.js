import React, { Component, PropTypes } from 'react';
import {formatWeekday} from './Utils.js';

export default class WeekLabel extends Component {

	static propTypes = {
		className: PropTypes.string,
		weekDay: PropTypes.number,

	};
	static defaultProps = {
  	};

  	constructor(...args) {
		super(...args);
	}

	render () {
		let className = this.props.className || 'DayPicker-Weekday';
		let {localeUtils, weekDay} = this.props;

		return (
			<div className = {className}>
				<div>
					{formatWeekday(weekDay)}
				</div>
			</div>
		);
		
	}
}