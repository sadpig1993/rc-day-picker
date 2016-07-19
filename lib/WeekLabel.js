'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Utils = require('./Utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WeekLabel = function (_Component) {
	_inherits(WeekLabel, _Component);

	function WeekLabel() {
		var _Object$getPrototypeO;

		_classCallCheck(this, WeekLabel);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(WeekLabel)).call.apply(_Object$getPrototypeO, [this].concat(args)));
	}

	_createClass(WeekLabel, [{
		key: 'render',
		value: function render() {
			var className = this.props.className || 'DayPicker-Weekday';
			var _props = this.props;
			var localeUtils = _props.localeUtils;
			var weekDay = _props.weekDay;


			return _react2.default.createElement(
				'div',
				{ className: className },
				_react2.default.createElement(
					'div',
					null,
					(0, _Utils.formatWeekday)(weekDay)
				)
			);
		}
	}]);

	return WeekLabel;
}(_react.Component);

WeekLabel.propTypes = {
	className: _react.PropTypes.string,
	weekDay: _react.PropTypes.number

};
WeekLabel.defaultProps = {};
exports.default = WeekLabel;
//# sourceMappingURL=WeekLabel.js.map