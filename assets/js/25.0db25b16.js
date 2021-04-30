(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{508:function(e,t,o){},542:function(e,t,o){"use strict";o(508)},587:function(e,t,o){"use strict";o.r(t);var l={data:function(){return{dialogVisible:!1,gridData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}],dialogTableVisible:!1,dialogFormVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"120px"}},methods:{handleClose:function(e){this.$confirm("确认关闭？").then((function(t){e()})).catch((function(e){}))}}},a=(o(542),o(2)),i=Object(a.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"dialog-对话框"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dialog-对话框"}},[e._v("#")]),e._v(" Dialog 对话框")]),e._v(" "),o("p",[e._v("在保留当前页面状态的情况下，告知用户并承载相关操作。")]),e._v(" "),o("p",[o("a",{attrs:{href:"http://element.eleme.io/#/zh-CN/component/dialog",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dialog"),o("OutboundLink")],1)]),e._v(" "),o("h3",{attrs:{id:"基本用法"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[e._v("#")]),e._v(" 基本用法")]),e._v(" "),o("p",[e._v("Dialog 弹出一个对话框，适合需要定制性更大的场景。")]),e._v(" "),o("p",[e._v(":::demo 需要设置"),o("code",[e._v("visible")]),e._v("属性，它接收"),o("code",[e._v("Boolean")]),e._v("，当为"),o("code",[e._v("true")]),e._v("时显示 Dialog。Dialog 分为两个部分："),o("code",[e._v("body")]),e._v("和"),o("code",[e._v("footer")]),e._v("，"),o("code",[e._v("footer")]),e._v("需要具名为"),o("code",[e._v("footer")]),e._v("的"),o("code",[e._v("slot")]),e._v("。"),o("code",[e._v("title")]),e._v("属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了"),o("code",[e._v("before-close")]),e._v("的用法。")]),e._v(" "),[o("el-card",{attrs:{shadow:"hover"}},[o("el-button",{on:{click:function(t){e.dialogVisible=!0}}},[e._v("点击打开 Dialog")]),e._v(" "),o("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("span",[e._v("这是一段信息")]),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1)],e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[o("code",[e._v("before-close")]),e._v(" 仅当用户通过点击关闭图标或遮罩关闭 Dialog 时起效。如果你在 "),o("code",[e._v("footer")]),e._v(" 具名 slot 里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 "),o("code",[e._v("before-close")]),e._v(" 的相关逻辑。")])]),e._v(" "),o("h3",{attrs:{id:"自定义内容"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#自定义内容"}},[e._v("#")]),e._v(" 自定义内容")]),e._v(" "),o("p",[e._v("Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 Element Table 和 Form 组件的两个样例。")]),e._v(" "),[o("el-card",[o("el-button",{attrs:{type:"text"},on:{click:function(t){e.dialogTableVisible=!0}}},[e._v("打开嵌套表格的 Dialog")]),e._v(" "),o("el-dialog",{attrs:{title:"收货地址",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[o("el-table",{attrs:{data:e.gridData}},[o("el-table-column",{attrs:{property:"date",label:"日期",width:"150"}}),e._v(" "),o("el-table-column",{attrs:{property:"name",label:"姓名",width:"200"}}),e._v(" "),o("el-table-column",{attrs:{property:"address",label:"地址"}})],1)],1),e._v(" "),o("el-button",{attrs:{type:"text"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("打开嵌套表单的 Dialog")]),e._v(" "),o("el-dialog",{attrs:{title:"收货地址",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[o("el-form",{attrs:{model:e.form}},[o("el-form-item",{attrs:{label:"活动名称","label-width":e.formLabelWidth}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"活动区域","label-width":e.formLabelWidth}},[o("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[o("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),o("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("确 定")])],1)],1)],1)],e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[o("code",[e._v("center")]),e._v(" 仅影响标题和底部区域。Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。如果需要内容也水平居中，请自行为其添加 CSS。")])])],2)}),[],!1,null,"51fb1420",null);t.default=i.exports}}]);