import { r as useSeoMeta } from '../server.mjs';
import * as vue from 'vue';
import { unref, withCtx, createTextVNode, toDisplayString, useSSRContext, ref, openBlock, createBlock, createVNode, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './TheTextContent-rN29GJom.mjs';
import { u as useTreeStore, _ as _sfc_main$4 } from './TheButton-Jrv5tshN.mjs';
import { u as useAuthStore } from './auth-ltfjqTsG.mjs';
import { useRoute, useRouter } from 'vue-router';
import { _ as _export_sfc } from './_plugin-vue_export-helper-yVxbj29m.mjs';
import { u as useCompanies } from './companies-Vl6LYc-q.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import '@sindresorhus/slugify';
import 'tailwind-merge';
import 'animejs';
import '../../nuxt-storage.mjs';
import 'axios';
import 'vue3-toastify';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : "undefined" !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

var vue3TreeChart_umd = {exports: {}};

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(vue);

(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory(require$$0);
	})((typeof self !== 'undefined' ? self : commonjsGlobal), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
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
	/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
	/******/ 		}
	/******/ 	};
	/******/
	/******/ 	// define __esModule on exports
	/******/ 	__webpack_require__.r = function(exports) {
	/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
	/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	/******/ 		}
	/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
	/******/ 	};
	/******/
	/******/ 	// create a fake namespace object
	/******/ 	// mode & 1: value is a module id, require it
	/******/ 	// mode & 2: merge all properties of value into the ns
	/******/ 	// mode & 4: return value when already ns object
	/******/ 	// mode & 8|1: behave like require
	/******/ 	__webpack_require__.t = function(value, mode) {
	/******/ 		if(mode & 1) value = __webpack_require__(value);
	/******/ 		if(mode & 8) return value;
	/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
	/******/ 		var ns = Object.create(null);
	/******/ 		__webpack_require__.r(ns);
	/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
	/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
	/******/ 		return ns;
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
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
	/******/ })
	/************************************************************************/
	/******/ ({

	/***/ "0c49":
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony import */ __webpack_require__("5609");
	/* unused harmony reexport * */


	/***/ }),

	/***/ "2c81":
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony import */ __webpack_require__("fddc");
	/* unused harmony reexport * */


	/***/ }),

	/***/ "5609":
	/***/ (function(module, exports, __webpack_require__) {

	// extracted by mini-css-extract-plugin

	/***/ }),

	/***/ "8875":
	/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
	// MIT license
	// source: https://github.com/amiller-gh/currentScript-polyfill

	// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

	(function (root, factory) {
	  {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
					__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
					(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
					__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}(typeof self !== 'undefined' ? self : this, function () {
	  function getCurrentScript () {
	    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript');
	    // for chrome
	    if (!descriptor && 'currentScript' in document && document.currentScript) {
	      return document.currentScript
	    }

	    // for other browsers with native support for currentScript
	    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
	      return document.currentScript
	    }
	  
	    // IE 8-10 support script readyState
	    // IE 11+ & Firefox support stack trace
	    try {
	      throw new Error();
	    }
	    catch (err) {
	      // Find the second match for the "at" string to get file src url from stack.
	      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
	        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
	        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
	        scriptLocation = (stackDetails && stackDetails[1]) || false,
	        line = (stackDetails && stackDetails[2]) || false,
	        currentLocation = document.location.href.replace(document.location.hash, ''),
	        pageSource,
	        inlineScriptSourceRegExp,
	        inlineScriptSource,
	        scripts = document.getElementsByTagName('script'); // Live NodeList collection
	  
	      if (scriptLocation === currentLocation) {
	        pageSource = document.documentElement.outerHTML;
	        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
	        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
	      }
	  
	      for (var i = 0; i < scripts.length; i++) {
	        // If ready state is interactive, return the script tag
	        if (scripts[i].readyState === 'interactive') {
	          return scripts[i];
	        }
	  
	        // If src matches, return the script tag
	        if (scripts[i].src === scriptLocation) {
	          return scripts[i];
	        }
	  
	        // If inline source matches, return the script tag
	        if (
	          scriptLocation === currentLocation &&
	          scripts[i].innerHTML &&
	          scripts[i].innerHTML.trim() === inlineScriptSource
	        ) {
	          return scripts[i];
	        }
	      }
	  
	      // If no match, return null
	      return null;
	    }
	  }
	  return getCurrentScript
	}));


	/***/ }),

	/***/ "8bbf":
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

	/***/ }),

	/***/ "d959":
	/***/ (function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", { value: true });
	// runtime helper for setting properties on components
	// in a tree-shakable way
	exports.default = (sfc, props) => {
	    const target = sfc.__vccOpts || sfc;
	    for (const [key, val] of props) {
	        target[key] = val;
	    }
	    return target;
	};


	/***/ }),

	/***/ "fb15":
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	// ESM COMPAT FLAG
	__webpack_require__.r(__webpack_exports__);

	// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
	var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

	var _hoisted_1 = {
	  class: "tree-container",
	  ref: "container"
	};
	var _hoisted_2 = ["onClick"];
	function render(_ctx, _cache, $props, $setup, $data, $options) {
	  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("svg", {
	    class: "svg vue-tree",
	    ref: "svg",
	    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($data.initialTransformStyle)
	  }, null, 4)), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
	    class: "dom-container",
	    ref: "domContainer",
	    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($data.initialTransformStyle)
	  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["TransitionGroup"], {
	    name: "tree-node-item",
	    tag: "div"
	  }, {
	    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
	      return [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($data.nodeDataList, function (node, index) {
	        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
	          class: "node-slot",
	          onClick: function onClick($event) {
	            return $options.onClickNode(index);
	          },
	          key: node.data._key,
	          style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
	            left: $data.formatDimension($props.direction === $data.Direction.VERTICAL ? node.x : node.y),
	            top: $data.formatDimension($props.direction === $data.Direction.VERTICAL ? node.y : node.x),
	            width: $data.formatDimension($props.config.nodeWidth),
	            height: $data.formatDimension($props.config.nodeHeight)
	          })
	        }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "node", {
	          node: node.data,
	          collapsed: node.data._collapsed
	        }, function () {
	          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(node.data.value), 1)];
	        }, true)], 12, _hoisted_2);
	      }), 128))];
	    }),
	    _: 3
	  })], 4)], 512);
	}
	// CONCATENATED MODULE: ./src/vue-tree/VueTree.vue?vue&type=template&id=779fbdcf&scoped=true

	// CONCATENATED MODULE: ./node_modules/d3-dispatch/src/dispatch.js
	var noop = {value: () => {}};

	function dispatch() {
	  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
	    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
	    _[t] = [];
	  }
	  return new Dispatch(_);
	}

	function Dispatch(_) {
	  this._ = _;
	}

	function parseTypenames(typenames, types) {
	  return typenames.trim().split(/^|\s+/).map(function(t) {
	    var name = "", i = t.indexOf(".");
	    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
	    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
	    return {type: t, name: name};
	  });
	}

	Dispatch.prototype = dispatch.prototype = {
	  constructor: Dispatch,
	  on: function(typename, callback) {
	    var _ = this._,
	        T = parseTypenames(typename + "", _),
	        t,
	        i = -1,
	        n = T.length;

	    // If no callback was specified, return the callback of the given type and name.
	    if (arguments.length < 2) {
	      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
	      return;
	    }

	    // If a type was specified, set the callback for the given type and name.
	    // Otherwise, if a null callback was specified, remove callbacks of the given name.
	    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
	    while (++i < n) {
	      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
	      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
	    }

	    return this;
	  },
	  copy: function() {
	    var copy = {}, _ = this._;
	    for (var t in _) copy[t] = _[t].slice();
	    return new Dispatch(copy);
	  },
	  call: function(type, that) {
	    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
	    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
	    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
	  },
	  apply: function(type, that, args) {
	    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
	    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
	  }
	};

	function get(type, name) {
	  for (var i = 0, n = type.length, c; i < n; ++i) {
	    if ((c = type[i]).name === name) {
	      return c.value;
	    }
	  }
	}

	function set(type, name, callback) {
	  for (var i = 0, n = type.length; i < n; ++i) {
	    if (type[i].name === name) {
	      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
	      break;
	    }
	  }
	  if (callback != null) type.push({name: name, value: callback});
	  return type;
	}

	/* harmony default export */ var src_dispatch = (dispatch);

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selector.js
	function none() {}

	/* harmony default export */ var src_selector = (function(selector) {
	  return selector == null ? none : function() {
	    return this.querySelector(selector);
	  };
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/select.js



	/* harmony default export */ var selection_select = (function(select) {
	  if (typeof select !== "function") select = src_selector(select);

	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
	      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
	        if ("__data__" in node) subnode.__data__ = node.__data__;
	        subgroup[i] = subnode;
	      }
	    }
	  }

	  return new Selection(subgroups, this._parents);
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/array.js
	// Given something array like (or null), returns something that is strictly an
	// array. This is used to ensure that array-like objects passed to d3.selectAll
	// or selection.selectAll are converted into proper arrays when creating a
	// selection; we don’t ever want to create a selection backed by a live
	// HTMLCollection or NodeList. However, note that selection.selectAll will use a
	// static NodeList as a group, since it safely derived from querySelectorAll.
	function array(x) {
	  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
	}

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selectorAll.js
	function selectorAll_empty() {
	  return [];
	}

	/* harmony default export */ var selectorAll = (function(selector) {
	  return selector == null ? selectorAll_empty : function() {
	    return this.querySelectorAll(selector);
	  };
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/selectAll.js




	function arrayAll(select) {
	  return function() {
	    return array(select.apply(this, arguments));
	  };
	}

	/* harmony default export */ var selectAll = (function(select) {
	  if (typeof select === "function") select = arrayAll(select);
	  else select = selectorAll(select);

	  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        subgroups.push(select.call(node, node.__data__, i, group));
	        parents.push(node);
	      }
	    }
	  }

	  return new Selection(subgroups, parents);
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/matcher.js
	/* harmony default export */ var matcher = (function(selector) {
	  return function() {
	    return this.matches(selector);
	  };
	});

	function childMatcher(selector) {
	  return function(node) {
	    return node.matches(selector);
	  };
	}


	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/selectChild.js


	var find = Array.prototype.find;

	function childFind(match) {
	  return function() {
	    return find.call(this.children, match);
	  };
	}

	function childFirst() {
	  return this.firstElementChild;
	}

	/* harmony default export */ var selectChild = (function(match) {
	  return this.select(match == null ? childFirst
	      : childFind(typeof match === "function" ? match : childMatcher(match)));
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/selectChildren.js


	var selectChildren_filter = Array.prototype.filter;

	function selectChildren_children() {
	  return Array.from(this.children);
	}

	function childrenFilter(match) {
	  return function() {
	    return selectChildren_filter.call(this.children, match);
	  };
	}

	/* harmony default export */ var selectChildren = (function(match) {
	  return this.selectAll(match == null ? selectChildren_children
	      : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/filter.js



	/* harmony default export */ var selection_filter = (function(match) {
	  if (typeof match !== "function") match = matcher(match);

	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
	      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
	        subgroup.push(node);
	      }
	    }
	  }

	  return new Selection(subgroups, this._parents);
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/sparse.js
	/* harmony default export */ var sparse = (function(update) {
	  return new Array(update.length);
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/enter.js



	/* harmony default export */ var selection_enter = (function() {
	  return new Selection(this._enter || this._groups.map(sparse), this._parents);
	});

	function EnterNode(parent, datum) {
	  this.ownerDocument = parent.ownerDocument;
	  this.namespaceURI = parent.namespaceURI;
	  this._next = null;
	  this._parent = parent;
	  this.__data__ = datum;
	}

	EnterNode.prototype = {
	  constructor: EnterNode,
	  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
	  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
	  querySelector: function(selector) { return this._parent.querySelector(selector); },
	  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
	};

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/constant.js
	/* harmony default export */ var constant = (function(x) {
	  return function() {
	    return x;
	  };
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/data.js




	function bindIndex(parent, group, enter, update, exit, data) {
	  var i = 0,
	      node,
	      groupLength = group.length,
	      dataLength = data.length;

	  // Put any non-null nodes that fit into update.
	  // Put any null nodes into enter.
	  // Put any remaining data into enter.
	  for (; i < dataLength; ++i) {
	    if (node = group[i]) {
	      node.__data__ = data[i];
	      update[i] = node;
	    } else {
	      enter[i] = new EnterNode(parent, data[i]);
	    }
	  }

	  // Put any non-null nodes that don’t fit into exit.
	  for (; i < groupLength; ++i) {
	    if (node = group[i]) {
	      exit[i] = node;
	    }
	  }
	}

	function bindKey(parent, group, enter, update, exit, data, key) {
	  var i,
	      node,
	      nodeByKeyValue = new Map,
	      groupLength = group.length,
	      dataLength = data.length,
	      keyValues = new Array(groupLength),
	      keyValue;

	  // Compute the key for each node.
	  // If multiple nodes have the same key, the duplicates are added to exit.
	  for (i = 0; i < groupLength; ++i) {
	    if (node = group[i]) {
	      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
	      if (nodeByKeyValue.has(keyValue)) {
	        exit[i] = node;
	      } else {
	        nodeByKeyValue.set(keyValue, node);
	      }
	    }
	  }

	  // Compute the key for each datum.
	  // If there a node associated with this key, join and add it to update.
	  // If there is not (or the key is a duplicate), add it to enter.
	  for (i = 0; i < dataLength; ++i) {
	    keyValue = key.call(parent, data[i], i, data) + "";
	    if (node = nodeByKeyValue.get(keyValue)) {
	      update[i] = node;
	      node.__data__ = data[i];
	      nodeByKeyValue.delete(keyValue);
	    } else {
	      enter[i] = new EnterNode(parent, data[i]);
	    }
	  }

	  // Add any remaining nodes that were not bound to data to exit.
	  for (i = 0; i < groupLength; ++i) {
	    if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
	      exit[i] = node;
	    }
	  }
	}

	function datum(node) {
	  return node.__data__;
	}

	/* harmony default export */ var selection_data = (function(value, key) {
	  if (!arguments.length) return Array.from(this, datum);

	  var bind = key ? bindKey : bindIndex,
	      parents = this._parents,
	      groups = this._groups;

	  if (typeof value !== "function") value = constant(value);

	  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
	    var parent = parents[j],
	        group = groups[j],
	        groupLength = group.length,
	        data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
	        dataLength = data.length,
	        enterGroup = enter[j] = new Array(dataLength),
	        updateGroup = update[j] = new Array(dataLength),
	        exitGroup = exit[j] = new Array(groupLength);

	    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

	    // Now connect the enter nodes to their following update node, such that
	    // appendChild can insert the materialized enter node before this node,
	    // rather than at the end of the parent node.
	    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
	      if (previous = enterGroup[i0]) {
	        if (i0 >= i1) i1 = i0 + 1;
	        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
	        previous._next = next || null;
	      }
	    }
	  }

	  update = new Selection(update, parents);
	  update._enter = enter;
	  update._exit = exit;
	  return update;
	});

	// Given some data, this returns an array-like view of it: an object that
	// exposes a length property and allows numeric indexing. Note that unlike
	// selectAll, this isn’t worried about “live” collections because the resulting
	// array will only be used briefly while data is being bound. (It is possible to
	// cause the data to change while iterating by using a key function, but please
	// don’t; we’d rather avoid a gratuitous copy.)
	function arraylike(data) {
	  return typeof data === "object" && "length" in data
	    ? data // Array, TypedArray, NodeList, array-like
	    : Array.from(data); // Map, Set, iterable, string, or anything else
	}

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/exit.js



	/* harmony default export */ var selection_exit = (function() {
	  return new Selection(this._exit || this._groups.map(sparse), this._parents);
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/join.js
	/* harmony default export */ var join = (function(onenter, onupdate, onexit) {
	  var enter = this.enter(), update = this, exit = this.exit();
	  if (typeof onenter === "function") {
	    enter = onenter(enter);
	    if (enter) enter = enter.selection();
	  } else {
	    enter = enter.append(onenter + "");
	  }
	  if (onupdate != null) {
	    update = onupdate(update);
	    if (update) update = update.selection();
	  }
	  if (onexit == null) exit.remove(); else onexit(exit);
	  return enter && update ? enter.merge(update).order() : update;
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/merge.js


	/* harmony default export */ var selection_merge = (function(context) {
	  var selection = context.selection ? context.selection() : context;

	  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
	    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
	      if (node = group0[i] || group1[i]) {
	        merge[i] = node;
	      }
	    }
	  }

	  for (; j < m0; ++j) {
	    merges[j] = groups0[j];
	  }

	  return new Selection(merges, this._parents);
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/order.js
	/* harmony default export */ var order = (function() {

	  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
	    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
	      if (node = group[i]) {
	        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
	        next = node;
	      }
	    }
	  }

	  return this;
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/sort.js


	/* harmony default export */ var sort = (function(compare) {
	  if (!compare) compare = ascending;

	  function compareNode(a, b) {
	    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
	  }

	  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        sortgroup[i] = node;
	      }
	    }
	    sortgroup.sort(compareNode);
	  }

	  return new Selection(sortgroups, this._parents).order();
	});

	function ascending(a, b) {
	  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	}

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/call.js
	/* harmony default export */ var call = (function() {
	  var callback = arguments[0];
	  arguments[0] = this;
	  callback.apply(null, arguments);
	  return this;
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/nodes.js
	/* harmony default export */ var nodes = (function() {
	  return Array.from(this);
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/node.js
	/* harmony default export */ var selection_node = (function() {

	  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
	      var node = group[i];
	      if (node) return node;
	    }
	  }

	  return null;
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/size.js
	/* harmony default export */ var selection_size = (function() {
	  let size = 0;
	  for (const node of this) ++size; // eslint-disable-line no-unused-vars
	  return size;
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/empty.js
	/* harmony default export */ var selection_empty = (function() {
	  return !this.node();
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/each.js
	/* harmony default export */ var each = (function(callback) {

	  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
	      if (node = group[i]) callback.call(node, node.__data__, i, group);
	    }
	  }

	  return this;
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/namespaces.js
	var xhtml = "http://www.w3.org/1999/xhtml";

	/* harmony default export */ var namespaces = ({
	  svg: "http://www.w3.org/2000/svg",
	  xhtml: xhtml,
	  xlink: "http://www.w3.org/1999/xlink",
	  xml: "http://www.w3.org/XML/1998/namespace",
	  xmlns: "http://www.w3.org/2000/xmlns/"
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/namespace.js


	/* harmony default export */ var namespace = (function(name) {
	  var prefix = name += "", i = prefix.indexOf(":");
	  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
	  return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/attr.js


	function attrRemove(name) {
	  return function() {
	    this.removeAttribute(name);
	  };
	}

	function attrRemoveNS(fullname) {
	  return function() {
	    this.removeAttributeNS(fullname.space, fullname.local);
	  };
	}

	function attrConstant(name, value) {
	  return function() {
	    this.setAttribute(name, value);
	  };
	}

	function attrConstantNS(fullname, value) {
	  return function() {
	    this.setAttributeNS(fullname.space, fullname.local, value);
	  };
	}

	function attrFunction(name, value) {
	  return function() {
	    var v = value.apply(this, arguments);
	    if (v == null) this.removeAttribute(name);
	    else this.setAttribute(name, v);
	  };
	}

	function attrFunctionNS(fullname, value) {
	  return function() {
	    var v = value.apply(this, arguments);
	    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
	    else this.setAttributeNS(fullname.space, fullname.local, v);
	  };
	}

	/* harmony default export */ var attr = (function(name, value) {
	  var fullname = namespace(name);

	  if (arguments.length < 2) {
	    var node = this.node();
	    return fullname.local
	        ? node.getAttributeNS(fullname.space, fullname.local)
	        : node.getAttribute(fullname);
	  }

	  return this.each((value == null
	      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
	      ? (fullname.local ? attrFunctionNS : attrFunction)
	      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/window.js
	/* harmony default export */ var src_window = (function(node) {
	  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
	      || (node.document && node) // node is a Window
	      || node.defaultView; // node is a Document
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/style.js


	function styleRemove(name) {
	  return function() {
	    this.style.removeProperty(name);
	  };
	}

	function styleConstant(name, value, priority) {
	  return function() {
	    this.style.setProperty(name, value, priority);
	  };
	}

	function styleFunction(name, value, priority) {
	  return function() {
	    var v = value.apply(this, arguments);
	    if (v == null) this.style.removeProperty(name);
	    else this.style.setProperty(name, v, priority);
	  };
	}

	/* harmony default export */ var style = (function(name, value, priority) {
	  return arguments.length > 1
	      ? this.each((value == null
	            ? styleRemove : typeof value === "function"
	            ? styleFunction
	            : styleConstant)(name, value, priority == null ? "" : priority))
	      : styleValue(this.node(), name);
	});

	function styleValue(node, name) {
	  return node.style.getPropertyValue(name)
	      || src_window(node).getComputedStyle(node, null).getPropertyValue(name);
	}

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/property.js
	function propertyRemove(name) {
	  return function() {
	    delete this[name];
	  };
	}

	function propertyConstant(name, value) {
	  return function() {
	    this[name] = value;
	  };
	}

	function propertyFunction(name, value) {
	  return function() {
	    var v = value.apply(this, arguments);
	    if (v == null) delete this[name];
	    else this[name] = v;
	  };
	}

	/* harmony default export */ var property = (function(name, value) {
	  return arguments.length > 1
	      ? this.each((value == null
	          ? propertyRemove : typeof value === "function"
	          ? propertyFunction
	          : propertyConstant)(name, value))
	      : this.node()[name];
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/classed.js
	function classArray(string) {
	  return string.trim().split(/^|\s+/);
	}

	function classList(node) {
	  return node.classList || new ClassList(node);
	}

	function ClassList(node) {
	  this._node = node;
	  this._names = classArray(node.getAttribute("class") || "");
	}

	ClassList.prototype = {
	  add: function(name) {
	    var i = this._names.indexOf(name);
	    if (i < 0) {
	      this._names.push(name);
	      this._node.setAttribute("class", this._names.join(" "));
	    }
	  },
	  remove: function(name) {
	    var i = this._names.indexOf(name);
	    if (i >= 0) {
	      this._names.splice(i, 1);
	      this._node.setAttribute("class", this._names.join(" "));
	    }
	  },
	  contains: function(name) {
	    return this._names.indexOf(name) >= 0;
	  }
	};

	function classedAdd(node, names) {
	  var list = classList(node), i = -1, n = names.length;
	  while (++i < n) list.add(names[i]);
	}

	function classedRemove(node, names) {
	  var list = classList(node), i = -1, n = names.length;
	  while (++i < n) list.remove(names[i]);
	}

	function classedTrue(names) {
	  return function() {
	    classedAdd(this, names);
	  };
	}

	function classedFalse(names) {
	  return function() {
	    classedRemove(this, names);
	  };
	}

	function classedFunction(names, value) {
	  return function() {
	    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
	  };
	}

	/* harmony default export */ var classed = (function(name, value) {
	  var names = classArray(name + "");

	  if (arguments.length < 2) {
	    var list = classList(this.node()), i = -1, n = names.length;
	    while (++i < n) if (!list.contains(names[i])) return false;
	    return true;
	  }

	  return this.each((typeof value === "function"
	      ? classedFunction : value
	      ? classedTrue
	      : classedFalse)(names, value));
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/text.js
	function textRemove() {
	  this.textContent = "";
	}

	function textConstant(value) {
	  return function() {
	    this.textContent = value;
	  };
	}

	function textFunction(value) {
	  return function() {
	    var v = value.apply(this, arguments);
	    this.textContent = v == null ? "" : v;
	  };
	}

	/* harmony default export */ var selection_text = (function(value) {
	  return arguments.length
	      ? this.each(value == null
	          ? textRemove : (typeof value === "function"
	          ? textFunction
	          : textConstant)(value))
	      : this.node().textContent;
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/html.js
	function htmlRemove() {
	  this.innerHTML = "";
	}

	function htmlConstant(value) {
	  return function() {
	    this.innerHTML = value;
	  };
	}

	function htmlFunction(value) {
	  return function() {
	    var v = value.apply(this, arguments);
	    this.innerHTML = v == null ? "" : v;
	  };
	}

	/* harmony default export */ var html = (function(value) {
	  return arguments.length
	      ? this.each(value == null
	          ? htmlRemove : (typeof value === "function"
	          ? htmlFunction
	          : htmlConstant)(value))
	      : this.node().innerHTML;
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/raise.js
	function raise() {
	  if (this.nextSibling) this.parentNode.appendChild(this);
	}

	/* harmony default export */ var selection_raise = (function() {
	  return this.each(raise);
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/lower.js
	function lower() {
	  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
	}

	/* harmony default export */ var selection_lower = (function() {
	  return this.each(lower);
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/creator.js



	function creatorInherit(name) {
	  return function() {
	    var document = this.ownerDocument,
	        uri = this.namespaceURI;
	    return uri === xhtml && document.documentElement.namespaceURI === xhtml
	        ? document.createElement(name)
	        : document.createElementNS(uri, name);
	  };
	}

	function creatorFixed(fullname) {
	  return function() {
	    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
	  };
	}

	/* harmony default export */ var creator = (function(name) {
	  var fullname = namespace(name);
	  return (fullname.local
	      ? creatorFixed
	      : creatorInherit)(fullname);
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/append.js


	/* harmony default export */ var append = (function(name) {
	  var create = typeof name === "function" ? name : creator(name);
	  return this.select(function() {
	    return this.appendChild(create.apply(this, arguments));
	  });
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/insert.js



	function constantNull() {
	  return null;
	}

	/* harmony default export */ var insert = (function(name, before) {
	  var create = typeof name === "function" ? name : creator(name),
	      select = before == null ? constantNull : typeof before === "function" ? before : src_selector(before);
	  return this.select(function() {
	    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
	  });
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/remove.js
	function remove_remove() {
	  var parent = this.parentNode;
	  if (parent) parent.removeChild(this);
	}

	/* harmony default export */ var selection_remove = (function() {
	  return this.each(remove_remove);
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/clone.js
	function selection_cloneShallow() {
	  var clone = this.cloneNode(false), parent = this.parentNode;
	  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
	}

	function selection_cloneDeep() {
	  var clone = this.cloneNode(true), parent = this.parentNode;
	  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
	}

	/* harmony default export */ var clone = (function(deep) {
	  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/datum.js
	/* harmony default export */ var selection_datum = (function(value) {
	  return arguments.length
	      ? this.property("__data__", value)
	      : this.node().__data__;
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/on.js
	function contextListener(listener) {
	  return function(event) {
	    listener.call(this, event, this.__data__);
	  };
	}

	function on_parseTypenames(typenames) {
	  return typenames.trim().split(/^|\s+/).map(function(t) {
	    var name = "", i = t.indexOf(".");
	    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
	    return {type: t, name: name};
	  });
	}

	function onRemove(typename) {
	  return function() {
	    var on = this.__on;
	    if (!on) return;
	    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
	      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
	        this.removeEventListener(o.type, o.listener, o.options);
	      } else {
	        on[++i] = o;
	      }
	    }
	    if (++i) on.length = i;
	    else delete this.__on;
	  };
	}

	function onAdd(typename, value, options) {
	  return function() {
	    var on = this.__on, o, listener = contextListener(value);
	    if (on) for (var j = 0, m = on.length; j < m; ++j) {
	      if ((o = on[j]).type === typename.type && o.name === typename.name) {
	        this.removeEventListener(o.type, o.listener, o.options);
	        this.addEventListener(o.type, o.listener = listener, o.options = options);
	        o.value = value;
	        return;
	      }
	    }
	    this.addEventListener(typename.type, listener, options);
	    o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
	    if (!on) this.__on = [o];
	    else on.push(o);
	  };
	}

	/* harmony default export */ var selection_on = (function(typename, value, options) {
	  var typenames = on_parseTypenames(typename + ""), i, n = typenames.length, t;

	  if (arguments.length < 2) {
	    var on = this.node().__on;
	    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
	      for (i = 0, o = on[j]; i < n; ++i) {
	        if ((t = typenames[i]).type === o.type && t.name === o.name) {
	          return o.value;
	        }
	      }
	    }
	    return;
	  }

	  on = value ? onAdd : onRemove;
	  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
	  return this;
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/dispatch.js


	function dispatchEvent(node, type, params) {
	  var window = src_window(node),
	      event = window.CustomEvent;

	  if (typeof event === "function") {
	    event = new event(type, params);
	  } else {
	    event = window.document.createEvent("Event");
	    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
	    else event.initEvent(type, false, false);
	  }

	  node.dispatchEvent(event);
	}

	function dispatchConstant(type, params) {
	  return function() {
	    return dispatchEvent(this, type, params);
	  };
	}

	function dispatchFunction(type, params) {
	  return function() {
	    return dispatchEvent(this, type, params.apply(this, arguments));
	  };
	}

	/* harmony default export */ var selection_dispatch = (function(type, params) {
	  return this.each((typeof params === "function"
	      ? dispatchFunction
	      : dispatchConstant)(type, params));
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/iterator.js
	/* harmony default export */ var iterator = (function*() {
	  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
	      if (node = group[i]) yield node;
	    }
	  }
	});

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/index.js



































	var selection_root = [null];

	function Selection(groups, parents) {
	  this._groups = groups;
	  this._parents = parents;
	}

	function selection_selection() {
	  return new Selection([[document.documentElement]], selection_root);
	}

	function selection_selection_selection() {
	  return this;
	}

	Selection.prototype = selection_selection.prototype = {
	  constructor: Selection,
	  select: selection_select,
	  selectAll: selectAll,
	  selectChild: selectChild,
	  selectChildren: selectChildren,
	  filter: selection_filter,
	  data: selection_data,
	  enter: selection_enter,
	  exit: selection_exit,
	  join: join,
	  merge: selection_merge,
	  selection: selection_selection_selection,
	  order: order,
	  sort: sort,
	  call: call,
	  nodes: nodes,
	  node: selection_node,
	  size: selection_size,
	  empty: selection_empty,
	  each: each,
	  attr: attr,
	  style: style,
	  property: property,
	  classed: classed,
	  text: selection_text,
	  html: html,
	  raise: selection_raise,
	  lower: selection_lower,
	  append: append,
	  insert: insert,
	  remove: selection_remove,
	  clone: clone,
	  datum: selection_datum,
	  on: selection_on,
	  dispatch: selection_dispatch,
	  [Symbol.iterator]: iterator
	};

	/* harmony default export */ var src_selection = (selection_selection);

	// CONCATENATED MODULE: ./node_modules/d3-selection/src/select.js


	/* harmony default export */ var src_select = (function(selector) {
	  return typeof selector === "string"
	      ? new Selection([[document.querySelector(selector)]], [document.documentElement])
	      : new Selection([[selector]], selection_root);
	});

	// CONCATENATED MODULE: ./node_modules/d3-color/src/define.js
	/* harmony default export */ var define = (function(constructor, factory, prototype) {
	  constructor.prototype = factory.prototype = prototype;
	  prototype.constructor = constructor;
	});

	function extend(parent, definition) {
	  var prototype = Object.create(parent.prototype);
	  for (var key in definition) prototype[key] = definition[key];
	  return prototype;
	}

	// CONCATENATED MODULE: ./node_modules/d3-color/src/color.js


	function Color() {}

	var darker = 0.7;
	var brighter = 1 / darker;

	var reI = "\\s*([+-]?\\d+)\\s*",
	    reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
	    reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
	    reHex = /^#([0-9a-f]{3,8})$/,
	    reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
	    reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
	    reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
	    reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
	    reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
	    reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

	var named = {
	  aliceblue: 0xf0f8ff,
	  antiquewhite: 0xfaebd7,
	  aqua: 0x00ffff,
	  aquamarine: 0x7fffd4,
	  azure: 0xf0ffff,
	  beige: 0xf5f5dc,
	  bisque: 0xffe4c4,
	  black: 0x000000,
	  blanchedalmond: 0xffebcd,
	  blue: 0x0000ff,
	  blueviolet: 0x8a2be2,
	  brown: 0xa52a2a,
	  burlywood: 0xdeb887,
	  cadetblue: 0x5f9ea0,
	  chartreuse: 0x7fff00,
	  chocolate: 0xd2691e,
	  coral: 0xff7f50,
	  cornflowerblue: 0x6495ed,
	  cornsilk: 0xfff8dc,
	  crimson: 0xdc143c,
	  cyan: 0x00ffff,
	  darkblue: 0x00008b,
	  darkcyan: 0x008b8b,
	  darkgoldenrod: 0xb8860b,
	  darkgray: 0xa9a9a9,
	  darkgreen: 0x006400,
	  darkgrey: 0xa9a9a9,
	  darkkhaki: 0xbdb76b,
	  darkmagenta: 0x8b008b,
	  darkolivegreen: 0x556b2f,
	  darkorange: 0xff8c00,
	  darkorchid: 0x9932cc,
	  darkred: 0x8b0000,
	  darksalmon: 0xe9967a,
	  darkseagreen: 0x8fbc8f,
	  darkslateblue: 0x483d8b,
	  darkslategray: 0x2f4f4f,
	  darkslategrey: 0x2f4f4f,
	  darkturquoise: 0x00ced1,
	  darkviolet: 0x9400d3,
	  deeppink: 0xff1493,
	  deepskyblue: 0x00bfff,
	  dimgray: 0x696969,
	  dimgrey: 0x696969,
	  dodgerblue: 0x1e90ff,
	  firebrick: 0xb22222,
	  floralwhite: 0xfffaf0,
	  forestgreen: 0x228b22,
	  fuchsia: 0xff00ff,
	  gainsboro: 0xdcdcdc,
	  ghostwhite: 0xf8f8ff,
	  gold: 0xffd700,
	  goldenrod: 0xdaa520,
	  gray: 0x808080,
	  green: 0x008000,
	  greenyellow: 0xadff2f,
	  grey: 0x808080,
	  honeydew: 0xf0fff0,
	  hotpink: 0xff69b4,
	  indianred: 0xcd5c5c,
	  indigo: 0x4b0082,
	  ivory: 0xfffff0,
	  khaki: 0xf0e68c,
	  lavender: 0xe6e6fa,
	  lavenderblush: 0xfff0f5,
	  lawngreen: 0x7cfc00,
	  lemonchiffon: 0xfffacd,
	  lightblue: 0xadd8e6,
	  lightcoral: 0xf08080,
	  lightcyan: 0xe0ffff,
	  lightgoldenrodyellow: 0xfafad2,
	  lightgray: 0xd3d3d3,
	  lightgreen: 0x90ee90,
	  lightgrey: 0xd3d3d3,
	  lightpink: 0xffb6c1,
	  lightsalmon: 0xffa07a,
	  lightseagreen: 0x20b2aa,
	  lightskyblue: 0x87cefa,
	  lightslategray: 0x778899,
	  lightslategrey: 0x778899,
	  lightsteelblue: 0xb0c4de,
	  lightyellow: 0xffffe0,
	  lime: 0x00ff00,
	  limegreen: 0x32cd32,
	  linen: 0xfaf0e6,
	  magenta: 0xff00ff,
	  maroon: 0x800000,
	  mediumaquamarine: 0x66cdaa,
	  mediumblue: 0x0000cd,
	  mediumorchid: 0xba55d3,
	  mediumpurple: 0x9370db,
	  mediumseagreen: 0x3cb371,
	  mediumslateblue: 0x7b68ee,
	  mediumspringgreen: 0x00fa9a,
	  mediumturquoise: 0x48d1cc,
	  mediumvioletred: 0xc71585,
	  midnightblue: 0x191970,
	  mintcream: 0xf5fffa,
	  mistyrose: 0xffe4e1,
	  moccasin: 0xffe4b5,
	  navajowhite: 0xffdead,
	  navy: 0x000080,
	  oldlace: 0xfdf5e6,
	  olive: 0x808000,
	  olivedrab: 0x6b8e23,
	  orange: 0xffa500,
	  orangered: 0xff4500,
	  orchid: 0xda70d6,
	  palegoldenrod: 0xeee8aa,
	  palegreen: 0x98fb98,
	  paleturquoise: 0xafeeee,
	  palevioletred: 0xdb7093,
	  papayawhip: 0xffefd5,
	  peachpuff: 0xffdab9,
	  peru: 0xcd853f,
	  pink: 0xffc0cb,
	  plum: 0xdda0dd,
	  powderblue: 0xb0e0e6,
	  purple: 0x800080,
	  rebeccapurple: 0x663399,
	  red: 0xff0000,
	  rosybrown: 0xbc8f8f,
	  royalblue: 0x4169e1,
	  saddlebrown: 0x8b4513,
	  salmon: 0xfa8072,
	  sandybrown: 0xf4a460,
	  seagreen: 0x2e8b57,
	  seashell: 0xfff5ee,
	  sienna: 0xa0522d,
	  silver: 0xc0c0c0,
	  skyblue: 0x87ceeb,
	  slateblue: 0x6a5acd,
	  slategray: 0x708090,
	  slategrey: 0x708090,
	  snow: 0xfffafa,
	  springgreen: 0x00ff7f,
	  steelblue: 0x4682b4,
	  tan: 0xd2b48c,
	  teal: 0x008080,
	  thistle: 0xd8bfd8,
	  tomato: 0xff6347,
	  turquoise: 0x40e0d0,
	  violet: 0xee82ee,
	  wheat: 0xf5deb3,
	  white: 0xffffff,
	  whitesmoke: 0xf5f5f5,
	  yellow: 0xffff00,
	  yellowgreen: 0x9acd32
	};

	define(Color, color_color, {
	  copy(channels) {
	    return Object.assign(new this.constructor, this, channels);
	  },
	  displayable() {
	    return this.rgb().displayable();
	  },
	  hex: color_formatHex, // Deprecated! Use color.formatHex.
	  formatHex: color_formatHex,
	  formatHex8: color_formatHex8,
	  formatHsl: color_formatHsl,
	  formatRgb: color_formatRgb,
	  toString: color_formatRgb
	});

	function color_formatHex() {
	  return this.rgb().formatHex();
	}

	function color_formatHex8() {
	  return this.rgb().formatHex8();
	}

	function color_formatHsl() {
	  return hslConvert(this).formatHsl();
	}

	function color_formatRgb() {
	  return this.rgb().formatRgb();
	}

	function color_color(format) {
	  var m, l;
	  format = (format + "").trim().toLowerCase();
	  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
	      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
	      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
	      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
	      : null) // invalid hex
	      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
	      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
	      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
	      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
	      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
	      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
	      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
	      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
	      : null;
	}

	function rgbn(n) {
	  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
	}

	function rgba(r, g, b, a) {
	  if (a <= 0) r = g = b = NaN;
	  return new Rgb(r, g, b, a);
	}

	function rgbConvert(o) {
	  if (!(o instanceof Color)) o = color_color(o);
	  if (!o) return new Rgb;
	  o = o.rgb();
	  return new Rgb(o.r, o.g, o.b, o.opacity);
	}

	function color_rgb(r, g, b, opacity) {
	  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
	}

	function Rgb(r, g, b, opacity) {
	  this.r = +r;
	  this.g = +g;
	  this.b = +b;
	  this.opacity = +opacity;
	}

	define(Rgb, color_rgb, extend(Color, {
	  brighter(k) {
	    k = k == null ? brighter : Math.pow(brighter, k);
	    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
	  },
	  darker(k) {
	    k = k == null ? darker : Math.pow(darker, k);
	    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
	  },
	  rgb() {
	    return this;
	  },
	  clamp() {
	    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
	  },
	  displayable() {
	    return (-0.5 <= this.r && this.r < 255.5)
	        && (-0.5 <= this.g && this.g < 255.5)
	        && (-0.5 <= this.b && this.b < 255.5)
	        && (0 <= this.opacity && this.opacity <= 1);
	  },
	  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
	  formatHex: rgb_formatHex,
	  formatHex8: rgb_formatHex8,
	  formatRgb: rgb_formatRgb,
	  toString: rgb_formatRgb
	}));

	function rgb_formatHex() {
	  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
	}

	function rgb_formatHex8() {
	  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
	}

	function rgb_formatRgb() {
	  const a = clampa(this.opacity);
	  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
	}

	function clampa(opacity) {
	  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
	}

	function clampi(value) {
	  return Math.max(0, Math.min(255, Math.round(value) || 0));
	}

	function hex(value) {
	  value = clampi(value);
	  return (value < 16 ? "0" : "") + value.toString(16);
	}

	function hsla(h, s, l, a) {
	  if (a <= 0) h = s = l = NaN;
	  else if (l <= 0 || l >= 1) h = s = NaN;
	  else if (s <= 0) h = NaN;
	  return new Hsl(h, s, l, a);
	}

	function hslConvert(o) {
	  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
	  if (!(o instanceof Color)) o = color_color(o);
	  if (!o) return new Hsl;
	  if (o instanceof Hsl) return o;
	  o = o.rgb();
	  var r = o.r / 255,
	      g = o.g / 255,
	      b = o.b / 255,
	      min = Math.min(r, g, b),
	      max = Math.max(r, g, b),
	      h = NaN,
	      s = max - min,
	      l = (max + min) / 2;
	  if (s) {
	    if (r === max) h = (g - b) / s + (g < b) * 6;
	    else if (g === max) h = (b - r) / s + 2;
	    else h = (r - g) / s + 4;
	    s /= l < 0.5 ? max + min : 2 - max - min;
	    h *= 60;
	  } else {
	    s = l > 0 && l < 1 ? 0 : h;
	  }
	  return new Hsl(h, s, l, o.opacity);
	}

	function hsl(h, s, l, opacity) {
	  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
	}

	function Hsl(h, s, l, opacity) {
	  this.h = +h;
	  this.s = +s;
	  this.l = +l;
	  this.opacity = +opacity;
	}

	define(Hsl, hsl, extend(Color, {
	  brighter(k) {
	    k = k == null ? brighter : Math.pow(brighter, k);
	    return new Hsl(this.h, this.s, this.l * k, this.opacity);
	  },
	  darker(k) {
	    k = k == null ? darker : Math.pow(darker, k);
	    return new Hsl(this.h, this.s, this.l * k, this.opacity);
	  },
	  rgb() {
	    var h = this.h % 360 + (this.h < 0) * 360,
	        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
	        l = this.l,
	        m2 = l + (l < 0.5 ? l : 1 - l) * s,
	        m1 = 2 * l - m2;
	    return new Rgb(
	      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
	      hsl2rgb(h, m1, m2),
	      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
	      this.opacity
	    );
	  },
	  clamp() {
	    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
	  },
	  displayable() {
	    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
	        && (0 <= this.l && this.l <= 1)
	        && (0 <= this.opacity && this.opacity <= 1);
	  },
	  formatHsl() {
	    const a = clampa(this.opacity);
	    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
	  }
	}));

	function clamph(value) {
	  value = (value || 0) % 360;
	  return value < 0 ? value + 360 : value;
	}

	function clampt(value) {
	  return Math.max(0, Math.min(1, value || 0));
	}

	/* From FvD 13.37, CSS Color Module Level 3 */
	function hsl2rgb(h, m1, m2) {
	  return (h < 60 ? m1 + (m2 - m1) * h / 60
	      : h < 180 ? m2
	      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
	      : m1) * 255;
	}

	// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/constant.js
	/* harmony default export */ var src_constant = (x => () => x);

	// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/color.js


	function linear(a, d) {
	  return function(t) {
	    return a + t * d;
	  };
	}

	function exponential(a, b, y) {
	  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
	    return Math.pow(a + t * b, y);
	  };
	}

	function gamma(y) {
	  return (y = +y) === 1 ? nogamma : function(a, b) {
	    return b - a ? exponential(a, b, y) : src_constant(isNaN(a) ? b : a);
	  };
	}

	function nogamma(a, b) {
	  var d = b - a;
	  return d ? linear(a, d) : src_constant(isNaN(a) ? b : a);
	}

	// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/rgb.js





	/* harmony default export */ var src_rgb = ((function rgbGamma(y) {
	  var color = gamma(y);

	  function rgb(start, end) {
	    var r = color((start = color_rgb(start)).r, (end = color_rgb(end)).r),
	        g = color(start.g, end.g),
	        b = color(start.b, end.b),
	        opacity = nogamma(start.opacity, end.opacity);
	    return function(t) {
	      start.r = r(t);
	      start.g = g(t);
	      start.b = b(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  }

	  rgb.gamma = rgbGamma;

	  return rgb;
	})(1));

	// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/number.js
	/* harmony default export */ var number = (function(a, b) {
	  return a = +a, b = +b, function(t) {
	    return a * (1 - t) + b * t;
	  };
	});

	// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/string.js


	var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
	    reB = new RegExp(reA.source, "g");

	function zero(b) {
	  return function() {
	    return b;
	  };
	}

	function one(b) {
	  return function(t) {
	    return b(t) + "";
	  };
	}

	/* harmony default export */ var src_string = (function(a, b) {
	  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
	      am, // current match in a
	      bm, // current match in b
	      bs, // string preceding current number in b, if any
	      i = -1, // index in s
	      s = [], // string constants and placeholders
	      q = []; // number interpolators

	  // Coerce inputs to strings.
	  a = a + "", b = b + "";

	  // Interpolate pairs of numbers in a & b.
	  while ((am = reA.exec(a))
	      && (bm = reB.exec(b))) {
	    if ((bs = bm.index) > bi) { // a string precedes the next number in b
	      bs = b.slice(bi, bs);
	      if (s[i]) s[i] += bs; // coalesce with previous string
	      else s[++i] = bs;
	    }
	    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
	      if (s[i]) s[i] += bm; // coalesce with previous string
	      else s[++i] = bm;
	    } else { // interpolate non-matching numbers
	      s[++i] = null;
	      q.push({i: i, x: number(am, bm)});
	    }
	    bi = reB.lastIndex;
	  }

	  // Add remains of b.
	  if (bi < b.length) {
	    bs = b.slice(bi);
	    if (s[i]) s[i] += bs; // coalesce with previous string
	    else s[++i] = bs;
	  }

	  // Special optimization for only a single match.
	  // Otherwise, interpolate each of the numbers and rejoin the string.
	  return s.length < 2 ? (q[0]
	      ? one(q[0].x)
	      : zero(b))
	      : (b = q.length, function(t) {
	          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
	          return s.join("");
	        });
	});

	// CONCATENATED MODULE: ./node_modules/d3-timer/src/timer.js
	var timer_frame = 0, // is an animation frame pending?
	    timeout = 0, // is a timeout pending?
	    interval = 0, // are any timers active?
	    pokeDelay = 1000, // how frequently we check for clock skew
	    taskHead,
	    taskTail,
	    clockLast = 0,
	    clockNow = 0,
	    clockSkew = 0,
	    clock = typeof performance === "object" && performance.now ? performance : Date,
	    setFrame = function(f) { setTimeout(f, 17); };

	function now() {
	  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
	}

	function clearNow() {
	  clockNow = 0;
	}

	function Timer() {
	  this._call =
	  this._time =
	  this._next = null;
	}

	Timer.prototype = timer.prototype = {
	  constructor: Timer,
	  restart: function(callback, delay, time) {
	    if (typeof callback !== "function") throw new TypeError("callback is not a function");
	    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
	    if (!this._next && taskTail !== this) {
	      if (taskTail) taskTail._next = this;
	      else taskHead = this;
	      taskTail = this;
	    }
	    this._call = callback;
	    this._time = time;
	    sleep();
	  },
	  stop: function() {
	    if (this._call) {
	      this._call = null;
	      this._time = Infinity;
	      sleep();
	    }
	  }
	};

	function timer(callback, delay, time) {
	  var t = new Timer;
	  t.restart(callback, delay, time);
	  return t;
	}

	function timerFlush() {
	  now(); // Get the current time, if not already set.
	  ++timer_frame; // Pretend we’ve set an alarm, if we haven’t already.
	  var t = taskHead, e;
	  while (t) {
	    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
	    t = t._next;
	  }
	  --timer_frame;
	}

	function wake() {
	  clockNow = (clockLast = clock.now()) + clockSkew;
	  timer_frame = timeout = 0;
	  try {
	    timerFlush();
	  } finally {
	    timer_frame = 0;
	    nap();
	    clockNow = 0;
	  }
	}

	function poke() {
	  var now = clock.now(), delay = now - clockLast;
	  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
	}

	function nap() {
	  var t0, t1 = taskHead, t2, time = Infinity;
	  while (t1) {
	    if (t1._call) {
	      if (time > t1._time) time = t1._time;
	      t0 = t1, t1 = t1._next;
	    } else {
	      t2 = t1._next, t1._next = null;
	      t1 = t0 ? t0._next = t2 : taskHead = t2;
	    }
	  }
	  taskTail = t0;
	  sleep(time);
	}

	function sleep(time) {
	  if (timer_frame) return; // Soonest alarm already set, or will be.
	  if (timeout) timeout = clearTimeout(timeout);
	  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
	  if (delay > 24) {
	    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
	    if (interval) interval = clearInterval(interval);
	  } else {
	    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
	    timer_frame = 1, setFrame(wake);
	  }
	}

	// CONCATENATED MODULE: ./node_modules/d3-timer/src/timeout.js


	/* harmony default export */ var src_timeout = (function(callback, delay, time) {
	  var t = new Timer;
	  delay = delay == null ? 0 : +delay;
	  t.restart(elapsed => {
	    t.stop();
	    callback(elapsed + delay);
	  }, delay, time);
	  return t;
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/schedule.js



	var emptyOn = src_dispatch("start", "end", "cancel", "interrupt");
	var emptyTween = [];

	var CREATED = 0;
	var SCHEDULED = 1;
	var STARTING = 2;
	var STARTED = 3;
	var RUNNING = 4;
	var ENDING = 5;
	var ENDED = 6;

	/* harmony default export */ var transition_schedule = (function(node, name, id, index, group, timing) {
	  var schedules = node.__transition;
	  if (!schedules) node.__transition = {};
	  else if (id in schedules) return;
	  schedule_create(node, id, {
	    name: name,
	    index: index, // For context during callback.
	    group: group, // For context during callback.
	    on: emptyOn,
	    tween: emptyTween,
	    time: timing.time,
	    delay: timing.delay,
	    duration: timing.duration,
	    ease: timing.ease,
	    timer: null,
	    state: CREATED
	  });
	});

	function schedule_init(node, id) {
	  var schedule = schedule_get(node, id);
	  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
	  return schedule;
	}

	function schedule_set(node, id) {
	  var schedule = schedule_get(node, id);
	  if (schedule.state > STARTED) throw new Error("too late; already running");
	  return schedule;
	}

	function schedule_get(node, id) {
	  var schedule = node.__transition;
	  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
	  return schedule;
	}

	function schedule_create(node, id, self) {
	  var schedules = node.__transition,
	      tween;

	  // Initialize the self timer when the transition is created.
	  // Note the actual delay is not known until the first callback!
	  schedules[id] = self;
	  self.timer = timer(schedule, 0, self.time);

	  function schedule(elapsed) {
	    self.state = SCHEDULED;
	    self.timer.restart(start, self.delay, self.time);

	    // If the elapsed delay is less than our first sleep, start immediately.
	    if (self.delay <= elapsed) start(elapsed - self.delay);
	  }

	  function start(elapsed) {
	    var i, j, n, o;

	    // If the state is not SCHEDULED, then we previously errored on start.
	    if (self.state !== SCHEDULED) return stop();

	    for (i in schedules) {
	      o = schedules[i];
	      if (o.name !== self.name) continue;

	      // While this element already has a starting transition during this frame,
	      // defer starting an interrupting transition until that transition has a
	      // chance to tick (and possibly end); see d3/d3-transition#54!
	      if (o.state === STARTED) return src_timeout(start);

	      // Interrupt the active transition, if any.
	      if (o.state === RUNNING) {
	        o.state = ENDED;
	        o.timer.stop();
	        o.on.call("interrupt", node, node.__data__, o.index, o.group);
	        delete schedules[i];
	      }

	      // Cancel any pre-empted transitions.
	      else if (+i < id) {
	        o.state = ENDED;
	        o.timer.stop();
	        o.on.call("cancel", node, node.__data__, o.index, o.group);
	        delete schedules[i];
	      }
	    }

	    // Defer the first tick to end of the current frame; see d3/d3#1576.
	    // Note the transition may be canceled after start and before the first tick!
	    // Note this must be scheduled before the start event; see d3/d3-transition#16!
	    // Assuming this is successful, subsequent callbacks go straight to tick.
	    src_timeout(function() {
	      if (self.state === STARTED) {
	        self.state = RUNNING;
	        self.timer.restart(tick, self.delay, self.time);
	        tick(elapsed);
	      }
	    });

	    // Dispatch the start event.
	    // Note this must be done before the tween are initialized.
	    self.state = STARTING;
	    self.on.call("start", node, node.__data__, self.index, self.group);
	    if (self.state !== STARTING) return; // interrupted
	    self.state = STARTED;

	    // Initialize the tween, deleting null tween.
	    tween = new Array(n = self.tween.length);
	    for (i = 0, j = -1; i < n; ++i) {
	      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
	        tween[++j] = o;
	      }
	    }
	    tween.length = j + 1;
	  }

	  function tick(elapsed) {
	    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
	        i = -1,
	        n = tween.length;

	    while (++i < n) {
	      tween[i].call(node, t);
	    }

	    // Dispatch the end event.
	    if (self.state === ENDING) {
	      self.on.call("end", node, node.__data__, self.index, self.group);
	      stop();
	    }
	  }

	  function stop() {
	    self.state = ENDED;
	    self.timer.stop();
	    delete schedules[id];
	    for (var i in schedules) return; // eslint-disable-line no-unused-vars
	    delete node.__transition;
	  }
	}

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/interrupt.js


	/* harmony default export */ var interrupt = (function(node, name) {
	  var schedules = node.__transition,
	      schedule,
	      active,
	      empty = true,
	      i;

	  if (!schedules) return;

	  name = name == null ? null : name + "";

	  for (i in schedules) {
	    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
	    active = schedule.state > STARTING && schedule.state < ENDING;
	    schedule.state = ENDED;
	    schedule.timer.stop();
	    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
	    delete schedules[i];
	  }

	  if (empty) delete node.__transition;
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/selection/interrupt.js


	/* harmony default export */ var selection_interrupt = (function(name) {
	  return this.each(function() {
	    interrupt(this, name);
	  });
	});

	// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/transform/decompose.js
	var degrees = 180 / Math.PI;

	var identity = {
	  translateX: 0,
	  translateY: 0,
	  rotate: 0,
	  skewX: 0,
	  scaleX: 1,
	  scaleY: 1
	};

	/* harmony default export */ var decompose = (function(a, b, c, d, e, f) {
	  var scaleX, scaleY, skewX;
	  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
	  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
	  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
	  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
	  return {
	    translateX: e,
	    translateY: f,
	    rotate: Math.atan2(b, a) * degrees,
	    skewX: Math.atan(skewX) * degrees,
	    scaleX: scaleX,
	    scaleY: scaleY
	  };
	});

	// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/transform/parse.js


	var svgNode;

	/* eslint-disable no-undef */
	function parseCss(value) {
	  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
	  return m.isIdentity ? identity : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
	}

	function parseSvg(value) {
	  if (value == null) return identity;
	  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
	  svgNode.setAttribute("transform", value);
	  if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
	  value = value.matrix;
	  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
	}

	// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/transform/index.js



	function interpolateTransform(parse, pxComma, pxParen, degParen) {

	  function pop(s) {
	    return s.length ? s.pop() + " " : "";
	  }

	  function translate(xa, ya, xb, yb, s, q) {
	    if (xa !== xb || ya !== yb) {
	      var i = s.push("translate(", null, pxComma, null, pxParen);
	      q.push({i: i - 4, x: number(xa, xb)}, {i: i - 2, x: number(ya, yb)});
	    } else if (xb || yb) {
	      s.push("translate(" + xb + pxComma + yb + pxParen);
	    }
	  }

	  function rotate(a, b, s, q) {
	    if (a !== b) {
	      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
	      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number(a, b)});
	    } else if (b) {
	      s.push(pop(s) + "rotate(" + b + degParen);
	    }
	  }

	  function skewX(a, b, s, q) {
	    if (a !== b) {
	      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number(a, b)});
	    } else if (b) {
	      s.push(pop(s) + "skewX(" + b + degParen);
	    }
	  }

	  function scale(xa, ya, xb, yb, s, q) {
	    if (xa !== xb || ya !== yb) {
	      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
	      q.push({i: i - 4, x: number(xa, xb)}, {i: i - 2, x: number(ya, yb)});
	    } else if (xb !== 1 || yb !== 1) {
	      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
	    }
	  }

	  return function(a, b) {
	    var s = [], // string constants and placeholders
	        q = []; // number interpolators
	    a = parse(a), b = parse(b);
	    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
	    rotate(a.rotate, b.rotate, s, q);
	    skewX(a.skewX, b.skewX, s, q);
	    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
	    a = b = null; // gc
	    return function(t) {
	      var i = -1, n = q.length, o;
	      while (++i < n) s[(o = q[i]).i] = o.x(t);
	      return s.join("");
	    };
	  };
	}

	var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
	var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/tween.js


	function tweenRemove(id, name) {
	  var tween0, tween1;
	  return function() {
	    var schedule = schedule_set(this, id),
	        tween = schedule.tween;

	    // If this node shared tween with the previous node,
	    // just assign the updated shared tween and we’re done!
	    // Otherwise, copy-on-write.
	    if (tween !== tween0) {
	      tween1 = tween0 = tween;
	      for (var i = 0, n = tween1.length; i < n; ++i) {
	        if (tween1[i].name === name) {
	          tween1 = tween1.slice();
	          tween1.splice(i, 1);
	          break;
	        }
	      }
	    }

	    schedule.tween = tween1;
	  };
	}

	function tweenFunction(id, name, value) {
	  var tween0, tween1;
	  if (typeof value !== "function") throw new Error;
	  return function() {
	    var schedule = schedule_set(this, id),
	        tween = schedule.tween;

	    // If this node shared tween with the previous node,
	    // just assign the updated shared tween and we’re done!
	    // Otherwise, copy-on-write.
	    if (tween !== tween0) {
	      tween1 = (tween0 = tween).slice();
	      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
	        if (tween1[i].name === name) {
	          tween1[i] = t;
	          break;
	        }
	      }
	      if (i === n) tween1.push(t);
	    }

	    schedule.tween = tween1;
	  };
	}

	/* harmony default export */ var transition_tween = (function(name, value) {
	  var id = this._id;

	  name += "";

	  if (arguments.length < 2) {
	    var tween = schedule_get(this.node(), id).tween;
	    for (var i = 0, n = tween.length, t; i < n; ++i) {
	      if ((t = tween[i]).name === name) {
	        return t.value;
	      }
	    }
	    return null;
	  }

	  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
	});

	function tweenValue(transition, name, value) {
	  var id = transition._id;

	  transition.each(function() {
	    var schedule = schedule_set(this, id);
	    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
	  });

	  return function(node) {
	    return schedule_get(node, id).value[name];
	  };
	}

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/interpolate.js



	/* harmony default export */ var transition_interpolate = (function(a, b) {
	  var c;
	  return (typeof b === "number" ? number
	      : b instanceof color_color ? src_rgb
	      : (c = color_color(b)) ? (b = c, src_rgb)
	      : src_string)(a, b);
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/attr.js





	function attr_attrRemove(name) {
	  return function() {
	    this.removeAttribute(name);
	  };
	}

	function attr_attrRemoveNS(fullname) {
	  return function() {
	    this.removeAttributeNS(fullname.space, fullname.local);
	  };
	}

	function attr_attrConstant(name, interpolate, value1) {
	  var string00,
	      string1 = value1 + "",
	      interpolate0;
	  return function() {
	    var string0 = this.getAttribute(name);
	    return string0 === string1 ? null
	        : string0 === string00 ? interpolate0
	        : interpolate0 = interpolate(string00 = string0, value1);
	  };
	}

	function attr_attrConstantNS(fullname, interpolate, value1) {
	  var string00,
	      string1 = value1 + "",
	      interpolate0;
	  return function() {
	    var string0 = this.getAttributeNS(fullname.space, fullname.local);
	    return string0 === string1 ? null
	        : string0 === string00 ? interpolate0
	        : interpolate0 = interpolate(string00 = string0, value1);
	  };
	}

	function attr_attrFunction(name, interpolate, value) {
	  var string00,
	      string10,
	      interpolate0;
	  return function() {
	    var string0, value1 = value(this), string1;
	    if (value1 == null) return void this.removeAttribute(name);
	    string0 = this.getAttribute(name);
	    string1 = value1 + "";
	    return string0 === string1 ? null
	        : string0 === string00 && string1 === string10 ? interpolate0
	        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
	  };
	}

	function attr_attrFunctionNS(fullname, interpolate, value) {
	  var string00,
	      string10,
	      interpolate0;
	  return function() {
	    var string0, value1 = value(this), string1;
	    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
	    string0 = this.getAttributeNS(fullname.space, fullname.local);
	    string1 = value1 + "";
	    return string0 === string1 ? null
	        : string0 === string00 && string1 === string10 ? interpolate0
	        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
	  };
	}

	/* harmony default export */ var transition_attr = (function(name, value) {
	  var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : transition_interpolate;
	  return this.attrTween(name, typeof value === "function"
	      ? (fullname.local ? attr_attrFunctionNS : attr_attrFunction)(fullname, i, tweenValue(this, "attr." + name, value))
	      : value == null ? (fullname.local ? attr_attrRemoveNS : attr_attrRemove)(fullname)
	      : (fullname.local ? attr_attrConstantNS : attr_attrConstant)(fullname, i, value));
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/attrTween.js


	function attrInterpolate(name, i) {
	  return function(t) {
	    this.setAttribute(name, i.call(this, t));
	  };
	}

	function attrInterpolateNS(fullname, i) {
	  return function(t) {
	    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
	  };
	}

	function attrTweenNS(fullname, value) {
	  var t0, i0;
	  function tween() {
	    var i = value.apply(this, arguments);
	    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
	    return t0;
	  }
	  tween._value = value;
	  return tween;
	}

	function attrTween(name, value) {
	  var t0, i0;
	  function tween() {
	    var i = value.apply(this, arguments);
	    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
	    return t0;
	  }
	  tween._value = value;
	  return tween;
	}

	/* harmony default export */ var transition_attrTween = (function(name, value) {
	  var key = "attr." + name;
	  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	  if (value == null) return this.tween(key, null);
	  if (typeof value !== "function") throw new Error;
	  var fullname = namespace(name);
	  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/delay.js


	function delayFunction(id, value) {
	  return function() {
	    schedule_init(this, id).delay = +value.apply(this, arguments);
	  };
	}

	function delayConstant(id, value) {
	  return value = +value, function() {
	    schedule_init(this, id).delay = value;
	  };
	}

	/* harmony default export */ var transition_delay = (function(value) {
	  var id = this._id;

	  return arguments.length
	      ? this.each((typeof value === "function"
	          ? delayFunction
	          : delayConstant)(id, value))
	      : schedule_get(this.node(), id).delay;
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/duration.js


	function durationFunction(id, value) {
	  return function() {
	    schedule_set(this, id).duration = +value.apply(this, arguments);
	  };
	}

	function durationConstant(id, value) {
	  return value = +value, function() {
	    schedule_set(this, id).duration = value;
	  };
	}

	/* harmony default export */ var transition_duration = (function(value) {
	  var id = this._id;

	  return arguments.length
	      ? this.each((typeof value === "function"
	          ? durationFunction
	          : durationConstant)(id, value))
	      : schedule_get(this.node(), id).duration;
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/ease.js


	function easeConstant(id, value) {
	  if (typeof value !== "function") throw new Error;
	  return function() {
	    schedule_set(this, id).ease = value;
	  };
	}

	/* harmony default export */ var ease = (function(value) {
	  var id = this._id;

	  return arguments.length
	      ? this.each(easeConstant(id, value))
	      : schedule_get(this.node(), id).ease;
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/easeVarying.js


	function easeVarying(id, value) {
	  return function() {
	    var v = value.apply(this, arguments);
	    if (typeof v !== "function") throw new Error;
	    schedule_set(this, id).ease = v;
	  };
	}

	/* harmony default export */ var transition_easeVarying = (function(value) {
	  if (typeof value !== "function") throw new Error;
	  return this.each(easeVarying(this._id, value));
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/filter.js



	/* harmony default export */ var transition_filter = (function(match) {
	  if (typeof match !== "function") match = matcher(match);

	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
	      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
	        subgroup.push(node);
	      }
	    }
	  }

	  return new Transition(subgroups, this._parents, this._name, this._id);
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/merge.js


	/* harmony default export */ var transition_merge = (function(transition) {
	  if (transition._id !== this._id) throw new Error;

	  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
	    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
	      if (node = group0[i] || group1[i]) {
	        merge[i] = node;
	      }
	    }
	  }

	  for (; j < m0; ++j) {
	    merges[j] = groups0[j];
	  }

	  return new Transition(merges, this._parents, this._name, this._id);
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/on.js


	function on_start(name) {
	  return (name + "").trim().split(/^|\s+/).every(function(t) {
	    var i = t.indexOf(".");
	    if (i >= 0) t = t.slice(0, i);
	    return !t || t === "start";
	  });
	}

	function onFunction(id, name, listener) {
	  var on0, on1, sit = on_start(name) ? schedule_init : schedule_set;
	  return function() {
	    var schedule = sit(this, id),
	        on = schedule.on;

	    // If this node shared a dispatch with the previous node,
	    // just assign the updated shared dispatch and we’re done!
	    // Otherwise, copy-on-write.
	    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

	    schedule.on = on1;
	  };
	}

	/* harmony default export */ var transition_on = (function(name, listener) {
	  var id = this._id;

	  return arguments.length < 2
	      ? schedule_get(this.node(), id).on.on(name)
	      : this.each(onFunction(id, name, listener));
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/remove.js
	function removeFunction(id) {
	  return function() {
	    var parent = this.parentNode;
	    for (var i in this.__transition) if (+i !== id) return;
	    if (parent) parent.removeChild(this);
	  };
	}

	/* harmony default export */ var transition_remove = (function() {
	  return this.on("end.remove", removeFunction(this._id));
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/select.js




	/* harmony default export */ var transition_select = (function(select) {
	  var name = this._name,
	      id = this._id;

	  if (typeof select !== "function") select = src_selector(select);

	  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
	      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
	        if ("__data__" in node) subnode.__data__ = node.__data__;
	        subgroup[i] = subnode;
	        transition_schedule(subgroup[i], name, id, i, subgroup, schedule_get(node, id));
	      }
	    }
	  }

	  return new Transition(subgroups, this._parents, name, id);
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/selectAll.js




	/* harmony default export */ var transition_selectAll = (function(select) {
	  var name = this._name,
	      id = this._id;

	  if (typeof select !== "function") select = selectorAll(select);

	  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        for (var children = select.call(node, node.__data__, i, group), child, inherit = schedule_get(node, id), k = 0, l = children.length; k < l; ++k) {
	          if (child = children[k]) {
	            transition_schedule(child, name, id, k, children, inherit);
	          }
	        }
	        subgroups.push(children);
	        parents.push(node);
	      }
	    }
	  }

	  return new Transition(subgroups, parents, name, id);
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/selection.js


	var selection_Selection = src_selection.prototype.constructor;

	/* harmony default export */ var transition_selection = (function() {
	  return new selection_Selection(this._groups, this._parents);
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/style.js






	function styleNull(name, interpolate) {
	  var string00,
	      string10,
	      interpolate0;
	  return function() {
	    var string0 = styleValue(this, name),
	        string1 = (this.style.removeProperty(name), styleValue(this, name));
	    return string0 === string1 ? null
	        : string0 === string00 && string1 === string10 ? interpolate0
	        : interpolate0 = interpolate(string00 = string0, string10 = string1);
	  };
	}

	function style_styleRemove(name) {
	  return function() {
	    this.style.removeProperty(name);
	  };
	}

	function style_styleConstant(name, interpolate, value1) {
	  var string00,
	      string1 = value1 + "",
	      interpolate0;
	  return function() {
	    var string0 = styleValue(this, name);
	    return string0 === string1 ? null
	        : string0 === string00 ? interpolate0
	        : interpolate0 = interpolate(string00 = string0, value1);
	  };
	}

	function style_styleFunction(name, interpolate, value) {
	  var string00,
	      string10,
	      interpolate0;
	  return function() {
	    var string0 = styleValue(this, name),
	        value1 = value(this),
	        string1 = value1 + "";
	    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
	    return string0 === string1 ? null
	        : string0 === string00 && string1 === string10 ? interpolate0
	        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
	  };
	}

	function styleMaybeRemove(id, name) {
	  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
	  return function() {
	    var schedule = schedule_set(this, id),
	        on = schedule.on,
	        listener = schedule.value[key] == null ? remove || (remove = style_styleRemove(name)) : undefined;

	    // If this node shared a dispatch with the previous node,
	    // just assign the updated shared dispatch and we’re done!
	    // Otherwise, copy-on-write.
	    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

	    schedule.on = on1;
	  };
	}

	/* harmony default export */ var transition_style = (function(name, value, priority) {
	  var i = (name += "") === "transform" ? interpolateTransformCss : transition_interpolate;
	  return value == null ? this
	      .styleTween(name, styleNull(name, i))
	      .on("end.style." + name, style_styleRemove(name))
	    : typeof value === "function" ? this
	      .styleTween(name, style_styleFunction(name, i, tweenValue(this, "style." + name, value)))
	      .each(styleMaybeRemove(this._id, name))
	    : this
	      .styleTween(name, style_styleConstant(name, i, value), priority)
	      .on("end.style." + name, null);
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/styleTween.js
	function styleInterpolate(name, i, priority) {
	  return function(t) {
	    this.style.setProperty(name, i.call(this, t), priority);
	  };
	}

	function styleTween(name, value, priority) {
	  var t, i0;
	  function tween() {
	    var i = value.apply(this, arguments);
	    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
	    return t;
	  }
	  tween._value = value;
	  return tween;
	}

	/* harmony default export */ var transition_styleTween = (function(name, value, priority) {
	  var key = "style." + (name += "");
	  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	  if (value == null) return this.tween(key, null);
	  if (typeof value !== "function") throw new Error;
	  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/text.js


	function text_textConstant(value) {
	  return function() {
	    this.textContent = value;
	  };
	}

	function text_textFunction(value) {
	  return function() {
	    var value1 = value(this);
	    this.textContent = value1 == null ? "" : value1;
	  };
	}

	/* harmony default export */ var transition_text = (function(value) {
	  return this.tween("text", typeof value === "function"
	      ? text_textFunction(tweenValue(this, "text", value))
	      : text_textConstant(value == null ? "" : value + ""));
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/textTween.js
	function textInterpolate(i) {
	  return function(t) {
	    this.textContent = i.call(this, t);
	  };
	}

	function textTween(value) {
	  var t0, i0;
	  function tween() {
	    var i = value.apply(this, arguments);
	    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
	    return t0;
	  }
	  tween._value = value;
	  return tween;
	}

	/* harmony default export */ var transition_textTween = (function(value) {
	  var key = "text";
	  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
	  if (value == null) return this.tween(key, null);
	  if (typeof value !== "function") throw new Error;
	  return this.tween(key, textTween(value));
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/transition.js



	/* harmony default export */ var transition_transition = (function() {
	  var name = this._name,
	      id0 = this._id,
	      id1 = newId();

	  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        var inherit = schedule_get(node, id0);
	        transition_schedule(node, name, id1, i, group, {
	          time: inherit.time + inherit.delay + inherit.duration,
	          delay: 0,
	          duration: inherit.duration,
	          ease: inherit.ease
	        });
	      }
	    }
	  }

	  return new Transition(groups, this._parents, name, id1);
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/end.js


	/* harmony default export */ var transition_end = (function() {
	  var on0, on1, that = this, id = that._id, size = that.size();
	  return new Promise(function(resolve, reject) {
	    var cancel = {value: reject},
	        end = {value: function() { if (--size === 0) resolve(); }};

	    that.each(function() {
	      var schedule = schedule_set(this, id),
	          on = schedule.on;

	      // If this node shared a dispatch with the previous node,
	      // just assign the updated shared dispatch and we’re done!
	      // Otherwise, copy-on-write.
	      if (on !== on0) {
	        on1 = (on0 = on).copy();
	        on1._.cancel.push(cancel);
	        on1._.interrupt.push(cancel);
	        on1._.end.push(end);
	      }

	      schedule.on = on1;
	    });

	    // The selection was empty, resolve end immediately
	    if (size === 0) resolve();
	  });
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/index.js






















	var transition_id = 0;

	function Transition(groups, parents, name, id) {
	  this._groups = groups;
	  this._parents = parents;
	  this._name = name;
	  this._id = id;
	}

	function newId() {
	  return ++transition_id;
	}

	var selection_prototype = src_selection.prototype;

	Transition.prototype = {
	  constructor: Transition,
	  select: transition_select,
	  selectAll: transition_selectAll,
	  selectChild: selection_prototype.selectChild,
	  selectChildren: selection_prototype.selectChildren,
	  filter: transition_filter,
	  merge: transition_merge,
	  selection: transition_selection,
	  transition: transition_transition,
	  call: selection_prototype.call,
	  nodes: selection_prototype.nodes,
	  node: selection_prototype.node,
	  size: selection_prototype.size,
	  empty: selection_prototype.empty,
	  each: selection_prototype.each,
	  on: transition_on,
	  attr: transition_attr,
	  attrTween: transition_attrTween,
	  style: transition_style,
	  styleTween: transition_styleTween,
	  text: transition_text,
	  textTween: transition_textTween,
	  remove: transition_remove,
	  tween: transition_tween,
	  delay: transition_delay,
	  duration: transition_duration,
	  ease: ease,
	  easeVarying: transition_easeVarying,
	  end: transition_end,
	  [Symbol.iterator]: selection_prototype[Symbol.iterator]
	};

	function cubicInOut(t) {
	  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
	}

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/selection/transition.js





	var defaultTiming = {
	  time: null, // Set on use.
	  delay: 0,
	  duration: 250,
	  ease: cubicInOut
	};

	function transition_inherit(node, id) {
	  var timing;
	  while (!(timing = node.__transition) || !(timing = timing[id])) {
	    if (!(node = node.parentNode)) {
	      throw new Error(`transition ${id} not found`);
	    }
	  }
	  return timing;
	}

	/* harmony default export */ var selection_transition = (function(name) {
	  var id,
	      timing;

	  if (name instanceof Transition) {
	    id = name._id, name = name._name;
	  } else {
	    id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
	  }

	  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
	    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	      if (node = group[i]) {
	        transition_schedule(node, name, id, i, group, timing || transition_inherit(node, id));
	      }
	    }
	  }

	  return new Transition(groups, this._parents, name, id);
	});

	// CONCATENATED MODULE: ./node_modules/d3-transition/src/selection/index.js




	src_selection.prototype.interrupt = selection_interrupt;
	src_selection.prototype.transition = selection_transition;

	// CONCATENATED MODULE: ./node_modules/d3-brush/src/index.js


	// CONCATENATED MODULE: ./node_modules/d3-ease/src/index.js




















	// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/count.js
	function count(node) {
	  var sum = 0,
	      children = node.children,
	      i = children && children.length;
	  if (!i) sum = 1;
	  else while (--i >= 0) sum += children[i].value;
	  node.value = sum;
	}

	/* harmony default export */ var hierarchy_count = (function() {
	  return this.eachAfter(count);
	});

	// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/each.js
	/* harmony default export */ var hierarchy_each = (function(callback, that) {
	  let index = -1;
	  for (const node of this) {
	    callback.call(that, node, ++index, this);
	  }
	  return this;
	});

	// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
	/* harmony default export */ var eachBefore = (function(callback, that) {
	  var node = this, nodes = [node], children, i, index = -1;
	  while (node = nodes.pop()) {
	    callback.call(that, node, ++index, this);
	    if (children = node.children) {
	      for (i = children.length - 1; i >= 0; --i) {
	        nodes.push(children[i]);
	      }
	    }
	  }
	  return this;
	});

	// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
	/* harmony default export */ var eachAfter = (function(callback, that) {
	  var node = this, nodes = [node], next = [], children, i, n, index = -1;
	  while (node = nodes.pop()) {
	    next.push(node);
	    if (children = node.children) {
	      for (i = 0, n = children.length; i < n; ++i) {
	        nodes.push(children[i]);
	      }
	    }
	  }
	  while (node = next.pop()) {
	    callback.call(that, node, ++index, this);
	  }
	  return this;
	});

	// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/find.js
	/* harmony default export */ var hierarchy_find = (function(callback, that) {
	  let index = -1;
	  for (const node of this) {
	    if (callback.call(that, node, ++index, this)) {
	      return node;
	    }
	  }
	});

	// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/sum.js
	/* harmony default export */ var sum = (function(value) {
	  return this.eachAfter(function(node) {
	    var sum = +value(node.data) || 0,
	        children = node.children,
	        i = children && children.length;
	    while (--i >= 0) sum += children[i].value;
	    node.value = sum;
	  });
	});

	// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/sort.js
	/* harmony default export */ var hierarchy_sort = (function(compare) {
	  return this.eachBefore(function(node) {
	    if (node.children) {
	      node.children.sort(compare);
	    }
	  });
	});

	// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/path.js
	/* harmony default export */ var path = (function(end) {
	  var start = this,
	      ancestor = leastCommonAncestor(start, end),
	      nodes = [start];
	  while (start !== ancestor) {
	    start = start.parent;
	    nodes.push(start);
	  }
	  var k = nodes.length;
	  while (end !== ancestor) {
	    nodes.splice(k, 0, end);
	    end = end.parent;
	  }
	  return nodes;
	});

	function leastCommonAncestor(a, b) {
	  if (a === b) return a;
	  var aNodes = a.ancestors(),
	      bNodes = b.ancestors(),
	      c = null;
	  a = aNodes.pop();
	  b = bNodes.pop();
	  while (a === b) {
	    c = a;
	    a = aNodes.pop();
	    b = bNodes.pop();
	  }
	  return c;
	}

	// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/ancestors.js
	/* harmony default export */ var ancestors = (function() {
	  var node = this, nodes = [node];
	  while (node = node.parent) {
	    nodes.push(node);
	  }
	  return nodes;
	});

	// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/descendants.js
	/* harmony default export */ var descendants = (function() {
	  return Array.from(this);
	});

	// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/leaves.js
	/* harmony default export */ var leaves = (function() {
	  var leaves = [];
	  this.eachBefore(function(node) {
	    if (!node.children) {
	      leaves.push(node);
	    }
	  });
	  return leaves;
	});

	// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/links.js
	/* harmony default export */ var hierarchy_links = (function() {
	  var root = this, links = [];
	  root.each(function(node) {
	    if (node !== root) { // Don’t include the root’s parent, if any.
	      links.push({source: node.parent, target: node});
	    }
	  });
	  return links;
	});

	// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/iterator.js
	/* harmony default export */ var hierarchy_iterator = (function*() {
	  var node = this, current, next = [node], children, i, n;
	  do {
	    current = next.reverse(), next = [];
	    while (node = current.pop()) {
	      yield node;
	      if (children = node.children) {
	        for (i = 0, n = children.length; i < n; ++i) {
	          next.push(children[i]);
	        }
	      }
	    }
	  } while (next.length);
	});

	// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/index.js














	function hierarchy(data, children) {
	  if (data instanceof Map) {
	    data = [undefined, data];
	    if (children === undefined) children = mapChildren;
	  } else if (children === undefined) {
	    children = objectChildren;
	  }

	  var root = new Node(data),
	      node,
	      nodes = [root],
	      child,
	      childs,
	      i,
	      n;

	  while (node = nodes.pop()) {
	    if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
	      node.children = childs;
	      for (i = n - 1; i >= 0; --i) {
	        nodes.push(child = childs[i] = new Node(childs[i]));
	        child.parent = node;
	        child.depth = node.depth + 1;
	      }
	    }
	  }

	  return root.eachBefore(computeHeight);
	}

	function node_copy() {
	  return hierarchy(this).eachBefore(copyData);
	}

	function objectChildren(d) {
	  return d.children;
	}

	function mapChildren(d) {
	  return Array.isArray(d) ? d[1] : null;
	}

	function copyData(node) {
	  if (node.data.value !== undefined) node.value = node.data.value;
	  node.data = node.data.data;
	}

	function computeHeight(node) {
	  var height = 0;
	  do node.height = height;
	  while ((node = node.parent) && (node.height < ++height));
	}

	function Node(data) {
	  this.data = data;
	  this.depth =
	  this.height = 0;
	  this.parent = null;
	}

	Node.prototype = hierarchy.prototype = {
	  constructor: Node,
	  count: hierarchy_count,
	  each: hierarchy_each,
	  eachAfter: eachAfter,
	  eachBefore: eachBefore,
	  find: hierarchy_find,
	  sum: sum,
	  sort: hierarchy_sort,
	  path: path,
	  ancestors: ancestors,
	  descendants: descendants,
	  leaves: leaves,
	  links: hierarchy_links,
	  copy: node_copy,
	  [Symbol.iterator]: hierarchy_iterator
	};

	// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/tree.js


	function defaultSeparation(a, b) {
	  return a.parent === b.parent ? 1 : 2;
	}

	// function radialSeparation(a, b) {
	//   return (a.parent === b.parent ? 1 : 2) / a.depth;
	// }

	// This function is used to traverse the left contour of a subtree (or
	// subforest). It returns the successor of v on this contour. This successor is
	// either given by the leftmost child of v or by the thread of v. The function
	// returns null if and only if v is on the highest level of its subtree.
	function nextLeft(v) {
	  var children = v.children;
	  return children ? children[0] : v.t;
	}

	// This function works analogously to nextLeft.
	function nextRight(v) {
	  var children = v.children;
	  return children ? children[children.length - 1] : v.t;
	}

	// Shifts the current subtree rooted at w+. This is done by increasing
	// prelim(w+) and mod(w+) by shift.
	function moveSubtree(wm, wp, shift) {
	  var change = shift / (wp.i - wm.i);
	  wp.c -= change;
	  wp.s += shift;
	  wm.c += change;
	  wp.z += shift;
	  wp.m += shift;
	}

	// All other shifts, applied to the smaller subtrees between w- and w+, are
	// performed by this function. To prepare the shifts, we have to adjust
	// change(w+), shift(w+), and change(w-).
	function executeShifts(v) {
	  var shift = 0,
	      change = 0,
	      children = v.children,
	      i = children.length,
	      w;
	  while (--i >= 0) {
	    w = children[i];
	    w.z += shift;
	    w.m += shift;
	    shift += w.s + (change += w.c);
	  }
	}

	// If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
	// returns the specified (default) ancestor.
	function nextAncestor(vim, v, ancestor) {
	  return vim.a.parent === v.parent ? vim.a : ancestor;
	}

	function TreeNode(node, i) {
	  this._ = node;
	  this.parent = null;
	  this.children = null;
	  this.A = null; // default ancestor
	  this.a = this; // ancestor
	  this.z = 0; // prelim
	  this.m = 0; // mod
	  this.c = 0; // change
	  this.s = 0; // shift
	  this.t = null; // thread
	  this.i = i; // number
	}

	TreeNode.prototype = Object.create(Node.prototype);

	function treeRoot(root) {
	  var tree = new TreeNode(root, 0),
	      node,
	      nodes = [tree],
	      child,
	      children,
	      i,
	      n;

	  while (node = nodes.pop()) {
	    if (children = node._.children) {
	      node.children = new Array(n = children.length);
	      for (i = n - 1; i >= 0; --i) {
	        nodes.push(child = node.children[i] = new TreeNode(children[i], i));
	        child.parent = node;
	      }
	    }
	  }

	  (tree.parent = new TreeNode(null, 0)).children = [tree];
	  return tree;
	}

	// Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
	/* harmony default export */ var src_tree = (function() {
	  var separation = defaultSeparation,
	      dx = 1,
	      dy = 1,
	      nodeSize = null;

	  function tree(root) {
	    var t = treeRoot(root);

	    // Compute the layout using Buchheim et al.’s algorithm.
	    t.eachAfter(firstWalk), t.parent.m = -t.z;
	    t.eachBefore(secondWalk);

	    // If a fixed node size is specified, scale x and y.
	    if (nodeSize) root.eachBefore(sizeNode);

	    // If a fixed tree size is specified, scale x and y based on the extent.
	    // Compute the left-most, right-most, and depth-most nodes for extents.
	    else {
	      var left = root,
	          right = root,
	          bottom = root;
	      root.eachBefore(function(node) {
	        if (node.x < left.x) left = node;
	        if (node.x > right.x) right = node;
	        if (node.depth > bottom.depth) bottom = node;
	      });
	      var s = left === right ? 1 : separation(left, right) / 2,
	          tx = s - left.x,
	          kx = dx / (right.x + s + tx),
	          ky = dy / (bottom.depth || 1);
	      root.eachBefore(function(node) {
	        node.x = (node.x + tx) * kx;
	        node.y = node.depth * ky;
	      });
	    }

	    return root;
	  }

	  // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
	  // applied recursively to the children of v, as well as the function
	  // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
	  // node v is placed to the midpoint of its outermost children.
	  function firstWalk(v) {
	    var children = v.children,
	        siblings = v.parent.children,
	        w = v.i ? siblings[v.i - 1] : null;
	    if (children) {
	      executeShifts(v);
	      var midpoint = (children[0].z + children[children.length - 1].z) / 2;
	      if (w) {
	        v.z = w.z + separation(v._, w._);
	        v.m = v.z - midpoint;
	      } else {
	        v.z = midpoint;
	      }
	    } else if (w) {
	      v.z = w.z + separation(v._, w._);
	    }
	    v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
	  }

	  // Computes all real x-coordinates by summing up the modifiers recursively.
	  function secondWalk(v) {
	    v._.x = v.z + v.parent.m;
	    v.m += v.parent.m;
	  }

	  // The core of the algorithm. Here, a new subtree is combined with the
	  // previous subtrees. Threads are used to traverse the inside and outside
	  // contours of the left and right subtree up to the highest common level. The
	  // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
	  // superscript o means outside and i means inside, the subscript - means left
	  // subtree and + means right subtree. For summing up the modifiers along the
	  // contour, we use respective variables si+, si-, so-, and so+. Whenever two
	  // nodes of the inside contours conflict, we compute the left one of the
	  // greatest uncommon ancestors using the function ANCESTOR and call MOVE
	  // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
	  // Finally, we add a new thread (if necessary).
	  function apportion(v, w, ancestor) {
	    if (w) {
	      var vip = v,
	          vop = v,
	          vim = w,
	          vom = vip.parent.children[0],
	          sip = vip.m,
	          sop = vop.m,
	          sim = vim.m,
	          som = vom.m,
	          shift;
	      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
	        vom = nextLeft(vom);
	        vop = nextRight(vop);
	        vop.a = v;
	        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
	        if (shift > 0) {
	          moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
	          sip += shift;
	          sop += shift;
	        }
	        sim += vim.m;
	        sip += vip.m;
	        som += vom.m;
	        sop += vop.m;
	      }
	      if (vim && !nextRight(vop)) {
	        vop.t = vim;
	        vop.m += sim - sop;
	      }
	      if (vip && !nextLeft(vom)) {
	        vom.t = vip;
	        vom.m += sip - som;
	        ancestor = v;
	      }
	    }
	    return ancestor;
	  }

	  function sizeNode(node) {
	    node.x *= dx;
	    node.y = node.depth * dy;
	  }

	  tree.separation = function(x) {
	    return arguments.length ? (separation = x, tree) : separation;
	  };

	  tree.size = function(x) {
	    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : (nodeSize ? null : [dx, dy]);
	  };

	  tree.nodeSize = function(x) {
	    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : (nodeSize ? [dx, dy] : null);
	  };

	  return tree;
	});

	// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/index.js
















	// CONCATENATED MODULE: ./node_modules/d3-path/src/path.js
	const pi = Math.PI,
	    tau = 2 * pi,
	    epsilon = 1e-6,
	    tauEpsilon = tau - epsilon;

	function Path() {
	  this._x0 = this._y0 = // start of current subpath
	  this._x1 = this._y1 = null; // end of current subpath
	  this._ = "";
	}

	function path_path() {
	  return new Path;
	}

	Path.prototype = path_path.prototype = {
	  constructor: Path,
	  moveTo: function(x, y) {
	    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
	  },
	  closePath: function() {
	    if (this._x1 !== null) {
	      this._x1 = this._x0, this._y1 = this._y0;
	      this._ += "Z";
	    }
	  },
	  lineTo: function(x, y) {
	    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
	  },
	  quadraticCurveTo: function(x1, y1, x, y) {
	    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
	  },
	  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
	    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
	  },
	  arcTo: function(x1, y1, x2, y2, r) {
	    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
	    var x0 = this._x1,
	        y0 = this._y1,
	        x21 = x2 - x1,
	        y21 = y2 - y1,
	        x01 = x0 - x1,
	        y01 = y0 - y1,
	        l01_2 = x01 * x01 + y01 * y01;

	    // Is the radius negative? Error.
	    if (r < 0) throw new Error("negative radius: " + r);

	    // Is this path empty? Move to (x1,y1).
	    if (this._x1 === null) {
	      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
	    }

	    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
	    else if (!(l01_2 > epsilon));

	    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
	    // Equivalently, is (x1,y1) coincident with (x2,y2)?
	    // Or, is the radius zero? Line to (x1,y1).
	    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
	      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
	    }

	    // Otherwise, draw an arc!
	    else {
	      var x20 = x2 - x0,
	          y20 = y2 - y0,
	          l21_2 = x21 * x21 + y21 * y21,
	          l20_2 = x20 * x20 + y20 * y20,
	          l21 = Math.sqrt(l21_2),
	          l01 = Math.sqrt(l01_2),
	          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
	          t01 = l / l01,
	          t21 = l / l21;

	      // If the start tangent is not coincident with (x0,y0), line to.
	      if (Math.abs(t01 - 1) > epsilon) {
	        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
	      }

	      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
	    }
	  },
	  arc: function(x, y, r, a0, a1, ccw) {
	    x = +x, y = +y, r = +r, ccw = !!ccw;
	    var dx = r * Math.cos(a0),
	        dy = r * Math.sin(a0),
	        x0 = x + dx,
	        y0 = y + dy,
	        cw = 1 ^ ccw,
	        da = ccw ? a0 - a1 : a1 - a0;

	    // Is the radius negative? Error.
	    if (r < 0) throw new Error("negative radius: " + r);

	    // Is this path empty? Move to (x0,y0).
	    if (this._x1 === null) {
	      this._ += "M" + x0 + "," + y0;
	    }

	    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
	    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
	      this._ += "L" + x0 + "," + y0;
	    }

	    // Is this arc empty? We’re done.
	    if (!r) return;

	    // Does the angle go the wrong way? Flip the direction.
	    if (da < 0) da = da % tau + tau;

	    // Is this a complete circle? Draw two arcs to complete the circle.
	    if (da > tauEpsilon) {
	      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
	    }

	    // Is this arc non-empty? Draw an arc!
	    else if (da > epsilon) {
	      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
	    }
	  },
	  rect: function(x, y, w, h) {
	    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
	  },
	  toString: function() {
	    return this._;
	  }
	};

	/* harmony default export */ var src_path = (path_path);

	// CONCATENATED MODULE: ./node_modules/d3-path/src/index.js


	// CONCATENATED MODULE: ./node_modules/d3-selection/src/index.js
















	// CONCATENATED MODULE: ./node_modules/d3-shape/src/array.js
	var slice = Array.prototype.slice;

	// CONCATENATED MODULE: ./node_modules/d3-shape/src/constant.js
	/* harmony default export */ var d3_shape_src_constant = (function(x) {
	  return function constant() {
	    return x;
	  };
	});

	// CONCATENATED MODULE: ./node_modules/d3-shape/src/curve/bump.js


	class Bump {
	  constructor(context, x) {
	    this._context = context;
	    this._x = x;
	  }
	  areaStart() {
	    this._line = 0;
	  }
	  areaEnd() {
	    this._line = NaN;
	  }
	  lineStart() {
	    this._point = 0;
	  }
	  lineEnd() {
	    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	    this._line = 1 - this._line;
	  }
	  point(x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0: {
	        this._point = 1;
	        if (this._line) this._context.lineTo(x, y);
	        else this._context.moveTo(x, y);
	        break;
	      }
	      case 1: this._point = 2; // falls through
	      default: {
	        if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x) / 2, this._y0, this._x0, y, x, y);
	        else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y) / 2, x, this._y0, x, y);
	        break;
	      }
	    }
	    this._x0 = x, this._y0 = y;
	  }
	}

	function bumpX(context) {
	  return new Bump(context, true);
	}

	function bumpY(context) {
	  return new Bump(context, false);
	}

	// CONCATENATED MODULE: ./node_modules/d3-shape/src/point.js
	function point_x(p) {
	  return p[0];
	}

	function point_y(p) {
	  return p[1];
	}

	// CONCATENATED MODULE: ./node_modules/d3-shape/src/link.js






	function linkSource(d) {
	  return d.source;
	}

	function linkTarget(d) {
	  return d.target;
	}

	function link_link(curve) {
	  let source = linkSource;
	  let target = linkTarget;
	  let x = point_x;
	  let y = point_y;
	  let context = null;
	  let output = null;

	  function link() {
	    let buffer;
	    const argv = slice.call(arguments);
	    const s = source.apply(this, argv);
	    const t = target.apply(this, argv);
	    if (context == null) output = curve(buffer = src_path());
	    output.lineStart();
	    argv[0] = s, output.point(+x.apply(this, argv), +y.apply(this, argv));
	    argv[0] = t, output.point(+x.apply(this, argv), +y.apply(this, argv));
	    output.lineEnd();
	    if (buffer) return output = null, buffer + "" || null;
	  }

	  link.source = function(_) {
	    return arguments.length ? (source = _, link) : source;
	  };

	  link.target = function(_) {
	    return arguments.length ? (target = _, link) : target;
	  };

	  link.x = function(_) {
	    return arguments.length ? (x = typeof _ === "function" ? _ : d3_shape_src_constant(+_), link) : x;
	  };

	  link.y = function(_) {
	    return arguments.length ? (y = typeof _ === "function" ? _ : d3_shape_src_constant(+_), link) : y;
	  };

	  link.context = function(_) {
	    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), link) : context;
	  };

	  return link;
	}

	function linkHorizontal() {
	  return link_link(bumpX);
	}

	function linkVertical() {
	  return link_link(bumpY);
	}

	// CONCATENATED MODULE: ./node_modules/d3-shape/src/index.js




	 // Note: radialArea is deprecated!
	 // Note: radialLine is deprecated!
















































	// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/zoom.js
	var epsilon2 = 1e-12;

	function cosh(x) {
	  return ((x = Math.exp(x)) + 1 / x) / 2;
	}

	function sinh(x) {
	  return ((x = Math.exp(x)) - 1 / x) / 2;
	}

	function tanh(x) {
	  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
	}

	/* harmony default export */ (((function zoomRho(rho, rho2, rho4) {

	  // p0 = [ux0, uy0, w0]
	  // p1 = [ux1, uy1, w1]
	  function zoom(p0, p1) {
	    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
	        ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
	        dx = ux1 - ux0,
	        dy = uy1 - uy0,
	        d2 = dx * dx + dy * dy,
	        i,
	        S;

	    // Special case for u0 ≅ u1.
	    if (d2 < epsilon2) {
	      S = Math.log(w1 / w0) / rho;
	      i = function(t) {
	        return [
	          ux0 + t * dx,
	          uy0 + t * dy,
	          w0 * Math.exp(rho * t * S)
	        ];
	      };
	    }

	    // General case.
	    else {
	      var d1 = Math.sqrt(d2),
	          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
	          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
	          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
	          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
	      S = (r1 - r0) / rho;
	      i = function(t) {
	        var s = t * S,
	            coshr0 = cosh(r0),
	            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
	        return [
	          ux0 + u * dx,
	          uy0 + u * dy,
	          w0 * coshr0 / cosh(rho * s + r0)
	        ];
	      };
	    }

	    i.duration = S * 1000 * rho / Math.SQRT2;

	    return i;
	  }

	  zoom.rho = function(_) {
	    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
	    return zoomRho(_1, _2, _4);
	  };

	  return zoom;
	}))(Math.SQRT2, 2, 4));

	// CONCATENATED MODULE: ./node_modules/d3-zoom/src/transform.js
	function Transform(k, x, y) {
	  this.k = k;
	  this.x = x;
	  this.y = y;
	}

	Transform.prototype = {
	  constructor: Transform,
	  scale: function(k) {
	    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
	  },
	  translate: function(x, y) {
	    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
	  },
	  apply: function(point) {
	    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
	  },
	  applyX: function(x) {
	    return x * this.k + this.x;
	  },
	  applyY: function(y) {
	    return y * this.k + this.y;
	  },
	  invert: function(location) {
	    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
	  },
	  invertX: function(x) {
	    return (x - this.x) / this.k;
	  },
	  invertY: function(y) {
	    return (y - this.y) / this.k;
	  },
	  rescaleX: function(x) {
	    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
	  },
	  rescaleY: function(y) {
	    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
	  },
	  toString: function() {
	    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
	  }
	};

	Transform.prototype;

	// CONCATENATED MODULE: ./node_modules/d3-zoom/src/index.js



	// CONCATENATED MODULE: ./node_modules/d3/src/index.js































	// CONCATENATED MODULE: ./node_modules/@ssthouse/tree-chart-core/build/tree-chart/constant.js
	var DEFAULT_NODE_WIDTH = 100;
	var DEFAULT_NODE_HEIGHT = 100;
	var DEFAULT_LEVEL_HEIGHT = 200;
	/**
	 * Used to decrement the height of the 'initTransformY' to center diagrams.
	 * This is only a hotfix caused by the addition of '__invisible_root' node
	 * for multi root purposes.
	 */
	var DEFAULT_HEIGHT_DECREMENT = 200;
	var ANIMATION_DURATION = 800;
	var MATCH_TRANSLATE_REGEX = /translate\((-?\d+)px, ?(-?\d+)px\)/i;
	var MATCH_SCALE_REGEX = /scale\((\S*)\)/i;

	// CONCATENATED MODULE: ./node_modules/@ssthouse/tree-chart-core/build/tree-chart/tree-chart.js
	var Direction;
	(function (Direction) {
	    Direction["VERTICAL"] = "vertical";
	    Direction["HORIZONTAL"] = "horizontal";
	})(Direction || (Direction = {}));
	var TreeLinkStyle;
	(function (TreeLinkStyle) {
	    TreeLinkStyle["CURVE"] = "curve";
	    TreeLinkStyle["STRAIGHT"] = "straight";
	})(TreeLinkStyle || (TreeLinkStyle = {}));

	// CONCATENATED MODULE: ./node_modules/@ssthouse/tree-chart-core/build/base/uuid.js
	function uuid() {
	    var s = [];
	    var hexDigits = '0123456789abcdef';
	    for (var i = 0; i < 36; i++) {
	        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	    }
	    s[14] = '4';
	    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
	    s[8] = s[13] = s[18] = s[23] = '-';
	    return s.join('');
	}

	// CONCATENATED MODULE: ./node_modules/@ssthouse/tree-chart-core/build/tree-chart/util.js

	function rotatePoint(_a) {
	    var x = _a.x, y = _a.y;
	    return {
	        x: y,
	        y: x,
	    };
	}
	/**
	* Returns a deep copy of selected node (copy of itself and it's children).
	* If selected node or it's children have no '_key' attribute it will assign a new one.
	**/
	function deepCopy(node) {
	    var obj = { _key: uuid() };
	    for (var key in node) {
	        if (node[key] === null) {
	            obj[key] = null;
	        }
	        else if (Array.isArray(node[key])) {
	            obj[key] = node[key].map(function (x) { return deepCopy(x); });
	        }
	        else if (typeof node[key] === "object") {
	            obj[key] = deepCopy(node[key]);
	        }
	        else {
	            obj[key] = node[key];
	        }
	    }
	    return obj;
	}

	// CONCATENATED MODULE: ./node_modules/@ssthouse/tree-chart-core/build/tree-chart/index.js




	var tree_chart_TreeChartCore = /** @class */ (function () {
	    function TreeChartCore(params) {
	        this.treeConfig = {
	            nodeWidth: DEFAULT_NODE_WIDTH,
	            nodeHeight: DEFAULT_NODE_HEIGHT,
	            levelHeight: DEFAULT_LEVEL_HEIGHT,
	        };
	        this.linkStyle = TreeLinkStyle.CURVE;
	        this.direction = Direction.VERTICAL;
	        this.collapseEnabled = true;
	        this.currentScale = 1;
	        if (params.treeConfig) {
	            this.treeConfig = params.treeConfig;
	        }
	        this.collapseEnabled = params.collapseEnabled;
	        this.svgElement = params.svgElement;
	        this.domElement = params.domElement;
	        this.treeContainer = params.treeContainer;
	        this.dataset = this.updatedInternalData(params.dataset);
	        if (params.direction)
	            this.direction = params.direction;
	        if (params.linkStyle)
	            this.linkStyle = params.linkStyle;
	    }
	    TreeChartCore.prototype.init = function () {
	        this.draw();
	        this.enableDrag();
	        this.initTransform();
	    };
	    TreeChartCore.prototype.getNodeDataList = function () {
	        return this.nodeDataList;
	    };
	    TreeChartCore.prototype.getInitialTransformStyle = function () {
	        return {
	            transform: "scale(1) translate(".concat(this.initTransformX, "px, ").concat(this.initTransformY, "px)"),
	            transformOrigin: "center",
	        };
	    };
	    TreeChartCore.prototype.zoomIn = function () {
	        var originTransformStr = this.domElement.style.transform;
	        // 如果已有scale属性, 在原基础上修改
	        var targetScale = 1 * 1.2;
	        var scaleMatchResult = originTransformStr.match(MATCH_SCALE_REGEX);
	        if (scaleMatchResult && scaleMatchResult.length > 0) {
	            var originScale = parseFloat(scaleMatchResult[1]);
	            targetScale *= originScale;
	        }
	        this.setScale(targetScale);
	    };
	    TreeChartCore.prototype.zoomOut = function () {
	        var originTransformStr = this.domElement.style.transform;
	        // 如果已有scale属性, 在原基础上修改
	        var targetScale = 1 / 1.2;
	        var scaleMatchResult = originTransformStr.match(MATCH_SCALE_REGEX);
	        if (scaleMatchResult && scaleMatchResult.length > 0) {
	            var originScale = parseFloat(scaleMatchResult[1]);
	            targetScale = originScale / 1.2;
	        }
	        this.setScale(targetScale);
	    };
	    TreeChartCore.prototype.restoreScale = function () {
	        this.setScale(1);
	    };
	    TreeChartCore.prototype.setScale = function (scaleNum) {
	        if (typeof scaleNum !== "number")
	            return;
	        var pos = this.getTranslate();
	        var translateString = "translate(".concat(pos[0], "px, ").concat(pos[1], "px)");
	        this.svgElement.style.transform = "scale(".concat(scaleNum, ") ") + translateString;
	        this.domElement.style.transform =
	            "scale(".concat(scaleNum, ") ") + translateString;
	        this.currentScale = scaleNum;
	    };
	    TreeChartCore.prototype.getTranslate = function () {
	        var string = this.svgElement.style.transform;
	        var match = string.match(MATCH_TRANSLATE_REGEX);
	        if (match === null) {
	            return [null, null];
	        }
	        var x = parseInt(match[1]);
	        var y = parseInt(match[2]);
	        return [x, y];
	    };
	    TreeChartCore.prototype.isVertical = function () {
	        return this.direction === Direction.VERTICAL;
	    };
	    /**
	   * 根据link数据,生成svg path data
	   */
	    TreeChartCore.prototype.generateLinkPath = function (d) {
	        var self = this;
	        if (this.linkStyle === TreeLinkStyle.CURVE) {
	            return this.generateCurceLinkPath(self, d);
	        }
	        if (this.linkStyle === TreeLinkStyle.STRAIGHT) {
	            // the link path is: source -> secondPoint -> thirdPoint -> target
	            return this.generateStraightLinkPath(d);
	        }
	    };
	    TreeChartCore.prototype.generateCurceLinkPath = function (self, d) {
	        var linkPath = this.isVertical()
	            ? linkVertical()
	            : linkHorizontal();
	        linkPath
	            .x(function (d) {
	            return d.x;
	        })
	            .y(function (d) {
	            return d.y;
	        })
	            .source(function (d) {
	            var sourcePoint = {
	                x: d.source.x,
	                y: d.source.y,
	            };
	            return self.direction === Direction.VERTICAL
	                ? sourcePoint
	                : rotatePoint(sourcePoint);
	        })
	            .target(function (d) {
	            var targetPoint = {
	                x: d.target.x,
	                y: d.target.y,
	            };
	            return self.direction === Direction.VERTICAL
	                ? targetPoint
	                : rotatePoint(targetPoint);
	        });
	        return linkPath(d);
	    };
	    TreeChartCore.prototype.generateStraightLinkPath = function (d) {
	        var linkPath = src_path();
	        var sourcePoint = { x: d.source.x, y: d.source.y };
	        var targetPoint = { x: d.target.x, y: d.target.y };
	        if (!this.isVertical()) {
	            sourcePoint = rotatePoint(sourcePoint);
	            targetPoint = rotatePoint(targetPoint);
	        }
	        var xOffset = targetPoint.x - sourcePoint.x;
	        var yOffset = targetPoint.y - sourcePoint.y;
	        var secondPoint = this.isVertical()
	            ? { x: sourcePoint.x, y: sourcePoint.y + yOffset / 2 }
	            : { x: sourcePoint.x + xOffset / 2, y: sourcePoint.y };
	        var thirdPoint = this.isVertical()
	            ? { x: targetPoint.x, y: sourcePoint.y + yOffset / 2 }
	            : { x: sourcePoint.x + xOffset / 2, y: targetPoint.y };
	        linkPath.moveTo(sourcePoint.x, sourcePoint.y);
	        linkPath.lineTo(secondPoint.x, secondPoint.y);
	        linkPath.lineTo(thirdPoint.x, thirdPoint.y);
	        linkPath.lineTo(targetPoint.x, targetPoint.y);
	        return linkPath.toString();
	    };
	    TreeChartCore.prototype.updateDataList = function () {
	        var _a = this.buildTree(), nodeDataList = _a[0], linkDataList = _a[1];
	        nodeDataList.splice(0, 1);
	        linkDataList = linkDataList.filter(function (x) { return x.source.data.name !== "__invisible_root"; });
	        this.linkDataList = linkDataList;
	        this.nodeDataList = nodeDataList;
	    };
	    TreeChartCore.prototype.draw = function () {
	        this.updateDataList();
	        var identifier = this.dataset["identifier"];
	        var specialLinks = this.dataset["links"];
	        if (specialLinks && identifier) {
	            var _loop_1 = function (link) {
	                var parent_1 = void 0, children = undefined;
	                if (identifier === "value") {
	                    parent_1 = this_1.nodeDataList.find(function (d) {
	                        return d[identifier] == link.parent;
	                    });
	                    children = this_1.nodeDataList.filter(function (d) {
	                        return d[identifier] == link.child;
	                    });
	                }
	                else {
	                    parent_1 = this_1.nodeDataList.find(function (d) {
	                        return d["data"][identifier] == link.parent;
	                    });
	                    children = this_1.nodeDataList.filter(function (d) {
	                        return d["data"][identifier] == link.child;
	                    });
	                }
	                if (parent_1 && children) {
	                    for (var _a = 0, children_1 = children; _a < children_1.length; _a++) {
	                        var child = children_1[_a];
	                        var new_link = {
	                            source: parent_1,
	                            target: child,
	                        };
	                        this_1.linkDataList.push(new_link);
	                    }
	                }
	            };
	            var this_1 = this;
	            for (var _i = 0, specialLinks_1 = specialLinks; _i < specialLinks_1.length; _i++) {
	                var link = specialLinks_1[_i];
	                _loop_1(link);
	            }
	        }
	        this.svgSelection = src_select(this.svgElement);
	        var self = this;
	        var links = this.svgSelection
	            .selectAll(".link")
	            .data(this.linkDataList, function (d) {
	            return "".concat(d.source.data._key, "-").concat(d.target.data._key);
	        });
	        links
	            .enter()
	            .append("path")
	            .style("opacity", 0)
	            .transition()
	            .duration(ANIMATION_DURATION)
	            .ease(cubicInOut)
	            .style("opacity", 1)
	            .attr("class", "link")
	            .attr("d", function (d) {
	            return self.generateLinkPath(d);
	        });
	        links
	            .transition()
	            .duration(ANIMATION_DURATION)
	            .ease(cubicInOut)
	            .attr("d", function (d) {
	            return self.generateLinkPath(d);
	        });
	        links
	            .exit()
	            .transition()
	            .duration(ANIMATION_DURATION / 2)
	            .ease(cubicInOut)
	            .style("opacity", 0)
	            .remove();
	    };
	    /**
	   * Returns updated dataset by deep copying every nodes from the externalData and adding unique '_key' attributes.
	   **/
	    TreeChartCore.prototype.updatedInternalData = function (externalData) {
	        var data = { name: "__invisible_root", children: [] };
	        if (!externalData)
	            return data;
	        if (Array.isArray(externalData)) {
	            for (var i = externalData.length - 1; i >= 0; i--) {
	                data.children.push(deepCopy(externalData[i]));
	            }
	        }
	        else {
	            data.children.push(deepCopy(externalData));
	        }
	        return data;
	    };
	    TreeChartCore.prototype.buildTree = function () {
	        var treeBuilder = src_tree()
	            .nodeSize([this.treeConfig.nodeWidth, this.treeConfig.levelHeight]);
	        var tree = treeBuilder(hierarchy(this.dataset));
	        return [tree.descendants(), tree.links()];
	    };
	    TreeChartCore.prototype.enableDrag = function () {
	        var _this = this;
	        var startX = 0;
	        var startY = 0;
	        var isDrag = false;
	        // 保存鼠标点下时的位移
	        var mouseDownTransform = "";
	        this.treeContainer.onmousedown = function (event) {
	            mouseDownTransform = _this.svgElement.style.transform;
	            startX = event.clientX;
	            startY = event.clientY;
	            isDrag = true;
	        };
	        this.treeContainer.onmousemove = function (event) {
	            if (!isDrag)
	                return;
	            var originTransform = mouseDownTransform;
	            var originOffsetX = 0;
	            var originOffsetY = 0;
	            if (originTransform) {
	                var result = originTransform.match(MATCH_TRANSLATE_REGEX);
	                if (result !== null && result.length !== 0) {
	                    var _a = result.slice(1), offsetX = _a[0], offsetY = _a[1];
	                    originOffsetX = parseInt(offsetX);
	                    originOffsetY = parseInt(offsetY);
	                }
	            }
	            var newX = Math.floor((event.clientX - startX) / _this.currentScale) +
	                originOffsetX;
	            var newY = Math.floor((event.clientY - startY) / _this.currentScale) +
	                originOffsetY;
	            var transformStr = "translate(".concat(newX, "px, ").concat(newY, "px)");
	            if (originTransform) {
	                transformStr = originTransform.replace(MATCH_TRANSLATE_REGEX, transformStr);
	            }
	            _this.svgElement.style.transform = transformStr;
	            _this.domElement.style.transform = transformStr;
	        };
	        this.treeContainer.onmouseup = function () {
	            startX = 0;
	            startY = 0;
	            isDrag = false;
	        };
	    };
	    TreeChartCore.prototype.initTransform = function () {
	        var containerWidth = this.domElement.offsetWidth;
	        var containerHeight = this.domElement.offsetHeight;
	        if (this.isVertical()) {
	            this.initTransformX = Math.floor(containerWidth / 2);
	            this.initTransformY = Math.floor(this.treeConfig.nodeHeight - DEFAULT_HEIGHT_DECREMENT);
	        }
	        else {
	            this.initTransformX = Math.floor(this.treeConfig.nodeWidth - DEFAULT_HEIGHT_DECREMENT);
	            this.initTransformY = Math.floor(containerHeight / 2);
	        }
	    };
	    TreeChartCore.prototype.onClickNode = function (index) {
	        if (this.collapseEnabled) {
	            var curNode = this.nodeDataList[index];
	            if (curNode.data.children) {
	                curNode.data._children = curNode.data.children;
	                curNode.data.children = null;
	                curNode.data._collapsed = true;
	            }
	            else {
	                curNode.data.children = curNode.data._children;
	                curNode.data._children = null;
	                curNode.data._collapsed = false;
	            }
	            this.draw();
	        }
	    };
	    /**
	     * call this function to update dataset
	     * notice : you need to update the view rendered by `nodeDataList` too
	     * @param dataset the new dataset to show in chart
	     */
	    TreeChartCore.prototype.updateDataset = function (dataset) {
	        this.dataset = this.updatedInternalData(dataset);
	        this.draw();
	    };
	    /**
	     * release all dom reference
	     */
	    TreeChartCore.prototype.destroy = function () {
	        this.svgElement = null;
	        this.domElement = null;
	        this.treeContainer = null;
	    };
	    return TreeChartCore;
	}());
	/* harmony default export */ var tree_chart = (tree_chart_TreeChartCore);

	// CONCATENATED MODULE: ./node_modules/@ssthouse/tree-chart-core/build/index.js

	/* harmony default export */ var build = (tree_chart);



	// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./src/vue-tree/VueTree.vue?vue&type=script&lang=js


	var formatDimension = function formatDimension(dimension) {
	  if (typeof dimension === "number") return "".concat(dimension, "px");

	  if (dimension.indexOf("px") !== -1) {
	    return dimension;
	  } else {
	    return "".concat(dimension, "px");
	  }
	};

	/* harmony default export */ var VueTreevue_type_script_lang_js = ({
	  name: "vue-tree",
	  props: {
	    config: {
	      type: Object,
	      default: function _default() {
	        return {
	          nodeWidth: DEFAULT_NODE_WIDTH,
	          nodeHeight: DEFAULT_NODE_HEIGHT,
	          levelHeight: DEFAULT_LEVEL_HEIGHT
	        };
	      }
	    },
	    linkStyle: {
	      type: String,
	      default: TreeLinkStyle.CURVE
	    },
	    direction: {
	      type: String,
	      default: Direction.VERTICAL
	    },
	    collapseEnabled: {
	      type: Boolean,
	      default: true
	    },
	    // 展示的层级数据, 样例数据如: hierachical.json
	    dataset: {
	      type: [Object, Array],
	      required: true
	    }
	  },
	  data: function data() {
	    return {
	      formatDimension: formatDimension,
	      Direction: Direction,
	      treeChartCore: null,
	      nodeDataList: [],
	      initialTransformStyle: {}
	    };
	  },
	  mounted: function mounted() {
	    this.init();
	  },
	  beforeUnmount: function beforeUnmount() {
	    // remove dom reference
	    this.treeChartCore.destroy();
	  },
	  methods: {
	    init: function init() {
	      this.treeChartCore = new build({
	        svgElement: this.$refs.svg,
	        domElement: this.$refs.domContainer,
	        treeContainer: this.$refs.container,
	        dataset: this.dataset,
	        direction: this.direction,
	        treeConfig: this.config,
	        collapseEnabled: this.collapseEnabled,
	        linkStyle: this.linkStyle
	      });
	      this.treeChartCore.init();
	      this.nodeDataList = this.treeChartCore.getNodeDataList();
	      this.initialTransformStyle = this.treeChartCore.getInitialTransformStyle();
	    },
	    zoomIn: function zoomIn() {
	      this.treeChartCore.zoomIn();
	    },
	    zoomOut: function zoomOut() {
	      this.treeChartCore.zoomOut();
	    },
	    restoreScale: function restoreScale() {
	      this.treeChartCore.setScale(1);
	    },
	    onClickNode: function onClickNode(index) {
	      this.treeChartCore.onClickNode(index);
	      this.nodeDataList = this.treeChartCore.getNodeDataList();
	    }
	  },
	  watch: {
	    dataset: {
	      deep: true,
	      handler: function handler() {
	        this.treeChartCore.updateDataset(this.dataset);
	        this.nodeDataList = this.treeChartCore.getNodeDataList();
	      }
	    }
	  }
	});
	// CONCATENATED MODULE: ./src/vue-tree/VueTree.vue?vue&type=script&lang=js
	 
	// EXTERNAL MODULE: ./src/vue-tree/VueTree.vue?vue&type=style&index=0&id=779fbdcf&lang=less
	__webpack_require__("2c81");

	// EXTERNAL MODULE: ./src/vue-tree/VueTree.vue?vue&type=style&index=1&id=779fbdcf&lang=less&scoped=true
	__webpack_require__("0c49");

	// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/exportHelper.js
	var exportHelper = __webpack_require__("d959");
	var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

	// CONCATENATED MODULE: ./src/vue-tree/VueTree.vue








	const __exports__ = /*#__PURE__*/exportHelper_default()(VueTreevue_type_script_lang_js, [['render',render],['__scopeId',"data-v-779fbdcf"]]);

	/* harmony default export */ var VueTree = (__exports__);
	// CONCATENATED MODULE: ./src/vue-tree/index.js
	// @ts-ignore

	/* harmony default export */ var vue_tree = (VueTree);
	// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


	/* harmony default export */ __webpack_exports__["default"] = (vue_tree);



	/***/ }),

	/***/ "fddc":
	/***/ (function(module, exports, __webpack_require__) {

	// extracted by mini-css-extract-plugin

	/***/ })

	/******/ });
	});
	
} (vue3TreeChart_umd));

var vue3TreeChart_umdExports = vue3TreeChart_umd.exports;
const VueTree = /*@__PURE__*/getDefaultExportFromCjs(vue3TreeChart_umdExports);

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "tree-button flex justify-center" }, _attrs))} data-v-94e45fd2>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/TheTreeButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TheTreeButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-94e45fd2"]]);
const _sfc_main$1 = {
  __name: "TreeContent",
  __ssrInlineRender: true,
  props: {
    treeConfig: {},
    treeFullScreen: {
      type: Boolean,
      default: false
    },
    treeShowUserInfo: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const authStore = useAuthStore();
    const treeStore = useTreeStore();
    useRoute();
    const router = useRouter();
    const richMediaData = ref();
    const treeUserInfo = ref();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-86decce9><div class="${ssrRenderClass([{ "z-[101] fixed": unref(treeStore).treeFullScreen === true }, "hidden max-md:flex max-md:justify-center select-none gap-x-2 top-10 right-10 z-10"])}" data-v-86decce9>`);
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => unref(treeStore).treeFullScreen = !unref(treeStore).treeFullScreen
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="stroke-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-86decce9${_scopeId}><path d="M9.99999 20.9585C6.88841 20.8286 4.41431 20.4143 4.00001 20C3.5857 19.5857 3.17139 17.1116 3.04155 14M20.9585 14C20.8286 17.1116 20.4143 19.5857 20 20C19.5857 20.4143 17.1116 20.8286 14 20.9585M14 3.04155C17.1116 3.17139 19.5857 3.5857 20 4.00001C20.4143 4.41431 20.8286 6.88842 20.9585 10M10 3.04155C6.88842 3.17139 4.41431 3.5857 4.00001 4.00001C3.5857 4.41431 3.17139 6.88842 3.04155 10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-86decce9${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "stroke-white",
                width: "30px",
                height: "30px",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M9.99999 20.9585C6.88841 20.8286 4.41431 20.4143 4.00001 20C3.5857 19.5857 3.17139 17.1116 3.04155 14M20.9585 14C20.8286 17.1116 20.4143 19.5857 20 20C19.5857 20.4143 17.1116 20.8286 14 20.9585M14 3.04155C17.1116 3.17139 19.5857 3.5857 20 4.00001C20.4143 4.41431 20.8286 6.88842 20.9585 10M10 3.04155C6.88842 3.17139 4.41431 3.5857 4.00001 4.00001C3.5857 4.41431 3.17139 6.88842 3.04155 10",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => this.$refs.scaleTree.zoomIn()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="fill-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-86decce9${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8V9H8C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H9V12C9 12.5523 9.44772 13 10 13C10.5523 13 11 12.5523 11 12V11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H11V8Z" data-v-86decce9${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "fill-white",
                width: "30px",
                height: "30px",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8V9H8C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H9V12C9 12.5523 9.44772 13 10 13C10.5523 13 11 12.5523 11 12V11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H11V8Z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => this.$refs.scaleTree.zoomOut()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="fill-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-86decce9${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H8Z" data-v-86decce9${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "fill-white",
                width: "30px",
                height: "30px",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H8Z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => this.$refs.scaleTree.restoreScale()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="fill-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-86decce9${_scopeId}><path d="M14.4697 10.5303C14.7626 10.8232 15.2374 10.8232 15.5303 10.5303C15.8232 10.2374 15.8232 9.76256 15.5303 9.46967L14.4697 10.5303ZM12 7L12.5303 6.46967C12.2374 6.17678 11.7626 6.17678 11.4697 6.46967L12 7ZM8.46967 9.46967C8.17678 9.76256 8.17678 10.2374 8.46967 10.5303C8.76256 10.8232 9.23744 10.8232 9.53033 10.5303L8.46967 9.46967ZM9.53033 13.4697C9.23744 13.1768 8.76256 13.1768 8.46967 13.4697C8.17678 13.7626 8.17678 14.2374 8.46967 14.5303L9.53033 13.4697ZM12 17L11.4697 17.5303C11.7626 17.8232 12.2374 17.8232 12.5303 17.5303L12 17ZM15.5303 14.5303C15.8232 14.2374 15.8232 13.7626 15.5303 13.4697C15.2374 13.1768 14.7626 13.1768 14.4697 13.4697L15.5303 14.5303ZM15.5303 9.46967L12.5303 6.46967L11.4697 7.53033L14.4697 10.5303L15.5303 9.46967ZM11.4697 6.46967L8.46967 9.46967L9.53033 10.5303L12.5303 7.53033L11.4697 6.46967ZM8.46967 14.5303L11.4697 17.5303L12.5303 16.4697L9.53033 13.4697L8.46967 14.5303ZM12.5303 17.5303L15.5303 14.5303L14.4697 13.4697L11.4697 16.4697L12.5303 17.5303ZM8 4.75H16V3.25H8V4.75ZM19.25 8V16H20.75V8H19.25ZM16 19.25H8V20.75H16V19.25ZM4.75 16V8H3.25V16H4.75ZM8 19.25C6.20507 19.25 4.75 17.7949 4.75 16H3.25C3.25 18.6234 5.37665 20.75 8 20.75V19.25ZM19.25 16C19.25 17.7949 17.7949 19.25 16 19.25V20.75C18.6234 20.75 20.75 18.6234 20.75 16H19.25ZM16 4.75C17.7949 4.75 19.25 6.20507 19.25 8H20.75C20.75 5.37665 18.6234 3.25 16 3.25V4.75ZM8 3.25C5.37665 3.25 3.25 5.37665 3.25 8H4.75C4.75 6.20507 6.20507 4.75 8 4.75V3.25Z" data-v-86decce9${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "fill-white",
                width: "30px",
                height: "30px",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", { d: "M14.4697 10.5303C14.7626 10.8232 15.2374 10.8232 15.5303 10.5303C15.8232 10.2374 15.8232 9.76256 15.5303 9.46967L14.4697 10.5303ZM12 7L12.5303 6.46967C12.2374 6.17678 11.7626 6.17678 11.4697 6.46967L12 7ZM8.46967 9.46967C8.17678 9.76256 8.17678 10.2374 8.46967 10.5303C8.76256 10.8232 9.23744 10.8232 9.53033 10.5303L8.46967 9.46967ZM9.53033 13.4697C9.23744 13.1768 8.76256 13.1768 8.46967 13.4697C8.17678 13.7626 8.17678 14.2374 8.46967 14.5303L9.53033 13.4697ZM12 17L11.4697 17.5303C11.7626 17.8232 12.2374 17.8232 12.5303 17.5303L12 17ZM15.5303 14.5303C15.8232 14.2374 15.8232 13.7626 15.5303 13.4697C15.2374 13.1768 14.7626 13.1768 14.4697 13.4697L15.5303 14.5303ZM15.5303 9.46967L12.5303 6.46967L11.4697 7.53033L14.4697 10.5303L15.5303 9.46967ZM11.4697 6.46967L8.46967 9.46967L9.53033 10.5303L12.5303 7.53033L11.4697 6.46967ZM8.46967 14.5303L11.4697 17.5303L12.5303 16.4697L9.53033 13.4697L8.46967 14.5303ZM12.5303 17.5303L15.5303 14.5303L14.4697 13.4697L11.4697 16.4697L12.5303 17.5303ZM8 4.75H16V3.25H8V4.75ZM19.25 8V16H20.75V8H19.25ZM16 19.25H8V20.75H16V19.25ZM4.75 16V8H3.25V16H4.75ZM8 19.25C6.20507 19.25 4.75 17.7949 4.75 16H3.25C3.25 18.6234 5.37665 20.75 8 20.75V19.25ZM19.25 16C19.25 17.7949 17.7949 19.25 16 19.25V20.75C18.6234 20.75 20.75 18.6234 20.75 16H19.25ZM16 4.75C17.7949 4.75 19.25 6.20507 19.25 8H20.75C20.75 5.37665 18.6234 3.25 16 3.25V4.75ZM8 3.25C5.37665 3.25 3.25 5.37665 3.25 8H4.75C4.75 6.20507 6.20507 4.75 8 4.75V3.25Z" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div data-v-86decce9><div class="${ssrRenderClass([{ "!fixed left-0 top-0 !h-screen !w-screen flex !bg-opacity-60 !rounded-none !border-0 !bg-black z-[100] justify-center items-center": unref(treeStore).treeFullScreen === true }, "relative border w-11/12 h-[80vh] mx-auto rounded-2xl overflow-hidden dark:border-gray-400 shadow dark:shadow-gray-400 transition-all duration-300"])}" data-v-86decce9>`);
      _push(ssrRenderComponent(unref(VueTree), {
        ref: "scaleTree",
        class: "mx-auto select-none relative rounded-2xl w-full h-full",
        dataset: richMediaData.value = { ...unref(treeStore).get_list },
        config: __props.treeConfig = { nodeWidth: 170, nodeHeight: 80, levelHeight: 170 }
      }, {
        node: withCtx(({ node, collapsed }, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{ "shadow-md dark:shadow-gray-400 ": node.id === ((_a2 = unref(treeUserInfo)) == null ? void 0 : _a2.id) }, "p-2 bg-blueDarkSemiLight transition-all rounded-lg"])}" data-v-86decce9${_scopeId}><img alt="photo"${ssrRenderAttr("src", unref(authStore).get_server_domain + node.photo_url)} class="w-[50px] h-[50px] rounded-full mx-auto" data-v-86decce9${_scopeId}><p class="text-white text-center break-words" style="${ssrRenderStyle({ "font-weight": "bold" })}" data-v-86decce9${_scopeId}>${ssrInterpolate(((_b2 = node.first_name) == null ? void 0 : _b2.length) > 10 && ((_c2 = node.last_name) == null ? void 0 : _c2.length) > 10 ? node.first_name + " " + node.last_name.slice(0, 9) + "..." : node.first_name + " " + node.last_name)}</p><p class="text-sm text-white" data-v-86decce9${_scopeId}>${ssrInterpolate(node.position)}</p></div>`);
          } else {
            return [
              createVNode("div", {
                onDblclick: ($event) => treeUserInfo.value = { id: node.id, first_name: node.first_name, last_name: node.last_name, photo_url: node.photo_url, position: node.position, department_id: node.department_id, department: node.department, role: node.role },
                class: ["p-2 bg-blueDarkSemiLight transition-all rounded-lg", { "shadow-md dark:shadow-gray-400 ": node.id === ((_d2 = unref(treeUserInfo)) == null ? void 0 : _d2.id) }]
              }, [
                createVNode("img", {
                  alt: "photo",
                  src: unref(authStore).get_server_domain + node.photo_url,
                  class: "w-[50px] h-[50px] rounded-full mx-auto"
                }, null, 8, ["src"]),
                createVNode("p", {
                  class: "text-white text-center break-words",
                  style: { "font-weight": "bold" }
                }, toDisplayString(((_e2 = node.first_name) == null ? void 0 : _e2.length) > 10 && ((_f = node.last_name) == null ? void 0 : _f.length) > 10 ? node.first_name + " " + node.last_name.slice(0, 9) + "..." : node.first_name + " " + node.last_name), 1),
                createVNode("p", { class: "text-sm text-white" }, toDisplayString(node.position), 1)
              ], 42, ["onDblclick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="absolute max-md:hidden flex select-none gap-x-2 top-10 right-10 z-10" data-v-86decce9>`);
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => unref(treeStore).treeFullScreen = !unref(treeStore).treeFullScreen
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="stroke-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-86decce9${_scopeId}><path d="M9.99999 20.9585C6.88841 20.8286 4.41431 20.4143 4.00001 20C3.5857 19.5857 3.17139 17.1116 3.04155 14M20.9585 14C20.8286 17.1116 20.4143 19.5857 20 20C19.5857 20.4143 17.1116 20.8286 14 20.9585M14 3.04155C17.1116 3.17139 19.5857 3.5857 20 4.00001C20.4143 4.41431 20.8286 6.88842 20.9585 10M10 3.04155C6.88842 3.17139 4.41431 3.5857 4.00001 4.00001C3.5857 4.41431 3.17139 6.88842 3.04155 10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-86decce9${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "stroke-white",
                width: "30px",
                height: "30px",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M9.99999 20.9585C6.88841 20.8286 4.41431 20.4143 4.00001 20C3.5857 19.5857 3.17139 17.1116 3.04155 14M20.9585 14C20.8286 17.1116 20.4143 19.5857 20 20C19.5857 20.4143 17.1116 20.8286 14 20.9585M14 3.04155C17.1116 3.17139 19.5857 3.5857 20 4.00001C20.4143 4.41431 20.8286 6.88842 20.9585 10M10 3.04155C6.88842 3.17139 4.41431 3.5857 4.00001 4.00001C3.5857 4.41431 3.17139 6.88842 3.04155 10",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => this.$refs.scaleTree.zoomIn()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="fill-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-86decce9${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8V9H8C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H9V12C9 12.5523 9.44772 13 10 13C10.5523 13 11 12.5523 11 12V11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H11V8Z" data-v-86decce9${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "fill-white",
                width: "30px",
                height: "30px",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8V9H8C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H9V12C9 12.5523 9.44772 13 10 13C10.5523 13 11 12.5523 11 12V11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H11V8Z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => this.$refs.scaleTree.zoomOut()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="fill-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-86decce9${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H8Z" data-v-86decce9${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "fill-white",
                width: "30px",
                height: "30px",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H8Z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TheTreeButton, {
        onClick: ($event) => this.$refs.scaleTree.restoreScale()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="fill-white" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-86decce9${_scopeId}><path d="M14.4697 10.5303C14.7626 10.8232 15.2374 10.8232 15.5303 10.5303C15.8232 10.2374 15.8232 9.76256 15.5303 9.46967L14.4697 10.5303ZM12 7L12.5303 6.46967C12.2374 6.17678 11.7626 6.17678 11.4697 6.46967L12 7ZM8.46967 9.46967C8.17678 9.76256 8.17678 10.2374 8.46967 10.5303C8.76256 10.8232 9.23744 10.8232 9.53033 10.5303L8.46967 9.46967ZM9.53033 13.4697C9.23744 13.1768 8.76256 13.1768 8.46967 13.4697C8.17678 13.7626 8.17678 14.2374 8.46967 14.5303L9.53033 13.4697ZM12 17L11.4697 17.5303C11.7626 17.8232 12.2374 17.8232 12.5303 17.5303L12 17ZM15.5303 14.5303C15.8232 14.2374 15.8232 13.7626 15.5303 13.4697C15.2374 13.1768 14.7626 13.1768 14.4697 13.4697L15.5303 14.5303ZM15.5303 9.46967L12.5303 6.46967L11.4697 7.53033L14.4697 10.5303L15.5303 9.46967ZM11.4697 6.46967L8.46967 9.46967L9.53033 10.5303L12.5303 7.53033L11.4697 6.46967ZM8.46967 14.5303L11.4697 17.5303L12.5303 16.4697L9.53033 13.4697L8.46967 14.5303ZM12.5303 17.5303L15.5303 14.5303L14.4697 13.4697L11.4697 16.4697L12.5303 17.5303ZM8 4.75H16V3.25H8V4.75ZM19.25 8V16H20.75V8H19.25ZM16 19.25H8V20.75H16V19.25ZM4.75 16V8H3.25V16H4.75ZM8 19.25C6.20507 19.25 4.75 17.7949 4.75 16H3.25C3.25 18.6234 5.37665 20.75 8 20.75V19.25ZM19.25 16C19.25 17.7949 17.7949 19.25 16 19.25V20.75C18.6234 20.75 20.75 18.6234 20.75 16H19.25ZM16 4.75C17.7949 4.75 19.25 6.20507 19.25 8H20.75C20.75 5.37665 18.6234 3.25 16 3.25V4.75ZM8 3.25C5.37665 3.25 3.25 5.37665 3.25 8H4.75C4.75 6.20507 6.20507 4.75 8 4.75V3.25Z" data-v-86decce9${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "fill-white",
                width: "30px",
                height: "30px",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", { d: "M14.4697 10.5303C14.7626 10.8232 15.2374 10.8232 15.5303 10.5303C15.8232 10.2374 15.8232 9.76256 15.5303 9.46967L14.4697 10.5303ZM12 7L12.5303 6.46967C12.2374 6.17678 11.7626 6.17678 11.4697 6.46967L12 7ZM8.46967 9.46967C8.17678 9.76256 8.17678 10.2374 8.46967 10.5303C8.76256 10.8232 9.23744 10.8232 9.53033 10.5303L8.46967 9.46967ZM9.53033 13.4697C9.23744 13.1768 8.76256 13.1768 8.46967 13.4697C8.17678 13.7626 8.17678 14.2374 8.46967 14.5303L9.53033 13.4697ZM12 17L11.4697 17.5303C11.7626 17.8232 12.2374 17.8232 12.5303 17.5303L12 17ZM15.5303 14.5303C15.8232 14.2374 15.8232 13.7626 15.5303 13.4697C15.2374 13.1768 14.7626 13.1768 14.4697 13.4697L15.5303 14.5303ZM15.5303 9.46967L12.5303 6.46967L11.4697 7.53033L14.4697 10.5303L15.5303 9.46967ZM11.4697 6.46967L8.46967 9.46967L9.53033 10.5303L12.5303 7.53033L11.4697 6.46967ZM8.46967 14.5303L11.4697 17.5303L12.5303 16.4697L9.53033 13.4697L8.46967 14.5303ZM12.5303 17.5303L15.5303 14.5303L14.4697 13.4697L11.4697 16.4697L12.5303 17.5303ZM8 4.75H16V3.25H8V4.75ZM19.25 8V16H20.75V8H19.25ZM16 19.25H8V20.75H16V19.25ZM4.75 16V8H3.25V16H4.75ZM8 19.25C6.20507 19.25 4.75 17.7949 4.75 16H3.25C3.25 18.6234 5.37665 20.75 8 20.75V19.25ZM19.25 16C19.25 17.7949 17.7949 19.25 16 19.25V20.75C18.6234 20.75 20.75 18.6234 20.75 16H19.25ZM16 4.75C17.7949 4.75 19.25 6.20507 19.25 8H20.75C20.75 5.37665 18.6234 3.25 16 3.25V4.75ZM8 3.25C5.37665 3.25 3.25 5.37665 3.25 8H4.75C4.75 6.20507 6.20507 4.75 8 4.75V3.25Z" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "!rounded-none dark:!bg-gray-700": unref(treeStore).treeFullScreen, "!w-0 ": !unref(treeUserInfo), "!w-[25%] dark:border-r-gray-400 border-r ": unref(treeUserInfo) }, "absolute left-0 top-0 rounded-tl-2xl rounded-bl-2xl dark:bg-gray-700 bg-white z-50 h-full transition-all duration-200"])}" data-v-86decce9>`);
      if (unref(treeUserInfo)) {
        _push(`<div class="relative" data-v-86decce9><button class="${ssrRenderClass([{ "fixed !top-1 !p-[3px]": unref(treeStore).treeFullScreen }, "absolute top-2 right-0 p-1 border-t border-l border-b"])}" data-v-86decce9><svg class="dark:stroke-white stroke-black" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-86decce9><path d="M10 7L15 12L10 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-86decce9></path></svg></button><div class="mx-auto mt-4 gap-y-2 px-2 flex flex-col justify-center items-center" data-v-86decce9><img class="w-[70px] h-[70px] rounded-full mt-10 dark:border-none border"${ssrRenderAttr("src", unref(authStore).get_server_domain + ((_a = unref(treeUserInfo)) == null ? void 0 : _a.photo_url))} alt="" data-v-86decce9><div class="dark:text-white text-black text-center" data-v-86decce9><p class="text-xl break-words" data-v-86decce9>${ssrInterpolate(((_b = unref(treeUserInfo)) == null ? void 0 : _b.first_name) + " " + ((_c = unref(treeUserInfo)) == null ? void 0 : _c.last_name))}</p><p class="text-sm" data-v-86decce9>${ssrInterpolate((_d = unref(treeUserInfo)) == null ? void 0 : _d.position)}</p></div><div data-v-86decce9><p class="break-words text-center" data-v-86decce9>${ssrInterpolate(_ctx.$t("\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442:"))} <span data-v-86decce9>${ssrInterpolate((_e = unref(treeUserInfo)) == null ? void 0 : _e.department)}</span></p></div></div><div class="px-2 my-6 flex flex-wrap justify-center gap-2" data-v-86decce9>`);
        _push(ssrRenderComponent(_sfc_main$4, {
          type: "treeBtn",
          onClick: ($event) => {
            var _a2;
            return unref(router).push(`/base/users/${(_a2 = unref(treeUserInfo)) == null ? void 0 : _a2.id}`);
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u041F\u0435\u0440\u0435\u0439\u0442\u0438"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u041F\u0435\u0440\u0435\u0439\u0442\u0438")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$4, { type: "treeBtn" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$4, { type: "treeBtn" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0412\u044B\u0434\u0430\u0442\u044C \u0437\u0430\u0434\u0430\u043D\u0438\u0435"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0412\u044B\u0434\u0430\u0442\u044C \u0437\u0430\u0434\u0430\u043D\u0438\u0435")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$4, { type: "treeBtn" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("\u0412\u044B\u0434\u0430\u0442\u044C \u0437\u0430\u0434\u0430\u043D\u0438\u0435"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("\u0412\u044B\u0434\u0430\u0442\u044C \u0437\u0430\u0434\u0430\u043D\u0438\u0435")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tree/TreeContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TreeContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-86decce9"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    treeFullScreen: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    useTreeStore();
    const companies = useCompanies();
    companies.loadCurrentCompany();
    useSeoMeta({
      title: "\u0414\u0435\u0440\u0435\u0432\u043E",
      description: `\u0414\u0440\u0435\u0432\u043E\u0432\u0438\u0434\u043D\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 ${companies.company.name}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        "text-type": "pageTitle",
        class: { "blur": unref(useTreeStore)().treeFullScreen === true }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("\u0414\u0435\u0440\u0435\u0432\u043E " + unref(companies).company.name))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("\u0414\u0435\u0440\u0435\u0432\u043E " + unref(companies).company.name)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TreeContent, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/base/tree/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-AYuGKCxK.mjs.map
