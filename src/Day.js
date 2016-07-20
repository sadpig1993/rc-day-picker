/**
* @file day
* @author xijiawei@baidu.com
*/

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
        modifiers: PropTypes.object,
        tabIndex: PropTypes.number
    };

    static defaultProps = {
        modifiers: {},
        empty: false
    };

    constructor(args) {
        super(...args)

        this.handleEvent = this.handleEvent.bind(this);
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

    render() {

        let { 
            day, 
            onDayClick, 
            empty, 
            modifiers, 
            tabIndex, 
            children, 
            month 
        } = this.props;
        let dayModifiers = [];

        const isOutside = day.getMonth() !== month.getMonth();
        if (isOutside) {
            dayModifiers.push('outside');
        }

        dayModifiers = [
            ...dayModifiers,
            ...getModifiersForDay(day, this.getModifiersFromProps(this.props)),
        ];

        let className = 'DayPicker-Day';
        className += dayModifiers.map(modifier => ` ${className}--${modifier}`).join('');

        return (
            <div 
                className = {className}
                tabIndex = {this.props.tabIndex}
                onClick = {!empty ? this.handleEvent(onDayClick, day, dayModifiers) : undefined}
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
            return e => {
            handler(e, day, dayState);
        }
    } 
}