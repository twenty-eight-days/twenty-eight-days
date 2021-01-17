(this["webpackJsonptwenty-eight-days"]=this["webpackJsonptwenty-eight-days"]||[]).push([[0],{106:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var a=n(110),r=n(102),c=function(e){return Object(a.a)(e,"dd.MM.yyyy")},o={locale:r.a},i=function(e){return Object(a.a)(e,"EEEE, MMMM dd",o)},u=function(e){return Object(a.a)(e,"MMMM dd",o)}},151:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return v})),n.d(t,"c",(function(){return h}));var a=function(){return{type:"theme/TOGGLE_THEME"}},r=n(417),c=Object(r.a)({palette:{type:"light"}}),o=Object(r.a)({palette:{type:"dark"}}),i=c,u=n(0),l=n(389),s=n.n(l),d=n(388),f=n.n(d),m=n(731),p=n(99),b=n.n(p)()({root:{display:"grid",gridTemplateColumns:"auto 1fr auto",alignItems:"center"},icon:{margin:4}}),y=function(e){var t=e.theme,n=e.onToggleTheme,a=b(t);return u.createElement("div",{className:a.root},u.createElement(f.a,{className:a.icon}),u.createElement(m.a,{checked:t===o,onChange:n,color:"default"}),u.createElement(s.a,{className:a.icon}))},g=n(38),v=function(){var e=Object(g.useTypedSelector)((function(e){return e.theme})),t=Object(g.useTypedDispatch)();return u.createElement(y,{theme:e,onToggleTheme:function(){return t(a())}})},h=function(e,t){return"theme/TOGGLE_THEME"===t.type?"light"===e.palette.type?o:c:e}},200:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var a=n(392),r=n.n(a),c=n(209),o=n(110),i=function(e){return{type:c.a,cycles:e}},u=function(e){return function(){var t=new Blob([JSON.stringify(e)],{type:"text/json;charset=utf-8"}),n=Object(o.a)((new Date).valueOf(),"yyyyMMdd");r.a.saveAs(t,"cycle-data-".concat(n,".json"))}}},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={}},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={authState:{type:"login-form",state:{type:"login-form-idle"}}}},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="cycle/UPDATE_CYCLES"},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="db/UPDATE_AUTH_STATE"},327:function(e,t){},328:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(167),r=n(36),c=n(201),o=n(209),i=n(278),u=n(119),l=n(623),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.a:if(t.cycles.length>0){var n=Object(r.a)(t.cycles).sort((function(e,t){return Object(l.a)(e.startDate,t.startDate)})),i=d(n);return Object(a.a)({},e,{history:i})}return e;default:return e}};function d(e){var t=e[0];return{currentCycle:{id:t.id,startDate:t.startDate,duration:Object(i.a)(Object(u.a)(),t.startDate),type:"current"},pastCycles:e.flatMap((function(e,t,n){if(t>0){var r=n[t-1].startDate,c=e.startDate,o=Math.abs(Object(i.a)(r,c));return[Object(a.a)({},e,{type:"past",duration:o})]}return[]}))}}},329:function(e,t){},371:function(e,t){var n;n||(n={})},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(167),r=n(202),c=n(219),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.a:return Object(a.a)({},e,{authState:t.authState});default:return e}}},376:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n(38),c=n(92),o=n(58),i=n(63),u=n(80),l=function(e){var t=e.children,n=Object(r.useTypedSelector)((function(e){return e.database.authState})),l=Object(o.b)();return Object(a.useEffect)((function(){if("logged-in"===n.type){var e=Object(u.b)(n);console.log("DB openDatabase ".concat(e," ...")),c.a.openDatabase({databaseName:e,changeHandler:function(e){var t=e.map((function(e){return{id:e.itemId,startDate:e.item}}));l(Object(i.updateCycles)(t))}}).then((function(){console.log("DB openDatabase ".concat(e," successful"))})).catch((function(t){return console.log("DB openDatabase ".concat(e," failed ").concat(t))}))}}),[n,l]),t}},377:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=n(58).c},378:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(58),r=function(){return Object(a.b)()}},38:function(e,t,n){"use strict";var a=n(327);n.o(a,"configureStore")&&n.d(t,"configureStore",(function(){return a.configureStore})),n.o(a,"useTypedDispatch")&&n.d(t,"useTypedDispatch",(function(){return a.useTypedDispatch})),n.o(a,"useTypedSelector")&&n.d(t,"useTypedSelector",(function(){return a.useTypedSelector}));var r=n(381);n.d(t,"configureStore",(function(){return r.a}));var c=n(377);n.d(t,"useTypedSelector",(function(){return c.a}));var o=n(378);n.d(t,"useTypedDispatch",(function(){return o.a}))},380:function(e,t,n){"use strict";n.d(t,"a",(function(){return R}));var a=n(22),r=n(36),c=n(0),o=n.n(c),i=n(227),u=n(106),l=n(169),s=n(157),d=n(697),f=Object(d.a)({userName:{textTransform:"capitalize"}}),m=function(e){var t=e.userName,n=e.currentDay,a=e.median,r=e.lastStartDate,o=f(),d=Object(l.a)(r,a-1).valueOf(),m=Object(s.a)(d,new Date)?c.createElement("b",null,"today"):c.createElement("div",null,"on ",c.createElement("b",null,Object(u.a)(d)));return c.createElement("div",null,c.createElement(i.a,{variant:"body1",align:"center"},"Hey ",c.createElement("span",{className:o.userName},t)," \u2013 today is ",Object(u.a)((new Date).valueOf())),c.createElement(i.a,{variant:"h1",align:"center"},n),c.createElement(i.a,{variant:"body1",align:"center"},"days since your last period, which started on ",Object(u.b)(r),"."),c.createElement("br",null),c.createElement(i.a,{variant:"body1",align:"center"},"Your next period is expected ",m,"."))},p=n(698),b=n(699),y=n(729),g=n(725),v=n(42),h=n(110),E=function(e){return Object(h.a)(e,"dd.MM.yyyy")},O=Object(d.a)((function(e){return{root:{display:"grid",width:"100%",height:"100%",justifyItems:"center"},bar:{fill:Object(v.d)(e.palette.primary.main,.5),strokeWidth:1,stroke:e.palette.background.default},dot:{fill:e.palette.secondary.main},line:{stroke:e.palette.text.primary,strokeWidth:1},text:{fill:e.palette.text.primary,textAnchor:"middle",fontSize:9,dominantBaseline:"central"}}})),j=function(e){var t,n,a,r=e.width,c=e.height,i=e.currentDay,u=e.median,l=e.cycleHistory,s=O(),d=l.pastCycles.map((function(e){return e.duration})),f=null!==(t=Object(p.a)(d))&&void 0!==t?t:20,m=null!==(n=Object(b.a)(d))&&void 0!==n?n:35,v=Object(g.a)().domain([f,m+1]).range([0,r]),h=Object(y.a)().thresholds(v.ticks(m-f))(d),E=Object(g.a)().domain([0,null!==(a=Object(b.a)(h,(function(e){return e.length})))&&void 0!==a?a:0]).nice().range([c-20,10]),j=r/h.length,D=i>=f?h[i-f]:void 0,S=v(u+.5);return o.a.createElement("div",{className:s.root},o.a.createElement("svg",{viewBox:"0 0 ".concat(r," ").concat(c),width:r,height:c},o.a.createElement("line",{className:s.line,x1:S,x2:S,y1:5,y2:c-10-5}),o.a.createElement("text",{className:s.text,x:S,y:c-10},u),h.map((function(e,t){var n=E(0)-E(e.length);return o.a.createElement("rect",{key:"bin-".concat(t),className:s.bar,x:v(e.x0),y:E(e.length),width:j,height:n})})),D&&o.a.createElement("circle",{className:s.dot,cx:v(i+.5),cy:E(D.length)-j/2,r:j/3,strokeWidth:0})))},D=n(394),S=n(91),w=Object(d.a)((function(e){return{root:function(e){return{width:"100%",height:e}},label:{fill:e.palette.text.primary,dominantBaseline:"central",fontSize:9}}})),C=function(e){var t=e.cycleHistory,n=e.median,a=t.pastCycles,c=18*a.length,i=w(c),u=Object(S.a)(),l=[t.currentCycle].concat(Object(r.a)(a)).reverse().map((function(e){return{id:N(e),currentDuration:"current"===e.type?e.duration+1:0,pastDuration:"past"===e.type?e.duration:0}})),s={axis:"x",value:n,lineStyle:{stroke:u.palette.secondary.main,strokeWidth:.5}};return o.a.createElement("div",{className:i.root},o.a.createElement(D.a,{data:l,keys:["currentDuration","pastDuration"],colors:["lavender",Object(v.d)(u.palette.primary.main,.5)],layout:"horizontal",padding:.2,enableGridY:!1,isInteractive:!1,layers:["markers","axes","bars",function(e){var t=e.bars.map((function(e){var t=e.data,n=e.x,a=e.y,r=e.width,c=e.height,u=t.data;return o.a.createElement("text",{className:i.label,key:"".concat(t.id,"/").concat(t.index),x:n,y:a,transform:"translate(".concat(r+-12,",").concat(c/2,")")},"currentDuration"===t.id&&t.index===l.length-1?u.currentDuration:"","pastDuration"===t.id&&t.index<=l.length?u.pastDuration:"")}));return o.a.createElement("g",null,t)}],margin:{top:0,right:0,bottom:0,left:115},label:function(){return""},theme:{fontSize:9,textColor:u.palette.text.primary},markers:[s]}))};function N(e){var t=E(e.startDate);switch(e.type){case"past":var n=E(Object(l.a)(e.startDate,e.duration));return"".concat(t," - ").concat(n);default:return"".concat(t," - __.__.____")}}var T=Object(d.a)((function(e){return{root:{display:"grid",width:"100%",height:"100%",alignItems:"center",justifyItems:"center",gridGap:e.spacing(1)}}})),x=function(e){var t=e.userName,n=e.currentDay,a=e.median,r=e.lastStartDate,o=e.cycleHistory,u=T();return c.createElement("div",{className:u.root},c.createElement(m,{userName:t,currentDay:n,median:a,lastStartDate:r}),c.createElement(I,{text:"Past Cycles"}),c.createElement(i.a,{variant:"body1",align:"center"},"Your ",c.createElement("b",null,"median cycle")," length is ",a," days."),c.createElement(C,{cycleHistory:o,median:a}),c.createElement(I,{text:"Duration Histogram"}),c.createElement(j,{width:200,height:150,currentDay:n,median:a,cycleHistory:o}))},k=Object(d.a)((function(e){return{container:{display:"flex",width:"100%",alignItems:"center",marginTop:12},border:{borderBottom:"2px solid lightgray",width:"100%"},content:{paddingTop:e.spacing(.5),paddingBottom:e.spacing(.5),paddingRight:e.spacing(2),paddingLeft:e.spacing(2),fontWeight:500,fontSize:22,color:"lightgray",whiteSpace:"nowrap"}}})),I=function(e){var t=e.text,n=k();return c.createElement("div",{className:n.container},c.createElement("div",{className:n.border}),c.createElement("span",{className:n.content},t),c.createElement("div",{className:n.border}))},B=n(403),A=n(38),M=n(119),_=n(278),R=function(){var e=Object(c.useState)(Object(M.a)().valueOf()),t=Object(a.a)(e,2),n=t[0],o=t[1];Object(B.a)((function(){o(Object(M.a)().valueOf())}),6e4);var i=Object(A.useTypedSelector)((function(e){return e.cycle.history})),u=Object(A.useTypedSelector)((function(e){var t=e.database.authState;return"logged-in"===t.type?t.user.username:""}));if(i){var l=i.currentCycle.startDate,s=function(e){var t=Math.floor(e.length/2),n=Object(r.a)(e).sort((function(e,t){return e-t}));return e.length%2!==0?n[t]:(n[t-1]+n[t])/2}(i.pastCycles.map((function(e){return e.duration}))),d=Object(_.a)(n,l),f=Math.floor(d)+1;return c.createElement(x,{userName:u,currentDay:f,median:s,lastStartDate:l,cycleHistory:i})}return c.createElement("div",null)}},381:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(146),r=n(390),c=n(151),o=n(63),i=n(65),u={database:i.defaultDatabaseState,theme:c.b,cycle:o.defaultCycleState},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return{database:Object(i.dbReducer)(e.database,t),theme:Object(c.c)(e.theme,t),cycle:Object(o.cycleReducer)(e.cycle,t)}},s=n(413),d=function(){return Object(a.createStore)(l,Object(r.composeWithDevTools)(Object(a.applyMiddleware)(s.a)))}},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var a=n(0),r=n.n(a),c=n(36),o=n(715),i=n(718),u=n(719),l=n(696),s=n(717),d=n(99),f=n.n(d),m=n(407),p=n.n(m),b=n(22),y=n(697),g=n(39),v=n(726),h=n(708),E=n(709),O=n(727),j=n(716),D=n(711),S=n(416),w=n(418),C=n(119),N=Object(y.a)({root:{width:"100%"},content:{display:"grid",gridTemplateColumns:"1fr",width:"100%"},actions:{display:"grid",justifyItems:"end"}}),T=function(e){var t=e.onAdd,n=N(),c=Object(a.useState)(Object(C.a)().valueOf()),o=Object(b.a)(c,2),i=o[0],u=o[1],l=Object(a.useState)(!0),s=Object(b.a)(l,2),d=s[0],f=s[1];return r.a.createElement(h.a,{className:n.root,variant:"outlined"},r.a.createElement(E.a,{className:n.content},r.a.createElement(g.a,{dateAdapter:S.a,locale:w.a},r.a.createElement(v.a,{label:"Cycle Start Date",value:i,onChange:function(e){return e&&u(e.valueOf())},onError:function(e){return f(null===e)},renderInput:function(e){return r.a.createElement(O.a,e)},mask:"__.__.____",disableFuture:!0,showTodayButton:!0,autoOk:!0}))),r.a.createElement(j.a,{className:n.actions},r.a.createElement(D.a,{variant:"contained",color:"primary",disabled:!d,onClick:function(){return t(i)}},"Add")))},x=n(106),k=f()({root:{display:"grid",width:"100%",justifyItems:"center"},list:{width:"100%"}}),I=function(e){var t=e.cycleHistory,n=e.onAdd,a=e.onDelete,d=k(),f=t?[t.currentCycle].concat(Object(c.a)(t.pastCycles)):[];return r.a.createElement("div",{className:d.root},r.a.createElement(T,{onAdd:n}),r.a.createElement(o.a,{className:d.list},f.map((function(e){return r.a.createElement(s.a,{key:e.id},r.a.createElement(i.a,null,Object(x.c)(e.startDate)),r.a.createElement(u.a,null,r.a.createElement(l.a,{edge:"end","aria-label":"delete",onClick:function(){return a(e.id)}},r.a.createElement(p.a,null))))}))))},B=n(38),A=n(58),M=n(65),_=function(e){var t=e.loginState,n=Object(B.useTypedSelector)((function(e){return e.cycle.history})),a=Object(A.b)();return r.a.createElement(I,{cycleHistory:n,onAdd:function(e){return a(Object(M.addStartDate)(e,t))},onDelete:function(e){return a(Object(M.deleteStartDate)(e,t))}})}},383:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(22),r=n(0),c=n.n(r),o=n(727),i=n(711),u=n(720),l=n(697),s=Object(l.a)((function(e){return{root:{width:"100%",display:"grid",gridTemplateRows:"auto auto auto",gridRowGap:e.spacing(2)},button:{minHeight:24}}})),d=function(e){var t=e.state,n=e.onSubmit,l=s(),d=Object(r.useState)(null!=="7779913f-1624-49d0-9e1f-dcf7d1e3e466"?"7779913f-1624-49d0-9e1f-dcf7d1e3e466":""),f=Object(a.a)(d,2),m=f[0],p=f[1],b=Object(r.useState)(null!=="rahel"?"rahel":""),y=Object(a.a)(b,2),g=y[0],v=y[1],h=Object(r.useState)(null!=="userbase-test-pwd"?"userbase-test-pwd":""),E=Object(a.a)(h,2),O=E[0],j=E[1],D="login-form-submitted"===t.type,S="login-form-error"===t.type&&"credentials"===t.field;return c.a.createElement("form",{className:l.root,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),n(m,g,O)}},c.a.createElement(o.a,{id:"appId",variant:"outlined",fullWidth:!0,label:"App Id",type:"password",value:m,onChange:function(e){return p(e.target.value)},disabled:D,error:"login-form-error"===t.type&&"appId"===t.field}),c.a.createElement(o.a,{id:"username",variant:"outlined",fullWidth:!0,label:"Username",value:g,onChange:function(e){return v(e.target.value)},disabled:D,error:S}),c.a.createElement(o.a,{id:"password",variant:"outlined",fullWidth:!0,label:"Password",type:"password",value:O,onChange:function(e){return j(e.target.value)},disabled:D,error:S}),c.a.createElement(i.a,{className:l.button,disabled:D||0===m.trim().length||0===g.trim().length||0===O.trim().length,type:"submit",variant:"contained",color:"primary"},D?c.a.createElement(u.a,{size:20}):"Log In"))},f=n(58),m=n(92),p=n(80),b=function(e){var t=e.state,n=Object(r.useState)(),o=Object(a.a)(n,2),i=o[0],u=o[1],l=Object(r.useState)(!1),s=Object(a.a)(l,2),b=s[0],y=s[1],g=Object(r.useState)(),v=Object(a.a)(g,2),h=v[0],E=v[1],O=Object(f.b)();return Object(r.useEffect)((function(){i&&!b&&(console.debug("Initializing DB..."),m.a.init({appId:i}).then((function(){console.debug("DB init successful"),y(!0)})).catch((function(e){console.debug("DB init failed: "+e),y(!1),O(Object(p.d)("Invalid App Id","appId"))})))}),[i,b,y,O]),Object(r.useEffect)((function(){if(b&&h){m.a.signOut().catch((function(){}));var e=Object(a.a)(h,2),t=e[0],n=e[1];console.debug("DB sign-in..."),m.a.signIn({username:t,password:n}).then((function(e){return console.debug("DB sign-in successful"),O(Object(p.f)(e))})).catch((function(e){console.debug("DB sign-in failed: "+e),e.toString().startsWith("AppIdNotValid")?O(Object(p.d)("Invalid App Id","appId")):O(Object(p.d)("Invalid Credentials","credentials"))}))}}),[b,h,O]),c.a.createElement(d,{state:t,onSubmit:function(e,t,n){u(e),E([t,n]),O(Object(p.e)())}})}},384:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(36),r=n(0),c=n(412),o=n.n(c),i=n(696),u=function(e){var t=e.onClick;return r.createElement(i.a,{color:"inherit",onClick:t},r.createElement(o.a,null))},l=n(38),s=n(200),d=n(106),f=function(){var e=Object(l.useTypedSelector)((function(e){return e.cycle})),t=Object(l.useTypedDispatch)();return r.createElement(u,{onClick:function(){var n=function(e){var t=e.history;return{history:{startDates:(t?[t.currentCycle].concat(Object(a.a)(t.pastCycles)):[]).map((function(e){return Object(d.c)(e.startDate)}))}}}(e);t(Object(s.a)(n))}})}},450:function(e,t,n){e.exports=n(619)},612:function(e,t){},614:function(e,t){},619:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),o=n.n(c),i=n(166),u=n(723),l=n(710),s=n(151),d=n(99),f=n.n(d),m=n(63),p=n(227),b=n(22),y=n(65),g=n(722),v=n(414),h=n.n(v),E=n(415),O=n.n(E),j=n(721),D=f()({bottomNav:{width:"100vw",position:"fixed",bottom:0,left:0}}),S=function(e){var t=e.authState,n=D(),c=Object(a.useState)("stats"),o=Object(b.a)(c,2),i=o[0],u=o[1];switch(t.type){case"login-form":return r.a.createElement(y.LoginForm,{state:t.state});case"logged-in":return r.a.createElement("div",null,"stats"===i&&r.a.createElement(m.CycleStats,null),"data"===i&&r.a.createElement(m.CycleData,{loginState:t}),r.a.createElement(j.a,{className:n.bottomNav,value:i,onChange:function(e,t){u(t)},showLabels:!0},r.a.createElement(g.a,{label:"Stats",icon:r.a.createElement(h.a,null),value:"stats"}),r.a.createElement(g.a,{label:"Data",icon:r.a.createElement(O.a,null),value:"data"})));default:return r.a.createElement("div",null)}},w=n(38),C=function(){var e=Object(w.useTypedSelector)((function(e){return e.database.authState}));return r.a.createElement(S,{authState:e})},N=f()((function(e){return{appBar:{height:64},toolbar:{display:"grid",gridTemplateColumns:"auto auto"},toolbarLeft:{height:"100%",marginRight:"auto",display:"grid",gridTemplateColumns:"auto auto",alignItems:"center"},toolbarCenter:Object(i.a)({position:"absolute",width:"100%",display:"grid",pointerEvents:"none"},e.breakpoints.down("sm"),{visibility:"hidden"}),title:{justifySelf:"center",color:e.palette.primary.contrastText},toolbarRight:{height:"100%",marginLeft:"auto",display:"grid",gridTemplateColumns:"auto",alignItems:"center"},main:Object(i.a)({display:"grid",width:"100vw",gridTemplateRows:"auto 1fr auto",gridRowGap:8,paddingTop:100,paddingBottom:100,paddingLeft:"20vw",paddingRight:"20vw"},e.breakpoints.down("sm"),{paddingLeft:"5vw",paddingRight:"5vw"}),bottomNav:{width:"100vw",position:"fixed",bottom:0}}})),T=function(){var e=N();return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{className:e.appBar},r.a.createElement(l.a,{className:e.toolbar},r.a.createElement("div",{className:e.toolbarLeft},r.a.createElement(m.ExportCycleData,null)),r.a.createElement("div",{className:e.toolbarCenter},r.a.createElement(p.a,{className:e.title,variant:"h6"},"".concat("28 Days"," v").concat("0.1.0"))),r.a.createElement("div",{className:e.toolbarRight},r.a.createElement(s.a,null)))),r.a.createElement("div",{className:e.main},r.a.createElement(C,null)))},x=n(695),k=n(724),I=function(){var e=Object(w.useTypedSelector)((function(e){return e.theme}));return a.createElement(x.a,{theme:e},a.createElement(k.a,null),a.createElement(T,null))},B=n(58),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _=Object(w.configureStore)(),R=function(){return r.a.createElement(B.a,{store:_},r.a.createElement(y.DataProvider,null,r.a.createElement(I,null)))};o.a.render(r.a.createElement(R,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/twenty-eight-days",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/twenty-eight-days","/service-worker.js");A?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):M(t,e)}))}}()},63:function(e,t,n){"use strict";var a=n(200);n.d(t,"updateCycles",(function(){return a.b}));var r=n(328);n.d(t,"cycleReducer",(function(){return r.a}));var c=n(329);n.o(c,"CycleData")&&n.d(t,"CycleData",(function(){return c.CycleData})),n.o(c,"CycleStats")&&n.d(t,"CycleStats",(function(){return c.CycleStats})),n.o(c,"ExportCycleData")&&n.d(t,"ExportCycleData",(function(){return c.ExportCycleData})),n.o(c,"defaultCycleState")&&n.d(t,"defaultCycleState",(function(){return c.defaultCycleState}));var o=n(201);n.d(t,"defaultCycleState",(function(){return o.a}));var i=n(380);n.d(t,"CycleStats",(function(){return i.a}));var u=n(382);n.d(t,"CycleData",(function(){return u.a}));var l=n(384);n.d(t,"ExportCycleData",(function(){return l.a}))},65:function(e,t,n){"use strict";var a=n(371);n.o(a,"DataProvider")&&n.d(t,"DataProvider",(function(){return a.DataProvider})),n.o(a,"LoginForm")&&n.d(t,"LoginForm",(function(){return a.LoginForm})),n.o(a,"addStartDate")&&n.d(t,"addStartDate",(function(){return a.addStartDate})),n.o(a,"dbReducer")&&n.d(t,"dbReducer",(function(){return a.dbReducer})),n.o(a,"defaultDatabaseState")&&n.d(t,"defaultDatabaseState",(function(){return a.defaultDatabaseState})),n.o(a,"deleteStartDate")&&n.d(t,"deleteStartDate",(function(){return a.deleteStartDate}));var r=n(202);n.d(t,"defaultDatabaseState",(function(){return r.a}));var c=n(80);n.d(t,"addStartDate",(function(){return c.a})),n.d(t,"deleteStartDate",(function(){return c.c}));var o=n(375);n.d(t,"dbReducer",(function(){return o.a}));var i=n(376);n.d(t,"DataProvider",(function(){return i.a}));var u=n(383);n.d(t,"LoginForm",(function(){return u.a}))},80:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return b}));var a=n(3),r=n.n(a),c=n(7),o=n(219),i=n(92),u=function(e){return{type:o.a,authState:e}},l=function(e){return u({type:"login-form",state:e})},s=function(){return l({type:"login-form-submitted"})},d=function(e,t){return l({type:"login-form-error",field:t,error:e})},f=function(e){return u({type:"logged-in",user:e})},m=function(e){return"".concat(e.user.username,"-cycles-v1")},p=function(e,t){return Object(c.a)(r.a.mark((function n(){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=m(t),n.abrupt("return",i.a.insertItem({databaseName:a,itemId:"".concat(e),item:e}).then((function(){return console.log("DB insertItem successful")})).catch((function(e){console.error("DB insertItem failed "+e)})));case 2:case"end":return n.stop()}}),n)})))},b=function(e,t){return Object(c.a)(r.a.mark((function n(){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=m(t),n.abrupt("return",i.a.deleteItem({databaseName:a,itemId:e}).then((function(){return console.log("DB deleteItem successful")})).catch((function(e){console.error("DB deleteItem failed "+e)})));case 2:case"end":return n.stop()}}),n)})))}}},[[450,1,2]]]);
//# sourceMappingURL=main.5c21ca58.chunk.js.map