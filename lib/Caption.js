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

var Month = function (_Component) {
  _inherits(Month, _Component);

  function Month() {
    _classCallCheck(this, Month);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Month).apply(this, arguments));
  }

  _createClass(Month, [{
    key: 'render',
    value: function render() {
      // {localeUtils.formatMonthTitle(date, locale)}
      var _props = this.props;
      var className = _props.className;
      var date = _props.date;

      return _react2.default.createElement(
        'div',
        { className: className },
        (0, _Utils.formatMonthTitle)(date)
      );
    }
  }]);

  return Month;
}(_react.Component);

Month.propTypes = {
  date: _react.PropTypes.instanceOf(Date),
  onClick: _react.PropTypes.func
};
Month.defaultProps = {
  className: 'DayPicker-Caption'
};
exports.default = Month;
//# sourceMappingURL=Caption.js.map