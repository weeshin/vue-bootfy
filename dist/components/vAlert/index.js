/*!
* Vue-Bootfy v0.0.3
* Made with Nick Lim
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueBootfy=t():e.VueBootfy=t()})(this,(function(){return (function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=376)})({0:function(e,t){e.exports=function(e,t,n,r,s){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var u="function"==typeof i?i.options:i;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),r&&(u._scopeId=r);var l;if(s?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=l):n&&(l=n),l){var c=u.functional,d=c?u.render:u.beforeCreate;c?u.render=function(e,t){return l.call(t),d(e,t)}:u.beforeCreate=d?[].concat(d,l):[l]}return{esModule:o,exports:i,options:u}}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{vStyle:{type:String,default:null}}},e.exports=t.default},254:function(e,t,n){var r=n(0)(n(29),n(346),null,null,null);e.exports=r.exports},255:function(e,t,n){var r=n(0)(n(30),n(336),null,null,null);e.exports=r.exports},29:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),s=(function(e){return e&&e.__esModule?e:{default:e}})(r);t.default={mixins:[s.default],props:{dismissible:{type:Boolean,default:!1},show:{type:Boolean,default:!0}},data:function(){return{countDownTimerId:null,dismissed:!1}},watch:{show:function(){this.changeShowStatus()}},computed:{className:function(){switch(this.vStyle){case"primary":return"alert-primary";case"secondary":return"alert-secondary";case"success":return"alert-success";case"info":return"alert-info";case"warning":return"alert-warning";case"danger":return"alert-danger";case"light":return"alert-light";case"dark":return"alert-dark"}},dismissibleClassName:function(){if(this.dismissible)return"alert-dismissible fade show"},pshow:function(){return!this.dismissed&&(this.countDownTimerId||this.show)}},methods:{dismiss:function(){this.dismissed=!0,this.$emit("dismissed-callback")},changeShowStatus:function(){this.dismissed=!1,!0===this.show||!1===this.show||null===this.show||this.show}}},e.exports=t.default},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{href:null}},e.exports=t.default},336:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("a",{staticClass:"alert-link",attrs:{href:e.href}},[e._t("default")],2)},staticRenderFns:[]}},346:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.pshow?n("div",{class:["alert",e.className],attrs:{role:"alert"}},[e.dismissible?n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:e.dismiss}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])]):e._e(),e._v(" "),e._t("default")],2):e._e()},staticRenderFns:[]}},376:function(e,t,n){e.exports=n(7)},7:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e){e.component("v-alert",i.default),e.component("v-alert-link",u.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var o=n(254),i=r(o),a=n(255),u=r(a);e.exports=t.default}})}));