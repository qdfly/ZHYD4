(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-952d2c2e"],{"03ae":function(t,e,a){},"08a6":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"managementPage"},[a("div",{staticClass:"managementMain"},[a("el-tabs",{staticStyle:{},attrs:{"tab-position":"left",type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"任务单列表",name:"task"}},["task"==t.activeName?a("Task"):t._e()],1),t._v(" "),a("el-tab-pane",{attrs:{label:"运维单位管理",name:"company"}},["company"==t.activeName?a("Company"):t._e()],1),t._v(" "),a("el-tab-pane",{attrs:{label:"运维人员管理",name:"staff"}},["staff"==t.activeName?a("Staff"):t._e()],1)],1)],1)])},l=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"taskPage"},[a("div",{staticClass:"taskMain"},[a("div",{staticClass:"_btnBox"},[a("div",{staticClass:"lf_btn"},[a("button",{class:t.alarmBtn?"":"on",on:{click:function(e){t.alarmBtn=0}}},[t._v("未完成")]),t._v(" "),a("button",{class:t.alarmBtn?"on":"",on:{click:function(e){t.alarmBtn=1}}},[t._v("已完成")])]),t._v(" "),a("div",{staticClass:"rg_btn"},[1===t.alarmBtn?a("button",{on:{click:t.okBtn}},[t._v("完成")]):t._e(),t._v(" "),a("button",[t._v("导出")]),t._v(" "),a("div",{staticClass:"input_box"},[a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),a("button",[t._v("查询")]),t._v(" "),a("button",[t._v("高级搜索")])])]),t._v(" "),a("div",{staticClass:"_tabBox",attrs:{id:"tableBox"}},[a("el-table",{ref:"singleTable",attrs:{data:t.data.row,fit:"","max-height":t.heights,"highlight-current-row":""},on:{"row-click":t.tableChange}},[a("el-table-column",{attrs:{align:"center",label:"工单号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.number))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"设备名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"所属区域"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.addrs))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"报警描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.describe))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"维修人"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.defender))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"修复耗时"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.time))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"工单状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.type))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClick(e.row)}}},[t._v("详情")]),t._v(" "),a("el-button",{staticStyle:{color:"#C94343"},attrs:{type:"text",size:"small"},on:{click:function(a){return t.deleteClick(e.row)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"table_page"},[a("el-pagination",{attrs:{"current-page":1,"page-sizes":[10,20,50,100],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)]),t._v(" "),a("el-dialog",{attrs:{title:"详情","before-close":t.handleClose,visible:t.centerDialogVisible,"close-on-click-modal":!1,width:"883px",modal:!0,"modal-append-to-body":!1,"destroy-on-close":!0,"append-to-body":!0},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[t.centerDialogVisible?a("Datail",{on:{getMessage:t.stateMess}}):t._e()],1),t._v(" "),a("el-dialog",{attrs:{title:"完成","before-close":t.okClose,visible:t.okDialogVisible,"close-on-click-modal":!1,width:"340px",modal:!0,"modal-append-to-body":!1,"destroy-on-close":!0,"append-to-body":!0},on:{"update:visible":function(e){t.okDialogVisible=e}}},[a("div",[t._v("//")])])],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detailPage"},[a("div",{staticClass:"datailMain"},[t._m(0),t._v(" "),a("div",{staticClass:"tit"},[t._v("\n      工单记录\n    ")]),t._v(" "),a("div",{staticClass:"tableBox"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"date",label:"时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"备注"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:t.style(e.row.address)},[t._v(t._s(e.row.address))])]}}])})],1)],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"datailLI"},[a("div",{staticClass:"item"},[a("div",{staticClass:"name"},[t._v("工单编号：")]),t._v(" "),a("div",{staticClass:"data"},[t._v("W08291350559795")])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"name"},[t._v("运维单位：")]),t._v(" "),a("div",{staticClass:"data"},[t._v("四方博瑞")])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"name"},[t._v("设备名称：")]),t._v(" "),a("div",{staticClass:"data"},[t._v("站点一号")])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"name"},[t._v("运维人员：")]),t._v(" "),a("div",{staticClass:"data"},[t._v("四方博瑞")])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"name"},[t._v("所属区域：")]),t._v(" "),a("div",{staticClass:"data"},[t._v("浙江省")])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"name"},[t._v("工单状态：")]),t._v(" "),a("div",{staticClass:"data blue"},[t._v("已完成")])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"name"},[t._v("报警描述：")]),t._v(" "),a("div",{staticClass:"data"},[t._v("天网箱设备离线")])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"name"},[t._v("修复耗时：")]),t._v(" "),a("div",{staticClass:"data"},[t._v("2小时")])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"name"},[t._v("故障时间：")]),t._v(" "),a("div",{staticClass:"data red"},[t._v("2019-08-28    13:56:10")])]),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"name"},[t._v("派单时间：")]),t._v(" "),a("div",{staticClass:"data"},[t._v("2019-08-28    13:56:10")])])])}],c={name:"Datail",data:function(){return{tableData:[{date:"2019-08-29 13:56:29",name:"-",address:"已派单"},{date:"2019-08-29 13:56:29",name:"-",address:"处理中"},{date:"2019-08-29 13:56:29",name:"-",address:"已完成"}]}},methods:{style:function(t){return"已派单"===t?"green":"处理中"===t?"red":"已完成"===t?"blue":void 0}}},u=c,d=(a("292d"),a("2877")),m=Object(d["a"])(u,o,r,!1,null,"ec6f4c58",null),v=m.exports,p={name:"Task",components:{Datail:v},data:function(){return{data:{row:[{id:1,number:12345,name:"站点一号",addrs:"杭州",describe:"设备离线",defender:"王小二",time:"8小时",type:"已完成"},{id:2,number:12345,name:"站点一号",addrs:"杭州",describe:"设备离线",defender:"王小二",time:"8小时",type:"已完成"},{id:3,number:12345,name:"站点一号",addrs:"杭州",describe:"设备离线",defender:"王小二",time:"8小时",type:"已完成"}],tatal:3},listLoading:!0,heights:parseInt(window.innerHeight-420),alarmBtn:0,input:"",currentRow:null,centerDialogVisible:!1,okDialogVisible:!1}},mounted:function(){var t=this;this.heights=window.document.getElementById("tableBox").clientHeight-151,window.onresize=function(){return function(){window.innerWidth>1500?t.heights=parseInt(window.innerHeight-420):t.heights=parseInt(window.innerHeight-640)}()}},methods:{fetchData:function(){},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t))},tableChange:function(t){t===this.currentRow?(this.$refs.singleTable.setCurrentRow(),this.currentRow=""):this.currentRow=t},handleClose:function(t){this.$confirm("确认关闭？").then((function(e){t()})).catch((function(t){}))},okClose:function(t){this.$confirm("确认关闭？").then((function(e){t()})).catch((function(t){}))},stateMess:function(t){console.log(t),this.centerDialogVisible=t},handleClick:function(t){event.stopPropagation(),this.centerDialogVisible=!0,console.log(t)},deleteClick:function(t){event.stopPropagation(),console.log(t)},okBtn:function(){this.okDialogVisible=!this.okDialogVisible}}},f=p,_=(a("c0d8"),Object(d["a"])(f,s,i,!1,null,"992e342c",null)),h=_.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"companyPage"},[a("div",{staticClass:"companyMain"},[a("div",{staticClass:"_btnBox"},[a("div",{staticClass:"rg_btn"},[a("button",{on:{click:t.add}},[t._v("新增")]),t._v(" "),a("div",{staticClass:"input_box"},[a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),a("button",[t._v("查询")]),t._v(" "),a("button",[t._v("高级搜索")])])]),t._v(" "),a("div",{staticClass:"_tabBox",attrs:{id:"tableBox"}},[a("el-table",{attrs:{data:t.data.row,fit:"","max-height":t.heights,"highlight-current-row":""},on:{"row-click":t.tableChange}},[a("el-table-column",{attrs:{align:"center",label:"单位名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.unitName))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"单位地址"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.unitAddress))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"负责人"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"邮箱"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.email))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"联系电话"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.phone))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.state))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClick(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{staticStyle:{color:"#C94343"},attrs:{type:"text",size:"small"},on:{click:function(a){return t.deleteClick(e.row)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"table_page"},[a("el-pagination",{attrs:{"current-page":1,"page-sizes":[10,20,50,100],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)]),t._v(" "),a("el-dialog",{attrs:{title:t.currentTit,"before-close":t.handleClose,visible:t.centerDialogVisible,"close-on-click-modal":!1,width:"800",modal:!0,"modal-append-to-body":!1,"destroy-on-close":!0,"append-to-body":!0},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[t.centerDialogVisible?a("CompanyDatail",{attrs:{pattern:t.pattern,datas:t.currentRow},on:{getMessage:t.stateMess,close:t.close}}):t._e()],1)],1)},g=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"formPage"},[a("div",{staticClass:"formMain"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,"label-width":"160px"}},[a("el-form-item",{attrs:{label:"单位名称："}},[a("el-col",{attrs:{span:9}},[a("el-form-item",{attrs:{prop:"date1"}},[a("el-input",{attrs:{placeholder:"请输入单位名称"},model:{value:t.ruleForm.unitName,callback:function(e){t.$set(t.ruleForm,"unitName",e)},expression:"ruleForm.unitName"}})],1)],1),t._v(" "),a("el-col",{staticClass:"line",attrs:{span:6}},[t._v("单位地址：")]),t._v(" "),a("el-col",{attrs:{span:9}},[a("el-form-item",{attrs:{prop:"date2"}},[a("el-input",{attrs:{placeholder:"请输入单位地址"},model:{value:t.ruleForm.unitAddress,callback:function(e){t.$set(t.ruleForm,"unitAddress",e)},expression:"ruleForm.unitAddress"}})],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"负责人："}},[a("el-col",{attrs:{span:9}},[a("el-form-item",{attrs:{prop:"date1"}},[a("el-input",{attrs:{placeholder:"请输入负责人"},model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1)],1),t._v(" "),a("el-col",{staticClass:"line",attrs:{span:6}},[t._v("邮箱地址：")]),t._v(" "),a("el-col",{attrs:{span:9}},[a("el-form-item",{attrs:{prop:"date2"}},[a("el-input",{attrs:{placeholder:"请输入邮箱地址"},model:{value:t.ruleForm.email,callback:function(e){t.$set(t.ruleForm,"email",e)},expression:"ruleForm.email"}})],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"联系电话："}},[a("el-col",{attrs:{span:9}},[a("el-form-item",{attrs:{prop:"date1"}},[a("el-input",{attrs:{placeholder:"请输入联系电话"},model:{value:t.ruleForm.phone,callback:function(e){t.$set(t.ruleForm,"phone",e)},expression:"ruleForm.phone"}})],1)],1),t._v(" "),a("el-col",{staticClass:"line",attrs:{span:6}},[t._v("状态：")]),t._v(" "),a("el-col",{attrs:{span:9}},[a("el-form-item",{attrs:{prop:"date2"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.ruleForm.state,callback:function(e){t.$set(t.ruleForm,"state",e)},expression:"ruleForm.state"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("确认")]),t._v(" "),a("el-button",{on:{click:t.close}},[t._v("取消")])],1)],1)],1)])},w=[],k=(a("7f7f"),{props:{datas:{type:Object,default:function(){return{unitName:"",unitAddress:"",name:"",email:"",phone:"",state:"正常"}}},pattern:{type:String,default:"add"}},data:function(){return{options:[{value:"正常",label:"正常"},{value:"异常",label:"异常"}],ruleForm:{unitName:this.datas.unitName,unitAddress:this.datas.unitAddress,name:this.datas.name,email:this.datas.email,phone:this.datas.phone,state:this.datas.state}}},methods:{onSubmit:function(){console.log("submit!")},close:function(){var t=this;this.$confirm("确认关闭？").then((function(e){t.$emit("close",!1)})).catch((function(t){}))}}}),y=k,x=(a("a254"),Object(d["a"])(y,C,w,!1,null,"0e303ef5",null)),S=x.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"formPage"},[a("div",{staticClass:"formMain"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,"label-width":"160px"}},[a("el-form-item",{attrs:{label:"人员名称："}},[a("el-col",{attrs:{span:9}},[a("el-form-item",{attrs:{prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入人员名称："},model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1)],1),t._v(" "),a("el-col",{staticClass:"line",attrs:{span:6}},[t._v("单位地址：")]),t._v(" "),a("el-col",{attrs:{span:9}},[a("el-form-item",{attrs:{prop:"unitAddress"}},[a("el-input",{attrs:{placeholder:"请输入单位地址"},model:{value:t.ruleForm.unitAddress,callback:function(e){t.$set(t.ruleForm,"unitAddress",e)},expression:"ruleForm.unitAddress"}})],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"邮箱地址："}},[a("el-col",{attrs:{span:9}},[a("el-form-item",{attrs:{prop:"email"}},[a("el-input",{attrs:{placeholder:"请输入邮箱地址"},model:{value:t.ruleForm.email,callback:function(e){t.$set(t.ruleForm,"email",e)},expression:"ruleForm.email"}})],1)],1),t._v(" "),a("el-col",{staticClass:"line",attrs:{span:6}},[t._v("联系电话：")]),t._v(" "),a("el-col",{attrs:{span:9}},[a("el-form-item",{attrs:{prop:"phone"}},[a("el-input",{attrs:{placeholder:"请输入联系电话"},model:{value:t.ruleForm.phone,callback:function(e){t.$set(t.ruleForm,"phone",e)},expression:"ruleForm.phone"}})],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"状态："}},[a("el-col",{attrs:{span:9}},[a("el-form-item",{attrs:{prop:"state"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.ruleForm.state,callback:function(e){t.$set(t.ruleForm,"state",e)},expression:"ruleForm.state"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1),t._v(" "),a("el-col",{staticClass:"line",attrs:{span:6}}),t._v(" "),a("el-col",{attrs:{span:9}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("确认")]),t._v(" "),a("el-button",{on:{click:t.close}},[t._v("取消")])],1)],1)],1)])},D=[],$={props:{datas:{type:Object,default:function(){return{unitName:"",unitAddress:"",name:"",email:"",phone:"",state:"正常"}}},pattern:{type:String,default:"add"}},data:function(){return{options:[{value:"正常",label:"正常"},{value:"异常",label:"异常"}],ruleForm:{unitName:this.datas.unitName,unitAddress:this.datas.unitAddress,name:this.datas.name,email:this.datas.email,phone:this.datas.phone,state:this.datas.state}}},methods:{onSubmit:function(){console.log("submit!")},close:function(){var t=this;this.$confirm("确认关闭？").then((function(e){t.$emit("close",!1)})).catch((function(t){}))}}},z=$,V=(a("1cd8"),Object(d["a"])(z,F,D,!1,null,"6a675660",null)),B=V.exports,N={name:"Company",components:{CompanyDatail:S},data:function(){return{data:{row:[{unitName:"123456",unitAddress:"站点一号",name:"王小二",email:"1605366460@qq.com",phone:"18154382801",state:"正常"},{unitName:"1234567",unitAddress:"站点二号",name:"王小二",email:"1605366460@qq.com",phone:"18154382801",state:"正常"}],tatal:1},listLoading:!0,pattern:"",heights:parseInt(window.innerHeight-420),alarmBtn:0,input:"",currentRow:null,currentTit:"",centerDialogVisible:!1}},mounted:function(){var t=this;this.heights=window.document.getElementById("tableBox").clientHeight-151,window.onresize=function(){return function(){window.innerWidth>1500?t.heights=parseInt(window.innerHeight-420):t.heights=parseInt(window.innerHeight-640)}()}},methods:{fetchData:function(){},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t))},tableChange:function(t){this.currentRow=t},handleClose:function(t){this.$confirm("确认关闭？").then((function(e){t()})).catch((function(t){}))},stateMess:function(t){console.log(t),this.centerDialogVisible=t},close:function(t){this.centerDialogVisible=t},handleClick:function(t){event.stopPropagation(),this.currentTit="编辑运维管理",this.pattern="modify",this.currentRow=t,this.centerDialogVisible=!0,console.log(t)},deleteClick:function(t){event.stopPropagation(),console.log(t)},add:function(){this.currentRow={},this.currentTit="新增运维管理",this.pattern="add",this.centerDialogVisible=!0}}},A=N,M=(a("ab55"),Object(d["a"])(A,b,g,!1,null,"5ca0f3bb",null)),R=M.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"staffPage"},[a("div",{staticClass:"staffMain"},[a("div",{staticClass:"_btnBox"},[a("div",{staticClass:"rg_btn"},[a("button",{on:{click:t.add}},[t._v("新增")]),t._v(" "),a("div",{staticClass:"input_box"},[a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),a("button",[t._v("查询")]),t._v(" "),a("button",[t._v("高级搜索")])])]),t._v(" "),a("div",{staticClass:"_tabBox",attrs:{id:"tableBox"}},[a("el-table",{attrs:{data:t.data.row,fit:"","max-height":t.heights,"highlight-current-row":""},on:{"row-click":t.tableChange}},[a("el-table-column",{attrs:{align:"center",label:"人员名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"人员单位"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.unitAddress))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"邮箱"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.email))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"联系电话"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.phone))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.state))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClick(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{staticStyle:{color:"#C94343"},attrs:{type:"text",size:"small"},on:{click:function(a){return t.deleteClick(e.row)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"table_page"},[a("el-pagination",{attrs:{"current-page":1,"page-sizes":[10,20,50,100],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)]),t._v(" "),a("el-dialog",{attrs:{title:t.currentTit,"before-close":t.handleClose,visible:t.centerDialogVisible,"close-on-click-modal":!1,width:"800",modal:!0,"modal-append-to-body":!1,"destroy-on-close":!0,"append-to-body":!0},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[t.centerDialogVisible?a("StaffDatail",{attrs:{pattern:t.pattern,datas:t.currentRow},on:{getMessage:t.stateMess,close:t.close}}):t._e()],1)],1)},P=[],T={name:"Staff",components:{StaffDatail:B},data:function(){return{data:{row:[{unitName:"123456",unitAddress:"站点一号",name:"王小二",email:"1605366460@qq.com",phone:"18154382801",state:"正常"},{unitName:"1234567",unitAddress:"站点二号",name:"王小二",email:"1605366460@qq.com",phone:"18154382801",state:"正常"}],tatal:1},listLoading:!0,pattern:"",heights:parseInt(window.innerHeight-420),alarmBtn:0,input:"",currentRow:null,currentTit:"",centerDialogVisible:!1}},mounted:function(){var t=this;this.heights=window.document.getElementById("tableBox").clientHeight-151,window.onresize=function(){return function(){window.innerWidth>1500?t.heights=parseInt(window.innerHeight-420):t.heights=parseInt(window.innerHeight-640)}()}},methods:{fetchData:function(){},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t))},tableChange:function(t){this.currentRow=t},handleClose:function(t){this.$confirm("确认关闭？").then((function(e){t()})).catch((function(t){}))},stateMess:function(t){console.log(t),this.centerDialogVisible=t},close:function(t){this.centerDialogVisible=t},handleClick:function(t){event.stopPropagation(),this.currentTit="编辑运维人员",this.pattern="modify",this.currentRow=t,this.centerDialogVisible=!0,console.log(t)},deleteClick:function(t){event.stopPropagation(),console.log(t)},add:function(){this.currentRow={},this.currentTit="新增运维人员",this.pattern="add",this.centerDialogVisible=!0}}},j=T,H=(a("0dca"),Object(d["a"])(j,I,P,!1,null,"f1e6f00c",null)),E=H.exports,O={namee:"management",components:{Task:h,Company:R,Staff:E},data:function(){return{activeName:"task"}}},q=O,L=(a("8b3e"),Object(d["a"])(q,n,l,!1,null,"3a16b86c",null));e["default"]=L.exports},"0dca":function(t,e,a){"use strict";var n=a("1f80"),l=a.n(n);l.a},"1cd8":function(t,e,a){"use strict";var n=a("f927"),l=a.n(n);l.a},"1f80":function(t,e,a){},2630:function(t,e,a){},"292d":function(t,e,a){"use strict";var n=a("03ae"),l=a.n(n);l.a},3008:function(t,e,a){},3343:function(t,e,a){},8870:function(t,e,a){},"8b3e":function(t,e,a){"use strict";var n=a("3008"),l=a.n(n);l.a},a254:function(t,e,a){"use strict";var n=a("8870"),l=a.n(n);l.a},ab55:function(t,e,a){"use strict";var n=a("2630"),l=a.n(n);l.a},c0d8:function(t,e,a){"use strict";var n=a("3343"),l=a.n(n);l.a},f927:function(t,e,a){}}]);