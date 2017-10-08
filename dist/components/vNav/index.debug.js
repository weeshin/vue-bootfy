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
/******/ 	return __webpack_require__(__webpack_require__.s = 396);
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

var _vNav = __webpack_require__(299);

var _vNav2 = _interopRequireDefault(_vNav);

var _vNavItem = __webpack_require__(300);

var _vNavItem2 = _interopRequireDefault(_vNavItem);

var _vPlays = __webpack_require__(301);

var _vPlays2 = _interopRequireDefault(_vPlays);

var _vTab = __webpack_require__(302);

var _vTab2 = _interopRequireDefault(_vTab);

var _vTabContent = __webpack_require__(303);

var _vTabContent2 = _interopRequireDefault(_vTabContent);

var _vTabPane = __webpack_require__(304);

var _vTabPane2 = _interopRequireDefault(_vTabPane);

var _vTabs = __webpack_require__(305);

var _vTabs2 = _interopRequireDefault(_vTabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('v-nav', _vNav2.default);
  Vue.component('v-nav-item', _vNavItem2.default);
  // Vue.component('v-nav-link', vNavLink);
  Vue.component('v-plays', _vPlays2.default);
  Vue.component('v-tab', _vTab2.default);
  Vue.component('v-tab-content', _vTabContent2.default);
  Vue.component('v-tab-pane', _vTabPane2.default);
  Vue.component('v-tabs', _vTabs2.default);
}
// import vNavLink from './vNavLink.vue';
module.exports = exports['default'];

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observe = undefined;

var _observe = __webpack_require__(29);

