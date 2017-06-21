/*!
* Vue-Bootfy v0.0.1
* Made with Nick Lim
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueBootfy=t():e.VueBootfy=t()})(this,(function(){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=59)})({0:function(e,t){e.exports=function(e,t,n,r,o){var u,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(u=e,s=e.default);var i="function"==typeof s?s.options:s;t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),r&&(i._scopeId=r);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},i._ssrRegister=c):n&&(c=n),c){var f=i.functional,d=f?i.render:i.beforeCreate;f?i.render=function(e,t){return c.call(t),d(e,t)}:i.beforeCreate=d?[].concat(d,c):[c]}return{esModule:u,exports:s,options:i}}},10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{vStyle:{type:String,default:null},pill:{type:Boolean,default:!1}},computed:{className:function(){switch(this.vStyle){case"primary":return"badge-primary";case"success":return"badge-success";case"info":return"badge-info";case"warning":return"badge-warning";case"danger":return"badge-danger";default:return"badge-default"}},pillClass:function(){return this.pill?"badge-pill":null}}},e.exports=t.default},18:function(e,t){},2:function(e,t,n){"use strict";function r(e){e.component("v-badge",u.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(20),u=(function(e){return e&&e.__esModule?e:{default:e}})(o);e.exports=t.default},20:function(e,t,n){function r(e){n(18)}var o=n(0)(n(10),n(39),r,"data-v-11a20786",null);e.exports=o.exports},39:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{class:["badge",e.className,e.pillClass]},[e._t("default")],2)},staticRenderFns:[]}},59:function(e,t,n){e.exports=n(2)}})}));