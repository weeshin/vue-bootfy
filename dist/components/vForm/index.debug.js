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
/******/ 	return __webpack_require__(__webpack_require__.s = 391);
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

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _vForm = __webpack_require__(284);

var _vForm2 = _interopRequireDefault(_vForm);

var _vFieldset = __webpack_require__(283);

var _vFieldset2 = _interopRequireDefault(_vFieldset);

var _vFormCheck = __webpack_require__(285);

var _vFormCheck2 = _interopRequireDefault(_vFormCheck);

var _vFormGroup = __webpack_require__(4);

var _vFormGroup2 = _interopRequireDefault(_vFormGroup);

var _vFormInput = __webpack_require__(286);

var _vFormInput2 = _interopRequireDefault(_vFormInput);

var _vFormRadio = __webpack_require__(287);

var _vFormRadio2 = _interopRequireDefault(_vFormRadio);

var _vFormRadioGroup = __webpack_require__(288);

var _vFormRadioGroup2 = _interopRequireDefault(_vFormRadioGroup);

var _vFormSelect = __webpack_require__(289);

var _vFormSelect2 = _interopRequireDefault(_vFormSelect);

var _vInput = __webpack_require__(290);

var _vInput2 = _interopRequireDefault(_vInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('v-fieldset', _vFieldset2.default);
  Vue.component('v-form', _vForm2.default);
  Vue.component('v-form-check', _vFormCheck2.default);
  Vue.component('v-form-group', _vFormGroup2.default);
  Vue.component('v-form-input', _vFormInput2.default);
  Vue.component('v-form-radio', _vFormRadio2.default);
  Vue.component('v-form-radio-group', _vFormRadioGroup2.default);
  Vue.component('v-form-select', _vFormSelect2.default);
  Vue.component('v-input', _vInput2.default);
}
module.exports = exports['default'];

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    feedback: {
      type: Object,
      default: null
    },
    row: {
      type: Boolean,
      default: null
    },
    colsize: {
      type: Number,
      default: null
    },
    srOnly: {
      type: Boolean,
      default: null
    }
  },
  computed: {
    controlGroupSizeClass: function controlGroupSizeClass() {
      switch (this.size) {
        case 'large':
          return 'form-control-lg';
        case 'small':
          return 'form-control-sm';
        default:
      }
    },
    feedbackStatusClass: function feedbackStatusClass() {
      if (this.feedback !== null) {
        switch (this.feedback.status) {
          case 'success':
            return 'has-success';
          case 'warning':
            return 'has-warning';
          case 'danger':
            return 'has-danger';
          default:
        }
      }
    },
    feedbackControlClass: function feedbackControlClass() {
      if (this.feedback !== null) {
        switch (this.feedback.status) {
          case 'success':
            return 'form-control-success';
          case 'warning':
            return 'form-control-warning';
          case 'danger':
            return 'form-control-danger';
          default:
        }
      }
    },
    rowClass: function rowClass() {
      if (this.row) {
        return 'row';
      }
    },
    colLeftClass: function colLeftClass() {
      if (this.row) {
        return this.colsize ? 'col-form-label col-' + this.colsize : null;
      }
      if (this.srOnly) {
        return 'sr-only';
      }
    },
    colRightClass: function colRightClass() {
      if (this.row) {
        return this.colsize ? 'col-' + (12 - this.colsize) : null;
      }
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(344),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/nicklim/vue-projects/vue-bootfy/src/components/vForm/vFieldset.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vFieldset.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ae060c0", Component.options)
  } else {
    hotAPI.reload("data-v-5ae060c0", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(332),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/nicklim/vue-projects/vue-bootfy/src/components/vForm/vForm.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vForm.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-491e0348", Component.options)
  } else {
    hotAPI.reload("data-v-491e0348", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(315),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/nicklim/vue-projects/vue-bootfy/src/components/vForm/vFormCheck.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vFormCheck.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05f5623c", Component.options)
  } else {
    hotAPI.reload("data-v-05f5623c", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(341),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/nicklim/vue-projects/vue-bootfy/src/components/vForm/vFormInput.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vFormInput.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53f1a3fe", Component.options)
  } else {
    hotAPI.reload("data-v-53f1a3fe", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(360),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/nicklim/vue-projects/vue-bootfy/src/components/vForm/vFormRadio.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vFormRadio.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-974240a2", Component.options)
  } else {
    hotAPI.reload("data-v-974240a2", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(352),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/nicklim/vue-projects/vue-bootfy/src/components/vForm/vFormRadioGroup.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vFormRadioGroup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6df04a80", Component.options)
  } else {
    hotAPI.reload("data-v-6df04a80", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(51),
  /* template */
  __webpack_require__(356),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/nicklim/vue-projects/vue-bootfy/src/components/vForm/vFormSelect.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vFormSelect.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-77884e78", Component.options)
  } else {
    hotAPI.reload("data-v-77884e78", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(368),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/nicklim/vue-projects/vue-bootfy/src/components/vForm/vInput.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vInput.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e1a2173c", Component.options)
  } else {
    hotAPI.reload("data-v-e1a2173c", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    id: {},
    value: {},
    checked: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      localChecked: this.checked
    };
  }
};
module.exports = exports["default"];

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-check"
  }, [_c('label', {
    staticClass: "form-check-label"
  }, [_c('input', {
    staticClass: "form-check-input",
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": _vm.checked
    },
    on: {
      "change": _vm.change
    }
  }), _vm._v("\n    " + _vm._s(_vm.label) + "\n  ")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-05f5623c", module.exports)
  }
}

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    class: [_vm.formInlineClass]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-491e0348", module.exports)
  }
}

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-form-group', {
    attrs: {
      "feedback": _vm.feedback,
      "row": _vm.row,
      "srOnly": _vm.srOnly
    }
  }, [(_vm.label) ? _c('label', {
    class: [_vm.colLeftClass],
    attrs: {
      "for": _vm.id
    }
  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), (_vm.textarea) ? _c('textarea', {
    staticClass: "form-control",
    attrs: {
      "id": _vm.id,
      "rows": _vm.rows,
      "readonly": _vm.readonly
    }
  }) : _c('div', {
    class: [_vm.colRightClass]
  }, [_c('input', {
    class: [_vm.formControlClass, _vm.controlGroupSizeClass, _vm.feedbackControlClass],
    attrs: {
      "type": _vm.type,
      "id": _vm.id,
      "aria-describedby": _vm.helpId,
      "placeholder": _vm.placeholder,
      "readonly": _vm.readonly
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": function($event) {
        _vm.$emit('input', $event.target.value)
      }
    }
  })]), _vm._v(" "), (_vm.feedback) ? _c('div', {
    staticClass: "form-control-feedback"
  }, [_vm._v(_vm._s(_vm.feedback.message))]) : _vm._e(), _vm._v(" "), (_vm.description) ? _c('small', {
    staticClass: "form-text text-muted",
    attrs: {
      "id": _vm.helpId
    }
  }, [_vm._v(_vm._s(_vm.description))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-53f1a3fe", module.exports)
  }
}

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('fieldset', {
    staticClass: "form-group row"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5ae060c0", module.exports)
  }
}

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6df04a80", module.exports)
  }
}

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-form-group', [_c('label', {
    attrs: {
      "for": _vm.id
    }
  }, [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _c('select', {
    class: ['form-control', _vm.controlGroupSizeClass],
    attrs: {
      "id": _vm.id,
      "multiple": _vm.multiple
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-77884e78", module.exports)
  }
}

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['form-check', _vm.inlineClassname]
  }, [_c('label', {
    staticClass: "form-check-label",
    on: {
      "click": _vm.handleClick
    }
  }, [_c('input', {
    staticClass: "form-check-input",
    attrs: {
      "id": _vm.id,
      "name": _vm.name,
      "type": "radio",
      "autocomplete": "off"
    },
    domProps: {
      "value": _vm.value,
      "checked": _vm.checked
    },
    on: {
      "click": _vm.handleClick,
      "change": _vm.handleChange
    }
  }), _vm._v(" "), _vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-974240a2", module.exports)
  }
}

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.srOnly) ? _c('div', [_vm._t("default")], 2) : _c('div', {
    class: ['form-group', _vm.feedbackStatusClass, _vm.rowClass]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d4623f9a", module.exports)
  }
}

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    staticClass: "form-control"
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e1a2173c", module.exports)
  }
}

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(366),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/nicklim/vue-projects/vue-bootfy/src/components/vForm/vFormGroup.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vFormGroup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d4623f9a", Component.options)
  } else {
    hotAPI.reload("data-v-d4623f9a", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),

/***/ 45:
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
    inline: {
      type: Boolean,
      default: false
    },
    navbar: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formInlineClass: function formInlineClass() {
      var allClassnames = [];

      if (this.inline) {
        allClassnames.push('form-inline');
      }
      if (this.navbar) {
        allClassnames.push('form-inline my-2 my-lg-0');
      }
      return allClassnames;
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formRadioCheck = __webpack_require__(3);

var _formRadioCheck2 = _interopRequireDefault(_formRadioCheck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_formRadioCheck2.default],
  props: {
    label: {
      type: String,
      default: null
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      checked: this.value
    };
  },

  methods: {
    change: function change() {
      this.checked = !this.checked;
      this.$emit('input', this.checked);
    }
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

module.exports = exports['default'];

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = __webpack_require__(2);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_form2.default]
}; //
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = __webpack_require__(2);

var _form2 = _interopRequireDefault(_form);

var _vFormGroup = __webpack_require__(4);

var _vFormGroup2 = _interopRequireDefault(_vFormGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//
//
//
//
//
//
//

exports.default = {
  mixins: [_form2.default],
  props: {
    type: {
      type: String,
      default: 'text'
    },
    textarea: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 5
    },
    readonly: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: null
    }
  },
  components: {
    'v-form-group': _vFormGroup2.default
  },
  computed: {
    helpId: function helpId() {
      if (this.id) {
        return this.id + 'Help';
      }
    },
    formControlClass: function formControlClass() {
      if (this.srOnly) {
        return 'form-control mb-2 mr-sm-2 mb-sm-0';
      }
      return 'form-control';
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formRadioCheck = __webpack_require__(3);

var _formRadioCheck2 = _interopRequireDefault(_formRadioCheck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_formRadioCheck2.default],
  props: {
    name: {
      type: String,
      default: null
    },
    inline: {
      type: Boolean,
      default: null
    }
  },
  data: function data() {
    return {
      inputValue: this.value
    };
  },

  computed: {
    inlineClassname: function inlineClassname() {
      if (this.inline) {
        return 'form-check-inline';
      }
    }
  },
  methods: {
    disabledClassname: function disabledClassname(disabled) {
      if (disabled) {
        return 'disabled';
      }
    },
    handleClick: {},
    handleChange: function handleChange() {
      console.log(this.inputValue);
      this.$emit('change', this.inputValue);
      this.$parent.$emit('change', this.inputValue);
      this.$parent.$emit('input', this.inputValue);
    }
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
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formRadioCheck = __webpack_require__(3);

var _formRadioCheck2 = _interopRequireDefault(_formRadioCheck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  watch: {
    checked: function checked(newVal, oldVal) {
      this.localChecked = this.checked;
    },
    localChecked: function localChecked(newVal, oldVal) {
      this.$emit('input', newVal);
    }
  },
  methods: {}
}; //
//
//
//
//
//

module.exports = exports['default'];

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = __webpack_require__(2);

var _form2 = _interopRequireDefault(_form);

var _vFormGroup = __webpack_require__(4);

var _vFormGroup2 = _interopRequireDefault(_vFormGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  mixins: [_form2.default],
  props: {
    multiple: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'v-form-group': _vFormGroup2.default
  },
  computed: {
    helpId: function helpId() {
      if (this.id) {
        return this.id + 'Help';
      }
    }
  }
};
module.exports = exports['default'];

/***/ })

/******/ });
}));