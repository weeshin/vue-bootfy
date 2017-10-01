webpackJsonp([8],{399:function(e,t,a){var l=a(0)(a(424),a(466),null,null,null);e.exports=l.exports},416:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:String,default:null}},e.exports=t.default},417:function(e,t,a){t=e.exports=a(393)(),t.push([e.i,".exampleContainer[data-v-00862b54]{margin:5px;padding:25px;border:2px solid #eee}",""])},418:function(e,t,a){var l=a(417);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a(394)("75dcd322",l,!0)},419:function(e,t,a){function l(e){a(418)}var i=a(0)(a(416),a(420),l,"data-v-00862b54",null);e.exports=i.exports},420:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.title?a("h2",[e._v(e._s(e.title))]):e._e(),e._v(" "),a("div",{staticClass:"exampleContainer"},[e._t("default")],2)])},staticRenderFns:[]}},424:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(419),n=l(i),r=a(442),s=l(r);t.default={components:{"example-container":n.default},data:function(){return{showAlert:!1,propertiesMd:"#header",alertMd:s.default}},methods:{showAlertClick:function(){this.showAlert=!0,console.log("show alert click")}}},e.exports=t.default},442:function(e,t){e.exports="### Properties\n\n| Property      | Type        | Default Value                                                   |\n| ------------- | ----------- | --------------------------------------------------------------- |\n| vStyle        | String      | primary, secondary, success, danger, warning, info, light, dark |\n| dismissible   | Boolean     | false                                                           |\n| show          | Boolean     | false                                                           |\n"},466:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Alerts")]),e._v(" "),a("example-container",[a("v-alert",{attrs:{vStyle:"primary"}},[e._v("\n        This is a primary alert—check it out!\n      ")]),e._v(" "),a("v-alert",{attrs:{vStyle:"secondary"}},[e._v("\n        This is a secondary alert—check it out!\n      ")]),e._v(" "),a("v-alert",{attrs:{vStyle:"success"}},[e._v("\n        This is a success alert—check it out!\n      ")]),e._v(" "),a("v-alert",{attrs:{vStyle:"danger"}},[e._v("\n        This is a danger alert—check it out!\n      ")]),e._v(" "),a("v-alert",{attrs:{vStyle:"warning"}},[e._v("\n        This is a warning alert—check it out!\n      ")]),e._v(" "),a("v-alert",{attrs:{vStyle:"info"}},[e._v("\n        This is a info alert—check it out!\n      ")]),e._v(" "),a("v-alert",{attrs:{vStyle:"light"}},[e._v("\n        This is a light alert—check it out!\n      ")]),e._v(" "),a("v-alert",{attrs:{vStyle:"dark"}},[e._v("\n        This is a dark alert—check it out!\n      ")]),e._v(" "),a("v-code",{attrs:{lang:"language-markup"}},[a("script",{attrs:{type:"text/plain"}},[e._v('<v-alert vStyle="primary">\n  This is a primary alert—check it out!\n</v-alert>\n<v-alert vStyle="secondary">\n  This is a secondary alert—check it out!\n</v-alert>\n<v-alert vStyle="success">\n  This is a success alert—check it out!\n</v-alert>\n<v-alert vStyle="danger">\n  This is a danger alert—check it out!\n</v-alert>\n<v-alert vStyle="warning">\n  This is a warning alert—check it out!\n</v-alert>\n<v-alert vStyle="info">\n  This is a info alert—check it out!\n</v-alert>\n<v-alert vStyle="light">\n  This is a light alert—check it out!\n</v-alert>\n<v-alert vStyle="dark">\n  This is a dark alert—check it out!\n</v-alert>\n        ')])])],1),e._v(" "),a("h1",[e._v("Link Color")]),e._v(" "),a("example-container",[a("v-alert",{attrs:{vStyle:"primary"}},[e._v("\n        This is a primary alert with "),a("v-alert-link",{attrs:{href:"https://www.google.com"}},[e._v("an example link")]),e._v(". Give it a click if you like.\n      ")],1),e._v(" "),a("v-alert",{attrs:{vStyle:"secondary"}},[e._v("\n        This is a secondary alert with "),a("v-alert-link",{attrs:{href:"https://www.google.com"}},[e._v("an example link")]),e._v(". Give it a click if you like.\n      ")],1),e._v(" "),a("v-alert",{attrs:{vStyle:"success"}},[e._v("\n        This is a success alert with "),a("v-alert-link",{attrs:{href:"https://www.google.com"}},[e._v("an example link")]),e._v(". Give it a click if you like.\n      ")],1),e._v(" "),a("v-alert",{attrs:{vStyle:"danger"}},[e._v("\n        This is a danger alert with "),a("v-alert-link",{attrs:{href:"https://www.google.com"}},[e._v("an example link")]),e._v(". Give it a click if you like.\n      ")],1),e._v(" "),a("v-alert",{attrs:{vStyle:"warning"}},[e._v("\n        This is a warning alert with "),a("v-alert-link",{attrs:{href:"https://www.google.com"}},[e._v("an example link")]),e._v(". Give it a click if you like.\n      ")],1),e._v(" "),a("v-alert",{attrs:{vStyle:"info"}},[e._v("\n        This is a info alert with "),a("v-alert-link",{attrs:{href:"https://www.google.com"}},[e._v("an example link")]),e._v(". Give it a click if you like.\n      ")],1),e._v(" "),a("v-alert",{attrs:{vStyle:"light"}},[e._v("\n        This is a light alert with "),a("v-alert-link",{attrs:{href:"https://www.google.com"}},[e._v("an example link")]),e._v(". Give it a click if you like.\n      ")],1),e._v(" "),a("v-alert",{attrs:{vStyle:"dark"}},[e._v("\n        This is a dark alert with "),a("v-alert-link",{attrs:{href:"https://www.google.com"}},[e._v("an example link")]),e._v(". Give it a click if you like.\n      ")],1),e._v(" "),a("v-code",[a("script",{attrs:{type:"text/plain"}},[e._v('<v-alert vStyle="primary">\n  This is a primary alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.\n</v-alert>\n<v-alert vStyle="secondary">\n  This is a secondary alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.\n</v-alert>\n<v-alert vStyle="success">\n  This is a success alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.\n</v-alert>\n<v-alert vStyle="danger">\n  This is a danger alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.\n</v-alert>\n<v-alert vStyle="warning">\n  This is a warning alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.\n</v-alert>\n<v-alert vStyle="info">\n  This is a info alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.\n</v-alert>\n<v-alert vStyle="light">\n  This is a light alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.\n</v-alert>\n<v-alert vStyle="dark">\n  This is a dark alert with <v-alert-link href="https://www.google.com">an example link</v-alert-link>. Give it a click if you like.\n</v-alert>\n        ')])])],1),e._v(" "),a("h1",[e._v("Additional content")]),e._v(" "),a("p",[e._v("Alerts can also contain additional HTML elements like headings, paragraphs and dividers.")]),e._v(" "),a("example-container",[a("v-alert",{attrs:{vStyle:"success"}},[a("h4",{staticClass:"alert-heading"},[e._v("Well done!")]),e._v(" "),a("p",[e._v("Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.")]),e._v(" "),a("hr"),e._v(" "),a("p",{staticClass:"mb-0"},[e._v("Whenever you need to, be sure to use margin utilities to keep things nice and tidy.")])]),e._v(" "),a("v-code",[a("script",{attrs:{type:"text/plain"}},[e._v('<v-alert vStyle="success">\n  <h4 class="alert-heading">Well done!</h4>\n  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n  <hr>\n  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n</v-alert>\n        ')])])],1),e._v(" "),a("example-container",[a("v-alert",{attrs:{vStyle:"warning",dismissible:""}},[a("strong",[e._v("Holy guacamole!")]),e._v(" You should check in on some of those fields below.\n      ")]),e._v(" "),a("v-code",[a("script",{attrs:{type:"text/plain"}},[e._v('<v-alert vStyle="warning" dismissible>\n  <strong>Holy guacamole!</strong> You should check in on some of those fields below.\n</v-alert>\n        ')])])],1),e._v(" "),a("example-container",[a("v-alert",{attrs:{vStyle:"success",show:e.showAlert}},[e._v("Success show alert")]),e._v(" "),a("v-button",{attrs:{vStyle:"info"},on:{click:e.showAlertClick}},[e._v("show alert")]),e._v(" "),a("v-code",[a("script",{attrs:{type:"text/plain"}},[e._v('<v-alert vStyle="success" :show="showAlert">Success show alert</v-alert>\n<v-button vStyle="info" @click="showAlertClick">show alert</v-button>\n        ')])])],1),e._v(" "),a("example-container",[a("div",{directives:[{name:"markdown",rawName:"v-markdown",value:{content:e.alertMd},expression:"{ content: alertMd }"}]})])],1)},staticRenderFns:[]}}});