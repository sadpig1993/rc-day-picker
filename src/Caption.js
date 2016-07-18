import React, { Component, PropTypes } from 'react';
import {formatMonthTitle} from './Utils.js';

export default class Month extends Component {
	static propTypes = {
		date: PropTypes.instanceOf(Date),
		onClick: PropTypes.func,
  	};

  	static defaultProps = {
  		className: 'DayPicker-Caption'
    };

    render() {
    	// {localeUtils.formatMonthTitle(date, locale)}
    	let { className, date } = this.props;
    	return(
			<div className={className}>
				{formatMonthTitle(date)}
			</div>
    	);
    }

}
