import React, { Component, PropTypes } from 'react';

import Navbar from './Navbar';
import Month from './Month';
import Day from './Day';
import {addMonths, getModifiersForDay} from './Utils.js';
import styles from './style.css';
import Caption from './Caption';

export default class DayPicker extends Component {

	static propTypes = {
		initialMonth: PropTypes.instanceOf(Date),

	    numberOfMonths: PropTypes.number,
	    selectedDays: PropTypes.func,
	    disabledDays: PropTypes.func,
	    onDayClick: PropTypes.func,

	    className: PropTypes.string,

	    canChangeMonth: PropTypes.bool,
	    fixedWeeks: PropTypes.bool,

	    captionElement: PropTypes.element,

	    fromMonth: PropTypes.instanceOf(Date),
    	toMonth: PropTypes.instanceOf(Date),

	    
  	};

	static defaultProps = {
	    tabIndex: 0,
	    initialMonth: new Date(),
	    numberOfMonths: 1,
	    className: 'DayPicker',
	    // weekdayElement: <Weekday />,
		// navbarElement: <Navbar />,
		captionElement: <Caption />,
		canChangeMonth: true,
		fixedWeeks: false
	};

    constructor(...args) {
        super(...args);

        this.showNextMonth = this.showNextMonth.bind(this);
    	this.showPreviousMonth = this.showPreviousMonth.bind(this);
     	this.state = {
     		currentMonth: this.props.initialMonth
     	}
    }

    componentWillReceiveProps(nextProps) {
	    if (this.props.initialMonth !== nextProps.initialMonth) {
	      this.setState({
	      	currentMonth: nextProps.initialMonth
	      });
	    }
  	}

    showMonth(day, callback) {
    	if (!this.allowMonth(day)) {
	      return;
	    }
	    this.setState({ currentMonth: day }, () => { //Helpers.startOfMonth(d)
			if (callback) {
				callback();
			}
			if (this.props.onMonthChange) {
				this.props.onMonthChange(this.state.currentMonth);
			}
	    })
    }

    allowMonth(day) {
		const { fromMonth, toMonth, canChangeMonth } = this.props;

    	if (!canChangeMonth ||
    		(fromMonth && fromMonth > day) ||
    		(toMonth && toMonth < day) ) {
    		return false;
    	}
    	return true;
    }

    allowNextMonth() {
    	const { numberOfMonths } = this.props;
    	const { currentMonth } = this.state;
		const previousMonth = addMonths(currentMonth, numberOfMonths);
    	return this.allowMonth(previousMonth);
    }

    allowPreviousMonth() {
    	const { currentMonth } = this.state;
    	const { numberOfMonths } = this.props;
    	const previousMonth = addMonths(currentMonth, -1);
    	return this.allowMonth(previousMonth);
    }

	showNextMonth(callback) {
		if (!this.allowNextMonth()) {
			return;
		}
		const nextMonth = addMonths(this.state.currentMonth, 1);
		this.showMonth(nextMonth, callback);
	}

	showPreviousMonth(callback) {
		if (!this.allowPreviousMonth()) {
			return;
		}
		const previousMonth = addMonths(this.state.currentMonth, -1);
		this.showMonth(previousMonth, callback);
	}

    renderNavbar() {
    	const props = {
			className: 'DayPicker-NavBar',
			showPreviousButton: this.allowPreviousMonth(),
			showNextButton: this.allowNextMonth(),
			onNextClick: this.showNextMonth,
			onPreviousClick: this.showPreviousMonth
    	};
    	return (<Navbar {...props}></Navbar>);
    }

	renderMonths() {
    	let { captionElement, 
    		selectedDays, 
    		disabledDays, 
    		fixedWeeks,
    		onDayClick
    		} = this.props;

    	let months = [];

    	for (let i = 0; i < this.props.numberOfMonths; i++) {
    		const month = addMonths(this.state.currentMonth, i);
    		months.push(
    			<Month key = {i}
    				month = {month}
    				captionElement = {captionElement}
    				selectedDays = {selectedDays}
    				disabledDays = {disabledDays}
    				fixedWeeks = {fixedWeeks}
    				onDayClick = { onDayClick || undefined }
    			></Month>
    		)
    	}

    	return months;
	}
	
	render() {
		let {className} = this.props;
		return (
			<div className={className}>
				{this.renderNavbar()}
				{this.renderMonths()}
			</div>
		);
	}
}