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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
			var weekIndex = _props.weekIndex;
			var weekIndexRange = _props.weekIndexRange;
			var selectedDays = _props.selectedDays;
			var disabledDays = _props.disabledDays;
			var month = _props.month;
			var fixedWeeks = _props.fixedWeeks;
			var onDayClick = _props.onDayClick;


			var days = weekDays.map(function (day, index) {
				// let dayIndex = weekIndex * 7 + index;
				// let empty = (dayIndex > weekIndexRange.endIndex || 
				// dayIndex < weekIndexRange.startIndex);
				var isOutside = day.getMonth() !== month.getMonth();

				var empty = isOutside && !fixedWeeks;
				return _react2.default.createElement(_Day2.default, { className: className,
					children: day.getDate(),
					day: day,
					month: month,
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
	className: _react.PropTypes.string,
	weekDays: _react.PropTypes.array,
	weekIndexRange: _react.PropTypes.object,
	weekIndex: _react.PropTypes.number,
	month: _react.PropTypes.instanceOf(Date).isRequired,
	disabledDays: _react.PropTypes.func,
	selectedDays: _react.PropTypes.func,
	onDayClick: _react.PropTypes.func,

	fixedWeeks: _react.PropTypes.bool

};
week.defaultProps = {};
exports.default = week;
//# sourceMappingURL=Week.js.map