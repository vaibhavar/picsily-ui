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

/***/ "./core/actions/photos/index.js":
/*!**************************************!*\
  !*** ./core/actions/photos/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getAllPhotos = getAllPhotos;\nexports.getMyPhotos = getMyPhotos;\nexports.getFeedPhotos = getFeedPhotos;\n\nvar _serviceUtil = __webpack_require__(/*! ../../../utils/serviceUtil */ \"./utils/serviceUtil.js\");\n\nvar _serviceUtil2 = _interopRequireDefault(_serviceUtil);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n * Actions for photos related APIs\r\n */\n\nvar PHOTOS_URL = '/photos/';\nvar MY_PHOTOS_URL = '/photos/my';\nvar FEED_PHOTOS_URL = '/photos/feed';\n\nfunction getAllPhotos() {\n  return {\n    type: 'GET_PHOTOS',\n    payload: new Promise(function (resolve, reject) {\n      _serviceUtil2.default.getDataFromService(PHOTOS_URL, function (resolvedData) {\n        resolve(resolvedData);\n      }, function (failedData) {\n        reject(failedData.responseJSON);\n      });\n    })\n  };\n}\n\nfunction getMyPhotos() {\n  return {\n    type: 'GET_MY_PHOTOS',\n    payload: new Promise(function (resolve, reject) {\n      _serviceUtil2.default.getDataFromService(MY_PHOTOS_URL, function (resolvedData) {\n        resolve(resolvedData);\n      }, function (failedData) {\n        reject(failedData.responseJSON);\n      });\n    })\n  };\n}\n\nfunction getFeedPhotos() {\n  return {\n    type: 'GET_FEED_PHOTOS',\n    payload: new Promise(function (resolve, reject) {\n      _serviceUtil2.default.getDataFromService(FEED_PHOTOS_URL, function (resolvedData) {\n        resolve(resolvedData);\n      }, function (failedData) {\n        reject(failedData.responseJSON);\n      });\n    })\n  };\n}\n\n//# sourceURL=webpack:///./core/actions/photos/index.js?");

/***/ }),

/***/ "./core/actions/user/index.js":
/*!************************************!*\
  !*** ./core/actions/user/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getLoggedinUser = getLoggedinUser;\nexports.loginUser = loginUser;\nexports.registerUser = registerUser;\n\nvar _serviceUtil = __webpack_require__(/*! ../../../utils/serviceUtil */ \"./utils/serviceUtil.js\");\n\nvar _serviceUtil2 = _interopRequireDefault(_serviceUtil);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n * Actions for user related APIs\r\n */\n\nvar USER_URL = '';\nvar USER_LOGIN_URL = '/users/login';\n\nfunction getLoggedinUser() {\n  return {\n    type: 'GET_USER',\n    payload: new Promise(function (resolve, reject) {\n      _serviceUtil2.default.getDataFromService(USER_URL, function (resolvedData) {\n        resolve(resolvedData);\n      }, function (failedData) {\n        reject(failedData.responseJSON);\n      });\n    })\n  };\n}\n\nfunction loginUser(username, password) {\n  return {\n    type: 'LOGIN_USER',\n    payload: new Promise(function (resolve, reject) {\n      _serviceUtil2.default.loginUser(username, password).then(function (oUserData) {\n        resolve(oUserData);\n      }).catch(function (err) {\n        reject(err);\n      });\n    })\n  };\n}\n\nfunction registerUser(firstname, lastname, username, password) {\n  return {\n    type: 'REGISTER_USER',\n    payload: new Promise(function (resolve, reject) {\n      _serviceUtil2.default.registerUser(firstname, lastname, username, password).then(function (oUserData) {\n        resolve(oUserData);\n      }).catch(function (err) {\n        reject(err);\n      });\n    })\n  };\n}\n\n//# sourceURL=webpack:///./core/actions/user/index.js?");

/***/ }),

/***/ "./core/reducers/index.js":
/*!********************************!*\
  !*** ./core/reducers/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"../node_modules/redux/es/index.js\");\n\nvar _reducerUser = __webpack_require__(/*! ./user/reducer-user */ \"./core/reducers/user/reducer-user.js\");\n\nvar _reducerUser2 = _interopRequireDefault(_reducerUser);\n\nvar _reducerPhotos = __webpack_require__(/*! ./photos/reducer-photos */ \"./core/reducers/photos/reducer-photos.js\");\n\nvar _reducerPhotos2 = _interopRequireDefault(_reducerPhotos);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar allReducers = (0, _redux.combineReducers)({\n  user: _reducerUser2.default,\n  photos: _reducerPhotos2.default\n}); /**\r\n     * This file clubs all reducers into one big object\r\n     */\nexports.default = allReducers;\n\n//# sourceURL=webpack:///./core/reducers/index.js?");

