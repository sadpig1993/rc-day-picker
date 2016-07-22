'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @file 切换月份Tab组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @author xijiawei@baidu.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


/**
 * 切换月份Tab组件类
 *
 * @class
 * @extends Component
 */

var Navbar = function (_Component) {
    _inherits(Navbar, _Component);

    function Navbar() {
        _classCallCheck(this, Navbar);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).apply(this, arguments));
    }

    _createClass(Navbar, [{
        key: 'render',
        value: function render() {
            var buttonBaseClass = 'DayPicker-NavButton DayPicker-NavButton';
            var _props = this.props;
            var className = _props.className;
            var showNextButton = _props.showNextButton;
            var showPreviousButton = _props.showPreviousButton;
            var onPreviousClick = _props.onPreviousClick;
            var onNextClick = _props.onNextClick;


            var previousButton = showPreviousButton && _react2.default.createElement('span', {
                role: 'button',
                key: 'previous',
                className: buttonBaseClass + '--prev',
                onClick: function onClick() {
                    return onPreviousClick();
                }
            });

            var nextButton = showNextButton && _react2.default.createElement('span', {
                role: 'button',
                key: 'right',
                className: buttonBaseClass + '--next',
                onClick: function onClick() {
                    return onNextClick();
                }
            });

            return _react2.default.createElement(
                'div',
                { className: className },
                previousButton,
                nextButton
            );
        }
    }]);

    return Navbar;
}(_react.Component);

Navbar.propTypes = {
    // 可设置的className前缀
    className: _react.PropTypes.string,
    // 设置是否显示翻月button
    showPreviousButton: _react.PropTypes.bool,
    // 设置是否显示翻月button
    showNextButton: _react.PropTypes.bool,
    // 往前翻月份的事件回调函数
    onPreviousClick: _react.PropTypes.func,
    // 往后翻月份的事件回调函数
    onNextClick: _react.PropTypes.func
};
Navbar.defaultProps = {
    className: 'DayPicker-NavBar',
    showPreviousButton: true,
    showNextButton: true
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map