"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.useToggle = void 0;
var react_1 = __importDefault(require("react"));
var useToggle = function (value1, value2) {
    if (value1 === void 0) { value1 = true; }
    if (value2 === void 0) { value2 = false; }
    var _a = react_1["default"].useState(value1), state = _a[0], setState = _a[1];
    var toggle = react_1["default"].useCallback(function () {
        setState(function (oldState) { return (oldState === value1 ? value2 : value1); });
    }, []);
    return [state, toggle];
};
exports.useToggle = useToggle;
