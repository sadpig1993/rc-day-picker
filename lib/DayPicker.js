'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Month = require('./Month');

var _Month2 = _interopRequireDefault(_Month);

var _Day = require('./Day');

var _Day2 = _interopRequireDefault(_Day);

var _Utils = require('./Utils.js');

var _Caption = require('./Caption');

var _Caption2 = _interopRequireDefault(_Caption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @file React日期选择组件入口文件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @author xijiawei@baidu.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

/**
 * DayPicker组件类
 *
 * @class
 * @extends Component
 */

var DayPicker = function (_Component) {
    _inherits(DayPicker, _Component);

    function DayPicker() {
        var _Object$getPrototypeO;

        _classCallCheck(this, DayPicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DayPicker)).call.apply(_Object$getPrototypeO, [this].concat(args)));

        _this.showNextMonth = _this.showNextMonth.bind(_this);
        _this.showPreviousMonth = _this.showPreviousMonth.bind(_this);
        // 设置当前月份为传入的初始月份
        _this.state = {
            currentMonth: _this.props.initialMonth
        };
        return _this;
    }

    _createClass(DayPicker, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
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

    }, {
        key: 'showMonth',
        value: function showMonth(day, callback) {
            var _this2 = this;

            if (!this.allowMonth(day)) {
                return;
            }
            this.setState({ currentMonth: day }, function () {
                if (callback) {
                    callback();
                }
                if (_this2.props.onMonthChange) {
                    _this2.props.onMonthChange(_this2.state.currentMonth);
                }
            });
        }

        /**
         * 判断该月份是否可以切换
         *
         * @param {Date} day 要切换的月份的Date对象
         * @param {Function} callback
         * @return {Boolean} 
         */

    }, {
        key: 'allowMonth',
        value: function allowMonth(day) {
            var _props = this.props;
            var fromMonth = _props.fromMonth;
            var toMonth = _props.toMonth;
            var canChangeMonth = _props.canChangeMonth;


            if (!canChangeMonth || fromMonth && fromMonth > day || toMonth && toMonth < day) {
                return false;
            }

            return true;
        }

        /**
         * 判断是否可以切换到下个月
         *
         * @return {Boolean} 
         */

    }, {
        key: 'allowNextMonth',
        value: function allowNextMonth() {
            var numberOfMonths = this.props.numberOfMonths;
            var currentMonth = this.state.currentMonth;

            var previousMonth = (0, _Utils.addMonths)(currentMonth, numberOfMonths);
            return this.allowMonth(previousMonth);
        }

        /**
         * 判断是否可以切换到上个月
         *
         * @return {Boolean} 
         */

    }, {
        key: 'allowPreviousMonth',
        value: function allowPreviousMonth() {
            var currentMonth = this.state.currentMonth;
            var numberOfMonths = this.props.numberOfMonths;

            var previousMonth = (0, _Utils.addMonths)(currentMonth, -1);
            return this.allowMonth(previousMonth);
        }

        /**
         * 切换月份到下一个月
         *
         * @param {Function} callback
         */

    }, {
        key: 'showNextMonth',
        value: function showNextMonth(callback) {
            if (!this.allowNextMonth()) {
                return;
            }
            var nextMonth = (0, _Utils.addMonths)(this.state.currentMonth, 1);
            this.showMonth(nextMonth, callback);
        }

        /**
         * 切换月份到上一个月
         *
         * @param {Function} callback 
         */

    }, {
        key: 'showPreviousMonth',
        value: function showPreviousMonth(callback) {
            if (!this.allowPreviousMonth()) {
                return;
            }
            var previousMonth = (0, _Utils.addMonths)(this.state.currentMonth, -1);
            this.showMonth(previousMonth, callback);
        }

        /**
         * 生成切换月份导航栏Element
         *
         * @return {Object} 
         */

    }, {
        key: 'renderNavbar',
        value: function renderNavbar() {
            var props = {
                className: 'DayPicker-NavBar',
                showPreviousButton: this.allowPreviousMonth(),
                showNextButton: this.allowNextMonth(),
                onNextClick: this.showNextMonth,
                onPreviousClick: this.showPreviousMonth
            };
            return _react2.default.createElement(_Navbar2.default, props);
        }

        /**
         * 生成月份Elements数组
         *
         * @return {Array} 
         */

    }, {
        key: 'renderMonths',
        value: function renderMonths() {
            var _props2 = this.props;
            var captionElement = _props2.captionElement;
            var selectedDays = _props2.selectedDays;
            var disabledDays = _props2.disabledDays;
            var fixedWeeks = _props2.fixedWeeks;
            var onDayClick = _props2.onDayClick;
            var modifiers = _props2.modifiers;


            var months = [];

            for (var i = 0; i < this.props.numberOfMonths; i++) {
                var month = (0, _Utils.addMonths)(this.state.currentMonth, i);
                months.push(_react2.default.createElement(_Month2.default, { key: i,
                    month: month,
                    modifiers: modifiers,
                    captionElement: captionElement,
                    selectedDays: selectedDays,
                    disabledDays: disabledDays,
                    fixedWeeks: fixedWeeks,
                    onDayClick: onDayClick || undefined
                }));
            }

            return months;
        }
    }, {
        key: 'render',
        value: function render() {
            var className = this.props.className;

            return _react2.default.createElement(
                'div',
                { className: className },
                this.renderNavbar(),
                this.renderMonths()
            );
        }
    }]);

    return DayPicker;
}(_react.Component);

DayPicker.propTypes = {
    // 初始的月份Date对象
    initialMonth: _react.PropTypes.instanceOf(Date),
    // 允许切换月份范围起始月份Date对象
    fromMonth: _react.PropTypes.instanceOf(Date),
    // 允许切换月份范围结束月份Date对象
    toMonth: _react.PropTypes.instanceOf(Date),

    // 渲染月份数目
    numberOfMonths: _react.PropTypes.number,

    // 选中日期判断函数
    selectedDays: _react.PropTypes.func,
    // 禁止操作日期判断函数
    disabledDays: _react.PropTypes.func,
    // 点击非禁止操作日期的回调函数
    onDayClick: _react.PropTypes.func,
    // 自定义判断函数
    modifiers: _react.PropTypes.object,

    // 可设置的className
    className: _react.PropTypes.string,

    // 设置是否可以切换月份
    canChangeMonth: _react.PropTypes.bool,
    // 设置是否补全日期
    fixedWeeks: _react.PropTypes.bool,

    // 头部标题的element
    captionElement: _react.PropTypes.element
};
DayPicker.defaultProps = {
    initialMonth: new Date(),
    numberOfMonths: 1,
    className: 'DayPicker',
    captionElement: _react2.default.createElement(_Caption2.default, null),
    canChangeMonth: true,
    fixedWeeks: false,
    modifiers: {}
};
exports.default = DayPicker;
//# sourceMappingURL=DayPicker.js.map