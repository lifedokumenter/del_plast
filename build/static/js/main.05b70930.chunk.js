(this["webpackJsonplife-lca-fe"]=this["webpackJsonplife-lca-fe"]||[]).push([[0],{157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(57),c=a.n(r),i=(a(157),a(10)),s=(a(158),a(193)),o=a(200),d=a.p+"static/media/logo.0e9c2ec8.svg",u=(a(159),a(2)),m=function(e){var t=e.title;return Object(u.jsxs)("div",{className:"navbar",children:[Object(u.jsx)("img",{alt:"text",src:d}),t&&Object(u.jsx)(o.a,{size:"medium",children:t})]})},p=a(80),f=(a(166),a(202)),b=a(199),h=a(79),j=a(40),v=l.a.createContext({}),O=function(e){var t=e.children,a=l.a.useState([]),n=Object(i.a)(a,2),r=n[0],c=n[1],s=l.a.useState(null),o=Object(i.a)(s,2),d=o[0],m=o[1],p=l.a.useState([]),f=Object(i.a)(p,2),b=f[0],h=f[1],O=l.a.useState([]),g=Object(i.a)(O,2),x=g[0],y=g[1];return Object(u.jsx)(v.Provider,{value:{pChainChoices:r,togglePChainChoice:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=-1,n=Object(j.a)(r),l=0;l<n.length;l++)if(n[l].id===e.id){a=l;break}a>-1?n.splice(a,1):n.push(e),t||(n=n.filter((function(t){return t.id.split("_")[0]!==e.id.split("_")[0]||t.id===e.id}))),c(n);for(var i=[],s=0;s<n.length;s++)for(var o=0;o<x.length;o++)n[s].id===x[o].id1&&-1===i.indexOf(x[o].id2)?i.push(x[o].id2):n[s].id===x[o].id2&&-1===i.indexOf(x[o].id1)&&i.push(x[o].id1);h(i)},activePChainChoice:d,setActivePChainChoice:m,disabledPChainChoices:b,setDisabledPChainChoices:h,setMutuallyDisabledOptions:y,resetChoices:function(){c([]),m(null)}},children:t})};O.defaultProps={};var g=function(){return l.a.useContext(v)},x=a(198),y=a(194),E=(a(167),function(e){var t=e.co2,a=e.bio,n=e.economy,l=e.limits,r=void 0===l?{co2:.8,bio:.8,economy:.8}:l,c=e.co2Label,i=void 0===c?"":c,s=e.bioLabel,d=void 0===s?"":s,m=e.economyLabel,p=void 0===m?"":m,f=e.alertOnAboveLimit,h=void 0!==f&&f,j=e.alertMessage,v=void 0===j?"":j,O=function(e,t){return t*=100,void 0===e||e<=t&&e<33?"green":e<t?"yellow":"red"};return Object(u.jsxs)("div",{className:"progress-bars",children:[Object(u.jsxs)("div",{className:"progress-bars__bar",children:[Object(u.jsx)(o.a,{size:"medium",children:i}),Object(u.jsxs)(x.a,{percent:t,color:O(t,r.co2),children:[Object(u.jsx)("div",{className:"progress-bars__bar__limit",style:{width:100*r.co2+"%"}}),h&&(t||0)>100*r.co2&&Object(u.jsx)(y.a,{content:v,trigger:Object(u.jsx)(b.a,{color:"red",icon:"exclamation"})})]})]}),Object(u.jsxs)("div",{className:"progress-bars__bar",children:[Object(u.jsx)(o.a,{size:"medium",children:d}),Object(u.jsxs)(x.a,{percent:a,color:O(a,r.bio),children:[Object(u.jsx)("div",{className:"progress-bars__bar__limit",style:{width:100*r.bio+"%"}}),h&&(a||0)>100*r.bio&&Object(u.jsx)(y.a,{content:v,trigger:Object(u.jsx)(b.a,{color:"red",icon:"exclamation"})})]})]}),Object(u.jsxs)("div",{className:"progress-bars__bar",children:[Object(u.jsx)(o.a,{size:"medium",children:p}),Object(u.jsxs)(x.a,{percent:n,color:O(n,r.economy),children:[Object(u.jsx)("div",{className:"progress-bars__bar__limit",style:{width:100*r.economy+"%"}}),h&&(n||0)>100*r.economy&&Object(u.jsx)(y.a,{content:v,trigger:Object(u.jsx)(b.a,{color:"red",icon:"exclamation"})})]})]})]})}),w=a.p+"static/media/life_logo.d3ceb2a9.svg",_=a(201),C=a(195),N=a(192),S=l.a.createContext({}),P=function(e){var t=e.children,a=l.a.useState([]),n=Object(i.a)(a,2),r=n[0],c=n[1],s=l.a.useState([]),o=Object(i.a)(s,2),d=o[0],m=o[1];return Object(u.jsx)(S.Provider,{value:{messages:r,addPendingMessages:function(){var e=d[0],t=1e3*(Math.floor(3*Math.random())+1);c([].concat(Object(j.a)(r),[e]));var a=d.slice(1,d.length);setTimeout((function(){c([].concat(Object(j.a)(r),[e],Object(j.a)(a)))}),t)},pendingMessages:d,setPendingMessages:m},children:t})};P.defaultProps={};var M=function(){return l.a.useContext(S)};function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Z(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var L=n.createElement("defs",null,n.createElement("style",null,".cls-1{fill:none;}.cls-2{fill:#b3b2b3;}.cls-3{clip-path:url(#clip-path);}.cls-4{fill:#fff;}"),n.createElement("clipPath",{id:"clip-path"},n.createElement("rect",{id:"SVGID",className:"cls-1",width:62.22,height:61.2,rx:27.02}))),k=n.createElement("g",{id:"Layer_2","data-name":"Layer 2"},n.createElement("g",{id:"Screen_1_w_chat_files_download","data-name":"Screen 1 w chat files download"},n.createElement("rect",{className:"cls-2",width:62.22,height:61.2,rx:27.02}),n.createElement("g",{className:"cls-3"},n.createElement("path",{className:"cls-4",d:"M50.18,42.29c-1.69-1.63-6.23-1.44-8.39-2.53-1.2-.6-3.28-2.4-4.78-3.44a15.13,15.13,0,0,0,5.88-12.38c0-8-5.36-14.4-12-14.4S19,16,19,23.94a15.2,15.2,0,0,0,5.68,12.23c-1.47,1.2-3.38,3.15-4.53,3.75-1.95,1-6.31.71-7.88,2.18C8.39,45.7,8.91,55.93,8.91,61.2H53.3C53.3,56.08,53.91,45.88,50.18,42.29Z"}))));function H(e,t){var a=e.title,l=e.titleId,r=Z(e,["title","titleId"]);return n.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 62.22 61.2",ref:t,"aria-labelledby":l},r),a?n.createElement("title",{id:l},a):null,L,k)}var T=n.forwardRef(H);a.p;function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var D=n.createElement("defs",null,n.createElement("style",null,".cls-1{fill:#fff;}")),V=n.createElement("g",{id:"Layer_2","data-name":"Layer 2"},n.createElement("g",{id:"Screen_1_w_chat_files_download","data-name":"Screen 1 w chat files download"},n.createElement("path",{className:"cls-1",d:"M5.61.59A.81.81,0,0,0,4.56.05l-3,1.06a1.67,1.67,0,0,0-1,1.13c-.44,1.61-1.21,4.39.56,9.34C2.28,14.87,5.25,18,6.68,19.29a1.46,1.46,0,0,0,1.47.29l3.66-1.31a.79.79,0,0,0,.45-1.08l-1.62-2a1,1,0,0,0-1.19-.5L8,15.2a1.51,1.51,0,0,1-1.5-.26A12,12,0,0,1,3,10.51,12.29,12.29,0,0,1,2,6.14,1.39,1.39,0,0,1,3,5l2.3-.82A1,1,0,0,0,5.83,3Z"})));function z(e,t){var a=e.title,l=e.titleId,r=B(e,["title","titleId"]);return n.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12.33 19.66",ref:t,"aria-labelledby":l},r),a?n.createElement("title",{id:l},a):null,D,V)}var F=n.forwardRef(z);a.p;function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var W=n.createElement("defs",null,n.createElement("style",null,".cls-1{fill:#fff;}")),U=n.createElement("g",{id:"Layer_2","data-name":"Layer 2"},n.createElement("g",{id:"Screen_1_w_chat_files_download","data-name":"Screen 1 w chat files download"},n.createElement("path",{className:"cls-1",d:"M27.06,1.4l-6,3.9V3.68A3.69,3.69,0,0,0,17.39,0H3.68A3.68,3.68,0,0,0,0,3.68v8a3.68,3.68,0,0,0,3.68,3.68H17.39a3.69,3.69,0,0,0,3.69-3.68V9.17l6,3.82Z"})));function J(e,t){var a=e.title,l=e.titleId,r=G(e,["title","titleId"]);return n.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 27.06 15.35",ref:t,"aria-labelledby":l},r),a?n.createElement("title",{id:l},a):null,W,U)}var q=n.forwardRef(J);a.p;function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var Q=n.createElement("defs",null,n.createElement("style",null,".cls-1{fill:#fff;}")),Y=n.createElement("g",{id:"Layer_2","data-name":"Layer 2"},n.createElement("g",{id:"Screen_1_w_chat_files_download","data-name":"Screen 1 w chat files download"},n.createElement("rect",{className:"cls-1",width:3.68,height:3.68}),n.createElement("rect",{className:"cls-1",y:7.98,width:3.68,height:3.68}),n.createElement("rect",{className:"cls-1",y:15.97,width:3.68,height:3.68})));function $(e,t){var a=e.title,l=e.titleId,r=K(e,["title","titleId"]);return n.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 3.68 19.65",ref:t,"aria-labelledby":l},r),a?n.createElement("title",{id:l},a):null,Q,Y)}var ee=n.forwardRef($),te=(a.p,a(168),function(e){var t,a=e.title,n=(e.onSubmitted,M()),r=n.messages,c=n.addPendingMessages,s=n.pendingMessages,o=l.a.useState(null===s||void 0===s?void 0:s.find((function(e){return!0===e.isUser}))),d=Object(i.a)(o,2),m=d[0],p=d[1],f=l.a.useRef(null);return l.a.useEffect((function(){p(null===s||void 0===s?void 0:s.find((function(e){return!0===e.isUser})))}),[s]),l.a.useEffect((function(){!function(){var e;null===(e=f.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}()}),[r]),Object(u.jsx)("div",{className:"chat",children:Object(u.jsxs)(_.a,{className:"chat__wrapper",children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"chat__navbar",children:[Object(u.jsx)("p",{children:a}),Object(u.jsxs)("div",{className:"chat__navbar__icons",children:[Object(u.jsx)(F,{}),Object(u.jsx)(q,{}),Object(u.jsx)(ee,{})]})]}),Object(u.jsx)("div",{className:"chat__messages",children:r&&r.map((function(e,t){return Object(u.jsxs)("div",{ref:t===r.length-1?f:null,className:"chat__messages__message ".concat(e.isUser?"chat__messages__message--user":""),children:[Object(u.jsx)("div",{className:"chat__messages__message__user-icon",children:Object(u.jsx)(T,{})}),Object(u.jsxs)("div",{className:"chat__messages__message__bubble",children:[Object(u.jsx)("p",{children:e.initials}),Object(u.jsx)("p",{children:e.message})]})]},t)}))})]}),Object(u.jsxs)(C.a,{children:[Object(u.jsx)(N.a,{value:(null===m||void 0===m?void 0:m.message)||"",disabled:!0,placeholder:"Besked..."}),Object(u.jsx)(b.a,{className:(null===m||void 0===m||null===(t=m.message)||void 0===t?void 0:t.length)?"pulsate":"",primary:!0,icon:!0,onClick:function(){c()},children:Object(u.jsx)(h.a,{name:"angle right"})})]})]})})});te.defaultProps={onSubmitted:function(){}};var ae=te,ne=a(11),le=(a(169),a(170),a(197));function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ce(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var ie=n.createElement("defs",null,n.createElement("style",null,".cls-1{fill:#dbdedf;}")),se=n.createElement("g",{id:"Layer_2","data-name":"Layer 2"},n.createElement("g",{id:"Screen_1_w_chat","data-name":"Screen 1 w chat"},n.createElement("path",{className:"cls-1",d:"M50.43,46.28S34.09,60.49,34.09,77.43a16.34,16.34,0,1,0,32.67,0C66.76,60.49,50.43,46.28,50.43,46.28ZM51,88.19a2,2,0,0,1-1.9,1.35,2.09,2.09,0,0,1-.69-.12,16.42,16.42,0,0,1-9.84-9.67,2,2,0,1,1,3.79-1.43,12.36,12.36,0,0,0,7.42,7.28A2,2,0,0,1,51,88.19Z"}),n.createElement("path",{className:"cls-1",d:"M1.77,9.92h.59V29.64H52.27V9.92h.6a1.78,1.78,0,0,0,0-3.55H1.77a1.78,1.78,0,0,0,0,3.55Z"}),n.createElement("path",{className:"cls-1",d:"M44.9,1.77A1.77,1.77,0,0,0,43.13,0H33.82a1.77,1.77,0,0,0-1.77,1.77V4H44.9Z"}),n.createElement("path",{className:"cls-1",d:"M32,77.43c0-6.35,2.2-13.17,6.39-19.91H1.77a1.78,1.78,0,0,0,0,3.55h.59v22H1.77a1.77,1.77,0,1,0,0,3.54H34.43A18.33,18.33,0,0,1,32,77.43Z"}),n.createElement("path",{className:"cls-1",d:"M39.65,55.51l.88-1.25A61.59,61.59,0,0,1,49,44.67l1.4-1.21,1.39,1.21.45.41V35.49h.6a1.77,1.77,0,1,0,0-3.54H1.77a1.77,1.77,0,1,0,0,3.54h.59v20Z"})));function oe(e,t){var a=e.title,l=e.titleId,r=ce(e,["title","titleId"]);return n.createElement("svg",re({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 66.76 93.77",ref:t,"aria-labelledby":l},r),a?n.createElement("title",{id:l},a):null,ie,se)}var de=n.forwardRef(oe);a.p;function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function me(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var pe=n.createElement("defs",null,n.createElement("style",null,".cls-1{fill:#dbdedf;}")),fe=n.createElement("g",{id:"Layer_2","data-name":"Layer 2"},n.createElement("g",{id:"Screen_1_w_chat","data-name":"Screen 1 w chat"},n.createElement("path",{className:"cls-1",d:"M48.54,85.58a3.32,3.32,0,0,0-3.9-1.73A13.23,13.23,0,0,0,35,79.66a13,13,0,0,0-3.81.56,9.77,9.77,0,0,0-12.6.55,12.18,12.18,0,0,0-9.41,4.89A7,7,0,0,0,8,85.56,7.39,7.39,0,0,0,.63,93H53.2a5.35,5.35,0,0,0-4.66-7.37Z"}),n.createElement("path",{className:"cls-1",d:"M61.8,0S53.73,8.19,38,14.19c-16.29,6.46-15.94,21.7-9,34.1C30.37,39.61,38.76,29.05,46.89,24a.36.36,0,0,1,.48.15.38.38,0,0,1-.12.47,24.89,24.89,0,0,0-3.77,3.13,44.67,44.67,0,0,0-6.56,8.5,64.57,64.57,0,0,0-4.79,9.58c-.56,1.37-.92,2.42-1.21,3.27-.07.22-.11.34-.17.51h0A90,90,0,0,0,26.63,66,28.93,28.93,0,0,0,23,57.83l-.1-.17c-.26-.47-.57-1-1-1.78a37.55,37.55,0,0,0-3.75-5.07,25.93,25.93,0,0,0-4.67-4.27,14.07,14.07,0,0,0-2.5-1.44.22.22,0,0,1-.12-.26.21.21,0,0,1,.26-.14C16.31,46.8,22.25,52.08,23.9,57A19.2,19.2,0,0,0,25,53.06a12.64,12.64,0,0,0-9.78-15C5.51,36.21,0,32.27,0,32.27s1,16,6.5,23.3a11.59,11.59,0,0,0,15.34,3.22c2.36,4,3.89,6.83,4.23,14.7,0,1.42,0,2.86,0,4.37a9.26,9.26,0,0,1,1.49.24q0-.55,0-1.08h.05c0-1.31,0-2.5-.07-3.59.14-6.92,1.25-13.25,4.54-23.12a19.64,19.64,0,0,0,25.65-9.45C64.8,27,61.8,0,61.8,0Z"})));function be(e,t){var a=e.title,l=e.titleId,r=me(e,["title","titleId"]);return n.createElement("svg",ue({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 62.44 92.95",ref:t,"aria-labelledby":l},r),a?n.createElement("title",{id:l},a):null,pe,fe)}var he=n.forwardRef(be);a.p;function je(){return(je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ve(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var Oe=n.createElement("defs",null,n.createElement("style",null,".cls-1{fill:#dbdedf;}")),ge=n.createElement("g",{id:"Layer_2","data-name":"Layer 2"},n.createElement("g",{id:"Screen_1_w_chat","data-name":"Screen 1 w chat"},n.createElement("path",{className:"cls-1",d:"M11.65,20.72A34.42,34.42,0,0,1,20.16,12,34,34,0,0,1,34.41,6.18V0L52.17,10.25,34.41,20.5V15a25.12,25.12,0,0,0-9.24,4.09,25.66,25.66,0,0,0-8.52,10.3l-5-8.65Z"}),n.createElement("path",{className:"cls-1",d:"M20.72,68.24A34.26,34.26,0,0,1,6.18,45.48H0L10.25,27.73,20.5,45.48H15a25.57,25.57,0,0,0,14.4,17.76l-8.66,5Z"}),n.createElement("path",{className:"cls-1",d:"M68.24,59.17A34.33,34.33,0,0,1,45.48,73.72v6.17L27.73,69.64,45.48,59.39v5.52a25.32,25.32,0,0,0,9.66-4.39,25.65,25.65,0,0,0,8.11-10l5,8.64Z"}),n.createElement("path",{className:"cls-1",d:"M59.18,11.65a34.54,34.54,0,0,1,8.48,8.23,34.16,34.16,0,0,1,6.06,14.53h6.17L69.64,52.17,59.39,34.41h5.52A25.3,25.3,0,0,0,60.66,25a25.64,25.64,0,0,0-10.14-8.3l8.66-5Z"})));function xe(e,t){var a=e.title,l=e.titleId,r=ve(e,["title","titleId"]);return n.createElement("svg",je({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 79.89 79.89",ref:t,"aria-labelledby":l},r),a?n.createElement("title",{id:l},a):null,Oe,ge)}var ye=n.forwardRef(xe);a.p;function Ee(){return(Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function we(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var _e=n.createElement("defs",null,n.createElement("style",null,".cls-0{fill:#16c774;}.cls-3{fill:#fff;}")),Ce=n.createElement("g",{id:"Layer_2","data-name":"Layer 2"},n.createElement("g",{id:"Screen_1_w_chat","data-name":"Screen 1 w chat"},n.createElement("g",{id:"Group_35","data-name":"Group 35"},n.createElement("g",{id:"Group_34-2","data-name":"Group 34-2"},n.createElement("circle",{id:"Ellipse_46-2","data-name":"Ellipse 46-2",className:"cls-0",cx:35.73,cy:35.73,r:35.73})),n.createElement("g",{id:"Path_40","data-name":"Path 40"},n.createElement("polygon",{className:"cls-3",points:"31.66 51.46 18.18 38.6 22.89 33.69 31.55 41.95 48.52 24.99 53.33 29.8 31.66 51.46"})))));function Ne(e,t){var a=e.title,l=e.titleId,r=we(e,["title","titleId"]);return n.createElement("svg",Ee({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 71.45 71.45",ref:t,"aria-labelledby":l},r),a?n.createElement("title",{id:l},a):null,_e,Ce)}var Se=n.forwardRef(Ne),Pe=(a.p,function(e){var t=e.pChainOption,a=e.isDisabled,n=e.isSelected,l=e.onSelect,r=e.showDescription,c=e.size,i=null;return"oil"===t.iconType?i=Object(u.jsx)(de,{}):"bio"===t.iconType?i=Object(u.jsx)(he,{}):"recycle"===t.iconType&&(i=Object(u.jsx)(ye,{})),Object(u.jsxs)(le.a,{className:"p-chain-option-card ".concat(c," ").concat(a?"disabled":""),color:n?"green":void 0,onClick:function(){return a?null:l(t)},children:[Object(u.jsxs)(le.a.Content,{children:[Object(u.jsx)(le.a.Header,{content:t.title}),r&&Object(u.jsx)(le.a.Description,{content:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{dangerouslySetInnerHTML:{__html:t.description||""}}),i]})})]}),n&&Object(u.jsx)(Se,{className:"p-chain-option-card__selected-icon"})]},t.id)});Pe.defaultProps={pChainOption:{},isSelected:!1,onSelect:function(){},showDescription:!0,size:""};var Me=Pe,Ae=function(e){var t=e.title,a=e.PChainOptions,n=e.wrap,l=e.showDescription,r=e.size,c=e.multipleChoice,i=e.multipleChoicePerColumn,s=M().setPendingMessages,d=g(),m=d.activePChainChoice,p=d.setActivePChainChoice,f=d.togglePChainChoice,b=d.pChainChoices,h=d.disabledPChainChoices,j=function(e){s(e.chatMessages||[]),c?f(e,i):p(e)},v=function(e){return c?!!b.find((function(t){return t.id===e.id})):e.id===(null===m||void 0===m?void 0:m.id)};return Object(u.jsxs)("div",{className:"p-chain-column ".concat(n?"wrap":""),children:[t&&Object(u.jsx)(o.a,{size:"medium",children:t}),a.map((function(e){return Object(u.jsx)(Me,{pChainOption:e,onSelect:j,showDescription:l,isSelected:v(e),size:r,isDisabled:h.indexOf(e.id)>-1},e.id)}))]})};Ae.defaultProps={title:void 0,PChainOptions:[],showDescription:!0};var Ze=Ae,Le=(a(171),function(e){var t=e.step,a=e.multipleChoice,n=e.appData,l="material";2===t?l="production":3===t?l="transport":4===t?l="usage":5===t?l="disposal":6===t&&(l="all");var r=function(e){return n[e].reduce((function(e,t){return[].concat(Object(j.a)(e),Object(j.a)(t.subCategories||[]))}),[])},c=[];return c="all"===l?[{id:"material",subCategories:r("material"),title:null===n||void 0===n?void 0:n.steps[t].columnTitles.material},{id:"production",subCategories:r("production"),title:null===n||void 0===n?void 0:n.steps[t].columnTitles.production},{id:"transport",subCategories:r("transport"),title:null===n||void 0===n?void 0:n.steps[t].columnTitles.transport},{id:"usage",subCategories:r("usage"),title:null===n||void 0===n?void 0:n.steps[t].columnTitles.usage},{id:"disposal",subCategories:r("disposal"),title:null===n||void 0===n?void 0:n.steps[t].columnTitles.disposal}]:n[l],Object(u.jsxs)("div",{className:"p-chain-step p-chain-step__".concat(t),children:[Object(u.jsx)(o.a,{size:"large",children:null===n||void 0===n?void 0:n.steps[t||1].title}),Object(u.jsx)("div",{className:"p-chain-step__columns",children:c.map((function(e){return Object(u.jsx)(Ze,{multipleChoicePerColumn:"disposal"===e.id,PChainOptions:e.subCategories||[],wrap:1===c.length,showDescription:"all"!==l,size:"all"===l?"small":"",multipleChoice:a,title:"all"===l?e.title:void 0},e.id)}))})]})});Le.defaultProps={step:1};var ke=Le,He=a(196),Te=(a(172),function(e){var t=e.title,a=e.description,n=e.cancelBtnText,r=e.submitBtnText,c=e.feedbackOptions,s=e.open,d=e.onSubmit,m=e.onCancel,p=e.size,f=e.approvedBtnText,h=e.approvedDescription,j=l.a.useState([]),v=Object(i.a)(j,2),O=v[0],x=v[1],y=g().pChainChoices,E=l.a.useState(!1),w=Object(i.a)(E,2),_=w[0],C=w[1];return l.a.useEffect((function(){if(s){var e=y.map((function(e){return e.id})),t=[];null===c||void 0===c||c.forEach((function(a){e.indexOf(a.id1)>-1&&e.indexOf(a.id2)>-1&&t.push(a)})),x(t)}}),[c,y,s]),Object(u.jsxs)(He.a,{className:"feedback-modal",size:p,open:s,onClose:m,children:[Object(u.jsx)(He.a.Header,{children:t}),Object(u.jsxs)(He.a.Content,{children:[Object(u.jsxs)(o.a,{className:"feedback-modal__description",size:"medium",children:[" ",_?h:a]}),!_&&O.map((function(e,t){return Object(u.jsxs)("div",{className:"feedback-modal__feedback",children:[Object(u.jsxs)(o.a,{size:"medium",children:[t+1,". ",e.title]}),Object(u.jsx)("p",{children:e.description})]},e.id1+"_"+e.id2)}))]}),Object(u.jsxs)(He.a.Actions,{children:[!_&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b.a,{secondary:!0,onClick:function(){return m()},children:n}),Object(u.jsx)(b.a,{positive:!0,onClick:function(){return C(!0)},children:r})]}),_&&Object(u.jsx)(b.a,{positive:!0,onClick:function(){C(!1),d()},children:f})]})]})});Te.defaultProps={title:"Feedback modal title",despription:"Feedback modal description",cancelBtnText:"Cancel",submitBtnText:"Submit",feedback:[],isOpen:!1,onSubmit:function(){},onCancel:function(){},size:"small"};var Ie=Te;function Be(){return(Be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function De(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var Ve=n.createElement("defs",null,n.createElement("style",null,".email-top-1{fill:#00c0f3;}.email-top-2,.email-top-6{fill:#fff;}.email-top-3{fill:#f5f5f5;}.email-top-4{fill:#adadad;}.email-top-5{fill:#e0e0e0;}.email-top-6{font-size:29.05px;font-family:Corbel;}")),ze=n.createElement("g",{id:"Layer_2","data-name":"Layer 2"},n.createElement("g",{id:"Overlayer_e-mail","data-name":"Overlayer e-mail"},n.createElement("path",{className:"email-top-1",d:"M18,0H1073.13a18,18,0,0,1,18,18V58.6a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V18A18,18,0,0,1,18,0Z"}),n.createElement("path",{className:"email-top-2",d:"M1011.19,29.3a5.37,5.37,0,1,1-5.37-5.37A5.37,5.37,0,0,1,1011.19,29.3Z"}),n.createElement("path",{className:"email-top-2",d:"M1037.71,29.3a5.37,5.37,0,1,1-5.37-5.37A5.37,5.37,0,0,1,1037.71,29.3Z"}),n.createElement("path",{className:"email-top-2",d:"M1064.13,28.25a5.37,5.37,0,1,1-4.22-4.22A5.38,5.38,0,0,1,1064.13,28.25Z"}),n.createElement("rect",{className:"email-top-3",y:58.59,width:1091.14,height:68.34}),n.createElement("path",{className:"email-top-4",d:"M1060.42,85.94h-18.69a1,1,0,1,1,0-1.93h18.69a1,1,0,0,1,0,1.93Z"}),n.createElement("path",{className:"email-top-4",d:"M1060.42,93.73h-18.69a1,1,0,1,1,0-1.93h18.69a1,1,0,0,1,0,1.93Z"}),n.createElement("path",{className:"email-top-4",d:"M1060.42,101.53h-18.69a1,1,0,0,1,0-1.94h18.69a1,1,0,0,1,0,1.94Z"}),n.createElement("path",{className:"email-top-4",d:"M62.11,102.06a1.05,1.05,0,0,1-.77-.32,1.1,1.1,0,0,1,0-1.54L67.56,94l-6.22-6.22a1.1,1.1,0,0,1,0-1.54,1.08,1.08,0,0,1,1.54,0L70.64,94l-7.76,7.75A1.05,1.05,0,0,1,62.11,102.06Z"}),n.createElement("path",{className:"email-top-4",d:"M69.1,95.07H51.82a1.09,1.09,0,0,1,0-2.17H69.1a1.09,1.09,0,1,1,0,2.17Z"}),n.createElement("path",{className:"email-top-4",d:"M27.6,102.06a1.07,1.07,0,0,1-.77-.32L19.08,94l7.75-7.76a1.09,1.09,0,1,1,1.54,1.54L22.15,94l6.22,6.21a1.08,1.08,0,0,1,0,1.54A1.05,1.05,0,0,1,27.6,102.06Z"}),n.createElement("path",{className:"email-top-4",d:"M37.89,95.07H20.62a1.09,1.09,0,1,1,0-2.17H37.89a1.09,1.09,0,1,1,0,2.17Z"}),n.createElement("path",{className:"email-top-4",d:"M97.66,103.06A9.08,9.08,0,1,1,106.74,94a1.09,1.09,0,0,1-2.18,0,6.9,6.9,0,1,0-6.9,6.89,7,7,0,0,0,2.36-.41,1.09,1.09,0,0,1,.74,2A9,9,0,0,1,97.66,103.06Z"}),n.createElement("path",{className:"email-top-4",d:"M108.27,94l-2.48,3.52a.17.17,0,0,1-.28,0L103,94a.18.18,0,0,1,.15-.27h5A.17.17,0,0,1,108.27,94Z"}),n.createElement("path",{className:"email-top-2",d:"M994.82,108.72H154a16,16,0,0,1-16-16h0a16,16,0,0,1,16-16H994.82a16,16,0,0,1,16,16h0A16,16,0,0,1,994.82,108.72Z"}),n.createElement("path",{className:"email-top-5",d:"M996.86,101.47l-5.69-3-5.69,3,1.09-6.33L982,90.65l6.36-.93L991.17,84,994,89.72l6.36.93-4.6,4.49Zm-5.69-4.75,3.62,1.91-.69-4L997,91.73l-4-.58-1.81-3.67-1.81,3.67-4.05.58,2.93,2.86-.69,4Z"}),n.createElement("text",{className:"email-top-6",transform:"translate(96.7 40.2)"},"Ny email"),n.createElement("path",{className:"email-top-2",d:"M59,30.88,42.16,18.74a3,3,0,0,1,.8-.11H73.79a2.87,2.87,0,0,1,1.58.47ZM76.53,20.7,59.05,33.32l0,0,0,0L41.79,20.92,40.52,20l-.1-.08H27a1.29,1.29,0,0,0-1.28,1.28v.54A1.28,1.28,0,0,0,27,23H41.59a1.29,1.29,0,0,1,1.28,1.28v.55a1.28,1.28,0,0,1-1.28,1.27H35.72a1.28,1.28,0,0,0-1.27,1.28V28a1.28,1.28,0,0,0,1.27,1.28H47.08a1.28,1.28,0,0,1,1.28,1.28v.54a1.28,1.28,0,0,1-1.28,1.28H30a1.28,1.28,0,0,0-1.28,1.28v.54A1.28,1.28,0,0,0,30,35.43h23.1a1.28,1.28,0,0,1,1.28,1.28v.54a1.29,1.29,0,0,1-1.28,1.28H35.28A1.28,1.28,0,0,0,34,39.81v.54a1.28,1.28,0,0,0,1.28,1.28H73.79a2.83,2.83,0,0,0,2.84-2.79V21.42A2.84,2.84,0,0,0,76.53,20.7Zm-53.27-.78a1.56,1.56,0,1,0,1.55,1.55A1.56,1.56,0,0,0,23.26,19.92Zm10.25,7.75A1.55,1.55,0,1,0,32,29.22,1.54,1.54,0,0,0,33.51,27.67Zm-7.25,4.66a1.55,1.55,0,1,0,1.55,1.55A1.55,1.55,0,0,0,26.26,32.33Zm5.26,6.2a1.55,1.55,0,1,0,1.55,1.55A1.54,1.54,0,0,0,31.52,38.53Z"})));function Fe(e,t){var a=e.title,l=e.titleId,r=De(e,["title","titleId"]);return n.createElement("svg",Be({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1091.14 126.94",ref:t,"aria-labelledby":l},r),a?n.createElement("title",{id:l},a):null,Ve,ze)}var Re=n.forwardRef(Fe);a.p;function Ge(){return(Ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function We(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var Ue=n.createElement("defs",null,n.createElement("style",null,".email-footer-icons-1{fill:#adadad;}.email-footer-icons-2{fill:#e0e0e0;}")),Je=n.createElement("g",{id:"Layer_2","data-name":"Layer 2"},n.createElement("g",{id:"Overlayer_e-mail","data-name":"Overlayer e-mail"},n.createElement("path",{className:"email-footer-icons-1",d:"M122,8.3V36.46h28.16V8.3ZM149.1,35.44H123V9.33H149.1Z"}),n.createElement("polygon",{className:"email-footer-icons-1",points:"147.13 28.45 147.13 33.51 128.97 33.51 134.6 27.38 140.06 20.96 147.13 28.45"}),n.createElement("polygon",{className:"email-footer-icons-1",points:"137.57 30.01 137.57 33.51 124.95 33.51 124.95 31.18 130.49 23.73 134.6 27.38 137.57 30.01"}),n.createElement("path",{className:"email-footer-icons-1",d:"M92.5,36.62a6.69,6.69,0,0,1-6.68-6.69V13.37a5.23,5.23,0,1,1,10.45,0v15a3.73,3.73,0,1,1-7.46,0V15.88a.59.59,0,1,1,1.18,0V28.41a2.55,2.55,0,1,0,5.1,0v-15a4,4,0,1,0-8.09,0V29.93a5.5,5.5,0,0,0,5.5,5.51A5.51,5.51,0,0,0,98,29.93v-14a.59.59,0,0,1,.59-.59.6.6,0,0,1,.59.59V29.93A6.69,6.69,0,0,1,92.5,36.62Z"}),n.createElement("path",{className:"email-footer-icons-1",d:"M187.12,36.46A14.08,14.08,0,1,1,201.2,22.38,14.09,14.09,0,0,1,187.12,36.46Zm0-26.9a12.82,12.82,0,1,0,12.82,12.82A12.84,12.84,0,0,0,187.12,9.56Z"}),n.createElement("path",{className:"email-footer-icons-1",d:"M191.29,28.56a4.18,4.18,0,1,1-8.35,0Z"}),n.createElement("path",{className:"email-footer-icons-1",d:"M193.26,19.15a1.43,1.43,0,1,1-1.43-1.42A1.43,1.43,0,0,1,193.26,19.15Z"}),n.createElement("path",{className:"email-footer-icons-1",d:"M183.83,19.15a1.43,1.43,0,1,1-1.43-1.42A1.43,1.43,0,0,1,183.83,19.15Z"}),n.createElement("path",{className:"email-footer-icons-1",d:"M234.63,29.33a10.52,10.52,0,1,1,10.52-10.51A10.52,10.52,0,0,1,234.63,29.33Zm0-19.68a9.17,9.17,0,1,0,9.16,9.17A9.17,9.17,0,0,0,234.63,9.65Z"}),n.createElement("path",{className:"email-footer-icons-1",d:"M249.85,35.69a1.11,1.11,0,0,1-.79-.33l-8.05-8a1.14,1.14,0,0,1-.33-.8,1.13,1.13,0,0,1,1.12-1.12,1.15,1.15,0,0,1,.8.33l8,8a1.13,1.13,0,0,1-.79,1.92Z"}),n.createElement("path",{className:"email-footer-icons-2",d:"M34.64,44.76a1.22,1.22,0,0,1-1.22-1.21V1.22a1.22,1.22,0,1,1,2.44,0V43.55A1.22,1.22,0,0,1,34.64,44.76Z"}),n.createElement("path",{className:"email-footer-icons-1",d:"M13.1,18.64l-6,7.85a.66.66,0,0,1-1,0L.14,18.64a.66.66,0,0,1,.52-1.06H12.58A.66.66,0,0,1,13.1,18.64Z"})));function qe(e,t){var a=e.title,l=e.titleId,r=We(e,["title","titleId"]);return n.createElement("svg",Ge({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 250.97 44.76",ref:t,"aria-labelledby":l},r),a?n.createElement("title",{id:l},a):null,Ue,Je)}var Xe=n.forwardRef(qe);a.p,a(173);function Ke(e){var t=e.buttonText,a=e.choice,n=(e.header,e.feedback),r=e.open,c=e.email,s=e.subject,o=e.onClose,d=void 0===o?function(){}:o,m=l.a.useState(!1),p=Object(i.a)(m,2),f=p[0],h=p[1];return Object(u.jsxs)(He.a,{onClose:function(){h(!1),d()},open:r,className:"to-director-modal",children:[Object(u.jsxs)(He.a.Content,{children:[Object(u.jsx)(He.a.Header,{children:Object(u.jsx)(Re,{className:"to-director-modal__email_navbar"})}),Object(u.jsxs)(He.a.Description,{children:[!1===f&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"to-director-modal__fields",children:[Object(u.jsxs)("div",{className:"to-director-modal__fields__input",children:[Object(u.jsx)("p",{children:"Til"}),Object(u.jsx)("p",{children:c})]}),Object(u.jsxs)("div",{className:"to-director-modal__fields__input",children:[Object(u.jsx)("p",{children:"Emne"}),Object(u.jsx)("p",{className:"to-director-modal__fields__input__subject",children:"".concat(s," ").concat(a)})]})]}),Object(u.jsx)(C.a,{children:Object(u.jsx)(N.a,{placeholder:"Besked..."})})]}),f&&Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("p",{children:['"',n,'"']})})]})]}),Object(u.jsxs)(He.a.Actions,{children:[Object(u.jsx)(Xe,{className:"to-director-modal__email-footer-icons"}),!1===f&&Object(u.jsx)(b.a,{content:t,onClick:function(){return h(!0)},color:"blue"}),f&&Object(u.jsx)(b.a,{onClick:function(){h(!1),d()},color:"blue",children:"Luk"})]})]})}Ke.defaultProps={open:!1,onClose:function(){}};var Qe=Ke,Ye=function(e){var t,a,r,c=e.appData,s=g(),o=s.activePChainChoice,d=s.pChainChoices,m=s.setMutuallyDisabledOptions,j=s.resetChoices,v=Object(ne.f)().stepNo,O=l.a.useState(),x=Object(i.a)(O,2),y=x[0],_=x[1],C=l.a.useState(!1),N=Object(i.a)(C,2),S=N[0],P=N[1],M=l.a.useState(),A=Object(i.a)(M,2),Z=A[0],L=A[1],k=l.a.useState(!1),H=Object(i.a)(k,2),T=H[0],I=H[1],B=l.a.useState(!1),D=Object(i.a)(B,2),V=D[0],z=D[1];Object(n.useEffect)((function(){var e=v?parseInt(v):1;e!==y&&(_(e),L(6===e||5===e),j())}),[v,y,j]),Object(n.useEffect)((function(){m((null===c||void 0===c?void 0:c.mutuallyDisabledOptions)||[])}),[c,m]);var F=l.a.useState((null===o||void 0===o?void 0:o.metadata)||{co2Score:0,bioScore:0,economyScore:0}),R=Object(i.a)(F,2),G=R[0],W=R[1];return Object(n.useEffect)((function(){var e=(null===o||void 0===o?void 0:o.metadata)||{co2Score:0,bioScore:0,economyScore:0};if(Z&&(null===d||void 0===d?void 0:d.length)){var t={material:[],production:[],transport:[],usage:[],disposal:[]};d.forEach((function(a){c.interactions.filter((function(e){return e.id1===a.id||e.id2===a.id})).forEach((function(t){var n=t.id1===a.id?t.id2:t.id1;d.find((function(e){return e.id===n}))&&(e.co2Score+=t.scores.co2/2,e.bioScore+=t.scores.bio/2,e.economyScore+=t.scores.economy/2)})),"material"===a.id.substring(0,8)&&t.material.push(Object(p.a)({},a)),"production"===a.id.substring(0,10)&&t.production.push(Object(p.a)({},a)),"transport"===a.id.substring(0,9)&&t.transport.push(Object(p.a)({},a)),"usage"===a.id.substring(0,5)&&t.usage.push(Object(p.a)({},a)),"disposal"===a.id.substring(0,8)&&t.disposal.push(Object(p.a)({},a))}));var a=!0;Object.keys(t).forEach((function(n){var l=t[n];0===l.length&&(a=!1),l.forEach((function(t){var a,r,i;e.co2Score+=((null===(a=t.metadata)||void 0===a?void 0:a.co2Score)||0)*c.scoreWeights.co2[n]/l.length,e.bioScore+=((null===(r=t.metadata)||void 0===r?void 0:r.bioScore)||0)*c.scoreWeights.bio[n]/l.length,e.economyScore+=((null===(i=t.metadata)||void 0===i?void 0:i.economyScore)||0)*c.scoreWeights.economy[n]/l.length}))})),I(a)}W(e)}),[Z,o,d,c.scoreWeights,c.interactions]),Object(u.jsx)(f.a,{columns:2,stackable:!0,children:Object(u.jsxs)(f.a.Row,{children:[Object(u.jsx)(f.a.Column,{floated:"left",width:6===y?16:12,children:!!c&&Object(u.jsxs)("div",{className:"landing",children:[Object(u.jsxs)("div",{className:"landing__content",children:[Object(u.jsx)(ke,{step:y,appData:c,multipleChoice:Z},y),Object(u.jsx)(Ie,{feedbackOptions:c.feedback,title:c.feedbackText.title,description:c.feedbackText.description,cancelBtnText:c.feedbackText.cancelBtnText,submitBtnText:c.feedbackText.submitBtnText,approvedBtnText:c.feedbackText.approvedBtnText,approvedDescription:c.feedbackText.approvedDescription,open:S,onSubmit:function(){P(!1)},onCancel:function(){return P(!1)}}),Object(u.jsx)(Qe,{buttonText:c.bossEmailTexts.sendBtnText,choice:c.bossEmailTexts.choices[v||"1"],feedback:c.bossEmailTexts.thanksForMessage,email:c.bossEmailTexts.email,subject:c.bossEmailTexts.subject,open:V,onClose:function(){return z(!1)}})]}),Object(u.jsx)(E,{co2:G.co2Score,bio:G.bioScore,economy:G.economyScore,co2Label:null===c||void 0===c||null===(t=c.medatadataHeaders)||void 0===t?void 0:t.co2,bioLabel:null===c||void 0===c||null===(a=c.medatadataHeaders)||void 0===a?void 0:a.bio,economyLabel:null===c||void 0===c||null===(r=c.medatadataHeaders)||void 0===r?void 0:r.economy,limits:null===c||void 0===c?void 0:c.scoreLimits,alertOnAboveLimit:5===y||6===y,alertMessage:null===c||void 0===c?void 0:c.aboveLimit}),Object(u.jsxs)("div",{className:"landing__content__footer",children:[Object(u.jsx)("img",{alt:"text",src:w}),Object(u.jsxs)(b.a,{size:"huge",primary:!0,onClick:function(){Z?P(!0):(console.log("submitted with activePChainChoice",o),z(!0))},disabled:Z?!T:!o,children:[c.steps[y||1].buttonText,Object(u.jsx)(h.a,{name:"chevron right"})]})]})]})}),6!==y&&Object(u.jsx)(f.a.Column,{floated:"right",width:4,children:Object(u.jsx)(ae,{title:c.chat.title})})]})})},$e=a(140);var et=function(){var e=l.a.useState(),t=Object(i.a)(e,2),a=t[0],n=t[1];return l.a.useEffect((function(){fetch("".concat("/","data/appData.json")).then((function(e){return e.json()})).then((function(e){n(e)}))}),[]),Object(u.jsxs)("div",{className:"App",children:[!a&&Object(u.jsx)(s.a,{}),a&&Object(u.jsx)($e.a,{children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{title:null===a||void 0===a?void 0:a.pageTitle}),Object(u.jsxs)(ne.c,{children:[Object(u.jsx)(ne.a,{exact:!0,path:"/",children:Object(u.jsx)(Ye,{appData:a})}),Object(u.jsx)(ne.a,{path:"/step/:stepNo",children:Object(u.jsx)(Ye,{appData:a})})]})]})})]})},tt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,204)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)}))};a(175);c.a.render(Object(u.jsx)(l.a.StrictMode,{children:Object(u.jsx)(P,{children:Object(u.jsx)(O,{children:Object(u.jsx)(et,{})})})}),document.getElementById("root")),tt()}},[[176,1,2]]]);
//# sourceMappingURL=main.05b70930.chunk.js.map