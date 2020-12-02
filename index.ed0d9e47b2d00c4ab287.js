/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 6641:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4246);
// EXTERNAL MODULE: ../node_modules/react-dom/index.js
var react_dom = __webpack_require__(1542);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(911);
// EXTERNAL MODULE: ../node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(4078);
// EXTERNAL MODULE: ../node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(684);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(3169);
// EXTERNAL MODULE: ../node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(4289);
// EXTERNAL MODULE: ../node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(9635);
;// CONCATENATED MODULE: ./App.js









const isProductionEnvironment = "production" === 'production';
const BASE_URL = isProductionEnvironment ? '/spa-sample/' : '/';

const Home = () => /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
  children: ["This is ", /*#__PURE__*/(0,jsx_runtime.jsx)("b", {
    children: "home"
  }), " page."]
});

const About = () => /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
  children: ["This is ", /*#__PURE__*/(0,jsx_runtime.jsx)("b", {
    children: "about"
  }), " page."]
});

const NotFound = () => {
  (0,react.useEffect)(() => {
    if (isProductionEnvironment) {
      const url = new URL(window.location);
      url.searchParams.append('notFound', 'true');
      window.location.replace(url.href);
    }
  });
  return isProductionEnvironment ? null : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: "Not Found."
  });
};

const App = () => /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(GlobalStyle, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)(react_router_dom/* BrowserRouter */.VK, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
      children: "Hello SPA!"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("nav", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.rU, {
        to: BASE_URL,
        children: "to home"
      }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.rU, {
        to: `${BASE_URL}about`,
        children: "to about"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(react_router/* Switch */.rs, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        exact: true,
        path: BASE_URL,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Home, {})
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        path: `${BASE_URL}about`,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(About, {})
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        path: "*",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(NotFound, {})
      })]
    })]
  })]
});
const GlobalStyle = styled_components_browser_esm/* createGlobalStyle */.vJ`
  body {
    background-color: #eee;
  }
`;
;// CONCATENATED MODULE: ./index.js




const renderApp = () => {
  react_dom.render( /*#__PURE__*/(0,jsx_runtime.jsx)(App, {}), document.querySelector('#app'));
};

if (false) {}

renderApp();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			826: 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			[6641,216]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = () => {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = () => {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = () => {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;