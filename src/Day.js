import React, { Component, PropTypes } from 'react';
import { getModifiersForDay } from './Utils.js';

export default class day extends Component {

  	static propTypes = {
        day: PropTypes.instanceOf(Date).isRequired,
        month: PropTypes.instanceOf(Date).isRequired,
        children: PropTypes.node.isRequired,
        selectedDays: PropTypes.func,
        disabledDays: PropTypes.func,
        onDayClick: PropTypes.func,
        empty: PropTypes.bool,
        modifiers: PropTypes.array,
        tabIndex: PropTypes.number
  	};

  	static defaultProps = {
  		modifiers: [],
    	empty: false
    };

    constructor(args) {
        super(...args)

        this.handleEvent = this.handleEvent.bind(this);
        // this.handleDayClick = this.handleDayClick.bind(this);
    }

    getModifiersFromProps(props) {
        const modifiers = { ...props.modifiers };
        if (props.selectedDays) {
            modifiers.selected = props.selectedDays;
        }
        if (props.disabledDays) {
            modifiers.disabled = props.disabledDays;
        }
        return modifiers;
    }

    // handleDayClick(e, day, modifiers) {
    //     // e.persist();
    //     if (modifiers.outside) {
    //       // this.handleOutsideDayClick(day);
    //     }
    //     this.props.onDayClick(e, day, modifiers);
    // }

  	render() {

        let { day, onDayClick, empty, modifiers, tabIndex, children, month } = this.props;
        let dayModifiers = [];

        if (day.getMonth() !== month.getMonth()) {
            dayModifiers.push('outside');
        }

        dayModifiers = [
            ...dayModifiers,
            ...getModifiersForDay(day, this.getModifiersFromProps(this.props)),
        ];



      	let className = 'DayPicker-Day';
        className += dayModifiers.map(modifier => ` ${className}--${modifier}`).join('');

  		return (
  			<div className = {className}
  				tabIndex = {this.props.tabIndex}
  				onClick = {this.handleEvent(onDayClick, day, dayModifiers)}
  			>
  				{empty ? '' : children}
  			</div>
  		);
  	}

  	handleEvent(handler, day, modifiers) {
  		if (!handler) {
  		    return undefined;
  		}
        const dayState = {};
        modifiers.forEach(modifier => { dayState[modifier] = true; });
		// onClick();
        return e => {
            handler(e, day, dayState);
        }
  	} 
}