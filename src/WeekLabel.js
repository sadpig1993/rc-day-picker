/**
* @file 星期头部标题
* @author xijiawei@baidu.com
*/

import React, { Component, PropTypes } from 'react';
import {formatWeekday} from './Utils.js';

/**
 * 日历头部星期文案组件类
 *
 * @class
 * @extends Component
 */
export default class WeekLabel extends Component {

    static propTypes = {
    	// 支持设置的className的值
        className: PropTypes.string,
        // 对应星期的值
        weekDay: PropTypes.number,
    };
    
    constructor(...args) {
        super(...args);
    }

    render () {
        let className = this.props.className || 'DayPicker-Weekday';
        let weekDay = this.props.weekDay;

        return (
            <div className = {className}>
                <div>
                    {formatWeekday(weekDay)}
                </div>
            </div>
        );
        
    }
}