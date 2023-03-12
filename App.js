"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Card_1 = __importDefault(require("./componets/Card"));
require("../src/styles/global.css");
const background_jpg_1 = __importDefault(require("../src/img/background.jpg"));
const App = () => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ style: {
            backgroundImage: `url(${background_jpg_1.default})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            filter: 'brightness(80%)',
            height: "100vh",
            width: "100vw",
            lineHeight: "40px",
        } }, { children: (0, jsx_runtime_1.jsx)(Card_1.default, {}) })));
};
exports.default = App;
