/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1]
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fullfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fullfilled = false;
/******/ 			}
/******/ 			if(fullfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/index.js??ref--5-1!./pages/common/style.css":
/*!*********************************************************************!*\
  !*** ../node_modules/css-loader??ref--5-1!./pages/common/style.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"../node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"._2qzkGLYK7u5G-_O2zO_HwY ul{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:center}._2qzkGLYK7u5G-_O2zO_HwY ul>li{flex:1;list-style:none}._1AO9LebK8nkuMw4sbA2DFV{max-width:1200px;display:flex;flex-direction:column;margin:auto;background:#fff;width:100%;min-height:100vh}body{background:#efefef}\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"navigation\": \"_2qzkGLYK7u5G-_O2zO_HwY\",\n\t\"appContainer\": \"_1AO9LebK8nkuMw4sbA2DFV\"\n};\n\n//# sourceURL=webpack:///./pages/common/style.css?../node_modules/css-loader??ref--5-1");

/***/ }),

/***/ "../node_modules/css-loader/index.js??ref--5-1!./pages/login/style.css":
/*!********************************************************************!*\
  !*** ../node_modules/css-loader??ref--5-1!./pages/login/style.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"../node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"._1TKtyerTFnZOgao1ohvu1G{position:absolute;top:0;height:100vh;width:100vw;left:0;background:#fff}\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"loginBox\": \"_1TKtyerTFnZOgao1ohvu1G\"\n};\n\n//# sourceURL=webpack:///./pages/login/style.css?../node_modules/css-loader??ref--5-1");

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"../node_modules/react-router-dom/es/index.js\");\n\nvar _home = __webpack_require__(/*! ./pages/home/ */ \"./pages/home/index.js\");\n\nvar _home2 = _interopRequireDefault(_home);\n\nvar _profile = __webpack_require__(/*! ./pages/profile/ */ \"./pages/profile/index.js\");\n\nvar _profile2 = _interopRequireDefault(_profile);\n\nvar _Header = __webpack_require__(/*! ./pages/common/Header */ \"./pages/common/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _style = __webpack_require__(/*! ./pages/common/style.css */ \"./pages/common/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This is the <App /> component class that contains\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all routes and header navigation\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */\n\nvar App = function (_React$Component) {\n\t_inherits(App, _React$Component);\n\n\tfunction App() {\n\t\t_classCallCheck(this, App);\n\n\t\treturn _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n\t}\n\n\t_createClass(App, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: _style2.default.appContainer },\n\t\t\t\t_react2.default.createElement(_Header2.default, null),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_reactRouterDom.Switch,\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),\n\t\t\t\t\t_react2.default.createElement(_reactRouterDom.Route, { path: '/profile', component: _profile2.default }),\n\t\t\t\t\t_react2.default.createElement(_reactRouterDom.Route, { render: function render() {\n\t\t\t\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t\t\t\t'h1',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'Not found'\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t} })\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn App;\n}(_react2.default.Component);\n\nexports.default = App;\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./core/reducers/index.js":
/*!********************************!*\
  !*** ./core/reducers/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"../node_modules/redux/es/index.js\");\n\nvar _reducerUser = __webpack_require__(/*! ./user/reducer-user */ \"./core/reducers/user/reducer-user.js\");\n\nvar _reducerUser2 = _interopRequireDefault(_reducerUser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n * This file clubs all reducers into one big object\r\n */\nvar allReducers = (0, _redux.combineReducers)({\n  user: _reducerUser2.default\n});\n\nexports.default = allReducers;\n\n//# sourceURL=webpack:///./core/reducers/index.js?");

/***/ }),

/***/ "./core/reducers/user/reducer-user.js":
/*!********************************************!*\
  !*** ./core/reducers/user/reducer-user.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nexports.default = function () {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n\tvar action = arguments[1];\n\n\tswitch (action.type) {\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nvar initialState = {};\n\n//# sourceURL=webpack:///./core/reducers/user/reducer-user.js?");

/***/ }),

