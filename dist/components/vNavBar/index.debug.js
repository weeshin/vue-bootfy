(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueBootfy"] = factory();
	else
		root["VueBootfy"] = factory();
})(this, (function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 393);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _vNavBar = __webpack_require__(303);

var _vNavBar2 = _interopRequireDefault(_vNavBar);

var _vNavBarBrand = __webpack_require__(304);

var _vNavBarBrand2 = _interopRequireDefault(_vNavBarBrand);

var _vNavBarItem = __webpack_require__(305);

var _vNavBarItem2 = _interopRequireDefault(_vNavBarItem);

var _vNavBarTogglerButton = __webpack_require__(306);

var _vNavBarTogglerButton2 = _interopRequireDefault(_vNavBarTogglerButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('v-nav-bar', _vNavBar2.default);
  Vue.component('v-nav-bar-brand', _vNavBarBrand2.default);
  Vue.component('v-nav-bar-item', _vNavBarItem2.default);
  Vue.component('v-nav-bar-toggler-button', _vNavBarTogglerButton2.default);
}
module.exports = exports['default'];

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(360),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/nicklim/vue-projects/vue-bootfy/src/components/vNavBar/vNavBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vNavBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c86e8918", Component.options)
  } else {
    hotAPI.reload("data-v-c86e8918", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(62),
  /* template */
  __webpack_require__(330),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/nicklim/vue-projects/vue-bootfy/src/components/vNavBar/vNavBarBrand.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vNavBarBrand.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a312323", Component.options)
  } else {
    hotAPI.reload("data-v-4a312323", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(63),
  /* template */
  __webpack_require__(322),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/nicklim/vue-projects/vue-bootfy/src/components/vNavBar/vNavBarItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vNavBarItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39830b27", Component.options)
  } else {
    hotAPI.reload("data-v-39830b27", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(334),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/nicklim/vue-projects/vue-bootfy/src/components/vNavBar/vNavBarTogglerButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vNavBarTogglerButton.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e488b8c", Component.options)
  } else {
    hotAPI.reload("data-v-4e488b8c", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    class: ['nav-item', _vm.activeClass, _vm.dropdownClass, _vm.showClass]
  }, [_c('a', {
    class: ['nav-link', _vm.disabledClass, _vm.dropdownToggleClass],
    attrs: {
      "id": _vm.id,
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    },
    on: {
      "click": _vm.linkClick
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _vm._t("menu")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-39830b27", module.exports)
  }
}

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c(_vm.tag, {
    tag: "component",
    staticClass: "navbar-brand",
    attrs: {
      "href": _vm.href
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4a312323", module.exports)
  }
}

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    class: ['navbar-toggler', _vm.classnames],
    attrs: {
      "type": "button",
      "data-toggle": "collapse",
      "data-target": "#navbarToggleExternalContent",
      "aria-controls": "navbarToggleExternalContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }
  }, [_c('span', {
    staticClass: "navbar-toggler-icon"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4e488b8c", module.exports)
  }
}

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    class: ['navbar', 'navbar-expand flex-column flex-md-row', _vm.classname]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c86e8918", module.exports)
  }
}

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  props: {
    inverse: {
      type: Boolean,
      default: false
    },
    fixTop: {
      type: Boolean,
      default: false
    },
    fixBottom: {
      type: Boolean,
      default: false
    },
    stickyTop: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classname: function classname() {
      var classlist = [];

      if (this.inverse) {
        classlist.push('navbar-dark bg-dark');
      } else {
        classlist.push('navbar-light bg-light');
      }

      if (this.fixTop) {
        classlist.push('fixed-top');
      } else if (this.fixBottom) {
        classlist.push('fixed-bottom');
      } else if (this.stickyTop) {
        classlist.push('sticky-top');
      }

      switch (this.size) {
        case 'small':
          classlist.push('navbar-expand-sm');
          break;
        case 'middle':
          classlist.push('navbar-expand-md');
          break;
        case 'large':
          classlist.push('navbar-expand-lg');
          break;
        case 'extra':
          classlist.push('navbar-expand-xl');
          break;
        default:
          classlist.push('navbar-expand-lg');
      }
      // justify-content-between

      return classlist;
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//

exports.default = {
  props: {
    tag: {
      type: String,
      default: 'a'
    },
    href: {
      type: String,
      default: null
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    id: {
      type: String,
      default: null
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dropdown: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      show: false
    };
  },

  computed: {
    activeClass: function activeClass() {
      var allClassnames = [];

      if (this.active) {
        allClassnames.push('active');
      }

      return allClassnames;
    },
    disabledClass: function disabledClass() {
      if (this.disabled) {
        return 'disabled';
      }
    },
    dropdownClass: function dropdownClass() {
      if (this.dropdown) {
        return 'dropdown';
      }
    },
    dropdownToggleClass: function dropdownToggleClass() {
      if (this.dropdown) {
        return 'dropdown-toggle';
      }
    },
    showClass: function showClass() {
      if (this.show) {
        return 'show';
      }
    }
  },
  methods: {
    linkClick: function linkClick() {
      this.show = !this.show;
      console.log('link click');
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    right: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classnames: function classnames() {
      var classlist = [];

      if (this.right) {
        classlist.push('navbar-toggler-right');
      } else if (this.left) {
        classlist.push('navbar-toggler-left');
      }
      return classlist;
    }
  }
};
module.exports = exports['default'];

/***/ })

/******/ });
}));