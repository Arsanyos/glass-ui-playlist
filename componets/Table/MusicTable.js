"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("../../styles/styles");
const common_module_css_1 = __importDefault(require("../../styles/common.module.css"));
const react_1 = require("react");
const MusicTable = () => {
    const [menuOpen, setMenuOpen] = (0, react_1.useState)(false);
    const tableHead = [
        {
            label: "#",
            id: "1",
        },
        {
            label: "Title",
            id: "2",
        },
        {
            label: "Album",
            id: "3",
        },
        {
            label: "Duration",
            id: "4",
        },
        {
            label: "",
            id: "5",
        },
    ];
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ style: { marginTop: "30px" } }, { children: (0, jsx_runtime_1.jsxs)(styles_1.Table, Object.assign({ cellPadding: "0", cellSpacing: "0", className: "table", style: { width: "100%" } }, { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsx)(styles_1.TableRow, Object.assign({ style: {
                            boxShadow: "0px 1px 0px 0px #ccc",
                            borderRadius: "18px 18px 0px 0px",
                        } }, { children: tableHead.map((item) => {
                            return ((0, jsx_runtime_1.jsx)(styles_1.TableHead, Object.assign({ style: { width: "auto" }, scope: "col" }, { children: item.label })));
                        }) })) }), (0, jsx_runtime_1.jsx)("tbody", { children: (0, jsx_runtime_1.jsxs)(styles_1.TableRow, { children: [(0, jsx_runtime_1.jsx)(styles_1.TableData, Object.assign({ align: "left", scope: "row", style: { width: "5%" } }, { children: "1" })), (0, jsx_runtime_1.jsxs)(styles_1.TableData, Object.assign({ style: { display: "flex", flexDirection: "column" } }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ style: { fontWeight: "600" } }, { children: "Redemtion Song" })), (0, jsx_runtime_1.jsx)("p", Object.assign({ style: {
                                            fontSize: ".6em",
                                            lineHeight: "10px",
                                            position: "relative",
                                            bottom: "0.7em",
                                        } }, { children: "Dennis Brown" }))] })), (0, jsx_runtime_1.jsx)(styles_1.TableData, { children: "Small Man" }), (0, jsx_runtime_1.jsx)(styles_1.TableData, { children: "4:10" }), (0, jsx_runtime_1.jsxs)(styles_1.TableData, Object.assign({ style: {
                                    fontSize: "1.5em",
                                    fontWeight: "600",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100px",
                                }, className: common_module_css_1.default.menuItem, onClick: () => {
                                    setMenuOpen(!menuOpen);
                                } }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: {
                                            background: "red",
                                            display: menuOpen ? "block" : "none",
                                        } }, { children: (0, jsx_runtime_1.jsxs)(styles_1.MenuContainer, { children: [(0, jsx_runtime_1.jsx)(styles_1.MenuItems, Object.assign({ color: "rgba(0,255,0,0.4)" }, { children: "Update" })), (0, jsx_runtime_1.jsx)(styles_1.MenuItems, Object.assign({ color: "rgba(220,20,60,0.7)" }, { children: "Delete" }))] }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: { position: "absolute" } }, { children: "..." }))] }))] }) })] })) })));
};
exports.default = MusicTable;
