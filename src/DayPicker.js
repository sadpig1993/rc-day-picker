/**
* @file React日期选择组件入口文件
* @author sadpig
*/

import React, { Component, PropTypes } from 'react';

import Navbar from './Navbar';
import Month from './Month';
import Day from './Day';
import { addMonths } from './Utils.js';
import Caption from './Caption';


/**
 * DayPicker组件类
 *
 * @class
 * @extends Component
 */
export default class DayPicker extends Component {

    static propTypes = {
        // 初始的月份Date对象
        initialMonth: PropTypes.instanceOf(Date),
        // 允许切换月份范围起始月份Date对象
        fromMonth: PropTypes.instanceOf(Date),
        // 允许切换月份范围结束月份Date对象
        toMonth: PropTypes.instanceOf(Date),

        // 渲染月份数目
        numberOfMonths: PropTypes.number,

        // 选中日期判断函数
        selectedDays: PropTypes.func,
        // 禁止操作日期判断函数
        disabledDays: PropTypes.func,
        // 点击非禁止操作日期的回调函数
        onDayClick: PropTypes.func,
        // 自定义判断函数
        modifiers: PropTypes.object,

        // 可设置的className
        className: PropTypes.string,

        // 设置是否可以切换月份
        canChangeMonth: PropTypes.bool,
        // 设置是否补全日期
        fixedWeeks: PropTypes.bool,

        // 头部标题的element
        captionElement: PropTypes.element    
    };

    static defaultProps = {
        initialMonth: new Date(),
        numberOfMonths: 1,
        className: 'DayPicker',
        captionElement: <Caption />,
        canChangeMonth: true,
        fixedWeeks: false,
        modifiers: {}
    };

    constructor(...args) {
        super(...args);

        this.showNextMonth = this.showNextMonth.bind(this);
        this.showPreviousMonth = this.showPreviousMonth.bind(this);
        // 设置当前月份为传入的初始月份
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

    /**
     * 切换到指定月份
     *
     * @param {Date} day 要切换的月份的Date对象
     * @param {Function} callback
     */
    showMonth(day, callback) {
        if (!this.allowMonth(day)) {
            return;
        }
        this.setState({ currentMonth: day }, () => {
            if (callback) {
                callback();
            }
            if (this.props.onMonthChange) {
                this.props.onMonthChange(this.state.currentMonth);
            }
        })
    }


    /**
     * 判断该月份是否可以切换
     *
     * @param {Date} day 要切换的月份的Date对象
     * @param {Function} callback
     * @return {Boolean} 
     */
    allowMonth(day) {
        const { fromMonth, toMonth, canChangeMonth } = this.props;

        if (!canChangeMonth ||
            (fromMonth && fromMonth > day) ||
            (toMonth && toMonth < day) 
        ) {
            return false;
        }

        return true;
    }

    /**
     * 判断是否可以切换到下个月
     *
     * @return {Boolean} 
     */
    allowNextMonth() {
        const { numberOfMonths } = this.props;
        const { currentMonth } = this.state;
        const previousMonth = addMonths(currentMonth, numberOfMonths);
        return this.allowMonth(previousMonth);
    }

    /**
     * 判断是否可以切换到上个月
     *
     * @return {Boolean} 
     */
    allowPreviousMonth() {
        const { currentMonth } = this.state;
        const { numberOfMonths } = this.props;
        const previousMonth = addMonths(currentMonth, -1);
        return this.allowMonth(previousMonth);
    }

    /**
     * 切换月份到下一个月
     *
     * @param {Function} callback
     */
    showNextMonth(callback) {
        if (!this.allowNextMonth()) {
            return;
        }
        const nextMonth = addMonths(this.state.currentMonth, 1);
        this.showMonth(nextMonth, callback);
    }

    /**
     * 切换月份到上一个月
     *
     * @param {Function} callback 
     */
    showPreviousMonth(callback) {
        if (!this.allowPreviousMonth()) {
            return;
        }
        const previousMonth = addMonths(this.state.currentMonth, -1);
        this.showMonth(previousMonth, callback);
    }

    /**
     * 生成切换月份导航栏Element
     *
     * @return {Object} 
     */
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

    /**
     * 生成月份Elements数组
     *
     * @return {Array} 
     */
    renderMonths() {
        let { 
            captionElement, 
            selectedDays, 
            disabledDays, 
            fixedWeeks,
            onDayClick,
            modifiers,
        } = this.props;

        let months = [];

        for (let i = 0; i < this.props.numberOfMonths; i++) {
            const month = addMonths(this.state.currentMonth, i);
            months.push(
                <Month key = {i}
                    month = {month}
                    modifiers = {modifiers}
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