"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.useLocalStorage = void 0;
var react_1 = __importDefault(require("react"));
var useLocalStorage = function (key, initialValue) {
    if (initialValue === void 0) { initialValue = ''; }
    var _a = react_1["default"].useState(function () {
        try {
            var storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : initialValue;
        }
        catch (error) {
            return initialValue;
        }
    }), state = _a[0], setState = _a[1];
    var setValue = react_1["default"].useCallback(function (value) {
        try {
            setState(value);
            localStorage.setItem(key, JSON.stringify(value));
        }
        catch (error) {
            console.error(error);
        }
    }, [key]);
    return [state, setValue];
};
exports.useLocalStorage = useLocalStorage;
