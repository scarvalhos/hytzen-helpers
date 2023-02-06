"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.map = exports.generateArrayOfNumbers = exports.randonfy = exports.convertPXToVH = exports.convertPXToREM = exports.FONT_BASE = exports.px2num = exports.c = exports.dedupTailwind = exports.makePrismaWhere = exports.getFirstName = exports.getFirstLetters = exports.defaultToastError = exports.generateMongoObjectId = exports.numonly = exports.numtostr = exports.strtonum = exports.date = exports.money = void 0;
var op = __importStar(require("object-path"));
var relativeTime_1 = __importDefault(require("dayjs/plugin/relativeTime"));
var duration_1 = __importDefault(require("dayjs/plugin/duration"));
var timezone_1 = __importDefault(require("dayjs/plugin/timezone"));
var is_uuid_1 = __importDefault(require("is-uuid"));
var dayjs_1 = __importDefault(require("dayjs"));
var utc_1 = __importDefault(require("dayjs/plugin/utc"));
var react_toastify_1 = require("react-toastify");
require("dayjs/locale/pt-br");
dayjs_1["default"].extend(utc_1["default"]);
dayjs_1["default"].extend(timezone_1["default"]);
dayjs_1["default"].extend(duration_1["default"]);
dayjs_1["default"].extend(relativeTime_1["default"]);
dayjs_1["default"].locale('pt-br');
// money
var money = function (s) {
    var num = 0;
    if (typeof s === 'number') {
        num = s;
    }
    else {
        num = Number(s);
    }
    return (num || 0).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
};
exports.money = money;
// date
var date = function (value, options) {
    if (!value || value === '')
        return '-';
    var withHour = function (v) {
        return {
            "true": (options === null || options === void 0 ? void 0 : options.onlyHour)
                ? (0, dayjs_1["default"])(value).utcOffset(-3).format('HH:mm')
                : v.concat(" \u00E0s ".concat((0, dayjs_1["default"])(value).utcOffset(-3).format('HH:mm'))),
            "false": v
        }[String((options === null || options === void 0 ? void 0 : options.withHour) || (options === null || options === void 0 ? void 0 : options.onlyHour) || false)];
    };
    switch (options === null || options === void 0 ? void 0 : options.type) {
        case 'long':
            return withHour("".concat((0, dayjs_1["default"])(value).format('DD, MMMM'), " de ").concat((0, dayjs_1["default"])(value).format('YYYY')));
        case 'long-short':
            return withHour((0, dayjs_1["default"])(value).format('DD, MMM/YYYY'));
        case 'digit':
            return withHour((0, dayjs_1["default"])(value).format('DD/MM/YYYY'));
        default:
            return withHour((0, dayjs_1["default"])(value).format('DD/MM/YYYY'));
    }
};
exports.date = date;
// strtonum
var strtonum = function (s) {
    if (!s)
        return 0;
    return +s.replace(/[^\d,-]/g, '').replace(',', '.') || 0;
};
exports.strtonum = strtonum;
// numtostr
var numtostr = function (n) {
    if (!n)
        return '0';
    return n.toString();
};
exports.numtostr = numtostr;
// numonly
var numonly = function (s) {
    if (!s)
        return null;
    return s.replace(/[^\d]+/g, '');
};
exports.numonly = numonly;
// generateMongoObjectId
var generateMongoObjectId = function () {
    var timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
    return (timestamp +
        'xxxxxxxxxxxxxxxx'
            .replace(/[x]/g, function () {
            return ((Math.random() * 16) | 0).toString(16);
        })
            .toLowerCase());
};
exports.generateMongoObjectId = generateMongoObjectId;
// defaultToastError
var defaultToastError = function (r) {
    var _a, _b;
    var message = typeof r.response.data === 'string'
        ? r.response.data
        : typeof ((_a = r.response.data) === null || _a === void 0 ? void 0 : _a.message) === 'string'
            ? (_b = r.response.data) === null || _b === void 0 ? void 0 : _b.message
            : 'Não foi possível executar essa operação';
    react_toastify_1.toast.error(message);
};
exports.defaultToastError = defaultToastError;
var getFirstLetters = function (value) {
    // const parts = value?.split(' ')
    // const [firstName, lastName] = parts
    return value.slice(0, 2).toUpperCase();
};
exports.getFirstLetters = getFirstLetters;
var getFirstName = function (value) {
    var parts = value === null || value === void 0 ? void 0 : value.split(' ');
    var firstName = (parts || [])[0];
    return firstName;
};
exports.getFirstName = getFirstName;
var makePrismaWhere = function (search, schema) {
    var _a, _b;
    var where = {};
    Object.entries(schema).forEach(function (_a) {
        var operator = _a[0], keys = _a[1];
        keys.forEach(function (key, i) {
            if (key.toLowerCase().endsWith('id')) {
                if (is_uuid_1["default"].v4(search)) {
                    op.set(where, "".concat(operator, ".").concat(i, ".").concat(key), search);
                }
            }
            else {
                op.set(where, "".concat(operator, ".").concat(i, ".").concat(key, ".contains"), search);
                op.set(where, "".concat(operator, ".").concat(i, ".").concat(key, ".mode"), 'insensitive');
            }
        });
    });
    where.OR = (_a = where.OR) === null || _a === void 0 ? void 0 : _a.filter(Boolean);
    where.AND = (_b = where.AND) === null || _b === void 0 ? void 0 : _b.filter(Boolean);
    return where;
};
exports.makePrismaWhere = makePrismaWhere;
/**
 * This function concatenates classnames
 */