/***/ }),

/***/ "./core/reducers/photos/reducer-photos.js":
/*!************************************************!*\
  !*** ./core/reducers/photos/reducer-photos.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.default = function () {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n\tvar action = arguments[1];\n\n\tswitch (action.type) {\n\t\tcase 'GET_PHOTOS':\n\t\t\treturn _extends({}, state, {\n\t\t\t\tui_loading: true\n\t\t\t});\n\t\tcase 'GET_MY_PHOTOS':\n\t\t\treturn _extends({}, state, {\n\t\t\t\tui_loading: true\n\t\t\t});\n\t\tcase 'GET_FEED_PHOTOS':\n\t\t\treturn _extends({}, state, {\n\t\t\t\tui_loading: true\n\t\t\t});\n\t\tcase 'GET_PHOTOS_FULFILLED':\n\t\t\treturn _extends({}, state, {\n\t\t\t\tui_loading: false,\n\t\t\t\tphotos: action.payload\n\t\t\t});\n\t\tcase 'GET_MY_PHOTOS_FULFILLED':\n\t\t\treturn _extends({}, state, {\n\t\t\t\tui_loading: false,\n\t\t\t\tmy_photos: action.payload\n\t\t\t});\n\t\tcase 'GET_FEED_PHOTOS_FULFILLED':\n\t\t\treturn _extends({}, state, {\n\t\t\t\tui_loading: false,\n\t\t\t\tfeed_photos: action.payload\n\t\t\t});\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nvar initialState = { ui_loading: false, photos: [], my_photos: [], feed_photos: [] };\n\n//# sourceURL=webpack:///./core/reducers/photos/reducer-photos.js?");

/***/ }),

