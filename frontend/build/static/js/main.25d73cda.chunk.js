(this.webpackJsonpakpl=this.webpackJsonpakpl||[]).push([[1],{109:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(29),l=n.n(o),c=n(21),i=n(2),s=n(60),u=n(12),m=n(17),d=n(62),f=n(32),p=n.n(f),E=function(e){Object(d.a)(e);var t=Object(a.useState)(),n=Object(m.a)(t,2),o=(n[0],n[1],Object(a.useState)(!1)),l=Object(m.a)(o,2),c=(l[0],l[1]),s=Object(a.useState)(!0),u=Object(m.a)(s,2),f=u[0],E=u[1],h=Object(a.useState)([]),b=Object(m.a)(h,2),j=b[0],y=b[1],v=Object(a.useState)("\uc774\ud6a8\ub9ac"),g=Object(m.a)(v,2),k=g[0],w=g[1];Object(i.E)((function(){O(k,f)}));var _=function(e){return(e*=100)<50?"secondary":e<60?"success":e<70?"warning":"danger"},O=function(e,t){var n=t?"1":"0";c(!0),p.a.get("http://akpl.ilkyu.kr:8080/find/"+e+"/100/"+n).then((function(e){return e.data})).then((function(e){y(e)})),c(!1)};return r.a.createElement("div",null,r.a.createElement(i.g,null,"\uc544\ub798\uc5d0 \uac80\uc0c9\ud560 \ud0a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud558\uc138\uc694"),r.a.createElement(i.n,{placeholder:"\uc774\ud6a8\ub9ac",onIonChange:function(e){O(e.detail.value,f),w(e.detail.value)}}),r.a.createElement(i.g,null,r.a.createElement(i.f,null,"\uc545\ud50c\ub9cc \ubcf4\uae30",r.a.createElement(i.u,{checked:f,onIonChange:function(e){var t;t=e.detail.checked,E(t),O(k,t)},color:"danger"}))),r.a.createElement(i.g,null,r.a.createElement(i.f,{button:!0,onClick:function(){return function(){var e=f?"1":"0";p()({url:"http://akpl.ilkyu.kr:8080/export/"+k+"/"+e,method:"GET",responseType:"blob"}).then((function(e){var t=e.headers["content-type"],n=window.URL.createObjectURL(new Blob([e.data],{type:t})),a=document.createElement("a");a.href=n,a.setAttribute("download","akpl_"+k+".xlsx"),document.body.appendChild(a),a.click()}))}()}},"\ub0b4\ubcf4\ub0b4\uae30 (.xlsx)")),r.a.createElement(i.i,null,j.map((function(e,t){return r.a.createElement(i.f,null,r.a.createElement(i.h,{className:"ion-text-wrap"},r.a.createElement(i.r,{color:_(e.prob)},r.a.createElement("h1",null,e.text)),r.a.createElement("p",null,"\uc791\uc131\uc790: ",e.commenter," | ",e.datetime),r.a.createElement("p",null,"\uc6d0\uae00: ",e.article_title," (",r.a.createElement("a",{target:"_blank",href:e.article_url},e.article_url),")")),r.a.createElement(i.r,{slot:"start",color:_(e.prob)},r.a.createElement("h1",null,Math.floor(100*e.prob),"%")))}))))},h=(n(95),function(){return r.a.createElement(i.k,null,r.a.createElement(i.d,null,r.a.createElement(i.v,null,r.a.createElement(i.t,null,"\ud0a4\uc6cc\ub4dc\ub85c \uc545\ud50c \ucc3e\uae30"))),r.a.createElement(i.c,{fullscreen:!0},r.a.createElement(i.d,{collapse:"condense"},r.a.createElement(i.v,null,r.a.createElement(i.t,{size:"large"},"\ud0a4\uc6cc\ub4dc\ub85c \uc545\ud50c \ucc3e\uae30"))),r.a.createElement(E,null)))}),b=(n(96),n(37)),j=function(e){e.name;var t=Object(a.useState)(),n=Object(m.a)(t,2),o=n[0],l=n[1],c=Object(a.useState)([{id:0,text:"\uc2f9\uc4f0\ub9ac \ub108\ubb34 \uc88b\uc544\uc694~",prob:5},{id:1,text:"\uc194\uc9c1\ud788 \uc2f9\uc4f0\ub9ac \uc548 \ub098\uc654\uc73c\uba74 \uc88b\uaca0\ub2e4",prob:63},{id:2,text:"\uc2f9\uc4f0\ub9ac \uc8fd\uc5b4\ub77c \ub178\ub798\ub3c4 \ubabb\ud558\ub294 \uac83\ub4e4\uc774 \uc5b4\ub514\uc11c BTS\ub97c \uc774\uae30\uaca0\ub2e4\uace0",prob:93}]),s=Object(m.a)(c,2),u=s[0],d=s[1],f=Object(a.useState)(!1),E=Object(m.a)(f,2),h=E[0],j=E[1];return r.a.createElement("div",null,r.a.createElement(i.f,null,r.a.createElement(i.h,{position:"stacked"},"\ud610\uc624 \ud45c\ud604\uc744 \uac80\uc0ac\ud560 \ubb38\uc7a5\uc744 \uc785\ub825\ud558\uc138\uc694"),r.a.createElement(i.s,{value:o,placeholder:"\uc2f9\uc4f0\ub9ac \ub108\ubb34 \uc88b\uc544\uc694~~",onIonChange:function(e){return l(e.detail.value)}})),r.a.createElement(i.b,{onClick:function(){0!=(null===o||void 0===o?void 0:o.length)&&(j(!0),p.a.get("http://akpl.ilkyu.kr:8080/predict/"+o).then((function(e){return e.data})).then((function(e){var t=e.prob,n={id:u.length,text:o,prob:Math.floor(100*t)};d([n].concat(Object(b.a)(u))),l(""),console.log(u)})),j(!1))},disabled:h,expand:"block"},"\ud610\uc624 \uac80\uc0ac"),r.a.createElement(i.g,null),r.a.createElement(i.j,{lines:"full"},r.a.createElement(i.h,null,r.a.createElement("h1",null,"\uac80\uc0ac \uae30\ub85d"))),r.a.createElement(i.i,null,u.map((function(e,t){return r.a.createElement(i.f,{key:t},r.a.createElement(i.h,{class:"sentence"},e.text),r.a.createElement(i.r,{slot:"start",color:(n=e.prob,n<50?"secondary":n<60?"success":n<70?"warning":"danger")},"\uc545\ud50c \ud655\ub960: ",e.prob,"%"));var n}))))},y=function(){return r.a.createElement(i.k,null,r.a.createElement(i.d,null,r.a.createElement(i.v,null,r.a.createElement(i.t,null,"\ud610\uc624 \ud45c\ud604 \uac80\uc0ac"))),r.a.createElement(i.c,{fullscreen:!0},r.a.createElement(i.d,{collapse:"condense"},r.a.createElement(i.v,null,r.a.createElement(i.t,{size:"large"},"\ud610\uc624 \ud45c\ud604 \uac80\uc0ac\uae30"))),r.a.createElement(j,{name:"\ud610\uc624 \ud45c\ud604 \uac80\ucd9c \ud14c\uc2a4\ud2b8"})))},v=(n(97),function(e){var t=e.name;return r.a.createElement("div",{className:"container"},r.a.createElement("strong",null,t),r.a.createElement("p",null,"Explore ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ionicframework.com/docs/components"},"UI Components")))}),g=(n(98),function(){return r.a.createElement(i.k,null,r.a.createElement(i.d,null,r.a.createElement(i.v,null,r.a.createElement(i.t,null,"Tab 3"))),r.a.createElement(i.c,{fullscreen:!0},r.a.createElement(i.d,{collapse:"condense"},r.a.createElement(i.v,null,r.a.createElement(i.t,{size:"large"},"Tab 3"))),r.a.createElement(v,{name:"Tab 3 page"})))}),k=(n(99),n(100),n(101),n(102),n(103),n(104),n(105),n(106),n(107),n(108),n(109),function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,null,r.a.createElement(i.q,null,r.a.createElement(i.m,null,r.a.createElement(c.a,{path:"/hatePredictService",component:h,exact:!0}),r.a.createElement(c.a,{path:"/findCommentsService",component:y,exact:!0}),r.a.createElement(c.a,{path:"/tab3",component:g}),r.a.createElement(c.a,{path:"/",component:h,exact:!0})),r.a.createElement(i.o,{slot:"bottom"},r.a.createElement(i.p,{tab:"tab1",href:"/hatePredictService"},r.a.createElement(i.e,{icon:u.p}),r.a.createElement(i.h,null,"\uc545\ud50c \uac80\uc0c9")),r.a.createElement(i.p,{tab:"tab2",href:"/findCommentsService"},r.a.createElement(i.e,{icon:u.h}),r.a.createElement(i.h,null,"\ud610\uc624 \ud45c\ud604 \uac80\uc0ac")),r.a.createElement(i.p,{tab:"tab3",href:"/tab3"},r.a.createElement(i.e,{icon:u.o}),r.a.createElement(i.h,null,"Tab 3"))))))}),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(k,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");w?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):_(t,e)}))}}()},66:function(e,t,n){e.exports=n(110)},72:function(e,t,n){var a={"./ion-action-sheet.entry.js":[112,5],"./ion-alert.entry.js":[113,6],"./ion-app_8.entry.js":[114,7],"./ion-avatar_3.entry.js":[115,18],"./ion-back-button.entry.js":[116,19],"./ion-backdrop.entry.js":[117,43],"./ion-button_2.entry.js":[118,20],"./ion-card_5.entry.js":[119,21],"./ion-checkbox.entry.js":[120,22],"./ion-chip.entry.js":[121,23],"./ion-col_3.entry.js":[122,44],"./ion-datetime_3.entry.js":[123,10],"./ion-fab_3.entry.js":[124,24],"./ion-img.entry.js":[125,45],"./ion-infinite-scroll_2.entry.js":[126,46],"./ion-input.entry.js":[127,25],"./ion-item-option_3.entry.js":[128,26],"./ion-item_8.entry.js":[129,27],"./ion-loading.entry.js":[130,28],"./ion-menu_3.entry.js":[131,29],"./ion-modal.entry.js":[132,8],"./ion-nav_2.entry.js":[133,15],"./ion-popover.entry.js":[134,9],"./ion-progress-bar.entry.js":[135,30],"./ion-radio_2.entry.js":[136,31],"./ion-range.entry.js":[137,32],"./ion-refresher_2.entry.js":[138,11],"./ion-reorder_2.entry.js":[139,17],"./ion-ripple-effect.entry.js":[140,47],"./ion-route_4.entry.js":[141,33],"./ion-searchbar.entry.js":[142,34],"./ion-segment_2.entry.js":[143,35],"./ion-select_3.entry.js":[144,36],"./ion-slide_2.entry.js":[145,48],"./ion-spinner.entry.js":[146,13],"./ion-split-pane.entry.js":[147,49],"./ion-tab-bar_2.entry.js":[148,37],"./ion-tab_2.entry.js":[149,16],"./ion-text.entry.js":[150,38],"./ion-textarea.entry.js":[151,39],"./ion-toast.entry.js":[152,40],"./ion-toggle.entry.js":[153,12],"./ion-virtual-scroll.entry.js":[154,50]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=72,e.exports=r},74:function(e,t,n){var a={"./ion-icon.entry.js":[158,57]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=74,e.exports=r},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[66,3,4]]]);
//# sourceMappingURL=main.25d73cda.chunk.js.map