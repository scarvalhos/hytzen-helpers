"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.useDebounce = void 0;
var react_1 = __importDefault(require("react"));
var useDebounce = function (value, delay) {
    var _a = react_1["default"].useState(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    react_1["default"].useEffect(function () {
        var handler = setTimeout(function () {
            setDebouncedValue(value);
        }, delay);
        return function () {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
};
exports.useDebounce = useDebounce;
