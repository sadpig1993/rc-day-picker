'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _WeekLabel = require('./WeekLabel.js');

var _WeekLabel2 = _interopRequireDefault(_WeekLabel);

var _Week = require('./Week.js');

var _Week2 = _interopRequireDefault(_Week);

var _Utils = require('./Utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Month = function (_Component) {
	_inherits(Month, _Component);

	function Month() {
		_classCallCheck(this, Month);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Month).apply(this, arguments));
	}

	_createClass(Month, [{
		key: 'render',
		value: function render() {
			var weekLabels = [];
			var _props = this.props;
			var month = _props.month;
			var className = _props.className;
			var captionElement = _props.captionElement;
			var selectedDays = _props.selectedDays;
			var disabledDays = _props.disabledDays;
			var fixedWeeks = _props.fixedWeeks;
			var onDayClick = _props.onDayClick;
			var modifiers = _props.modifiers;


			for (var i = 0; i < 7; i++) {
				var eleProps = {
					className: 'DayPicker-Weekday',
					weekDay: i,
					key: i
				};
				var ele = _react2.default.createElement(_WeekLabel2.default, eleProps);
				weekLabels.push(ele);
			}

			// let month = new Date();
			var weekArray = (0, _Utils.getWeekArray)(month);
			var weekEles = weekArray.map(function (week, index) {
				return _react2.default.createElement(_Week2.default, { weekDays: week,
					key: index,
					month: month,
					weekIndex: index,
					selectedDays: selectedDays,
					disabledDays: disabledDays,
					fixedWeeks: fixedWeeks,
					onDayClick: onDayClick,
					modifiers: modifiers
				});
			});
			var captionProps = {
				date: month
				// onClick: onCaptionClick ? e => onCaptionClick(e, month) : undefined,
			};

			return _react2.default.createElement(
				'div',
				{ className: className },
				_react2.default.cloneElement(captionElement, captionProps),
				_react2.default.createElement(
					'div',
					{ className: 'DayPicker-Weekdays' },
					_react2.default.createElement(
						'div',
						{ className: 'DayPicker-WeekdaysRow' },
						weekLabels
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'DayPicker-Body' },
					weekEles
				)
			);
		}
	}]);

	return Month;
}(_react.Component);

Month.propTypes = {
	month: _react.PropTypes.instanceOf(Date).isRequired,

	captionElement: _react.PropTypes.node.isRequired,

	className: _react.PropTypes.string,

	modifiers: _react.PropTypes.object,

	disabledDays: _react.PropTypes.func,
	selectedDays: _react.PropTypes.func,
	onDayClick: _react.PropTypes.func,

	fixedWeeks: _react.PropTypes.bool
};
Month.defaultProps = {
	month: new Date(),
	className: 'DayPicker-Month',
	modifiers: {}
};
exports.default = Month;
//# sourceMappingURL=Month.js.map