var _observe2 = _interopRequireDefault(_observe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.observe = _observe2.default;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = observe;
function observe(el, callback) {
  var MutationObserver = window.MutationObserver || window.WebkitMutationObserver;
  var eventListenerSupported = window.addEventListener;

  if (MutationObserver) {
    var obs = new MutationObserver(function (mutations) {
      if (mutations[0].addedNodes.length > 0 || mutations[0].removedNodes.length > 0) {
        callback();
      }
    });

    var config = {
      attributes: true,
      childList: true,
      characterData: true
    };

    obs.observe(el, config);
  } else if (eventListenerSupported) {
    el.addEventListener('DOMNodeInserted', callback, false);
    el.addEventListener('DOMNodeRemoved', callback, false);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(319),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/nicklim/vue-projects/vue-bootfy/src/components/vNav/vNav.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vNav.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1db1a786", Component.options)
  } else {
    hotAPI.reload("data-v-1db1a786", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(371),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/nicklim/vue-projects/vue-bootfy/src/components/vNav/vNavItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vNavItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f3d8c38e", Component.options)
  } else {
    hotAPI.reload("data-v-f3d8c38e", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(329),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/nicklim/vue-projects/vue-bootfy/src/components/vNav/vPlays.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vPlays.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3fea0562", Component.options)
  } else {
    hotAPI.reload("data-v-3fea0562", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(343),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/nicklim/vue-projects/vue-bootfy/src/components/vNav/vTab.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vTab.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59fd34f8", Component.options)
  } else {
    hotAPI.reload("data-v-59fd34f8", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(354),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/nicklim/vue-projects/vue-bootfy/src/components/vNav/vTabContent.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vTabContent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70babc11", Component.options)
  } else {
    hotAPI.reload("data-v-70babc11", Component.options)
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
  __webpack_require__(61),
  /* template */
  __webpack_require__(348),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/nicklim/vue-projects/vue-bootfy/src/components/vNav/vTabPane.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vTabPane.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6713d880", Component.options)
  } else {
    hotAPI.reload("data-v-6713d880", Component.options)
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
  __webpack_require__(62),
  /* template */
  __webpack_require__(324),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/nicklim/vue-projects/vue-bootfy/src/components/vNav/vTabs.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vTabs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d55e9aa", Component.options)
  } else {
    hotAPI.reload("data-v-2d55e9aa", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.navbar) ? _c('ul', {
    staticClass: "navbar-nav mr-auto"
  }, [_vm._t("default")], 2) : _c('ul', {
    class: ['nav', _vm.classnames],
    attrs: {
      "role": [_vm.rolelist]
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1db1a786", module.exports)
  }
}

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tabs"
  }, [_c('v-nav', {
    attrs: {
      "justified": "",
      "tabs": ""
    }
  }, _vm._l((_vm.tabs), (function(tab, index) {
    return _c('v-nav-item', {
      key: index,
      attrs: {
        "href": "#",
        "active": tab.active
      },
      on: {
        "click": function($event) {
          _vm.setTab(index)
        }
      }
    }, [_vm._v("\n      " + _vm._s(tab.title) + "\n    ")])
  }))), _vm._v(" "), _c('div', {
    ref: "tabsContainer",
    class: ['tab-content']
  }, [_vm._t("default")], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2d55e9aa", module.exports)
  }
}

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c("h1", {
    tag: "component"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3fea0562", module.exports)
  }
}

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-tab-pane', {
    attrs: {
      "fade": "",
      "show": _vm.show
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-59fd34f8", module.exports)
  }
}

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tab-pane",
    class: [_vm.fadeClass, _vm.showClass],
    attrs: {
      "id": _vm.id,
      "role": "tabpanel"
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6713d880", module.exports)
  }
}

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tab-content"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-70babc11", module.exports)
  }
}

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.dropdown) ? _c('li', {
    class: ['nav-item', _vm.dropdownClassname]
  }, [_c('a', {
    staticClass: "nav-link dropdown-toggle",
    attrs: {
      "data-toggle": "dropdown",
      "href": "#",
      "role": "button",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }
  }, [_vm._v("Dropdown")]), _vm._v(" "), _vm._t("default")], 2) : _c('li', {
    class: ['nav-item']
  }, [_c('a', {
    class: ['nav-link', _vm.activeClass, _vm.disabledClass, _vm.fillClass],
    attrs: {
      "role": _vm.tabAttr,
      "data-toggle": _vm.tabAttr
    },
    on: {
      "click": function($event) {
        _vm.$emit('click')
      }
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f3d8c38e", module.exports)
  }
}

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),

/***/ 58:
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
    navbar: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    end: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    tabs: {
      type: Boolean,
      default: false
    },
    pills: {
      type: Boolean,
      default: false
    },
    fill: {
      type: Boolean,
      default: false
    },
    justified: {
      type: Boolean,
      default: false
    },
    row: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classnames: function classnames() {
      var allClassnames = [];

      if (this.center) {
        allClassnames.push('justify-content-center');
      }
      if (this.end) {
        allClassnames.push('justify-content-end');
      }
      if (this.vertical) {
        return 'flex-column flex-sm-column';
      }
      if (this.rowClassname) {
        return 'flex-sm-row';
      }
      if (this.tabs) {
        return 'nav-tabs';
      }
      if (this.pills) {
        return 'nav-pills';
      }
      if (this.fill) {
        return 'nav-fill';
      }
      if (this.justified) {
        return 'nav-justified';
      }
    },
    rolelist: function rolelist() {
      if (this.tab) {
        return 'tablist';
      }
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 59:
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
//
//
//
//

exports.default = {
  props: {
    dropdown: {
      type: Boolean,
      default: false
    },
    href: {
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
    fill: {
      type: Boolean,
      default: false
    },
    tab: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dropdownClassname: function dropdownClassname() {
      if (this.downdown) {
        return 'dropdown';
      }
    },
    activeClass: function activeClass() {
      if (this.active) {
        return 'active';
      }
    },
    disabledClass: function disabledClass() {
      if (this.disabled) {
        return 'disabled';
      }
    },
    fillClass: function fillClass() {
      if (this.fill) {
        return 'flex-sm-fill text-sm-center';
      }
    },
    tabAttr: function tabAttr() {
      if (this.tab) {
        return 'tab';
      }
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 60:
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
    title: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      show: false,
      active: false
    };
  }
};
module.exports = exports["default"];

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
    id: {
      type: String,
      default: null
    },
    fade: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    fadeClass: function fadeClass() {
      if (this.fade) {
        return 'fade';
      }
    },
    showClass: function showClass() {
      if (this.show) {
        return 'show active';
      }
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

var _util = __webpack_require__(28);

exports.default = {
  props: {
    value: {
      type: Number,
      default: null
    }
  },
  data: function data() {
    return {
      currentTab: this.value,
      tabs: []
    };
  },

  watch: {
    currentTab: function currentTab(val, old) {
      if (val === old) {
        return;
      }

      // this.$root.$emit('changed::tab', this, val, this.tabs[val]);
      // this.$emit('input', val);
      // this.tabs[val].$emit('click');
    },
    value: function value(val, old) {
      if (val === old) {
        return;
      }
    }
  },
  methods: {
    updateTabs: function updateTabs() {
      if (this.$slots.default) {
        this.tabs = this.$slots.default.filter((function (tab) {
          return tab.componentInstance || false;
        })).map((function (tab) {
          return tab.componentInstance;
        }));
      } else {
        this.tabs = [];
      }

      console.log('updateTabs');
    },
    setTab: function setTab(index) {
      var _this = this;

      this.tabs.forEach((function (t) {
        _this.$set(t, 'show', false);
        _this.$set(t, 'active', false);
      }));
      this.$set(this.tabs[index], 'show', true);
      this.$set(this.tabs[index], 'active', true);
      console.log('set tab');
    }
  },
  mounted: function mounted() {
    this.updateTabs();

    // this.tabs.forEach((t) => {
    //   this.$set(t, 'show', true);
    // });

    this.setTab(0);

    (0, _util.observe)(this.$refs.tabsContainer, this.updateTabs.bind(this));
  }
}; //
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
//

module.exports = exports['default'];

/***/ })

/******/ });
}));