var dedupTailwind = function (str) {
    var nonCollidable = ['border-', 'rounded-'];
    var speciallyCollidable = {
        'px-': ['p-'],
        'py-': ['p-'],
        'p-': ['py-', 'px-'],
        flex: ['block'],
        block: ['flex']
    };
    return str
        .split(/\s+/)
        .filter(function (v, i, arr) {
        var makePrefix = function (str) {
            var split = str.split('-');
            return split.length > 1 ? "".concat(split.slice(0, -1).join('-'), "-") : split[0];
        };
        var prefix = makePrefix(v);
        return (nonCollidable.includes(prefix) ||
            !arr
                .slice(i)
                .find(function (vv) {
                return __spreadArray([prefix], (speciallyCollidable[prefix] || []), true).includes(makePrefix(vv)) && vv !== v;
            }));
    })
        .join(' ');
};
exports.dedupTailwind = dedupTailwind;
var c = function () {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var classes = (0, exports.dedupTailwind)(arr
        // eslint-disable-next-line no-extra-boolean-cast
        .flatMap(function (s) { return (!!s ? s.split(/\s+/) : []); })
        .filter(function (s) { return !!s && s !== 'undefined'; })
        .join(' '));
    return classes.length < 1 ? undefined : classes;
};
exports.c = c;
// px2num
var px2num = function (px) {
    if (typeof px === 'number')
        return px;
    return parseFloat("".concat(px).replace('px', ''));
};
exports.px2num = px2num;
// convertPXToREM
exports.FONT_BASE = 16;
var convertPXToREM = function (px) {
    return "".concat((0, exports.px2num)(px) / exports.FONT_BASE, "rem");
};
exports.convertPXToREM = convertPXToREM;
// convertPXToVH
var convertPXToVH = function (px) {
    return "".concat(((0, exports.px2num)(px) * 100) / document.documentElement.clientHeight, "vh");
};
exports.convertPXToVH = convertPXToVH;
// randonfy
var randonfy = function (array) {
    var _a;
    if (!array)
        return [];
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
    return array;
};
exports.randonfy = randonfy;
// generateArrayOfNumbers
var generateArrayOfNumbers = function (from, to) {
    var array = [];
    for (var i = from; i < to; i++) {
        array.push(i);
    }
    return array;
};
exports.generateArrayOfNumbers = generateArrayOfNumbers;
// map
var map = function (arr, fn) {
    if (!arr || !fn)
        return null;
    return arr.map(fn);
};
exports.map = map;
