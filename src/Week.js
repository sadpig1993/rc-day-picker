/**
* @file 星期
* @author xijiawei@baidu.com
*/


import React, { Component, PropTypes } from 'react';
import {formatWeekday} from './Utils.js';
import Day from './Day.js';

/**
 * 星期组件类
 *
 * @class
 * @extends Component
 */
export default class week extends Component {

    static propTypes = {
        // 可设置的className
        className: PropTypes.string,
        // 该周内的日期Date对象数组
        weekDays: PropTypes.array,
        
        modifiers: PropTypes.object,
        // 该星期所属月份的Date对象
        month: PropTypes.instanceOf(Date).isRequired,

        // 禁止操作日期判断函数
        disabledDays: PropTypes.func,
        // 选中日期判断函数
        selectedDays: PropTypes.func,
        // 日期点击事件响应函数
        onDayClick: PropTypes.func,

        // 是否补全属于前后一个月的日期
        fixedWeeks: PropTypes.bool

    };
    static defaultProps = {
        // modifiers默认为空对象
        modifiers: {}
    };

    constructor(...args) {
        super(...args);
    }

    render () {
        let className = this.props.className || 'DayPicker-Day';
        let { weekDays, 
            selectedDays, 
            disabledDays, 
            month,
            fixedWeeks,
            onDayClick,
            modifiers
            } = this.props;

        const days = weekDays.map((day, index) => {
            // 判断该日期是否在本月内
            const isOutside = day.getMonth() !== month.getMonth();
            // 补全缺首尾两周日期未配置则默认不显示
            let empty = isOutside && !fixedWeeks;
            
            return (<Day 
                    className = {className} 
                    children = {day.getDate()} 
                    day = {day} 
                    month = {month}
                    modifiers = {modifiers}
                    key = {index}
                    empty = {empty}
                    selectedDays = {selectedDays}
                    disabledDays = {disabledDays}
                    fixedWeeks = {fixedWeeks}
                    onDayClick = {onDayClick}
                    ></Day>);
        });

        return (
            <div className="DayPicker-Week">
                {days}
            </div>
        );
        
    }
}