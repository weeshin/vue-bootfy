webpackJsonp([2],{409:function(n,e,t){var a=t(0)(t(435),t(468),null,null,null);n.exports=a.exports},421:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:String,default:null}},n.exports=e.default},422:function(n,e,t){e=n.exports=t(397)(),e.push([n.i,".exampleContainer[data-v-00862b54]{margin:5px;padding:25px;border:2px solid #eee}",""])},423:function(n,e,t){var a=t(422);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t(398)("75dcd322",a,!0)},424:function(n,e,t){function a(n){t(423)}var r=t(0)(t(421),t(425),a,"data-v-00862b54",null);n.exports=r.exports},425:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n.title?t("h2",[n._v(n._s(n.title))]):n._e(),n._v(" "),t("div",{staticClass:"exampleContainer"},[n._t("default")],2)])},staticRenderFns:[]}},435:function(n,e,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var r=t(454),o=a(r),i=t(424),l=a(i);e.default={components:{"example-container":l.default},data:function(){return{data:o.default}}},n.exports=e.default},454:function(n,e){n.exports="# Dillinger\n\n[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)\n\nDillinger is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.\n\n  - Type some Markdown on the left\n  - See HTML in the right\n  - Magic\n\n# New Features!\n\n  - Import a HTML file and watch it magically convert to Markdown\n  - Drag and drop images (requires your Dropbox account be linked)\n\n\nYou can also:\n  - Import and save files from GitHub, Dropbox, Google Drive and One Drive\n  - Drag and drop markdown and HTML files into Dillinger\n  - Export documents as Markdown, HTML and PDF\n\nMarkdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site][df1]\n\n> The overriding design goal for Markdown's\n> formatting syntax is to make it as readable\n> as possible. The idea is that a\n> Markdown-formatted document should be\n> publishable as-is, as plain text, without\n> looking like it's been marked up with tags\n> or formatting instructions.\n"},468:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("example-container",[t("v-code",{attrs:{lang:"language-js"}},[n._v("export default {\n    name: 'app',\n    data () {\n        return {\n             msg: 'Welcome to Your Vue.js App'\n        }\n    }\n}\n      ")])],1),n._v(" "),t("example-container",[t("v-code",{attrs:{lang:"language-css"}},[n._v("body                            { background:#F2F2F2; }\nh1, h2, h3, h4, h5, h6          { font-family:'Raleway'; }\n.container                      { width:90%; }\n      ")])],1),n._v(" "),t("example-container",[t("v-code",{attrs:{lang:"language-markup",lineNumbers:""}},[t("script",{attrs:{type:"text/plain"}},[n._v('<html>\n    <img src="example.png">\n    <h3>h3 heading1</h3>\n  </html>\n        ')])])],1),n._v(" "),t("example-container",[t("pre",[t("code",{staticClass:"language-css line-numbers"},[n._v("\n      @media "),t("mark",[n._v("screen")]),n._v(" {\n      \tdiv {\n      \t\t"),t("mark",[n._v("text")]),n._v("-decoration: "),t("mark",[t("mark",[n._v("under")]),n._v("line")]),n._v(";\n      \t\tback"),t("mark",[n._v("ground: url")]),n._v("('foo.png');\n      \t}\n      }")])])]),n._v(" "),t("example-container",{attrs:{title:"Markdown"}},[t("div",{directives:[{name:"markdown",rawName:"v-markdown",value:{content:n.data},expression:"{ content: data }"}]})])],1)},staticRenderFns:[]}}});