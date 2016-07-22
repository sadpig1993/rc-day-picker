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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @file 每个月的头部年份月份标题
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @author xijiawei@baidu.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

/**
 * 切换月份Tab组件类
 *
 * @class
 * @extends Component
 */

var Caption = function (_Component) {
    _inherits(Caption, _Component);

    function Caption() {
        _classCallCheck(this, Caption);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Caption).apply(this, arguments));
    }

    _createClass(Caption, [{
        key: 'render',
        value: function render() {
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

    return Caption;
}(_react.Component);

Caption.propTypes = {
    // 传入的Date对象，通过这个对象生成对应的月份标题
    date: _react.PropTypes.instanceOf(Date)
};
Caption.defaultProps = {
    // 默认的className
    className: 'DayPicker-Caption'
};
exports.default = Caption;
//# sourceMappingURL=Caption.js.map