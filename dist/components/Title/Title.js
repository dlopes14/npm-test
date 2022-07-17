"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = void 0;

var _react = _interopRequireDefault(require("react"));

var _TitleModule = _interopRequireDefault(require("./Title.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Title = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h1", {
    className: _TitleModule.default['title']
  }, props.titulo));
};

exports.Title = Title;