"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.useDevice = void 0;
var react_1 = __importDefault(require("react"));
var useDevice = function () {
    var _a = react_1["default"].useState('desktop'), device = _a[0], setDevice = _a[1];
    react_1["default"].useEffect(function () {
        if (navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/Windows Phone/i)) {
            setDevice('mobile');
        }
        else {
            setDevice('desktop');
        }
    }, []);
    return device;
};
exports.useDevice = useDevice;
