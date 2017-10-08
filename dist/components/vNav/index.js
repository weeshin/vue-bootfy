/*!
* Vue-Bootfy v0.0.3
* Made with Nick Lim
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueBootfy=e():t.VueBootfy=e()})(this,(function(){return (function(t){function e(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=396)})({0:function(t,e){t.exports=function(t,e,n,a,o){var s,r=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(s=t,r=t.default);var u="function"==typeof r?r.options:r;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),a&&(u._scopeId=a);var i;if(o?(i=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=i):n&&(i=n),i){var f=u.functional,d=f?u.render:u.beforeCreate;f?u.render=function(t,e){return i.call(e),d(t,e)}:u.beforeCreate=d?[].concat(d,i):[i]}return{esModule:s,exports:r,options:u}}},22:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function o(t){t.component("v-nav",r.default),t.component("v-nav-item",u.default),t.component("v-plays",f.default),t.component("v-tab",c.default),t.component("v-tab-content",v.default),t.component("v-tab-pane",h.default),t.component("v-tabs",m.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var s=n(299),r=a(s),l=n(300),u=a(l),i=n(301),f=a(i),d=n(302),c=a(d),p=n(303),v=a(p),b=n(304),h=a(b),_=n(305),m=a(_);t.exports=e.default},28:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.observe=void 0;var a=n(29),o=(function(t){return t&&t.__esModule?t:{default:t}})(a);e.observe=o.default},29:function(t,e,n){"use strict";function a(t,e){var n=window.MutationObserver||window.WebkitMutationObserver,a=window.addEventListener;if(n){var o=new n(function(t){(t[0].addedNodes.length>0||t[0].removedNodes.length>0)&&e()}),s={attributes:!0,childList:!0,characterData:!0};o.observe(t,s)}else a&&(t.addEventListener("DOMNodeInserted",e,!1),t.addEventListener("DOMNodeRemoved",e,!1))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a,t.exports=e.default},299:function(t,e,n){var a=n(0)(n(58),n(319),null,null,null);t.exports=a.exports},300:function(t,e,n){var a=n(0)(n(59),n(371),null,null,null);t.exports=a.exports},301:function(t,e,n){var a=n(0)(null,n(329),null,null,null);t.exports=a.exports},302:function(t,e,n){var a=n(0)(n(60),n(343),null,null,null);t.exports=a.exports},303:function(t,e,n){var a=n(0)(null,n(354),null,null,null);t.exports=a.exports},304:function(t,e,n){var a=n(0)(n(61),n(348),null,null,null);t.exports=a.exports},305:function(t,e,n){var a=n(0)(n(62),n(324),null,null,null);t.exports=a.exports},319:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.navbar?n("ul",{staticClass:"navbar-nav mr-auto"},[t._t("default")],2):n("ul",{class:["nav",t.classnames],attrs:{role:[t.rolelist]}},[t._t("default")],2)},staticRenderFns:[]}},324:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs"},[n("v-nav",{attrs:{justified:"",tabs:""}},t._l(t.tabs,(function(e,a){return n("v-nav-item",{key:a,attrs:{href:"#",active:e.active},on:{click:function(e){t.setTab(a)}}},[t._v("\n      "+t._s(e.title)+"\n    ")])}))),t._v(" "),n("div",{ref:"tabsContainer",class:["tab-content"]},[t._t("default")],2)],1)},staticRenderFns:[]}},329:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{tag:"component"},[t._t("default")],2)},staticRenderFns:[]}},343:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-tab-pane",{attrs:{fade:"",show:t.show}},[t._t("default")],2)},staticRenderFns:[]}},348:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tab-pane",class:[t.fadeClass,t.showClass],attrs:{id:t.id,role:"tabpanel"}},[t._t("default")],2)},staticRenderFns:[]}},354:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tab-content"},[t._t("default")],2)},staticRenderFns:[]}},371:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.dropdown?n("li",{class:["nav-item",t.dropdownClassname]},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Dropdown")]),t._v(" "),t._t("default")],2):n("li",{class:["nav-item"]},[n("a",{class:["nav-link",t.activeClass,t.disabledClass,t.fillClass],attrs:{role:t.tabAttr,"data-toggle":t.tabAttr},on:{click:function(e){t.$emit("click")}}},[t._t("default")],2)])},staticRenderFns:[]}},396:function(t,e,n){t.exports=n(22)},58:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{navbar:{type:Boolean,default:!1},center:{type:Boolean,default:!1},end:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},tabs:{type:Boolean,default:!1},pills:{type:Boolean,default:!1},fill:{type:Boolean,default:!1},justified:{type:Boolean,default:!1},row:{type:Boolean,default:!1}},computed:{classnames:function(){var t=[];return this.center&&t.push("justify-content-center"),this.end&&t.push("justify-content-end"),this.vertical?"flex-column flex-sm-column":this.rowClassname?"flex-sm-row":this.tabs?"nav-tabs":this.pills?"nav-pills":this.fill?"nav-fill":this.justified?"nav-justified":void 0},rolelist:function(){if(this.tab)return"tablist"}}},t.exports=e.default},59:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{dropdown:{type:Boolean,default:!1},href:{type:String,default:null},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},fill:{type:Boolean,default:!1},tab:{type:Boolean,default:!1}},computed:{dropdownClassname:function(){if(this.downdown)return"dropdown"},activeClass:function(){if(this.active)return"active"},disabledClass:function(){if(this.disabled)return"disabled"},fillClass:function(){if(this.fill)return"flex-sm-fill text-sm-center"},tabAttr:function(){if(this.tab)return"tab"}}},t.exports=e.default},60:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:{type:String,default:null}},data:function(){return{show:!1,active:!1}}},t.exports=e.default},61:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{id:{type:String,default:null},fade:{type:Boolean,default:!1},show:{type:Boolean,default:!1}},computed:{fadeClass:function(){if(this.fade)return"fade"},showClass:function(){if(this.show)return"show active"}}},t.exports=e.default},62:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(28);e.default={props:{value:{type:Number,default:null}},data:function(){return{currentTab:this.value,tabs:[]}},watch:{currentTab:function(t,e){},value:function(t,e){}},methods:{updateTabs:function(){this.$slots.default?this.tabs=this.$slots.default.filter((function(t){return t.componentInstance||!1})).map((function(t){return t.componentInstance})):this.tabs=[],console.log("updateTabs")},setTab:function(t){var e=this;this.tabs.forEach((function(t){e.$set(t,"show",!1),e.$set(t,"active",!1)})),this.$set(this.tabs[t],"show",!0),this.$set(this.tabs[t],"active",!0),console.log("set tab")}},mounted:function(){this.updateTabs(),this.setTab(0),(0,a.observe)(this.$refs.tabsContainer,this.updateTabs.bind(this))}},t.exports=e.default}})}));