"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("normalize.css/normalize.css");

require("./styles/styles.scss");

var _Home = _interopRequireDefault(require("./components/Home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_reactDom["default"].render(_react["default"].createElement(_Home["default"], null), document.getElementById('app'));