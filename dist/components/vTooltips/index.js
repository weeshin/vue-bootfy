/*!
* Vue-Bootfy v0.0.1
* Made with Nick Lim
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueBootfy=e():t.VueBootfy=e()})(this,(function(){return (function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=77)})({0:function(t,e){t.exports=function(t,e,n,o,r){var i,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(i=t,s=t.default);var f="function"==typeof s?s.options:s;e&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns),o&&(f._scopeId=o);var c;if(r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},f._ssrRegister=c):n&&(c=n),c){var a=f.functional,l=a?f.render:f.beforeCreate;a?f.render=function(t,e){return c.call(e),l(t,e)}:f.beforeCreate=l?[].concat(l,c):[c]}return{esModule:i,exports:s,options:f}}},37:function(t,e,n){var o=n(0)(null,n(55),null,null,null);t.exports=o.exports},55:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tooltip tooltip-top",attrs:{role:"tooltip"}},[n("div",{staticClass:"tooltip-arrow"}),t._v(" "),n("div",{staticClass:"tooltip-inner"},[t._t("default")],2)])},staticRenderFns:[]}},77:function(t,e,n){t.exports=n(8)},8:function(t,e,n){"use strict";function o(t){t.component("v-tooltip",i.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(37),i=(function(t){return t&&t.__esModule?t:{default:t}})(r);t.exports=e.default}})}));