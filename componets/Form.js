"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("../styles/styles");
const formik_1 = require("formik");
const music_schema_1 = require("../schema/music.schema");
const styles_2 = require("../styles/styles");
const common_module_css_1 = __importDefault(require("../styles/common.module.css"));
const Form = () => {
    const handleSubmit = (values) => {
        console.log(values);
    };
    const initialValues = {
        title: "",
        artist: "",
        album: "",
        genre: "",
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(styles_1.Header, Object.assign({ style: { marginLeft: "10px", fontSize: "2em" } }, { children: "Add new music" })), (0, jsx_runtime_1.jsx)(formik_1.Formik, Object.assign({ initialValues: initialValues, initialErrors: { title: "" }, validationSchema: music_schema_1.NewMusicSchema, onSubmit: () => {
                    // console.log('asd')
                } }, { children: ({ values, errors, touched, handleChange, handleBlur, resetForm }) => ((0, jsx_runtime_1.jsx)("form", { children: (0, jsx_runtime_1.jsxs)(styles_2.FormContainer, { children: [(0, jsx_runtime_1.jsxs)(styles_2.FormControl, { children: [(0, jsx_runtime_1.jsx)(styles_2.InputLable, { children: "Title" }), (0, jsx_runtime_1.jsx)(styles_2.InputFields, { type: "text", name: "title", onBlur: handleBlur, onChange: handleChange, value: values.title, style: {
                                            padding: "0px",
                                            margin: "0px",
                                        } }), touched.title && (0, jsx_runtime_1.jsx)(styles_2.ErrorDisplay, { children: errors.title })] }), (0, jsx_runtime_1.jsxs)(styles_2.FormControl, { children: [(0, jsx_runtime_1.jsx)(styles_2.InputLable, { children: "Artist" }), (0, jsx_runtime_1.jsx)(styles_2.InputFields, { type: "text", name: "artist", onBlur: handleBlur, onChange: handleChange, value: values.artist, style: {
                                            padding: "0px",
                                            margin: "0px",
                                        } }), touched.artist && (0, jsx_runtime_1.jsx)(styles_2.ErrorDisplay, { children: errors.artist })] }), (0, jsx_runtime_1.jsxs)(styles_2.FormControl, { children: [(0, jsx_runtime_1.jsx)(styles_2.InputLable, { children: "Album" }), (0, jsx_runtime_1.jsx)(styles_2.InputFields, { type: "text", name: "album", onBlur: handleBlur, onChange: handleChange, value: values.album, style: {
                                            padding: "0px",
                                            margin: "0px",
                                        } }), touched.album && (0, jsx_runtime_1.jsx)(styles_2.ErrorDisplay, { children: errors.album })] }), (0, jsx_runtime_1.jsxs)(styles_2.FormControl, { children: [(0, jsx_runtime_1.jsx)(styles_2.InputLable, { children: "Genre" }), (0, jsx_runtime_1.jsx)(styles_2.InputFields, { type: "text", name: "genre", onBlur: handleBlur, onChange: handleChange, value: values.genre, style: {
                                            padding: "0px",
                                            margin: "0px",
                                        } }), touched.genre && (0, jsx_runtime_1.jsx)(styles_2.ErrorDisplay, { children: errors.genre })] }), (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: console.log(Object.keys(errors).length) }), (0, jsx_runtime_1.jsx)(styles_2.SaveButton, Object.assign({ className: common_module_css_1.default.saveButton, type: "submit", disabled: Object.keys(errors).length > 0 ? true : false, onClick: (e) => {
                                    e.preventDefault();
                                    handleSubmit(values);
                                    resetForm();
                                } }, { children: "Save" }))] }) })) }))] }));
};
exports.default = Form;
