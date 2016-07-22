/**
* @file 每个月的头部年份月份标题
* @author xijiawei@baidu.com
*/

import React, { Component, PropTypes } from 'react';
import {formatMonthTitle} from './Utils.js';


/**
 * 切换月份Tab组件类
 *
 * @class
 * @extends Component
 */
export default class Caption extends Component {
    static propTypes = {
        // 传入的Date对象，通过这个对象生成对应的月份标题
        date: PropTypes.instanceOf(Date)
    };

    static defaultProps = {
        // 默认的className
        className: 'DayPicker-Caption'
    };

    render() {
        let { className, date } = this.props;
        
        return(
            <div className={className}>
                {formatMonthTitle(date)}
            </div>
        );
    }
}
