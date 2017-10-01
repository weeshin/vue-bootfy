/*!
* Vue-Bootfy v0.0.3
* Made with Nick Lim
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueBootfy=e():t.VueBootfy=e()})(this,(function(){return (function(t){function e(n){if(o[n])return o[n].exports;var s=o[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var o={};return e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=391)})({0:function(t,e){t.exports=function(t,e,o,n,s){var r,a=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(r=t,a=t.default);var i="function"==typeof a?a.options:a;e&&(i.render=e.render,i.staticRenderFns=e.staticRenderFns),n&&(i._scopeId=n);var d;if(s?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},i._ssrRegister=d):o&&(d=o),d){var c=i.functional,u=c?i.render:i.beforeCreate;c?i.render=function(t,e){return d.call(e),u(t,e)}:i.beforeCreate=u?[].concat(u,d):[d]}return{esModule:r,exports:a,options:i}}},20:function(t,e,o){"use strict";function n(t){t.component("v-modal",r.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;var s=o(295),r=(function(t){return t&&t.__esModule?t:{default:t}})(s);t.exports=e.default},295:function(t,e,o){var n=o(0)(o(55),o(335),null,null,null);t.exports=n.exports},335:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal fade",attrs:{id:"myModal",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel"}},[o("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[t._t("modal-header",[o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"modal-title"},[t._v("Modal title")]),t._v(" "),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:t.close}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])]),t._v(" "),t._t("modal-body",[o("div",{staticClass:"modal-body"})]),t._v(" "),t._t("modal-footer",[o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")]),t._v(" "),o("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.close}},[t._v("Close")])])])],2)])])},staticRenderFns:[]}},391:function(t,e,o){t.exports=o(20)},55:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{show:function(){var t=this.$el;t.style.display="block",t.classList.add("show"),console.log("show")},close:function(){var t=this.$el;t.style.display=null,t.classList.remove("show")}}},t.exports=e.default}})}));