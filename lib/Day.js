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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var day = function (_Component) {
    _inherits(day, _Component);

    function day(args) {
        var _Object$getPrototypeO;

        _classCallCheck(this, day);

        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(day)).call.apply(_Object$getPrototypeO, [this].concat(_toConsumableArray(args))));

        _this.handleEvent = _this.handleEvent.bind(_this);
        // this.handleDayClick = this.handleDayClick.bind(this);
        return _this;
    }

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

        // handleDayClick(e, day, modifiers) {
        //     // e.persist();
        //     if (modifiers.outside) {
        //       // this.handleOutsideDayClick(day);
        //     }
        //     this.props.onDayClick(e, day, modifiers);
        // }

    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var day = _props.day;
            var onDayClick = _props.onDayClick;
            var empty = _props.empty;
            var modifiers = _props.modifiers;
            var tabIndex = _props.tabIndex;
            var children = _props.children;
            var month = _props.month;

            var dayModifiers = [];

            if (day.getMonth() !== month.getMonth()) {
                dayModifiers.push('outside');
            }

            dayModifiers = [].concat(_toConsumableArray(dayModifiers), _toConsumableArray((0, _Utils.getModifiersForDay)(day, this.getModifiersFromProps(this.props))));

            var className = 'DayPicker-Day';
            className += dayModifiers.map(function (modifier) {
                return ' ' + className + '--' + modifier;
            }).join('');

            return _react2.default.createElement(
                'div',
                { className: className,
                    tabIndex: this.props.tabIndex,
                    onClick: this.handleEvent(onDayClick, day, dayModifiers)
                },
                empty ? '' : children
            );
        }
    }, {
        key: 'handleEvent',
        value: function handleEvent(handler, day, modifiers) {
            if (!handler) {
                return undefined;
            }
            var dayState = {};
            modifiers.forEach(function (modifier) {
                dayState[modifier] = true;
            });
            // onClick();
            return function (e) {
                handler(e, day, dayState);
            };
        }
    }]);

    return day;
}(_react.Component);

day.propTypes = {
    day: _react.PropTypes.instanceOf(Date).isRequired,
    month: _react.PropTypes.instanceOf(Date).isRequired,
    children: _react.PropTypes.node.isRequired,
    selectedDays: _react.PropTypes.func,
    disabledDays: _react.PropTypes.func,
    onDayClick: _react.PropTypes.func,
    empty: _react.PropTypes.bool,
    modifiers: _react.PropTypes.object,
    tabIndex: _react.PropTypes.number
};
day.defaultProps = {
    modifiers: [],
    empty: false
};
exports.default = day;
//# sourceMappingURL=Day.js.map