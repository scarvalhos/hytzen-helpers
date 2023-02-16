"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.useKeyPress = void 0;
var react_1 = __importDefault(require("react"));
var useKeyPress = function (targetKey) {
    var _a = react_1["default"].useState(false), keyPressed = _a[0], setKeyPressed = _a[1];
    var downHandler = react_1["default"].useCallback(function (_a) {
        var key = _a.key;
        if (key === targetKey)
            setKeyPressed(true);
    }, [targetKey]);
    var upHandler = react_1["default"].useCallback(function (_a) {
        var key = _a.key;
        if (key === targetKey)
            setKeyPressed(false);
    }, [targetKey]);
    react_1["default"].useEffect(function () {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);
        return function () {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, []);
    return keyPressed;
};
exports.useKeyPress = useKeyPress;