/***/ "./core/reducers/user/reducer-user.js":
/*!********************************************!*\
  !*** ./core/reducers/user/reducer-user.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.default = function () {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n\tvar action = arguments[1];\n\n\tswitch (action.type) {\n\t\tcase 'LOGIN_USER_FULFILLED':\n\t\t\treturn _extends({}, state, { loggedIn: true, user: action.payload });\n\t\tcase 'REGISTER_USER_FULFILLED':\n\t\t\treturn _extends({}, state, { loggedIn: true, user: action.payload });\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nvar initialState = { loggedIn: false, user: {} };\n\n//# sourceURL=webpack:///./core/reducers/user/reducer-user.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n\nvar _photos = __webpack_require__(/*! ../../core/actions/photos */ \"./core/actions/photos/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Dashboard\n\n\nfunction mapStateToProps(state) {\n\treturn {\n\t\tphotos: state.photos.photos,\n\t\tmy_photos: state.photos.my_photos,\n\t\tfeed_photos: state.photos.feed_photos,\n\t\tui_loading: state.photos.ui_loading\n\t};\n}\n\nfunction mapDispatchToProps(dispatch) {\n\treturn {\n\t\tgetPhotos: function getPhotos() {\n\t\t\tdispatch((0, _photos.getPhotos)());\n\t\t},\n\t\tgetMyPhotos: function getMyPhotos() {\n\t\t\tdispatch((0, _photos.getMyPhotos)());\n\t\t},\n\t\tgetFeedPhotos: function getFeedPhotos() {\n\t\t\tdispatch((0, _photos.getFeedPhotos)());\n\t\t}\n\t};\n}\n\nvar Dashboard = function (_React$Component) {\n\t_inherits(Dashboard, _React$Component);\n\n\tfunction Dashboard(props) {\n\t\t_classCallCheck(this, Dashboard);\n\n\t\treturn _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));\n\t}\n\n\t_createClass(Dashboard, [{\n\t\tkey: 'componentWillMount',\n\t\tvalue: function componentWillMount() {\n\t\t\t// Load my added photos\n\t\t\tthis.props.getMyPhotos();\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t' This is dashboard '\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Dashboard;\n}(_react2.default.Component);\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Dashboard);\n\n//# sourceURL=webpack:///./pages/dashboard/index.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./pages/login/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _user = __webpack_require__(/*! ../../core/actions/user */ \"./core/actions/user/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // login\n\n\nfunction mapStateToProps(state) {\n\treturn {\n\t\tuser: state.user\n\t};\n}\n\nfunction mapDispatchToProps(dispatch) {\n\treturn {\n\t\tloginUser: function loginUser(username, password) {\n\t\t\tdispatch((0, _user.loginUser)(username, password));\n\t\t},\n\t\tregisterUser: function registerUser(firstName, lastName, username, password) {\n\t\t\tdispatch((0, _user.registerUser)(firstName, lastName, username, password));\n\t\t}\n\t};\n}\n\nvar Login = function (_React$Component) {\n\t_inherits(Login, _React$Component);\n\n\tfunction Login(props) {\n\t\t_classCallCheck(this, Login);\n\n\t\tvar _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));\n\n\t\t_this.setState({\n\t\t\tuser: '',\n\t\t\tpass: '',\n\t\t\tfirstName: '',\n\t\t\tlastName: ''\n\t\t});\n\n\t\t_this.handleChangeOf = _this.handleChangeOf.bind(_this);\n\t\t_this.loginUser = _this.loginUser.bind(_this);\n\t\t_this.registerUser = _this.registerUser.bind(_this);\n\t\treturn _this;\n\t}\n\n\t_createClass(Login, [{\n\t\tkey: 'handleChangeOf',\n\t\tvalue: function handleChangeOf(sKey, oEvent) {\n\t\t\tvar sValue = oEvent.target.value;\n\t\t\tvar sStateToSet = '{\"' + sKey + '\":\"' + sValue + '\"}';\n\t\t\tthis.setState(JSON.parse(sStateToSet));\n\t\t}\n\t}, {\n\t\tkey: 'loginUser',\n\t\tvalue: function loginUser(event) {\n\t\t\tevent.preventDefault();\n\t\t\tvar sUsername = this.state.user;\n\t\t\tvar sPassword = this.state.pass;\n\t\t\tthis.props.loginUser(sUsername, sPassword);\n\t\t}\n\t}, {\n\t\tkey: 'registerUser',\n\t\tvalue: function registerUser(event) {\n\t\t\tevent.preventDefault();\n\t\t\tvar sUsername = this.state.user;\n\t\t\tvar sFirstName = this.state.firstName;\n\t\t\tvar sLastName = this.state.lastName;\n\t\t\tvar sPassword = this.state.pass;\n\t\t\tthis.props.registerUser(sFirstName, sLastName, sUsername, sPassword);\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this2 = this;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: _style2.default.loginBox },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'center',\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement('img', { src: 'images/logo.png' })\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'form',\n\t\t\t\t\t{ onSubmit: this.loginUser },\n\t\t\t\t\t_react2.default.createElement('input', {\n\t\t\t\t\t\tplaceholder: 'Username',\n\t\t\t\t\t\tonChange: function onChange(ev) {\n\t\t\t\t\t\t\treturn _this2.handleChangeOf('user', ev);\n\t\t\t\t\t\t}\n\t\t\t\t\t}),\n\t\t\t\t\t_react2.default.createElement('input', {\n\t\t\t\t\t\ttype: 'password',\n\t\t\t\t\t\tonChange: function onChange(ev) {\n\t\t\t\t\t\t\treturn _this2.handleChangeOf('pass', ev);\n\t\t\t\t\t\t},\n\t\t\t\t\t\tplaceholder: 'Password'\n\t\t\t\t\t}),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'button',\n\t\t\t\t\t\t{ type: 'submit' },\n\t\t\t\t\t\t'Login'\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'button',\n\t\t\t\t\t\t{ onClick: this.registerUser },\n\t\t\t\t\t\t'Register'\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Login;\n}(_react2.default.Component);\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Login);\n\n//# sourceURL=webpack:///./pages/login/index.js?");

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

/***/ }),

/***/ "./utils/config.js":
/*!*************************!*\
  !*** ./utils/config.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction getUrlForEnvironment() {\n\t// Detecting the environment UI is running in\n\tif (window.location.hostname === 'localhost') {\n\t\treturn 'http://localhost:2001';\n\t}\n\treturn 'https://picsily-api.herokuapp.com';\n}\n\nmodule.exports = {\n\tconfig: {\n\t\tAPI_BASE_URL: getUrlForEnvironment()\n\t}\n};\n\n//# sourceURL=webpack:///./utils/config.js?");

/***/ }),

