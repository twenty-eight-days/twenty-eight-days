(this["webpackJsonptwenty-eight-days"]=this["webpackJsonptwenty-eight-days"]||[]).push([[0],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={authState:{type:"no-app-id"}}},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="cycle/UPDATE_CYCLES"},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="db/UPDATE_AUTH_STATE"},148:function(e,t){},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(89),r=n(28),c=n(99),o=n(107),i=n(131),u=n(68),l=n(265),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.a:if(t.cycles.length>0){var n=Object(r.a)(t.cycles).sort((function(e,t){return Object(l.a)(e.startDate,t.startDate)})),i=d(n);return Object(a.a)({},e,{history:i})}return e;default:return e}};function d(e){var t=e[0];return{currentCycle:{id:t.id,startDate:t.startDate,duration:Object(i.a)(Object(u.a)(),t.startDate),type:"current"},pastCycles:e.flatMap((function(e,t,n){if(t>0){var r=n[t-1].startDate,c=e.startDate,o=Math.abs(Object(i.a)(r,c));return[Object(a.a)({},e,{type:"past",duration:o})]}return[]}))}}},150:function(e,t){},151:function(e,t){var n;n||(n={})},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(89),r=n(100),c=n(115),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.a:return Object(a.a)({},e,{authState:t.authState});default:return e}}},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=n(32).c},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(32),r=function(){return Object(a.b)()}},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var a=n(23),r=n(28),c=n(0),o=n.n(c),i=n(120),u=n(45),l=n(91),s=function(e){var t=e.currentDay,n=e.median,a=e.lastStartDate;return c.createElement("div",null,c.createElement(i.a,{variant:"body1",align:"center"},"Hey \u2013 today is ",Object(u.b)((new Date).valueOf())),c.createElement(i.a,{variant:"h1",align:"center"},t),c.createElement(i.a,{variant:"body1",align:"center"},"days since your last period, which started on ",Object(u.c)(a),"."),c.createElement("br",null),c.createElement(i.a,{variant:"body1",align:"center"},"Your next period is expected on ",c.createElement("b",null,Object(u.b)(Object(l.a)(a,n).valueOf())),"."),c.createElement("br",null),c.createElement(i.a,{variant:"body1",align:"center"},"Your ",c.createElement("b",null,"median cycle")," length is ",n," days."))},d=n(301),f=n(302),m=n(323),b=n(320),p=n(300),y=Object(p.a)((function(e){return{bar:{fill:e.palette.primary.main,opacity:.5,strokeWidth:1,stroke:e.palette.background.default},barBackdrop:{fill:"white"},dot:{fill:e.palette.secondary.main},line:{stroke:e.palette.text.primary,strokeWidth:1},text:{fill:e.palette.text.primary,textAnchor:"middle",fontSizeAdjust:.4,dominantBaseline:"central"}}})),v=function(e){var t,n,a,r=e.width,c=e.height,i=e.currentDay,u=e.median,l=e.cycleDurations,s=y(),p=null!==(t=Object(d.a)(l))&&void 0!==t?t:20,v=null!==(n=Object(f.a)(l))&&void 0!==n?n:35,h=Object(b.a)().domain([p,v+1]).range([0,r]),g=Object(m.a)().thresholds(h.ticks(v-p))(l),E=Object(b.a)().domain([0,null!==(a=Object(f.a)(g,(function(e){return e.length})))&&void 0!==a?a:0]).nice().range([c-20,10]),O=r/g.length,j=i>=p?g[i-p]:void 0,S=h(u+.5);return o.a.createElement("svg",{viewBox:"0 0 ".concat(r," ").concat(c),width:r,height:c},o.a.createElement("line",{className:s.line,x1:S,x2:S,y1:5,y2:c-10-5}),o.a.createElement("text",{className:s.text,x:S,y:c-10},u),g.map((function(e,t){var n=E(0)-E(e.length);return o.a.createElement("g",{key:"bin-".concat(t)},o.a.createElement("rect",{className:"".concat(s.bar,", ").concat(s.barBackdrop),x:h(e.x0),y:E(e.length),width:O,height:n}),o.a.createElement("rect",{className:s.bar,x:h(e.x0),y:E(e.length),width:O,height:n}))})),j&&o.a.createElement("circle",{className:s.dot,cx:h(i+.5),cy:E(j.length)-O/2,r:O/3,strokeWidth:0}))},h=Object(p.a)((function(e){return{root:{display:"grid",alignItems:"center",justifyItems:"center",gridGap:e.spacing(1)}}})),g=function(e){var t=e.currentDay,n=e.median,a=e.lastStartDate,r=e.cycleDurations,o=h();return c.createElement("div",{className:o.root},c.createElement(s,{currentDay:t,median:n,lastStartDate:a}),c.createElement(v,{width:200,height:150,currentDay:t,median:n,cycleDurations:r}))},E=n(175),O=n(18),j=n(68),S=n(131),D=function(){var e=Object(c.useState)(Object(j.a)().valueOf()),t=Object(a.a)(e,2),n=t[0],o=t[1];Object(E.a)((function(){o(Object(j.a)().valueOf())}),6e4);var i=Object(O.useTypedSelector)((function(e){return e.cycle.history}));if(i){var u=i.pastCycles.map((function(e){return e.duration})),l=i.currentCycle.startDate,s=function(e){return function(e){var t=Math.floor(e.length/2),n=Object(r.a)(e).sort((function(e,t){return e-t}));return e.length%2!==0?n[t]:(n[t-1]+n[t])/2}(e)}(u),d=Object(S.a)(n,l),f=Math.floor(d)+1;return c.createElement(g,{currentDay:f,median:s,lastStartDate:l,cycleDurations:u})}return c.createElement("div",null)}},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(78),r=n(171),c=n(81),o=n(36),i=n(37),u={database:i.defaultDatabaseState,theme:c.b,cycle:o.defaultCycleState},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return{database:Object(i.dbReducer)(e.database,t),theme:Object(c.c)(e.theme,t),cycle:Object(o.cycleReducer)(e.cycle,t)}},s=n(185),d=function(){return Object(a.createStore)(l,Object(r.composeWithDevTools)(Object(a.applyMiddleware)(s.a)))}},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var a=n(0),r=n.n(a),c=n(28),o=n(310),i=n(313),u=n(314),l=n(299),s=n(312),d=n(54),f=n.n(d),m=n(179),b=n.n(m),p=n(23),y=n(300),v=n(19),h=n(321),g=n(303),E=n(304),O=n(322),j=n(311),S=n(306),D=n(191),w=n(193),C=n(68),T=Object(y.a)({root:{width:"100%"},content:{display:"grid",gridTemplateColumns:"1fr",width:"100%"},actions:{display:"grid",justifyItems:"end"}}),_=function(e){var t=e.onAdd,n=T(),c=Object(a.useState)(Object(C.a)().valueOf()),o=Object(p.a)(c,2),i=o[0],u=o[1],l=Object(a.useState)(!0),s=Object(p.a)(l,2),d=s[0],f=s[1];return r.a.createElement(g.a,{className:n.root,variant:"outlined"},r.a.createElement(E.a,{className:n.content},r.a.createElement(v.a,{dateAdapter:D.a,locale:w.a},r.a.createElement(h.a,{label:"Cycle Start Date",value:i,onChange:function(e){return e&&u(e.valueOf())},onError:function(e){return f(null===e)},renderInput:function(e){return r.a.createElement(O.a,e)},mask:"__.__.____",disableFuture:!0,showTodayButton:!0,autoOk:!0}))),r.a.createElement(j.a,{className:n.actions},r.a.createElement(S.a,{variant:"contained",color:"primary",disabled:!d,onClick:function(){return t(i)}},"Add")))},A=n(45),N=f()({root:{display:"grid",width:"100%",justifyItems:"center"},list:{width:"100%"}}),R=function(e){var t=e.cycleHistory,n=e.onAdd,a=e.onDelete,d=N(),f=t?[t.currentCycle].concat(Object(c.a)(t.pastCycles)):[];return r.a.createElement("div",{className:d.root},r.a.createElement(_,{onAdd:n}),r.a.createElement(o.a,{className:d.list},f.map((function(e){return r.a.createElement(s.a,{key:e.id},r.a.createElement(i.a,null,Object(A.d)(e.startDate)),r.a.createElement(u.a,null,r.a.createElement(l.a,{edge:"end","aria-label":"delete",onClick:function(){return a(e.id)}},r.a.createElement(b.a,null))))}))))},P=n(18),k=n(32),x=n(37),I=function(e){var t=e.loginState,n=Object(P.useTypedSelector)((function(e){return e.cycle.history})),a=Object(k.b)();return r.a.createElement(R,{cycleHistory:n,onAdd:function(e){return a(Object(x.addStartDate)(e,t))},onDelete:function(e){return a(Object(x.deleteStartDate)(e,t))}})}},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(23),r=n(0),c=n(18),o=n(51),i=n(32),u=n(36),l=n(29),s=n(116),d=n(45),f=[].map((function(e){return Object(s.a)(e,d.a,new Date).valueOf()})),m=function(e){var t=e.children,n=Object(c.useTypedSelector)((function(e){var t,n;return null!==(t=null===(n=e.cycle.history)||void 0===n?void 0:n.pastCycles.map((function(e){return e.startDate})))&&void 0!==t?t:[]})),s=Object(c.useTypedSelector)((function(e){return e.database.authState})),d=Object(i.b)();Object(r.useEffect)((function(){var e,t=null!==(e=null!=="7779913f-1624-49d0-9e1f-dcf7d1e3e466"?"7779913f-1624-49d0-9e1f-dcf7d1e3e466":window.location.pathname.substr(1))&&void 0!==e?e:"";36===t.length&&(d(Object(l.d)()),o.a.init({appId:t}).then((function(e){e.user?d(Object(l.h)(e.user)):d(Object(l.i)())})).catch((function(e){return d(Object(l.c)(e))})))}),[d]);var m=Object(r.useState)(!1),b=Object(a.a)(m,2),p=b[0],y=b[1];return Object(r.useEffect)((function(){if("logged-in"===s.type){var e=Object(l.b)(s);console.log("DB openDatabase ".concat(e," ...")),o.a.openDatabase({databaseName:e,changeHandler:function(e){var t=e.map((function(e){return{id:e.itemId,startDate:e.item}}));d(Object(u.updateCycles)(t))}}).then((function(){y(!0),console.log("DB openDatabase ".concat(e," successful"))})).catch((function(t){return console.log("DB openDatabase ".concat(e," failed ").concat(t))}))}}),[s,d]),Object(r.useEffect)((function(){if("logged-in"===s.type&&p&&s.user.username.startsWith("r")){var e=Object(l.b)(s);console.log("DB insert mock start dates into ".concat(e," ...")),f.forEach((function(t){n.find((function(e){return e===t}))||o.a.insertItem({databaseName:e,itemId:"".concat(t),item:t}).catch((function(e){}))}))}}),[p,n,s,d]),t}},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),r=n.n(a),c=n(23),o=n(322),i=n(306),u=n(315),l=n(300),s=Object(l.a)((function(e){return{root:{width:"100%",display:"grid",gridTemplateRows:"auto auto auto",gridRowGap:e.spacing(2)},button:{minHeight:24}}})),d=function(e){var t,n,l=e.state,d=e.onSubmit,f=s(),m=Object(a.useState)(null!==(t=Object({NODE_ENV:"production",PUBLIC_URL:"/twenty-eight-days",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_USERBASE_APP_ID:"7779913f-1624-49d0-9e1f-dcf7d1e3e466",REACT_APP_NAME:"28 Days",REACT_APP_VERSION:"0.1.0"}).REACT_APP_USERBASE_USERNAME)&&void 0!==t?t:""),b=Object(c.a)(m,2),p=b[0],y=b[1],v=Object(a.useState)(null!==(n=Object({NODE_ENV:"production",PUBLIC_URL:"/twenty-eight-days",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_USERBASE_APP_ID:"7779913f-1624-49d0-9e1f-dcf7d1e3e466",REACT_APP_NAME:"28 Days",REACT_APP_VERSION:"0.1.0"}).REACT_APP_USERBASE_PASSWORD)&&void 0!==n?n:""),h=Object(c.a)(v,2),g=h[0],E=h[1],O="login-form-submitted"===l.type;return r.a.createElement("form",{className:f.root,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),d(p,g)}},r.a.createElement(o.a,{id:"username",variant:"outlined",fullWidth:!0,label:"Username",value:p,onChange:function(e){return y(e.target.value)},disabled:O}),r.a.createElement(o.a,{id:"password",variant:"outlined",fullWidth:!0,label:"Password",type:"password",value:g,onChange:function(e){return E(e.target.value)},disabled:O}),r.a.createElement(i.a,{className:f.button,disabled:O||0===p.trim().length||0===g.trim().length,type:"submit",variant:"contained",color:"primary"},O?r.a.createElement(u.a,{size:20}):"Log In"))},f=n(32),m=n(51),b=n(29),p=function(e){var t=e.state,n=Object(f.b)();return r.a.createElement(d,{state:t,onSubmit:function(e,t){n(Object(b.g)()),m.a.signIn({username:e,password:t,rememberMe:"session"}).then((function(e){return n(Object(b.h)(e))})).catch((function(e){return n(Object(b.f)(e))}))}})}},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(28),r=n(0),c=n(184),o=n.n(c),i=n(299),u=function(e){var t=e.onClick;return r.createElement(i.a,{color:"inherit",onClick:t},r.createElement(o.a,null))},l=n(18),s=n(98),d=n(45),f=function(){var e=Object(l.useTypedSelector)((function(e){return e.cycle})),t=Object(l.useTypedDispatch)();return r.createElement(u,{onClick:function(){var n=function(e){var t=e.history;return{history:{startDates:(t?[t.currentCycle].concat(Object(a.a)(t.pastCycles)):[]).map((function(e){return Object(d.d)(e.startDate)}))}}}(e);t(Object(s.a)(n))}})}},18:function(e,t,n){"use strict";var a=n(148);n.o(a,"configureStore")&&n.d(t,"configureStore",(function(){return a.configureStore})),n.o(a,"useTypedDispatch")&&n.d(t,"useTypedDispatch",(function(){return a.useTypedDispatch})),n.o(a,"useTypedSelector")&&n.d(t,"useTypedSelector",(function(){return a.useTypedSelector}));var r=n(161);n.d(t,"configureStore",(function(){return r.a}));var c=n(157);n.d(t,"useTypedSelector",(function(){return c.a}));var o=n(158);n.d(t,"useTypedDispatch",(function(){return o.a}))},211:function(e,t,n){e.exports=n(261)},254:function(e,t){},256:function(e,t){},261:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),i=n(88),u=n(318),l=n(305),s=n(81),d=n(54),f=n.n(d),m=n(36),b=n(299),p=n(120),y=n(190),v=n.n(y),h=n(23),g=n(37),E=n(315),O=n(300),j=Object(O.a)((function(e){return{root:{display:"grid",width:"100%",justifyItems:"center",marginTop:e.spacing(1),gridRowGap:e.spacing(2)}}})),S=function(e){var t=e.label,n=j();return r.a.createElement("div",{className:n.root},r.a.createElement(E.a,{size:100}),r.a.createElement(p.a,{variant:"body1",align:"center"},t))},D=n(317),w=n(188),C=n.n(w),T=n(189),_=n.n(T),A=n(316),N=n(186),R=n.n(N),P=function(){return a.createElement(p.a,{variant:"body1",align:"center"},a.createElement(R.a,{fontSize:"large"}),a.createElement("br",null),"This app uses a ",a.createElement("b",null,"privacy-first")," approach and can only be accessed through a ",a.createElement("b",null,"personal")," URL")},k=n(187),x=n.n(k),I=function(e){var t=e.error;return console.log(t),a.createElement(p.a,{variant:"body1",align:"center"},a.createElement(x.a,{fontSize:"large",color:"secondary"}),a.createElement("br",null),"Oops \u2013 something went wrong...")},B=f()({bottomNav:{width:"100vw",position:"fixed",bottom:0,left:0}}),M=function(e){var t=e.authState,n=B(),c=Object(a.useState)("stats"),o=Object(h.a)(c,2),i=o[0],u=o[1];switch(t.type){case"no-app-id":return r.a.createElement(P,null);case"db-init-in-progress":return r.a.createElement(S,{label:"Connecting to Server"});case"db-init-failed":return r.a.createElement(I,{error:t.error});case"login-form":return r.a.createElement(g.LoginForm,{state:t.state});case"logged-in":return r.a.createElement("div",null,"stats"===i&&r.a.createElement(m.CycleStats,null),"data"===i&&r.a.createElement(m.CycleData,{loginState:t}),r.a.createElement(A.a,{className:n.bottomNav,value:i,onChange:function(e,t){u(t)},showLabels:!0},r.a.createElement(D.a,{label:"Stats",icon:r.a.createElement(C.a,null),value:"stats"}),r.a.createElement(D.a,{label:"Data",icon:r.a.createElement(_.a,null),value:"data"})));default:return r.a.createElement("div",null)}},L=n(18),W=function(){var e=Object(L.useTypedSelector)((function(e){return e.database.authState}));return r.a.createElement(M,{authState:e})},U=f()((function(e){return{appBar:{height:64},toolbar:{display:"grid",gridTemplateColumns:"auto auto"},toolbarLeft:{height:"100%",marginRight:"auto",display:"grid",gridTemplateColumns:"auto auto",alignItems:"center"},toolbarCenter:Object(i.a)({position:"absolute",width:"100%",display:"grid",pointerEvents:"none"},e.breakpoints.down("sm"),{visibility:"hidden"}),title:{justifySelf:"center",color:e.palette.primary.contrastText},toolbarRight:{height:"100%",marginLeft:"auto",display:"grid",gridTemplateColumns:"auto",alignItems:"center"},main:Object(i.a)({display:"grid",width:"100vw",gridTemplateRows:"auto 1fr auto",gridRowGap:8,paddingTop:100,paddingLeft:"20vw",paddingRight:"20vw"},e.breakpoints.down("sm"),{paddingLeft:"5vw",paddingRight:"5vw"}),bottomNav:{width:"100vw",position:"fixed",bottom:0}}})),H=function(){var e=U();return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{className:e.appBar},r.a.createElement(l.a,{className:e.toolbar},r.a.createElement("div",{className:e.toolbarLeft},r.a.createElement(m.ExportCycleData,null),r.a.createElement(b.a,{color:"inherit",onClick:function(){return window.location.reload()}},r.a.createElement(v.a,null))),r.a.createElement("div",{className:e.toolbarCenter},r.a.createElement(p.a,{className:e.title,variant:"h6"},"".concat("28 Days"," v").concat("0.1.0"))),r.a.createElement("div",{className:e.toolbarRight},r.a.createElement(s.a,null)))),r.a.createElement("div",{className:e.main},r.a.createElement(W,null)))},G=n(298),F=n(319),K=function(){var e=Object(L.useTypedSelector)((function(e){return e.theme}));return a.createElement(G.a,{theme:e},a.createElement(F.a,null),a.createElement(H,null))},z=n(32),V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Y=Object(L.configureStore)(),$=function(){return r.a.createElement(z.a,{store:Y},r.a.createElement(g.DataProvider,null,r.a.createElement(K,null)))};o.a.render(r.a.createElement($,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/twenty-eight-days",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/twenty-eight-days","/service-worker.js");V?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):J(t,e)}))}}()},29:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"i",(function(){return f})),n.d(t,"g",(function(){return m})),n.d(t,"f",(function(){return b})),n.d(t,"h",(function(){return p})),n.d(t,"b",(function(){return y})),n.d(t,"a",(function(){return v})),n.d(t,"e",(function(){return h}));var a=n(2),r=n.n(a),c=n(4),o=n(115),i=n(51),u=function(e){return{type:o.a,authState:e}},l=function(){return u({type:"db-init-in-progress"})},s=function(e){return u({type:"db-init-failed",error:e})},d=function(e){return u({type:"login-form",state:e})},f=function(){return d({type:"login-form-idle"})},m=function(){return d({type:"login-form-submitted"})},b=function(e){return d({type:"login-form-error",error:e})},p=function(e){return u({type:"logged-in",user:e})},y=function(e){return"".concat(e.user.username,"-cycles-v1")},v=function(e,t){return Object(c.a)(r.a.mark((function n(){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=y(t),n.abrupt("return",i.a.insertItem({databaseName:a,itemId:"".concat(e),item:e}).then((function(){return console.log("DB insertItem successful")})).catch((function(e){console.error("DB insertItem failed "+e)})));case 2:case"end":return n.stop()}}),n)})))},h=function(e,t){return Object(c.a)(r.a.mark((function n(){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=y(t),n.abrupt("return",i.a.deleteItem({databaseName:a,itemId:e}).then((function(){return console.log("DB deleteItem successful")})).catch((function(e){console.error("DB deleteItem failed "+e)})));case 2:case"end":return n.stop()}}),n)})))}},36:function(e,t,n){"use strict";var a=n(98);n.d(t,"updateCycles",(function(){return a.b}));var r=n(149);n.d(t,"cycleReducer",(function(){return r.a}));var c=n(150);n.o(c,"CycleData")&&n.d(t,"CycleData",(function(){return c.CycleData})),n.o(c,"CycleStats")&&n.d(t,"CycleStats",(function(){return c.CycleStats})),n.o(c,"ExportCycleData")&&n.d(t,"ExportCycleData",(function(){return c.ExportCycleData})),n.o(c,"defaultCycleState")&&n.d(t,"defaultCycleState",(function(){return c.defaultCycleState}));var o=n(99);n.d(t,"defaultCycleState",(function(){return o.a}));var i=n(160);n.d(t,"CycleStats",(function(){return i.a}));var u=n(162);n.d(t,"CycleData",(function(){return u.a}));var l=n(165);n.d(t,"ExportCycleData",(function(){return l.a}))},37:function(e,t,n){"use strict";var a=n(151);n.o(a,"DataProvider")&&n.d(t,"DataProvider",(function(){return a.DataProvider})),n.o(a,"LoginForm")&&n.d(t,"LoginForm",(function(){return a.LoginForm})),n.o(a,"addStartDate")&&n.d(t,"addStartDate",(function(){return a.addStartDate})),n.o(a,"dbReducer")&&n.d(t,"dbReducer",(function(){return a.dbReducer})),n.o(a,"defaultDatabaseState")&&n.d(t,"defaultDatabaseState",(function(){return a.defaultDatabaseState})),n.o(a,"deleteStartDate")&&n.d(t,"deleteStartDate",(function(){return a.deleteStartDate}));var r=n(100);n.d(t,"defaultDatabaseState",(function(){return r.a}));var c=n(29);n.d(t,"addStartDate",(function(){return c.a})),n.d(t,"deleteStartDate",(function(){return c.e}));var o=n(156);n.d(t,"dbReducer",(function(){return o.a}));var i=n(163);n.d(t,"DataProvider",(function(){return i.a}));var u=n(164);n.d(t,"LoginForm",(function(){return u.a}))},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l}));var a=n(61),r=n(56),c="dd.MM.yyyy",o=function(e){return Object(a.a)(e,c)},i={locale:r.a},u=function(e){return Object(a.a)(e,"EEEE, MMMM dd",i)},l=function(e){return Object(a.a)(e,"MMMM dd",i)}},81:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return g}));var a=function(){return{type:"theme/TOGGLE_THEME"}},r=n(192),c=Object(r.a)({palette:{type:"light"}}),o=Object(r.a)({palette:{type:"dark"}}),i=c,u=n(0),l=n(170),s=n.n(l),d=n(169),f=n.n(d),m=n(324),b=n(54),p=n.n(b)()({root:{display:"grid",gridTemplateColumns:"auto 1fr auto",alignItems:"center"},icon:{margin:4}}),y=function(e){var t=e.theme,n=e.onToggleTheme,a=p(t);return u.createElement("div",{className:a.root},u.createElement(f.a,{className:a.icon}),u.createElement(m.a,{checked:t===o,onChange:n,color:"default"}),u.createElement(s.a,{className:a.icon}))},v=n(18),h=function(){var e=Object(v.useTypedSelector)((function(e){return e.theme})),t=Object(v.useTypedDispatch)();return u.createElement(y,{theme:e,onToggleTheme:function(){return t(a())}})},g=function(e,t){return"theme/TOGGLE_THEME"===t.type?"light"===e.palette.type?o:c:e}},98:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var a=n(173),r=n.n(a),c=n(107),o=n(61),i=function(e){return{type:c.a,cycles:e}},u=function(e){return function(){var t=new Blob([JSON.stringify(e)],{type:"text/json;charset=utf-8"}),n=Object(o.a)((new Date).valueOf(),"yyyyMMdd");r.a.saveAs(t,"cycle-data-".concat(n,".json"))}}},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={}}},[[211,1,2]]]);
//# sourceMappingURL=main.7f07505b.chunk.js.map