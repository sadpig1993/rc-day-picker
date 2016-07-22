'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Utils = require('./Utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @file day
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @author xijiawei@baidu.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

/**
 * Day组件类
 *
 * @class
 * @extends Component
 */

var day = function (_Component) {
    _inherits(day, _Component);

    function day(args) {
        var _Object$getPrototypeO;

        _classCallCheck(this, day);

        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(day)).call.apply(_Object$getPrototypeO, [this].concat(_toConsumableArray(args))));

        _this.handleEvent = _this.handleEvent.bind(_this);
        return _this;
    }

    /**
     * 合并自定义判断函数和Props传入的修饰器
     *
     * @param  {Object} props
     * @return {Object} 最终的修饰器
     */


    _createClass(day, [{
        key: 'getModifiersFromProps',
        value: function getModifiersFromProps(props) {
            var modifiers = _extends({}, props.modifiers);

            if (props.selectedDays) {
                modifiers.selected = props.selectedDays;
            }
            if (props.disabledDays) {
                modifiers.disabled = props.disabledDays;
            }

            return modifiers;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var day = _props.day;
            var onDayClick = _props.onDayClick;
            var empty = _props.empty;
            var modifiers = _props.modifiers;
            var children = _props.children;
            var month = _props.month;
            var className = _props.className;


            var dayModifiers = [];

            // 判断该日期是否在本月内，不在则加上outside修饰器
            var isOutside = day.getMonth() !== month.getMonth();
            if (isOutside) {
                dayModifiers.push('outside');
            }

            dayModifiers = [].concat(_toConsumableArray(dayModifiers), _toConsumableArray((0, _Utils.getModifiersForDay)(day, this.getModifiersFromProps(this.props))));

            // 根据修饰器生成对应的ClassName
            className += dayModifiers.map(function (modifier) {
                return ' ' + className + '--' + modifier;
            }).join('');

            return _react2.default.createElement(
                'div',
                {
                    className: className,
                    onClick: !empty ? this.handleEvent(onDayClick, day, dayModifiers) : undefined
                },
                empty ? '' : children
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

    }, {
        key: 'handleEvent',
        value: function handleEvent(handler, day, modifiers) {
            // 用户没有传入点击事件回调函数，则终止
            if (!handler) {
                return undefined;
            }
            var dayState = {};
            modifiers.forEach(function (modifier) {
                dayState[modifier] = true;
            });

            return function (e) {
                handler(e, day, dayState);
            };
        }
    }]);

    return day;
}(_react.Component);

day.propTypes = {
    // 日期对应的Date对象
    day: _react.PropTypes.instanceOf(Date).isRequired,
    // 当前月份的Date对象
    month: _react.PropTypes.instanceOf(Date).isRequired,

    // 日期组件显示内容
    children: _react.PropTypes.node.isRequired,
    // 自定义的className
    className: _react.PropTypes.string,
    // 选中日期判断函数      
    selectedDays: _react.PropTypes.func,
    // 禁止操作日期判断函数
    disabledDays: _react.PropTypes.func,
    // 自定义日期点击事件回调函数
    onDayClick: _react.PropTypes.func,
    // 日期是否显示
    empty: _react.PropTypes.bool,
    // 自定义修饰器判断函数
    modifiers: _react.PropTypes.object
};
day.defaultProps = {
    modifiers: {},
    empty: false,
    className: 'DayPicker-Day'
};
exports.default = day;
//# sourceMappingURL=Day.js.map