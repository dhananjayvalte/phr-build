(this["webpackJsonpsatvix-phr"]=this["webpackJsonpsatvix-phr"]||[]).push([[0],{101:function(e,t,a){e.exports=a(184)},106:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),c=a.n(r),i=(a(106),a(23)),o=a(24),s=a(29),m=a(27),u=function(e){return e.children},A=a(87),d=a.n(A),p=function(e){return l.a.createElement(u,null,l.a.createElement("main",{className:d.a.Content},e.children))},h=a(88),b=a.n(h),E=a(94),g=a(95),_=a(32),f=a.n(_),D=a(210),y=a(216),T=a(213),v=a(211),x=a(209),M=a(212),S=a(9),w=a.n(S),N=a(89),C=a.n(N),k=a(90),O=a.n(k),j=a(91),B=a.n(j),R=(a(70),a(107),a(42)),I=a(41),U=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={selectedDate:null,cur_MinTime_hr:9,cur_MaxTime_hr:18,cur_MinTime_min:0,cur_MaxTime_min:0,checkCurDate:!0,styleStatus:!0,excludeTimesMin:1},n}return Object(o.a)(a,[{key:"componentWillReceiveProps",value:function(){this.setState({selectedDate:null,cur_MinTime_hr:9,cur_MaxTime_hr:18,cur_MinTime_min:0,cur_MaxTime_min:0,styleStatus:!0})}},{key:"render",value:function(){var e=this,t=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"],a=new Date,n=!0;return l.a.createElement("div",null,this.state.styleStatus?l.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n            .react-datepicker__time-list-item--disabled{\n              display: none;\n            }\n            .react-datepicker__time-list-item{\n              color:#ccc;\n            }    \n            react-datepicker__time-list-item--selected{\n              color:#ccc;\n            }"}}):l.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n            .react-datepicker__time-list-item--disabled{\n              display: none;\n            }\n        "}}),l.a.createElement(B.a,{selected:this.state.selectedDate,onChange:function(l){return function(l){Object.keys(e.props.departmentData).length>0&&(e.setState({styleStatus:!1}),l.getDate()===a.getDate()&&l.getFullYear()===a.getFullYear()&&l.getMonth()===a.getMonth()?(e.setState({checkCurDate:!0},(function(){return n=!0})),n=!0):(e.setState({checkCurDate:!1},(function(){return n=!1})),n=!1),e.setState({selectedDate:l,cur_MinTime_hr:n?a.getHours()>=18?18:a.getHours():9,cur_MaxTime_hr:18,cur_MinTime_min:n?a.getHours()>=18?0:a.getMinutes():0,cur_MaxTime_min:0,excludeTimesMin:n&&a.getHours()>=18?0:1}),e.props.departmentData.weeklyAvailability&&e.props.departmentData.weeklyAvailability.length>0&&e.props.departmentData.weeklyAvailability.forEach((function(r){r.dayOfWeek===t[l.getDay()]&&(n?e.setState({cur_MinTime_hr:a.getHours()>=(r.startTime+"").slice(0,2)&&a.getHours()<=(r.endTime+"").slice(0,2)?a.getHours():(r.endTime+"").slice(0,2),cur_MinTime_min:a.getHours()>=(r.startTime+"").slice(0,2)&&a.getHours()<=(r.endTime+"").slice(0,2)?a.getMinutes():0,cur_MaxTime_hr:(r.endTime+"").slice(0,2),cur_MaxTime_min:(r.endTime+"").slice(3,5),excludeTimesMin:0}):e.setState({cur_MinTime_hr:(r.startTime+"").slice(0,2),cur_MinTime_min:(r.startTime+"").slice(3,5),cur_MaxTime_hr:(r.endTime+"").slice(0,2),cur_MaxTime_min:(r.endTime+"").slice(3,5)}))})))}(l)},minDate:new Date,showTimeSelect:!0,timeIntervals:this.props.departmentData.durationMins?this.props.departmentData.durationMins:15,useWeekdaysShort:!0,timeCaption:"",dateFormat:"MMMM d, yyyy h:mm aa",minTime:Object(R.default)(Object(I.default)(new Date,parseInt(this.state.cur_MinTime_min)),parseInt(this.state.cur_MinTime_hr)),maxTime:Object(R.default)(Object(I.default)(new Date,parseInt(this.state.cur_MaxTime_min)),parseInt(this.state.cur_MaxTime_hr)),inline:!0,excludeTimes:[Object(R.default)(Object(I.default)(new Date,this.state.excludeTimesMin),parseInt(this.state.cur_MaxTime_hr))]}))}}]),a}(l.a.Component),H=a(57),F=a.n(H),Q="https://13.126.218.242/openmrs/ws/rest/v1",V=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).auth={username:"superman",password:"Admin123"},n.state={selectedDoctor:"0",selectedDepartment:"0",departmentData:[],doctorData:[],selectedDepartmentUUID:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;F.a.get("".concat(Q,"/appointmentService/all/full"),{auth:this.auth}).then((function(t){e.setState({departmentData:t.data})})).catch((function(e){console.log("Error",e)})),F.a.get("".concat(Q,"/provider"),{auth:this.auth,params:{v:"custom:(display,person,uuid,retired,attributes:(attributeType:(display),value,voided))"}}).then((function(t){e.setState({doctorData:t.data.results})})).catch((function(e){console.log("Error",e)}))}},{key:"render",value:function(){var e=this,t=function(t){return e.state.departmentData.filter((function(e){return e.name===t}))[0].uuid},a=this.state.departmentData.length>0&&this.state.departmentData.map((function(e,t){return l.a.createElement("option",{key:t,value:e.name},e.name)}),this),n=this.state.doctorData.length>0&&this.state.doctorData.map((function(e,t){if(e.attributes.length>0)return l.a.createElement("option",{key:t,value:e.person.display},e.person.display)}),this);return l.a.createElement("div",null,l.a.createElement("div",{id:"form"},l.a.createElement("form",{className:w.a.form},l.a.createElement("div",{className:w.a.container1},l.a.createElement("div",null,l.a.createElement("img",{src:C.a,className:w.a.iconDetails})),l.a.createElement("div",{className:w.a.headerStyleAppointment},l.a.createElement("label",null,"Book an Appointment"))),l.a.createElement("fieldset",{style:{border:0}},l.a.createElement("div",{style:{borderRight:"2px solid #d9d9d9",marginRight:"130px"}},l.a.createElement("table",{style:{textAlign:"right"}},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",{style:{marginTop:"-10%"},className:w.a.label},"Patient Name ",l.a.createElement("span",{style:{color:"red",fontSize:"18px"}},"*"))),l.a.createElement("td",null,l.a.createElement("input",{className:w.a.input,placeholder:"Enter Full Name of Patient"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",{style:{marginTop:"-10%"},className:w.a.label},"Department ",l.a.createElement("span",{style:{color:"red",fontSize:"18px"}},"*"))),l.a.createElement("td",null,l.a.createElement("select",{value:this.state.selectedDepartment,onChange:function(a){e.setState({selectedDepartment:a.target.value}),function(a){if(""!=a){var n=t(a);F.a.get("".concat(Q,"/appointmentService"),{auth:e.auth,params:{uuid:n}}).then((function(t){e.setState({selectedDepartmentUUID:t.data})})).catch((function(e){console.log("Error",e)}))}else e.setState({selectedDepartmentUUID:{}})}(a.target.value)},style:"0"===this.state.selectedDepartment?{color:"gray",fontSize:"14px"}:{color:"Black"},className:w.a.dropDown},l.a.createElement("option",{value:"Select Department",selected:!0,hidden:!0,defaultValue:!0},"Select Department"),l.a.createElement("option",{value:""}),a))),l.a.createElement("tr",null,l.a.createElement("td",{className:w.a.tbltd},l.a.createElement("label",{style:{fontSize:"14px",marginRight:"10px",marginTop:"-1%"},className:w.a.label},"Doctor")),l.a.createElement("td",null,l.a.createElement("select",{value:this.state.selectedDoctor,onChange:function(t){e.setState({selectedDoctor:t.target.value})},style:"0"===this.state.selectedDoctor?{color:"gray",fontSize:"14px"}:{color:"Black"},className:w.a.dropDown},l.a.createElement("option",{value:"Select Doctor",selected:!0,hidden:!0,defaultValue:!0},"Select Doctor"),l.a.createElement("option",{value:""}),n))),l.a.createElement("tr",null,l.a.createElement("td",{className:w.a.tbltd},l.a.createElement("div",{style:{marginTop:"-120%"}},l.a.createElement("label",{className:w.a.label},"Date and Time ",l.a.createElement("span",{style:{color:"red",fontSize:"18px"}},"*")))),l.a.createElement("td",null,l.a.createElement("div",{style:{borderRadius:"0px",marginLeft:"10px",marginTop:"10px",fontFamily:"OpenSans"}},l.a.createElement(U,{departmentData:this.state.selectedDepartmentUUID})))),l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement("div",{className:w.a.button},l.a.createElement("button",{className:w.a.buttonClear,onClick:function(){e.props.writeText(e.state.text),e.setState({text:""})}},"Clear"),l.a.createElement("button",{className:w.a.buttonConfirm},"Confirm")))))))))),l.a.createElement("div",{id:"form"},l.a.createElement("form",{className:w.a.formNew},l.a.createElement("div",{className:w.a.container2},l.a.createElement("div",null,l.a.createElement("img",{src:O.a,className:w.a.iconDetails})),l.a.createElement("div",{className:w.a.headerStyleScheduled},l.a.createElement("label",null,"Scheduled Appointments"))),l.a.createElement("div",{className:w.a.bigblue},l.a.createElement("label",null,"No Scheduled Appointments")))))}}]),a}(l.a.Component);function G(e){var t=e.children,a=e.value,n=e.index,r=Object(g.a)(e,["children","value","index"]);return l.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},r),a===n&&l.a.createElement(M.a,{p:3},l.a.createElement(x.a,null,t)))}function J(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var L=Object(D.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function Y(){var e=L(),t=l.a.useState(0),a=Object(E.a)(t,2),n=a[0],r=a[1];return l.a.createElement("div",{className:e.root},l.a.createElement(y.a,{position:"static",style:{boxShadow:"1px 1px #c9c9c9"}},l.a.createElement(T.a,{value:n,onChange:function(e,t){r(t)},TabIndicatorProps:{style:{background:"#ffffff00"}},style:{backgroundColor:"white",color:"black",paddingTop:"15px",paddingLeft:"20px"}},l.a.createElement(v.a,Object.assign({label:"Appointments"},J(0),{className:(f.a.tab,0===n?f.a.active:null),style:{color:"black",textTransform:"capitalize",fontWeight:"bolder"}})),l.a.createElement(v.a,Object.assign({label:"Lab Reports"},J(1),{className:(f.a.tab,1===n?f.a.active:null),style:{color:"black",textTransform:"capitalize",fontWeight:"bolder"}})),l.a.createElement(v.a,Object.assign({label:"Prescriptions"},J(2),{className:(f.a.tab,2===n?f.a.active:null),style:{color:"black",textTransform:"capitalize",fontWeight:"bolder"}})))),l.a.createElement(G,{value:n,index:0},l.a.createElement(V,null)),l.a.createElement(G,{value:n,index:1}),l.a.createElement(G,{value:n,index:2}))}var z=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:b.a.mystyle},"Bahmni Hospital"),l.a.createElement(Y,null))}}]),a}(n.Component),W=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p,null,l.a.createElement(z,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,a){e.exports={tab:"Tab_tab__1DxKn",active:"Tab_active__1oGi6",tabDisabled:"Tab_tabDisabled__dXDrC"}},70:function(e,t,a){},87:function(e,t,a){e.exports={Content:"Layout_Content__2WLOk"}},88:function(e,t,a){e.exports={mystyle:"PhrBuilder_mystyle__3m_ZZ"}},89:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABS0lEQVRIx8WUPU7DQBCFP1Ak5wBJDoD4aahAgjNEUKGkp+OnoKMPKBcIJS0FPx3XAKUloQgFoaMJUKWJKTxEq/WuPRsHeNJopNHbec8zu4Z/RCxRiLf42y5tgR3gzXIU54TJGwL1LMGhomFevJoNFxzznAemff98B3NHKe8TA5EacWmGJjXghOTGrQATYADcax1kLboJfKK/ukECTXEbA0/AAbAhcQj0jPONUIGa4fwaiBycCLgRzgdQDRFoG84ji9+yRPpSPwf9Nd2V3AHGGbyxcKZntAJLkh89ozHxIHk5RMC3+HfgFLgk2VPqjFbgRfKWVV8FLoB94Epq25IHPqcuty2p93DfoDVgHSgDz8I9cwlofte3HpEycCecEVBxCdSVIn3gCNiUODacT4A95ehTaJA8Ip/wqEjzH1RJHlEX+JLoyswrBfrOhm80tIhXzMzGCQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNi0wNVQwNjo1NjowMiswMDowMKAqogYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDYtMDVUMDY6NTY6MDIrMDA6MDDRdxq6AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},9:function(e,t,a){e.exports={form:"Appointment_form__3lSjO",formNew:"Appointment_formNew__1e5Cw",headerStyleAppointment:"Appointment_headerStyleAppointment__1RjnL",headerStyleScheduled:"Appointment_headerStyleScheduled__h4BaR",label:"Appointment_label__2U5U6",input:"Appointment_input__azdLC",dropDown:"Appointment_dropDown__kvgwL",buttonConfirm:"Appointment_buttonConfirm__1BHSk",buttonClear:"Appointment_buttonClear__ESjcm",button:"Appointment_button__33LtT",tbltd:"Appointment_tbltd__3kvIF",bigblue:"Appointment_bigblue__2K121",iconDetails:"Appointment_iconDetails__iW-JN",container1:"Appointment_container1__3YMQo",containe2:"Appointment_containe2__3tE16"}},90:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA0klEQVRIx82UvQ6CMBSFP4iJg4mbu4OT0XcwcZH40PoM+gYUFwcH4w6DhWBD/6t4khsIuT3n8lEKf6BaVlBf/u3pdAFHoFImqi3V7xNAYQoWDoa2KgEyA88Uykb7Bsk0sb1ioG+HOO89SMX9Q7GIlsBZXgdlQ6RqDjzl/Qo4AVNgZls49LOoyPbAA9hJcwHcgY2Dn1PAArgCL+BmMA8OaEMu0nzrQcQ5oA1ZeyL3CnBRt163TSul0bfgvQm0ExfEnaglcDAyS6WfnaYpmBsVy3w8NVJEkoYBlR2EAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA2LTA1VDA2OjUxOjMzKzAwOjAwag61KAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wNi0wNVQwNjo1MTozMyswMDowMBtTDZQAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"}},[[101,1,2]]]);
//# sourceMappingURL=main.dda7b662.chunk.js.map