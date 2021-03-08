"use strict";

var _react = _interopRequireDefault(require("react"));

var _user$address;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function App() {
  return /*#__PURE__*/_react["default"].createElement("h1", null, "Hellow world");
}

var user = {
  name: 'Diego'
};
console.log((_user$address = user.address) === null || _user$address === void 0 ? void 0 : _user$address.street);
