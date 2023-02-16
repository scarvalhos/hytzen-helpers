"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.useOnScreen = void 0;
var react_1 = __importDefault(require("react"));
var useOnScreen = function (ref, rootMargin) {
    if (rootMargin === void 0) { rootMargin = '0px'; }
    var _a = react_1["default"].useState(false), isIntersecting = _a[0], setIntersecting = _a[1];
    react_1["default"].useEffect(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            setIntersecting(entry.isIntersecting);
        }, {
            rootMargin: rootMargin
        });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return function () {
            observer.unobserve(ref.current);
        };
    }, []);
    return isIntersecting;
};
exports.useOnScreen = useOnScreen;