/***/ "./utils/serviceUtil.js":
/*!******************************!*\
  !*** ./utils/serviceUtil.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _config = __webpack_require__(/*! ./config */ \"./utils/config.js\");\n\nmodule.exports = {\n\tsetToken: function setToken(sToken) {\n\t\tif (localStorage) {\n\t\t\t// Store in localStorage\n\t\t\tlocalStorage.setItem('token', sToken);\n\t\t} else {\n\t\t\t// TODO:  Store in cookie ?\n\t\t}\n\t},\n\tgetToken: function getToken() {\n\t\treturn localStorage.getItem('token');\n\t},\n\t/**\r\n  * gets Data from service\r\n  * @param  {String} sUrl URL of service\r\n  * @return {Promise}      Response promise\r\n  */\n\tgetDataFromService: function getDataFromService(sUrl) {\n\t\t// Concatenate base url to sUrl\n\t\tvar baseUrl = _config.config.API_BASE_URL;\n\t\tsUrl = '' + baseUrl + sUrl;\n\t\treturn fetch(sUrl, {\n\t\t\theaders: { 'x-access-token': this.getToken() }\n\t\t});\n\t},\n\n\tpostFormDataToService: function postFormDataToService(sUrl, oData) {\n\t\t// Concatenate base url to sUrl\n\t\tvar baseUrl = _config.config.API_BASE_URL;\n\t\tsUrl = '' + baseUrl + sUrl;\n\n\t\tvar oFormData = new FormData();\n\n\t\tfor (var key in oData) {\n\t\t\toFormData.append(key, oData[key]);\n\t\t}\n\n\t\treturn fetch(sUrl, {\n\t\t\tmethod: 'POST',\n\t\t\theaders: { 'x-access-token': this.getToken() },\n\t\t\tbody: oFormData\n\t\t});\n\t},\n\n\t/**\r\n  * Posts data to service\r\n  * @param  {String} sUrl  URL of service\r\n  * @param  {Object} oData Data to be sent\r\n  * @return {Promise}       Response promise\r\n  */\n\tpostDataToService: function postDataToService(sUrl, oData) {\n\t\t// Concatenate base url to sUrl\n\t\tvar baseUrl = _config.config.API_BASE_URL;\n\t\tsUrl = '' + baseUrl + sUrl;\n\n\t\tvar oFormData = new URLSearchParams();\n\n\t\tfor (var key in oData) {\n\t\t\toFormData.append(key, oData[key]);\n\t\t}\n\n\t\treturn fetch(sUrl, {\n\t\t\tmethod: 'POST',\n\t\t\tcredentials: 'include',\n\t\t\tredirect: 'follow',\n\t\t\theaders: {\n\t\t\t\t'Content-Type': 'application/x-www-form-urlencoded',\n\t\t\t\t'x-access-token': this.getToken()\n\t\t\t},\n\t\t\tbody: oFormData\n\t\t});\n\t},\n\n\tloginUser: function loginUser(username, password) {\n\t\treturn this.postDataToService('/users/login', { username: username, password: password }).then(function (oData) {\n\t\t\treturn oData.json();\n\t\t}).then(function (oUserData) {\n\t\t\tthis.setToken(oUserData.token);\n\t\t\treturn oUserData;\n\t\t}.bind(this));\n\t},\n\tlogoutUser: function logoutUser() {\n\t\tthis.setToken('');\n\t},\n\tregisterUser: function registerUser(firstname, lastname, username, password) {\n\t\treturn this.postDataToService('/users/register', {\n\t\t\tfirstname: firstname,\n\t\t\tlastname: lastname,\n\t\t\tusername: username,\n\t\t\tpassword: password\n\t\t});\n\t},\n\n\tuploadPhoto: function uploadPhoto(file) {\n\t\treturn this.postFormDataToService('/photos/upload', {\n\t\t\tfile: file\n\t\t});\n\t}\n}; /**\r\n    * serviceUtil\r\n    * One source for all API interactions\r\n    */\n\n//# sourceURL=webpack:///./utils/serviceUtil.js?");

/***/ })

/******/ });