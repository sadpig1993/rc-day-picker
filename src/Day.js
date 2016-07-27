/**
* @file day
* @author sadpig
*/

import React, { Component, PropTypes } from 'react';
import { getModifiersForDay } from './Utils.js';


/**
 * Day组件类
 *
 * @class
 * @extends Component
 */
export default class day extends Component {

    static propTypes = {
        // 日期对应的Date对象
        day: PropTypes.instanceOf(Date).isRequired,
        // 当前月份的Date对象
        month: PropTypes.instanceOf(Date).isRequired,

        // 日期组件显示内容
        children: PropTypes.node.isRequired,
         // 自定义的className
        className: PropTypes.string,
        // 选中日期判断函数      
        selectedDays: PropTypes.func,
        // 禁止操作日期判断函数
        disabledDays: PropTypes.func,
        // 自定义日期点击事件回调函数
        onDayClick: PropTypes.func,
        // 日期是否显示
        empty: PropTypes.bool,
        // 自定义修饰器判断函数
        modifiers: PropTypes.object,
    };

    static defaultProps = {
        modifiers: {},
        empty: false,
        className: 'DayPicker-Day'
    };

    constructor(props) {
        super(props)
        this.handleEvent = this.handleEvent.bind(this);
    }

    /**
     * 合并自定义判断函数和Props传入的修饰器
     *
     * @param  {Object} props
     * @return {Object} 最终的修饰器
     */
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
            children, 
            month,
            className
        } = this.props;

        let dayModifiers = [];

        // 判断该日期是否在本月内，不在则加上outside修饰器
        const isOutside = day.getMonth() !== month.getMonth();
        if (isOutside) {
            dayModifiers.push('outside');
        }

        var test  = getModifiersForDay(day, this.getModifiersFromProps(this.props));

        dayModifiers = [
            ...dayModifiers,
            ...getModifiersForDay(day, this.getModifiersFromProps(this.props)),
        ];

        // 根据修饰器生成对应的ClassName
        className += dayModifiers.map(modifier => ` ${className}--${modifier}`).join('');

        return (
            <div 
                className = {className}
                onClick = {!empty ? this.handleEvent(onDayClick, day, dayModifiers) : undefined}
            >
            {empty ? '' : children}
            </div>
        );
    }

    /**
     * 处理日期点击事件回调函数
     *
     * @param  {Function}  handler 用户传入的点击函数
     * @param  {Date}  day 所点日期的Date对象 
     * @param  {Object} modifiers 修饰器对象
     * @return {Function} 
     */
    handleEvent(handler, day, modifiers) {
        // 用户没有传入点击事件回调函数，则终止
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