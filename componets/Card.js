"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_1 = require("../styles/styles");
const List_1 = __importDefault(require("./List"));
const Stat_1 = __importDefault(require("./Stat"));
const Form_1 = __importDefault(require("./Form"));
const Card = ({ children }) => {
    const [openForm, setOpenform] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)(styles_1.MainCardContainer, { children: [(0, jsx_runtime_1.jsx)(List_1.default, { setOpenform: setOpenform, openForm: openForm }), (0, jsx_runtime_1.jsx)(styles_1.Divider, {}), (0, jsx_runtime_1.jsx)(Stat_1.default, { children: (0, jsx_runtime_1.jsx)("div", { children: openForm ? (0, jsx_runtime_1.jsx)(Form_1.default, {}) : "Chart" }) })] }));
};
exports.default = Card;