/***/ "./core/store.js":
/*!***********************!*\
  !*** ./core/store.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"../node_modules/redux/es/index.js\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"../node_modules/redux-thunk/lib/index.js\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reduxPromiseMiddleware = __webpack_require__(/*! redux-promise-middleware */ \"../node_modules/redux-promise-middleware/dist/es/index.js\");\n\nvar _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);\n\nvar _reduxLogger = __webpack_require__(/*! redux-logger */ \"../node_modules/redux-logger/dist/redux-logger.js\");\n\nvar _index = __webpack_require__(/*! ./reducers/index */ \"./core/reducers/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar middleWare = void 0; /**\r\n                          * App's store file\r\n                          * This will initialize the global app state\r\n                          */\n\nvar oLogger = (0, _reduxLogger.createLogger)();\n\nif (true) {\n\t// We need to log state in development environment\n\tmiddleWare = (0, _redux.applyMiddleware)(oLogger, _reduxThunk2.default, (0, _reduxPromiseMiddleware2.default)());\n} else {}\n\nexports.default = (0, _redux.createStore)(_index2.default, {}, middleWare);\n\n//# sourceURL=webpack:///./core/store.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"../node_modules/react-router-dom/es/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n\nvar _store = __webpack_require__(/*! ./core/store */ \"./core/store.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _app = __webpack_require__(/*! ./app */ \"./app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This is the main wrapper of the app\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Main Route wrapper is instantiated here\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * It encloses <App/>  component\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */\n\n// Import the Router\n\n// Provider for app state\n\n// State store\n\n\nvar Wrapper = function (_React$Component) {\n\t_inherits(Wrapper, _React$Component);\n\n\tfunction Wrapper() {\n\t\t_classCallCheck(this, Wrapper);\n\n\t\treturn _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).apply(this, arguments));\n\t}\n\n\t_createClass(Wrapper, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t_reactRedux.Provider,\n\t\t\t\t{ store: _store2.default },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_reactRouterDom.BrowserRouter,\n\t\t\t\t\t{ history: _reactRouterDom.browserHistory },\n\t\t\t\t\t_react2.default.createElement(_app2.default, null)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Wrapper;\n}(_react2.default.Component);\n\n_reactDom2.default.render(_react2.default.createElement(Wrapper, null), document.getElementById('content'));\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./pages/common/Header.js":
/*!********************************!*\
  !*** ./pages/common/Header.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"../node_modules/react-router-dom/es/index.js\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./pages/common/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_React$Component) {\n\t_inherits(Header, _React$Component);\n\n\tfunction Header() {\n\t\t_classCallCheck(this, Header);\n\n\t\treturn _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n\t}\n\n\t_createClass(Header, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tconsole.log(_style2.default);\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'header',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'nav',\n\t\t\t\t\t{ className: _style2.default.navigation },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'ul',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'li',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t_reactRouterDom.Link,\n\t\t\t\t\t\t\t\t{ to: '/' },\n\t\t\t\t\t\t\t\t'Home'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'li',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t_reactRouterDom.Link,\n\t\t\t\t\t\t\t\t{ to: '/profile' },\n\t\t\t\t\t\t\t\t'Profile'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Header;\n}(_react2.default.Component);\n\nexports.default = Header;\n\n//# sourceURL=webpack:///./pages/common/Header.js?");

/***/ }),

/***/ "./pages/common/style.css":
/*!********************************!*\
  !*** ./pages/common/style.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./style.css */ \"../node_modules/css-loader/index.js??ref--5-1!./pages/common/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./pages/common/style.css?");

/***/ }),

/***/ "./pages/dashboard/index.js":
/*!**********************************!*\
  !*** ./pages/dashboard/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Dashboard\n\n\nvar Dashboard = function (_React$Component) {\n\t_inherits(Dashboard, _React$Component);\n\n\tfunction Dashboard() {\n\t\t_classCallCheck(this, Dashboard);\n\n\t\treturn _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));\n\t}\n\n\t_createClass(Dashboard, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t' This is dashboard '\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Dashboard;\n}(_react2.default.Component);\n\nexports.default = Dashboard;\n\n//# sourceURL=webpack:///./pages/dashboard/index.js?");

/***/ }),

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n\nvar _login = __webpack_require__(/*! ../login */ \"./pages/login/index.js\");\n\nvar _login2 = _interopRequireDefault(_login);\n\nvar _dashboard = __webpack_require__(/*! ../dashboard */ \"./pages/dashboard/index.js\");\n\nvar _dashboard2 = _interopRequireDefault(_dashboard);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Home\n\n\nfunction mapStateToProps(state) {\n\treturn { user: state.user };\n}\n\nfunction mapDispatchToProps(dispatch) {\n\treturn {};\n}\n\nvar Home = function (_React$Component) {\n\t_inherits(Home, _React$Component);\n\n\tfunction Home() {\n\t\t_classCallCheck(this, Home);\n\n\t\treturn _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n\t}\n\n\t_createClass(Home, [{\n\t\tkey: 'getContent',\n\t\tvalue: function getContent() {\n\t\t\treturn this.props.user.loggedIn ? _react2.default.createElement(_dashboard2.default, null) : _react2.default.createElement(_login2.default, null);\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn this.getContent();\n\t\t}\n\t}]);\n\n\treturn Home;\n}(_react2.default.Component);\n\nHome.defaultProps = {\n\tuser: {}\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);\n\n//# sourceURL=webpack:///./pages/home/index.js?");

/***/ }),

/***/ "./pages/login/index.js":
/*!******************************!*\
  !*** ./pages/login/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./pages/login/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // login\n\n\nvar Login = function (_React$Component) {\n\t_inherits(Login, _React$Component);\n\n\tfunction Login() {\n\t\t_classCallCheck(this, Login);\n\n\t\treturn _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));\n\t}\n\n\t_createClass(Login, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: _style2.default.loginBox },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'center',\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement('img', { src: 'images/logo.png' })\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement('input', { placeholder: 'Username' }),\n\t\t\t\t_react2.default.createElement('input', { type: 'password', placeholder: 'Password' }),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'button',\n\t\t\t\t\t{ type: 'submit' },\n\t\t\t\t\t'Login'\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Login;\n}(_react2.default.Component);\n\nexports.default = Login;\n\n//# sourceURL=webpack:///./pages/login/index.js?");

/***/ }),

/***/ "./pages/login/style.css":
/*!*******************************!*\
  !*** ./pages/login/style.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./style.css */ \"../node_modules/css-loader/index.js??ref--5-1!./pages/login/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./pages/login/style.css?");

/***/ }),

/***/ "./pages/profile/index.js":
/*!********************************!*\
  !*** ./pages/profile/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // profile\n\n\nvar Profile = function (_React$Component) {\n\t_inherits(Profile, _React$Component);\n\n\tfunction Profile() {\n\t\t_classCallCheck(this, Profile);\n\n\t\treturn _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));\n\t}\n\n\t_createClass(Profile, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t' This is profile '\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Profile;\n}(_react2.default.Component);\n\nexports.default = Profile;\n\n//# sourceURL=webpack:///./pages/profile/index.js?");

/***/ })

/******/ });