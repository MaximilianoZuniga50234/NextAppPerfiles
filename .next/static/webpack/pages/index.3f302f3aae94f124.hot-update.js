"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/users.js":
/*!***********************************!*\
  !*** ./pages/components/users.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Users = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"list-group\",\n        children: props.users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"list-group-item list-group-item-action d-flex justify-content-between aling-items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: [\n                                    user.first_name,\n                                    \" \",\n                                    user.last_name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\maxim\\\\Downloads\\\\NextJs\\\\pages\\\\components\\\\users.js\",\n                                lineNumber: 10,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Email: \",\n                                    user.email\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\maxim\\\\Downloads\\\\NextJs\\\\pages\\\\components\\\\users.js\",\n                                lineNumber: 13,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\maxim\\\\Downloads\\\\NextJs\\\\pages\\\\components\\\\users.js\",\n                        lineNumber: 9,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: user.avatar,\n                        alt: user.first_name + user.last_name,\n                        style: {\n                            borderRadius: \"50%\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\maxim\\\\Downloads\\\\NextJs\\\\pages\\\\components\\\\users.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, user.id, true, {\n                fileName: \"C:\\\\Users\\\\maxim\\\\Downloads\\\\NextJs\\\\pages\\\\components\\\\users.js\",\n                lineNumber: 5,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\maxim\\\\Downloads\\\\NextJs\\\\pages\\\\components\\\\users.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3VzZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxRQUFRLENBQUNDLFFBQVU7SUFDdkIscUJBQ0UsOERBQUNDO1FBQUdDLFdBQVU7a0JBQ1hGLE1BQU1HLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLHFCQUNoQiw4REFBQ0M7Z0JBQ0NKLFdBQVU7O2tDQUdWLDhEQUFDSzs7MENBQ0MsOERBQUNDOztvQ0FDRUgsS0FBS0ksVUFBVTtvQ0FBQztvQ0FBRUosS0FBS0ssU0FBUzs7Ozs7OzswQ0FFbkMsOERBQUNDOztvQ0FBRTtvQ0FBUU4sS0FBS08sS0FBSzs7Ozs7Ozs7Ozs7OztrQ0FFdkIsOERBQUNDO3dCQUNDQyxLQUFLVCxLQUFLVSxNQUFNO3dCQUNoQkMsS0FBS1gsS0FBS0ksVUFBVSxHQUFHSixLQUFLSyxTQUFTO3dCQUNyQ08sT0FBTzs0QkFBRUMsY0FBYzt3QkFBTTs7Ozs7OztlQVgxQmIsS0FBS2MsRUFBRTs7Ozs7Ozs7OztBQWlCdEI7S0F2Qk1wQjtBQXlCTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL3VzZXJzLmpzPzAxZGQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVXNlcnMgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAge3Byb3BzLnVzZXJzLm1hcCgodXNlcikgPT4gKFxyXG4gICAgICAgIDxsaVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaW5nLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICBrZXk9e3VzZXIuaWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgIHt1c2VyLmZpcnN0X25hbWV9IHt1c2VyLmxhc3RfbmFtZX1cclxuICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgPHA+RW1haWw6IHt1c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e3VzZXIuYXZhdGFyfVxyXG4gICAgICAgICAgICBhbHQ9e3VzZXIuZmlyc3RfbmFtZSArIHVzZXIubGFzdF9uYW1lfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNTAlXCIgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VycztcclxuIl0sIm5hbWVzIjpbIlVzZXJzIiwicHJvcHMiLCJ1bCIsImNsYXNzTmFtZSIsInVzZXJzIiwibWFwIiwidXNlciIsImxpIiwiZGl2IiwiaDUiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwicCIsImVtYWlsIiwiaW1nIiwic3JjIiwiYXZhdGFyIiwiYWx0Iiwic3R5bGUiLCJib3JkZXJSYWRpdXMiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/users.js\n"));

/***/ })

});