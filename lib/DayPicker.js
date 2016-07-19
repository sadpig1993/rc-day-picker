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

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

var _Caption = require('./Caption');

var _Caption2 = _interopRequireDefault(_Caption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
	}, {
		key: 'showMonth',
		value: function showMonth(day, callback) {
			var _this2 = this;

			if (!this.allowMonth(day)) {
				return;
			}
			this.setState({ currentMonth: day }, function () {
				//Helpers.startOfMonth(d)
				if (callback) {
					callback();
				}
				if (_this2.props.onMonthChange) {
					_this2.props.onMonthChange(_this2.state.currentMonth);
				}
			});
		}
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
	}, {
		key: 'allowNextMonth',
		value: function allowNextMonth() {
			var numberOfMonths = this.props.numberOfMonths;
			var currentMonth = this.state.currentMonth;

			var previousMonth = (0, _Utils.addMonths)(currentMonth, numberOfMonths);
			return this.allowMonth(previousMonth);
		}
	}, {
		key: 'allowPreviousMonth',
		value: function allowPreviousMonth() {
			var currentMonth = this.state.currentMonth;
			var numberOfMonths = this.props.numberOfMonths;

			var previousMonth = (0, _Utils.addMonths)(currentMonth, -1);
			return this.allowMonth(previousMonth);
		}
	}, {
		key: 'showNextMonth',
		value: function showNextMonth(callback) {
			if (!this.allowNextMonth()) {
				return;
			}
			var nextMonth = (0, _Utils.addMonths)(this.state.currentMonth, 1);
			this.showMonth(nextMonth, callback);
		}
	}, {
		key: 'showPreviousMonth',
		value: function showPreviousMonth(callback) {
			if (!this.allowPreviousMonth()) {
				return;
			}
			var previousMonth = (0, _Utils.addMonths)(this.state.currentMonth, -1);
			this.showMonth(previousMonth, callback);
		}
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
	initialMonth: _react.PropTypes.instanceOf(Date),
	fromMonth: _react.PropTypes.instanceOf(Date),
	toMonth: _react.PropTypes.instanceOf(Date),

	numberOfMonths: _react.PropTypes.number,

	selectedDays: _react.PropTypes.func,
	disabledDays: _react.PropTypes.func,
	onDayClick: _react.PropTypes.func,

	modifiers: _react.PropTypes.object,

	className: _react.PropTypes.string,

	canChangeMonth: _react.PropTypes.bool,
	fixedWeeks: _react.PropTypes.bool,

	captionElement: _react.PropTypes.element
};
DayPicker.defaultProps = {
	tabIndex: 0,
	initialMonth: new Date(),
	numberOfMonths: 1,
	className: 'DayPicker',
	// weekdayElement: <Weekday />,
	// navbarElement: <Navbar />,
	captionElement: _react2.default.createElement(_Caption2.default, null),
	canChangeMonth: true,
	fixedWeeks: false
};
exports.default = DayPicker;
//# sourceMappingURL=DayPicker.js.map