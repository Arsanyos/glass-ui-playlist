"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const react_1 = require("@reduxjs/toolkit/query/react");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
});
(0, react_1.setupListeners)(exports.store.dispatch);
