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
exports.generateArrayWithXPositions = exports.generateArrayOfNumbers = exports.randonfy = exports.convertPXToVH = exports.convertPXToREM = exports.FONT_BASE = exports.px2num = exports.ctc = exports.concatTailwindClassNames = exports.makePrismaFilter = exports.getFirstName = exports.getFirstLetters = exports.generateMongoObjectId = exports.strtonum = exports.numtostr = exports.numonly = exports.isValidateCPF = exports.isValidateEmail = exports.date = exports.percent = exports.money = void 0;
var op = __importStar(require("object-path"));
var is_uuid_1 = __importDefault(require("is-uuid"));
// money
var money = function (s, options) {
    var num = 0;
    if (typeof s === 'number') {
        num = s;
    }
    else {
        num = Number(s);
    }
    return (num || 0).toLocaleString((options === null || options === void 0 ? void 0 : options.locale) || 'pt-BR', {
        style: 'currency',
        currency: (options === null || options === void 0 ? void 0 : options.currency) || 'BRL'
    });
};
exports.money = money;
// percent
var percent = function (s, options) {
    var num = 0;
    if (typeof s === 'number') {
        num = s;
    }
    else {
        num = Number(s);
    }
    return (num / 100).toLocaleString((options === null || options === void 0 ? void 0 : options.locale) || 'pt-BR', {
        style: 'percent',
        maximumFractionDigits: (options === null || options === void 0 ? void 0 : options.maximumFractionDigits) || 3
    });
};
exports.percent = percent;
// date
var date = function (value, options) {
    if (!value || value === '')
        return '-';
    var locale = (options === null || options === void 0 ? void 0 : options.locale) || 'pt-BR';
    var formatHour = function (v) {
        return Intl.DateTimeFormat(locale, { timeStyle: 'short' })
            .format(v)
            .replace(':', 'h');
    };
    var formatDate = function (v) {
        return Intl.DateTimeFormat(locale, {
            dateStyle: options === null || options === void 0 ? void 0 : options.dateStyle
        }).format(v);
    };
    var withHour = function (v) {
        return {
            "true": formatDate(v).concat(" \u00E0s ".concat(formatHour(v))),
            "false": formatDate(v)
        }[String(Boolean(options === null || options === void 0 ? void 0 : options.withHour))];
    };
    if (options === null || options === void 0 ? void 0 : options.onlyHour)
        return formatHour(new Date(value));
    return withHour(new Date(value));
};
exports.date = date;
// isValidateEmail
var isValidateEmail = function (email) {
    var emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    return emailRegex.test(email);
};
exports.isValidateEmail = isValidateEmail;
// isValidateCPF
var isValidateCPF = function (value) {
    var cpf = value.replace(/[^\d]+/g, '');
    if (cpf == '')
        return false;
    if (cpf.length != 11 ||
        cpf == '00000000000' ||
        cpf == '11111111111' ||
        cpf == '22222222222' ||
        cpf == '33333333333' ||
        cpf == '44444444444' ||
        cpf == '55555555555' ||
        cpf == '66666666666' ||
        cpf == '77777777777' ||
        cpf == '88888888888' ||
        cpf == '99999999999')
        return false;
    var add = 0;
    var rev = 0;
    for (var i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    add = 0;
    for (var i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
};
exports.isValidateCPF = isValidateCPF;
// numonly
var numonly = function (s) {
    if (!s)
        return null;
    return s.replace(/[^\d]+/g, '');
};
exports.numonly = numonly;
// numtostr
var numtostr = function (n) {
    if (!n)
        return '0';
    return n.toString();
};
exports.numtostr = numtostr;
// strtonum
var strtonum = function (s) {
    if (!s)
        return 0;
    return +s.replace(/[^\d,-]/g, '').replace(',', '.') || 0;
};
exports.strtonum = strtonum;
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
// getFirstLetters
var getFirstLetters = function (value) {
    if (!value)
        return [];
    var parts = value === null || value === void 0 ? void 0 : value.split(' ');
    if (parts.length > 1) {
        var firstName = parts[0], lastName = parts[1];
        return firstName.slice(0, 1).concat(lastName.slice(0, 1)).toUpperCase();
    }
    return value.slice(0, 2).toUpperCase();
};
exports.getFirstLetters = getFirstLetters;
// getFirstName
var getFirstName = function (value) {
    if (!value)
        return [];
    var parts = value === null || value === void 0 ? void 0 : value.split(' ');
    return parts[0];
};
exports.getFirstName = getFirstName;
// makePrismaWhere
var makePrismaFilter = function (search, schema) {
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
exports.makePrismaFilter = makePrismaFilter;
// concatTailwindClassNames
var concatTailwindClassNames = function (str) {
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
exports.concatTailwindClassNames = concatTailwindClassNames;
var ctc = function () {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var classes = (0, exports.concatTailwindClassNames)(arr
        .flatMap(function (s) { return (!!s ? s.split(/\s+/) : []); })
        .filter(function (s) { return !!s && s !== 'undefined'; })
        .join(' '));
    return classes.length < 1 ? undefined : classes;
};
exports.ctc = ctc;
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
    for (var i = from; i < to + 1; i++) {
        array.push(i);
    }
    return array;
};
exports.generateArrayOfNumbers = generateArrayOfNumbers;
// generateArrayWithXPositions
var generateArrayWithXPositions = function (to) {
    var array = [];
    for (var i = 0; i < to; i++) {
        array.push(i);
    }
    return array;
};
exports.generateArrayWithXPositions = generateArrayWithXPositions;
