/*!
* Vue-Bootfy v0.0.2
* Made with Nick Lim
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueBootfy=t():e.VueBootfy=t()})(this,(function(){return (function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=389)})({0:function(e,t){e.exports=function(e,t,n,o,r){var u,f=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(u=e,f=e.default);var s="function"==typeof f?f.options:f;t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),o&&(s._scopeId=o);var c;if(r?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},s._ssrRegister=c):n&&(c=n),c){var d=s.functional,l=d?s.render:s.beforeCreate;d?s.render=function(e,t){return c.call(t),l(e,t)}:s.beforeCreate=l?[].concat(l,c):[c]}return{esModule:u,exports:f,options:s}}},18:function(e,t,n){"use strict";function o(e){e.component("v-jumbotron",u.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(292),u=(function(e){return e&&e.__esModule?e:{default:e}})(r);e.exports=t.default},292:function(e,t,n){var o=n(0)(n(52),n(348),null,null,null);e.exports=o.exports},348:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:["jumbotron",e.fluidClassName]},[e._t("default")],2)},staticRenderFns:[]}},389:function(e,t,n){e.exports=n(18)},52:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{fluid:{type:Boolean,default:null}},computed:{fluidClassName:function(){if(this.fluid)return"jumbotron-fluid"}}},e.exports=t.default}})}));