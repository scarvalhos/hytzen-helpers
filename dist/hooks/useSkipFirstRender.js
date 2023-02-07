"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.useSkipFirstRender = void 0;
var react_1 = __importDefault(require("react"));
var useSkipFirstRender = function (callback, dependencies) {
    var firstRenderRef = react_1["default"].useRef(true);
    react_1["default"].useEffect(function () {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
        }
        else {
            callback();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, __spreadArray([callback], dependencies, true));
};
exports.useSkipFirstRender = useSkipFirstRender;
