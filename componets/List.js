"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("../styles/styles");
const MusicTable_1 = __importDefault(require("./Table/MusicTable"));
const Card = ({ children, setOpenform, openForm, }) => {
    return ((0, jsx_runtime_1.jsxs)(styles_1.PlayListContainer, { children: [(0, jsx_runtime_1.jsx)(styles_1.Header, Object.assign({ style: { marginLeft: "10px" } }, { children: "Play List" })), (0, jsx_runtime_1.jsxs)(styles_1.ItemsContainer, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ style: {
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            height: "20px",
                            width: "180px",
                        } }, { children: [(0, jsx_runtime_1.jsx)(styles_1.ProfilePic, {}), (0, jsx_runtime_1.jsx)(styles_1.Text, Object.assign({ style: { fontSize: "0.8em" } }, { children: "madman_lacy . 20 songs" }))] })), (0, jsx_runtime_1.jsx)(styles_1.CreateButtonContainer, Object.assign({ onClick: () => {
                            setOpenform(!openForm);
                        } }, { children: (0, jsx_runtime_1.jsx)(styles_1.Text, Object.assign({ style: {
                                fontSize: "30px",
                                rotate: openForm ? "43deg" : "0deg",
                                transition: "0.4s",
                            } }, { children: (0, jsx_runtime_1.jsx)("p", Object.assign({ style: { lineHeight: "0px", background: "red" } }, { children: "+" })) })) }))] }), (0, jsx_runtime_1.jsx)(MusicTable_1.default, {})] }));
};
exports.default = Card;
