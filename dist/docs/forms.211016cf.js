webpackJsonp([14],{407:function(e,t,a){var l=a(0)(a(432),a(455),null,null,null);e.exports=l.exports},416:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:String,default:null}},e.exports=t.default},417:function(e,t,a){t=e.exports=a(393)(),t.push([e.i,".exampleContainer[data-v-00862b54]{margin:5px;padding:25px;border:2px solid #eee}",""])},418:function(e,t,a){var l=a(417);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a(394)("75dcd322",l,!0)},419:function(e,t,a){function l(e){a(418)}var o=a(0)(a(416),a(420),l,"data-v-00862b54",null);e.exports=o.exports},420:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.title?a("h2",[e._v(e._s(e.title))]):e._e(),e._v(" "),a("div",{staticClass:"exampleContainer"},[e._t("default")],2)])},staticRenderFns:[]}},432:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(419),o=(function(e){return e&&e.__esModule?e:{default:e}})(l);t.default={components:{"example-container":o.default},data:function(){return{form1:{email:null},radioOptions:[{id:"roption1",value:"option1",label:"Option one is this and that&mdash;be sure to include why it's great"},{id:"roption2",value:"option2",label:"Option two is this and that&mdash;be sure to include why it's great",checked:!0},{id:"roption2",value:"option2",label:"Option two is this and that&mdash;be sure to include why it's great",disabled:!0}],success:{status:"success",message:"Success! You've done it."},warning:{status:"warning",message:"Shucks, check the formatting of that and try again."},danger:{status:"danger",message:"Sorry, that username's taken. Try another?"}}},methods:{onSubmit:function(){console.log("form 1",this.form1)}}},e.exports=t.default},455:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Form controls")]),e._v(" "),a("example-container",[a("v-form-input",{attrs:{id:"exampleInputEmail1",label:"Email address",type:"email",placeholder:"Enter email",description:"We'll never share your email with anyone else."},model:{value:e.form1.email,callback:function(t){e.form1.email=t},expression:"form1.email"}}),e._v(" "),a("v-form-input",{attrs:{id:"exampleInputPassword1",label:"Password",type:"password",placeholder:"Password",description:"Enter password"}}),e._v(" "),a("v-form-select",{attrs:{id:"exampleSelect1",label:"Example select"}},[a("option",[e._v("1")]),e._v(" "),a("option",[e._v("2")]),e._v(" "),a("option",[e._v("3")]),e._v(" "),a("option",[e._v("4")]),e._v(" "),a("option",[e._v("5")])]),e._v(" "),a("v-form-select",{attrs:{id:"exampleSelect2",label:"Example multiple select",multiple:""}},[a("option",[e._v("1")]),e._v(" "),a("option",[e._v("2")]),e._v(" "),a("option",[e._v("3")]),e._v(" "),a("option",[e._v("4")]),e._v(" "),a("option",[e._v("5")])]),e._v(" "),a("v-form-input",{attrs:{id:"exampleTextarea",label:"Example textarea",description:"Enter textarea",textarea:""}}),e._v(" "),a("v-form-input",{attrs:{id:"exampleInputEmail1",label:"File input",type:"file",description:"This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line."}}),e._v(" "),a("v-form-radio",{attrs:{label:"Radio buttons",items:e.radioOptions}}),e._v(" "),a("v-form-check",{attrs:{label:"Check me out"}}),e._v(" "),a("v-button",{attrs:{type:"submit",btnStyle:"primary"},on:{click:e.onSubmit}},[e._v("Submit")])],1),e._v(" "),a("h2",[e._v("Textual inputs")]),e._v(" "),a("example-container",[a("v-form-input",{attrs:{label:"Text",type:"text",row:"",colsize:2,value:"Artisanal kale"}}),e._v(" "),a("v-form-input",{attrs:{label:"Search",type:"search",row:"",colsize:2,value:"How do I shoot web"}}),e._v(" "),a("v-form-input",{attrs:{label:"Email",type:"email",row:"",colsize:2,value:"bootstrap@example.com"}}),e._v(" "),a("v-form-input",{attrs:{label:"URL",type:"email",row:"",colsize:2,value:"https://getbootstrap.com"}}),e._v(" "),a("v-form-input",{attrs:{label:"Telephone",type:"tel",row:"",colsize:2,value:"1-(555)-555-5555"}}),e._v(" "),a("v-form-input",{attrs:{label:"Password",type:"password",row:"",colsize:2,value:"123456"}}),e._v(" "),a("v-form-input",{attrs:{label:"Number",type:"number",row:"",colsize:2,value:"42"}}),e._v(" "),a("v-form-input",{attrs:{label:"Date and time",type:"datetime-local",row:"",colsize:2,value:"2011-08-19T13:45:00"}}),e._v(" "),a("v-form-input",{attrs:{label:"Date",type:"date",row:"",colsize:2,value:"2011-08-19"}}),e._v(" "),a("v-form-input",{attrs:{label:"Month",type:"month",row:"",colsize:2,value:"2011-08"}}),e._v(" "),a("v-form-input",{attrs:{label:"Week",type:"week",row:"",colsize:2,value:"2011-W33"}}),e._v(" "),a("v-form-input",{attrs:{label:"Time",type:"time",row:"",colsize:2,value:"13:45:00"}}),e._v(" "),a("v-form-input",{attrs:{label:"Color",type:"color",row:"",colsize:2,value:"#502382"}})],1),e._v(" "),a("h2",[e._v("Inline forms")]),e._v(" "),a("example-container",[a("v-form",{attrs:{inline:""}},[a("v-form-input",{attrs:{label:"Name",type:"text",placeholder:"Jane Doe",srOnly:""}}),e._v(" "),a("label",{staticClass:"sr-only",attrs:{for:"inlineFormInput"}},[e._v("Name")]),e._v(" "),a("input",{staticClass:"form-control mb-2 mr-sm-2 mb-sm-0",attrs:{type:"text",id:"inlineFormInput",placeholder:"Jane Doe"}}),e._v(" "),a("label",{staticClass:"sr-only",attrs:{for:"inlineFormInputGroup"}},[e._v("Username")]),e._v(" "),a("div",{staticClass:"input-group mb-2 mr-sm-2 mb-sm-0"},[a("div",{staticClass:"input-group-addon"},[e._v("@")]),e._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",id:"inlineFormInputGroup",placeholder:"Username"}})]),e._v(" "),a("div",{staticClass:"form-check mb-2 mr-sm-2 mb-sm-0"},[a("label",{staticClass:"form-check-label"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox"}}),e._v(" Remember me\n        ")])]),e._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit")])],1)],1),e._v(" "),a("h2",[e._v("Using the Grid")]),e._v(" "),a("example-container",[a("div",{staticClass:"container"},[a("v-form")],1)]),e._v(" "),a("h2",[e._v("Readonly")]),e._v(" "),a("v-form-input",{attrs:{type:"text",placeholder:"Readonly input here…",readonly:""}}),e._v(" "),a("br"),e._v(" "),a("v-form-input",{attrs:{type:"text",placeholder:".form-control-lg",size:"large"}}),e._v(" "),a("v-form-input",{attrs:{type:"text",placeholder:".form-control-lg"}}),e._v(" "),a("v-form-input",{attrs:{type:"text",placeholder:".form-control-sm",size:"small"}}),e._v(" "),a("br"),e._v(" "),a("v-form-select",{attrs:{size:"large"}},[a("option",[e._v("Large select")])]),e._v(" "),a("v-form-select",[a("option",[e._v("Default select")])]),e._v(" "),a("v-form-select",{attrs:{size:"small"}},[a("option",[e._v("Small select")])]),e._v(" "),a("br"),e._v(" "),a("v-form-input",{attrs:{id:"exampleInputEmail1",label:"Email address",type:"email",placeholder:"Enter email",description:"We'll never share your email with anyone else.",feedback:e.success}}),e._v(" "),a("v-form-input",{attrs:{id:"exampleInputEmail1",label:"Email address",type:"email",placeholder:"Enter email",description:"We'll never share your email with anyone else.",feedback:e.warning}}),e._v(" "),a("v-form-input",{attrs:{id:"exampleInputEmail1",label:"Email address",type:"email",placeholder:"Enter email",description:"We'll never share your email with anyone else.",feedback:e.danger}})],1)},staticRenderFns:[]}}});