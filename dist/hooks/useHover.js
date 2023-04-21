"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.useHover = void 0;
var react_1 = __importDefault(require("react"));
function useHover() {
    var _a = react_1["default"].useState(false), value = _a[0], setValue = _a[1];
    var ref = react_1["default"].useRef(null);
    var handleMouseOver = function () { return setValue(true); };
    var handleMouseOut = function () { return setValue(false); };
    react_1["default"].useEffect(function () {
        var node = ref.current;
        if (node) {
            node.addEventListener('mouseover', handleMouseOver);
            node.addEventListener('mouseout', handleMouseOut);
            return function () {
                node.removeEventListener('mouseover', handleMouseOver);
                node.removeEventListener('mouseout', handleMouseOut);
            };
        }
    }, [ref.current] // Recall only if ref changes
    );
    return [ref, value];
}
exports.useHover = useHover;
