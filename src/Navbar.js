/**
* @file 切换月份Tab组件
* @author xijiawei@baidu.com
*/
import React, { Component, PropTypes } from 'react';

/**
 * 切换月份Tab组件类
 *
 * @class
 * @extends Component
 */
export default class Navbar extends Component {
    static propTypes = {
        // 可设置的className前缀
        className: PropTypes.string,
        // 设置是否显示翻月button
        showPreviousButton: PropTypes.bool,
        // 设置是否显示翻月button
        showNextButton: PropTypes.bool,
        // 往前翻月份的事件回调函数
        onPreviousClick: PropTypes.func,
        // 往后翻月份的事件回调函数
        onNextClick: PropTypes.func
    };

    static defaultProps = {
        className: 'DayPicker-NavBar',
        showPreviousButton: true,
        showNextButton: true
    };

    render() {
        const buttonBaseClass = 'DayPicker-NavButton DayPicker-NavButton';
        const {
            className, 
            showNextButton, 
            showPreviousButton, 
            onPreviousClick, 
            onNextClick
        } = this.props;

        const previousButton = showPreviousButton &&
            <span
                role="button"
                key="previous"
                className={`${buttonBaseClass}--prev`}
                onClick={() => onPreviousClick()}
            />;

        const nextButton = showNextButton &&
            <span 
                role="button"
                key="right"
                className={`${buttonBaseClass}--next`}
                onClick={() => onNextClick()}
            />;

        return(
            <div className={className}>
                {previousButton}
                {nextButton}
            </div>
        );
    }
}