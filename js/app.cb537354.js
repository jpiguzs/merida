(function(e){function t(t){for(var n,o,i=t[0],c=t[1],s=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={1:0},a={1:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{2:"cdd5cdfc",3:"f6b0bf5e",4:"b2b394bf"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={2:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{2:"59606a64",3:"31d6cfe0",4:"31d6cfe0"}[e]+".css",a=c.p+n,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===n||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],d.parentNode.removeChild(d),r(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,0]),r()})({0:function(e,t,r){e.exports=r("2f39")},"2f39":function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"user",(function(){return P})),r.d(n,"loading",(function(){return S})),r.d(n,"isLoggedIn",(function(){return j})),r.d(n,"notifications",(function(){return O}));var o={};r.r(o),r.d(o,"auth_request",(function(){return I})),r.d(o,"auth_success",(function(){return L})),r.d(o,"auth_error",(function(){return E})),r.d(o,"log_out",(function(){return A})),r.d(o,"refresh",(function(){return C}));var a={};r.r(a),r.d(a,"login",(function(){return q})),r.d(a,"logout",(function(){return R}));var u=r("c973"),i=r.n(u),c=(r("96cf"),r("ac1f"),r("5319"),r("5c7d"),r("7d6e"),r("e54f"),r("985d"),r("31cd"),r("2b0e")),s=r("1f91"),l=r("42d2"),f=r("b05d"),d=r("2a19"),p=r("18d6"),h=r("f508");c["a"].use(f["a"],{config:{},lang:s["a"],iconSet:l["a"],plugins:{Notify:d["a"],LocalStorage:p["a"],Loading:h["a"]}});var g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},m=[],b={name:"App"},v=b,w=r("2877"),y=Object(w["a"])(v,g,m,!1,null,null,null),x=y.exports,k=r("2f62"),_=function(){return{isLoggedIn:!!p["a"].getItem("user"),token:localStorage.getItem("token")||"",loading:!1,status:"",user:p["a"].getItem("user")||null}};function P(e){return e.user}function S(e){return e.loading}function j(e){return e.isLoggedIn}function O(e){return e.notifications}r("a639");function I(e){e.loading=!0,e.state="succes"}function L(e,t){e.token=t.token,e.user=t.user,e.isLoggedIn=!0,p["a"].remove("user"),p["a"].set("user",t.user),e.loading=!1}function E(e){e.status="error",e.loading=!1}function A(e){e.isLoggedIn=!1,p["a"].clear(),e.token=null,e.user=null}function C(e,t){localStorage.setItem("token",t),axios.defaults.headers.common["Authorization"]="Bearer "+t,e.token=t}r("d3b7"),r("e6cf");function q(e,t){var r=e.commit;return new Promise((function(e,n){r("auth_request"),axios.post("auth/login",{email:t.email,password:t.password}).then((function(t){var n=t.data,o=n.token,a=n.user;localStorage.setItem("token",o),r("auth_success",{token:o,user:a}),e(t)})).catch((function(e){r("auth_error"),localStorage.removeItem("token"),n(e.response.data.mensaje)}))}))}function R(e,t){var r=e.commit;return new Promise((function(e,t){axios.post("auth/logout").then((function(t){p["a"].clear(),r("log_out"),e(t)})).catch((function(e){p["a"].clear(),t(e)}))}))}var T={namespaced:!0,state:_,getters:n,mutations:o,actions:a};c["a"].use(k["a"]);var N=function(){var e=new k["a"].Store({modules:{auth:T},strict:!1});return e},B=r("8c4f"),M=(r("e260"),r("3ca3"),r("ddb0"),[{path:"/",component:function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"713b"))},children:[{path:"",component:function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"8b24"))}}]},{path:"*",component:function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"e51e"))}}]),V=M;c["a"].use(B["a"]);var z=function(){var e=new B["a"]({scrollBehavior:function(e,t,r){return e.hash?{selector:e.hash}:{x:0,y:0}},routes:V,mode:"history",base:"/"});return e},D=function(){return J.apply(this,arguments)};function J(){return J=i()(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof N){e.next=6;break}return e.next=3,N({Vue:c["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=N;case 7:if(t=e.t0,"function"!==typeof z){e.next=14;break}return e.next=11,z({Vue:c["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=z;case 15:return r=e.t1,t.$router=r,n={router:r,store:t,render:function(e){return e(x)}},n.el="#q-app",e.abrupt("return",{app:n,store:t,router:r});case 20:case"end":return e.stop()}}),e)}))),J.apply(this,arguments)}var U=r("758b"),$="/";function F(){return H.apply(this,arguments)}function H(){return H=i()(regeneratorRuntime.mark((function e(){var t,r,n,o,a,u,i,s,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,r=t.app,n=t.store,o=t.router,a=!1,u=function(e){a=!0;var t=Object(e)===e?o.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),s=[U["default"]],l=0;case 11:if(!(!1===a&&l<s.length)){e.next=29;break}if("function"===typeof s[l]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,s[l]({app:r,router:o,store:n,Vue:c["a"],ssrContext:null,redirect:u,urlPath:i,publicPath:$});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:l++,e.next=11;break;case 29:if(!0!==a){e.next=31;break}return e.abrupt("return");case 31:new c["a"](r);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),H.apply(this,arguments)}F()},"31cd":function(e,t,r){},"758b":function(e,t,r){"use strict";(function(e){var t=r("c973"),n=r.n(t),o=(r("96cf"),r("bc3a")),a=r.n(o);e.axios=a.a,e.axios.defaults.baseURL="http://localhost:4000/api",e.axios.interceptors.request.use(function(){var e=n()(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="bearer "+localStorage.getItem("token"),t.headers.Authorization=r,e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}).call(this,r("c8ba"))}});