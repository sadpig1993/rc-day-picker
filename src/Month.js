/**
* @file 月份组件
* @author xijiawei@baidu.com
*/

import React, { Component, PropTypes } from 'react';
import WeekLabel from './WeekLabel.js';
import Week from './Week.js';
import { getWeekArray } from './Utils.js';

/**
 * 月份组件类
 *
 * @class
 * @extends Component
 */
export default class Month extends Component {

    static propTypes = {
        // 月份Date对象
        month: PropTypes.instanceOf(Date).isRequired,
        // 头部标题组件
        captionElement: PropTypes.node.isRequired,
        // 可设置的className
        className: PropTypes.string,

        modifiers: PropTypes.object,

        // 禁止操作的日期判断函数
        disabledDays: PropTypes.func,
        // 选中日期判断函数
        selectedDays: PropTypes.func,
        // 点击非禁止操作日期的回调函数
        onDayClick: PropTypes.func,

        // 补全日期
        fixedWeeks: PropTypes.bool
    };

    static defaultProps = {
        // 用户没有设置初始日期则用当前月份
        month: new Date(),
        // 默认className
        className: 'DayPicker-Month',
        modifiers: {}
    };

	render () {
        const weekLabels = [];
        const { 
            month, 
            className, 
            captionElement, 
            selectedDays, 
            disabledDays, 
            fixedWeeks, 
            onDayClick,
            modifiers 
        } = this.props;

        // 生成星期标题
        for (let i = 0; i < 7; i++) {
            const eleProps = {
                className: 'DayPicker-Weekday',
                weekDay: i,
                key: i
            };
            const ele = React.createElement(WeekLabel, eleProps);
            weekLabels.push(ele);
        }

        const weekArray = getWeekArray(month);
        const weekEles = weekArray.map((week, index) => {
            return (
                <Week 
                    weekDays = {week} 
                    key = {index}
                    month = {month}
                    selectedDays = {selectedDays}
                    disabledDays = {disabledDays}
                    fixedWeeks = {fixedWeeks}
                    onDayClick = {onDayClick}
                    modifiers = {modifiers}
                    >
                </Week>
            );
        });

        const captionProps = {
            date: month
        };

        return (
            <div className={className}>
                {React.cloneElement(captionElement, captionProps)}
                <div className="DayPicker-Weekdays">
                    <div className="DayPicker-WeekdaysRow">
                        {weekLabels}
                    </div>
                </div>
                <div className="DayPicker-Body">
                    {weekEles}
                </div>
            </div>
        );
	}
}