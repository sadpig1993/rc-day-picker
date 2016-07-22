'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Utils = require('./Utils.js');

var _Day = require('./Day.js');

var _Day2 = _interopRequireDefault(_Day);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @file 星期
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @author xijiawei@baidu.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

/**
 * 星期组件类
 *
 * @class
 * @extends Component
 */

var week = function (_Component) {
    _inherits(week, _Component);

    function week() {
        var _Object$getPrototypeO;

        _classCallCheck(this, week);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(week)).call.apply(_Object$getPrototypeO, [this].concat(args)));
    }

    _createClass(week, [{
        key: 'render',
        value: function render() {
            var className = this.props.className || 'DayPicker-Day';
            var _props = this.props;
            var weekDays = _props.weekDays;
            var selectedDays = _props.selectedDays;
            var disabledDays = _props.disabledDays;
            var month = _props.month;
            var fixedWeeks = _props.fixedWeeks;
            var onDayClick = _props.onDayClick;
            var modifiers = _props.modifiers;


            var days = weekDays.map(function (day, index) {
                // 判断该日期是否在本月内
                var isOutside = day.getMonth() !== month.getMonth();
                // 补全缺首尾两周日期未配置则默认不显示
                var empty = isOutside && !fixedWeeks;

                return _react2.default.createElement(_Day2.default, {
                    className: className,
                    children: day.getDate(),
                    day: day,
                    month: month,
                    modifiers: modifiers,
                    key: index,
                    empty: empty,
                    selectedDays: selectedDays,
                    disabledDays: disabledDays,
                    fixedWeeks: fixedWeeks,
                    onDayClick: onDayClick
                });
            });

            return _react2.default.createElement(
                'div',
                { className: 'DayPicker-Week' },
                days
            );
        }
    }]);

    return week;
}(_react.Component);

week.propTypes = {
    // 可设置的className
    className: _react.PropTypes.string,
    // 该周内的日期Date对象数组
    weekDays: _react.PropTypes.array,

    modifiers: _react.PropTypes.object,
    // 该星期所属月份的Date对象
    month: _react.PropTypes.instanceOf(Date).isRequired,

    // 禁止操作日期判断函数
    disabledDays: _react.PropTypes.func,
    // 选中日期判断函数
    selectedDays: _react.PropTypes.func,
    // 日期点击事件响应函数
    onDayClick: _react.PropTypes.func,

    // 是否补全属于前后一个月的日期
    fixedWeeks: _react.PropTypes.bool

};
week.defaultProps = {
    // modifiers默认为空对象
    modifiers: {}
};
exports.default = week;
//# sourceMappingURL=Week.js.map