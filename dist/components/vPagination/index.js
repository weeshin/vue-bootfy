/*!
* Vue-Bootfy v0.0.5
* Made with Nick Lim
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueBootfy=e():t.VueBootfy=e()})(this,(function(){return (function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=399)})({0:function(t,e){t.exports=function(t,e,n,r,a){var s,o=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(s=t,o=t.default);var u="function"==typeof o?o.options:o;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),r&&(u._scopeId=r);var l;if(a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=l):n&&(l=n),l){var c=u.functional,f=c?u.render:u.beforeCreate;c?u.render=function(t,e){return l.call(e),f(t,e)}:u.beforeCreate=f?[].concat(f,l):[l]}return{esModule:s,exports:o,options:u}}},24:function(t,e,n){"use strict";function r(t){t.component("v-pagination",s.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var a=n(310),s=(function(t){return t&&t.__esModule?t:{default:t}})(a);t.exports=e.default},310:function(t,e,n){var r=n(0)(n(67),n(314),null,null,null);t.exports=r.exports},314:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{"aria-label":t.title}},[n("ul",{class:["pagination",t.sizeClass]},[n("li",{staticClass:"page-item",class:[{disabled:1===t.currentPage}]},[n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.btnClick(t.currentPage-1)}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._v(" "),t._l(t.buildRange(),(function(e){return n("li",{staticClass:"page-item",class:[{active:t.currentPage===e}]},[n("a",{staticClass:"page-link",on:{click:function(n){n.stopPropagation(),n.preventDefault(),t.btnClick(e)}}},[t._v(t._s(e))])])})),t._v(" "),n("li",{staticClass:"page-item",class:[{disabled:t.currentPage===t.totalPages}]},[n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.btnClick(t.currentPage+1)}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)])},staticRenderFns:[]}},399:function(t,e,n){t.exports=n(24)},67:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:{type:String,default:null},size:{type:String,default:null},totalRecords:{type:Number,default:0},currentPage:{type:Number,default:1},totalPages:{type:Number,default:1},max:{type:Number,default:7}},computed:{sizeClass:function(){switch(this.size){case"large":return"pagination-lg";case"small":return"pagination-sm"}}},methods:{buildRange:function(){var t=this.max;this.totalPages<t&&(t=this.totalPages);var e=Math.floor(t/2),n=Math.max(Math.min(this.currentPage+e,this.totalPages),t);console.log("Current Page: "+this.currentPage+", m "+e+", last "+n);for(var r=[],a=n;a>n-t;a--)r.push(a);return r.reverse()},btnClick:function(t){this.$emit("click",t)}}},t.exports=e.default}})}));