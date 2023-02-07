"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.useBreakpoint = void 0;
var react_1 = __importDefault(require("react"));
var initialState = {
    xxs: false,
    xs: false,
    lg: false,
    md: false,
    sm: false,
    xl: false
};
var reducer = function (state, action) {
    var equals = Object.entries(action)
        .map(function (_a) {
        var screen = _a[0], matches = _a[1];
        return state[screen] === matches;
    })
        .reduce(function (a, b) { return a && b; }, true);
    if (equals)
        return state;
    return __assign(__assign({}, state), action);
};
var screens = {
    xxs: '(min-width: 480px)',
    xs: '(min-width: 560px)',
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)'
};
function useBreakpoint() {
    var _a = react_1["default"].useReducer(reducer, initialState), state = _a[0], dispatch = _a[1];
    react_1["default"].useLayoutEffect(function () {
        var events = Object.entries(screens).map(function (_a) {
            var _b;
            var screen = _a[0], query = _a[1];
            var media = window.matchMedia(query);
            dispatch((_b = {}, _b[screen] = media.matches, _b));
            var handler = function (_a) {
                var _b;
                var matches = _a.matches;
                return dispatch((_b = {}, _b[screen] = matches, _b));
            };
            media.addEventListener('change', handler);
            return [media, handler];
        });
        return function () {
            events.forEach(function (_a) {
                var media = _a[0], handler = _a[1];
                return media.removeEventListener('change', handler);
            });
        };
    }, []);
    return state;
}
exports.useBreakpoint = useBreakpoint;
