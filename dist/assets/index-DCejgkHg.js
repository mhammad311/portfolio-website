import{r as j,a as Xt,R as T,L,u as pt,b as ut,c as Kt,d as Zt,e as U,B as er}from"./vendor-BDP21L68.js";import{m as a,A as W}from"./animation-BYt67MhS.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}})();var ht={exports:{}},we={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tr=j,rr=Symbol.for("react.element"),nr=Symbol.for("react.fragment"),ar=Object.prototype.hasOwnProperty,ir=tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sr={key:!0,ref:!0,__self:!0,__source:!0};function xt(t,n,r){var o,i={},l=null,s=null;r!==void 0&&(l=""+r),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(s=n.ref);for(o in n)ar.call(n,o)&&!sr.hasOwnProperty(o)&&(i[o]=n[o]);if(t&&t.defaultProps)for(o in n=t.defaultProps,n)i[o]===void 0&&(i[o]=n[o]);return{$$typeof:rr,type:t,key:l,ref:s,props:i,_owner:ir.current}}we.Fragment=nr;we.jsx=xt;we.jsxs=xt;ht.exports=we;var e=ht.exports,Re={},Je=Xt;Re.createRoot=Je.createRoot,Re.hydrateRoot=Je.hydrateRoot;var gt={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Qe=T.createContext&&T.createContext(gt),ee=function(){return ee=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ee.apply(this,arguments)},or=function(t,n){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(t);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(r[o[i]]=t[o[i]]);return r};function ft(t){return t&&t.map(function(n,r){return T.createElement(n.tag,ee({key:r},n.attr),ft(n.child))})}function m(t){return function(n){return T.createElement(lr,ee({attr:ee({},t.attr)},n),ft(t.child))}}function lr(t){var n=function(r){var o=t.attr,i=t.size,l=t.title,s=or(t,["attr","size","title"]),u=i||r.size||"1em",c;return r.className&&(c=r.className),t.className&&(c=(c?c+" ":"")+t.className),T.createElement("svg",ee({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,s,{className:c,style:ee(ee({color:t.color||r.color},r.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&T.createElement("title",null,l),t.children)};return Qe!==void 0?T.createElement(Qe.Consumer,null,function(r){return n(r)}):n(gt)}function $e(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"}}]})(t)}function le(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"}},{tag:"polyline",attr:{points:"12 19 5 12 12 5"}}]})(t)}function te(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}},{tag:"polyline",attr:{points:"12 5 19 12 12 19"}}]})(t)}function cr(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"}},{tag:"polyline",attr:{points:"5 12 12 5 19 12"}}]})(t)}function dr(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"}},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"}}]})(t)}function ye(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}}]})(t)}function mr(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"}},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"}}]})(t)}function bt(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}}]})(t)}function ce(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(t)}function yt(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"}}]})(t)}function me(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"}}]})(t)}function pr(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(t)}function vt(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"}}]})(t)}function he(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"}}]})(t)}function re(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polyline",attr:{points:"12 6 12 12 16 14"}}]})(t)}function jt(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}}]})(t)}function O(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"}},{tag:"polyline",attr:{points:"8 6 2 12 8 18"}}]})(t)}function ur(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}},{tag:"line",attr:{x1:"12",y1:"22",x2:"12",y2:"15.5"}},{tag:"polyline",attr:{points:"22 8.5 12 15.5 2 8.5"}},{tag:"polyline",attr:{points:"2 15.5 12 8.5 22 15.5"}},{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"8.5"}}]})(t)}function wt(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}}]})(t)}function Nt(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"}},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"}},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"}},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"}},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"}},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"}},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"}},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"}},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"}},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"}}]})(t)}function hr(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"}},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"}}]})(t)}function xr(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"23"}},{tag:"path",attr:{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}}]})(t)}function De(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"polyline",attr:{points:"7 10 12 15 17 10"}},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"}}]})(t)}function kt(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}},{tag:"polyline",attr:{points:"15 3 21 3 21 9"}},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"}}]})(t)}function gr(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}}]})(t)}function fr(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}},{tag:"polyline",attr:{points:"14 2 14 8 20 8"}},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"}},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"}},{tag:"polyline",attr:{points:"10 9 9 9 8 9"}}]})(t)}function St(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}}]})(t)}function _e(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}}]})(t)}function ne(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"}},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"}}]})(t)}function We(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"}},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"}},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"}},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"}}]})(t)}function br(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}}]})(t)}function yr(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"}}]})(t)}function vr(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"}}]})(t)}function jr(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}},{tag:"line",attr:{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"}}]})(t)}function Ne(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"}},{tag:"polyline",attr:{points:"2 17 12 22 22 17"}},{tag:"polyline",attr:{points:"2 12 12 17 22 12"}}]})(t)}function Ct(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"3",y1:"9",x2:"21",y2:"9"}},{tag:"line",attr:{x1:"9",y1:"21",x2:"9",y2:"9"}}]})(t)}function Pt(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"}},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"}}]})(t)}function ke(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"}}]})(t)}function X(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(t)}function Ve(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"}}]})(t)}function wr(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(t)}function Se(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}}]})(t)}function zt(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"8",y1:"21",x2:"16",y2:"21"}},{tag:"line",attr:{x1:"12",y1:"17",x2:"12",y2:"21"}}]})(t)}function Tt(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 19l7-7 3 3-7 7-3-3z"}},{tag:"path",attr:{d:"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"}},{tag:"path",attr:{d:"M2 2l7.586 7.586"}},{tag:"circle",attr:{cx:"11",cy:"11",r:"2"}}]})(t)}function ue(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(t)}function Nr(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(t)}function Ee(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"}},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"}}]})(t)}function At(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"}},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"}},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"}}]})(t)}function kr(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}}]})(t)}function Sr(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"}},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"}},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"}},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"}}]})(t)}function Oe(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}}]})(t)}function qe(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"}},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"}},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}}]})(t)}function It(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"12",y1:"18",x2:"12.01",y2:"18"}}]})(t)}function Mt(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}}]})(t)}function ve(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"}}]})(t)}function Cr(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"}}]})(t)}function Pr(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 17 10 11 4 5"}},{tag:"line",attr:{x1:"12",y1:"19",x2:"20",y2:"19"}}]})(t)}function Ue(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"}},{tag:"polyline",attr:{points:"17 6 23 6 23 12"}}]})(t)}function Lt(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}}]})(t)}function Ce(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"}}]})(t)}function zr(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12.55a11 11 0 0 1 14.08 0"}},{tag:"path",attr:{d:"M1.42 9a16 16 0 0 1 21.16 0"}},{tag:"path",attr:{d:"M8.53 16.11a6 6 0 0 1 6.95 0"}},{tag:"line",attr:{x1:"12",y1:"20",x2:"12.01",y2:"20"}}]})(t)}function Bt(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(t)}function Tr(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"}},{tag:"polygon",attr:{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"}}]})(t)}function de(t){return m({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}}]})(t)}const N=T.forwardRef(({variant:t="primary",size:n="md",fullWidth:r=!1,disabled:o=!1,loading:i=!1,leftIcon:l,rightIcon:s,href:u,to:c,external:g=!1,className:p="",children:d,type:x="button",onClick:f,...w},b)=>{const h={sm:"px-4 py-2 text-sm",md:"px-6 py-3 text-base",lg:"px-8 py-4 text-lg"},S={primary:`
      bg-gradient-to-r from-accent to-accent-hover
      text-primary-dark font-semibold
      hover:shadow-glow
      active:scale-95
      disabled:opacity-50 disabled:cursor-not-allowed
    `,secondary:`
      bg-transparent
      text-accent border-2 border-accent
      hover:bg-accent/10
      disabled:opacity-50 disabled:cursor-not-allowed
    `,ghost:`
      bg-transparent
      text-text-body border border-border
      hover:bg-white/5 hover:text-accent hover:border-accent
      disabled:opacity-50 disabled:cursor-not-allowed
    `,glass:`
      bg-white/5 backdrop-blur-sm
      text-white border border-white/10
      hover:bg-white/10 hover:border-accent/30
      hover:shadow-glow-sm
      disabled:opacity-50 disabled:cursor-not-allowed
    `,link:`
      bg-transparent
      text-accent underline underline-offset-4
      hover:text-accent-hover
      disabled:opacity-50 disabled:cursor-not-allowed
    `},P=`
    inline-flex items-center justify-center
    gap-2 font-medium
    rounded-lg
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary
    ${h[n]}
    ${S[t]}
    ${r?"w-full":""}
    ${o||i?"opacity-60 cursor-not-allowed":"cursor-pointer"}
    ${p}
  `.trim().replace(/\s+/g," "),B=()=>e.jsx(e.Fragment,{children:i?e.jsxs("span",{className:"inline-flex items-center gap-2",children:[e.jsx(I,{}),d]}):e.jsxs(e.Fragment,{children:[l&&e.jsx("span",{className:"inline-flex",children:l}),d,s&&e.jsx("span",{className:"inline-flex",children:s})]})}),I=()=>e.jsxs("svg",{className:"animate-spin h-4 w-4",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]});return u&&!o?e.jsx(a.a,{ref:b,href:u,target:g?"_blank":"_self",rel:g?"noopener noreferrer":void 0,className:P,whileHover:{y:-2},whileTap:{scale:.98},...w,children:B()}):c&&!o?e.jsx(a.div,{whileHover:{y:-2},whileTap:{scale:.98},children:e.jsx(L,{ref:b,to:c,className:P,...w,children:B()})}):e.jsx(a.button,{ref:b,type:x,disabled:o||i,className:P,onClick:f,whileHover:!o&&!i?{y:-2}:{},whileTap:!o&&!i?{scale:.98}:{},...w,children:B()})});N.displayName="Button";const Ar=T.forwardRef(({children:t,size:n="md",variant:r="ghost",className:o="",...i},l)=>{const u=`
    inline-flex items-center justify-center
    rounded-full
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary
    ${{sm:"p-2 text-sm",md:"p-3 text-base",lg:"p-4 text-lg"}[n]}
    ${r==="primary"?"bg-accent text-primary-dark hover:bg-accent-hover":""}
    ${r==="ghost"?"bg-transparent text-text-body hover:bg-white/5 hover:text-accent":""}
    ${o}
  `.trim().replace(/\s+/g," ");return e.jsx(a.button,{ref:l,className:u,whileHover:{scale:1.05},whileTap:{scale:.95},...i,children:t})});Ar.displayName="IconButton";function Ir(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"}}]})(t)}function Mr(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"}}]})(t)}function Lr(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z"}}]})(t)}function Br(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"}}]})(t)}function Fr(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12 0C5.372 0 0 5.372 0 12c0 6.626 5.372 12 12 12s12-5.372 12-12c0-6.626-5.372-12-12-12ZM9 17H7V7H9Zm8 0H11V15h6Zm0-4H11V11h6Zm0-4H11V7h6Z"}}]})(t)}function Ft(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"}}]})(t)}function Rr(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"}}]})(t)}function Dr(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"}}]})(t)}function Rt(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"}}]})(t)}function Wr(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"}}]})(t)}function Er(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"}}]})(t)}function Hr(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}}]})(t)}function $r(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"}}]})(t)}function Dt(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"}}]})(t)}function _r(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M10.2 0v6.456L12 8.928l1.8-2.472V0zm3.6 6.456v3.072l2.904-.96L20.52 3.36l-2.928-2.136zm2.904 2.112l-1.8 2.496 2.928.936 6.144-1.992-1.128-3.432zM17.832 12l-2.928.936 1.8 2.496 6.144 1.992 1.128-3.432zm-1.128 3.432l-2.904-.96v3.072l3.792 5.232 2.928-2.136zM13.8 17.544L12 15.072l-1.8 2.472V24h3.6zm-3.6 0v-3.072l-2.904.96L3.48 20.64l2.928 2.136zm-2.904-2.112l1.8-2.496L6.168 12 .024 13.992l1.128 3.432zM6.168 12l2.928-.936-1.8-2.496-6.144-1.992-1.128 3.432zm1.128-3.432l2.904.96V6.456L6.408 1.224 3.48 3.36Z"}}]})(t)}function Pe(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"}}]})(t)}function Vr(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"}}]})(t)}function Or(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M6.49 19.04h-.23L5.13 17.9v-.23l1.73-1.71h1.2l.15.15v1.2L6.5 19.04ZM5.13 6.31V6.1l1.13-1.13h.23L8.2 6.68v1.2l-.15.15h-1.2L5.13 6.31Zm9.96 9.09h-1.65l-.14-.13v-3.83c0-.68-.27-1.2-1.1-1.23-.42 0-.9 0-1.43.02l-.07.08v4.96l-.14.14H8.9l-.13-.14V8.73l.13-.14h3.7a2.6 2.6 0 0 1 2.61 2.6v4.08l-.13.14Zm-8.37-2.44H.14L0 12.82v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14Zm17.14 0h-6.58l-.14-.14v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14ZM11.05 6.55V1.64l.14-.14h1.65l.14.14v4.9l-.14.14h-1.65l-.14-.13Zm0 15.81v-4.9l.14-.14h1.65l.14.13v4.91l-.14.14h-1.65l-.14-.14Z"}}]})(t)}function Wt(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"}}]})(t)}function ze(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"}}]})(t)}function qr(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"}}]})(t)}function Ur(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"}}]})(t)}function Gr(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"}}]})(t)}function Jr(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"}}]})(t)}function Qr(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"}}]})(t)}function xe(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"}}]})(t)}function Yr(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"}}]})(t)}function Xr(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"}}]})(t)}function Ge(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z"}}]})(t)}function Kr(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M11.9362.0137a12.1694 12.1694 0 00-2.9748.378C4.2816 1.5547.5678 5.7944.0918 10.6012c-.59 4.5488 1.7079 9.2856 5.6437 11.6345 3.8608 2.4179 9.0926 2.3199 12.8734-.223 3.3969-2.206 5.5118-6.2277 5.3858-10.2845-.058-4.0159-2.31-7.9167-5.7588-9.9796C16.354.5876 14.1431.0047 11.9362.0137zm-.063 1.696c4.9448-.007 9.7886 3.8137 10.2815 8.9245.945 5.6597-3.7528 11.4125-9.4875 11.5795-5.4538.544-10.7245-4.0798-10.8795-9.5566-.407-4.4338 2.5159-8.8346 6.6977-10.2995a9.1126 9.1126 0 013.3878-.647zm5.0908 3.2248c-2.6869 2.0849-5.2598 4.3078-7.8886 6.4567 1.2029.017 2.4118.016 3.6208.01 1.41-2.165 2.8589-4.3008 4.2678-6.4667zm-5.6647 7.6536c-1.41 2.166-2.86 4.3088-4.2699 6.4737 2.693-2.0799 5.2548-4.3198 7.9017-6.4557a255.4132 255.4132 0 00-3.6318-.018z"}}]})(t)}function Et(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"}}]})(t)}function Zr(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z"}}]})(t)}function en(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"}}]})(t)}function tn(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M24 22.525H0l12-21.05 12 21.05z"}}]})(t)}function rn(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"}}]})(t)}function nn(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z"}}]})(t)}function an(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"}}]})(t)}function Te(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"}}]})(t)}function sn(t){return m({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"}}]})(t)}const Ae=[{id:"github",name:"GitHub",url:"https://github.com/mhammad311",icon:_e,color:"#6e5494",hoverColor:"#8b7ab5",username:"@mhammad311",description:"Code repositories and projects",type:"coding",visible:!0,order:1},{id:"linkedin",name:"LinkedIn",url:"https://www.linkedin.com/in/hamad-hussain-96274a397/",icon:Pt,color:"#0077B5",hoverColor:"#0099e5",username:"Hamad Hussain",description:"Professional network",type:"professional",visible:!0,order:2},{id:"instagram",name:"Instagram",url:"https://www.instagram.com/mh_codes/",icon:jr,color:"#E4405F",hoverColor:"#f06292",username:"@mh_codes",description:"Daily updates and behind-the-scenes",type:"social",visible:!0,order:3},{id:"whatsapp",name:"WhatsApp",url:"https://wa.me/923497818575",icon:an,color:"#25D366",hoverColor:"#4ade80",phone:"+92 349 7818575",description:"Quick chat and queries",type:"contact",visible:!0,order:4},{id:"email",name:"Email",url:"mailto:mhweb11@gmail.com",icon:X,color:"#EA4335",hoverColor:"#ff6b6b",email:"mhweb11@gmail.com",description:"Business inquiries",type:"contact",visible:!0,order:5},{id:"codepen",name:"CodePen",url:"https://codepen.io/yourprofile",icon:ur,color:"#000000",hoverColor:"#333333",username:"@yourprofile",description:"Frontend experiments",type:"coding",visible:!1,order:6},{id:"youtube",name:"YouTube",url:"https://youtube.com/@yourchannel",icon:Tr,color:"#FF0000",hoverColor:"#ff5252",username:"@yourchannel",description:"Tutorials and content",type:"content",visible:!1,order:7}],F={primaryEmail:"mhweb11@gmail.com",primaryPhone:"+92 3497818575",location:{city:"Lahore",country:"Pakistan",timezone:"PKT (UTC+5)",coordinates:"31.5204° N, 74.3587° E"},availability:{message:"Available for new projects",responseTime:"Within 24 hours"}};`${F.location.city}${F.location.country}`;const on=()=>{const[t,n]=j.useState(!1),r=pt(),o=[{id:"home",label:"Home",href:"/"},{id:"about",label:"About",href:"/about"},{id:"services",label:"Services",href:"/services"},{id:"projects",label:"Projects",href:"/portfolio"},{id:"blog",label:"Blog",href:"/blog"},{id:"contact",label:"Contact",href:"/contact"}],i=Ae.filter(c=>["github","linkedin","instagram"].includes(c.id)).slice(0,3),l=()=>{n(!t),document.body.style.overflow=t?"":"hidden"},s=()=>{n(!1),document.body.style.overflow=""},u=c=>c==="/"?r.pathname==="/":r.pathname.startsWith(c);return e.jsxs(e.Fragment,{children:[e.jsx(a.header,{initial:{y:-100},animate:{y:0},transition:{duration:.5,ease:[.4,0,.2,1]},className:`\r
          fixed top-0 left-0 right-0 z-50\r
          bg-primary/90 backdrop-blur-md\r
          border-b border-border\r
        `,children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("nav",{className:`\r
            flex items-center justify-between\r
            py-4\r
          `,children:[e.jsxs(L,{to:"/",className:"flex items-center gap-3 group",children:[e.jsx(a.div,{whileHover:{scale:1.05},whileTap:{scale:.95},className:`\r
                  w-12 h-12\r
                  flex items-center justify-center\r
                  border-2 border-accent\r
                  rounded-lg\r
                  group-hover:bg-accent/10\r
                  transition-colors duration-300\r
                `,children:e.jsx("span",{className:"font-heading font-bold text-xl text-accent",children:"web"})}),e.jsxs("div",{className:"hidden md:block",children:[e.jsx("div",{className:"font-heading font-bold text-xl text-text-heading",children:"webX"}),e.jsx("div",{className:"text-xs text-accent font-mono",children:"Developer"})]})]}),e.jsxs("div",{className:"hidden md:flex items-center gap-8",children:[e.jsx("div",{className:"flex items-center gap-6",children:o.map(c=>e.jsxs("a",{href:c.href,className:`
                      relative font-mono text-sm
                      px-1 py-2
                      transition-colors duration-300
                      ${u(c.href)?"text-accent":"text-text-body hover:text-accent"}
                    `,children:[e.jsx("span",{className:`
                      absolute bottom-0 left-0 right-0 h-0.5
                      bg-accent origin-left
                      transition-transform duration-300
                      ${u(c.href)?"scale-x-100":"scale-x-0 group-hover:scale-x-100"}
                    `}),c.label]},c.id))}),e.jsx("div",{className:"flex items-center gap-3",children:i.map(c=>e.jsx(a.a,{href:c.url,target:"_blank",rel:"noopener noreferrer",whileHover:{y:-3},whileTap:{scale:.95},className:`\r
                      w-10 h-10\r
                      flex items-center justify-center\r
                      text-text-body hover:text-accent\r
                      bg-primary-light/50 hover:bg-accent/10\r
                      border border-border hover:border-accent/50\r
                      rounded-lg\r
                      transition-all duration-300\r
                    `,"aria-label":c.name,children:T.createElement(c.icon,{size:18})},c.id))}),e.jsx(N,{variant:"primary",size:"sm",leftIcon:e.jsx(De,{size:16}),href:"/resume.pdf",external:!0,children:"Resume"})]}),e.jsx(a.button,{onClick:l,className:`\r
                md:hidden\r
                w-10 h-10\r
                flex items-center justify-center\r
                text-accent\r
                rounded-lg\r
                focus:outline-none focus:ring-2 focus:ring-accent\r
              `,"aria-label":t?"Close menu":"Open menu",whileTap:{scale:.95},children:t?e.jsx(Bt,{size:24}):e.jsx(wr,{size:24})})]})})}),e.jsx(W,{children:t&&e.jsxs(e.Fragment,{children:[e.jsx(a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:s,className:`\r
                fixed inset-0 z-40\r
                bg-primary/80 backdrop-blur-sm\r
                md:hidden\r
              `}),e.jsx(a.nav,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:20},className:`\r
                fixed top-0 right-0 bottom-0 z-50\r
                w-[min(75vw,320px)]\r
                bg-primary border-l border-border\r
                flex flex-col\r
                md:hidden\r
                shadow-2xl\r
              `,children:e.jsxs("div",{className:"flex flex-col h-full pt-24 pb-8 px-8",children:[e.jsx("div",{className:"flex flex-col gap-4",children:o.map(c=>e.jsx("a",{href:c.href,onClick:s,className:`
                        font-mono text-lg
                        py-3
                        transition-colors duration-300
                        ${u(c.href)?"text-accent":"text-text-body hover:text-accent"}
                      `,children:c.label},c.id))}),e.jsx("div",{className:"mt-8",children:e.jsx("div",{className:"flex items-center gap-4",children:i.map(c=>e.jsx("a",{href:c.url,target:"_blank",rel:"noopener noreferrer",onClick:s,className:`\r
                          text-text-body hover:text-accent\r
                          transition-colors duration-300\r
                        `,"aria-label":c.name,children:T.createElement(c.icon,{size:20})},c.id))})}),e.jsx("div",{className:"mt-auto pt-8",children:e.jsx(N,{variant:"primary",size:"md",fullWidth:!0,leftIcon:e.jsx(De,{size:18}),href:"/resume.pdf",external:!0,onClick:s,children:"Download Resume"})})]})})]})})]})},ln=()=>{var l;const t=new Date().getFullYear(),n=[{label:"Home",href:"/"},{label:"About",href:"/about"},{label:"Services",href:"/services"},{label:"Projects",href:"/portfolio"},{label:"Blog",href:"/blog"},{label:"Contact",href:"/contact"}],r=[{label:"Web Development",href:"/services#web-development"},{label:"Mobile Apps",href:"/services#mobile-apps"},{label:"E-Commerce",href:"/services#ecommerce"},{label:"WordPress",href:"/services#wordpress"}],o=[{label:"Privacy Policy",href:"/privacy"},{label:"Terms of Service",href:"/terms"}],i=Ae.filter(s=>["github","linkedin","instagram"].includes(s.id));return e.jsxs(a.footer,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0,amount:.1},className:"relative bg-primary-light/30 border-t border-border",children:[e.jsx("div",{className:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"}),e.jsx("div",{className:"container mx-auto px-6 py-16",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8",children:[e.jsxs("div",{className:"lg:col-span-4",children:[e.jsx(L,{to:"/",className:"inline-block group mb-6",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-12 h-12 flex items-center justify-center border-2 border-accent rounded-lg group-hover:bg-accent/10 transition-colors duration-300",children:e.jsx("span",{className:"font-heading font-bold text-xl text-accent",children:"web"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-heading font-bold text-xl text-text-heading",children:"webX"}),e.jsx("p",{className:"text-xs text-accent font-mono",children:"Full Stack Developer"})]})]})}),e.jsx("p",{className:"text-text-body text-sm leading-relaxed mb-6 max-w-sm",children:"Full-stack development and technical consulting for businesses that need fast, reliable, conversion-ready websites, stores, and web applications."}),e.jsx("div",{className:"flex items-center gap-3",children:i.map(s=>e.jsx(a.a,{href:s.url,target:"_blank",rel:"noopener noreferrer",whileHover:{y:-3},whileTap:{scale:.95},className:"w-10 h-10 flex items-center justify-center text-text-body hover:text-accent bg-primary/50 hover:bg-accent/10 border border-border hover:border-accent/50 rounded-lg transition-all duration-300","aria-label":s.name,children:T.createElement(s.icon,{size:18})},s.id))})]}),e.jsxs("div",{className:"lg:col-span-2",children:[e.jsx("h4",{className:"font-heading font-semibold text-text-heading mb-4 text-lg",children:"Quick Links"}),e.jsx("ul",{className:"space-y-3",children:n.map(s=>e.jsx("li",{children:e.jsxs(L,{to:s.href,className:"text-text-body hover:text-accent text-sm transition-colors duration-300 inline-flex items-center gap-2 group",children:[e.jsx("span",{className:"w-0 group-hover:w-2 h-px bg-accent transition-all duration-300"}),s.label]})},s.label))})]}),e.jsxs("div",{className:"lg:col-span-2",children:[e.jsx("h4",{className:"font-heading font-semibold text-text-heading mb-4 text-lg",children:"Services"}),e.jsx("ul",{className:"space-y-3",children:r.map(s=>e.jsx("li",{children:e.jsxs(L,{to:s.href,className:"text-text-body hover:text-accent text-sm transition-colors duration-300 inline-flex items-center gap-2 group",children:[e.jsx("span",{className:"w-0 group-hover:w-2 h-px bg-accent transition-all duration-300"}),s.label]})},s.label))})]}),e.jsxs("div",{className:"lg:col-span-4",children:[e.jsx("h4",{className:"font-heading font-semibold text-text-heading mb-4 text-lg",children:"Get In Touch"}),e.jsxs("div",{className:"space-y-4 mb-6",children:[e.jsxs("a",{href:`mailto:${F.primaryEmail}`,className:"flex items-center gap-3 text-text-body hover:text-accent transition-colors duration-300 text-sm",children:[e.jsx(X,{className:"text-accent flex-shrink-0"}),e.jsx("span",{children:F.primaryEmail})]}),e.jsxs("a",{href:`tel:${F.primaryPhone}`,className:"flex items-center gap-3 text-text-body hover:text-accent transition-colors duration-300 text-sm",children:[e.jsx(ue,{className:"text-accent flex-shrink-0"}),e.jsx("span",{children:F.primaryPhone})]}),F.location&&e.jsxs("div",{className:"flex items-center gap-3 text-text-body text-sm",children:[e.jsx(Ve,{className:"text-accent flex-shrink-0"}),e.jsxs("span",{children:[F.location.city,", ",F.location.country]})]})]}),e.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6",children:[e.jsxs("span",{className:"relative flex h-2 w-2",children:[e.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"}),e.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-accent"})]}),e.jsx("span",{className:"text-xs font-mono text-accent",children:(l=F.availability)==null?void 0:l.message})]}),e.jsx(N,{variant:"secondary",size:"sm",href:"/contact",children:"Get a Quote"})]})]})}),e.jsx("div",{className:"border-t border-border",children:e.jsx("div",{className:"container mx-auto px-6 py-6",children:e.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[e.jsxs("p",{className:"text-text-body text-sm text-center md:text-left",children:["(c) ",t," WebX. All rights reserved."]}),e.jsxs("p",{className:"text-text-body text-sm flex items-center gap-2",children:[e.jsx("span",{children:"Built with"}),e.jsx(a.span,{animate:{scale:[1,1.2,1]},transition:{duration:1,repeat:1/0},children:e.jsx(br,{className:"text-accent"})}),e.jsx("span",{children:"using React & Vite"})]}),e.jsx("div",{className:"flex items-center gap-4",children:o.map((s,u)=>e.jsxs(T.Fragment,{children:[u>0&&e.jsx("span",{className:"text-border",children:"|"}),e.jsx(L,{to:s.href,className:"text-text-body text-sm hover:text-accent transition-colors",children:s.label})]},s.label))})]})})})]})},cn="Hamad Hussain | Full Stack Developer",dn="Hamad Hussain builds fast, secure, and conversion-focused websites, e-commerce stores, and full-stack web applications for businesses and agencies.",ae=(t,n)=>{let r=document.head.querySelector(t);r||(r=document.createElement("meta"),document.head.appendChild(r)),Object.entries(n).forEach(([o,i])=>{r.setAttribute(o,i)})},K=({title:t=cn,description:n=dn,robots:r="index, follow"})=>{j.useEffect(()=>{document.title=t,ae('meta[name="description"]',{name:"description",content:n}),ae('meta[name="robots"]',{name:"robots",content:r}),ae('meta[property="og:title"]',{property:"og:title",content:t}),ae('meta[property="og:description"]',{property:"og:description",content:n}),ae('meta[name="twitter:title"]',{name:"twitter:title",content:t}),ae('meta[name="twitter:description"]',{name:"twitter:description",content:n})},[n,r,t])},Ye=[{id:"react",name:"React",icon:xe,color:"#61DAFB"},{id:"node",name:"Node.js",icon:ze,color:"#339933"},{id:"mongodb",name:"MongoDB",icon:Pe,color:"#47A248"},{id:"express",name:"Express",icon:Ft,color:"#000000"},{id:"wordpress",name:"WordPress",icon:Te,color:"#21759B"},{id:"shopify",name:"Shopify",icon:Ge,color:"#7AB55C"},{id:"flutter",name:"Flutter",icon:Rt,color:"#02569B"}],mn=()=>{const[t,n]=j.useState(null);return e.jsxs("div",{className:"relative w-full h-full",children:[e.jsx("div",{className:`\r
        absolute top-1/2 left-1/2\r
        -translate-x-1/2 -translate-y-1/2\r
        w-[280px] h-[160px]\r
        bg-gradient-to-r from-accent/20 via-accent/10 to-transparent\r
        rounded-lg\r
        blur-xl\r
      `}),e.jsx("div",{className:`\r
        absolute top-1/2 left-1/2\r
        -translate-x-1/2 -translate-y-1/2\r
        w-[300px] h-[180px]\r
        bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900\r
        border border-accent/30\r
        rounded-lg\r
        overflow-hidden\r
        shadow-2xl shadow-accent/20\r
        z-20\r
      `,children:e.jsxs("div",{className:"relative w-full h-full p-4",children:[e.jsx("div",{className:"space-y-2",children:[1,2,3,4].map(r=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-accent/50"}),e.jsx("div",{className:"h-2 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full",style:{width:`${70+Math.random()*30}%`}})]},r))}),t&&e.jsx(a.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},className:`\r
                absolute bottom-4 left-4 right-4\r
                bg-gradient-to-r from-primary/50 to-primary/20\r
                border border-accent/30\r
                rounded-lg p-3\r
                backdrop-blur-sm\r
              `,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"text-2xl",style:{color:t.color},children:T.createElement(t.icon)}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-white",children:t.name}),e.jsx("div",{className:"text-xs text-text-body/70",children:"Currently working with"})]})]})})]})}),e.jsx("div",{className:`\r
        absolute top-[calc(50%+90px)] left-1/2\r
        -translate-x-1/2\r
        w-[320px] h-3\r
        bg-gradient-to-t from-gray-800 to-gray-700\r
        rounded-b-lg\r
        z-10\r
      `}),e.jsx("div",{className:`\r
        absolute top-[calc(50%+96px)] left-1/2\r
        -translate-x-1/2\r
        w-[350px] h-3\r
        bg-gradient-to-t from-gray-900 to-gray-800\r
        rounded-lg\r
        z-10\r
      `}),e.jsx("div",{className:`\r
        absolute top-1/2 left-1/2\r
        -translate-x-1/2 -translate-y-1/2\r
        w-[400px] h-[400px]\r
        border border-accent/10\r
        rounded-full\r
        z-0\r
      `}),e.jsx("div",{className:`\r
        absolute top-1/2 left-1/2\r
        -translate-x-1/2 -translate-y-1/2\r
        w-[500px] h-[500px]\r
        border border-accent/5\r
        rounded-full\r
        z-0\r
      `}),Ye.map((r,o)=>{const i=o*360/Ye.length,l=200,s=l*Math.cos(i*Math.PI/180),u=l*Math.sin(i*Math.PI/180);return e.jsxs(a.div,{className:`\r
              absolute top-1/2 left-1/2\r
              -translate-x-1/2 -translate-y-1/2\r
              w-16 h-16\r
              flex items-center justify-center\r
              bg-gradient-to-br from-primary/90 to-primary/70\r
              border border-accent/30\r
              rounded-full\r
              shadow-lg\r
              cursor-pointer\r
              z-10\r
              group\r
            `,style:{x:s,y:u},animate:{rotate:360,transition:{duration:30+Math.random()*10,repeat:1/0,ease:"linear"}},onMouseEnter:()=>n(r),onMouseLeave:()=>n(null),whileHover:{scale:1.2,boxShadow:`0 0 30px ${r.color}40`,zIndex:20},children:[e.jsx("div",{className:`\r
              w-12 h-12\r
              flex items-center justify-center\r
              bg-primary\r
              border border-accent/20\r
              rounded-full\r
              group-hover:scale-110\r
              transition-transform duration-300\r
            `,children:T.createElement(r.icon,{size:24,className:"transition-all duration-300",style:{color:r.color,filter:"drop-shadow(0 0 2px rgba(255,255,255,0.3))"}})}),e.jsx("div",{className:`\r
              absolute -bottom-8\r
              px-3 py-1\r
              bg-primary/80 backdrop-blur-sm\r
              border border-accent/20\r
              rounded-full\r
              opacity-0 group-hover:opacity-100\r
              transition-all duration-300\r
              whitespace-nowrap\r
              text-sm\r
            `,children:r.name})]},r.id)})]})},pn=()=>{const t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15,delayChildren:.2}}},n={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.4,0,.2,1]}}},r={animate:{y:[0,-15,0],transition:{duration:4,repeat:1/0,ease:"easeInOut"}}},o={hidden:{opacity:0,width:0},visible:{opacity:1,width:"100%",transition:{duration:1.5,ease:"easeInOut"}}},i=Ae.filter(l=>["github","linkedin","instagram"].includes(l.id));return e.jsxs("section",{id:"hero",className:`\r
      relative min-h-screen\r
      flex items-center\r
      pt-20 md:pt-24\r
      overflow-hidden\r
    `,children:[e.jsxs("div",{className:"absolute inset-0 z-0",children:[e.jsx("div",{className:`\r
          absolute inset-0\r
          bg-gradient-to-br from-primary/90 via-primary/80 to-primary-light/30\r
        `}),e.jsx("div",{className:`\r
          absolute inset-0\r
          bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)]\r
          bg-[size:50px_50px]\r
          opacity-30\r
          animate-grid-flow\r
        `}),e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:[...Array(8)].map((l,s)=>{const u=[Nt,O,hr,ne],c=u[s%u.length];return e.jsx(a.div,{className:"absolute text-accent/10",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,fontSize:`${Math.random()*40+20}px`},animate:{y:[0,Math.random()*100-50],x:[0,Math.random()*100-50],rotate:[0,360]},transition:{duration:Math.random()*20+20,repeat:1/0,ease:"linear"},children:e.jsx(c,{})},s)})}),e.jsx(a.div,{className:`\r
            absolute top-1/4 left-1/4\r
            w-[600px] h-[600px]\r
            bg-gradient-to-r from-accent/15 to-transparent\r
            rounded-full blur-3xl\r
          `,animate:{scale:[1,1.2,1],opacity:[.3,.5,.3]},transition:{duration:8,repeat:1/0,ease:"easeInOut"}}),e.jsx(a.div,{className:`\r
            absolute bottom-1/4 right-1/4\r
            w-[500px] h-[500px]\r
            bg-gradient-to-l from-accent/10 to-transparent\r
            rounded-full blur-3xl\r
          `,animate:{scale:[1.2,1,1.2],opacity:[.4,.2,.4]},transition:{duration:10,repeat:1/0,ease:"easeInOut"}})]}),e.jsx("div",{className:"container mx-auto px-6 relative z-10",children:e.jsxs("div",{className:`\r
          grid grid-cols-1 lg:grid-cols-2\r
          gap-12 lg:gap-8\r
          items-center\r
          min-h-[calc(100vh-120px)]\r
        `,children:[e.jsxs(a.div,{variants:t,initial:"hidden",animate:"visible",className:`\r
              text-left\r
              order-2 lg:order-1\r
            `,children:[e.jsxs(a.div,{variants:n,className:`\r
                inline-flex items-center gap-3\r
                px-4 py-2 mb-8\r
                bg-gradient-to-r from-accent/10 to-accent/5\r
                border border-accent/20\r
                rounded-full\r
                backdrop-blur-sm\r
              `,children:[e.jsx(a.div,{className:"w-2 h-2 rounded-full bg-accent",animate:{scale:[1,1.5,1]},transition:{duration:2,repeat:1/0}}),e.jsx("span",{className:`\r
                font-mono text-sm text-accent\r
                uppercase tracking-widest\r
              `,children:"Welcome to My Digital Space"})]}),e.jsxs(a.h1,{variants:n,className:`\r
                font-heading font-bold\r
                text-5xl md:text-6xl lg:text-7xl\r
                text-text-heading\r
                leading-[1.1]\r
                mb-6\r
              `,children:[e.jsx("span",{className:"block",children:"Crafting"}),e.jsx("span",{className:`\r
                bg-gradient-to-r from-accent via-accent-hover to-accent\r
                bg-clip-text text-transparent\r
                animate-gradient-x\r
              `,children:"Digital Solutions"}),e.jsx("span",{className:"block",children:"That Scale"})]}),e.jsxs(a.p,{variants:n,className:`\r
                text-xl text-text-body\r
                leading-relaxed\r
                mb-10\r
                max-w-2xl\r
              `,children:["I help startups, agencies, and business leaders turn ideas into",e.jsx("span",{className:"text-accent font-semibold",children:" reliable digital products"})," with full-stack development, clean UI, secure backends, and launch-ready execution."]}),e.jsxs(a.div,{variants:n,className:"mb-12",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-text-heading font-semibold",children:"Tech Stack Mastery"}),e.jsx("span",{className:"text-accent text-sm",children:"7+ Technologies"})]}),e.jsx("div",{className:`\r
                h-2 bg-primary-light/30\r
                rounded-full overflow-hidden\r
              `,children:e.jsx(a.div,{variants:o,initial:"hidden",animate:"visible",className:`\r
                    h-full\r
                    bg-gradient-to-r from-accent to-accent-hover\r
                    rounded-full\r
                  `})})]}),e.jsxs(a.div,{variants:n,className:`\r
                flex flex-col sm:flex-row\r
                items-start sm:items-center\r
                gap-4 mb-10\r
              `,children:[e.jsx(N,{variant:"primary",size:"lg",rightIcon:e.jsx(te,{}),href:"/portfolio",className:"group",children:e.jsx("span",{className:"group-hover:translate-x-1 transition-transform duration-300",children:"Explore Projects"})}),e.jsx(N,{variant:"secondary",size:"lg",leftIcon:e.jsx(De,{}),href:"/resume.pdf",external:!0,className:"group",children:e.jsx("span",{className:"group-hover:translate-y-[-2px] transition-transform duration-300",children:"Download CV"})})]}),e.jsxs(a.div,{variants:n,className:"flex items-center gap-6",children:[e.jsx("span",{className:"text-text-body/70 text-sm",children:"Connect with me:"}),i.map(l=>e.jsx(a.a,{href:l.url,target:"_blank",rel:"noopener noreferrer",whileHover:{y:-5,scale:1.1},whileTap:{scale:.95},className:`\r
                    text-text-body hover:text-accent\r
                    transition-all duration-300\r
                    group\r
                  `,"aria-label":l.name,children:T.createElement(l.icon,{size:22,className:"group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"})},l.id))]})]}),e.jsx(a.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.3},className:`\r
              relative\r
              h-[500px] lg:h-[600px]\r
              flex items-center justify-center\r
              order-1 lg:order-2\r
            `,children:e.jsxs(a.div,{variants:r,animate:"animate",className:"relative w-full h-full",children:[e.jsx(mn,{}),e.jsxs(a.div,{className:`\r
                  absolute top-4 right-4\r
                  px-4 py-3\r
                  bg-gradient-to-br from-primary/80 to-primary/60\r
                  border border-accent/20\r
                  rounded-xl\r
                  backdrop-blur-sm\r
                  shadow-lg\r
                  z-30\r
                `,initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.8},children:[e.jsx("div",{className:"text-2xl font-bold text-white",children:"50+"}),e.jsx("div",{className:"text-xs text-text-body/70",children:"Projects Completed"})]}),e.jsxs(a.div,{className:`\r
                  absolute bottom-8 left-4\r
                  px-4 py-3\r
                  bg-gradient-to-br from-primary/80 to-primary/60\r
                  border border-accent/20\r
                  rounded-xl\r
                  backdrop-blur-sm\r
                  shadow-lg\r
                  z-30\r
                `,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:1},children:[e.jsx("div",{className:"text-2xl font-bold text-white",children:"100%"}),e.jsx("div",{className:"text-xs text-text-body/70",children:"Client Satisfaction"})]})]})})]})})]})},E=({subtitle:t,title:n,description:r,align:o="center",animate:i=!0,gradient:l=!1,className:s="",...u})=>{const c={left:"text-left items-start",center:"text-center items-center",right:"text-right items-end"},g=l?"bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent":"text-text-heading",p={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},d={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.4,0,.2,1]}}},x={hidden:{scaleX:0},visible:{scaleX:1,transition:{duration:.8,ease:[.4,0,.2,1],delay:.3}}},f=i?a.div:"div",w=i?{variants:p,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3}}:{},b=i?a.div:"div",h=i?{variants:d}:{},S=i?a.div:"div",P=i?{variants:x}:{};return e.jsxs(f,{className:`
        flex flex-col space-y-4
        ${c[o]}
        mb-12 md:mb-16
        ${s}
      `.trim().replace(/\s+/g," "),...w,...u,children:[t&&e.jsx(b,{...h,className:`\r
            inline-block\r
            font-mono text-xs md:text-sm\r
            text-accent uppercase tracking-widest\r
            px-4 py-2\r
            bg-accent/10 border border-accent/20\r
            rounded-full\r
          `,children:t}),n&&e.jsx(b,{...h,className:`\r
            font-heading font-bold\r
            text-3xl md:text-4xl lg:text-5xl\r
            leading-tight\r
            mb-4\r
          `,children:e.jsx("h2",{className:g,children:n})}),r&&e.jsx(b,{...h,className:`
            text-text-body text-lg
            max-w-2xl leading-relaxed
            ${o==="center"?"mx-auto":""}
          `,children:r}),e.jsx(S,{...P,className:`
          w-16 h-1
          bg-gradient-to-r from-accent to-transparent
          rounded-full
          ${o==="center"?"mx-auto":""}
          ${o==="right"?"ml-auto":""}
        `})]})},H=T.forwardRef(({variant:t="default",padding:n="md",rounded:r="lg",hoverable:o=!0,clickable:i=!1,animate:l=!0,href:s,to:u,onClick:c,className:g="",children:p,...d},x)=>{const f={sm:"p-4",md:"p-6",lg:"p-8"},w={sm:"rounded",md:"rounded-lg",lg:"rounded-xl",xl:"rounded-2xl"},b={default:`
      bg-primary-light
      border border-border
      hover:border-accent/30
    `,glass:`
      bg-white/5 backdrop-blur-sm
      border border-white/10
      hover:border-accent/30
    `,bordered:`
      bg-transparent
      border-2 border-border
      hover:border-accent
    `,gradient:`
      bg-gradient-to-br from-primary-light to-primary
      border border-border
      hover:border-accent/30
    `,minimal:`
      bg-transparent
      border border-transparent
    `},h=`
    relative overflow-hidden
    transition-all duration-300
    ${f[n]}
    ${w[r]}
    ${b[t]}
    ${o?"hover-lift":""}
    ${g}
  `.trim().replace(/\s+/g," "),S={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.5,ease:[.4,0,.2,1]}}},P=()=>e.jsx("div",{className:`\r
      absolute top-0 left-0 right-0 h-1\r
      bg-gradient-to-r from-transparent via-accent/50 to-transparent\r
      opacity-0 group-hover:opacity-100\r
      transition-opacity duration-300\r
    `}),B=e.jsxs(e.Fragment,{children:[e.jsx(P,{}),p]}),I=l?a.div:"div",y=l?{variants:S,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2}}:{};return s?e.jsx(I,{...y,children:e.jsx("a",{ref:x,href:s,target:"_blank",rel:"noopener noreferrer",className:`group block ${h}`,...d,children:B})}):u?e.jsx(I,{...y,children:e.jsx(L,{ref:x,to:u,className:`group block ${h}`,...d,children:B})}):c?e.jsx(I,{...y,children:e.jsx("div",{ref:x,onClick:c,className:`group cursor-pointer ${h}`,role:"button",tabIndex:0,onKeyPress:A=>A.key==="Enter"&&c(A),...d,children:B})}):e.jsx(I,{ref:x,className:`group ${h}`,...y,...d,children:B})});H.displayName="Card";const Ht=({title:t,description:n,image:r,mediaType:o="image",posterImage:i,tags:l=[],category:s,liveUrl:u,githubUrl:c,featured:g=!1,className:p="",...d})=>e.jsxs(H,{hoverable:!0,className:`relative overflow-hidden group ${p}`,...d,children:[e.jsxs("div",{className:"relative aspect-video overflow-hidden rounded-lg mb-4",children:[o==="video"?e.jsx("video",{src:r,poster:i,muted:!0,playsInline:!0,preload:"metadata",className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"}):e.jsx("img",{src:r,alt:t,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"}),e.jsx("div",{className:`\r
          absolute inset-0\r
          bg-gradient-to-t from-primary/90 via-primary/50 to-transparent\r
          opacity-0 group-hover:opacity-100\r
          transition-opacity duration-300\r
          flex items-end p-6\r
        `,children:e.jsxs("div",{className:"flex items-center gap-4",children:[c&&e.jsx("button",{onClick:x=>{x.stopPropagation(),window.open(c,"_blank","noopener,noreferrer")},className:`\r
                  w-10 h-10 flex items-center justify-center\r
                  bg-white/10 backdrop-blur-sm\r
                  text-white border border-white/20\r
                  rounded-lg\r
                  hover:bg-accent hover:text-primary-dark hover:border-accent\r
                  transition-all duration-300\r
                  cursor-pointer\r
                `,"aria-label":"View on GitHub",children:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),u&&e.jsx("button",{onClick:x=>{x.stopPropagation(),window.open(u,"_blank","noopener,noreferrer")},className:`\r
                  w-10 h-10 flex items-center justify-center\r
                  bg-white/10 backdrop-blur-sm\r
                  text-white border border-white/20\r
                  rounded-lg\r
                  hover:bg-accent hover:text-primary-dark hover:border-accent\r
                  transition-all duration-300\r
                  cursor-pointer\r
                `,"aria-label":"View live demo",children:e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})})]})})]}),e.jsxs("div",{className:"flex items-center justify-between gap-3 mb-3",children:[e.jsx("span",{className:"px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full",children:s}),g&&e.jsx("span",{className:"px-3 py-1 text-xs font-medium bg-yellow-400/15 text-yellow-300 border border-yellow-400/20 rounded-full",children:"Featured"})]}),e.jsx("h3",{className:"font-heading font-semibold text-xl text-text-heading mb-3 group-hover:text-accent transition-colors duration-300",children:t}),e.jsx("p",{className:"text-text-body text-sm leading-relaxed mb-5",children:n}),l.length>0&&e.jsx("div",{className:"flex flex-wrap gap-2",children:l.slice(0,5).map(x=>e.jsx("span",{className:"px-2.5 py-1 text-xs font-mono text-text-body/80 bg-primary/50 rounded",children:x},x))})]}),un=({title:t,description:n,icon:r,features:o=[],className:i="",...l})=>e.jsxs(H,{hoverable:!0,className:`text-center group ${i}`,...l,children:[r&&e.jsx("div",{className:`\r
          w-16 h-16 mx-auto mb-6\r
          flex items-center justify-center\r
          text-3xl text-accent\r
          bg-accent/10 border border-accent/20\r
          rounded-2xl\r
          transition-all duration-300\r
          group-hover:bg-accent group-hover:text-primary-dark\r
          group-hover:scale-110\r
        `,children:r}),e.jsx("h3",{className:`\r
        font-heading font-bold text-xl text-text-heading\r
        mb-3 group-hover:text-accent\r
        transition-colors duration-300\r
      `,children:t}),e.jsx("p",{className:"text-text-body text-sm leading-relaxed mb-4",children:n}),o.length>0&&e.jsx("ul",{className:"text-left space-y-2 mt-4",children:o.slice(0,3).map((s,u)=>e.jsxs("li",{className:"flex items-start gap-2 text-sm text-text-body",children:[e.jsx("span",{className:"text-accent mt-1",children:"▹"}),s]},u))})]}),se=[{id:"web-development",title:"Custom Web Development",shortTitle:"Web Development",tagline:"Scalable web platforms for real business workflows",description:"Custom websites and full-stack applications built with React, Node.js, and MongoDB for speed, reliability, and measurable business impact.",longDescription:`I build complete web applications that support real users, internal teams, and business growth. This includes:
    
    • Custom web applications from scratch
    • Single Page Applications (SPA) with React
    • Progressive Web Apps (PWA)
    • RESTful & GraphQL API development
    • Database design and optimization
    • User authentication & authorization
    • Third-party API integrations
    • Performance optimization
    • SEO implementation`,icon:O,gradient:"from-blue-500 to-cyan-500",color:"#2196F3",featured:!0,popular:!0,category:"development",technologies:["React","Node.js","Express","MongoDB","Tailwind","Vite"],features:["Custom Web Applications","RESTful API Development","Database Architecture","Authentication Systems","Performance Optimization","SEO Implementation"],deliveryTime:"2-6 weeks",startingPrice:1500,highlight:!0,order:1},{id:"frontend-development",title:"Frontend Development",shortTitle:"Frontend",tagline:"Polished interfaces that turn visitors into users",description:"Responsive frontend development using React, Vue.js, or Angular with clean components, smooth interactions, and conversion-focused UX.",longDescription:`I create responsive frontend experiences that make products feel fast, clear, and easy to use:
    
    • React.js / Vue.js / Angular development
    • Component-based architecture
    • Responsive & mobile-first design
    • Smooth animations with Framer Motion
    • State management (Redux, Vuex, NgRx)
    • Performance optimization
    • Accessibility (WCAG) compliance
    • Cross-browser compatibility
    • Design system implementation`,icon:Ct,gradient:"from-purple-500 to-pink-500",color:"#9C27B0",featured:!0,popular:!0,category:"development",technologies:["React","Vue.js","Angular","Tailwind","Framer Motion","TypeScript"],features:["Component Development","Responsive Design","Animations & Interactions","Performance Optimization","Accessibility","Design Implementation"],deliveryTime:"1-4 weeks",startingPrice:800,highlight:!0,order:2},{id:"mobile-app-development",title:"Mobile App Development",shortTitle:"Mobile Apps",tagline:"Cross-platform apps that feel fast and dependable",description:"iOS and Android app development with React Native and Flutter, focused on performance, usability, offline flows, and store-ready delivery.",longDescription:`I develop high-quality mobile applications using modern frameworks:
    
    • Cross-platform iOS & Android apps
    • React Native development
    • Flutter development
    • Native module integration
    • Push notifications
    • Offline functionality
    • App Store & Play Store deployment
    • Performance optimization
    • Security implementation`,icon:It,gradient:"from-green-500 to-emerald-500",color:"#4CAF50",featured:!0,popular:!0,category:"mobile",technologies:["React Native","Flutter","Firebase","Redux","TypeScript"],features:["iOS & Android Apps","Cross-platform Development","Push Notifications","Offline Support","App Store Deployment","Performance Tuning"],deliveryTime:"4-8 weeks",startingPrice:2e3,highlight:!0,order:3},{id:"ecommerce-development",title:"E-Commerce Development",shortTitle:"E-Commerce",tagline:"Online stores built for trust, speed, and sales",description:"Conversion-focused e-commerce platforms with product management, secure checkout, inventory workflows, analytics, and easy admin control.",longDescription:`End-to-end e-commerce development focused on smooth buying experiences and efficient store operations:
    
    • Custom e-commerce platforms
    • Shopify store development
    • WooCommerce setup & customization
    • Payment gateway integration
    • Inventory management
    • Order processing system
    • Customer management
    • Analytics & reporting
    • SEO optimization
    • Mobile-responsive design`,icon:qe,gradient:"from-orange-500 to-red-500",color:"#FF5722",featured:!0,popular:!0,category:"ecommerce",technologies:["Shopify","WooCommerce","MERN","Stripe","PayPal"],features:["Custom E-Commerce","Payment Integration","Inventory Management","Order Processing","Customer Portal","Analytics Dashboard"],deliveryTime:"3-6 weeks",startingPrice:1200,highlight:!0,order:4},{id:"wordpress-development",title:"WordPress Development",shortTitle:"WordPress",tagline:"Professional WordPress sites without template limitations",description:"Custom WordPress themes, plugins, WooCommerce builds, speed optimization, security hardening, and maintainable CMS workflows.",longDescription:`Complete WordPress solutions for businesses that need control, speed, and long-term maintainability:
    
    • Custom theme development
    • Plugin development
    • WooCommerce integration
    • Performance optimization
    • Security hardening
    • SEO optimization
    • Migration services
    • Maintenance & support
    • Multilingual websites
    • Membership sites`,icon:ne,gradient:"from-blue-600 to-cyan-500",color:"#21759B",featured:!1,popular:!0,category:"development",technologies:["WordPress","PHP","MySQL","WooCommerce","Elementor"],features:["Custom Theme Development","Plugin Development","Performance Optimization","Security Hardening","SEO Setup","Maintenance & Support"],deliveryTime:"2-4 weeks",startingPrice:600,highlight:!1,order:5},{id:"api-development",title:"API Development",shortTitle:"API Development",tagline:"Reliable backends for products, teams, and integrations",description:"REST APIs, GraphQL endpoints, authentication, database design, and integrations built for secure, scalable product operations.",longDescription:`Backend infrastructure built to keep products secure, connected, and ready to scale:
    
    • RESTful API design & development
    • GraphQL API development
    • Microservices architecture
    • Database design & optimization
    • Authentication & authorization
    • Third-party API integrations
    • WebSocket/real-time APIs
    • API documentation (Swagger/OpenAPI)
    • Load testing & optimization`,icon:At,gradient:"from-green-600 to-lime-500",color:"#8BC34A",featured:!1,popular:!1,category:"development",technologies:["Node.js","Express","GraphQL","MongoDB","PostgreSQL","Docker"],features:["RESTful APIs","GraphQL APIs","Microservices","Authentication","Database Design","API Documentation"],deliveryTime:"2-5 weeks",startingPrice:1e3,highlight:!1,order:6},{id:"ui-ux-design",title:"UI/UX Design",shortTitle:"UI/UX Design",tagline:"User flows designed around clarity and conversion",description:"Wireframes, prototypes, and design systems that make products easier to understand, navigate, and trust.",longDescription:`UI/UX design services focused on clarity, usability, and business outcomes:
    
    • User research & analysis
    • Wireframing & prototyping
    • UI design & visual identity
    • Design system creation
    • User testing & feedback
    • Responsive design
    • Accessibility compliance
    • Design-to-development handoff
    • Design audits & improvements`,icon:Tt,gradient:"from-pink-500 to-rose-500",color:"#E91E63",featured:!1,popular:!1,category:"design",technologies:["Figma","Adobe XD","Sketch","Photoshop","Illustrator"],features:["User Research","Wireframing","UI Design","Prototyping","Design Systems","User Testing"],deliveryTime:"1-3 weeks",startingPrice:500,highlight:!1,order:7},{id:"devops-cloud",title:"DevOps & Cloud Services",shortTitle:"DevOps",tagline:"Deployment systems that keep products stable",description:"CI/CD pipelines, cloud deployment, containerization, monitoring, backups, and performance tuning for production-ready releases.",longDescription:`DevOps and cloud infrastructure services for smoother launches and more reliable operations:
    
    • CI/CD pipeline setup
    • Docker containerization
    • Kubernetes orchestration
    • Cloud infrastructure (AWS, GCP, Azure)
    • Serverless architecture
    • Monitoring & logging
    • Security & compliance
    • Backup & disaster recovery
    • Performance optimization`,icon:jt,gradient:"from-gray-600 to-slate-500",color:"#607D8B",featured:!1,popular:!1,category:"devops",technologies:["Docker","Kubernetes","AWS","GitHub Actions","Jenkins"],features:["CI/CD Pipelines","Containerization","Cloud Infrastructure","Monitoring","Security","Performance Tuning"],deliveryTime:"2-4 weeks",startingPrice:800,highlight:!1,order:8}],hn=[{id:"basic",name:"Basic",description:"Best for lean launches, MVP pages, and focused business needs",features:["Responsive Design","Basic Functionality","Contact Form","SEO Setup","1 Month Support","3 Revisions"],recommended:!1},{id:"standard",name:"Standard",description:"Best for growing businesses that need stronger features and polish",features:["Everything in Basic","Advanced Functionality","CMS Integration","Analytics Setup","3 Months Support","6 Revisions","Performance Optimization"],recommended:!0},{id:"premium",name:"Premium",description:"Best for teams that need a complete, scalable digital system",features:["Everything in Standard","Custom Features","E-Commerce Integration","Priority Support","6 Months Support","Unlimited Revisions","Security Audit","Performance Monitoring"],recommended:!1}],xn=[{step:1,title:"Discovery",description:"Clarifying business goals, users, scope, and success metrics",icon:"🔍",duration:"1-2 days"},{step:2,title:"Planning",description:"Defining features, milestones, technical direction, and delivery plan",icon:"📋",duration:"2-3 days"},{step:3,title:"Design",description:"Designing clear screens, user flows, and responsive layouts",icon:"🎨",duration:"3-7 days"},{step:4,title:"Development",description:"Building the product with maintainable code and practical architecture",icon:"💻",duration:"2-6 weeks"},{step:5,title:"Testing",description:"Checking responsiveness, performance, edge cases, and key workflows",icon:"🧪",duration:"3-7 days"},{step:6,title:"Launch",description:"Deploying the product, handing over access, and supporting go-live",icon:"🚀",duration:"2-3 days"}],gn=[{id:"quality",title:"Maintainable Code",description:"Clean architecture and readable code that can grow with your business",icon:de},{id:"communication",title:"Clear Communication",description:"Regular progress updates, direct answers, and no confusing technical fog",icon:Ue},{id:"delivery",title:"On-Time Delivery",description:"Realistic timelines, organized milestones, and dependable execution",icon:Ne},{id:"support",title:"Post-Launch Support",description:"Launch support, fixes, improvements, and maintenance after delivery",icon:mr},{id:"experience",title:"Proven Experience",description:"Hands-on delivery across business websites, stores, dashboards, and apps",icon:zt},{id:"innovation",title:"Practical Technology",description:"Modern tools chosen for speed, reliability, and long-term value",icon:kr}],$t=()=>se.filter(t=>t.featured);se.filter(t=>t.featured).length,se.filter(t=>t.popular).length;$t().slice(0,4);const fn=()=>{const t=$t().slice(0,4),n={code:O,layout:Ct,smartphone:It,"shopping-cart":qe,server:At,globe:ne,"pen-tool":Tt,cloud:jt},r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},o={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4,ease:"easeOut"}}},i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.4}}},l={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.3,ease:"easeOut"}}};return e.jsxs("section",{id:"services",className:"py-20 md:py-24 bg-primary/40 relative overflow-hidden",children:[e.jsxs("div",{className:"absolute inset-0 z-0",children:[e.jsx("div",{className:`\r
          absolute inset-0\r
          bg-gradient-to-b from-primary/30 via-transparent to-primary/20\r
        `}),e.jsx("div",{className:`\r
          absolute inset-0\r
          bg-grid-pattern opacity-[0.03]\r
          bg-[length:60px_60px]\r
        `}),e.jsx("div",{className:`\r
          absolute top-1/2 -left-32\r
          w-64 h-64\r
          bg-accent/5\r
          rounded-full blur-3xl\r
        `}),e.jsx("div",{className:`\r
          absolute bottom-1/2 -right-32\r
          w-64 h-64\r
          bg-accent/5\r
          rounded-full blur-3xl\r
        `})]}),e.jsxs("div",{className:"container mx-auto px-6 relative z-10",children:[e.jsxs(a.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},className:"max-w-3xl mx-auto mb-16",children:[e.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[e.jsx("div",{className:"w-4 h-px bg-accent/50"}),e.jsx("span",{className:"font-mono text-sm text-accent uppercase tracking-widest",children:"Services"}),e.jsx("div",{className:"w-4 h-px bg-accent/50"})]}),e.jsxs("h2",{className:`\r
            font-heading font-bold\r
            text-4xl md:text-5xl\r
            text-text-heading\r
            text-center\r
            mb-6\r
          `,children:["What I ",e.jsx("span",{className:"text-accent",children:"Offer"})]}),e.jsx("p",{className:`\r
            text-lg text-text-body/80\r
            text-center\r
            max-w-2xl mx-auto\r
            leading-relaxed\r
          `,children:"Business-focused web, mobile, and e-commerce solutions built to look sharp, load fast, and support real growth from first click to launch."})]}),e.jsx(a.div,{variants:r,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.1},className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:t.map((s,u)=>{var p;const c=s.icon?n[s.icon]:O,g=c?e.jsx(c,{className:"text-accent",size:24}):e.jsx(O,{className:"text-accent",size:24});return e.jsx(a.div,{variants:o,whileHover:{y:-5},transition:{duration:.2},children:e.jsxs("div",{className:`\r
                  h-full\r
                  bg-gradient-to-b from-primary/40 to-primary/20\r
                  border border-border/50\r
                  rounded-xl\r
                  p-6\r
                  hover:border-accent/30\r
                  hover:shadow-lg hover:shadow-accent/5\r
                  transition-all duration-300\r
                  group\r
                  flex flex-col\r
                `,children:[e.jsx("div",{className:`\r
                    w-14 h-14\r
                    flex items-center justify-center\r
                    bg-gradient-to-br from-accent/10 to-accent/5\r
                    border border-accent/20\r
                    rounded-lg\r
                    mb-6\r
                    group-hover:scale-110\r
                    group-hover:border-accent/30\r
                    transition-all duration-300\r
                  `,children:g}),e.jsx("h3",{className:`\r
                    font-heading font-semibold\r
                    text-xl text-text-heading\r
                    mb-3\r
                    group-hover:text-accent\r
                    transition-colors duration-300\r
                  `,children:s.shortTitle}),e.jsx("p",{className:`\r
                    text-text-body/70\r
                    text-sm leading-relaxed\r
                    mb-4\r
                    flex-grow\r
                  `,children:s.description}),(p=s.features)==null?void 0:p.slice(0,2).map((d,x)=>e.jsxs("div",{className:`\r
                        flex items-center gap-2\r
                        text-sm text-text-body/60\r
                        mb-1\r
                        group-hover:text-text-body/80\r
                        transition-colors duration-300\r
                      `,children:[e.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-accent/50"}),e.jsx("span",{children:d})]},x)),e.jsxs("a",{href:`/services#${s.id}`,className:`\r
                      inline-flex items-center gap-1\r
                      text-accent text-sm font-medium\r
                      mt-6 pt-4\r
                      border-t border-border/30\r
                      group-hover:border-accent/30\r
                      transition-colors duration-300\r
                      w-fit\r
                    `,children:[e.jsx("span",{children:"Learn more"}),e.jsx(te,{className:`\r
                      group-hover:translate-x-1\r
                      transition-transform duration-300\r
                    `,size:16})]})]})},s.id)})}),e.jsx(a.div,{variants:i,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:`\r
            mt-20\r
            grid grid-cols-2 md:grid-cols-4\r
            gap-4\r
            max-w-3xl mx-auto\r
          `,children:[{value:"50+",label:"Projects",color:"from-blue-400 to-cyan-400"},{value:"100%",label:"Satisfaction",color:"from-green-400 to-emerald-400"},{value:"2+",label:"Years",color:"from-purple-400 to-pink-400"},{value:"24/7",label:"Support",color:"from-orange-400 to-red-400"}].map((s,u)=>e.jsxs(a.div,{variants:l,className:`\r
                text-center\r
                p-5\r
                bg-primary/30 border border-border/30\r
                rounded-xl\r
                hover:border-accent/20\r
                transition-all duration-300\r
              `,children:[e.jsx("div",{className:`
                font-heading font-bold
                text-2xl md:text-3xl
                mb-1
                bg-gradient-to-r ${s.color}
                bg-clip-text text-transparent
              `,children:s.value}),e.jsx("div",{className:`\r
                text-xs text-text-body/60\r
                font-medium uppercase tracking-wider\r
              `,children:s.label})]},u))}),e.jsx(a.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.3},className:`\r
            mt-16 text-center\r
          `,children:e.jsxs("a",{href:"/services",className:`\r
              inline-flex items-center gap-3\r
              px-6 py-3\r
              bg-gradient-to-r from-accent/10 to-accent/5\r
              border border-accent/20\r
              rounded-lg\r
              text-accent font-medium\r
              hover:from-accent/15 hover:to-accent/10\r
              hover:border-accent/30\r
              hover:shadow-lg hover:shadow-accent/10\r
              transition-all duration-300\r
              group\r
            `,children:[e.jsx("span",{children:"View all services"}),e.jsx(te,{className:`\r
              group-hover:translate-x-1\r
              transition-transform duration-300\r
            `})]})})]})]})},Xe="/assets/ecom-D0HL2eYO.jpg",bn="/assets/ecom1-BD7Z5hOC.PNG",yn="/assets/ecom2-4YESSfFc.PNG",vn="/assets/ecom4-CuXyBwfl.PNG",jn="/assets/ecom5-BdyQR4nD.png",Ke="/assets/10%20(9)-CbV9geg_.png",wn="/assets/10-L-bQbONW.png",Nn="/assets/10%20(2)-B85zan73.png",kn="/assets/10%20(3)-rozInJQI.png",Sn="/assets/10%20(4)-DmZvdwqe.png",Cn="/assets/10%20(5)-C50qb69a.png",Pn="/assets/10%20(6)-BVHVTy54.png",zn="/assets/10%20(7)-C-piY6gJ.png",Tn="/assets/10%20(8)-B0pE5tnj.png",An="/assets/10%20(10)-C0rcgyOC.png",In="/assets/10%20(11)-BveCvB_z.png",Ze="/assets/shop1-C7mIBFPe.PNG",Mn="/assets/shop2-1LhBUOQN.PNG",Ln="/assets/shop3-D2GZ8PhG.PNG",Bn="/assets/shop4-Dk0bki_U.PNG",Fn="/assets/shop5-CGu_JUsG.PNG",et="/assets/codex-DiY72bl_.jpeg",Rn="/assets/codex1-BSyz1JOx.jpeg",Dn="/assets/codex2-BTANY6ZP.jpeg",Wn="/assets/codex3-YjNMiVyY.jpeg",En="/assets/codex4-uhe_ptfw.jpeg",Hn="/assets/codex5-BRWwxTEL.jpeg",$n="/assets/codex6-G5M19KJ2.jpg",tt="/assets/webx-G0wGBLvc.jpeg",_n="/assets/webx1-YwJ24LY1.jpeg",Vn="/assets/webx2-BHNdukUl.jpeg",On="/assets/webx3-BGKpKpfM.jpeg",qn="/assets/webx4-C3QAzGHi.jpeg",Un="/assets/webx5-CltWsvGM.jpg",Gn="/assets/webx6-DcrxE1rs.jpeg",rt="/assets/shopi-DxkYSE0o.PNG",Jn="/assets/shopi1-BBD8bX5o.PNG",Qn="/assets/shopi2-BBoHicT_.PNG",Yn="/assets/shopi3-KmJI-aB_.PNG",Xn="/assets/shopi4-DxJXlkeA.PNG",nt="/assets/H-CfSpWANV.PNG",Kn="/assets/H1-DfAz_VPU.PNG",Zn="/assets/H2-BO9FayZ6.PNG",ea="/assets/H3-g5yWm_eE.PNG",ta="/assets/H4-BVysumD4.PNG",ra="/assets/H5-CUvVXirV.PNG",na="/assets/H6-D2Nc4r8r.PNG",aa="/assets/H7-CZZD15HS.PNG",ia="/assets/H8-C-Swyecj.PNG",sa="/assets/H9-CXgQ99BM.PNG",at="/assets/S-CeXgvzjd.png",oa="/assets/S1-BsiJB6Xo.png",la="/assets/S2-CPiu5h8p.png",ca="/assets/S3-DSBTqwPT.jpg",da="/assets/S4-CO1VOL_9.png",ma="/assets/S5-D2SUJqqF.png",pa="/assets/S6-ChYJicN4.jpg",ua="/assets/S7-CGPWV-lt.jpg",ha="/assets/S8-Diu_X3Af.png",xa="/assets/S9-Cp52go2m.png",ga="/assets/S10-B4ub23lJ.png",Be="/assets/b1-mq7lx6WN.png",fa="/assets/business-BPt7mv3M.mp4",it="/assets/M1-DFfHhxKt.png",ba="/assets/M2-CknAfWqa.png",ya="/assets/M3-TGgDqYOq.png",va="/assets/M4-CwTvDvae.png",st="/assets/Dr1-BM8x-YCi.png",ja="/assets/Dr2-DMpd9jwy.png",wa="/assets/Dr3-Do0QjTmY.png",Na="/assets/Dr4-Ck97tLPR.png",ka=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#112240" />
        <stop offset="100%" stop-color="#0A192F" />
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#bg)" />
    <rect x="48" y="48" width="704" height="504" rx="24" fill="none" stroke="#64FFDA" stroke-opacity="0.2" />
    <text x="400" y="275" text-anchor="middle" font-size="38" font-family="Arial, sans-serif" fill="#FFFFFF">
      Project Image
    </text>
    <text x="400" y="325" text-anchor="middle" font-size="22" font-family="Arial, sans-serif" fill="#8892B0">
      Coming soon
    </text>
  </svg>
`,He=`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(ka)}`,Sa=/\.(mp4|webm|ogg)$/i,oe=(t="")=>Sa.test(t),Ca=(t,n,r,o)=>({id:`${n}-${r}`,type:oe(t)?"video":"image",src:t,alt:`${n} ${r+1}`,poster:o||""}),$=({thumbnail:t,alt:n,sources:r,poster:o})=>{const i=r.map((s,u)=>Ca(s,n,u,o||t)),l=i.find(s=>s.type==="image")||i[0];return{thumbnail:t||(l==null?void 0:l.poster)||(l==null?void 0:l.src)||He,images:i.map(s=>s.src),media:i,primaryMedia:l,alt:n}},Pa={"medical-ecommerce-saas":$({thumbnail:it,alt:"Healthcare Commerce & E-Prescription Platform",sources:[it,ba,ya,va]}),"clinic-appointment-saas":$({thumbnail:st,alt:"Multi-Tenant Clinic Management SaaS",sources:[st,ja,wa,Na]}),"ecommerce-mern":$({thumbnail:Xe,alt:"E-Commerce Website (MERN + Admin Panel)",sources:[Xe,bn,yn,vn,jn]}),"hospital-mern":$({thumbnail:nt,alt:"Hospital Website (MERN)",sources:[nt,Kn,Zn,ea,ta,ra,na,aa,ia,sa]}),"wordpress-business":$({thumbnail:Be,alt:"Real Estate WordPress Platform Built From Scratch",sources:[Be,fa],poster:Be}),"phishing-detection":$({thumbnail:at,alt:"AI-Based Phishing Detection System",sources:[at,oa,la,ca,da,ma,pa,ua,ha,xa,ga]}),"multi-wp-sites":$({thumbnail:Ke,alt:"Multi WordPress Websites Collection",sources:[Ke,wn,Nn,kn,Sn,Cn,Pn,zn,Tn,An,In]}),"shopify-custom":$({thumbnail:Ze,alt:"Shopify Store From Scratch",sources:[Ze,Mn,Ln,Bn,Fn]}),"shopify-store":$({thumbnail:rt,alt:"Professional Shopify Store",sources:[rt,Jn,Qn,Yn,Xn]}),"wp-theme-codex":$({thumbnail:et,alt:"Custom WordPress Theme - CodeX",sources:[et,Rn,Dn,Wn,En,Hn,$n]}),"wp-theme-webx":$({thumbnail:tt,alt:"Custom WordPress Theme - WebX",sources:[tt,_n,Vn,On,qn,Un,Gn]})},za=$({thumbnail:He,alt:"Project image coming soon",sources:[He]}),Ie=t=>Pa[t]||za,je=[{id:"saas-products",name:"SaaS Products",count:2,icon:"SaaS"},{id:"all",name:"All Projects",count:0,icon:"📁"},{id:"full-stack",name:"Full Stack",count:3,icon:"🚀"},{id:"ai-ml",name:"AI/ML",count:1,icon:"🤖"},{id:"web-development",name:"Web Development",count:4,icon:"🌐"},{id:"ecommerce",name:"E-Commerce",count:2,icon:"🛒"},{id:"design",name:"UI/UX Design",count:2,icon:"🎨"},{id:"wordpress",name:"WordPress",count:3,icon:"⚙️"}],V=[{id:"medical-ecommerce-saas",title:"Healthcare Commerce & E-Prescription Platform",shortTitle:"Healthcare Commerce",tagline:"B2B healthcare commerce, prescription management, and administration platform",description:"Developed a full-stack B2B healthcare commerce and e-prescription platform connecting practitioners, prescribers, patients, and operational administrators.",longDescription:`Designed and developed a production-grade healthcare commerce platform connecting practitioners, prescribers, patients, and operational administrators.

The system combines online product ordering with regulated prescription workflows. It supports prescription-required products, patient-level product allocation, BMI validation, secure PDF generation and signing, stock control, payments, order fulfilment, and transactional notifications.

**Key Features:**
- Multi-role authentication for practitioners, prescribers, customers, and administrators
- Professional account registration with document uploads and email verification
- Practitioner-to-prescriber invitation, approval, and relationship management
- Patient profile management with BMI validation and preserved order history
- Product catalogue with categories, promotions, VAT rules, stock levels, and practitioner-specific pricing
- Persistent shopping cart, wishlist, search, filtering, and product availability validation
- Prescription-required product allocation across patients and prescribers
- Per-product and category-level prescription quantity restrictions
- Automatic prescription PDF generation and secure digital signing
- Private AWS S3 document storage with time-limited signed URLs
- Order placement using bank transfer or hosted online payment processing
- Transaction-safe order creation, stock deduction, and prescription generation
- Order history, payment status, shipping, delivery, and fulfilment tracking
- Responsive practitioner and prescriber dashboards
- Secure administrator impersonation with token exchange and audit logging
- Operational dashboards for orders, sales, prescriptions, stock, and active offers

**Administration System:**
- Product, category, promotion, and stock management
- Practitioner and prescriber approval and document review
- Product-specific practitioner pricing
- Order editing, picking quantities, dispatch, cancellation, and payment updates
- Prescription and order PDF generation
- Delivery option and popup management
- System-user administration and password management
- Dashboard reporting and low-stock alerts
- Protected read-only SQL editor with pagination, query timeouts, blocked operations, and saved queries

**Technical Highlights:**
- Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS
- Server and client components with context-based cart and authentication state
- Recharts dashboards, TipTap rich-text editing, and canvas-based digital signatures
- NestJS 11, TypeScript, PostgreSQL with TypeORM, and modular REST APIs
- JWT authentication, role-based guards, Swagger/OpenAPI documentation, and Jest testing
- Redis-backed prescription and cart state with database fallback
- AWS S3 for private images, documents, and prescription PDFs
- AWS SES for transactional email delivery
- AWS ECR and EC2 for container deployment
- Worldpay hosted payment pages and callback processing
- Docker-based frontend and backend services
- GitHub Actions CI/CD for development, UAT, and production environments

**Engineering Contributions:**
- Modernized legacy backend behavior into a modular NestJS and PostgreSQL architecture
- Preserved API compatibility while resolving response-shape and database differences
- Stabilized checkout, VAT, pricing, stock, prescription allocation, and order-summary calculations
- Implemented transaction-safe order processing and post-commit prescriber notifications
- Improved authentication, password recovery, account activation, and impersonation workflows
- Added reliable AWS credential handling and secure signed-document access
- Built regression tests around high-risk prescription, order, user, and administrative workflows
- Diagnosed and resolved production issues across frontend state, backend logic, cloud configuration, and CI/CD pipelines`,client:"Software House Product",role:"Senior Full-Stack Developer",teamSize:1,duration:"Company Product",status:"completed",date:"2026-03-01",featured:!0,popular:!0,category:"saas-products",subcategory:"healthcare-commerce",technologies:["Next.js","React","TypeScript","NestJS","PostgreSQL","Redis","AWS","Docker","GitHub Actions"],tools:["VSCode","Git","AWS S3","AWS SES","AWS ECR","AWS EC2","Worldpay","Docker"],images:[],thumbnail:"",challenges:["Combining healthcare commerce with regulated prescription workflows","Maintaining accurate VAT, pricing, stock, prescription allocation, and order-summary calculations","Preserving legacy API compatibility while modernizing the backend architecture"],solutions:["Built modular NestJS and PostgreSQL services with transaction-safe order and prescription processing","Implemented role-based workflows for practitioners, prescribers, customers, and administrators","Integrated AWS S3, AWS SES, Docker, and GitHub Actions for secure document handling and CI/CD"],results:["Delivered a production-grade B2B healthcare commerce and e-prescription platform","Enabled prescription-required ordering, secure PDF signing, payments, stock control, and fulfilment tracking","Strengthened authentication, cloud integrations, regression testing, and production reliability"],order:0},{id:"clinic-appointment-saas",title:"Multi-Tenant Clinic Management SaaS",shortTitle:"Clinic Management SaaS",tagline:"Full-stack healthcare SaaS platform for clinics, patients, and platform administrators",description:"Designed and developed a multi-tenant clinic management SaaS serving clinic teams, practitioners, patients, and platform administrators within a secure branch-aware architecture.",longDescription:`A comprehensive multi-tenant clinic management platform designed to centralize clinical operations, patient engagement, appointment scheduling, payments, staff management, and platform administration. The system supports multiple clinics and branches while maintaining strict tenant isolation, role-based permissions, subscription entitlements, and auditable workflows.

The platform consists of three dedicated applications: Clinic Portal for clinic owners, practitioners, receptionists, and staff; Patient Portal for bookings, forms, payments, aftercare, and appointment management; and Super Admin Portal for tenant onboarding, plans, features, billing, risk monitoring, support, and platform governance.

**Core Features:**
- Multi-clinic and multi-branch tenant architecture
- Role-based access for clinic owners, practitioners, staff, patients, and platform administrators
- Subscription plans, feature entitlements, usage limits, and tenant-specific overrides
- Clinic registration, plan selection, Stripe checkout, and approval workflows
- Appointment calendar with location, practitioner, treatment, availability, closures, and rota validation
- Public booking links with guest booking, secure magic-link access, deposits, and confirmation policies
- Staff management with branches, departments, designations, services, rota requests, leave, and availability
- Patient records covering medical history, appointments, notes, forms, invoices, payments, and activity
- Digital medical and consent forms with patient signatures, versioning, secure links, and submission tracking
- Eight-step treatment records containing questionnaires, consent, clinical photos, treatment maps, notes, payments, and review
- Professional treatment-record and invoice PDF generation
- Inventory categories, brands, products, stock batches, stock in/out, adjustments, CSV import, and movement history
- Treatment-linked stock recipes, reservations, consumption, reconciliation, and practitioner usage adjustments
- Invoices, clinic discounts, deposits, refunds, disputes, reconciliation, and payment-attempt tracking
- Stripe subscriptions, webhooks, Customer Portal, Payment Element, and Stripe Connect onboarding
- AWS SES transactional email templates and Amazon S3 clinical file storage
- Support inbox, audit history, platform risk monitoring, analytics, and operational reporting
- Feature-gated marketing, shop, support, and training academy modules
- Integration framework for Stripe, Zoho, Worldpay, and delivery services

**Engineering Highlights:**
- Server-authoritative tenant, clinic, branch, and entitlement validation
- JWT authentication with role and feature-access guards
- Immutable inventory movements with idempotency and stock-conflict protection
- Secure, time-limited tokens for account activation, forms, appointments, and guest access
- Validated DTOs, normalized API errors, security headers, and controlled CORS
- Webhook idempotency and event persistence for reliable payment processing
- Shared branding, UI components, authentication, feature catalogues, and API clients across portals
- Automated database migrations and global default provisioning during deployment
- Extensive API end-to-end coverage across booking, permissions, inventory, forms, plans, and Stripe
- Dockerized CI/CD pipelines using GitHub Actions, Amazon ECR, and EC2 with deployment rollback support

**Technology Stack:**
- Next.js 14, React 18, TypeScript, NestJS, Prisma, and PostgreSQL
- Tailwind CSS for responsive portal interfaces
- Stripe subscriptions, checkout, Payment Element, Customer Portal, webhooks, and Stripe Connect
- AWS SES for transactional emails and Amazon S3 for clinical file storage
- Docker, GitHub Actions, Amazon ECR, and EC2 for CI/CD and deployment
- Jest and Playwright for API and product workflow coverage`,client:"Software House Product",role:"Full-Stack Developer / SaaS Product Engineer",teamSize:1,duration:"Company Product",status:"completed",date:"2026-04-01",featured:!0,popular:!0,category:"saas-products",subcategory:"clinic-management",technologies:["Next.js","React","TypeScript","NestJS","Prisma","PostgreSQL","Tailwind CSS","Stripe","AWS SES","Amazon S3","Docker","GitHub Actions","Amazon ECR","EC2","Jest","Playwright"],tools:["VSCode","Git","Stripe","AWS SES","Amazon S3","Docker","GitHub Actions","Amazon ECR","EC2"],images:[],thumbnail:"",challenges:["Supporting multiple clinics and branches while maintaining strict tenant isolation","Coordinating appointments, staff rotas, treatment records, forms, inventory, invoices, and payments across role-specific portals","Keeping subscription entitlements, feature gates, audit history, and payment events reliable at platform scale"],solutions:["Implemented server-authoritative tenant, clinic, branch, role, and entitlement validation","Built dedicated Clinic, Patient, and Super Admin portals with shared UI, authentication, feature catalogues, and API clients","Added secure token flows, webhook idempotency, immutable inventory movements, automated migrations, and Dockerized CI/CD pipelines"],results:["Delivered a multi-tenant clinic management SaaS for clinic teams, patients, and platform administrators","Centralized appointment scheduling, public booking, staff rota management, clinical records, inventory, invoicing, and Stripe payments","Improved operational reliability through audit logging, AWS communications, secure file storage, and extensive test coverage"],order:.1},{id:"ecommerce-mern",title:"E-Commerce Website (MERN + Admin Panel)",shortTitle:"MERN E-Commerce",tagline:"Revenue-ready MERN store with admin control",description:"A production-style MERN commerce platform with secure authentication, product management, cart, wishlist, order workflows, inventory control, and an admin dashboard for day-to-day operations.",longDescription:`A business-ready e-commerce solution built with the MERN stack, combining a smooth customer storefront with practical administrative controls.

**Key Features:**
- User authentication with JWT
- Product catalog with search and filtering
- Shopping cart and wishlist functionality
- Order management system
- Secure payment processing
- Admin dashboard for inventory management
- Customer order tracking
- Product reviews and ratings

**Technical Highlights:**
- Full MERN stack implementation
- RESTful API architecture
- JWT-based authentication
- Admin role-based access control
- Responsive design with Tailwind CSS
- Secure payment integration`,client:"Retail Business",role:"Full Stack Developer",teamSize:1,duration:"10 weeks",status:"completed",date:"2024-03-15",launchDate:"2024-06-01",featured:!0,popular:!0,category:"full-stack",subcategory:"ecommerce",technologies:["React","Node.js","Express","MongoDB","JWT","Tailwind"],tools:["VSCode","Git","Postman","MongoDB Compass"],caseStudy:"/projects/ecommerce-mern-case-study",images:[],thumbnail:"",challenges:["Implementing secure admin authentication","Managing real-time inventory updates","Handling concurrent user sessions"],solutions:["Implemented JWT with role-based access control","Used MongoDB transactions for inventory consistency","Optimized API responses with Redis caching"],results:["Secure admin panel with full product management","Real-time inventory tracking","Scalable architecture for high traffic"],order:1},{id:"hospital-mern",title:"Hospital Website (MERN)",shortTitle:"Hospital Management",tagline:"Appointment and doctor management for healthcare teams",description:"A healthcare web platform with doctor profiles, department pages, appointment booking, patient-friendly service discovery, and admin tools for managing doctors and appointments.",longDescription:`A healthcare management system built with MERN stack to improve appointment intake, doctor visibility, and admin coordination.

**Key Features:**
- Doctor profiles and specialization
- Appointment booking system
- Department listings
- Patient registration
- Admin dashboard for managing appointments
- Doctor schedule management
- Service catalog

**Technical Highlights:**
- MERN stack implementation
- Appointment scheduling system
- Admin and user role management
- Responsive design
- Secure data handling`,client:"Healthcare Provider",role:"Full Stack Developer",teamSize:2,duration:"8 weeks",status:"completed",date:"2024-01-20",featured:!0,popular:!0,category:"full-stack",subcategory:"healthcare",technologies:["React","Node.js","Express","MongoDB","Tailwind"],images:[],thumbnail:"",order:3},{id:"phishing-detection",title:"AI-Based Phishing Detection System",shortTitle:"Phishing Detection AI",tagline:"AI-powered URL risk detection for security workflows",description:"A machine learning phishing detection system using BERT, CNN, URL feature engineering, fuzzy domain similarity, SMOTE balancing, and real-time predictions through a Gradio interface.",longDescription:`An AI-powered phishing detection system designed to identify suspicious URLs and support faster security decision-making.

**Key Features:**
- Hybrid BERT + CNN model architecture
- Advanced URL feature extraction
- Fuzzy domain similarity checking
- SMOTE for class balancing
- Real-time prediction interface
- Model performance analytics

**Technical Highlights:**
- Python-based machine learning pipeline
- Transformer models for text analysis
- CNN for pattern recognition
- Gradio for user interface
- Pandas for data processing
- TensorFlow/Keras for model training`,client:"Security Company",role:"AI/ML Engineer",teamSize:1,duration:"12 weeks",status:"completed",date:"2024-04-05",featured:!0,popular:!0,category:"ai-ml",subcategory:"security",technologies:["Python","TensorFlow","Transformers","Pandas","Gradio"],images:[],thumbnail:"",order:4},{id:"wordpress-business",title:"Real Estate WordPress Platform Built From Scratch",shortTitle:"Real Estate Platform",tagline:"Scalable property CMS for real estate operations",description:"A custom WordPress real estate platform built with Underscores, custom post types, taxonomies, dedicated templates, and an admin-friendly CMS for managing property listings at scale.",longDescription:`A custom real estate WordPress platform built from scratch without page builders, focused on clean architecture, scalable listings, and an efficient admin experience.

**Key Features:**
- 3 Custom Post Types for Properties, Agents, and Locations
- 3 Custom Taxonomies for structured content organization
- Dedicated templates following WordPress template hierarchy
- Admin-friendly CMS for easy property management
- Scalable architecture for large listing volumes

**Technical Highlights:**
- WordPress Underscores starter theme
- Custom Post Types and Taxonomies API
- Template hierarchy implementation
- REST API support for Gutenberg
- Responsive design using CSS variables
- Optimized permalink structure

**Challenges Solved:**
- Fixed 404 issues with proper rewrite rules
- Connected taxonomies across multiple post types
- Maintained design consistency with reusable components

**Result:**
- A professional and scalable real estate platform that makes managing hundreds of property listings efficient and maintainable while following WordPress best practices`,client:"Real Estate Business",role:"WordPress Developer",teamSize:1,duration:"3 weeks",status:"completed",date:"2024-03-01",featured:!1,popular:!0,category:"wordpress",subcategory:"real-estate",technologies:["WordPress","PHP","Underscores","Gutenberg","REST API","CSS"],images:[],thumbnail:"",order:5},{id:"wp-theme-webx",title:"Custom WordPress Theme — WebX",shortTitle:"WebX Theme",tagline:"Fast custom WordPress theme for professional websites",description:"A lightweight custom WordPress theme with optimized performance, reusable sections, custom widgets, theme options, and a clean structure for easy content management.",longDescription:`A custom WordPress theme developed from scratch for fast loading, flexible content control, and maintainable website operations.

**Key Features:**
- Lightweight and fast loading
- Custom theme options panel
- Reusable components
- Custom widgets
- Performance optimization
- SEO friendly structure
- Responsive design

**Technical Highlights:**
- Custom theme development from scratch
- Advanced Custom Fields integration
- Performance optimization techniques
- Clean and maintainable code
- Cross-browser compatibility`,client:"Theme Marketplace",role:"WordPress Developer",teamSize:1,duration:"4 weeks",status:"completed",date:"2024-02-15",featured:!0,popular:!1,category:"wordpress",subcategory:"theme-development",technologies:["WordPress","PHP","ACF","JavaScript","CSS"],images:[],thumbnail:"",order:6},{id:"wp-theme-codex",title:"Custom WordPress Theme — CodeX",shortTitle:"CodeX Theme",tagline:"Flexible WordPress theme for content-led brands",description:"A fast WordPress theme with custom post types, dynamic sections, global options, reusable blocks, and a mobile-first structure for professional publishing.",longDescription:`A modern WordPress theme built for flexible content teams that need speed, reusable sections, and reliable editing workflows.

**Key Features:**
- Custom post types support
- Dynamic content sections
- Global theme options
- Reusable Gutenberg blocks
- Performance optimized
- Mobile-first design
- Documentation included

**Technical Highlights:**
- Advanced theme architecture
- Gutenberg block development
- Dynamic content handling
- Theme customizer integration
- Security best practices`,client:"Web Development Agency",role:"WordPress Developer",teamSize:1,duration:"5 weeks",status:"completed",date:"2024-01-30",featured:!1,popular:!0,category:"wordpress",subcategory:"theme-development",technologies:["WordPress","PHP","JavaScript","ACF","CSS"],images:[],thumbnail:"",order:7},{id:"multi-wp-sites",title:"Multi WordPress Websites Collection",shortTitle:"WordPress Collection",tagline:"WordPress websites for multiple business models",description:"A collection of WordPress builds for clothing, retail, publishing, news, and portfolio use cases, with e-commerce setup, custom themes, SEO basics, and performance improvements.",longDescription:`A portfolio of WordPress websites built for different industries and business goals.

**Projects Included:**
1. Clothing Store - E-commerce fashion website
2. E-commerce Shop - Online retail store
3. Personal Blog - Content publishing platform
4. News Portal - News aggregation website
5. Portfolio Site - Creative portfolio showcase

**Technical Highlights:**
- WooCommerce integration for e-commerce
- Custom theme development
- Plugin customization
- Performance optimization
- SEO implementation`,client:"Various Clients",role:"WordPress Developer",teamSize:1,duration:"12 weeks",status:"completed",date:"2024-03-20",featured:!1,popular:!1,category:"wordpress",subcategory:"multi-site",technologies:["WordPress","Elementor","WooCommerce","PHP"],images:[],thumbnail:"",order:8},{id:"shopify-store",title:"Professional Shopify Store",shortTitle:"Shopify Store",tagline:"Shopify store optimized for trust and checkout flow",description:"A conversion-focused Shopify store with custom theme work, optimized product pages, payment setup, app configuration, speed improvements, SEO basics, and analytics tracking.",longDescription:`A professional Shopify store built to improve buyer trust, product discovery, and checkout completion.

**Key Features:**
- Custom theme customization
- Optimized product pages
- Payment gateway integration
- Shopify apps configuration
- Speed optimization
- Mobile-responsive design
- SEO implementation
- Analytics setup

**Technical Highlights:**
- Shopify Liquid templating
- Custom CSS/JavaScript
- App integration
- Performance optimization
- Conversion rate optimization techniques`,client:"E-commerce Business",role:"Shopify Developer",teamSize:1,duration:"3 weeks",status:"completed",date:"2024-01-15",featured:!1,popular:!0,category:"ecommerce",subcategory:"shopify",technologies:["Shopify","Liquid","Theme Customization"],images:[],thumbnail:"",order:9},{id:"shopify-custom",title:"Shopify Store From Scratch",shortTitle:"Custom Shopify",tagline:"Custom Shopify experience for a growing store",description:"A from-scratch Shopify build with custom UI enhancements, organized product structure, store automation, optimized checkout flow, and performance-focused frontend work.",longDescription:`A Shopify store developed from the ground up with custom implementation choices that support better merchandising and smoother operations.

**Key Features:**
- Custom UI/UX design
- Product structure optimization
- Store automation setup
- Optimized checkout flow
- Custom functionality
- Performance optimization
- Security implementation

**Technical Highlights:**
- Custom theme development
- Liquid template customization
- JavaScript enhancements
- Checkout customization
- API integrations`,client:"Startup E-commerce",role:"Shopify Developer",teamSize:1,duration:"4 weeks",status:"completed",date:"2024-02-01",featured:!1,popular:!0,category:"ecommerce",subcategory:"shopify",technologies:["Shopify","Liquid","Custom CSS/JS"],images:[],thumbnail:"",order:10}],_t=t=>{const n=V.find(o=>o.id===t);if(!n)return null;const r=Ie(t);return{...n,...r,imageAlt:r.alt}},Vt=()=>V.filter(t=>t.featured).map(t=>({...t,...Ie(t.id)})),Ta=()=>V.map(t=>({...t,...Ie(t.id)})),Aa=(t,n=3)=>{const r=_t(t);return r?V.filter(o=>o.id!==t&&o.category===r.category).slice(0,n).map(o=>({...o,...Ie(o.id)})):[]},Ia=()=>{const t=V.flatMap(n=>n.technologies);return[...new Set(t)].sort()},fe={total:V.length,featured:V.filter(t=>t.featured).length,popular:V.filter(t=>t.popular).length,categories:je.length-1,technologies:Ia().length,byStatus:{completed:V.filter(t=>t.status==="completed").length,inProgress:V.filter(t=>t.status==="in-progress").length,planned:V.filter(t=>t.status==="planned").length}};Vt().slice(0,4);const Ma=()=>{const[t,n]=j.useState("all"),[r,o]=j.useState("grid"),[i,l]=j.useState(6),s=Vt(),u=je.filter(h=>h.id!=="all"),c=t==="all"?s:s.filter(h=>h.category===t),g=c.slice(0,i),p=u.map(h=>({...h,count:s.filter(S=>S.category===h.id).length})),d={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.07,delayChildren:.1}}},x={hidden:{opacity:0,y:30,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.4,ease:[.25,.1,.25,1]}},hover:{y:-8,scale:1.02,transition:{duration:.2,ease:"easeOut"}}},f=()=>{l(h=>h+6)},w=()=>{n("all"),l(6)},b=(h,S="")=>{var I,y,A,R,Y;const P=h.thumbnail||((I=h.primaryMedia)==null?void 0:I.poster)||((y=h.primaryMedia)==null?void 0:y.src)||h.image;return(((A=h.primaryMedia)==null?void 0:A.type)||(oe(P)?"video":"image"))==="video"?e.jsx("video",{src:((R=h.primaryMedia)==null?void 0:R.src)||P,poster:((Y=h.primaryMedia)==null?void 0:Y.poster)||h.thumbnail,className:S,muted:!0,playsInline:!0,preload:"metadata"}):e.jsx("img",{src:P,alt:h.imageAlt||h.title,className:S})};return e.jsxs("section",{id:"projects",className:`\r
      py-20 md:py-32 \r
      bg-gradient-to-b from-primary via-primary/95 to-primary/90\r
      relative overflow-hidden\r
    `,children:[e.jsxs("div",{className:"absolute inset-0 z-0",children:[e.jsx("div",{className:`\r
          absolute inset-0\r
          bg-[linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)]\r
          bg-[size:40px_40px]\r
          opacity-20\r
        `}),e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:["</>","{ }","div","const","=>"].map((h,S)=>e.jsx(a.div,{className:`\r
                absolute font-mono\r
                text-accent/5\r
                select-none\r
              `,style:{left:`${10+Math.random()*80}%`,top:`${10+Math.random()*80}%`,fontSize:`${Math.random()*20+12}px`},animate:{y:[0,Math.random()*100-50],x:[0,Math.random()*100-50],rotate:[0,360],opacity:[.1,.3,.1]},transition:{duration:Math.random()*30+30,repeat:1/0,ease:"linear"},children:h},S))}),e.jsx(a.div,{className:`\r
            absolute top-20 left-10\r
            w-80 h-80\r
            bg-gradient-to-r from-accent/10 to-accent/5\r
            rounded-full blur-3xl\r
          `,animate:{scale:[1,1.1,1],opacity:[.2,.3,.2]},transition:{duration:8,repeat:1/0,ease:"easeInOut"}}),e.jsx(a.div,{className:`\r
            absolute bottom-20 right-10\r
            w-96 h-96\r
            bg-gradient-to-l from-accent/8 to-accent/3\r
            rounded-full blur-3xl\r
          `,animate:{scale:[1.1,1,1.1],opacity:[.3,.2,.3]},transition:{duration:10,repeat:1/0,ease:"easeInOut"}})]}),e.jsxs("div",{className:"container mx-auto px-4 sm:px-6 relative z-10",children:[e.jsxs(a.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.6},className:"max-w-6xl mx-auto mb-16",children:[e.jsxs("div",{className:"flex items-center justify-center gap-4 mb-6",children:[e.jsx("div",{className:"w-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent"}),e.jsx("span",{className:`\r
              font-mono text-sm text-accent\r
              uppercase tracking-widest\r
              px-4 py-1\r
              bg-accent/10 border border-accent/20\r
              rounded-full\r
            `,children:"Portfolio"}),e.jsx("div",{className:"w-8 h-px bg-gradient-to-l from-transparent via-accent to-transparent"})]}),e.jsxs("h2",{className:`\r
            font-heading font-bold\r
            text-5xl md:text-6xl lg:text-7xl\r
            text-text-heading\r
            text-center\r
            mb-8\r
            leading-tight\r
          `,children:["Showcase of"," ",e.jsx("span",{className:`\r
              bg-gradient-to-r from-accent via-accent-hover to-accent\r
              bg-clip-text text-transparent\r
              animate-gradient\r
            `,children:"Excellence"})]}),e.jsx("p",{className:`\r
            text-xl text-text-body/80\r
            text-center\r
            max-w-3xl mx-auto\r
            leading-relaxed\r
            mb-10\r
          `,children:"Selected work built for real business use cases, from e-commerce platforms and admin dashboards to WordPress systems and AI-powered tools."}),e.jsxs("div",{className:"flex flex-wrap justify-center gap-6 mb-8",children:[e.jsxs("div",{className:`\r
              flex items-center gap-3\r
              px-4 py-2\r
              bg-primary/40 border border-border/30\r
              rounded-full\r
            `,children:[e.jsx("div",{className:`\r
                w-2 h-2 rounded-full\r
                bg-gradient-to-r from-green-400 to-emerald-400\r
                animate-pulse\r
              `}),e.jsxs("span",{className:"text-sm text-text-body/70",children:[e.jsxs("span",{className:"font-semibold text-text-heading",children:[V.length,"+"]})," Projects"]})]}),e.jsxs("div",{className:`\r
              flex items-center gap-3\r
              px-4 py-2\r
              bg-primary/40 border border-border/30\r
              rounded-full\r
            `,children:[e.jsx("div",{className:`\r
                w-2 h-2 rounded-full\r
                bg-gradient-to-r from-blue-400 to-cyan-400\r
                animate-pulse\r
              `}),e.jsxs("span",{className:"text-sm text-text-body/70",children:[e.jsx("span",{className:"font-semibold text-text-heading",children:u.length})," Categories"]})]}),e.jsxs("div",{className:`\r
              flex items-center gap-3\r
              px-4 py-2\r
              bg-primary/40 border border-border/30\r
              rounded-full\r
            `,children:[e.jsx("div",{className:`\r
                w-2 h-2 rounded-full\r
                bg-gradient-to-r from-purple-400 to-pink-400\r
                animate-pulse\r
              `}),e.jsxs("span",{className:"text-sm text-text-body/70",children:[e.jsx("span",{className:"font-semibold text-text-heading",children:"100%"})," Satisfaction"]})]})]})]}),e.jsxs(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:`\r
            flex flex-col md:flex-row\r
            justify-between items-center\r
            gap-6 mb-12\r
            p-6\r
            bg-gradient-to-br from-primary/30 to-primary/20\r
            border border-border/30\r
            rounded-2xl\r
            backdrop-blur-sm\r
          `,children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:`\r
              flex items-center gap-2\r
              px-4 py-2\r
              bg-primary/50 border border-border/30\r
              rounded-lg\r
            `,children:[e.jsx(St,{className:"text-accent"}),e.jsx("span",{className:"text-sm text-text-body font-medium",children:"Filter by"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("button",{onClick:()=>n("all"),className:`
                  px-4 py-2
                  text-sm font-medium
                  rounded-lg
                  transition-all duration-300
                  ${t==="all"?"bg-gradient-to-r from-accent to-accent-hover text-primary-dark shadow-lg shadow-accent/20":"bg-primary/50 text-text-body hover:text-accent hover:bg-accent/10 hover:border-accent/30 border border-transparent"}
                `,children:["All (",s.length,")"]}),p.map(h=>e.jsxs("button",{onClick:()=>n(h.id),className:`
                    px-4 py-2
                    text-sm font-medium
                    rounded-lg
                    transition-all duration-300
                    border
                    ${t===h.id?"bg-gradient-to-r from-accent to-accent-hover text-primary-dark shadow-lg shadow-accent/20 border-accent/50":"bg-primary/50 border-border/30 text-text-body hover:text-accent hover:bg-accent/10 hover:border-accent/30"}
                  `,children:[h.name," (",h.count,")"]},h.id))]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>o("grid"),className:`
                p-2.5 rounded-lg
                transition-all duration-300
                ${r==="grid"?"bg-accent text-primary-dark":"bg-primary/50 text-text-body hover:text-accent hover:bg-accent/10"}
              `,"aria-label":"Grid view",children:e.jsx(We,{size:18})}),e.jsx("button",{onClick:()=>o("list"),className:`
                p-2.5 rounded-lg
                transition-all duration-300
                ${r==="list"?"bg-accent text-primary-dark":"bg-primary/50 text-text-body hover:text-accent hover:bg-accent/10"}
              `,"aria-label":"List view",children:e.jsx(ke,{size:18})})]})]}),e.jsx(W,{mode:"wait",children:e.jsx(a.div,{variants:d,initial:"hidden",animate:"visible",exit:"hidden",className:`
              ${r==="grid"?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3":"flex flex-col"}
              gap-6
            `,children:g.length>0?g.map((h,S)=>{var P,B,I,y,A;return e.jsx(a.div,{variants:x,whileHover:"hover",className:r==="list"?"w-full":"",children:r==="grid"?e.jsx(Ht,{title:h.title,description:h.description,image:((P=h.primaryMedia)==null?void 0:P.src)||h.thumbnail||h.image,mediaType:(B=h.primaryMedia)==null?void 0:B.type,posterImage:((I=h.primaryMedia)==null?void 0:I.poster)||h.thumbnail,tags:((y=h.technologies)==null?void 0:y.slice(0,4))||[],category:h.category,liveUrl:h.liveUrl,githubUrl:h.githubUrl,featured:h.featured,to:`/portfolio/${h.id}`,layout:"grid"}):e.jsxs("div",{className:`\r
                      flex flex-col md:flex-row\r
                      bg-gradient-to-br from-primary/30 to-primary/20\r
                      border border-border/30\r
                      rounded-2xl\r
                      overflow-hidden\r
                      hover:border-accent/30\r
                      hover:shadow-xl hover:shadow-accent/5\r
                      transition-all duration-300\r
                      group\r
                    `,children:[e.jsxs("div",{className:`\r
                        md:w-1/3\r
                        relative overflow-hidden\r
                        bg-gradient-to-br from-primary to-primary/80\r
                        min-h-[200px] md:min-h-0\r
                      `,children:[b(h,`
                            w-full h-full object-cover
                            group-hover:scale-105
                            transition-transform duration-500
                          `),e.jsx("div",{className:`\r
                          absolute inset-0\r
                          bg-gradient-to-t from-primary/80 via-transparent to-transparent\r
                          opacity-0 group-hover:opacity-100\r
                          transition-opacity duration-300\r
                        `})]}),e.jsxs("div",{className:`\r
                        flex-1 p-6 md:p-8\r
                        flex flex-col\r
                      `,children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-4",children:[e.jsx("span",{className:`\r
                            px-3 py-1\r
                            text-xs font-medium\r
                            bg-accent/10 text-accent\r
                            rounded-full\r
                          `,children:h.category}),h.featured&&e.jsx("span",{className:`\r
                              px-3 py-1\r
                              text-xs font-medium\r
                              bg-gradient-to-r from-yellow-400/20 to-orange-400/20\r
                              text-yellow-300\r
                              border border-yellow-400/30\r
                              rounded-full\r
                            `,children:"Featured"})]}),e.jsx("h3",{className:`\r
                          font-heading font-bold\r
                          text-2xl text-text-heading\r
                          mb-3\r
                          group-hover:text-accent\r
                          transition-colors duration-300\r
                        `,children:h.title}),e.jsx("p",{className:`\r
                          text-text-body/80\r
                          leading-relaxed\r
                          mb-6 flex-grow\r
                        `,children:h.description}),e.jsxs("div",{className:`\r
                          flex flex-wrap items-center justify-between\r
                          gap-4\r
                          pt-6\r
                          border-t border-border/30\r
                        `,children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:(A=h.technologies)==null?void 0:A.slice(0,5).map((R,Y)=>e.jsx("span",{className:`\r
                                  px-3 py-1\r
                                  text-xs font-medium\r
                                  bg-primary/50 text-text-body/70\r
                                  rounded-full\r
                                `,children:R},Y))}),e.jsxs("div",{className:"flex items-center gap-3",children:[h.githubUrl&&e.jsx("a",{href:h.githubUrl,target:"_blank",rel:"noopener noreferrer",className:`\r
                                  p-2\r
                                  bg-primary/50 text-text-body\r
                                  rounded-lg\r
                                  hover:bg-accent/10 hover:text-accent\r
                                  transition-all duration-300\r
                                `,children:e.jsx(_e,{size:18})}),h.liveUrl&&e.jsx("a",{href:h.liveUrl,target:"_blank",rel:"noopener noreferrer",className:`\r
                                  p-2\r
                                  bg-primary/50 text-text-body\r
                                  rounded-lg\r
                                  hover:bg-accent/10 hover:text-accent\r
                                  transition-all duration-300\r
                                `,children:e.jsx(kt,{size:18})}),e.jsx(L,{to:`/portfolio/${h.id}`,className:`\r
                                px-4 py-2\r
                                text-sm font-medium\r
                                bg-gradient-to-r from-accent/10 to-accent/5\r
                                text-accent\r
                                rounded-lg\r
                                hover:from-accent/20 hover:to-accent/10\r
                                transition-all duration-300\r
                              `,children:"Case Study"})]})]})]})]})},h.id)}):e.jsxs(a.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},className:`\r
                  col-span-full\r
                  text-center py-20\r
                  bg-gradient-to-br from-primary/30 to-primary/20\r
                  border border-border/30\r
                  rounded-2xl\r
                `,children:[e.jsx("div",{className:"text-6xl mb-6",children:"🔍"}),e.jsx("h3",{className:`\r
                  font-heading font-semibold text-2xl text-text-heading\r
                  mb-4\r
                `,children:"No projects found"}),e.jsx("p",{className:"text-text-body/80 mb-6 max-w-md mx-auto",children:"No projects match your current filter. Try a different category or reset the filters."}),e.jsx("button",{onClick:w,className:`\r
                    px-6 py-3\r
                    bg-gradient-to-r from-accent/10 to-accent/5\r
                    border border-accent/20\r
                    text-accent font-medium\r
                    rounded-lg\r
                    hover:from-accent/20 hover:to-accent/10\r
                    hover:border-accent/30\r
                    transition-all duration-300\r
                  `,children:"Reset Filters"})]})},t+r)}),c.length>i&&g.length>0&&e.jsx(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.3},className:"text-center mt-12",children:e.jsx(N,{variant:"secondary",size:"lg",onClick:f,className:"group",children:e.jsxs("span",{className:"group-hover:translate-y-[-2px] transition-transform duration-300",children:["Load More (",c.length-i," remaining)"]})})}),e.jsx(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.4},className:"text-center mt-16",children:e.jsxs("div",{className:`\r
            inline-flex flex-col items-center\r
            gap-6\r
            p-8\r
            bg-gradient-to-br from-primary/30 to-primary/20\r
            border border-border/30\r
            rounded-2xl\r
            max-w-2xl mx-auto\r
          `,children:[e.jsx("h3",{className:`\r
              font-heading font-bold\r
              text-2xl md:text-3xl\r
              text-text-heading\r
            `,children:"Ready to start your project?"}),e.jsx("p",{className:"text-text-body/80",children:"Let's turn your idea into a polished, scalable product that is ready for clients, customers, and decision-makers."}),e.jsxs("div",{className:"flex flex-wrap gap-4 justify-center",children:[e.jsx(N,{variant:"primary",size:"lg",href:"/contact",className:"group",children:e.jsx("span",{className:"group-hover:translate-x-1 transition-transform duration-300",children:"Start a Project"})}),e.jsx(N,{variant:"secondary",size:"lg",href:"/portfolio",children:"View Full Portfolio"})]})]})})]})]})},La=[{id:"all",name:"All Testimonials",count:0},{id:"web-development",name:"Web Development",count:5},{id:"mobile-apps",name:"Mobile Apps",count:3},{id:"ecommerce",name:"E-Commerce",count:4},{id:"design",name:"UI/UX Design",count:2},{id:"wordpress",name:"WordPress",count:3}],Q=[{id:"testimonial-1",name:"Sarah Johnson",position:"CEO, TechStart Inc.",company:"TechStart Inc.",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",rating:5,quote:"Working with this team was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and exceeded all our expectations. The attention to detail and technical expertise is remarkable.",fullQuote:`I had the pleasure of working with this talented team on our e-commerce platform, and I couldn't be happier with the results. From the initial consultation to the final delivery, their professionalism and expertise were evident at every step.

They not only delivered a beautiful, functional platform but also provided valuable insights that improved our business processes. The platform has been running smoothly for months, and our conversion rates have increased significantly.

What impressed me most was their commitment to quality and their willingness to go above and beyond. They were always available to answer questions and make adjustments, even after the project was completed.`,project:"E-Commerce Platform",projectId:"ecommerce-platform",category:"web-development",date:"2024-05-15",featured:!0,verified:!0,social:{linkedin:"https://linkedin.com/in/sarahjohnson",twitter:"https://twitter.com/sarahj"},order:1},{id:"testimonial-2",name:"Michael Chen",position:"Product Manager, InnovateLabs",company:"InnovateLabs",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",rating:5,quote:"The mobile app they developed for us has been a game-changer. User engagement increased by 60% and we've received nothing but positive feedback from our users.",fullQuote:`As the Product Manager at InnovateLabs, I oversaw the development of our mobile application, and I must say, working with this team was one of the best decisions we made.

They took our vague ideas and turned them into a beautiful, intuitive app that our users love. The development process was smooth, with regular updates and excellent communication throughout.

The app has been live for six months now, and we've seen a 60% increase in user engagement. The code quality is excellent, making future updates and maintenance much easier than we anticipated.`,project:"Fitness Tracking App",projectId:"fitness-tracking-app",category:"mobile-apps",date:"2024-04-22",featured:!0,verified:!0,social:{linkedin:"https://linkedin.com/in/michaelchen"},order:2},{id:"testimonial-3",name:"Alex Rodriguez",position:"Marketing Director, CreativeMinds",company:"CreativeMinds",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",rating:5,quote:"Their AI content generator has revolutionized our marketing department. We're producing 3x more content with higher quality in less time.",fullQuote:`When we first considered implementing an AI content generation tool, we were skeptical about the quality and usefulness. However, this team proved all our concerns wrong.

They developed a custom AI content generator that perfectly fits our needs. The tool has been instrumental in scaling our content production without compromising quality. Our team can now produce three times more content while maintaining consistently high standards.

The implementation was smooth, and their support team has been incredibly responsive whenever we've had questions or needed adjustments. This has been one of the best investments we've made in our marketing technology stack.`,project:"AI Content Generator",projectId:"ai-content-generator",category:"ai-ml",date:"2024-06-10",featured:!0,verified:!0,social:{linkedin:"https://linkedin.com/in/alexrodriguez",twitter:"https://twitter.com/alexrod"},order:3},{id:"testimonial-4",name:"Jessica Williams",position:"Founder, LuxeFashion",company:"LuxeFashion",avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",rating:5,quote:"Our Shopify store conversion rate increased by 45% after the redesign. The team understood our brand perfectly and delivered exactly what we needed.",fullQuote:`As a luxury fashion brand, we needed a Shopify store that reflected our premium positioning while providing an exceptional shopping experience. This team delivered exactly that and more.

They took the time to understand our brand, our products, and our customers. The result was a stunning store that not only looks beautiful but also performs exceptionally well. Our conversion rate increased by 45% in the first month, and we continue to see improvements.

The attention to detail, from product photography optimization to checkout flow refinement, was impressive. They were true partners throughout the process, always available and responsive to our needs.`,project:"Premium Shopify Store",projectId:"shopify-store",category:"ecommerce",date:"2024-03-18",featured:!0,verified:!0,social:{linkedin:"https://linkedin.com/in/jessicawilliams",instagram:"https://instagram.com/jessicaw"},order:4},{id:"testimonial-5",name:"David Miller",position:"CTO, SecureTech Solutions",company:"SecureTech Solutions",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",rating:5,quote:"The corporate website they built for us is fast, secure, and perfectly represents our brand. Maintenance has been minimal thanks to their excellent coding practices.",fullQuote:`As the CTO of a technology company, I have high standards for any digital product we use. This team exceeded all expectations with our corporate website.

They delivered a website that not only looks professional but also performs exceptionally well. The code is clean, well-documented, and follows best practices, making maintenance much easier for our team.

Security was a major concern for us, and they implemented robust security measures that give us confidence in our online presence. The website has been running flawlessly for over a year with minimal downtime.`,project:"Corporate Business Website",projectId:"corporate-website",category:"wordpress",date:"2024-04-05",featured:!1,verified:!0,social:{linkedin:"https://linkedin.com/in/davidmiller"},order:5},{id:"testimonial-6",name:"Emma Thompson",position:"Head of Design, PixelPerfect",company:"PixelPerfect",avatar:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",rating:5,quote:"The design system they created has streamlined our entire development process. Our team's productivity has increased by 30% since implementation.",fullQuote:`As a design agency, we needed a comprehensive design system to ensure consistency across all our projects. This team delivered a design system that has transformed how we work.

The system is comprehensive, well-documented, and easy to use. It includes everything from color palettes and typography to complex component interactions. Our development team has been able to work 30% faster since implementing this system, and the consistency across projects has improved dramatically.

They worked closely with us to understand our needs and preferences, and the final product perfectly reflects our design philosophy while being practical and efficient to use.`,project:"UI Design System",projectId:"ui-design-system",category:"design",date:"2024-05-30",featured:!1,verified:!0,social:{linkedin:"https://linkedin.com/in/emmathompson",dribbble:"https://dribbble.com/emmat"},order:6},{id:"testimonial-7",name:"Robert Kim",position:"Operations Manager, FoodieGood",company:"FoodieGood",avatar:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",rating:4,quote:"The recipe app has been incredibly popular with our users. The development process was smooth, and the final product exceeded our expectations.",fullQuote:`Developing a recipe app came with its unique challenges, particularly around user experience and performance. This team handled these challenges expertly.

They developed an app that is not only beautiful and intuitive but also performs exceptionally well, even with large recipe databases. User feedback has been overwhelmingly positive, with particular praise for the app's design and ease of use.

The development process was well-managed, with regular updates and excellent communication. They were always willing to listen to our ideas and provide their expert input.`,project:"Recipe Discovery App",projectId:"recipe-app",category:"mobile-apps",date:"2024-06-25",featured:!1,verified:!0,social:{linkedin:"https://linkedin.com/in/robertkim"},order:7},{id:"testimonial-8",name:"Lisa Wang",position:"Project Lead, TaskFlow",company:"TaskFlow",avatar:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",rating:5,quote:"Their task management dashboard has transformed how our team collaborates. The real-time features and intuitive interface have boosted our productivity significantly.",fullQuote:`We needed a custom task management solution that could handle our team's complex workflows. This team delivered a solution that has exceeded all our expectations.

The dashboard is intuitive, powerful, and beautifully designed. The real-time collaboration features have eliminated communication gaps, and our team's productivity has seen a noticeable increase.

What I appreciated most was their attention to detail and willingness to understand our specific needs. They didn't just deliver a generic solution; they created something perfectly tailored to our workflow.`,project:"Task Management Dashboard",projectId:"task-management-app",category:"web-development",date:"2024-03-10",featured:!1,verified:!0,social:{linkedin:"https://linkedin.com/in/lisawang",twitter:"https://twitter.com/lisaw"},order:8}],Ba=t=>t==="all"?Q:Q.filter(n=>n.category===t),Ot=()=>Q.filter(t=>t.featured),Fa=()=>(Q.reduce((n,r)=>n+r.rating,0)/Q.length).toFixed(1);Q.length,Q.filter(t=>t.featured).length,Q.filter(t=>t.verified).length,Fa(),Q.filter(t=>t.rating===5).length,La.filter(t=>t.id!=="all").map(t=>({...t,count:Ba(t.id).length}));Ot().slice(0,3);const Ra=()=>{var c,g,p,d,x,f,w,b,h,S,P,B,I;const[t,n]=j.useState(0),r=Ot(),o={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.1}}},i={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4,ease:"easeOut"}}},l=()=>{n(y=>y===r.length-1?0:y+1)},s=()=>{n(y=>y===0?r.length-1:y-1)};T.useEffect(()=>{const y=setInterval(()=>{l()},5e3);return()=>clearInterval(y)},[t]);const u=y=>[...Array(5)].map((A,R)=>e.jsx(Mt,{className:R<y?"text-yellow-400 fill-yellow-400":"text-gray-400",size:14},R));return e.jsxs("section",{id:"testimonials",className:`\r
      py-20 md:py-24\r
      bg-gradient-to-b from-primary/40 via-primary/30 to-primary/40\r
      relative overflow-hidden\r
    `,children:[e.jsxs("div",{className:"absolute inset-0 z-0",children:[e.jsx("div",{className:`\r
          absolute inset-0\r
          bg-gradient-to-br from-primary/50 via-transparent to-primary/30\r
        `}),e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:[...Array(6)].map((y,A)=>e.jsx(a.div,{className:`\r
                absolute\r
                text-accent/5\r
                font-serif\r
                select-none\r
              `,style:{left:`${10+Math.random()*80}%`,top:`${10+Math.random()*80}%`,fontSize:`${Math.random()*30+30}px`},animate:{y:[0,Math.random()*40-20],rotate:[0,5],opacity:[.1,.2,.1]},transition:{duration:Math.random()*15+10,repeat:1/0,ease:"easeInOut"},children:'"'},A))}),e.jsx("div",{className:`\r
          absolute top-1/4 -left-1/4\r
          w-[400px] h-[400px]\r
          bg-gradient-to-r from-accent/5 to-transparent\r
          rounded-full blur-3xl\r
        `}),e.jsx("div",{className:`\r
          absolute bottom-1/4 -right-1/4\r
          w-[400px] h-[400px]\r
          bg-gradient-to-l from-accent/5 to-transparent\r
          rounded-full blur-3xl\r
        `})]}),e.jsxs("div",{className:"container mx-auto px-6 relative z-10",children:[e.jsxs(a.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},className:"max-w-3xl mx-auto text-center mb-16",children:[e.jsxs("div",{className:"flex items-center justify-center gap-3 mb-6",children:[e.jsx("div",{className:"w-6 h-px bg-accent/50"}),e.jsx("span",{className:`\r
              font-mono text-sm text-accent\r
              uppercase tracking-widest\r
            `,children:"Client Voices"}),e.jsx("div",{className:"w-6 h-px bg-accent/50"})]}),e.jsxs("h2",{className:`\r
            font-heading font-bold\r
            text-4xl md:text-5xl\r
            text-text-heading\r
            mb-6\r
          `,children:["What Clients"," ",e.jsx("span",{className:"text-accent",children:"Say"})]}),e.jsx("p",{className:`\r
            text-lg text-text-body/80\r
            leading-relaxed\r
            max-w-2xl mx-auto\r
          `,children:"Trusted by businesses and individuals who value quality, reliability, and exceptional results."})]}),e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx(W,{mode:"wait",children:e.jsxs(a.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:1.05},transition:{duration:.4},className:`\r
                relative\r
                bg-gradient-to-br from-primary/30 to-primary/20\r
                border border-border/30\r
                rounded-2xl\r
                p-8 md:p-10\r
                shadow-xl\r
                mb-10\r
              `,children:[e.jsx("div",{className:`\r
                absolute -top-4 -left-4\r
                w-12 h-12\r
                flex items-center justify-center\r
                bg-gradient-to-br from-accent to-accent-hover\r
                text-primary-dark\r
                rounded-full\r
                shadow-lg\r
              `,children:e.jsx(Se,{size:20})}),e.jsxs("div",{className:"pl-4",children:[e.jsx("div",{className:"flex items-center gap-2 mb-6",children:u(((c=r[t])==null?void 0:c.rating)||5)}),e.jsxs("p",{className:`\r
                  text-xl md:text-2xl\r
                  text-text-heading\r
                  leading-relaxed\r
                  mb-8\r
                  font-light\r
                  italic\r
                `,children:['"',(g=r[t])==null?void 0:g.quote,'"']}),e.jsxs("div",{className:`\r
                  flex flex-col md:flex-row\r
                  items-start md:items-center\r
                  justify-between\r
                  gap-4\r
                  pt-8\r
                  border-t border-border/30\r
                `,children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:`\r
                      w-14 h-14\r
                      flex items-center justify-center\r
                      bg-gradient-to-br from-primary/60 to-primary/40\r
                      border border-border/30\r
                      rounded-full\r
                      overflow-hidden\r
                    `,children:(p=r[t])!=null&&p.avatar?e.jsx("img",{src:(d=r[t])==null?void 0:d.avatar,alt:(x=r[t])==null?void 0:x.name,className:"w-full h-full object-cover"}):e.jsx("div",{className:`\r
                          w-full h-full\r
                          flex items-center justify-center\r
                          bg-gradient-to-br from-accent/20 to-accent/10\r
                          text-accent\r
                          font-medium\r
                          text-lg\r
                        `,children:(w=(f=r[t])==null?void 0:f.name)==null?void 0:w.charAt(0)})}),e.jsxs("div",{children:[e.jsx("h4",{className:`\r
                        font-heading font-semibold\r
                        text-lg text-text-heading\r
                        mb-1\r
                      `,children:(b=r[t])==null?void 0:b.name}),e.jsxs("p",{className:"text-sm text-text-body/70",children:[(h=r[t])==null?void 0:h.position,((S=r[t])==null?void 0:S.company)&&` • ${(P=r[t])==null?void 0:P.company}`]})]})]}),((B=r[t])==null?void 0:B.project)&&e.jsxs("div",{className:`\r
                      px-4 py-2\r
                      bg-gradient-to-br from-primary/50 to-primary/30\r
                      border border-border/30\r
                      rounded-lg\r
                    `,children:[e.jsx("span",{className:"text-sm text-text-body/70",children:"Project:"}),e.jsx("div",{className:"text-sm font-medium text-text-heading",children:(I=r[t])==null?void 0:I.project})]})]})]})]},t)}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex items-center gap-3",children:r.slice(0,6).map((y,A)=>e.jsx("button",{onClick:()=>n(A),className:`
                    w-10 h-1
                    rounded-full
                    transition-all duration-300
                    ${A===t?"bg-gradient-to-r from-accent to-accent-hover":"bg-border hover:bg-text-body/30"}
                  `,"aria-label":`View testimonial ${A+1}`},A))}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{onClick:s,className:`\r
                  w-12 h-12\r
                  flex items-center justify-center\r
                  bg-gradient-to-br from-primary/40 to-primary/30\r
                  text-text-body\r
                  border border-border/30\r
                  rounded-full\r
                  hover:bg-gradient-to-br hover:from-accent/20 hover:to-accent/10\r
                  hover:text-accent hover:border-accent/30\r
                  transition-all duration-300\r
                `,"aria-label":"Previous testimonial",children:e.jsx(vt,{size:20})}),e.jsx("button",{onClick:l,className:`\r
                  w-12 h-12\r
                  flex items-center justify-center\r
                  bg-gradient-to-br from-primary/40 to-primary/30\r
                  text-text-body\r
                  border border-border/30\r
                  rounded-full\r
                  hover:bg-gradient-to-br hover:from-accent/20 hover:to-accent/10\r
                  hover:text-accent hover:border-accent/30\r
                  transition-all duration-300\r
                `,"aria-label":"Next testimonial",children:e.jsx(he,{size:20})})]})]})]}),e.jsx(a.div,{variants:o,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.1},className:`\r
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3\r
            gap-6\r
            mt-16\r
          `,children:r.slice(0,3).map((y,A)=>{var R;return e.jsxs(a.div,{variants:i,whileHover:{y:-5},className:`\r
                bg-gradient-to-br from-primary/30 to-primary/20\r
                border border-border/30\r
                rounded-xl\r
                p-6\r
                hover:border-accent/30\r
                transition-all duration-300\r
                group\r
              `,onClick:()=>n(A),children:[e.jsx("div",{className:"flex items-center gap-2 mb-4",children:u(y.rating)}),e.jsxs("p",{className:`\r
                text-text-body/80\r
                text-sm leading-relaxed\r
                mb-6\r
                line-clamp-3\r
                group-hover:text-text-body\r
                transition-colors duration-300\r
              `,children:['"',y.quote,'"']}),e.jsxs("div",{className:`\r
                flex items-center gap-3\r
                pt-4\r
                border-t border-border/30\r
              `,children:[e.jsx("div",{className:`\r
                  w-10 h-10\r
                  flex items-center justify-center\r
                  bg-gradient-to-br from-primary/60 to-primary/40\r
                  border border-border/30\r
                  rounded-full\r
                  overflow-hidden\r
                `,children:y.avatar?e.jsx("img",{src:y.avatar,alt:y.name,className:"w-full h-full object-cover"}):e.jsx("div",{className:`\r
                      w-full h-full\r
                      flex items-center justify-center\r
                      bg-gradient-to-br from-accent/20 to-accent/10\r
                      text-accent\r
                      text-sm font-medium\r
                    `,children:(R=y.name)==null?void 0:R.charAt(0)})}),e.jsxs("div",{children:[e.jsx("div",{className:`\r
                    font-medium text-text-heading\r
                    text-sm\r
                  `,children:y.name}),e.jsx("div",{className:`\r
                    text-xs text-text-body/60\r
                    mt-0.5\r
                  `,children:y.position})]})]})]},y.id)})}),e.jsx(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.2},className:`\r
            mt-16\r
            grid grid-cols-2 md:grid-cols-4\r
            gap-4\r
            max-w-2xl mx-auto\r
          `,children:[{value:Q.length,label:"Happy Clients",color:"from-blue-400 to-cyan-400"},{value:"5.0",label:"Avg Rating",color:"from-yellow-400 to-orange-400"},{value:"98%",label:"Satisfaction",color:"from-green-400 to-emerald-400"},{value:"75%",label:"Repeat Work",color:"from-purple-400 to-pink-400"}].map((y,A)=>e.jsxs("div",{className:`\r
                text-center\r
                p-5\r
                bg-gradient-to-br from-primary/30 to-primary/20\r
                border border-border/30\r
                rounded-xl\r
                hover:border-accent/20\r
                transition-all duration-300\r
              `,children:[e.jsx("div",{className:`
                font-heading font-bold
                text-2xl md:text-3xl
                mb-2
                bg-gradient-to-r ${y.color}
                bg-clip-text text-transparent
              `,children:y.value}),e.jsx("div",{className:`\r
                text-xs text-text-body/60\r
                font-medium uppercase tracking-wider\r
              `,children:y.label})]},A))}),e.jsx(a.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.3},className:"text-center mt-12",children:e.jsxs("a",{href:"/contact",className:`\r
              inline-flex items-center gap-3\r
              px-6 py-3\r
              bg-gradient-to-r from-accent/10 to-accent/5\r
              border border-accent/20\r
              text-accent font-medium\r
              rounded-lg\r
              hover:from-accent/20 hover:to-accent/10\r
              hover:border-accent/30\r
              hover:shadow-lg hover:shadow-accent/10\r
              transition-all duration-300\r
              group\r
            `,children:[e.jsx("span",{children:"Become the next success story"}),e.jsx(he,{className:`\r
              group-hover:translate-x-1\r
              transition-transform duration-300\r
            `})]})})]})]})},Da="modulepreload",Wa=function(t){return"/"+t},ot={},Ea=function(n,r,o){let i=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),u=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.allSettled(r.map(c=>{if(c=Wa(c),c in ot)return;ot[c]=!0;const g=c.endsWith(".css"),p=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const d=document.createElement("link");if(d.rel=g?"stylesheet":Da,g||(d.as="script"),d.crossOrigin="",d.href=c,u&&d.setAttribute("nonce",u),document.head.appendChild(d),g)return new Promise((x,f)=>{d.addEventListener("load",x),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function l(s){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=s,window.dispatchEvent(u),!u.defaultPrevented)throw s}return i.then(s=>{for(const u of s||[])u.status==="rejected"&&l(u.reason);return n().catch(l)})};function Ha(t){return m({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(t)}function $a(t){return m({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(t)}function J(t){return m({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"}}]})(t)}const be=({id:t,name:n,type:r="text",value:o,onChange:i,label:l,required:s=!1,disabled:u=!1,icon:c,error:g,success:p})=>{const[d,x]=j.useState(!1),f=d||(o==null?void 0:o.length)>0;return e.jsxs(a.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"relative group",children:[c&&e.jsx("div",{className:`
          absolute left-4 top-[50%] -translate-y-1/2
          z-10 transition-colors duration-300
          ${d?"text-accent":"text-text-body/40"}
          ${g?"text-red-400":""}
          ${p?"text-green-400":""}
        `,children:e.jsx(c,{size:18})}),e.jsx("input",{type:r,id:t,name:n,value:o,onChange:i,required:s,disabled:u,onFocus:()=>x(!0),onBlur:()=>x(!1),className:`
          w-full peer
          h-[56px]
          ${c?"pl-12":"pl-4"} 
          pr-12 
          ${f?"pt-7 pb-2":"pt-4 pb-4"}
          bg-primary/80 backdrop-blur-sm
          border-2 rounded-xl
          text-text-heading text-sm
          placeholder-transparent
          focus:outline-none
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-300
          ${g?"border-red-500/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/20":p?"border-green-500/50 focus:border-green-400 focus:ring-2 focus:ring-green-400/20":"border-border hover:border-accent/30 focus:border-accent focus:ring-2 focus:ring-accent/20"}
        `,placeholder:l}),e.jsxs("label",{htmlFor:t,className:`
          absolute transition-all duration-300 pointer-events-none
          ${c?"left-12":"left-4"}
          ${f?"top-2 text-[10px] font-semibold tracking-wider uppercase":"top-[50%] -translate-y-1/2 text-sm"}
          ${d?"text-accent":"text-text-body/50"}
          ${g?"!text-red-400":""}
          ${p?"!text-green-400":""}
        `,children:[l," ",s&&e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsx(W,{children:(g||p)&&e.jsxs(a.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},className:"absolute right-4 top-[50%] -translate-y-1/2",children:[g&&e.jsx($e,{className:"text-red-400",size:18}),p&&e.jsx(me,{className:"text-green-400",size:18})]})}),e.jsx(W,{children:g&&e.jsx(a.p,{initial:{opacity:0,y:-5,height:0},animate:{opacity:1,y:0,height:"auto"},exit:{opacity:0,y:-5,height:0},className:"text-red-400 text-xs mt-2 ml-1",children:g})}),e.jsx(a.div,{className:"absolute bottom-0 left-1/2 h-[2px] bg-accent rounded-full",initial:{width:0,x:"-50%"},animate:{width:d?"90%":"0%",x:"-50%"},transition:{duration:.3}})]})},Fe=({id:t,name:n,value:r,onChange:o,label:i,options:l,required:s=!1,disabled:u=!1,icon:c,error:g})=>{const[p,d]=j.useState(!1),[x,f]=j.useState(!1),w=j.useRef(null),b=x||(r==null?void 0:r.length)>0;j.useEffect(()=>{const S=P=>{w.current&&!w.current.contains(P.target)&&(d(!1),f(!1))};return document.addEventListener("mousedown",S),()=>document.removeEventListener("mousedown",S)},[]);const h=l.find(S=>S.value===r);return e.jsxs(a.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},ref:w,className:"relative group",children:[c&&e.jsx("div",{className:`
          absolute left-4 top-[50%] -translate-y-1/2
          z-10 transition-colors duration-300
          ${x?"text-accent":"text-text-body/40"}
        `,children:e.jsx(c,{size:18})}),e.jsx("button",{type:"button",disabled:u,onClick:()=>{d(!p),f(!0)},className:`
          w-full text-left
          h-[56px]
          ${c?"pl-12":"pl-4"} 
          pr-12 
          ${b?"pt-7 pb-2":"pt-4 pb-4"}
          bg-primary/80 backdrop-blur-sm
          border-2 rounded-xl
          text-sm
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-300
          ${p?"border-accent ring-2 ring-accent/20":"border-border hover:border-accent/30"}
          ${g?"border-red-500/50":""}
          ${r?"text-text-heading":"text-text-body/50"}
        `,children:(h==null?void 0:h.label)||""}),e.jsxs("label",{className:`
          absolute transition-all duration-300 pointer-events-none
          ${c?"left-12":"left-4"}
          ${b?"top-2 text-[10px] font-semibold tracking-wider uppercase":"top-[50%] -translate-y-1/2 text-sm"}
          ${x?"text-accent":"text-text-body/50"}
        `,children:[i," ",s&&e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsx(a.div,{animate:{rotate:p?180:0},className:"absolute right-4 top-[50%] -translate-y-1/2 text-text-body/40",children:e.jsx(pr,{size:18})}),e.jsx(W,{children:p&&e.jsx(a.div,{initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},transition:{duration:.2,ease:"easeOut"},className:`\r
              absolute z-50 w-full mt-2\r
              bg-primary-light border border-border\r
              rounded-xl shadow-2xl shadow-black/30\r
              overflow-hidden\r
              max-h-64 overflow-y-auto\r
            `,children:l.map((S,P)=>e.jsxs(a.button,{type:"button",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:P*.03},onClick:()=>{o({target:{name:n,value:S.value}}),d(!1),f(!1)},className:`
                  w-full text-left px-4 py-3.5
                  text-sm transition-all duration-200
                  flex items-center justify-between
                  ${S.value===r?"bg-accent/10 text-accent":"text-text-body hover:bg-accent/5 hover:text-text-heading"}
                  ${S.divider?"border-t border-border":""}
                `,children:[e.jsx("span",{children:S.label}),S.value===r&&e.jsx(me,{size:16,className:"text-accent"})]},S.value))})}),e.jsx(W,{children:g&&e.jsx(a.p,{initial:{opacity:0,y:-5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},className:"text-red-400 text-xs mt-2 ml-1",children:g})})]})},_a=({id:t,name:n,value:r,onChange:o,label:i,required:l=!1,disabled:s=!1,icon:u,rows:c=5,maxLength:g=1e3,error:p,success:d})=>{const[x,f]=j.useState(!1),w=x||(r==null?void 0:r.length)>0,b=(r==null?void 0:r.length)||0;return e.jsxs(a.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"relative group",children:[u&&e.jsx("div",{className:`
          absolute left-4 top-7
          z-10 transition-colors duration-300
          ${x?"text-accent":"text-text-body/40"}
        `,children:e.jsx(u,{size:18})}),e.jsx("textarea",{id:t,name:n,value:r,onChange:o,required:l,disabled:s,rows:c,maxLength:g,onFocus:()=>f(!0),onBlur:()=>f(!1),className:`
          w-full peer
          min-h-[140px]
          ${u?"pl-12":"pl-4"} 
          pr-4 pt-8 pb-8
          bg-primary/80 backdrop-blur-sm
          border-2 rounded-xl
          text-text-heading text-sm
          leading-relaxed
          placeholder-transparent
          focus:outline-none
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-300
          resize-none
          ${p?"border-red-500/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/20":"border-border hover:border-accent/30 focus:border-accent focus:ring-2 focus:ring-accent/20"}
        `,placeholder:i}),e.jsxs("label",{htmlFor:t,className:`
          absolute transition-all duration-300 pointer-events-none
          ${u?"left-12":"left-4"}
          ${w?"top-2.5 text-[10px] font-semibold tracking-wider uppercase":"top-6 text-sm"}
          ${x?"text-accent":"text-text-body/50"}
        `,children:[i," ",l&&e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsxs("div",{className:`
        absolute bottom-3 right-4
        text-[10px] font-mono
        transition-colors duration-300
        ${b>g*.9?"text-red-400":b>g*.7?"text-yellow-400":"text-text-body/30"}
      `,children:[b,"/",g]}),e.jsx(a.div,{className:"absolute bottom-0 left-1/2 h-[2px] bg-accent rounded-full",initial:{width:0,x:"-50%"},animate:{width:x?"90%":"0%",x:"-50%"},transition:{duration:.3}}),e.jsx(W,{children:p&&e.jsx(a.p,{initial:{opacity:0,y:-5,height:0},animate:{opacity:1,y:0,height:"auto"},exit:{opacity:0,y:-5,height:0},className:"text-red-400 text-xs mt-2 ml-1",children:p})})]})},Va=()=>{const t=Array.from({length:15},(n,r)=>({id:r,x:Math.random()*100,y:Math.random()*100,size:Math.random()*3+1,duration:Math.random()*15+10,delay:Math.random()*5}));return e.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:t.map(n=>e.jsx(a.div,{className:"absolute rounded-full bg-accent/10",style:{width:n.size,height:n.size,left:`${n.x}%`,top:`${n.y}%`},animate:{y:[0,-30,0],x:[0,15,-15,0],opacity:[0,.6,0]},transition:{duration:n.duration,repeat:1/0,delay:n.delay,ease:"easeInOut"}},n.id))})},qt=()=>{var v,z,Z;const t="923497818575",n=j.useRef(null),[r,o]=j.useState({name:"",email:"",phone:"",projectType:"",budget:"",timeline:"",subject:"",message:""}),[i,l]=j.useState({}),[s,u]=j.useState({}),[c,g]=j.useState({submitting:!1,submitted:!1,sendMethod:null,error:null}),p=[{value:"web-development",label:"🌐 Web Development"},{value:"mobile-app",label:"📱 Mobile App"},{value:"ecommerce",label:"🛒 E-Commerce Store"},{value:"landing-page",label:"📄 Landing Page"},{value:"portfolio",label:"💼 Portfolio Website"},{value:"web-application",label:"⚙️ Web Application"},{value:"ui-ux-design",label:"🎨 UI/UX Design"},{value:"seo-optimization",label:"🔍 SEO Optimization"},{value:"consultation",label:"💬 Consultation"},{value:"other",label:"📋 Other",divider:!0}],d=[{value:"50-200",label:"$50 - $200"},{value:"200-500",label:"$200 - $500"},{value:"500-1000",label:"$500 - $1,000"},{value:"1000-3000",label:"$1,000 - $3,000"},{value:"3000-5000",label:"$3,000 - $5,000"},{value:"5000-10000",label:"$5,000 - $10,000"},{value:"10000+",label:"$10,000+"},{value:"discuss",label:"💬 Not sure, let's discuss",divider:!0}],x=[{value:"asap",label:"⚡ ASAP"},{value:"1-2-weeks",label:"📅 1-2 Weeks"},{value:"1-month",label:"📅 1 Month"},{value:"2-3-months",label:"📅 2-3 Months"},{value:"3-6-months",label:"📅 3-6 Months"},{value:"6-months+",label:"📅 6+ Months"},{value:"flexible",label:"🕐 Flexible"},{value:"discuss",label:"💬 Not sure, let's discuss",divider:!0}],f=(k,C)=>{switch(k){case"name":return C.trim()?C.trim().length<2?"Name must be at least 2 characters":null:"Name is required";case"email":return C.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(C)?null:"Please enter a valid email":"Email is required";case"phone":return C&&!/^[\+]?[0-9\s\-\(\)]{7,15}$/.test(C)?"Please enter a valid phone number":null;case"message":return C.trim()?C.trim().length<10?"Message must be at least 10 characters":null:"Message is required";default:return null}},w=()=>{const k={};Object.keys(r).forEach(M=>{const D=f(M,r[M]);D&&(k[M]=D)}),l(k);const C={};return Object.keys(r).forEach(M=>{C[M]=!0}),u(C),Object.keys(k).length===0},b=k=>{const{name:C,value:M}=k.target;if(o(D=>({...D,[C]:M})),s[C]){const D=f(C,M);l(Me=>({...Me,[C]:D}))}},h=(k,C)=>{const M=k.find(D=>D.value===C);return M?M.label.replace(/^[^\w$]+ /,""):C||"Not specified"},S=()=>{const k=h(p,r.projectType),C=h(d,r.budget),M=h(x,r.timeline),D=`
🌟 *New Project Inquiry*
━━━━━━━━━━━━━━━━━━━━━━

👤 *Name:* ${r.name}
📧 *Email:* ${r.email}
${r.phone?`📱 *Phone:* ${r.phone}`:""}

━━━━━━━━━━━━━━━━━━━━━━
🚀 *Project Type:* ${k}
💰 *Budget:* ${C}
⏰ *Timeline:* ${M}
${r.subject?`📌 *Subject:* ${r.subject}`:""}

━━━━━━━━━━━━━━━━━━━━━━
📝 *Message:*
${r.message}

━━━━━━━━━━━━━━━━━━━━━━
_Sent from Portfolio Contact Form_
    `.trim();return encodeURIComponent(D)},P=()=>{if(!w())return;const k=S(),C=`https://wa.me/${t}?text=${k}`;g({submitting:!1,submitted:!0,sendMethod:"whatsapp",error:null}),window.open(C,"_blank"),setTimeout(()=>{g(M=>({...M,submitted:!1,sendMethod:null}))},5e3)},B=async k=>{if(k.preventDefault(),!!w()){g({submitting:!0,submitted:!1,sendMethod:"email",error:null});try{const C="service_8hljpsv",M="template_iuxtl2a",D="coCmYRuDCmCzJtuHx",Me=h(p,r.projectType),Gt=h(d,r.budget),Jt=h(x,r.timeline),Qt={from_name:r.name,from_email:r.email,phone:r.phone||"Not provided",project_type:Me,budget:Gt,timeline:Jt,subject:r.subject||"New Project Inquiry",message:r.message,to_email:"mhweb11@gmail.com"},{default:Yt}=await Ea(async()=>{const{default:Le}=await import("./index-CQgKCrt3.js");return{default:Le}},[]);await Yt.send(C,M,Qt,D),g({submitting:!1,submitted:!0,sendMethod:"email",error:null}),o({name:"",email:"",phone:"",projectType:"",budget:"",timeline:"",subject:"",message:""}),u({}),l({}),setTimeout(()=>{g(Le=>({...Le,submitted:!1,sendMethod:null}))},5e3)}catch(C){console.error("EmailJS Error:",C),g({submitting:!1,submitted:!1,sendMethod:null,error:"Email sending is not configured right now. Please use WhatsApp or contact directly."})}}},I=["name","email","message"],y=["phone","projectType","budget","timeline","subject"],A=[...I,...y],R=A.filter(k=>{var C,M,D;return((D=(M=(C=r[k])==null?void 0:C.trim)==null?void 0:M.call(C))==null?void 0:D.length)>0}).length,Y=Math.round(R/A.length*100),pe={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.2}}},q={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:[.4,0,.2,1]}}},ge=Ae.filter(k=>["email","whatsapp","linkedin"].includes(k.id));return e.jsx("section",{id:"contact",className:"py-20 md:py-28 relative",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsx(E,{subtitle:"Get In Touch",title:"Let's Work Together",description:"Have a project in mind? Fill the form and choose how you'd like to send it",align:"center",gradient:!0}),e.jsxs("div",{className:`\r
          grid grid-cols-1 lg:grid-cols-3\r
          gap-12 mt-12\r
        `,children:[e.jsx(a.div,{variants:pe,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"lg:col-span-1",children:e.jsx("div",{className:`\r
              bg-primary-light/30 border border-border\r
              rounded-2xl p-8\r
              sticky top-24\r
            `,children:e.jsxs("div",{className:"relative overflow-hidden",children:[e.jsx("div",{className:`\r
                  absolute -top-20 -right-20\r
                  w-40 h-40\r
                  bg-accent/5 rounded-full blur-3xl\r
                `}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("h3",{className:`\r
                    font-heading font-semibold\r
                    text-xl text-text-heading\r
                    mb-6\r
                  `,children:"Contact Information"}),e.jsxs("div",{className:"space-y-6 mb-8",children:[e.jsxs(a.a,{variants:q,href:`mailto:${F.primaryEmail}`,className:"flex items-start gap-4 group",children:[e.jsx("div",{className:`\r
                        w-12 h-12 flex items-center justify-center\r
                        bg-accent/10 border border-accent/20\r
                        text-accent rounded-xl shrink-0\r
                        group-hover:bg-accent group-hover:text-primary-dark\r
                        transition-all duration-300\r
                        group-hover:scale-110\r
                      `,children:e.jsx(X,{size:20})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-mono text-xs text-text-body uppercase tracking-wider",children:"Email"}),e.jsx("div",{className:"text-text-heading text-sm group-hover:text-accent transition-colors duration-300",children:F.primaryEmail})]})]}),e.jsxs(a.a,{variants:q,href:`tel:${F.primaryPhone}`,className:"flex items-start gap-4 group",children:[e.jsx("div",{className:`\r
                        w-12 h-12 flex items-center justify-center\r
                        bg-accent/10 border border-accent/20\r
                        text-accent rounded-xl shrink-0\r
                        group-hover:bg-accent group-hover:text-primary-dark\r
                        transition-all duration-300\r
                        group-hover:scale-110\r
                      `,children:e.jsx(ue,{size:20})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-mono text-xs text-text-body uppercase tracking-wider",children:"Phone"}),e.jsx("div",{className:"text-text-heading text-sm group-hover:text-accent transition-colors duration-300",children:F.primaryPhone})]})]}),e.jsxs(a.a,{variants:q,href:`https://wa.me/${t}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-start gap-4 group",children:[e.jsx("div",{className:`\r
                        w-12 h-12 flex items-center justify-center\r
                        bg-green-500/10 border border-green-500/20\r
                        text-green-400 rounded-xl shrink-0\r
                        group-hover:bg-green-500 group-hover:text-white\r
                        transition-all duration-300\r
                        group-hover:scale-110\r
                      `,children:e.jsx(J,{size:20})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-mono text-xs text-text-body uppercase tracking-wider",children:"WhatsApp"}),e.jsx("div",{className:"text-text-heading text-sm group-hover:text-green-400 transition-colors duration-300",children:"+92 349 7818575"})]})]}),e.jsxs(a.div,{variants:q,className:"flex items-start gap-4",children:[e.jsx("div",{className:`\r
                        w-12 h-12 flex items-center justify-center\r
                        bg-accent/10 border border-accent/20\r
                        text-accent rounded-xl shrink-0\r
                      `,children:e.jsx(Ve,{size:20})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-mono text-xs text-text-body uppercase tracking-wider",children:"Location"}),e.jsxs("div",{className:"text-text-heading text-sm",children:[(v=F.location)==null?void 0:v.city,", ",(z=F.location)==null?void 0:z.country]})]})]})]}),e.jsxs(a.div,{variants:q,className:"mb-8 p-4 bg-primary/50 border border-border rounded-xl space-y-3",children:[e.jsx("h4",{className:"font-mono text-xs text-accent uppercase tracking-wider",children:"Response Times"}),e.jsx("div",{className:"space-y-2",children:[{icon:e.jsx(J,{size:14}),label:"WhatsApp",time:"~1 hour",color:"text-green-400"},{icon:e.jsx(X,{size:14}),label:"Email",time:"~24 hours",color:"text-blue-400"},{icon:e.jsx(ue,{size:14}),label:"Phone",time:"Immediate",color:"text-yellow-400"}].map((k,C)=>e.jsxs("div",{className:"flex items-center justify-between text-xs",children:[e.jsxs("span",{className:`flex items-center gap-2 ${k.color}`,children:[k.icon,e.jsx("span",{className:"text-text-body",children:k.label})]}),e.jsx("span",{className:"text-text-heading font-mono",children:k.time})]},C))})]}),e.jsxs(a.div,{variants:q,className:"pt-8 border-t border-border",children:[e.jsx("h4",{className:"font-heading font-semibold text-lg text-text-heading mb-4",children:"Follow Me"}),e.jsx("div",{className:"flex items-center gap-3",children:ge.map(k=>e.jsx(a.a,{href:k.url,target:"_blank",rel:"noopener noreferrer",whileHover:{y:-3,scale:1.1},whileTap:{scale:.95},className:`\r
                            w-12 h-12\r
                            flex items-center justify-center\r
                            text-text-body hover:text-accent\r
                            bg-primary/50 hover:bg-accent/10\r
                            border border-border hover:border-accent/50\r
                            rounded-xl transition-all duration-300\r
                          `,"aria-label":k.name,children:T.createElement(k.icon,{size:20})},k.id))})]}),e.jsxs(a.div,{variants:q,className:"mt-8 p-4 bg-accent/5 border border-accent/20 rounded-xl",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsxs("span",{className:"relative flex h-3 w-3",children:[e.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"}),e.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-accent"})]}),e.jsx("span",{className:"font-mono text-sm text-accent",children:"Available for freelance work"})]}),e.jsx("p",{className:"text-xs text-text-body",children:(Z=F.availability)==null?void 0:Z.responseTime})]})]})]})})}),e.jsx(a.div,{variants:pe,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"lg:col-span-2",children:e.jsxs("div",{className:`\r
              bg-primary-light/30 border border-border\r
              rounded-2xl p-6 sm:p-8 md:p-10\r
              relative overflow-hidden\r
            `,children:[e.jsx(Va,{}),e.jsxs("div",{className:"relative z-10 mb-8",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4",children:[e.jsx("h3",{className:"font-heading font-semibold text-xl text-text-heading",children:"Send a Message"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"font-mono text-xs text-text-body/60",children:[R,"/",A.length," fields"]}),e.jsx("div",{className:"w-24 h-1.5 bg-border rounded-full overflow-hidden",children:e.jsx(a.div,{className:"h-full bg-accent rounded-full",initial:{width:0},animate:{width:`${Y}%`},transition:{duration:.5,ease:"easeOut"}})})]})]}),e.jsxs("p",{className:"text-text-body/60 text-sm",children:["Fill in the details below. Fields marked with"," ",e.jsx("span",{className:"text-red-400",children:"*"})," are required."]})]}),e.jsxs(W,{children:[c.error&&e.jsxs(a.div,{initial:{opacity:0,y:-10,height:0},animate:{opacity:1,y:0,height:"auto"},exit:{opacity:0,y:-10,height:0},className:`\r
                      mb-6 p-4\r
                      bg-red-500/10 border border-red-500/30\r
                      text-red-400 rounded-xl\r
                      flex items-center gap-3\r
                      relative z-10\r
                    `,children:[e.jsx($e,{size:20,className:"shrink-0"}),e.jsx("span",{className:"text-sm flex-1",children:c.error}),e.jsx("button",{onClick:()=>g(k=>({...k,error:null})),className:"hover:text-red-300 transition-colors shrink-0",children:e.jsx(Bt,{size:18})})]}),c.submitted&&e.jsxs(a.div,{initial:{opacity:0,y:-10,height:0},animate:{opacity:1,y:0,height:"auto"},exit:{opacity:0,y:-10,height:0},className:`
                      mb-6 p-4
                      rounded-xl
                      flex items-center gap-3
                      relative z-10
                      ${c.sendMethod==="whatsapp"?"bg-green-500/10 border border-green-500/30 text-green-400":"bg-accent/10 border border-accent/30 text-accent"}
                    `,children:[c.sendMethod==="whatsapp"?e.jsx(J,{size:20,className:"shrink-0"}):e.jsx(me,{size:20,className:"shrink-0"}),e.jsx("span",{className:"text-sm",children:c.sendMethod==="whatsapp"?"Opening WhatsApp with your message! Complete sending there.":"Message sent successfully! I'll get back to you soon."})]})]}),e.jsxs("form",{ref:n,onSubmit:B,className:"space-y-6 relative z-10",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsx(be,{id:"name",name:"name",value:r.name,onChange:b,label:"Full Name",required:!0,disabled:c.submitting,icon:Ce,error:s.name?i.name:null,success:s.name&&!i.name&&r.name.length>0}),e.jsx(be,{id:"email",name:"email",type:"email",value:r.email,onChange:b,label:"Email Address",required:!0,disabled:c.submitting,icon:X,error:s.email?i.email:null,success:s.email&&!i.email&&r.email.length>0})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsx(be,{id:"phone",name:"phone",type:"tel",value:r.phone,onChange:b,label:"Phone Number",disabled:c.submitting,icon:ue,error:s.phone?i.phone:null,success:s.phone&&!i.phone&&r.phone.length>0}),e.jsx(Fe,{id:"projectType",name:"projectType",value:r.projectType,onChange:b,label:"Project Type",options:p,disabled:c.submitting,icon:Ne})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsx(Fe,{id:"budget",name:"budget",value:r.budget,onChange:b,label:"Budget Range",options:d,disabled:c.submitting,icon:xr}),e.jsx(Fe,{id:"timeline",name:"timeline",value:r.timeline,onChange:b,label:"Project Timeline",options:x,disabled:c.submitting,icon:re})]}),e.jsx(be,{id:"subject",name:"subject",value:r.subject,onChange:b,label:"Subject",disabled:c.submitting,icon:Se}),e.jsx(_a,{id:"message",name:"message",value:r.message,onChange:b,label:"Your Message",required:!0,disabled:c.submitting,icon:X,rows:5,maxLength:1e3,error:s.message?i.message:null}),e.jsxs(a.div,{className:`\r
                    pt-4\r
                    flex flex-col sm:flex-row \r
                    items-stretch sm:items-center \r
                    gap-4\r
                  `,variants:q,children:[e.jsxs(a.button,{type:"submit",disabled:c.submitting||c.submitted,whileHover:{scale:1.02,y:-2},whileTap:{scale:.98},className:`\r
                      flex-1\r
                      flex items-center justify-center gap-3\r
                      px-8 py-4\r
                      bg-accent hover:bg-accent-hover\r
                      text-primary-dark font-semibold\r
                      rounded-xl\r
                      transition-all duration-300\r
                      disabled:opacity-50 disabled:cursor-not-allowed\r
                      shadow-lg shadow-accent/20\r
                      hover:shadow-xl hover:shadow-accent/30\r
                      relative overflow-hidden\r
                      group\r
                    `,children:[e.jsx("div",{className:`\r
                      absolute inset-0\r
                      bg-gradient-to-r from-transparent via-white/20 to-transparent\r
                      translate-x-[-200%]\r
                      group-hover:translate-x-[200%]\r
                      transition-transform duration-700\r
                    `}),c.submitting?e.jsxs(e.Fragment,{children:[e.jsx(a.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},className:"w-5 h-5 border-2 border-primary-dark/30 border-t-primary-dark rounded-full"}),e.jsx("span",{children:"Sending..."})]}):e.jsxs(e.Fragment,{children:[e.jsx(Ee,{size:18}),e.jsx("span",{children:"Send via Email"})]})]}),e.jsx("div",{className:"hidden sm:flex items-center text-text-body/30 text-xs font-mono",children:"OR"}),e.jsx("div",{className:"sm:hidden flex items-center justify-center text-text-body/30 text-xs font-mono",children:"── OR ──"}),e.jsxs(a.button,{type:"button",onClick:P,disabled:c.submitting||c.submitted,whileHover:{scale:1.02,y:-2},whileTap:{scale:.98},className:`\r
                      flex-1\r
                      flex items-center justify-center gap-3\r
                      px-8 py-4\r
                      bg-green-600 hover:bg-green-500\r
                      text-white font-semibold\r
                      rounded-xl\r
                      transition-all duration-300\r
                      disabled:opacity-50 disabled:cursor-not-allowed\r
                      shadow-lg shadow-green-600/20\r
                      hover:shadow-xl hover:shadow-green-500/30\r
                      relative overflow-hidden\r
                      group\r
                    `,children:[e.jsx("div",{className:`\r
                      absolute inset-0\r
                      bg-gradient-to-r from-transparent via-white/20 to-transparent\r
                      translate-x-[-200%]\r
                      group-hover:translate-x-[200%]\r
                      transition-transform duration-700\r
                    `}),e.jsx(J,{size:20}),e.jsx("span",{children:"Send via WhatsApp"})]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 pt-1",children:[e.jsxs("p",{className:"text-[11px] text-text-body/40 flex items-center gap-1.5",children:[e.jsx(X,{size:12}),"Email sends directly to inbox"]}),e.jsxs("p",{className:"text-[11px] text-text-body/40 flex items-center gap-1.5",children:[e.jsx(J,{size:12}),"WhatsApp opens with pre-filled message"]})]})]}),e.jsx("div",{className:"mt-8 pt-8 border-t border-border relative z-10",children:e.jsxs("p",{className:"text-xs text-text-body/50 flex items-start gap-2",children:[e.jsx("span",{className:"mt-0.5",children:"🔒"}),e.jsx("span",{children:"Your information is secure. By submitting this form, you agree to our privacy policy. Data is only used to respond to your inquiry."})]})})]})})]}),e.jsxs(a.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},className:`\r
            mt-20 p-8 md:p-12\r
            bg-gradient-to-r from-primary-light to-primary\r
            border border-border rounded-2xl\r
            text-center relative overflow-hidden\r
          `,children:[e.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-48 h-48 bg-green-500/5 rounded-full blur-3xl"}),e.jsx("h3",{className:"font-heading font-bold text-2xl md:text-3xl text-text-heading mb-4 relative z-10",children:"Prefer a Quick Chat?"}),e.jsx("p",{className:"text-text-body text-lg max-w-2xl mx-auto mb-8 relative z-10",children:"Skip the form and reach out directly via WhatsApp for an instant conversation."}),e.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10",children:[e.jsxs(a.a,{href:`https://wa.me/${t}?text=${encodeURIComponent("Hi! I'm interested in discussing a project with you.")}`,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},className:`\r
                inline-flex items-center gap-3\r
                px-8 py-4 bg-green-600 hover:bg-green-500\r
                text-white font-semibold rounded-xl\r
                shadow-lg shadow-green-600/20 transition-all duration-300\r
              `,children:[e.jsx(J,{size:22}),e.jsx("span",{children:"Chat on WhatsApp"})]}),e.jsx(N,{variant:"secondary",size:"lg",href:"/portfolio",children:"View My Work"})]})]})]})})},Oa=()=>{K({title:"Hamad Hussain | Full Stack Developer & Tech Consultant",description:"Full-stack development portfolio featuring business-ready WordPress, MERN, Shopify, and custom web applications built for performance, trust, and growth."});const t={initial:{opacity:0},animate:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}},exit:{opacity:0}};return e.jsxs(a.div,{variants:t,initial:"initial",animate:"animate",exit:"exit",className:"overflow-hidden",children:[e.jsx(pn,{}),e.jsx(fn,{}),e.jsx(Ma,{}),e.jsx(Ra,{}),e.jsx(qt,{})]})},_={frontend:[{name:"HTML5",icon:$r,color:"#E34F26",level:95,years:4},{name:"CSS3",icon:Mr,color:"#1572B6",level:90,years:4},{name:"JavaScript (ES6+)",icon:Dt,color:"#F7DF1E",level:90,years:3},{name:"TypeScript",icon:en,color:"#3178C6",level:75,years:1},{name:"React.js",icon:xe,color:"#61DAFB",level:90,years:2},{name:"Redux Toolkit",icon:Yr,color:"#764ABC",level:85,years:2},{name:"Next.js",icon:Wt,color:"#000000",level:70,years:1},{name:"Tailwind CSS",icon:Et,color:"#06B6D4",level:95,years:2},{name:"Bootstrap",icon:Ir,color:"#7952B3",level:85,years:3},{name:"SASS/SCSS",icon:Xr,color:"#CC6699",level:80,years:2},{name:"Framer Motion",icon:Wr,color:"#0055FF",level:85,years:1}],backend:[{name:"Node.js",icon:ze,color:"#339933",level:88,years:2},{name:"Express.js",icon:Ft,color:"#000000",level:88,years:2},{name:"MongoDB",icon:Pe,color:"#47A248",level:85,years:2},{name:"PostgreSQL",icon:Gr,color:"#4169E1",level:70,years:1},{name:"MySQL",icon:Vr,color:"#4479A1",level:75,years:2},{name:"Firebase",icon:Dr,color:"#FFCA28",level:80,years:1},{name:"REST API Development",icon:null,color:"#64FFDA",level:90,years:2},{name:"JWT Authentication",icon:_r,color:"#000000",level:90,years:2},{name:"Socket.io",icon:Kr,color:"#010101",level:80,years:1},{name:"PHP",icon:Ur,color:"#777BB4",level:70,years:2}],mobile:[{name:"Flutter",icon:Rt,color:"#02569B",level:75,years:1},{name:"Dart",icon:Lr,color:"#0175C2",level:75,years:1},{name:"React Native",icon:xe,color:"#61DAFB",level:65,years:.5}],cms:[{name:"WordPress",icon:Te,color:"#21759B",level:90,years:3},{name:"Elementor",icon:Fr,color:"#92003B",level:90,years:2},{name:"Shopify",icon:Ge,color:"#7AB55C",level:85,years:2},{name:"Theme Customization",icon:null,color:"#64FFDA",level:88,years:2},{name:"WooCommerce",icon:null,color:"#96588A",level:80,years:2},{name:"Liquid (Shopify)",icon:null,color:"#7AB55C",level:75,years:1}],aiMl:[{name:"Python",icon:Qr,color:"#3776AB",level:75,years:2},{name:"TensorFlow",icon:Zr,color:"#FF6F00",level:65,years:1},{name:"Machine Learning",icon:null,color:"#64FFDA",level:60,years:1},{name:"NLP / Transformers",icon:null,color:"#FFD43B",level:55,years:.5}],tools:[{name:"Git",icon:Er,color:"#F05032",level:90,years:3},{name:"GitHub",icon:Hr,color:"#181717",level:90,years:3},{name:"VS Code",icon:rn,color:"#007ACC",level:95,years:4},{name:"Postman",icon:Jr,color:"#FF6C37",level:90,years:2},{name:"Vite",icon:nn,color:"#646CFF",level:85,years:1},{name:"Figma",icon:Rr,color:"#F24E1E",level:70,years:1},{name:"Docker",icon:Br,color:"#2496ED",level:60,years:.5},{name:"Vercel",icon:tn,color:"#000000",level:85,years:1},{name:"Netlify",icon:Or,color:"#00C7B7",level:85,years:1},{name:"npm",icon:qr,color:"#CB3837",level:90,years:3},{name:"Yarn",icon:sn,color:"#2C8EBB",level:85,years:2}],softSkills:[{name:"Problem Solving",icon:null,color:"#64FFDA",level:90},{name:"Communication",icon:null,color:"#64FFDA",level:85},{name:"Team Collaboration",icon:null,color:"#64FFDA",level:88},{name:"Time Management",icon:null,color:"#64FFDA",level:85},{name:"Self Learning",icon:null,color:"#64FFDA",level:95},{name:"Attention to Detail",icon:null,color:"#64FFDA",level:90}]},lt=[{id:"frontend",title:"Frontend Development",subtitle:"Interfaces built for clarity and conversion",description:"Responsive UI development with React, Tailwind, and reusable components",icon:"🎨",color:"#61DAFB",order:1},{id:"backend",title:"Backend Development",subtitle:"Secure server-side systems",description:"APIs, databases, authentication, and business logic with Node.js and MongoDB",icon:"⚙️",color:"#339933",order:2},{id:"mobile",title:"Mobile Development",subtitle:"Cross-platform apps",description:"iOS and Android apps with Flutter, React Native, and Firebase workflows",icon:"📱",color:"#02569B",order:3},{id:"cms",title:"CMS & E-Commerce",subtitle:"Stores and content platforms",description:"WordPress, Shopify, WooCommerce, and custom CMS implementation",icon:"🛒",color:"#21759B",order:4},{id:"aiMl",title:"AI & Machine Learning",subtitle:"Practical AI features",description:"Machine learning models, prediction tools, and AI-powered product features",icon:"🤖",color:"#FF6F00",order:5},{id:"tools",title:"Tools & DevOps",subtitle:"Delivery and deployment",description:"Version control, CI/CD, hosting, deployment, and production tooling",icon:"🛠️",color:"#F05032",order:6},{id:"softSkills",title:"Soft Skills",subtitle:"Professional skills",description:"Clear communication, ownership, collaboration, and business problem solving",icon:"💼",color:"#64FFDA",order:7}];_.frontend.map(t=>t.name),_.backend.map(t=>t.name),_.mobile.map(t=>t.name),_.cms.map(t=>t.name),_.aiMl.map(t=>t.name),_.tools.map(t=>t.name),_.softSkills.map(t=>t.name);const qa=()=>{const t=[{Icon:xe,color:"#61DAFB",top:"8%",left:"5%",delay:0,duration:4},{Icon:ze,color:"#339933",top:"15%",right:"8%",delay:.5,duration:4.5},{Icon:Pe,color:"#47A248",top:"55%",left:"2%",delay:1,duration:3.8},{Icon:Dt,color:"#F7DF1E",top:"70%",right:"5%",delay:.8,duration:4.2},{Icon:Et,color:"#06B6D4",top:"82%",left:"12%",delay:1.5,duration:5},{Icon:Te,color:"#21759B",top:"30%",right:"3%",delay:.3,duration:3.5}],n=[{text:"const dev = new Developer({",color:"#61DAFB",width:"85%"},{text:"  name: 'Hamad Hussain',",color:"#98D8A0",width:"70%"},{text:"  role: 'Full Stack Dev',",color:"#98D8A0",width:"72%"},{text:"  skills: ['MERN','WP'],",color:"#98D8A0",width:"68%"},{text:"  available: true,",color:"#64FFDA",width:"55%"},{text:"});",color:"#61DAFB",width:"22%"},{text:"",color:"transparent",width:"0%"},{text:"dev.buildAmazing();",color:"#FFD700",width:"60%"}];return e.jsxs("div",{className:"relative w-full max-w-md mx-auto aspect-square flex items-center justify-center",children:[e.jsx("div",{className:`\r
        absolute inset-0\r
        bg-gradient-to-br from-accent/8 via-transparent to-blue-500/8\r
        rounded-full blur-3xl\r
        animate-pulse\r
      `}),t.map(({Icon:r,color:o,top:i,left:l,right:s,delay:u,duration:c},g)=>e.jsx(a.div,{className:"absolute z-20",style:{top:i,left:l,right:s},animate:{y:[0,-14,0],rotate:[0,8,-8,0],scale:[1,1.12,1]},transition:{duration:c,delay:u,repeat:1/0,ease:"easeInOut"},children:e.jsx("div",{className:`\r
              w-10 h-10 flex items-center justify-center\r
              rounded-xl backdrop-blur-sm\r
              shadow-lg\r
              border border-white/10\r
            `,style:{background:`${o}18`,boxShadow:`0 4px 20px ${o}25`},children:e.jsx(r,{size:22,style:{color:o}})})},g)),e.jsx(a.div,{className:"relative z-10",style:{perspective:"1000px",perspectiveOrigin:"center center"},animate:{rotateY:[0,3,-3,0]},transition:{duration:8,repeat:1/0,ease:"easeInOut"},children:e.jsxs("div",{style:{transform:"rotateX(8deg) rotateY(-5deg)",transformStyle:"preserve-3d"},children:[e.jsxs("div",{className:"relative rounded-t-xl overflow-hidden",style:{width:"320px",height:"210px",background:"linear-gradient(145deg, #1a1f2e, #0d1117)",border:"3px solid #2d3748",borderBottom:"none",boxShadow:`
                inset 0 0 30px rgba(100,255,218,0.03),
                0 -4px 20px rgba(0,0,0,0.5)
              `},children:[e.jsxs("div",{className:"absolute inset-2 rounded-lg overflow-hidden",style:{background:"#0d1117"},children:[e.jsxs("div",{className:"flex items-center gap-2 px-3",style:{height:"28px",background:"#1e1e2e",borderBottom:"1px solid #2d3748"},children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500/80"}),e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-500/80"}),e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-green-500/80"})]}),e.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-0.5 rounded-t text-[10px] font-mono ml-2",style:{background:"#0d1117",color:"#64FFDA",borderTop:"1px solid #64FFDA40"},children:[e.jsx(O,{size:10}),"developer.js"]})]}),e.jsxs("div",{className:"flex",style:{height:"calc(100% - 28px)"},children:[e.jsx("div",{className:"flex flex-col pt-2 px-2 text-right",style:{width:"28px",background:"#161b27",borderRight:"1px solid #2d3748",color:"#4a5568",fontSize:"9px",fontFamily:"monospace",lineHeight:"1.8"},children:n.map((r,o)=>e.jsx("div",{children:o+1},o))}),e.jsxs("div",{className:"flex-1 pt-2 pl-3 overflow-hidden",style:{fontFamily:"monospace",fontSize:"9px",lineHeight:"1.8"},children:[n.map((r,o)=>e.jsx(a.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:o*.15+.5,duration:.4},className:"flex items-center",style:{color:r.color},children:e.jsx(a.span,{initial:{width:0},animate:{width:r.width},transition:{delay:o*.15+.5,duration:.6,ease:"easeOut"},className:"overflow-hidden whitespace-nowrap block",children:r.text})},o)),e.jsx(a.div,{animate:{opacity:[1,0,1]},transition:{duration:1,repeat:1/0},className:"inline-block mt-1",style:{width:"7px",height:"13px",background:"#64FFDA",borderRadius:"1px"}})]})]})]}),e.jsx("div",{className:"absolute top-0 left-0 w-1/2 h-full pointer-events-none",style:{background:"linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)",borderRadius:"inherit"}}),e.jsxs("div",{className:`\r
                absolute bottom-0 left-0 right-0\r
                flex items-center justify-between px-3\r
              `,style:{height:"14px",background:"#64FFDA"},children:[e.jsxs("span",{className:"font-mono flex items-center gap-1",style:{fontSize:"8px",color:"#0d1117",fontWeight:700},children:[e.jsx(ne,{size:8})," main"]}),e.jsxs("span",{className:"font-mono flex items-center gap-1",style:{fontSize:"8px",color:"#0d1117"},children:[e.jsx(zr,{size:8})," Connected"]})]})]}),e.jsx("div",{style:{width:"320px",height:"6px",background:"linear-gradient(180deg, #3d4a5c, #2d3748)",borderRadius:"0 0 2px 2px",boxShadow:"0 2px 8px rgba(0,0,0,0.6)"}}),e.jsxs("div",{className:"relative rounded-b-xl overflow-hidden",style:{width:"320px",height:"130px",background:"linear-gradient(180deg, #2d3748 0%, #1a202c 100%)",border:"2px solid #3d4a5c",borderTop:"none",boxShadow:"0 15px 40px rgba(0,0,0,0.7)"},children:[e.jsxs("div",{className:"p-3 pt-4",children:[[{keys:10,width:"100%"},{keys:9,width:"95%"},{keys:8,width:"88%"},{keys:6,width:"75%"}].map((r,o)=>e.jsx("div",{className:"flex gap-1 mb-1.5 mx-auto",style:{width:r.width},children:Array.from({length:r.keys}).map((i,l)=>e.jsx(a.div,{className:"flex-1 rounded-sm",style:{height:"10px",background:"linear-gradient(180deg, #4a5568, #2d3748)",border:"1px solid #4a5568",boxShadow:"0 2px 3px rgba(0,0,0,0.4)"},whileHover:{background:"#64FFDA30"}},l))},o)),e.jsx("div",{className:"flex justify-center mt-2",children:e.jsx("div",{className:"rounded-sm",style:{width:"45%",height:"10px",background:"linear-gradient(180deg, #4a5568, #2d3748)",border:"1px solid #4a5568",boxShadow:"0 2px 3px rgba(0,0,0,0.4)"}})})]}),e.jsx("div",{className:"absolute rounded-lg",style:{width:"70px",height:"50px",bottom:"12px",left:"50%",transform:"translateX(-50%)",background:"linear-gradient(145deg, #3d4a5c, #2d3748)",border:"1px solid #4a5568",boxShadow:"inset 0 1px 3px rgba(0,0,0,0.3)"}}),e.jsx(a.div,{className:`\r
                absolute top-2 right-4\r
                w-5 h-5 flex items-center justify-center\r
                rounded-full\r
              `,style:{background:"#64FFDA20"},animate:{opacity:[.4,1,.4]},transition:{duration:2.5,repeat:1/0},children:e.jsx("div",{className:"w-2 h-2 rounded-full",style:{background:"#64FFDA"}})}),e.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"linear-gradient(to bottom, transparent 70%, rgba(100,255,218,0.03) 100%)"}})]})]})}),e.jsx("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2",style:{width:"260px",height:"20px",background:"radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)",filter:"blur(8px)"}}),e.jsx(a.div,{className:"absolute inset-8 rounded-full pointer-events-none",style:{border:"1px dashed rgba(100,255,218,0.12)"},animate:{rotate:360},transition:{duration:20,repeat:1/0,ease:"linear"}}),e.jsxs(a.div,{className:`\r
          absolute bottom-10 right-0 z-30\r
          flex items-center gap-2\r
          px-3 py-2 rounded-xl\r
          backdrop-blur-md\r
          border border-border/50\r
        `,style:{background:"rgba(13,17,23,0.85)"},animate:{y:[0,-5,0]},transition:{duration:3,repeat:1/0,delay:1},children:[e.jsx(Pr,{size:14,className:"text-accent"}),e.jsx("span",{className:"text-xs font-mono text-accent",children:"npm run dev"}),e.jsx(a.span,{animate:{opacity:[1,0,1]},transition:{duration:1,repeat:1/0},className:"w-1.5 h-3 bg-accent rounded-sm"})]}),e.jsxs(a.div,{className:`\r
          absolute top-6 right-0 z-30\r
          flex items-center gap-2\r
          px-3 py-2 rounded-xl\r
          backdrop-blur-md border border-green-500/20\r
        `,style:{background:"rgba(13,17,23,0.85)"},animate:{y:[0,-4,0]},transition:{duration:4,repeat:1/0,delay:.5},children:[e.jsxs("span",{className:"relative flex h-2 w-2",children:[e.jsx("span",{className:`\r
            animate-ping absolute inline-flex h-full w-full\r
            rounded-full bg-green-400 opacity-75\r
          `}),e.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-green-400"})]}),e.jsx("span",{className:"text-xs font-mono text-green-400",children:"Open to Work"})]})]})},Ua=({icon:t,color:n,name:r,size:o=20})=>t?e.jsx(t,{size:o,style:{color:n}}):e.jsx("span",{className:"font-bold text-xs leading-none",style:{color:n},children:r==null?void 0:r.slice(0,2).toUpperCase()}),Ga=({skill:t,index:n})=>{const[r,o]=j.useState(!1);return e.jsxs(a.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.4,delay:n*.05},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),className:`\r
        group flex items-center gap-4\r
        p-4 rounded-xl\r
        bg-primary/60 border border-border\r
        hover:border-accent/40 hover:bg-primary-light/40\r
        transition-all duration-300 cursor-default\r
      `,children:[e.jsx("div",{className:`\r
          w-10 h-10 flex-shrink-0\r
          flex items-center justify-center\r
          rounded-xl transition-all duration-300\r
          group-hover:scale-110\r
        `,style:{background:`${t.color}18`,border:`1px solid ${t.color}35`},children:e.jsx(Ua,{icon:t.icon,color:t.color,name:t.name,size:20})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[e.jsx("span",{className:`\r
            text-sm font-medium text-text-heading truncate\r
            group-hover:text-accent transition-colors duration-300\r
          `,children:t.name}),e.jsxs(a.span,{animate:{opacity:r?1:.4},className:"text-xs font-mono ml-2 flex-shrink-0",style:{color:t.color},children:[t.level,"%"]})]}),e.jsx("div",{className:"h-1.5 bg-border rounded-full overflow-hidden",children:e.jsx(a.div,{className:"h-full rounded-full",style:{background:`linear-gradient(90deg, ${t.color}70, ${t.color})`},initial:{width:0},whileInView:{width:`${t.level}%`},viewport:{once:!0},transition:{duration:1.2,delay:n*.05+.2,ease:"easeOut"}})})]})]})},Ja=()=>{const[t,n]=j.useState("frontend"),r=lt.filter(s=>s.id!=="softSkills"),o=_[t]||[],i=lt.find(s=>s.id===t),l=[{label:"Frontend Skills",count:_.frontend.length,icon:"🎨",color:"#61DAFB"},{label:"Backend Skills",count:_.backend.length,icon:"⚙️",color:"#339933"},{label:"CMS / Ecommerce",count:_.cms.length,icon:"🛒",color:"#21759B"},{label:"DevOps / Tools",count:_.tools.length,icon:"🛠️",color:"#F05032"}];return e.jsx("section",{className:"py-20 bg-primary/50",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsx(E,{subtitle:"Expertise",title:"My Skills & Technologies",description:"Proficient in modern web technologies with 2+ years hands-on experience",align:"center",gradient:!0}),e.jsx(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:`\r
            grid grid-cols-2 md:grid-cols-4\r
            gap-4 mt-12 mb-12 max-w-3xl mx-auto\r
          `,children:l.map((s,u)=>e.jsxs(a.div,{initial:{opacity:0,scale:.85},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:u*.1},whileHover:{y:-4,scale:1.03},className:`\r
                text-center p-5\r
                bg-primary-light/40 border border-border\r
                hover:border-accent/30 rounded-2xl\r
                transition-all duration-300 cursor-default\r
              `,children:[e.jsx("div",{className:"text-3xl mb-2",children:s.icon}),e.jsxs("div",{className:"font-heading font-bold text-3xl",style:{color:s.color},children:[s.count,"+"]}),e.jsx("div",{className:"text-text-body/50 text-xs font-mono uppercase tracking-wider mt-1",children:s.label})]},s.label))}),e.jsx("div",{className:"flex flex-wrap justify-center gap-2 mb-10",children:r.map(s=>e.jsxs(a.button,{onClick:()=>n(s.id),whileHover:{scale:1.05},whileTap:{scale:.95},className:`
                flex items-center gap-2 px-4 py-2.5
                rounded-xl text-sm font-medium
                transition-all duration-300 border
                ${t===s.id?"bg-accent text-primary-dark border-accent shadow-lg shadow-accent/20":"bg-primary/60 text-text-body border-border hover:border-accent/40 hover:text-text-heading"}
              `,children:[e.jsx("span",{children:s.icon}),e.jsx("span",{className:"hidden sm:inline",children:s.title}),e.jsx("span",{className:"sm:hidden",children:s.title.split(" ")[0]})]},s.id))}),e.jsx(W,{mode:"wait",children:e.jsxs(a.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},exit:{opacity:0,y:-12},transition:{duration:.25},children:[e.jsxs("div",{className:`\r
              text-center mb-8 p-4 rounded-2xl\r
              bg-primary-light/20 border border-border max-w-2xl mx-auto\r
            `,children:[e.jsx("h3",{className:"font-heading font-semibold text-lg mb-1",style:{color:(i==null?void 0:i.color)||"#64FFDA"},children:i==null?void 0:i.title}),e.jsx("p",{className:"text-text-body/60 text-sm",children:i==null?void 0:i.description})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto",children:o.map((s,u)=>e.jsx(Ga,{skill:s,index:u},`${t}-${s.name}`))})]},t)}),e.jsx(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.3},className:`\r
            mt-14 pt-10 border-t border-border\r
            flex flex-wrap items-center justify-center gap-10 md:gap-16\r
          `,children:[{value:"2+",label:"Years Experience",icon:e.jsx(Ue,{})},{value:"20+",label:"Projects Delivered",icon:e.jsx(de,{})},{value:"15+",label:"Happy Clients",icon:e.jsx(dr,{})},{value:"5+",label:"Tech Stacks",icon:e.jsx(O,{})}].map((s,u)=>e.jsxs(a.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:u*.1},className:"text-center group cursor-default",children:[e.jsx("div",{className:`\r
                w-10 h-10 mx-auto mb-2\r
                flex items-center justify-center\r
                text-accent/60 group-hover:text-accent\r
                transition-colors duration-300\r
              `,children:s.icon}),e.jsx("div",{className:`\r
                font-heading font-bold text-3xl\r
                bg-gradient-to-r from-accent to-accent-hover\r
                bg-clip-text text-transparent\r
              `,children:s.value}),e.jsx("div",{className:`\r
                text-text-body/50 text-xs font-mono\r
                uppercase tracking-wider mt-1\r
              `,children:s.label})]},s.label))})]})})},Qa=()=>{const t=[{date:"Mar 2026 - Present",duration:"Full-time",title:"Full Stack Developer",company:"Software House",location:"On-site / Hybrid",type:"work",current:!0,icon:e.jsx(bt,{size:20}),color:"#64FFDA",bullets:["Work on SaaS products across medical, e-commerce, appointment booking, and finance domains.","Build production features with Next.js, NestJS, PostgreSQL, AWS, and Git-based team workflows.","Developed a full medical e-commerce store with product catalog, checkout flows, and an admin panel for managing products, orders, and operations.","Built a complete appointment system with separate client, clinic-admin, and super-admin portals for role-based workflows.","Contribute to finance product features with secure APIs, database design, and scalable backend architecture."],tags:["Next.js","NestJS","PostgreSQL","AWS","Git","SaaS"]},{date:"Jun 2024 – Present",duration:"Full-time · Freelance",title:"Full Stack Web Developer",company:"Self-Employed",location:"Remote · Worldwide",type:"work",current:!1,icon:e.jsx(zt,{size:20}),color:"#64FFDA",bullets:["Design and develop full-stack web applications and high-performance websites for agencies and businesses worldwide.","Build scalable MERN stack applications with REST APIs, backend architecture, and admin dashboards with role-based access control.","Develop custom WordPress themes and e-commerce platforms using WooCommerce and Shopify (Liquid).","Deliver end-to-end project implementations covering UI/UX design, API integration, and deployment."],tags:["MERN Stack","WordPress","Shopify","REST API","React.js"]},{date:"Jan 2026 – Mar 2026",duration:"3 months · Internship",title:"MERN Stack Developer",company:"Private Company",location:"Remote",type:"work",current:!1,icon:e.jsx(O,{size:20}),color:"#61DAFB",bullets:["Developed and optimized MERN stack applications in a production environment.","Collaborated with senior developers on modern JavaScript ecosystem tooling and best practices."],tags:["MongoDB","Express.js","React.js","Node.js"]},{date:"Nov 2025 – Dec 2025",duration:"2 months · Internship",title:"WordPress Developer",company:"Appverse Technologies",location:"Remote",type:"work",current:!1,icon:e.jsx(ne,{size:20}),color:"#21759B",bullets:["Developed custom WordPress themes and plugins using HTML, CSS, JavaScript, and PHP.","Built responsive themes, custom post types, and API-based plugins following WordPress coding standards.","Contributed to performance optimization, debugging, and real-world project implementations."],tags:["WordPress","PHP","JavaScript","MySQL"]},{date:"2021 – 2025",duration:"4 years",title:"Bachelor of Science in Information Technology (BSIT)",company:"University of Jhang",location:"Jhang, Punjab, Pakistan",type:"education",current:!1,icon:e.jsx(ye,{size:20}),color:"#A78BFA",bullets:["Completed final year project on AI-based Phishing Detection using hybrid ML (BERT + CNN).","Strong foundation in web technologies, databases, software engineering, and OOP principles."],tags:["BSIT","AI / ML","BERT + CNN","Software Engineering"]}];return e.jsx("section",{className:"py-20",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsx(E,{subtitle:"Professional Journey",title:"Experience & Education",description:"Real-world projects, internships, and academic excellence",align:"center",gradient:!0}),e.jsxs("div",{className:"flex items-center justify-center gap-8 mt-8 mb-16",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm text-text-body/60",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-accent"}),e.jsx("span",{children:"Work Experience"})]}),e.jsxs("div",{className:"flex items-center gap-2 text-sm text-text-body/60",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-purple-400"}),e.jsx("span",{children:"Education"})]})]}),e.jsx("div",{className:"max-w-3xl mx-auto space-y-6",children:t.map((n,r)=>e.jsxs(a.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:r*.1},className:"relative flex gap-6 group",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(a.div,{whileHover:{scale:1.15},className:`\r
                    w-12 h-12 flex-shrink-0\r
                    flex items-center justify-center\r
                    rounded-full border-2 bg-primary z-10\r
                    transition-all duration-300\r
                  `,style:{borderColor:n.color,boxShadow:`0 0 0 4px ${n.color}12`},children:e.jsx("span",{style:{color:n.color},children:n.icon})}),r<t.length-1&&e.jsx("div",{className:"w-0.5 flex-1 mt-3",style:{background:`linear-gradient(to bottom, ${n.color}40, transparent)`,minHeight:"2rem"}})]}),e.jsxs("div",{className:`\r
                flex-1 pb-6\r
                bg-primary-light/30 border border-border\r
                hover:border-accent/30 rounded-2xl p-6\r
                transition-all duration-300\r
                group-hover:shadow-xl group-hover:shadow-black/20\r
                group-hover:bg-primary-light/50\r
              `,children:[e.jsxs("div",{className:`\r
                  flex flex-col sm:flex-row\r
                  sm:items-start justify-between gap-3 mb-5\r
                `,children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-1",children:[e.jsx("h3",{className:`\r
                        font-heading font-bold text-lg text-text-heading\r
                        group-hover:text-accent transition-colors duration-300\r
                      `,children:n.title}),n.current&&e.jsx(a.span,{animate:{opacity:[1,.5,1]},transition:{duration:2,repeat:1/0},className:`\r
                            px-2.5 py-0.5 bg-accent/15 text-accent\r
                            text-[10px] font-mono font-bold\r
                            uppercase tracking-wider\r
                            rounded-full border border-accent/30\r
                          `,children:"🟢 Current"})]}),e.jsx("p",{className:"font-semibold text-base mb-2",style:{color:n.color},children:n.company}),e.jsxs("div",{className:"flex flex-wrap gap-x-5 gap-y-1",children:[e.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-text-body/50",children:[e.jsx(ce,{size:12})," ",n.date]}),e.jsxs("span",{className:"flex items-center gap-1.5 text-xs text-text-body/50",children:[e.jsx(Ve,{size:12})," ",n.location]})]})]}),e.jsx("div",{className:`\r
                    flex-shrink-0 self-start px-3 py-1.5\r
                    bg-primary/80 border border-border\r
                    rounded-lg text-xs font-mono text-text-body/50 whitespace-nowrap\r
                  `,children:n.duration})]}),e.jsx("div",{className:"border-t border-border mb-5"}),e.jsx("ul",{className:"space-y-3 mb-5",children:n.bullets.map((o,i)=>e.jsxs(a.li,{initial:{opacity:0,x:-10},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:r*.1+i*.06},className:"flex items-start gap-3 group/item",children:[e.jsx(yt,{size:16,className:`\r
                          mt-0.5 flex-shrink-0 text-text-body/25\r
                          group-hover/item:text-accent\r
                          transition-colors duration-300\r
                        `}),e.jsx("p",{className:"text-text-body text-sm leading-relaxed",children:o})]},i))}),e.jsx("div",{className:"flex flex-wrap gap-2",children:n.tags.map(o=>e.jsx(a.span,{whileHover:{scale:1.08,y:-2},className:`\r
                        px-3 py-1 text-[11px] font-mono font-medium\r
                        rounded-lg border cursor-default\r
                        transition-all duration-200\r
                      `,style:{color:n.color,background:`${n.color}12`,borderColor:`${n.color}30`},children:o},o))})]})]},r))})]})})},Ya=()=>{K({title:"About | Hamad Hussain",description:"Hamad Hussain is a full-stack developer and tech consultant building reliable MERN, WordPress, Shopify, and custom web solutions for business growth."});const t=[{title:"Clean Code",description:"Writing maintainable, scalable code that future teams can trust",icon:e.jsx(O,{})},{title:"User Experience",description:"Designing clear product flows that help visitors take action",icon:e.jsx(Ce,{})},{title:"Continuous Learning",description:"Applying modern tools where they improve speed, quality, or ROI",icon:e.jsx(Cr,{})},{title:"Problem Solving",description:"Turning complex requirements into simple, usable digital systems",icon:e.jsx(bt,{})}];return e.jsxs(a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"pt-24 pb-20",children:[e.jsx("section",{className:"relative overflow-hidden",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:`\r
            grid grid-cols-1 lg:grid-cols-2\r
            gap-12 items-center mb-20\r
          `,children:[e.jsx(a.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.7},className:"relative flex items-center justify-center",children:e.jsx(qa,{})}),e.jsxs(a.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2},children:[e.jsxs("div",{className:`\r
                inline-flex items-center gap-2\r
                px-5 py-2.5 mb-8\r
                bg-accent/10 border border-accent/20 rounded-full\r
              `,children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-accent animate-pulse"}),e.jsx("span",{className:"font-mono text-xs text-accent uppercase tracking-[0.2em]",children:"About Me"})]}),e.jsxs("h1",{className:`\r
                font-heading font-bold\r
                text-4xl md:text-5xl\r
                text-text-heading leading-tight mb-6\r
              `,children:[e.jsx("span",{className:`\r
                  bg-gradient-to-r from-accent to-accent-hover\r
                  bg-clip-text text-transparent\r
                `,children:"Full Stack Developer"}),e.jsx("br",{}),"with 2+ Years Experience"]}),e.jsxs("div",{className:"space-y-5 mb-8",children:[e.jsx("p",{className:"text-text-body text-lg leading-relaxed",children:"I build business-ready websites, e-commerce stores, dashboards, and web applications using MERN, WordPress, Shopify, and modern frontend tooling."}),e.jsx("p",{className:"text-text-body text-lg leading-relaxed",children:"My focus is simple: clean architecture, fast performance, clear communication, and digital products that help clients win trust, convert users, and operate with confidence."})]}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(N,{variant:"primary",size:"lg",href:"/portfolio",children:"View Portfolio"}),e.jsx(N,{variant:"secondary",size:"lg",href:"/contact",children:"Hire Me"})]})]})]})})}),e.jsx(Ja,{}),e.jsx(Qa,{}),e.jsx("section",{className:"py-20 bg-primary-light/30",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsx(E,{subtitle:"Philosophy",title:"What Drives Me",description:"The standards I use to deliver business value, not just code",align:"center",gradient:!0}),e.jsx("div",{className:`\r
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4\r
            gap-8 mt-12\r
          `,children:t.map((n,r)=>e.jsx(a.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:r*.1},children:e.jsxs(H,{hoverable:!0,className:"text-center p-8 h-full group",children:[e.jsx(a.div,{whileHover:{rotate:6,scale:1.1},className:`\r
                      w-20 h-20 mx-auto mb-6\r
                      flex items-center justify-center\r
                      text-3xl text-accent\r
                      bg-accent/10 border-2 border-accent/20\r
                      rounded-3xl transition-all duration-300\r
                      group-hover:bg-accent group-hover:text-primary-dark\r
                    `,children:n.icon}),e.jsx("h3",{className:"font-heading font-semibold text-xl text-text-heading mb-4",children:n.title}),e.jsx("p",{className:"text-text-body text-sm leading-relaxed",children:n.description})]})},r))})]})}),e.jsx("section",{className:"py-20",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:`\r
            bg-gradient-to-br from-primary-light to-primary\r
            border border-border rounded-3xl\r
            p-12 md:p-16 text-center relative overflow-hidden\r
          `,children:[e.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[e.jsx("div",{className:"absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"})]}),e.jsxs(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"relative z-10",children:[e.jsxs("h2",{className:"font-heading font-bold text-3xl md:text-5xl text-text-heading mb-6",children:["Ready to Start Your",e.jsx("span",{className:`\r
                  bg-gradient-to-r from-accent to-accent-hover\r
                  bg-clip-text text-transparent block mt-1\r
                `,children:"Next Project?"})]}),e.jsx("p",{className:"text-text-body text-lg max-w-2xl mx-auto mb-10",children:"With 2+ years of real-world experience in MERN, WordPress, and full-stack development, let's turn your ideas into reality."}),e.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-6",children:[e.jsx(N,{variant:"primary",size:"lg",href:"/contact",children:"Start a Project"}),e.jsx(N,{variant:"secondary",size:"lg",href:"/portfolio",children:"View My Work"})]})]})]})})})]})},Xa=()=>{K({title:"Services | Hamad Hussain",description:"Hire Hamad Hussain for full-stack development, WordPress, Shopify, UI implementation, APIs, and custom business web solutions."});const[t,n]=j.useState("all"),r=t==="all"?se:se.filter(i=>i.category===t),o={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1}};return e.jsxs(a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"pt-24 pb-20",children:[e.jsx("section",{className:"relative overflow-hidden",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:`\r
            max-w-4xl mx-auto\r
            text-center\r
            py-16 md:py-24\r
          `,children:[e.jsxs(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`\r
                inline-flex items-center gap-2\r
                px-4 py-2 mb-6\r
                bg-accent/10 border border-accent/20\r
                rounded-full\r
              `,children:[e.jsx("span",{className:`\r
                w-2 h-2 rounded-full\r
                bg-accent animate-pulse\r
              `}),e.jsx("span",{className:`\r
                font-mono text-xs text-accent\r
                uppercase tracking-widest\r
              `,children:"My Services"})]}),e.jsxs(a.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.1},className:`\r
                font-heading font-bold\r
                text-4xl md:text-5xl lg:text-6xl\r
                text-text-heading\r
                leading-tight\r
                mb-6\r
              `,children:[e.jsx("span",{className:`\r
                bg-gradient-to-r from-accent to-accent-hover\r
                bg-clip-text text-transparent\r
              `,children:"Development Services"}),e.jsx("br",{}),"Tailored to Your Needs"]}),e.jsx(a.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`\r
                text-text-body text-xl\r
                max-w-3xl mx-auto\r
                leading-relaxed\r
                mb-10\r
              `,children:"I build practical digital products for founders, agencies, and growing teams: fast websites, scalable apps, conversion-focused stores, and maintainable systems."}),e.jsxs(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[e.jsx(N,{variant:"primary",size:"lg",href:"/contact",children:"Get a Quote"}),e.jsx(N,{variant:"secondary",size:"lg",href:"/portfolio",children:"See My Work"})]})]})})}),e.jsx("section",{className:"py-16 bg-primary/50",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsx(E,{subtitle:"Categories",title:"Browse by Service Type",description:"Choose the service that matches your business goal",align:"center"}),e.jsxs("div",{className:`\r
            flex flex-wrap justify-center\r
            gap-3 mb-12\r
          `,children:[e.jsx("button",{onClick:()=>n("all"),className:`
                px-6 py-3
                font-medium
                rounded-lg
                transition-all duration-300
                ${t==="all"?"bg-accent text-primary-dark":"bg-primary/50 text-text-body hover:text-accent hover:bg-accent/10"}
              `,children:"All Services"}),[...new Set(se.map(i=>i.category))].map(i=>e.jsx("button",{onClick:()=>n(i),className:`
                  px-6 py-3
                  font-medium
                  rounded-lg
                  transition-all duration-300
                  ${t===i?"bg-accent text-primary-dark":"bg-primary/50 text-text-body hover:text-accent hover:bg-accent/10"}
                `,children:i.charAt(0).toUpperCase()+i.slice(1)},i))]}),e.jsx(a.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.1}}},initial:"hidden",animate:"visible",className:`\r
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3\r
              gap-8\r
            `,children:r.map((i,l)=>{var s;return e.jsx(a.div,{variants:o,custom:l,children:e.jsx(un,{title:i.title,description:i.description,icon:i.icon?T.createElement(i.icon):e.jsx(O,{}),features:((s=i.features)==null?void 0:s.slice(0,4))||[],to:`/services#${i.id}`,className:"h-full"})},i.id)})})]})}),e.jsx("section",{className:"py-20",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsx(E,{subtitle:"Workflow",title:"My Development Process",description:"A clear workflow that keeps scope, quality, and delivery on track",align:"center",gradient:!0}),e.jsx("div",{className:`\r
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3\r
            gap-8 mt-16\r
          `,children:xn.map((i,l)=>e.jsx(a.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:l*.1},children:e.jsxs(H,{hoverable:!0,className:`\r
                    p-8 text-center\r
                    relative\r
                    group\r
                  `,children:[e.jsx("div",{className:`\r
                    absolute -top-4 -left-4\r
                    w-12 h-12\r
                    bg-accent text-primary-dark\r
                    rounded-xl\r
                    flex items-center justify-center\r
                    font-heading font-bold text-2xl\r
                    shadow-glow\r
                  `,children:i.step}),e.jsx("div",{className:`\r
                    text-4xl mb-6\r
                    group-hover:scale-110\r
                    transition-transform duration-300\r
                  `,children:i.icon}),e.jsx("h3",{className:`\r
                    font-heading font-semibold\r
                    text-xl text-text-heading\r
                    mb-3\r
                  `,children:i.title}),e.jsx("p",{className:"text-text-body text-sm leading-relaxed",children:i.description}),i.duration&&e.jsx("div",{className:`\r
                      mt-4 pt-4 border-t border-border\r
                      text-xs text-accent font-mono\r
                    `,children:i.duration})]})},i.step))})]})}),e.jsx("section",{className:"py-20 bg-primary-light/30",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsx(E,{subtitle:"Pricing",title:"Flexible Packages",description:"Choose the plan that fits your project requirements",align:"center",gradient:!0}),e.jsx("div",{className:`\r
            grid grid-cols-1 md:grid-cols-3\r
            gap-8 mt-16\r
            max-w-5xl mx-auto\r
          `,children:hn.map((i,l)=>e.jsxs(a.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:l*.1},className:`
                  relative
                  ${i.recommended?"md:-mt-4 md:-mb-4":""}
                `,children:[i.recommended&&e.jsx("div",{className:`\r
                    absolute -top-3 left-1/2\r
                    -translate-x-1/2\r
                    bg-accent text-primary-dark\r
                    px-4 py-1\r
                    rounded-full\r
                    text-sm font-bold\r
                    whitespace-nowrap\r
                    z-10\r
                  `,children:"Most Popular"}),e.jsxs(H,{variant:i.recommended?"glass":"default",className:`
                    p-8 h-full
                    ${i.recommended?"border-accent/50 shadow-glow":""}
                    flex flex-col
                  `,children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h3",{className:`\r
                      font-heading font-bold\r
                      text-2xl text-text-heading\r
                      mb-2\r
                    `,children:i.name}),e.jsx("p",{className:"text-text-body text-sm mb-6",children:i.description}),e.jsxs("div",{className:`\r
                      font-heading font-bold\r
                      text-4xl text-accent\r
                    `,children:[i.price,e.jsx("span",{className:`\r
                        text-lg text-text-body\r
                        font-normal\r
                      `})]})]}),e.jsx("ul",{className:"space-y-3 mb-8 flex-grow",children:i.features.map((s,u)=>e.jsxs("li",{className:"flex items-start gap-3 text-sm",children:[e.jsx(me,{className:`\r
                          text-accent mt-0.5 flex-shrink-0\r
                        `}),e.jsx("span",{className:"text-text-body",children:s})]},u))}),e.jsx(N,{variant:i.recommended?"primary":"secondary",size:"lg",fullWidth:!0,href:"/contact",children:"Get Started"})]})]},i.id))}),e.jsxs(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:`\r
              text-center mt-12\r
              p-6\r
              bg-primary/30 border border-border\r
              rounded-xl\r
              max-w-2xl mx-auto\r
            `,children:[e.jsxs("div",{className:`\r
              flex items-center justify-center gap-3\r
              mb-4\r
            `,children:[e.jsx(Ne,{className:"text-accent text-xl"}),e.jsx("h4",{className:`\r
                font-heading font-semibold\r
                text-lg text-text-heading\r
              `,children:"Need a Custom Solution?"})]}),e.jsx("p",{className:"text-text-body mb-4",children:"Every project is unique. Contact me for a personalized quote tailored to your specific requirements."}),e.jsx(N,{variant:"link",href:"/contact",size:"lg",children:"Request Custom Quote →"})]})]})}),e.jsx("section",{className:"py-20",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsx(E,{subtitle:"Advantages",title:"Why Work With Me",description:"A business-first development partner for teams that care about results",align:"center",gradient:!0}),e.jsx("div",{className:`\r
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3\r
            gap-8 mt-16\r
            max-w-6xl mx-auto\r
          `,children:gn.map((i,l)=>e.jsx(a.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:l*.1},children:e.jsxs(H,{hoverable:!0,className:`\r
                    p-6\r
                    flex items-start gap-4\r
                    group\r
                  `,children:[e.jsx("div",{className:`\r
                    w-14 h-14\r
                    flex items-center justify-center\r
                    bg-accent/10 text-accent\r
                    rounded-xl\r
                    group-hover:bg-accent group-hover:text-primary-dark\r
                    transition-all duration-300\r
                    flex-shrink-0\r
                  `,children:T.createElement(i.icon,{size:24})}),e.jsxs("div",{children:[e.jsx("h3",{className:`\r
                      font-heading font-semibold\r
                      text-lg text-text-heading\r
                      mb-2\r
                    `,children:i.title}),e.jsx("p",{className:"text-text-body text-sm leading-relaxed",children:i.description})]})]})},i.id))}),e.jsx(a.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},className:`\r
              text-center mt-16\r
            `,children:e.jsxs("div",{className:`\r
              inline-flex flex-col sm:flex-row\r
              items-center gap-6\r
              p-8\r
              bg-gradient-to-r from-primary-light to-primary\r
              border border-border\r
              rounded-2xl\r
            `,children:[e.jsxs("div",{className:"text-left",children:[e.jsx("h3",{className:`\r
                  font-heading font-semibold\r
                  text-xl text-text-heading\r
                  mb-2\r
                `,children:"Ready to Start Your Project?"}),e.jsx("p",{className:"text-text-body",children:"Let's map your goal, define the right solution, and build it with confidence."})]}),e.jsx("div",{className:"flex-shrink-0",children:e.jsx(N,{variant:"primary",size:"lg",href:"/contact",children:"Get Started Now"})})]})})]})})]})},Ka=()=>{K({title:"Portfolio | Hamad Hussain",description:"Explore business-focused MERN, WordPress, Shopify, AI, and custom web development projects built by Hamad Hussain."});const[t,n]=j.useState("all"),[r,o]=j.useState("grid"),[i,l]=j.useState(""),s=Ta(),u=s.filter(p=>t==="all"||p.category===t).filter(p=>i===""||p.title.toLowerCase().includes(i.toLowerCase())||p.description.toLowerCase().includes(i.toLowerCase())||p.technologies.some(d=>d.toLowerCase().includes(i.toLowerCase()))),c=je.find(p=>p.id===t)||{name:"All Projects"},g=(p,d="")=>{var w,b,h,S,P;const x=p.thumbnail||((w=p.primaryMedia)==null?void 0:w.poster)||((b=p.primaryMedia)==null?void 0:b.src)||p.image;return(((h=p.primaryMedia)==null?void 0:h.type)||(oe(x)?"video":"image"))==="video"?e.jsx("video",{src:((S=p.primaryMedia)==null?void 0:S.src)||x,poster:((P=p.primaryMedia)==null?void 0:P.poster)||p.thumbnail,className:d,muted:!0,playsInline:!0,preload:"metadata"}):e.jsx("img",{src:x,alt:p.imageAlt||p.title,className:d})};return e.jsxs(a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"pt-24 pb-20",children:[e.jsx("section",{className:"relative overflow-hidden",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:`\r
            max-w-5xl mx-auto\r
            text-center\r
            py-16 md:py-24\r
          `,children:[e.jsxs(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`\r
                inline-flex items-center gap-2\r
                px-4 py-2 mb-6\r
                bg-accent/10 border border-accent/20\r
                rounded-full\r
              `,children:[e.jsx("span",{className:`\r
                w-2 h-2 rounded-full\r
                bg-accent animate-pulse\r
              `}),e.jsx("span",{className:`\r
                font-mono text-xs text-accent\r
                uppercase tracking-widest\r
              `,children:"My Portfolio"})]}),e.jsxs(a.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.1},className:`\r
                font-heading font-bold\r
                text-4xl md:text-5xl lg:text-6xl\r
                text-text-heading\r
                leading-tight\r
                mb-6\r
              `,children:[e.jsx("span",{className:`\r
                bg-gradient-to-r from-accent to-accent-hover\r
                bg-clip-text text-transparent\r
              `,children:"Project Portfolio"}),e.jsx("br",{}),"Showcasing My Best Work"]}),e.jsx(a.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`\r
                text-text-body text-xl\r
                max-w-3xl mx-auto\r
                leading-relaxed\r
                mb-10\r
              `,children:"Browse through my collection of completed projects. Each one represents a unique challenge and solution, showcasing my skills and expertise."}),e.jsx(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`\r
                grid grid-cols-2 md:grid-cols-4\r
                gap-6 mb-12\r
                max-w-2xl mx-auto\r
              `,children:[{value:fe.total,label:"Total Projects",icon:e.jsx(We,{})},{value:fe.featured,label:"Featured",icon:e.jsx(Mt,{})},{value:fe.categories,label:"Categories",icon:e.jsx(St,{})},{value:fe.technologies,label:"Technologies",icon:e.jsx(O,{})}].map((p,d)=>e.jsxs("div",{className:`\r
                    p-4\r
                    bg-primary/30 border border-border\r
                    rounded-xl\r
                    hover:border-accent/30\r
                    transition-all duration-300\r
                    group\r
                  `,children:[e.jsxs("div",{className:`\r
                    flex items-center justify-center gap-2\r
                    mb-2\r
                  `,children:[e.jsx("div",{className:`\r
                      text-accent\r
                      group-hover:scale-110\r
                      transition-transform duration-300\r
                    `,children:p.icon}),e.jsx("div",{className:`\r
                      font-heading font-bold\r
                      text-2xl md:text-3xl\r
                      text-accent\r
                    `,children:p.value})]}),e.jsx("div",{className:`\r
                    text-xs text-text-body\r
                    font-mono uppercase tracking-wider\r
                  `,children:p.label})]},d))})]})})}),e.jsx("section",{className:"py-8 bg-primary/50 sticky top-24 z-20",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:`\r
            flex flex-col lg:flex-row\r
            items-center justify-between\r
            gap-6\r
          `,children:[e.jsx("div",{className:`\r
              flex flex-wrap justify-center\r
              gap-2\r
            `,children:je.map(p=>e.jsxs("button",{onClick:()=>n(p.id),className:`
                    px-4 py-2
                    font-mono text-sm
                    rounded-full
                    transition-all duration-300
                    ${t===p.id?"bg-accent text-primary-dark":"bg-primary/50 text-text-body hover:text-accent hover:bg-accent/10"}
                  `,children:[p.name,p.count>0&&e.jsx("span",{className:`\r
                      ml-1.5 px-1.5 py-0.5\r
                      text-xs rounded-full\r
                      bg-primary-dark/20\r
                    `,children:p.count})]},p.id))}),e.jsxs("div",{className:`\r
              flex items-center gap-4\r
            `,children:[e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",placeholder:"Search projects...",value:i,onChange:p=>l(p.target.value),className:`\r
                    pl-10 pr-4 py-2\r
                    w-48 md:w-64\r
                    bg-primary border border-border\r
                    text-text-heading rounded-lg\r
                    placeholder:text-text-body/50\r
                    focus:outline-none focus:border-accent\r
                    focus:ring-2 focus:ring-accent/20\r
                    transition-all duration-300\r
                  `}),e.jsx(gr,{className:`\r
                  absolute left-3 top-1/2 -translate-y-1/2\r
                  text-text-body/50\r
                `})]}),e.jsxs("div",{className:`\r
                flex items-center\r
                bg-primary border border-border\r
                rounded-lg overflow-hidden\r
              `,children:[e.jsx("button",{onClick:()=>o("grid"),className:`
                    p-2
                    transition-all duration-300
                    ${r==="grid"?"bg-accent/10 text-accent":"text-text-body hover:text-accent"}
                  `,"aria-label":"Grid view",children:e.jsx(We,{size:20})}),e.jsx("div",{className:"w-px h-6 bg-border"}),e.jsx("button",{onClick:()=>o("list"),className:`
                    p-2
                    transition-all duration-300
                    ${r==="list"?"bg-accent/10 text-accent":"text-text-body hover:text-accent"}
                  `,"aria-label":"List view",children:e.jsx(ke,{size:20})})]})]})]})})}),e.jsx("section",{className:"py-16",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsxs(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`\r
              flex flex-col md:flex-row\r
              items-start md:items-center justify-between\r
              gap-4 mb-12\r
            `,children:[e.jsxs("div",{children:[e.jsx("h2",{className:`\r
                font-heading font-semibold\r
                text-2xl text-text-heading\r
                mb-2\r
              `,children:c.name}),e.jsxs("p",{className:"text-text-body",children:["Showing ",u.length," of ",s.length," projects"]})]}),i&&e.jsx("button",{onClick:()=>l(""),className:`\r
                  px-4 py-2\r
                  text-sm text-accent\r
                  bg-accent/10 border border-accent/20\r
                  rounded-lg\r
                  hover:bg-accent/20\r
                  transition-colors duration-300\r
                `,children:"Clear search"})]}),u.length>0?e.jsx(a.div,{initial:{opacity:0},animate:{opacity:1},className:r==="grid"?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8":"space-y-8",children:u.map((p,d)=>{var x,f,w;return e.jsx(a.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5,delay:d*.05},className:r==="list"?"flex gap-6":"",children:r==="list"?e.jsxs(H,{hoverable:!0,className:"flex flex-col md:flex-row gap-6 p-6",to:`/portfolio/${p.id}`,children:[e.jsx("div",{className:`\r
                        md:w-1/3\r
                        aspect-video md:aspect-square\r
                        overflow-hidden rounded-lg\r
                      `,children:g(p,`
                            w-full h-full object-cover
                            transition-transform duration-500
                            group-hover:scale-110
                          `)}),e.jsxs("div",{className:"md:w-2/3",children:[e.jsxs("div",{className:`\r
                          flex items-center gap-4\r
                          mb-4\r
                        `,children:[e.jsx("span",{className:`\r
                            font-mono text-xs text-accent\r
                            bg-accent/10 border border-accent/20\r
                            px-3 py-1 rounded-full\r
                          `,children:p.category}),e.jsx("span",{className:`\r
                            text-xs text-text-body\r
                          `,children:p.date}),p.featured&&e.jsx("span",{className:`\r
                              ml-auto\r
                              text-xs text-accent font-bold\r
                              bg-accent/10 px-2 py-1 rounded\r
                            `,children:"Featured"})]}),e.jsx("h3",{className:`\r
                          font-heading font-bold\r
                          text-xl text-text-heading\r
                          mb-3\r
                        `,children:p.title}),e.jsx("p",{className:`\r
                          text-text-body text-sm\r
                          mb-4 line-clamp-3\r
                        `,children:p.description}),e.jsxs("div",{className:"flex flex-wrap gap-2 mb-6",children:[p.technologies.slice(0,5).map((b,h)=>e.jsx("span",{className:`\r
                                font-mono text-xs text-text-body/80\r
                                bg-primary/50 px-2 py-1 rounded\r
                              `,children:b},h)),p.technologies.length>5&&e.jsxs("span",{className:`\r
                              font-mono text-xs text-accent\r
                            `,children:["+",p.technologies.length-5]})]}),e.jsx(N,{variant:"link",size:"sm",className:"mt-auto",children:"View Case Study →"})]})]}):e.jsx(Ht,{title:p.title,description:p.description,image:((x=p.primaryMedia)==null?void 0:x.src)||p.thumbnail||p.image,mediaType:(f=p.primaryMedia)==null?void 0:f.type,posterImage:((w=p.primaryMedia)==null?void 0:w.poster)||p.thumbnail,tags:p.technologies,category:p.category,liveUrl:p.liveUrl,githubUrl:p.githubUrl,featured:p.featured,to:`/portfolio/${p.id}`})},p.id)})},r+t):e.jsxs(a.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:`\r
                text-center py-20\r
                bg-primary/30 border border-border\r
                rounded-2xl\r
              `,children:[e.jsx("div",{className:"text-6xl mb-6",children:"🔍"}),e.jsx("h3",{className:`\r
                font-heading font-semibold text-xl text-text-heading\r
                mb-3\r
              `,children:"No projects found"}),e.jsx("p",{className:"text-text-body max-w-md mx-auto mb-6",children:i?`No projects match "${i}". Try a different search term.`:`No projects in the "${c.name}" category yet.`}),e.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-3",children:[e.jsx(N,{variant:"secondary",onClick:()=>l(""),children:"Clear Search"}),e.jsx(N,{variant:"primary",onClick:()=>n("all"),children:"View All Projects"})]})]})]})}),e.jsx("section",{className:"py-20",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:`\r
            bg-gradient-to-br from-primary-light to-primary\r
            border border-border\r
            rounded-3xl\r
            p-12 text-center\r
            relative overflow-hidden\r
          `,children:[e.jsx("div",{className:`\r
              absolute inset-0\r
              opacity-5\r
              bg-grid-pattern\r
              bg-[length:100px_100px]\r
            `}),e.jsxs("h2",{className:`\r
              font-heading font-bold\r
              text-3xl md:text-4xl\r
              text-text-heading\r
              mb-6\r
              relative z-10\r
            `,children:["Like What You See?",e.jsx("span",{className:`\r
                bg-gradient-to-r from-accent to-accent-hover\r
                bg-clip-text text-transparent\r
                block\r
              `,children:"Let's Build Together"})]}),e.jsx("p",{className:`\r
              text-text-body text-lg\r
              max-w-2xl mx-auto\r
              mb-8\r
              relative z-10\r
            `,children:"Have a project in mind? Let's discuss how to build a digital product that earns trust, performs well, and supports your business goals."}),e.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10",children:[e.jsx(N,{variant:"primary",size:"lg",href:"/contact",children:"Start a Project"}),e.jsx(N,{variant:"secondary",size:"lg",href:"/services",children:"View Services"})]})]})})})]})},Za=()=>{var Y,pe,q,ge;const{projectId:t}=ut(),[n,r]=j.useState(0),o=_t(t),i=Aa(t,3);if(K({title:o?`${o.title} | Hamad Hussain`:"Project | Hamad Hussain",description:(o==null?void 0:o.description)||"Project case study by Hamad Hussain.",robots:o?"index, follow":"noindex, follow"}),!o)return e.jsx("div",{className:`\r
        min-h-screen\r
        flex items-center justify-center\r
        pt-24 pb-20\r
      `,children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-6xl mb-6",children:"🔍"}),e.jsx("h1",{className:`\r
            font-heading font-bold\r
            text-3xl text-text-heading\r
            mb-4\r
          `,children:"Project Not Found"}),e.jsx("p",{className:"text-text-body mb-8",children:"The project you're looking for doesn't exist or has been moved."}),e.jsx(N,{variant:"primary",leftIcon:e.jsx(le,{}),href:"/portfolio",children:"Back to Portfolio"})]})});const{title:l,description:s,longDescription:u,images:c=[],media:g=[],technologies:p=[],client:d,duration:x,date:f,role:w,challenges:b=[],results:h=[],liveUrl:S,githubUrl:P,category:B,testimonial:I,metrics:y}=o,A=()=>{r(v=>v===c.length-1?0:v+1)},R=()=>{r(v=>v===0?c.length-1:v-1)};return e.jsxs(a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"pt-24 pb-20",children:[e.jsx("div",{className:"container mx-auto px-6 mb-12",children:e.jsxs(L,{to:"/portfolio",className:`\r
            inline-flex items-center gap-2\r
            text-text-body hover:text-accent\r
            transition-colors duration-300\r
            group\r
          `,children:[e.jsx(le,{className:`\r
            group-hover:-translate-x-1\r
            transition-transform duration-300\r
          `}),e.jsx("span",{children:"Back to Portfolio"})]})}),e.jsx("section",{className:"mb-20",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:`\r
            grid grid-cols-1 lg:grid-cols-3\r
            gap-12\r
          `,children:[e.jsxs("div",{className:"lg:col-span-2",children:[e.jsxs("div",{className:`\r
                flex flex-wrap items-center gap-3\r
                mb-6\r
              `,children:[e.jsx("span",{className:`\r
                  font-mono text-xs text-accent\r
                  bg-accent/10 border border-accent/20\r
                  px-3 py-1 rounded-full\r
                `,children:B}),e.jsxs("span",{className:`\r
                  text-sm text-text-body\r
                  flex items-center gap-1\r
                `,children:[e.jsx(ce,{size:14}),f]})]}),e.jsx("h1",{className:`\r
                font-heading font-bold\r
                text-4xl md:text-5xl lg:text-6xl\r
                text-text-heading\r
                leading-tight\r
                mb-6\r
              `,children:l}),e.jsx("p",{className:`\r
                text-text-body text-xl\r
                leading-relaxed\r
                mb-8\r
              `,children:s}),e.jsx("div",{className:`\r
                grid grid-cols-2 md:grid-cols-4\r
                gap-4 mb-8\r
              `,children:[{icon:e.jsx(Ce,{}),label:"Client",value:d},{icon:e.jsx(re,{}),label:"Duration",value:x},{icon:e.jsx(ve,{}),label:"Role",value:w},{icon:e.jsx(ce,{}),label:"Status",value:"Completed"}].map((v,z)=>e.jsxs("div",{className:`\r
                      p-4\r
                      bg-primary/30 border border-border\r
                      rounded-xl\r
                      hover:border-accent/30\r
                      transition-all duration-300\r
                    `,children:[e.jsxs("div",{className:`\r
                      flex items-center gap-2\r
                      text-accent mb-2\r
                    `,children:[v.icon,e.jsx("span",{className:`\r
                        text-xs font-medium uppercase tracking-wider\r
                      `,children:v.label})]}),e.jsx("div",{className:`\r
                      font-heading font-semibold\r
                      text-lg text-text-heading\r
                    `,children:v.value})]},z))}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[S&&e.jsx(N,{variant:"primary",leftIcon:e.jsx(kt,{}),href:S,external:!0,children:"Live Demo"}),P&&e.jsx(N,{variant:"secondary",leftIcon:e.jsx(_e,{}),href:P,external:!0,children:"View Code"}),e.jsx(N,{variant:"ghost",href:"/contact",children:"Similar Project?"})]})]}),e.jsx("div",{children:e.jsxs(H,{className:"p-6 sticky top-24",children:[e.jsx("h3",{className:`\r
                  font-heading font-semibold\r
                  text-xl text-text-heading\r
                  mb-6\r
                `,children:"Technologies Used"}),e.jsx("div",{className:"space-y-4",children:p.map((v,z)=>e.jsxs("div",{className:`\r
                        flex items-center gap-3\r
                        p-3\r
                        bg-primary/50 border border-border\r
                        rounded-lg\r
                        hover:border-accent/30\r
                        transition-all duration-300\r
                        group\r
                      `,children:[e.jsx("div",{className:`\r
                        w-8 h-8\r
                        flex items-center justify-center\r
                        bg-accent/10 text-accent\r
                        rounded-lg\r
                        group-hover:bg-accent group-hover:text-primary-dark\r
                        transition-all duration-300\r
                      `,children:e.jsx(ve,{size:16})}),e.jsx("span",{className:"font-medium",children:v})]},z))}),y&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:`\r
                      mt-8 pt-8 border-t border-border\r
                    `,children:[e.jsx("h4",{className:`\r
                        font-heading font-semibold\r
                        text-lg text-text-heading\r
                        mb-4\r
                      `,children:"Performance Metrics"}),e.jsx("div",{className:"space-y-4",children:Object.entries(y).map(([v,z])=>e.jsxs("div",{children:[e.jsxs("div",{className:`\r
                              flex items-center justify-between\r
                              text-sm text-text-body\r
                              mb-1\r
                            `,children:[e.jsx("span",{className:"capitalize",children:v.replace(/([A-Z])/g," $1").trim()}),e.jsxs("span",{children:[z,"%"]})]}),e.jsx("div",{className:`\r
                              h-2 bg-border rounded-full overflow-hidden\r
                            `,children:e.jsx(a.div,{initial:{width:0},animate:{width:`${z}%`},transition:{duration:1,delay:.5},className:`\r
                                  h-full bg-gradient-to-r from-accent to-accent-hover\r
                                  rounded-full\r
                                `})})]},v))})]})})]})})]})})}),c.length>0&&e.jsx("section",{className:"py-16 bg-primary/50",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsx(E,{subtitle:"Gallery",title:"Project Media",description:"A visual walkthrough of the project",align:"center"}),e.jsxs("div",{className:`\r
              relative max-w-5xl mx-auto\r
              mt-12\r
            `,children:[e.jsxs("div",{className:`\r
                relative aspect-video\r
                bg-primary border border-border\r
                rounded-2xl overflow-hidden\r
                mb-6\r
              `,children:[(((Y=g[n])==null?void 0:Y.type)||(oe(c[n])?"video":"image"))==="video"?e.jsx("video",{src:((pe=g[n])==null?void 0:pe.src)||c[n],poster:((q=g[n])==null?void 0:q.poster)||o.thumbnail,className:`\r
                      w-full h-full object-cover\r
                    `,controls:!0,playsInline:!0,preload:"metadata",children:"Your browser does not support the video tag."}):e.jsx("img",{src:((ge=g[n])==null?void 0:ge.src)||c[n],alt:`${l} - Screenshot ${n+1}`,className:`\r
                      w-full h-full object-cover\r
                      transition-opacity duration-300\r
                    `}),c.length>1&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:R,className:`\r
                        absolute left-4 top-1/2 -translate-y-1/2\r
                        w-12 h-12\r
                        flex items-center justify-center\r
                        bg-primary/80 backdrop-blur-sm\r
                        text-text-heading border border-border\r
                        rounded-full\r
                        hover:bg-accent hover:text-primary-dark hover:border-accent\r
                        transition-all duration-300\r
                        z-10\r
                      `,"aria-label":"Previous image",children:e.jsx(vt,{size:24})}),e.jsx("button",{onClick:A,className:`\r
                        absolute right-4 top-1/2 -translate-y-1/2\r
                        w-12 h-12\r
                        flex items-center justify-center\r
                        bg-primary/80 backdrop-blur-sm\r
                        text-text-heading border border-border\r
                        rounded-full\r
                        hover:bg-accent hover:text-primary-dark hover:border-accent\r
                        transition-all duration-300\r
                        z-10\r
                      `,"aria-label":"Next image",children:e.jsx(he,{size:24})})]})]}),c.length>1&&e.jsx("div",{className:`\r
                  flex items-center justify-center\r
                  gap-3\r
                  flex-wrap\r
                `,children:c.map((v,z)=>{var Z,k;return e.jsxs("button",{onClick:()=>r(z),className:`
                        relative w-20 h-20
                        rounded-lg overflow-hidden
                        border-2 transition-all duration-300
                        ${n===z?"border-accent scale-105":"border-transparent hover:border-accent/50"}
                      `,"aria-label":`View image ${z+1}`,children:[(((Z=g[z])==null?void 0:Z.type)||(oe(v)?"video":"image"))==="video"?e.jsxs("div",{className:"relative w-full h-full",children:[e.jsx("img",{src:((k=g[z])==null?void 0:k.poster)||o.thumbnail,alt:`Video thumbnail ${z+1}`,className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-primary/40 text-accent text-xs font-mono",children:"Video"})]}):e.jsx("img",{src:v,alt:`Thumbnail ${z+1}`,className:"w-full h-full object-cover"}),n===z&&e.jsx("div",{className:`\r
                          absolute inset-0\r
                          bg-accent/20\r
                        `})]},z)})})]})]})}),e.jsx("section",{className:"py-20",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:`\r
            grid grid-cols-1 lg:grid-cols-3\r
            gap-12\r
          `,children:[e.jsxs("div",{className:"lg:col-span-2",children:[e.jsxs("div",{className:"mb-16",children:[e.jsx("h2",{className:`\r
                  font-heading font-bold\r
                  text-3xl text-text-heading\r
                  mb-6\r
                `,children:"Project Overview"}),e.jsx("div",{className:`\r
                  prose prose-invert max-w-none\r
                  text-text-body leading-relaxed\r
                `,children:u.split(`

`).map((v,z)=>e.jsx("p",{className:"mb-6",children:v},z))})]}),(b.length>0||h.length>0)&&e.jsxs("div",{className:`\r
                  grid grid-cols-1 md:grid-cols-2\r
                  gap-8 mb-16\r
                `,children:[b.length>0&&e.jsxs("div",{children:[e.jsx("h3",{className:`\r
                        font-heading font-semibold\r
                        text-2xl text-text-heading\r
                        mb-6\r
                      `,children:"Challenges"}),e.jsx("ul",{className:"space-y-4",children:b.map((v,z)=>e.jsxs("li",{className:`\r
                              flex items-start gap-3\r
                              p-4\r
                              bg-primary/30 border border-border\r
                              rounded-xl\r
                            `,children:[e.jsx("span",{className:`\r
                              text-accent mt-1\r
                            `,children:"🎯"}),e.jsx("span",{children:v})]},z))})]}),h.length>0&&e.jsxs("div",{children:[e.jsx("h3",{className:`\r
                        font-heading font-semibold\r
                        text-2xl text-text-heading\r
                        mb-6\r
                      `,children:"Results"}),e.jsx("ul",{className:"space-y-4",children:h.map((v,z)=>e.jsxs("li",{className:`\r
                              flex items-start gap-3\r
                              p-4\r
                              bg-primary/30 border border-border\r
                              rounded-xl\r
                            `,children:[e.jsx("span",{className:`\r
                              text-accent mt-1\r
                            `,children:"✅"}),e.jsx("span",{children:v})]},z))})]})]})]}),e.jsxs("div",{className:"space-y-8",children:[I&&e.jsxs(H,{className:"p-6",children:[e.jsx("div",{className:`\r
                    text-4xl text-accent/20\r
                    mb-4\r
                  `,children:'"'}),e.jsxs("blockquote",{className:`\r
                    text-text-body italic mb-6\r
                  `,children:['"',I.quote,'"']}),e.jsxs("div",{className:`\r
                    flex items-center gap-4\r
                    pt-6 border-t border-border\r
                  `,children:[e.jsx("div",{className:`\r
                      w-12 h-12\r
                      bg-accent/10 rounded-full\r
                      flex items-center justify-center\r
                      text-accent font-bold\r
                    `,children:I.author.charAt(0)}),e.jsxs("div",{children:[e.jsx("div",{className:`\r
                        font-heading font-semibold\r
                        text-text-heading\r
                      `,children:I.author}),e.jsxs("div",{className:"text-sm text-accent",children:[I.position,", ",I.company]})]})]})]}),i.length>0&&e.jsxs(H,{className:"p-6",children:[e.jsx("h3",{className:`\r
                    font-heading font-semibold\r
                    text-xl text-text-heading\r
                    mb-6\r
                  `,children:"Related Projects"}),e.jsx("div",{className:"space-y-4",children:i.map(v=>{var z,Z,k;return e.jsxs(L,{to:`/portfolio/${v.id}`,className:`\r
                          flex items-center gap-4\r
                          p-3\r
                          bg-primary/30 border border-border\r
                          rounded-lg\r
                          hover:border-accent/30\r
                          transition-all duration-300\r
                          group\r
                        `,children:[e.jsx("div",{className:`\r
                          w-16 h-16\r
                          bg-primary border border-border\r
                          rounded-lg overflow-hidden\r
                          flex-shrink-0\r
                        `,children:oe(((z=v.primaryMedia)==null?void 0:z.src)||v.thumbnail||"")?e.jsx("video",{src:((Z=v.primaryMedia)==null?void 0:Z.src)||v.thumbnail,poster:((k=v.primaryMedia)==null?void 0:k.poster)||v.thumbnail,className:`\r
                                w-full h-full object-cover\r
                                group-hover:scale-110\r
                                transition-transform duration-300\r
                              `,muted:!0,playsInline:!0,preload:"metadata"}):e.jsx("img",{src:v.thumbnail||v.image,alt:v.title,className:`\r
                                w-full h-full object-cover\r
                                group-hover:scale-110\r
                                transition-transform duration-300\r
                              `})}),e.jsxs("div",{children:[e.jsx("div",{className:`\r
                            font-heading font-semibold\r
                            text-sm text-text-heading\r
                            mb-1\r
                          `,children:v.title}),e.jsx("div",{className:`\r
                            text-xs text-text-body\r
                          `,children:v.category})]})]},v.id)})}),e.jsx("div",{className:"mt-6 pt-6 border-t border-border",children:e.jsxs(L,{to:"/portfolio",className:`\r
                        inline-flex items-center gap-2\r
                        text-accent hover:text-accent-hover\r
                        transition-colors duration-300\r
                        group\r
                      `,children:[e.jsx("span",{children:"View All Projects"}),e.jsx("span",{className:`\r
                        group-hover:translate-x-1\r
                        transition-transform duration-300\r
                      `,children:"→"})]})})]})]})]})})}),e.jsx("section",{className:"py-20",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:`\r
            bg-gradient-to-br from-primary-light to-primary\r
            border border-border\r
            rounded-3xl\r
            p-12 text-center\r
          `,children:[e.jsx("h2",{className:`\r
              font-heading font-bold\r
              text-3xl md:text-4xl\r
              text-text-heading\r
              mb-6\r
            `,children:"Ready to Start Your Next Project?"}),e.jsx("p",{className:`\r
              text-text-body text-lg\r
              max-w-2xl mx-auto\r
              mb-8\r
            `,children:"Let's turn your next idea into a reliable, polished product your users can trust."}),e.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[e.jsx(N,{variant:"primary",size:"lg",href:"/contact",children:"Start a Project"}),e.jsx(N,{variant:"secondary",size:"lg",href:"/portfolio",children:"View More Work"})]})]})})})]})},ei={React:{bg:"bg-cyan-500/10",text:"text-cyan-400",border:"border-cyan-500/20"},Backend:{bg:"bg-green-500/10",text:"text-green-400",border:"border-green-500/20"},CSS:{bg:"bg-pink-500/10",text:"text-pink-400",border:"border-pink-500/20"},Performance:{bg:"bg-yellow-500/10",text:"text-yellow-400",border:"border-yellow-500/20"},TypeScript:{bg:"bg-blue-500/10",text:"text-blue-400",border:"border-blue-500/20"},WordPress:{bg:"bg-indigo-500/10",text:"text-indigo-400",border:"border-indigo-500/20"},"Next.js":{bg:"bg-white/10",text:"text-white/80",border:"border-white/20"},MongoDB:{bg:"bg-emerald-500/10",text:"text-emerald-400",border:"border-emerald-500/20"},Project:{bg:"bg-accent/10",text:"text-accent",border:"border-accent/20"},Business:{bg:"bg-orange-500/10",text:"text-orange-400",border:"border-orange-500/20"},Accessibility:{bg:"bg-purple-500/10",text:"text-purple-400",border:"border-purple-500/20"},"AI/ML":{bg:"bg-red-500/10",text:"text-red-400",border:"border-red-500/20"}},ct=t=>ei[t]||{bg:"bg-accent/10",text:"text-accent",border:"border-accent/20"},ti={React:e.jsx(xe,{size:56,className:"text-cyan-400/40"}),Backend:e.jsx(ze,{size:56,className:"text-green-400/40"}),CSS:e.jsx(Ne,{size:56,className:"text-pink-400/40"}),Performance:e.jsx(de,{size:56,className:"text-yellow-400/40"}),TypeScript:e.jsx(O,{size:56,className:"text-blue-400/40"}),WordPress:e.jsx(Te,{size:56,className:"text-indigo-400/40"}),"Next.js":e.jsx(Wt,{size:56,className:"text-white/30"}),MongoDB:e.jsx(Pe,{size:56,className:"text-emerald-400/40"}),Project:e.jsx(ne,{size:56,className:"text-accent/40"}),Business:e.jsx(qe,{size:56,className:"text-orange-400/40"}),Accessibility:e.jsx(ne,{size:56,className:"text-purple-400/40"}),"AI/ML":e.jsx(Nt,{size:56,className:"text-red-400/40"}),Shopify:e.jsx(Ge,{size:56,className:"text-green-400/40"})},dt=t=>t.slug?t.slug:t.title.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim(),ri=()=>{const[t,n]=j.useState("All"),[r,o]=j.useState(""),i=[{id:24,slug:"secure-e-prescription-workflows-company-project",title:"Secure E-Prescription Workflows in a Healthcare Company Project",excerpt:"A practical look at prescription-required product allocation, secure PDF signing, AWS document storage, and audit-friendly workflows from a real company project.",author:"Hamad",date:"Aug 18, 2026",readTime:"9 min read",category:"SaaS",tags:["Company Project","Healthcare","E-Prescription","AWS","NestJS"],featured:!0},{id:23,slug:"stripe-payments-subscriptions-company-saas",title:"Stripe Payments, Subscriptions, and Webhooks in a Company SaaS Product",excerpt:"How I worked with checkout, subscriptions, webhook idempotency, payment status tracking, and billing workflows inside a production SaaS product.",author:"Hamad",date:"Jul 15, 2026",readTime:"8 min read",category:"SaaS",tags:["Company Project","Stripe","SaaS","Payments","Webhooks"],featured:!1},{id:22,slug:"multi-tenant-healthcare-saas-architecture-company-project",title:"Multi-Tenant SaaS Architecture for Healthcare Platforms",excerpt:"Lessons from a company healthcare SaaS project covering tenant isolation, branches, roles, entitlements, and server-side permission checks.",author:"Hamad",date:"Jun 20, 2026",readTime:"10 min read",category:"SaaS",tags:["Company Project","Multi-Tenant","Healthcare SaaS","PostgreSQL","NestJS"],featured:!0},{id:21,slug:"role-based-dashboards-nextjs-nestjs-company-project",title:"Building Role-Based Dashboards with Next.js and NestJS",excerpt:"How client, clinic-admin, and super-admin portals can be structured with protected routes, API guards, shared UI, and role-aware product workflows.",author:"Hamad",date:"May 24, 2026",readTime:"8 min read",category:"SaaS",tags:["Company Project","Next.js","NestJS","RBAC","Dashboards"],featured:!1},{id:1,slug:"react-2026",title:"The Future of React in 2026: What Every Developer Must Know",excerpt:"Exploring React 19, Server Components, concurrent rendering, and the compiler — why React is still the king of frontend.",author:"Hamad",date:"Apr 18, 2026",readTime:"8 min read",category:"React",tags:["React","JavaScript","Frontend","React 19"],featured:!0},{id:2,slug:"nodejs-rest-api-guide",title:"Building Scalable REST APIs with Node.js & Express",excerpt:"A complete guide to structuring production-ready APIs — error handling, authentication, rate limiting, and deployment.",author:"Hamad",date:"Mar 22, 2026",readTime:"10 min read",category:"Backend",tags:["Node.js","Express","API","Backend"],featured:!0},{id:3,slug:"tailwind-css-v4-migration",title:"Tailwind CSS v4: What Changed and How to Migrate",excerpt:"Tailwind v4 brings a new engine, CSS-first config, and major performance improvements. Here is everything you need to upgrade.",author:"Hamad",date:"Feb 12, 2026",readTime:"7 min read",category:"CSS",tags:["Tailwind CSS","CSS","Frontend"],featured:!1},{id:4,slug:"mern-jwt-authentication",title:"MERN Stack Authentication: JWT + Refresh Tokens Done Right",excerpt:"Implement secure authentication in your MERN app using access tokens, refresh tokens, HTTP-only cookies, and role-based access control.",author:"Hamad",date:"Jan 25, 2026",readTime:"12 min read",category:"Backend",tags:["MERN","JWT","Authentication","Security"],featured:!1},{id:5,slug:"nextjs-15-app-router",title:"Next.js 15 App Router: From Pages to Full-Stack App",excerpt:"A hands-on guide to the Next.js App Router — server actions, streaming, nested layouts, and how to build full-stack apps with ease.",author:"Hamad",date:"Dec 14, 2025",readTime:"11 min read",category:"Next.js",tags:["Next.js","React","Full Stack"],featured:!1},{id:6,slug:"mongodb-aggregation-pipelines",title:"MongoDB Aggregation Pipelines: A Developer's Deep Dive",excerpt:"Master MongoDB aggregation — $match, $group, $lookup, $project and build complex data queries that would take SQL 3x as long.",author:"Hamad",date:"Nov 8, 2025",readTime:"9 min read",category:"MongoDB",tags:["MongoDB","Database","Backend","NoSQL"],featured:!1},{id:7,slug:"typescript-for-react-developers",title:"TypeScript for React Developers: From Beginner to Confident",excerpt:"Stop fighting TypeScript and start using it productively. Props, hooks, API types, generics — all explained with real React examples.",author:"Hamad",date:"Oct 19, 2025",readTime:"8 min read",category:"TypeScript",tags:["TypeScript","React","JavaScript"],featured:!1},{id:8,slug:"wordpress-custom-theme-2025",title:"WordPress Custom Theme Development from Scratch in 2025",excerpt:"Build a professional WordPress theme using PHP, ACF, custom post types, and the block editor without page builders.",author:"Hamad",date:"Sep 6, 2025",readTime:"13 min read",category:"WordPress",tags:["WordPress","PHP","Theme Development"],featured:!1},{id:9,slug:"web-performance-lighthouse-100",title:"Web Performance Optimization: Hitting 100 on Lighthouse",excerpt:"Lazy loading, code splitting, image optimization, caching strategies, and Core Web Vitals — the complete performance checklist.",author:"Hamad",date:"Aug 21, 2025",readTime:"10 min read",category:"Performance",tags:["Performance","Lighthouse","Core Web Vitals","SEO"],featured:!1},{id:10,slug:"ai-phishing-detection-bert-cnn",title:"AI-Based Phishing Detection: How I Built It with BERT + CNN",excerpt:"A behind-the-scenes look at my final year project — combining NLP transformers and convolutional neural networks to detect phishing URLs.",author:"Hamad",date:"Jul 12, 2025",readTime:"14 min read",category:"AI/ML",tags:["AI","Machine Learning","BERT","Python","NLP"],featured:!1},{id:11,slug:"web-accessibility-2025",title:"Web Accessibility in 2025: The Complete Developer Checklist",excerpt:"WCAG 2.2, ARIA roles, keyboard navigation, screen readers — build apps every user can access, not just some.",author:"Hamad",date:"Jun 18, 2025",readTime:"9 min read",category:"Accessibility",tags:["Accessibility","WCAG","Inclusive Design"],featured:!1},{id:12,slug:"mern-ecommerce-case-study",title:"Case Study: Building a Multi-Vendor E-Commerce Platform with MERN",excerpt:"How I designed and built a full multi-vendor marketplace — seller dashboards, Stripe payments, order management, and admin panel with role-based access.",author:"Hamad",date:"May 10, 2025",readTime:"15 min read",category:"Project",tags:["MERN","E-Commerce","Stripe","Case Study"],featured:!1},{id:13,slug:"shopify-custom-theme-case-study",title:"Case Study: Custom Shopify Theme from Liquid to Launch",excerpt:"A real client project — building a high-converting Shopify store with custom Liquid templates, section schema, and performance optimization.",author:"Hamad",date:"Apr 23, 2025",readTime:"11 min read",category:"Project",tags:["Shopify","Liquid","E-Commerce","Case Study"],featured:!1},{id:14,slug:"realtime-chat-app-socketio",title:"Case Study: Real-Time Chat App with Socket.io & React",excerpt:"How I built a WhatsApp-style chat application with real-time messaging, typing indicators, read receipts, and online status using Socket.io.",author:"Hamad",date:"Mar 16, 2025",readTime:"12 min read",category:"Project",tags:["Socket.io","React","Node.js","Real-Time","Case Study"],featured:!1},{id:15,slug:"wordpress-agency-custom-plugin",title:"Case Study: WordPress Agency Website with Custom Plugin",excerpt:"Built a full agency website on WordPress with a custom quote calculator plugin, custom post types, and ACF-powered portfolio section.",author:"Hamad",date:"Feb 8, 2025",readTime:"9 min read",category:"Project",tags:["WordPress","PHP","Plugin Development","Case Study"],featured:!1},{id:16,slug:"what-website-does-your-business-need",title:"What Type of Website Does Your Business Actually Need?",excerpt:"Landing page, portfolio, e-commerce, or web app? A clear guide for business owners to understand which solution fits their goals and budget.",author:"Hamad",date:"Jan 11, 2025",readTime:"7 min read",category:"Business",tags:["Business","Web Strategy","Startups","Digital"],featured:!1},{id:17,slug:"restaurant-online-ordering-system",title:"Why Every Restaurant Needs an Online Ordering System in 2025",excerpt:"How a custom ordering platform beats Uber Eats commissions, builds direct customer relationships, and increases profit margins significantly.",author:"Hamad",date:"Dec 28, 2024",readTime:"6 min read",category:"Business",tags:["Restaurant","E-Commerce","Business","Ordering System"],featured:!1},{id:18,slug:"real-estate-custom-platform",title:"Real Estate Agencies: Why You Need a Custom Property Platform",excerpt:"MLS-style property search, map integration, agent dashboards, lead management — why generic templates fail and custom software wins.",author:"Hamad",date:"Dec 20, 2024",readTime:"8 min read",category:"Business",tags:["Real Estate","Business","Custom Software","Web App"],featured:!1},{id:19,slug:"school-education-software-guide",title:"School & Education Platforms: What Software Do You Really Need?",excerpt:"From student portals and fee management to quiz systems and attendance tracking — the complete software checklist for modern schools.",author:"Hamad",date:"Dec 12, 2024",readTime:"8 min read",category:"Business",tags:["Education","Business","LMS","Web App"],featured:!1},{id:20,slug:"saas-vs-custom-software",title:"SaaS vs Custom Software: Which Should Your Business Build?",excerpt:"Shopify vs custom store, Notion vs custom CRM, Calendly vs booking system — when off-the-shelf hurts growth and when to go custom.",author:"Hamad",date:"Dec 5, 2024",readTime:"9 min read",category:"Business",tags:["SaaS","Business","Strategy","Custom Software"],featured:!1}],s=["All",...new Set(i.map(d=>d.category))].map(d=>({id:d,name:d,count:d==="All"?i.length:i.filter(x=>x.category===d).length})),u=j.useMemo(()=>{let d=t==="All"?i:i.filter(x=>x.category===t);if(r.trim()){const x=r.toLowerCase();d=d.filter(f=>f.title.toLowerCase().includes(x)||f.excerpt.toLowerCase().includes(x)||f.tags.some(w=>w.toLowerCase().includes(x)))}return d},[t,r]),c=i.filter(d=>d.featured),g=({category:d,featured:x=!1})=>e.jsxs("div",{className:`
        relative flex items-center justify-center
        ${x?"h-52":"h-40"}
        bg-primary/60 overflow-hidden rounded-t-xl
        border-b border-border
      `,children:[e.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:`
              linear-gradient(rgba(100,255,218,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100,255,218,0.15) 1px, transparent 1px)
            `,backgroundSize:"30px 30px"}}),e.jsx("div",{className:`
          absolute inset-0
          bg-gradient-to-br
          ${x?"from-accent/8 to-transparent":"from-accent/5 to-transparent"}
        `}),ti[d]||e.jsx(ye,{size:56,className:"text-accent/30"}),x&&e.jsx("div",{className:`\r
            absolute top-4 left-4\r
            px-3 py-1\r
            bg-accent text-primary-dark\r
            text-xs font-bold rounded-full\r
            shadow-lg\r
          `,children:"⭐ Featured"})]}),p=({category:d})=>{const x=ct(d);return e.jsxs("span",{className:`
        inline-flex items-center gap-1.5
        px-3 py-1 rounded-full text-xs font-medium border
        ${x.bg} ${x.text} ${x.border}
      `,children:[e.jsx(ve,{size:10}),d]})};return e.jsxs(a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"pt-24 pb-20",children:[e.jsx("section",{className:"relative overflow-hidden",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:"max-w-4xl mx-auto text-center py-16 md:py-24",children:[e.jsxs(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`\r
                inline-flex items-center gap-2\r
                px-4 py-2 mb-6\r
                bg-accent/10 border border-accent/20\r
                rounded-full\r
              `,children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-accent animate-pulse"}),e.jsx("span",{className:"font-mono text-xs text-accent uppercase tracking-widest",children:"Insights & Tutorials"})]}),e.jsxs(a.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.1},className:`\r
                font-heading font-bold\r
                text-4xl md:text-5xl lg:text-6xl\r
                text-text-heading leading-tight mb-6\r
              `,children:[e.jsx("span",{className:`\r
                bg-gradient-to-r from-accent to-accent-hover\r
                bg-clip-text text-transparent\r
              `,children:"Developer Blog"}),e.jsx("br",{}),"by Hamad"]}),e.jsx(a.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"text-text-body text-xl max-w-3xl mx-auto leading-relaxed mb-10",children:"Real-world insights on MERN Stack, WordPress, project case studies, and business software guides — written from experience, not theory."}),e.jsx(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"flex flex-wrap items-center justify-center gap-8 mb-10",children:[{value:`${i.length}+`,label:"Articles"},{value:"6+",label:"Categories"},{value:"2+",label:"Years Writing"}].map(d=>e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-heading font-bold text-2xl text-accent",children:d.value}),e.jsx("div",{className:"text-text-body/50 text-xs font-mono uppercase tracking-wider",children:d.label})]},d.label))}),e.jsx(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35},className:"max-w-2xl mx-auto",children:e.jsxs("div",{className:"relative group",children:[e.jsx("input",{type:"text",value:r,onChange:d=>o(d.target.value),placeholder:"Search articles, topics, tags...",className:`\r
                    w-full pl-12 pr-4 py-4\r
                    bg-primary border border-border\r
                    text-text-heading rounded-xl\r
                    placeholder:text-text-body/40\r
                    focus:outline-none focus:border-accent\r
                    focus:ring-2 focus:ring-accent/20\r
                    transition-all duration-300\r
                  `}),e.jsx(Nr,{className:`\r
                  absolute left-4 top-1/2 -translate-y-1/2\r
                  text-text-body/40 group-focus-within:text-accent\r
                  transition-colors duration-300\r
                  size-5\r
                `}),r&&e.jsx("button",{onClick:()=>o(""),className:`\r
                      absolute right-4 top-1/2 -translate-y-1/2\r
                      text-text-body/40 hover:text-accent\r
                      transition-colors duration-300\r
                      text-sm font-mono\r
                    `,children:"clear"})]})})]})})}),c.length>0&&!r&&t==="All"&&e.jsx("section",{className:"py-16 bg-primary/50",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsx(E,{subtitle:"Featured",title:"Popular Articles",description:"Most read and recommended articles by Hamad",align:"center",gradient:!0}),e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12",children:c.map((d,x)=>e.jsx(a.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:x*.1},children:e.jsx(L,{to:`/blog/${dt(d)}`,className:"block h-full",children:e.jsxs(H,{hoverable:!0,padding:"sm",className:"overflow-hidden group h-full",children:[e.jsx(g,{category:d.category,featured:!0}),e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-xs text-text-body/60 mb-4",children:[e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx(ce,{size:12})," ",d.date]}),e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx(re,{size:12})," ",d.readTime]}),e.jsxs("span",{className:"flex items-center gap-1.5 text-accent font-medium",children:[e.jsx(Ce,{size:12})," Hamad"]})]}),e.jsx(p,{category:d.category}),e.jsx("h3",{className:`\r
                          font-heading font-bold text-xl text-text-heading\r
                          mt-3 mb-3 leading-snug\r
                          group-hover:text-accent transition-colors duration-300\r
                        `,children:d.title}),e.jsx("p",{className:"text-text-body text-sm leading-relaxed mb-5 line-clamp-3",children:d.excerpt}),e.jsx("div",{className:"flex flex-wrap gap-1.5 mb-5",children:d.tags.map(f=>e.jsx("span",{className:`\r
                                px-2 py-0.5 text-[11px] font-mono\r
                                text-text-body/60 bg-primary/50\r
                                rounded border border-border/50\r
                              `,children:f},f))}),e.jsxs("span",{className:`\r
                          inline-flex items-center gap-2\r
                          text-sm font-medium text-accent\r
                          group-hover:gap-3 transition-all duration-300\r
                        `,children:["Read Article",e.jsx(te,{size:16,className:"group-hover:translate-x-1 transition-transform duration-300"})]})]})]})})},d.id))})]})}),e.jsx("section",{className:"py-20",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsx(E,{subtitle:"Archive",title:r?`Results for "${r}"`:"All Articles",description:r?`${u.length} article${u.length!==1?"s":""} found`:"Browse all blog posts by category",align:"center"}),!r&&e.jsx("div",{className:"flex flex-wrap justify-center gap-2 mt-10 mb-12",children:s.map(d=>{const x=ct(d.id);return e.jsxs(a.button,{onClick:()=>n(d.id),whileHover:{scale:1.05},whileTap:{scale:.95},className:`
                      flex items-center gap-2
                      px-4 py-2.5 rounded-xl text-sm font-medium
                      transition-all duration-300 border
                      ${t===d.id?"bg-accent text-primary-dark border-accent shadow-lg shadow-accent/20":`bg-primary/60 border-border hover:border-accent/30 ${x.text}`}
                    `,children:[e.jsx("span",{children:d.name}),e.jsx("span",{className:`
                      px-1.5 py-0.5 text-[10px] rounded-full font-mono
                      ${t===d.id?"bg-primary-dark/20 text-primary-dark":"bg-border text-text-body/60"}
                    `,children:d.count})]},d.id)})}),e.jsx(W,{mode:"wait",children:u.length>0?e.jsx(a.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.25},className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:u.map((d,x)=>e.jsx(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:x*.05},children:e.jsx(L,{to:`/blog/${dt(d)}`,className:"h-full block",children:e.jsxs(H,{hoverable:!0,padding:"sm",className:"h-full group overflow-hidden flex flex-col",children:[e.jsx(g,{category:d.category}),e.jsxs("div",{className:"p-5 flex flex-col flex-1",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx(p,{category:d.category}),d.featured&&e.jsx(Ue,{size:16,className:"text-accent group-hover:scale-110 transition-transform"})]}),e.jsx("h3",{className:`\r
                            font-heading font-semibold text-base text-text-heading\r
                            mb-2 leading-snug flex-1\r
                            group-hover:text-accent transition-colors duration-300\r
                            line-clamp-2\r
                          `,children:d.title}),e.jsx("p",{className:"text-text-body/70 text-sm leading-relaxed mb-4 line-clamp-2",children:d.excerpt}),e.jsx("div",{className:"flex flex-wrap gap-1.5 mb-4",children:d.tags.slice(0,3).map(f=>e.jsx("span",{className:`\r
                                  px-2 py-0.5 text-[10px] font-mono\r
                                  text-text-body/50 bg-primary/50\r
                                  rounded border border-border/50\r
                                `,children:f},f))}),e.jsxs("div",{className:`\r
                            flex items-center justify-between\r
                            pt-4 border-t border-border mt-auto\r
                          `,children:[e.jsxs("div",{className:"flex items-center gap-3 text-[11px] text-text-body/50",children:[e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(ce,{size:10})," ",d.date]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(re,{size:10})," ",d.readTime]})]}),e.jsxs("span",{className:`\r
                              inline-flex items-center gap-1.5\r
                              text-xs font-medium text-accent\r
                              group-hover:gap-2.5 transition-all duration-300\r
                            `,children:["Read",e.jsx(te,{size:13,className:"group-hover:translate-x-0.5 transition-transform"})]})]}),e.jsxs("div",{className:`\r
                            flex items-center gap-2 mt-3 pt-3\r
                            border-t border-border/50\r
                          `,children:[e.jsx("div",{className:`\r
                              w-6 h-6 rounded-full bg-accent/20 border border-accent/30\r
                              flex items-center justify-center\r
                              text-[10px] font-bold text-accent\r
                            `,children:"H"}),e.jsx("span",{className:"text-[11px] text-text-body/50 font-mono",children:"Hamad"})]})]})]})})},d.id))},`${t}-${r}`):e.jsxs(a.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:`\r
                  text-center py-20\r
                  bg-primary/30 border border-border\r
                  rounded-2xl\r
                `,children:[e.jsx("div",{className:"text-6xl mb-6",children:"🔍"}),e.jsx("h3",{className:"font-heading font-semibold text-xl text-text-heading mb-3",children:"No articles found"}),e.jsx("p",{className:"text-text-body mb-6",children:"Try a different search term or browse all categories."}),e.jsxs("div",{className:"flex items-center justify-center gap-4",children:[e.jsx(N,{variant:"secondary",onClick:()=>o(""),children:"Clear Search"}),e.jsx(N,{variant:"ghost",onClick:()=>{n("All"),o("")},children:"View All"})]})]})})]})}),e.jsx("section",{className:"py-20 bg-primary-light/30",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsx("div",{className:"max-w-2xl mx-auto text-center",children:e.jsxs(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[e.jsx("div",{className:`\r
                w-16 h-16 flex items-center justify-center\r
                bg-accent/10 text-accent rounded-2xl\r
                mx-auto mb-6\r
              `,children:e.jsx(ye,{size:24})}),e.jsx("h2",{className:"font-heading font-bold text-3xl text-text-heading mb-4",children:"Stay Updated"}),e.jsxs("p",{className:"text-text-body text-lg mb-2",children:["Subscribe to get the latest articles by ",e.jsx("span",{className:"text-accent font-semibold",children:"Hamad"})," — tutorials, case studies, and business software insights."]}),e.jsx("p",{className:"text-text-body/50 text-sm mb-8",children:"No spam. No fluff. Just real developer insights."}),e.jsxs("form",{className:"flex flex-col sm:flex-row gap-4 max-w-md mx-auto",onSubmit:d=>d.preventDefault(),children:[e.jsx("input",{type:"email",placeholder:"Enter your email",className:`\r
                    flex-grow px-4 py-3\r
                    bg-primary border border-border\r
                    text-text-heading rounded-xl\r
                    placeholder:text-text-body/40\r
                    focus:outline-none focus:border-accent\r
                    focus:ring-2 focus:ring-accent/20\r
                    transition-all duration-300\r
                  `,required:!0}),e.jsx(N,{type:"submit",variant:"primary",className:"flex-shrink-0",children:"Subscribe"})]}),e.jsx("p",{className:"text-xs text-text-body/40 mt-4",children:"No spam — unsubscribe at any time."})]})})})})]})},ie=[{id:1,slug:"react-2026",title:"The Future of React in 2026: What Every Developer Must Know",excerpt:"Exploring React 19, Server Components, concurrent rendering, and the compiler — why React is still the king of frontend.",author:"Hamad",authorBio:"Full Stack Developer with 2+ years building scalable MERN apps, WordPress sites, and modern web experiences.",authorAvatar:null,date:"Apr 18, 2026",dateISO:"2026-04-18",readTime:"8 min read",category:"React",tags:["React","JavaScript","Frontend","React 19"],featured:!0,toc:[{id:"intro",title:"Introduction"},{id:"react-19",title:"React 19 — What's New"},{id:"server-components",title:"Server Components"},{id:"compiler",title:"The React Compiler"},{id:"concurrent",title:"Concurrent Features"},{id:"performance",title:"Performance Tips"},{id:"conclusion",title:"Conclusion"}],content:[{type:"heading",id:"intro",level:2,text:"Introduction"},{type:"paragraph",text:"React has dominated frontend development for over a decade. But 2025 is different — the framework is undergoing its most significant transformation since hooks were introduced in 2018. If you're a developer working with React today, understanding these changes isn't optional. It's essential."},{type:"paragraph",text:"In this article, I'll walk you through everything that's new, what it means for your day-to-day development, and how to start using these features in your projects today."},{type:"callout",variant:"info",text:"This article assumes basic familiarity with React. If you're brand new, start with the official React docs first."},{type:"heading",id:"react-19",level:2,text:"React 19 — What's New"},{type:"paragraph",text:"React 19 shipped with several game-changing features that fundamentally change how we think about data fetching, form handling, and state management."},{type:"list",style:"bullet",items:["Actions — async functions that handle form submissions and mutations automatically","useActionState — combines state and actions in one hook","useOptimistic — instant UI updates before server confirms","use() — reads promises and context directly in render","ref as a prop — no more forwardRef boilerplate","Document Metadata — title and meta tags directly in JSX"]},{type:"code",language:"jsx",filename:"LoginForm.jsx",code:`// React 19: useActionState
import { useActionState } from 'react';

async function loginAction(prevState, formData) {
  const email = formData.get('email');
  const password = formData.get('password');
  
  try {
    await loginUser({ email, password });
    return { success: true, error: null };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

function LoginForm() {
  const [state, formAction, isPending] = useActionState(
    loginAction,
    { success: false, error: null }
  );

  return (
    <form action={formAction}>
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      
      {state.error && (
        <p className="text-red-500">{state.error}</p>
      )}
      
      <button type="submit" disabled={isPending}>
        {isPending ? 'Logging in...' : 'Log In'}
      </button>
    </form>
  );
}`},{type:"heading",id:"server-components",level:2,text:"Server Components"},{type:"paragraph",text:"React Server Components (RSC) are the biggest architectural shift React has seen. They run exclusively on the server, reducing JavaScript bundle size and enabling direct database access without an API layer."},{type:"callout",variant:"tip",text:"Server Components don't replace Client Components — they complement them. Use Server Components for data fetching and static content, Client Components for interactivity."},{type:"code",language:"jsx",filename:"ProductPage.jsx",code:`// Server Component — runs on server only
// No 'use client' directive = Server Component by default

async function ProductPage({ params }) {
  // Direct database access — no API needed
  const product = await db.products.findById(params.id);
  const reviews = await db.reviews.findByProduct(params.id);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: \${product.price}</p>
      
      {/* Client Component for interactivity */}
      <AddToCartButton productId={product.id} />
      
      <ReviewsList reviews={reviews} />
    </div>
  );
}

// Client Component — only what needs interactivity
'use client';
function AddToCartButton({ productId }) {
  const [added, setAdded] = useState(false);
  
  return (
    <button onClick={() => {
      addToCart(productId);
      setAdded(true);
    }}>
      {added ? 'Added!' : 'Add to Cart'}
    </button>
  );
}`},{type:"heading",id:"compiler",level:2,text:"The React Compiler"},{type:"paragraph",text:"The React Compiler (previously React Forget) automatically memoizes your components. This means you can say goodbye to manually writing useMemo, useCallback, and memo() in most cases."},{type:"code",language:"jsx",filename:"ExpensiveList.jsx",code:`// BEFORE React Compiler — manual memoization everywhere
const ExpensiveList = memo(({ items, onSelect }) => {
  const sortedItems = useMemo(
    () => items.sort((a, b) => a.name.localeCompare(b.name)),
    [items]
  );
  
  const handleSelect = useCallback((id) => {
    onSelect(id);
  }, [onSelect]);

  return (
    <ul>
      {sortedItems.map(item => (
        <li key={item.id} onClick={() => handleSelect(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
});

// AFTER React Compiler — write normal React, compiler handles it
function ExpensiveList({ items, onSelect }) {
  const sortedItems = items.sort((a, b) => 
    a.name.localeCompare(b.name)
  );

  return (
    <ul>
      {sortedItems.map(item => (
        <li key={item.id} onClick={() => onSelect(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}`},{type:"heading",id:"concurrent",level:2,text:"Concurrent Features"},{type:"paragraph",text:"Concurrent React enables React to prepare multiple versions of the UI at the same time. This makes your app feel more responsive, especially when dealing with slow data or heavy computations."},{type:"list",style:"numbered",items:["useTransition — mark updates as non-urgent, keep UI responsive","useDeferredValue — defer expensive re-renders","Suspense — show fallback while data loads","startTransition — trigger concurrent updates programmatically"]},{type:"heading",id:"performance",level:2,text:"Performance Tips for 2025"},{type:"list",style:"bullet",items:["Use Server Components for all data fetching — eliminate client-side loading states","Enable the React Compiler in your build config — free memoization","Use Suspense boundaries strategically — stream content as it's ready","Avoid prop drilling — use context or Zustand for shared state","Code split aggressively with React.lazy() and dynamic imports","Use useId() for SSR-safe unique IDs, not Math.random()"]},{type:"heading",id:"conclusion",level:2,text:"Conclusion"},{type:"paragraph",text:"React in 2025 is faster, more intuitive, and more powerful than ever. Server Components reduce bundle sizes dramatically, the Compiler eliminates boilerplate, and new hooks like useActionState make form handling genuinely pleasant."},{type:"paragraph",text:"My advice: start experimenting with React 19 features in a side project today. The mental model shift takes time, but once it clicks, you'll never want to go back."},{type:"callout",variant:"success",text:"Ready to level up? Check out the official React 19 migration guide and start with one new feature at a time. Don't try to learn everything at once."}]},{id:2,slug:"nodejs-rest-api-guide",title:"Building Scalable REST APIs with Node.js & Express",excerpt:"A complete guide to structuring production-ready APIs — error handling, authentication, rate limiting, and deployment.",author:"Hamad",authorBio:"Full Stack Developer specializing in MERN Stack, REST APIs, and scalable backend architecture.",date:"Mar 22, 2026",dateISO:"2026-03-22",readTime:"10 min read",category:"Backend",tags:["Node.js","Express","API","Backend"],featured:!0,toc:[{id:"intro",title:"Introduction"},{id:"structure",title:"Project Structure"},{id:"middleware",title:"Essential Middleware"},{id:"auth",title:"JWT Authentication"},{id:"error",title:"Error Handling"},{id:"rate-limit",title:"Rate Limiting"},{id:"deployment",title:"Deployment"}],content:[{type:"heading",id:"intro",level:2,text:"Introduction"},{type:"paragraph",text:"Building a REST API that works in development is easy. Building one that holds up under real production traffic — with proper auth, error handling, and security — is a different story. In this guide, I'll share exactly how I structure my Node.js APIs for client projects."},{type:"heading",id:"structure",level:2,text:"Project Structure"},{type:"code",language:"bash",filename:"Project Structure",code:`src/
├── config/
│   ├── db.js          # MongoDB connection
│   └── env.js         # Environment variables
├── controllers/
│   ├── authController.js
│   └── userController.js
├── middleware/
│   ├── auth.js        # JWT verification
│   ├── errorHandler.js
│   └── rateLimiter.js
├── models/
│   └── User.js
├── routes/
│   ├── auth.js
│   └── users.js
├── utils/
│   └── apiResponse.js
└── index.js`},{type:"heading",id:"middleware",level:2,text:"Essential Middleware"},{type:"code",language:"javascript",filename:"index.js",code:`import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { errorHandler } from './middleware/errorHandler.js';
import { rateLimiter } from './middleware/rateLimiter.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';

const app = express();

// Security
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL }));

// Request parsing
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// Logging
app.use(morgan('combined'));

// Rate limiting
app.use('/api', rateLimiter);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Global error handler (must be last)
app.use(errorHandler);

export default app;`},{type:"heading",id:"auth",level:2,text:"JWT Authentication"},{type:"code",language:"javascript",filename:"middleware/auth.js",code:`import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

export const protect = async (req, res, next) => {
  try {
    // 1. Get token from header
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: 'Not authorized — no token' 
      });
    }

    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Attach user to request
    req.user = await User.findById(decoded.id).select('-password');
    
    next();
  } catch (err) {
    res.status(401).json({ 
      success: false, 
      message: 'Token invalid or expired' 
    });
  }
};

// Role-based access control
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: \`Role \${req.user.role} cannot access this route\`
      });
    }
    next();
  };
};`},{type:"heading",id:"error",level:2,text:"Error Handling"},{type:"code",language:"javascript",filename:"middleware/errorHandler.js",code:`export const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    error = { message: 'Resource not found', statusCode: 404 };
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    error = { 
      message: \`\${field} already exists\`, 
      statusCode: 400 
    };
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(e => e.message);
    error = { message, statusCode: 400 };
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};`},{type:"heading",id:"rate-limit",level:2,text:"Rate Limiting"},{type:"code",language:"javascript",filename:"middleware/rateLimiter.js",code:`import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                  // limit each IP to 100 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests, please try again after 15 minutes'
  }
});

// Stricter limit for auth routes
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    success: false,
    message: 'Too many login attempts, please try again later'
  }
});`},{type:"heading",id:"deployment",level:2,text:"Deployment"},{type:"list",style:"numbered",items:["Use environment variables — never hardcode secrets","Enable CORS only for your specific frontend domain","Set NODE_ENV=production to disable error stack traces","Use PM2 or a process manager for zero-downtime restarts","Deploy to Railway, Render, or VPS for Node.js apps","Add health check endpoint at /api/health for monitoring"]},{type:"callout",variant:"tip",text:"Always test your API with Postman or Thunder Client before connecting your frontend. It saves hours of debugging."}]},{id:12,slug:"mern-ecommerce-case-study",title:"Case Study: Building a Multi-Vendor E-Commerce Platform with MERN",excerpt:"How I designed and built a full multi-vendor marketplace — seller dashboards, Stripe payments, order management, and admin panel with role-based access.",author:"Hamad",authorBio:"Full Stack Developer who has built e-commerce platforms, real-time apps, and custom CMS solutions for global clients.",date:"May 10, 2025",dateISO:"2025-05-10",readTime:"15 min read",category:"Project",tags:["MERN","E-Commerce","Stripe","Case Study"],featured:!1,toc:[{id:"overview",title:"Project Overview"},{id:"tech-stack",title:"Tech Stack"},{id:"architecture",title:"Architecture"},{id:"auth",title:"Role-Based Auth"},{id:"payments",title:"Stripe Payments"},{id:"challenges",title:"Challenges & Fixes"},{id:"result",title:"Final Result"}],content:[{type:"heading",id:"overview",level:2,text:"Project Overview"},{type:"paragraph",text:"A client approached me needing a multi-vendor marketplace — similar to Amazon but for a niche industry. Sellers could register, list products, manage orders, and receive payouts. Buyers could browse, filter, and purchase from multiple vendors in a single checkout."},{type:"callout",variant:"info",text:"Project scope: 3 months, solo developer (me), production launch with 50+ initial vendors."},{type:"heading",id:"tech-stack",level:2,text:"Tech Stack"},{type:"list",style:"bullet",items:["Frontend: React.js + Redux Toolkit + Tailwind CSS","Backend: Node.js + Express.js + REST API","Database: MongoDB + Mongoose","Auth: JWT + Refresh Tokens + HTTP-only cookies","Payments: Stripe Connect (multi-vendor payouts)","File Upload: Cloudinary for product images","Deployment: Vercel (frontend) + Railway (backend)"]},{type:"heading",id:"architecture",level:2,text:"Architecture"},{type:"code",language:"javascript",filename:"User Model — Role Based",code:`const userSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  role: {
    type: String,
    enum: ['buyer', 'seller', 'admin'],
    default: 'buyer'
  },
  // Seller-specific fields
  store: {
    name:        String,
    description: String,
    logo:        String,
    stripeId:    String,   // Stripe Connect account ID
    isVerified:  { type: Boolean, default: false }
  },
  // Stripe customer ID for buyers
  stripeCustomerId: String,
}, { timestamps: true });`},{type:"heading",id:"auth",level:2,text:"Role-Based Auth"},{type:"paragraph",text:"The platform needed 3 distinct user roles: buyers, sellers, and admins. Each role had completely different dashboards and API access permissions."},{type:"code",language:"javascript",filename:"routes/products.js",code:`import { protect, authorize } from '../middleware/auth.js';

// Public — anyone can view products
router.get('/', getProducts);
router.get('/:id', getProduct);

// Seller only — create/edit their products
router.post('/', protect, authorize('seller'), createProduct);
router.put('/:id', protect, authorize('seller'), updateProduct);
router.delete('/:id', protect, authorize('seller', 'admin'), deleteProduct);

// Admin only — approve/reject products
router.patch('/:id/approve', protect, authorize('admin'), approveProduct);`},{type:"heading",id:"payments",level:2,text:"Stripe Payments"},{type:"paragraph",text:"The hardest part of the project was implementing Stripe Connect for multi-vendor payouts. Each seller needed their own Stripe account connected to the platform."},{type:"code",language:"javascript",filename:"controllers/paymentController.js",code:`// Create checkout session with split payments
export const createCheckout = async (req, res) => {
  const { cartItems } = req.body;

  // Group items by seller
  const sellerGroups = groupBy(cartItems, 'sellerId');

  // Create transfer group for atomic payouts
  const transferGroup = \`order_\${Date.now()}\`;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: cartItems.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: { name: item.name },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    })),
    payment_intent_data: {
      transfer_group: transferGroup,
    },
    success_url: \`\${process.env.CLIENT_URL}/order/success\`,
    cancel_url:  \`\${process.env.CLIENT_URL}/cart\`,
  });

  // Queue transfers to each seller after payment
  await queueSellerTransfers(sellerGroups, transferGroup);

  res.json({ url: session.url });
};`},{type:"heading",id:"challenges",level:2,text:"Challenges & How I Fixed Them"},{type:"list",style:"bullet",items:["Challenge: Split payments across multiple sellers in one checkout → Solution: Stripe Transfer Groups","Challenge: Product approval workflow without real-time notifications → Solution: Email notifications via Nodemailer on status change","Challenge: Seller can only edit their own products → Solution: Middleware checks product.seller === req.user._id","Challenge: Image uploads slowing down API → Solution: Direct Cloudinary upload from frontend, only store URL in MongoDB","Challenge: Cart items from different sellers → Solution: Single checkout with itemized order tracking per seller"]},{type:"heading",id:"result",level:2,text:"Final Result"},{type:"paragraph",text:"The platform launched on time with 50+ vendors onboarded in the first week. The admin panel gave the client full control over product approvals, seller verification, and revenue reporting. Stripe payouts automated what would have been manual bank transfers."},{type:"callout",variant:"success",text:"Key lesson: Plan the data model before writing a single line of code. In a multi-vendor system, getting relationships between Users, Products, and Orders right from the start saves weeks of refactoring."}]},{id:16,slug:"what-website-does-your-business-need",title:"What Type of Website Does Your Business Actually Need?",excerpt:"Landing page, portfolio, e-commerce, or web app? A clear guide for business owners to understand which solution fits their goals and budget.",author:"Hamad",authorBio:"Full Stack Developer who helps businesses choose and build the right digital solution — from simple landing pages to complex web apps.",date:"Jan 11, 2025",dateISO:"2025-01-11",readTime:"7 min read",category:"Business",tags:["Business","Web Strategy","Startups","Digital"],featured:!1,toc:[{id:"intro",title:"The Problem"},{id:"landing",title:"Landing Pages"},{id:"portfolio",title:"Portfolio Sites"},{id:"ecommerce",title:"E-Commerce Stores"},{id:"webapp",title:"Web Applications"},{id:"cms",title:"CMS / Blogs"},{id:"decision",title:"Decision Guide"}],content:[{type:"heading",id:"intro",level:2,text:"The Problem Most Business Owners Face"},{type:"paragraph",text:"Every week I talk to business owners who either overpaid for a complex system they don't need, or underpaid for a basic template that can't support their growth. The problem isn't the budget — it's choosing the wrong type of website from the start."},{type:"paragraph",text:"This guide will help you understand the 5 main types of websites, what each costs, and which one your business actually needs."},{type:"heading",id:"landing",level:2,text:"1. Landing Pages"},{type:"paragraph",text:"A landing page is a single-page site with one goal: convert visitors into leads or customers. No navigation, no blog, no about page — just a compelling offer and a call to action."},{type:"list",style:"bullet",items:["Best for: Product launches, ad campaigns, event registrations, lead generation","Typical cost: $50 – $500","Build time: 1–3 days","Technology: HTML/CSS, React, or even Webflow","Not suitable for: Companies needing ongoing content or complex functionality"]},{type:"callout",variant:"tip",text:"If you're running Facebook or Google Ads, always send traffic to a dedicated landing page — never your homepage. Conversion rates are 2–5x higher."},{type:"heading",id:"ecommerce",level:2,text:"3. E-Commerce Stores"},{type:"paragraph",text:"If you're selling physical or digital products, you need an e-commerce solution. The choice between Shopify, WooCommerce, or a custom MERN store depends entirely on your scale and customization needs."},{type:"list",style:"bullet",items:["Shopify: Best for 1–1000 products, quick launch, minimal tech knowledge needed","WooCommerce: Best for WordPress-based businesses, more customization than Shopify","Custom MERN: Best for unique requirements, high volume, or multi-vendor marketplaces","Typical cost: $200 (Shopify template) → $5,000+ (custom MERN store)"]},{type:"heading",id:"webapp",level:2,text:"4. Web Applications"},{type:"paragraph",text:"A web application is software that runs in a browser. If your business has unique workflows — booking systems, CRM, dashboards, student portals — a web app is what you need."},{type:"list",style:"bullet",items:["Booking and appointment systems (clinics, salons, lawyers)","Property management platforms (real estate agencies)","Student and teacher portals (schools and universities)","Inventory and order management (warehouses and retailers)","Typical cost: $2,000 – $20,000+ depending on complexity"]},{type:"heading",id:"decision",level:2,text:"Quick Decision Guide"},{type:"list",style:"numbered",items:["Running a campaign or launching a product? → Landing Page","Showing your work to potential clients? → Portfolio Site","Selling products online? → Shopify (simple) or Custom Store (complex)","Need users to login and do tasks? → Web Application","Sharing content regularly? → CMS (WordPress)"]},{type:"callout",variant:"info",text:"Not sure which category you fall into? Contact me and I'll give you a free 15-minute consultation to point you in the right direction."}]},{id:8,slug:"wordpress-custom-theme-2025",title:"WordPress Custom Theme Development from Scratch in 2025",excerpt:"Build a professional WordPress theme using PHP, ACF, custom post types, and the block editor without page builders.",author:"Hamad",authorBio:"WordPress developer with 2+ years building custom themes and plugins for agencies and businesses.",date:"Sep 6, 2025",dateISO:"2025-09-06",readTime:"13 min read",category:"WordPress",tags:["WordPress","PHP","Theme Development"],featured:!1,toc:[{id:"intro",title:"Introduction"},{id:"setup",title:"Theme Setup"},{id:"structure",title:"File Structure"},{id:"functions",title:"Functions.php"},{id:"cpt",title:"Custom Post Types"},{id:"acf",title:"ACF Fields"},{id:"tips",title:"Pro Tips"}],content:[{type:"heading",id:"intro",level:2,text:"Why Build a Custom Theme?"},{type:"paragraph",text:"Page builders like Elementor and Divi are great for quickly launching sites. But they come with bloated code, slow performance, and limited flexibility. When a client needs something truly unique — or when performance is critical — a custom WordPress theme is the answer."},{type:"heading",id:"setup",level:2,text:"Theme Setup"},{type:"code",language:"css",filename:"style.css — Theme Header",code:`/*
 Theme Name: Hamad Custom Theme
 Theme URI: https://hamad.dev
 Author: Hamad
 Author URI: https://hamad.dev
 Description: A custom WordPress theme built from scratch
 Version: 1.0.0
 License: GNU General Public License v2 or later
 Text Domain: hamad-theme
*/`},{type:"heading",id:"structure",level:2,text:"File Structure"},{type:"code",language:"bash",filename:"Theme Structure",code:`hamad-theme/
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── inc/
│   ├── custom-post-types.php
│   ├── acf-fields.php
│   └── helpers.php
├── template-parts/
│   ├── header/
│   ├── footer/
│   └── components/
├── functions.php
├── index.php
├── header.php
├── footer.php
├── page.php
├── single.php
├── archive.php
└── style.css`},{type:"heading",id:"functions",level:2,text:"Functions.php Essentials"},{type:"code",language:"php",filename:"functions.php",code:`<?php
// Enqueue styles and scripts
function hamad_theme_scripts() {
    wp_enqueue_style(
        'hamad-main',
        get_stylesheet_uri(),
        [],
        wp_get_theme()->get('Version')
    );
    
    wp_enqueue_script(
        'hamad-main',
        get_template_directory_uri() . '/assets/js/main.js',
        [],
        '1.0.0',
        true
    );
    
    // Pass data to JS
    wp_localize_script('hamad-main', 'hamadVars', [
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce'   => wp_create_nonce('hamad_nonce'),
    ]);
}
add_action('wp_enqueue_scripts', 'hamad_theme_scripts');

// Theme support
function hamad_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['comment-list', 'comment-form', 'search-form']);
    add_theme_support('custom-logo');
    
    // Register nav menus
    register_nav_menus([
        'primary' => __('Primary Menu', 'hamad-theme'),
        'footer'  => __('Footer Menu', 'hamad-theme'),
    ]);
}
add_action('after_setup_theme', 'hamad_theme_setup');`},{type:"heading",id:"cpt",level:2,text:"Custom Post Types"},{type:"code",language:"php",filename:"inc/custom-post-types.php",code:`<?php
// Register Portfolio CPT
function hamad_register_portfolio_cpt() {
    register_post_type('portfolio', [
        'labels' => [
            'name'          => 'Portfolio',
            'singular_name' => 'Project',
            'add_new_item'  => 'Add New Project',
        ],
        'public'       => true,
        'has_archive'  => true,
        'show_in_rest' => true,    // Enable Gutenberg
        'menu_icon'    => 'dashicons-portfolio',
        'supports'     => ['title', 'editor', 'thumbnail', 'excerpt'],
        'rewrite'      => ['slug' => 'portfolio'],
    ]);
}
add_action('init', 'hamad_register_portfolio_cpt');`},{type:"heading",id:"tips",level:2,text:"Pro Tips"},{type:"list",style:"numbered",items:["Always use child themes if modifying a parent theme — never edit parent directly","Use wp_nonce for all AJAX requests — prevents CSRF attacks","Use get_template_part() for reusable components — keeps code DRY","Register custom image sizes with add_image_size() for consistent thumbnails","Use transients API to cache expensive database queries","Always sanitize inputs and escape outputs — WordPress security 101"]}]},{id:10,slug:"ai-phishing-detection-bert-cnn",title:"AI-Based Phishing Detection: How I Built It with BERT + CNN",excerpt:"A behind-the-scenes look at my final year project — combining NLP transformers and convolutional neural networks to detect phishing URLs.",author:"Hamad",authorBio:"BSIT graduate with a specialization in AI-based web security. Final year project earned top marks for innovation.",date:"Jul 12, 2025",dateISO:"2025-07-12",readTime:"14 min read",category:"AI/ML",tags:["AI","Machine Learning","BERT","Python","NLP"],featured:!1,toc:[{id:"problem",title:"The Problem"},{id:"approach",title:"Hybrid Approach"},{id:"dataset",title:"Dataset"},{id:"bert",title:"BERT Model"},{id:"cnn",title:"CNN Model"},{id:"fusion",title:"Model Fusion"},{id:"results",title:"Results"}],content:[{type:"heading",id:"problem",level:2,text:"The Problem with Phishing Detection"},{type:"paragraph",text:"Phishing URLs are getting more sophisticated every year. Traditional rule-based detectors (blacklists, keyword matching) fail against new domains that haven't been seen before. My final year project tackled this with a hybrid ML model that could detect phishing from URL structure alone."},{type:"callout",variant:"info",text:"Over 3.4 billion phishing emails are sent daily. URL-based detection is the first and most critical line of defense."},{type:"heading",id:"approach",level:2,text:"The Hybrid Approach: BERT + CNN"},{type:"paragraph",text:"Instead of choosing between NLP and structural analysis, I combined both. BERT handles semantic understanding of URL text, while CNN extracts spatial patterns from character-level features. Their outputs are fused for the final classification."},{type:"heading",id:"bert",level:2,text:"BERT for URL Semantics"},{type:"code",language:"python",filename:"bert_model.py",code:`from transformers import BertTokenizer, BertModel
import torch
import torch.nn as nn

class BertURLEncoder(nn.Module):
    def __init__(self):
        super(BertURLEncoder, self).__init__()
        self.bert = BertModel.from_pretrained('bert-base-uncased')
        self.dropout = nn.Dropout(0.3)
        self.classifier = nn.Linear(768, 128)

    def forward(self, input_ids, attention_mask):
        outputs = self.bert(
            input_ids=input_ids,
            attention_mask=attention_mask
        )
        # Use [CLS] token representation
        cls_output = outputs.last_hidden_state[:, 0, :]
        cls_output = self.dropout(cls_output)
        return self.classifier(cls_output)

# Tokenize URL
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

def tokenize_url(url, max_length=128):
    return tokenizer(
        url,
        max_length=max_length,
        padding='max_length',
        truncation=True,
        return_tensors='pt'
    )`},{type:"heading",id:"cnn",level:2,text:"CNN for Character-Level Patterns"},{type:"code",language:"python",filename:"cnn_model.py",code:`import torch.nn as nn

class CNNURLClassifier(nn.Module):
    def __init__(self, vocab_size=128, embed_dim=64):
        super(CNNURLClassifier, self).__init__()
        
        self.embedding = nn.Embedding(vocab_size, embed_dim)
        
        # Multiple kernel sizes to capture different n-grams
        self.conv1 = nn.Conv1d(embed_dim, 128, kernel_size=3, padding=1)
        self.conv2 = nn.Conv1d(embed_dim, 128, kernel_size=5, padding=2)
        self.conv3 = nn.Conv1d(embed_dim, 128, kernel_size=7, padding=3)
        
        self.pool = nn.AdaptiveMaxPool1d(1)
        self.fc   = nn.Linear(384, 128)  # 128 * 3 kernels
        self.relu = nn.ReLU()

    def forward(self, x):
        x = self.embedding(x).permute(0, 2, 1)
        
        c1 = self.relu(self.pool(self.conv1(x)).squeeze(-1))
        c2 = self.relu(self.pool(self.conv2(x)).squeeze(-1))
        c3 = self.relu(self.pool(self.conv3(x)).squeeze(-1))
        
        combined = torch.cat([c1, c2, c3], dim=1)
        return self.fc(combined)`},{type:"heading",id:"results",level:2,text:"Results"},{type:"list",style:"bullet",items:["Accuracy: 97.3% on test set (10,000 URLs)","Precision: 96.8% — low false positives (legitimate sites flagged)","Recall: 97.9% — high true positive rate (phishing sites caught)","F1 Score: 97.3%","Inference time: ~45ms per URL (production-ready)","Compared to single BERT: +2.1% accuracy improvement from CNN fusion"]},{type:"callout",variant:"success",text:'The hybrid model consistently outperformed both single-model approaches. The key insight: BERT understands "meaning", CNN understands "shape" — together they cover what the other misses.'}]},{id:24,slug:"secure-e-prescription-workflows-company-project",title:"Secure E-Prescription Workflows in a Healthcare Company Project",excerpt:"A practical look at prescription-required product allocation, secure PDF signing, AWS document storage, and audit-friendly workflows from a real company project.",author:"Hamad",authorBio:"Full Stack Developer working on company SaaS products across healthcare commerce, clinic management, and role-based business platforms.",date:"Aug 18, 2026",dateISO:"2026-08-18",readTime:"9 min read",category:"SaaS",tags:["Company Project","Healthcare","E-Prescription","AWS","NestJS"],featured:!0,toc:[{id:"company-context",title:"Company Project Context"},{id:"prescription-flow",title:"Prescription Flow"},{id:"documents",title:"Secure Documents"},{id:"order-safety",title:"Order Safety"},{id:"lessons",title:"Lessons Learned"}],content:[{type:"heading",id:"company-context",level:2,text:"Company Project Context"},{type:"paragraph",text:"This article is based on a company project I worked on: a healthcare commerce and e-prescription platform built for professional users, prescribers, patients, and administrators."},{type:"paragraph",text:"The product was not just a normal online store. Some products required prescription approval, patient assignment, secure document generation, and clear operational tracking before an order could safely move forward."},{type:"heading",id:"prescription-flow",level:2,text:"Prescription Flow"},{type:"paragraph",text:"The core workflow connected product ordering with prescription rules. A practitioner could allocate prescription-required products to patients, assign prescribers, and submit the order only when the required patient and product data was valid."},{type:"list",style:"bullet",items:["Validate prescription-required products before checkout","Link each restricted product to the correct patient","Apply per-product and category-level quantity rules","Notify the assigned prescriber when prescription work is created"]},{type:"callout",variant:"info",text:"In healthcare products, checkout logic must care about compliance, not only cart totals."},{type:"heading",id:"documents",level:2,text:"Secure Documents"},{type:"paragraph",text:"Prescription PDFs and uploaded documents needed private storage, controlled access, and predictable expiry. AWS S3 signed URLs were useful because files could stay private while still allowing temporary access to authorized users."},{type:"list",style:"bullet",items:["Generate prescription PDFs from validated order data","Store clinical documents privately in AWS S3","Use time-limited signed URLs for access","Keep document access tied to roles and permissions"]},{type:"heading",id:"order-safety",level:2,text:"Order Safety"},{type:"paragraph",text:"One of the most important engineering concerns was keeping order creation transaction-safe. Stock deduction, payment state, prescription generation, and order summaries had to agree with each other."},{type:"paragraph",text:"The backend used modular NestJS services and PostgreSQL-backed workflows so the system could validate pricing, VAT, stock, prescriptions, and order status in a consistent way."},{type:"heading",id:"lessons",level:2,text:"Lessons Learned"},{type:"list",style:"numbered",items:["Model sensitive workflows around business rules first, then UI screens","Keep prescription logic server-side and auditable","Treat document access as a security feature, not a file-upload detail","Write regression tests around high-risk checkout and prescription paths"]},{type:"callout",variant:"success",text:"The biggest lesson from this company project was that healthcare commerce requires reliable workflows, clear permissions, and defensive backend design."}]},{id:23,slug:"stripe-payments-subscriptions-company-saas",title:"Stripe Payments, Subscriptions, and Webhooks in a Company SaaS Product",excerpt:"How I worked with checkout, subscriptions, webhook idempotency, payment status tracking, and billing workflows inside a production SaaS product.",author:"Hamad",authorBio:"Full Stack Developer working on company SaaS products with Next.js, NestJS, PostgreSQL, AWS, and payment integrations.",date:"Jul 15, 2026",dateISO:"2026-07-15",readTime:"8 min read",category:"SaaS",tags:["Company Project","Stripe","SaaS","Payments","Webhooks"],featured:!1,toc:[{id:"context",title:"Company SaaS Context"},{id:"checkout",title:"Checkout and Billing"},{id:"webhooks",title:"Webhook Reliability"},{id:"entitlements",title:"Subscriptions and Entitlements"},{id:"takeaways",title:"Takeaways"}],content:[{type:"heading",id:"context",level:2,text:"Company SaaS Context"},{type:"paragraph",text:"This article comes from payment and billing work I handled inside a company SaaS product. The system needed checkout, subscriptions, payment status tracking, and plan-based access to product features."},{type:"paragraph",text:"In SaaS, payment integration is not only about collecting money. It controls onboarding, account access, subscription status, feature limits, and operational support."},{type:"heading",id:"checkout",level:2,text:"Checkout and Billing"},{type:"paragraph",text:"The platform used Stripe flows for plan selection, checkout, subscription management, and customer billing actions. The frontend had to keep the flow clear, while the backend stayed responsible for trusted state changes."},{type:"list",style:"bullet",items:["Create checkout sessions from server-side plan data","Track subscription and payment state in the database","Expose billing status clearly to admins and users","Support Customer Portal flows for subscription management"]},{type:"heading",id:"webhooks",level:2,text:"Webhook Reliability"},{type:"paragraph",text:"Webhook handling is where many payment systems become fragile. Events can arrive more than once, arrive later than expected, or fail during processing. That is why idempotency and event persistence matter."},{type:"callout",variant:"tip",text:"A webhook endpoint should be boring, predictable, and safe to retry. That is a good thing."},{type:"list",style:"bullet",items:["Verify webhook signatures before processing","Store received events for audit and retry safety","Use idempotency keys to avoid duplicate updates","Update subscription entitlements only from trusted backend events"]},{type:"heading",id:"entitlements",level:2,text:"Subscriptions and Entitlements"},{type:"paragraph",text:"For this company project, subscription plans were connected to feature access and usage limits. That meant the backend had to validate whether a tenant could access a feature before allowing the action."},{type:"heading",id:"takeaways",level:2,text:"Takeaways"},{type:"list",style:"numbered",items:["Do not trust frontend payment state for permissions","Keep webhook processing idempotent","Connect billing plans to server-side entitlements","Give admins clear visibility into payment attempts and subscription state"]}]},{id:22,slug:"multi-tenant-healthcare-saas-architecture-company-project",title:"Multi-Tenant SaaS Architecture for Healthcare Platforms",excerpt:"Lessons from a company healthcare SaaS project covering tenant isolation, branches, roles, entitlements, and server-side permission checks.",author:"Hamad",authorBio:"Full Stack Developer working on company SaaS products across healthcare, e-commerce, and admin-heavy platforms.",date:"Jun 20, 2026",dateISO:"2026-06-20",readTime:"10 min read",category:"SaaS",tags:["Company Project","Multi-Tenant","Healthcare SaaS","PostgreSQL","NestJS"],featured:!0,toc:[{id:"intro",title:"Why Multi-Tenant Matters"},{id:"tenant-model",title:"Tenant Model"},{id:"roles",title:"Roles and Permissions"},{id:"entitlements",title:"Feature Entitlements"},{id:"conclusion",title:"Conclusion"}],content:[{type:"heading",id:"intro",level:2,text:"Why Multi-Tenant Matters"},{type:"paragraph",text:"This article is based on a company healthcare SaaS project where the product needed to support multiple clinics, branches, staff members, patients, and platform administrators inside one system."},{type:"paragraph",text:"The most important rule was simple: every clinic should feel like it owns its own secure workspace, while the platform still stays manageable from a super-admin level."},{type:"heading",id:"tenant-model",level:2,text:"Tenant Model"},{type:"paragraph",text:"A strong tenant model protects data boundaries. Clinic users should only see their clinic data, branch users should work inside their assigned branch context, and platform admins should have controlled access for support and governance."},{type:"list",style:"bullet",items:["Tenant-level records for clinic accounts","Branch-level separation for locations and staff","Server-side tenant checks on every sensitive API","Audit-friendly access patterns for platform support"]},{type:"heading",id:"roles",level:2,text:"Roles and Permissions"},{type:"paragraph",text:"The platform included clinic owners, practitioners, receptionists, staff, patients, and super administrators. Each role needed different screens, API permissions, and workflow access."},{type:"callout",variant:"warning",text:"Role checks should never live only in the UI. The backend must be the final authority."},{type:"heading",id:"entitlements",level:2,text:"Feature Entitlements"},{type:"paragraph",text:"Because this was a SaaS company project, subscription plans and feature gates mattered. A clinic plan could control modules such as booking, forms, inventory, marketing, support, or training features."},{type:"list",style:"bullet",items:["Validate plan access before protected actions","Support tenant-specific overrides for business cases","Keep feature catalogues shared across portals","Make denied access clear and consistent"]},{type:"heading",id:"conclusion",level:2,text:"Conclusion"},{type:"paragraph",text:"Multi-tenant SaaS architecture is mostly about discipline: trusted server validation, clean data boundaries, predictable roles, and a product model that can grow without mixing customer data."}]},{id:21,slug:"role-based-dashboards-nextjs-nestjs-company-project",title:"Building Role-Based Dashboards with Next.js and NestJS",excerpt:"How client, clinic-admin, and super-admin portals can be structured with protected routes, API guards, shared UI, and role-aware product workflows.",author:"Hamad",authorBio:"Full Stack Developer building company SaaS products with Next.js, NestJS, PostgreSQL, AWS, and Git workflows.",date:"May 24, 2026",dateISO:"2026-05-24",readTime:"8 min read",category:"SaaS",tags:["Company Project","Next.js","NestJS","RBAC","Dashboards"],featured:!1,toc:[{id:"context",title:"Project Context"},{id:"portals",title:"Portal Structure"},{id:"backend",title:"Backend Guards"},{id:"frontend",title:"Frontend UX"},{id:"summary",title:"Summary"}],content:[{type:"heading",id:"context",level:2,text:"Project Context"},{type:"paragraph",text:"This article is based on a company project where I worked on role-based SaaS dashboards using Next.js, NestJS, PostgreSQL, AWS, and Git-based team workflows."},{type:"paragraph",text:"The product needed separate experiences for normal users, clinic administrators, and super administrators. Each portal had different responsibilities, permissions, and data visibility rules."},{type:"heading",id:"portals",level:2,text:"Portal Structure"},{type:"paragraph",text:"Role-based products become easier to maintain when each portal has a clear purpose. A client portal should focus on user actions, a clinic-admin portal should focus on operations, and a super-admin portal should focus on platform control."},{type:"list",style:"bullet",items:["Client portal for booking, forms, payments, and personal records","Clinic-admin portal for staff, appointments, patients, invoices, and inventory","Super-admin portal for tenants, plans, support, risk monitoring, and governance"]},{type:"heading",id:"backend",level:2,text:"Backend Guards"},{type:"paragraph",text:"The NestJS backend is where permission rules must be enforced. Frontend route protection improves user experience, but API guards protect the actual business data."},{type:"list",style:"bullet",items:["JWT authentication for trusted user identity","Role guards for dashboard-level access","Feature guards for plan-based modules","Tenant and branch validation for sensitive data"]},{type:"heading",id:"frontend",level:2,text:"Frontend UX"},{type:"paragraph",text:"In Next.js, the UI should guide each role toward the actions they need most. Good dashboards reduce confusion by showing only relevant navigation, metrics, and actions."},{type:"callout",variant:"tip",text:"The best role-based dashboard feels simple because the permission complexity is handled behind the scenes."},{type:"heading",id:"summary",level:2,text:"Summary"},{type:"paragraph",text:"This company project strengthened my understanding of SaaS product architecture: separate the portals, centralize the permissions, and make the backend the source of truth."}]}],ni={"react-2025":"react-2026"},ai=t=>{const n=ni[t]||t;return ie.find(r=>r.slug===n)||null},ii=(t,n=3)=>ie.filter(r=>r.id!==t.id&&(r.category===t.category||r.tags.some(o=>t.tags.includes(o)))).slice(0,n),si=t=>{const n=ie.findIndex(r=>r.id===t.id);return{prev:n>0?ie[n-1]:null,next:n<ie.length-1?ie[n+1]:null}},oi=()=>{const[t,n]=j.useState(0);return j.useEffect(()=>{const r=()=>{const o=window.scrollY,i=document.documentElement.scrollHeight-window.innerHeight,l=i>0?o/i*100:0;n(Math.min(100,Math.max(0,l)))};return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]),e.jsx("div",{className:"fixed top-0 left-0 right-0 z-50 h-1 bg-border/30",children:e.jsx(a.div,{className:"h-full bg-gradient-to-r from-accent to-accent-hover origin-left",style:{scaleX:t/100},transition:{duration:.1}})})},li=({toc:t,activeId:n})=>{const r=o=>{const i=document.getElementById(o);if(i){const s=i.getBoundingClientRect().top+window.scrollY-100;window.scrollTo({top:s,behavior:"smooth"})}};return e.jsxs("div",{className:`\r
      bg-primary-light/30 border border-border\r
      rounded-2xl p-5 sticky top-28\r
    `,children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4 pb-3 border-b border-border",children:[e.jsx(ke,{size:16,className:"text-accent"}),e.jsx("h3",{className:"font-mono text-xs text-accent uppercase tracking-wider font-semibold",children:"Table of Contents"})]}),e.jsx("nav",{className:"space-y-1",children:t.map(o=>e.jsxs("button",{onClick:()=>r(o.id),className:`
              w-full text-left flex items-center gap-2
              px-3 py-2 rounded-lg text-sm
              transition-all duration-200
              group
              ${n===o.id?"bg-accent/10 text-accent border-l-2 border-accent pl-2":"text-text-body/60 hover:text-text-heading hover:bg-primary/50"}
            `,children:[e.jsx(he,{size:12,className:`
                flex-shrink-0 transition-transform duration-200
                ${n===o.id?"text-accent rotate-90":"text-text-body/30 group-hover:text-accent"}
              `}),e.jsx("span",{className:"leading-tight",children:o.title})]},o.id))})]})},ci=({code:t,language:n,filename:r})=>{const[o,i]=j.useState(!1),l=async()=>{await navigator.clipboard.writeText(t),i(!0),setTimeout(()=>i(!1),2e3)};return e.jsxs("div",{className:"my-8 rounded-2xl overflow-hidden border border-border/60 shadow-xl shadow-black/20",children:[e.jsxs("div",{className:`\r
        flex items-center justify-between\r
        px-5 py-3\r
        bg-primary-light border-b border-border/60\r
      `,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500/70"}),e.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500/70"}),e.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500/70"})]}),r&&e.jsx("span",{className:"font-mono text-xs text-text-body/50",children:r})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[n&&e.jsx("span",{className:`\r
              font-mono text-[10px] uppercase tracking-wider\r
              text-accent/60 bg-accent/10\r
              px-2 py-0.5 rounded\r
            `,children:n}),e.jsx(a.button,{onClick:l,whileHover:{scale:1.1},whileTap:{scale:.9},className:`\r
              flex items-center gap-1.5\r
              text-xs text-text-body/50 hover:text-accent\r
              transition-colors duration-200\r
            `,children:e.jsx(W,{mode:"wait",children:o?e.jsxs(a.span,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0},className:"flex items-center gap-1 text-green-400",children:[e.jsx(me,{size:14})," Copied!"]},"check"):e.jsxs(a.span,{initial:{opacity:0},animate:{opacity:1},className:"flex items-center gap-1",children:[e.jsx(wt,{size:14})," Copy"]},"copy")})})]})]}),e.jsx("div",{className:`\r
        relative overflow-x-auto\r
        bg-[#0d1117]\r
      `,children:e.jsx("pre",{className:`\r
          p-5 text-sm leading-relaxed\r
          font-mono text-gray-300\r
          min-w-full\r
        `,children:e.jsx("code",{children:t})})})]})},di=({variant:t="info",text:n})=>{const r={info:{bg:"bg-blue-500/8",border:"border-blue-500/25",icon:e.jsx(vr,{size:18,className:"text-blue-400 flex-shrink-0 mt-0.5"}),label:"Note",labelColor:"text-blue-400"},tip:{bg:"bg-accent/8",border:"border-accent/25",icon:e.jsx(de,{size:18,className:"text-accent flex-shrink-0 mt-0.5"}),label:"Pro Tip",labelColor:"text-accent"},warning:{bg:"bg-yellow-500/8",border:"border-yellow-500/25",icon:e.jsx($e,{size:18,className:"text-yellow-400 flex-shrink-0 mt-0.5"}),label:"Warning",labelColor:"text-yellow-400"},success:{bg:"bg-green-500/8",border:"border-green-500/25",icon:e.jsx(yt,{size:18,className:"text-green-400 flex-shrink-0 mt-0.5"}),label:"Key Insight",labelColor:"text-green-400"}},o=r[t]||r.info;return e.jsxs("div",{className:`
      my-6 flex gap-4 p-5 rounded-xl
      border ${o.bg} ${o.border}
    `,children:[o.icon,e.jsxs("div",{children:[e.jsx("span",{className:`font-semibold text-sm ${o.labelColor} block mb-1`,children:o.label}),e.jsx("p",{className:"text-text-body text-sm leading-relaxed",children:n})]})]})},mi=({blocks:t})=>e.jsx("div",{className:"prose-content",children:t.map((n,r)=>{switch(n.type){case"heading":const o=`h${n.level}`,i={2:"font-heading font-bold text-2xl md:text-3xl text-text-heading mt-12 mb-5 pb-3 border-b border-border/50",3:"font-heading font-semibold text-xl text-text-heading mt-8 mb-4",4:"font-heading font-semibold text-lg text-accent mt-6 mb-3"};return e.jsx(o,{id:n.id,className:i[n.level]||i[2],children:n.text},r);case"paragraph":return e.jsx("p",{className:"text-text-body leading-relaxed text-base mb-5",children:n.text},r);case"list":return e.jsx("ul",{className:"my-5 space-y-2.5 pl-4",children:n.items.map((l,s)=>e.jsxs("li",{className:"flex items-start gap-3 text-text-body text-sm leading-relaxed",children:[e.jsx("span",{className:`\r
                      flex-shrink-0 mt-1.5\r
                      w-5 h-5 flex items-center justify-center\r
                    `,children:n.style==="numbered"?e.jsx("span",{className:`\r
                          w-5 h-5 rounded-full bg-accent/20\r
                          text-accent text-[10px] font-bold\r
                          flex items-center justify-center\r
                          flex-shrink-0\r
                        `,children:s+1}):e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1"})}),e.jsx("span",{children:l})]},s))},r);case"code":return e.jsx(ci,{code:n.code,language:n.language,filename:n.filename},r);case"callout":return e.jsx(di,{variant:n.variant,text:n.text},r);default:return null}})}),mt=({post:t})=>{const[n,r]=j.useState(!1),o=window.location.href,i=async()=>{await navigator.clipboard.writeText(o),r(!0),setTimeout(()=>r(!1),2e3)},l=[{name:"WhatsApp",icon:e.jsx(J,{size:18}),color:"hover:bg-green-500/20 hover:border-green-500/40 hover:text-green-400",href:`https://wa.me/?text=${encodeURIComponent(`${t.title}
${o}`)}`},{name:"Twitter / X",icon:e.jsx(Lt,{size:18}),color:"hover:bg-sky-500/20 hover:border-sky-500/40 hover:text-sky-400",href:`https://twitter.com/intent/tweet?text=${encodeURIComponent(t.title)}&url=${encodeURIComponent(o)}`},{name:"LinkedIn",icon:e.jsx(Pt,{size:18}),color:"hover:bg-blue-500/20 hover:border-blue-500/40 hover:text-blue-400",href:`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(o)}`}];return e.jsxs("div",{className:`\r
      flex flex-col sm:flex-row items-start sm:items-center\r
      gap-3\r
    `,children:[e.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-text-body/50 font-mono uppercase tracking-wider",children:[e.jsx(Sr,{size:12}),e.jsx("span",{children:"Share"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[l.map(s=>e.jsx(a.a,{href:s.href,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,y:-2},whileTap:{scale:.95},title:s.name,className:`
              w-9 h-9 flex items-center justify-center
              rounded-lg border border-border
              text-text-body/60
              transition-all duration-300
              ${s.color}
            `,children:s.icon},s.name)),e.jsx(a.button,{onClick:i,whileHover:{scale:1.1,y:-2},whileTap:{scale:.95},title:"Copy link",className:`\r
            w-9 h-9 flex items-center justify-center\r
            rounded-lg border border-border\r
            text-text-body/60\r
            hover:bg-accent/20 hover:border-accent/40 hover:text-accent\r
            transition-all duration-300\r
          `,children:e.jsx(W,{mode:"wait",children:n?e.jsx(a.span,{initial:{scale:0},animate:{scale:1},exit:{scale:0},children:e.jsx(me,{size:16,className:"text-green-400"})},"check"):e.jsx(a.span,{initial:{scale:1},children:e.jsx(wt,{size:16})},"copy")})})]})]})},pi=({author:t,bio:n})=>e.jsxs("div",{className:`\r
    flex flex-col sm:flex-row items-start gap-5\r
    p-6 rounded-2xl\r
    bg-primary-light/30 border border-border\r
    hover:border-accent/30 transition-colors duration-300\r
  `,children:[e.jsx("div",{className:`\r
      w-16 h-16 flex-shrink-0\r
      rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10\r
      border-2 border-accent/30\r
      flex items-center justify-center\r
      text-2xl font-bold text-accent\r
    `,children:"H"}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-2",children:[e.jsx("h3",{className:"font-heading font-bold text-text-heading text-lg",children:t}),e.jsx("span",{className:`\r
          px-2.5 py-0.5\r
          bg-accent/10 text-accent\r
          text-xs font-mono rounded-full border border-accent/20\r
        `,children:"Full Stack Developer"})]}),e.jsx("p",{className:"text-text-body text-sm leading-relaxed mb-4",children:n}),e.jsxs("div",{className:"flex items-center gap-3",children:[[{icon:e.jsx(Ha,{size:16}),href:"https://github.com",label:"GitHub"},{icon:e.jsx($a,{size:16}),href:"https://linkedin.com",label:"LinkedIn"},{icon:e.jsx(Lt,{size:16}),href:"https://twitter.com",label:"Twitter"}].map(r=>e.jsx(a.a,{href:r.href,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1,y:-2},className:`\r
              w-8 h-8 flex items-center justify-center\r
              rounded-lg border border-border\r
              text-text-body/50 hover:text-accent\r
              hover:border-accent/40 hover:bg-accent/10\r
              transition-all duration-300\r
            `,"aria-label":r.label,children:r.icon},r.label)),e.jsx(L,{to:"/contact",className:`\r
            px-4 py-1.5 ml-2\r
            bg-accent/10 hover:bg-accent\r
            text-accent hover:text-primary-dark\r
            border border-accent/30 hover:border-accent\r
            rounded-lg text-xs font-medium\r
            transition-all duration-300\r
          `,children:"Hire Hamad"})]})]})]}),ui=({post:t})=>{const n={React:"text-cyan-400",Backend:"text-green-400",Project:"text-accent",Business:"text-orange-400",WordPress:"text-indigo-400","AI/ML":"text-red-400"};return e.jsx(L,{to:`/blog/${t.slug}`,className:"group block",children:e.jsxs(a.div,{whileHover:{y:-4},className:`\r
          p-5 rounded-xl\r
          bg-primary-light/30 border border-border\r
          hover:border-accent/30\r
          transition-all duration-300\r
          h-full\r
        `,children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("span",{className:`text-xs font-mono ${n[t.category]||"text-accent"}`,children:t.category}),e.jsx("span",{className:"text-text-body/30 text-xs",children:"·"}),e.jsxs("span",{className:"text-text-body/40 text-xs flex items-center gap-1",children:[e.jsx(re,{size:10})," ",t.readTime]})]}),e.jsx("h4",{className:`\r
          font-heading font-semibold text-sm text-text-heading\r
          group-hover:text-accent transition-colors duration-300\r
          line-clamp-2 mb-2 leading-snug\r
        `,children:t.title}),e.jsx("p",{className:"text-text-body/60 text-xs line-clamp-2 leading-relaxed mb-3",children:t.excerpt}),e.jsxs("span",{className:`\r
          inline-flex items-center gap-1\r
          text-xs font-medium text-accent/70\r
          group-hover:text-accent group-hover:gap-2\r
          transition-all duration-300\r
        `,children:["Read article ",e.jsx(te,{size:12})]})]})})},hi=({prev:t,next:n})=>e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12",children:[t?e.jsx(L,{to:`/blog/${t.slug}`,className:"group",children:e.jsxs(a.div,{whileHover:{x:-4},className:`\r
            flex items-start gap-3 p-4\r
            bg-primary-light/30 border border-border\r
            hover:border-accent/30 rounded-xl\r
            transition-all duration-300\r
          `,children:[e.jsx(le,{size:18,className:"text-accent flex-shrink-0 mt-1"}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[10px] font-mono text-text-body/40 uppercase tracking-wider mb-1",children:"Previous"}),e.jsx("div",{className:"text-sm font-medium text-text-heading group-hover:text-accent transition-colors line-clamp-2",children:t.title})]})]})}):e.jsx("div",{}),n&&e.jsx(L,{to:`/blog/${n.slug}`,className:"group sm:justify-self-end w-full",children:e.jsxs(a.div,{whileHover:{x:4},className:`\r
            flex items-start justify-end gap-3 p-4\r
            bg-primary-light/30 border border-border\r
            hover:border-accent/30 rounded-xl\r
            transition-all duration-300 text-right\r
          `,children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[10px] font-mono text-text-body/40 uppercase tracking-wider mb-1",children:"Next"}),e.jsx("div",{className:"text-sm font-medium text-text-heading group-hover:text-accent transition-colors line-clamp-2",children:n.title})]}),e.jsx(te,{size:18,className:"text-accent flex-shrink-0 mt-1"})]})})]}),xi=()=>{var d,x;const{slug:t}=ut(),n=Kt(),[r,o]=j.useState(""),i=j.useRef(null),l=ai(t),s=l?ii(l):[],{prev:u,next:c}=l?si(l):{prev:null,next:null};if(K({title:l?`${l.title} | Hamad Hussain`:"Blog Post | Hamad Hussain",description:(l==null?void 0:l.excerpt)||"Read development articles, case studies, and business software insights by Hamad Hussain.",robots:l?"index, follow":"noindex, follow"}),j.useEffect(()=>{if(!(l!=null&&l.toc))return;const f=new IntersectionObserver(w=>{w.forEach(b=>{b.isIntersecting&&o(b.target.id)})},{rootMargin:"-20% 0px -70% 0px"});return l.toc.forEach(({id:w})=>{const b=document.getElementById(w);b&&f.observe(b)}),()=>f.disconnect()},[l]),!l)return e.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center pt-24 pb-20 text-center px-6",children:[e.jsx("div",{className:"text-8xl mb-6",children:"📭"}),e.jsx("h1",{className:"font-heading font-bold text-3xl text-text-heading mb-4",children:"Post Not Found"}),e.jsx("p",{className:"text-text-body mb-8 max-w-md",children:"This article doesn't exist or may have been moved."}),e.jsxs("button",{onClick:()=>n("/blog"),className:`\r
            inline-flex items-center gap-2\r
            px-6 py-3\r
            bg-accent text-primary-dark\r
            font-semibold rounded-xl\r
            hover:bg-accent-hover transition-colors\r
          `,children:[e.jsx(le,{size:18}),"Back to Blog"]})]});const p={React:"#61DAFB",Backend:"#339933",Project:"#64FFDA",Business:"#F97316",WordPress:"#818CF8","AI/ML":"#F87171",CSS:"#EC4899"}[l.category]||"#64FFDA";return e.jsxs(e.Fragment,{children:[e.jsx(oi,{}),e.jsxs(a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"pt-24 pb-20",children:[e.jsxs("section",{className:"relative overflow-hidden mb-12",children:[e.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[e.jsx("div",{className:"absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10",style:{background:p}}),e.jsx("div",{className:"absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-5",style:{background:p}})]}),e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:"max-w-4xl mx-auto pt-8",children:[e.jsx(a.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},className:"mb-8",children:e.jsxs(L,{to:"/blog",className:`\r
                    inline-flex items-center gap-2\r
                    text-sm text-text-body/60 hover:text-accent\r
                    transition-colors duration-300\r
                    group\r
                  `,children:[e.jsx(le,{size:16,className:"group-hover:-translate-x-1 transition-transform duration-300"}),"Back to Blog"]})}),e.jsxs(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"flex flex-wrap items-center gap-3 mb-6",children:[e.jsx("span",{className:"px-3 py-1.5 rounded-full text-xs font-mono font-semibold border",style:{color:p,background:`${p}15`,borderColor:`${p}30`},children:l.category}),l.tags.map(f=>e.jsxs("span",{className:`\r
                      flex items-center gap-1\r
                      px-2.5 py-1 rounded-lg text-[11px] font-mono\r
                      text-text-body/50 bg-primary/60 border border-border/60\r
                    `,children:[e.jsx(ve,{size:9})," ",f]},f))]}),e.jsx(a.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.1},className:`\r
                  font-heading font-bold\r
                  text-3xl md:text-4xl lg:text-5xl\r
                  text-text-heading leading-tight mb-6\r
                `,children:l.title}),e.jsx(a.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.15},className:"text-text-body text-lg leading-relaxed mb-8",children:l.excerpt}),e.jsxs(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:`\r
                  flex flex-wrap items-center justify-between\r
                  gap-4 pb-8 border-b border-border\r
                `,children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-5",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:`\r
                      w-9 h-9 rounded-full\r
                      bg-gradient-to-br from-accent/30 to-accent/10\r
                      border border-accent/30\r
                      flex items-center justify-center\r
                      text-sm font-bold text-accent\r
                    `,children:"H"}),e.jsxs("div",{children:[e.jsx("div",{className:"text-text-heading text-sm font-semibold",children:"Hamad"}),e.jsx("div",{className:"text-text-body/50 text-[11px]",children:"Full Stack Developer"})]})]}),e.jsxs("div",{className:"flex items-center gap-4 text-xs text-text-body/50",children:[e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx(ce,{size:12})," ",l.date]}),e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx(re,{size:12})," ",l.readTime]})]})]}),e.jsx(mt,{post:l})]})]})})]}),e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:`\r
            flex gap-10 items-start\r
            max-w-6xl mx-auto\r
          `,children:[((d=l.toc)==null?void 0:d.length)>0&&e.jsx("aside",{className:"hidden xl:block w-64 flex-shrink-0",children:e.jsx(li,{toc:l.toc,activeId:r})}),e.jsxs("article",{ref:i,className:"flex-1 min-w-0 max-w-3xl mx-auto",children:[((x=l.toc)==null?void 0:x.length)>0&&e.jsx("div",{className:"xl:hidden mb-8",children:e.jsxs("details",{className:`\r
                    bg-primary-light/30 border border-border\r
                    rounded-xl overflow-hidden\r
                  `,children:[e.jsxs("summary",{className:`\r
                      flex items-center gap-2 px-5 py-4\r
                      cursor-pointer text-sm font-medium text-text-heading\r
                      hover:text-accent transition-colors\r
                    `,children:[e.jsx(ke,{size:16,className:"text-accent"}),"Table of Contents"]}),e.jsx("div",{className:"px-5 pb-4 space-y-1",children:l.toc.map(f=>e.jsxs("button",{onClick:()=>{const w=document.getElementById(f.id);w&&w.scrollIntoView({behavior:"smooth",block:"start"})},className:`\r
                            w-full text-left flex items-center gap-2\r
                            px-3 py-2 rounded-lg text-sm\r
                            text-text-body/70 hover:text-accent hover:bg-accent/5\r
                            transition-all duration-200\r
                          `,children:[e.jsx(he,{size:12,className:"text-accent/50"}),f.title]},f.id))})]})}),e.jsx(mi,{blocks:l.content}),e.jsx("div",{className:"mt-16 mb-8 border-t border-border"}),e.jsxs("div",{className:`\r
                flex flex-col sm:flex-row items-start sm:items-center\r
                justify-between gap-5 mb-12\r
              `,children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:l.tags.map(f=>e.jsxs("span",{className:`\r
                        px-3 py-1.5 rounded-lg text-xs font-mono\r
                        text-text-body/60 bg-primary/60 border border-border/60\r
                        hover:border-accent/30 hover:text-accent\r
                        transition-colors duration-200 cursor-default\r
                      `,children:["# ",f]},f))}),e.jsx(mt,{post:l})]}),e.jsx(pi,{author:l.author,bio:l.authorBio}),e.jsx(hi,{prev:u,next:c}),s.length>0&&e.jsxs("div",{className:"mt-16",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx(ye,{size:18,className:"text-accent"}),e.jsx("h2",{className:"font-heading font-bold text-xl text-text-heading",children:"Related Articles"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:s.map(f=>e.jsx(ui,{post:f},f.id))})]})]})]})})]})]})},gi=()=>e.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[e.jsx(a.div,{className:"absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl",animate:{scale:[1,1.2,1],opacity:[.3,.5,.3]},transition:{duration:8,repeat:1/0,ease:"easeInOut"}}),e.jsx(a.div,{className:"absolute -bottom-40 -left-40 w-96 h-96 bg-green-500/5 rounded-full blur-3xl",animate:{scale:[1.2,1,1.2],opacity:[.2,.4,.2]},transition:{duration:10,repeat:1/0,ease:"easeInOut"}}),e.jsx(a.div,{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl",animate:{scale:[1,1.3,1],rotate:[0,180,360]},transition:{duration:15,repeat:1/0,ease:"linear"}})]}),fi=({texts:t})=>{const[n,r]=T.useState(0),[o,i]=T.useState(""),[l,s]=T.useState(!1);return T.useEffect(()=>{const u=t[n],c=setTimeout(()=>{l?(i(u.substring(0,o.length-1)),o===""&&(s(!1),r(g=>(g+1)%t.length))):(i(u.substring(0,o.length+1)),o===u&&setTimeout(()=>s(!0),2e3))},l?50:100);return()=>clearTimeout(c)},[o,l,n,t]),e.jsxs("span",{className:`\r
      bg-gradient-to-r from-accent to-green-400\r
      bg-clip-text text-transparent\r
    `,children:[o,e.jsx(a.span,{animate:{opacity:[1,0]},transition:{duration:.5,repeat:1/0},className:"text-accent",children:"|"})]})},bi=()=>{K({title:"Contact | Hamad Hussain",description:"Contact Hamad Hussain to discuss full-stack development, WordPress, Shopify, MERN, and custom business web solutions."});const t="923497818575",n=[{icon:e.jsx(X,{}),title:"Email",description:"Best for proposals, scope details, and formal project discussions",details:"mhweb11@gmail.com",action:"mailto:mhweb11@gmail.com",color:"from-blue-500/20 to-blue-600/10",iconColor:"text-blue-400",borderColor:"hover:border-blue-400/50",responseTime:"~24 hours"},{icon:e.jsx(J,{}),title:"WhatsApp",description:"Fastest option for quick questions, timelines, and project fit",details:"+92 349 7818575",action:`https://wa.me/${t}?text=${encodeURIComponent("Hi! I'm interested in discussing a project.")}`,color:"from-green-500/20 to-green-600/10",iconColor:"text-green-400",borderColor:"hover:border-green-400/50",responseTime:"~1 hour",featured:!0},{icon:e.jsx(ue,{}),title:"Phone",description:"Best for urgent decisions or live project alignment",details:"+92 349 7818575",action:"tel:+923497818575",color:"from-yellow-500/20 to-yellow-600/10",iconColor:"text-yellow-400",borderColor:"hover:border-yellow-400/50",responseTime:"Immediate"},{icon:e.jsx(Se,{}),title:"Live Chat",description:"Useful for quick checks before booking a full discussion",details:"Start a conversation",action:"#contact",color:"from-purple-500/20 to-purple-600/10",iconColor:"text-purple-400",borderColor:"hover:border-purple-400/50",responseTime:"~5 minutes"}],r=[{icon:e.jsx(de,{}),title:"Reliable Delivery",description:"Clear milestones, realistic timelines, and steady execution."},{icon:e.jsx(Oe,{}),title:"Production-Ready Work",description:"Clean, tested, maintainable code built for launch and growth."},{icon:e.jsx(ne,{}),title:"Global Experience",description:"Experience working with businesses across markets, industries, and time zones."},{icon:e.jsx(re,{}),title:"Post-Launch Support",description:"Ongoing fixes, improvements, and maintenance after delivery."}],o=[{question:"What is your typical response time?",answer:"Via WhatsApp, I usually respond within 1 hour. For emails, expect a response within 24 hours during business days. Phone calls are answered immediately when available."},{question:"Do you work with international clients?",answer:"Absolutely! I work with clients from all over the world. I'm comfortable working across different time zones, currencies, and communication styles."},{question:"What information should I provide in my inquiry?",answer:"The more detail, the better! Include: project goals, target audience, desired timeline, budget range, reference websites you like, and any specific features or requirements."},{question:"Do you offer ongoing maintenance?",answer:"Yes! I offer monthly maintenance packages that include updates, security patches, performance optimization, and priority technical support."},{question:"What is your pricing model?",answer:"I offer both fixed-price and hourly models depending on the project scope. For most projects, I provide a detailed quote after our initial discussion. Starting from $50 for small tasks."},{question:"Can I see your previous work?",answer:"Of course! Check out my portfolio page for detailed case studies. I can also provide references from previous clients upon request."}],[i,l]=T.useState(null);return e.jsxs(a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"pt-24 pb-20",children:[e.jsxs("section",{className:"relative overflow-hidden",children:[e.jsx(gi,{}),e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:`\r
            max-w-4xl mx-auto\r
            text-center\r
            py-16 md:py-24\r
            relative z-10\r
          `,children:[e.jsxs(a.div,{initial:{opacity:0,y:20,scale:.9},animate:{opacity:1,y:0,scale:1},transition:{duration:.5},className:`\r
                inline-flex items-center gap-2\r
                px-5 py-2.5 mb-8\r
                bg-accent/10 border border-accent/20\r
                rounded-full\r
                backdrop-blur-sm\r
              `,children:[e.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[e.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"}),e.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"})]}),e.jsx("span",{className:`\r
                font-mono text-xs text-accent\r
                uppercase tracking-[0.2em]\r
              `,children:"Available for Projects"})]}),e.jsxs(a.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.15,duration:.6},className:`\r
                font-heading font-bold\r
                text-4xl md:text-5xl lg:text-6xl\r
                text-text-heading\r
                leading-tight\r
                mb-6\r
              `,children:["Let's Build",e.jsx("br",{}),e.jsx(fi,{texts:["Your Dream Website","Something Amazing","A Stunning App","Your Next Project"]})]}),e.jsx(a.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:`\r
                text-text-body text-lg md:text-xl\r
                max-w-3xl mx-auto\r
                leading-relaxed\r
                mb-10\r
              `,children:"Have an idea? Let's turn it into reality. Choose your preferred way to reach out — fill the form, send an email, or jump straight to WhatsApp for an instant conversation."}),e.jsxs(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[e.jsxs(a.a,{href:"#contact",whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},className:`\r
                  inline-flex items-center gap-3\r
                  px-8 py-4\r
                  bg-accent hover:bg-accent-hover\r
                  text-primary-dark font-semibold\r
                  rounded-xl\r
                  shadow-lg shadow-accent/20\r
                  transition-all duration-300\r
                `,children:[e.jsx(Ee,{size:18}),e.jsx("span",{children:"Fill Contact Form"})]}),e.jsxs(a.a,{href:`https://wa.me/${t}?text=${encodeURIComponent("Hi! I'd like to discuss a project with you.")}`,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},className:`\r
                  inline-flex items-center gap-3\r
                  px-8 py-4\r
                  bg-green-600 hover:bg-green-500\r
                  text-white font-semibold\r
                  rounded-xl\r
                  shadow-lg shadow-green-600/20\r
                  transition-all duration-300\r
                `,children:[e.jsx(J,{size:20}),e.jsx("span",{children:"Quick WhatsApp Chat"})]})]}),e.jsx(a.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1},className:"mt-16",children:e.jsx(a.div,{animate:{y:[0,10,0]},transition:{duration:2,repeat:1/0},className:`\r
                  w-8 h-12 mx-auto\r
                  border-2 border-text-body/20\r
                  rounded-full\r
                  flex items-start justify-center pt-2\r
                `,children:e.jsx(a.div,{animate:{opacity:[.2,1,.2],y:[0,12,0]},transition:{duration:2,repeat:1/0},className:"w-1.5 h-3 bg-accent rounded-full"})})})]})})]}),e.jsx("section",{className:"py-16 bg-primary/50 relative",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsx(E,{subtitle:"Quick Contact",title:"Choose How to Reach Me",description:"Multiple ways to connect — pick the one that works best for you",align:"center",gradient:!0}),e.jsx("div",{className:`\r
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4\r
            gap-6 mt-12\r
            max-w-6xl mx-auto\r
          `,children:n.map((s,u)=>e.jsxs(a.a,{href:s.action,target:s.action.startsWith("http")?"_blank":void 0,rel:s.action.startsWith("http")?"noopener noreferrer":void 0,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:u*.1},whileHover:{y:-8,scale:1.02},whileTap:{scale:.98},className:`
                  relative
                  bg-primary-light/30 
                  border border-border ${s.borderColor}
                  rounded-2xl p-6
                  text-center
                  transition-all duration-300
                  group cursor-pointer
                  overflow-hidden
                  ${s.featured?"ring-1 ring-green-500/30":""}
                `,children:[s.featured&&e.jsx("div",{className:`\r
                    absolute top-3 right-3\r
                    px-2 py-1\r
                    bg-green-500/20 border border-green-500/30\r
                    rounded-full\r
                  `,children:e.jsx("span",{className:"text-[10px] font-mono text-green-400 uppercase tracking-wider",children:"Fastest"})}),e.jsx("div",{className:`
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  bg-gradient-to-br ${s.color}
                  transition-opacity duration-500
                `}),e.jsx("div",{className:`
                  w-14 h-14 mx-auto mb-4
                  flex items-center justify-center
                  text-2xl rounded-2xl
                  bg-primary/50 ${s.iconColor}
                  border border-border
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:border-transparent
                  relative z-10
                `,children:s.icon}),e.jsx("h3",{className:`\r
                  font-heading font-semibold\r
                  text-lg text-text-heading\r
                  mb-2 relative z-10\r
                `,children:s.title}),e.jsx("p",{className:`\r
                  text-text-body text-xs\r
                  mb-3 relative z-10\r
                  leading-relaxed\r
                `,children:s.description}),e.jsx("div",{className:`\r
                  font-medium text-sm text-text-heading\r
                  mb-3 relative z-10\r
                `,children:s.details}),e.jsxs("div",{className:`\r
                  inline-flex items-center gap-1.5\r
                  text-[10px] font-mono\r
                  text-text-body/50\r
                  relative z-10\r
                `,children:[e.jsx(re,{size:10}),e.jsxs("span",{children:["Response: ",s.responseTime]})]}),e.jsx("div",{className:`\r
                  mt-4 \r
                  flex items-center justify-center\r
                  relative z-10\r
                `,children:e.jsx(a.span,{className:`
                      ${s.iconColor}
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                    `,animate:{x:[0,5,0]},transition:{duration:1.5,repeat:1/0},children:e.jsx(te,{size:18})})})]},u))})]})}),e.jsx("section",{className:"py-16",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsx(E,{subtitle:"Why Choose Me",title:"What You Get",description:"More than just code — a reliable partner for your digital success",align:"center",gradient:!0}),e.jsx("div",{className:`\r
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4\r
            gap-6 mt-12\r
            max-w-6xl mx-auto\r
          `,children:r.map((s,u)=>e.jsxs(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:u*.1},whileHover:{y:-5},className:`\r
                  text-center p-6\r
                  bg-primary-light/20 border border-border\r
                  hover:border-accent/30\r
                  rounded-2xl\r
                  transition-all duration-300\r
                  group\r
                `,children:[e.jsx("div",{className:`\r
                  w-12 h-12 mx-auto mb-4\r
                  flex items-center justify-center\r
                  text-accent text-xl\r
                  bg-accent/10 rounded-xl\r
                  group-hover:bg-accent group-hover:text-primary-dark\r
                  transition-all duration-300\r
                  group-hover:scale-110\r
                `,children:s.icon}),e.jsx("h3",{className:`\r
                  font-heading font-semibold\r
                  text-base text-text-heading mb-2\r
                `,children:s.title}),e.jsx("p",{className:"text-text-body text-sm leading-relaxed",children:s.description})]},u))})]})}),e.jsx(qt,{}),e.jsx("section",{className:"py-20",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsx(E,{subtitle:"Common Questions",title:"Frequently Asked Questions",description:"Quick answers to help you get started",align:"center",gradient:!0}),e.jsx("div",{className:"max-w-3xl mx-auto mt-12",children:o.map((s,u)=>e.jsx(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:u*.08},className:"mb-3",children:e.jsxs(a.button,{onClick:()=>l(i===u?null:u),className:`
                    w-full text-left
                    p-5 md:p-6
                    bg-primary-light/30 
                    border rounded-xl
                    transition-all duration-300
                    group
                    ${i===u?"border-accent/30 bg-accent/5":"border-border hover:border-accent/20"}
                  `,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:`
                      font-heading font-semibold
                      text-base md:text-lg pr-4
                      transition-colors duration-300
                      ${i===u?"text-accent":"text-text-heading group-hover:text-accent"}
                    `,children:s.question}),e.jsx(a.div,{animate:{rotate:i===u?45:0},transition:{duration:.3},className:`
                        w-8 h-8 flex-shrink-0
                        flex items-center justify-center
                        rounded-lg
                        transition-colors duration-300
                        ${i===u?"bg-accent text-primary-dark":"bg-primary/50 text-text-body"}
                      `,children:e.jsx("span",{className:"text-lg font-light",children:"+"})})]}),e.jsx(W,{children:i===u&&e.jsx(a.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3,ease:"easeInOut"},className:"overflow-hidden",children:e.jsx("div",{className:`\r
                          pt-4 mt-4\r
                          border-t border-border\r
                        `,children:e.jsx("p",{className:"text-text-body text-sm leading-relaxed",children:s.answer})})})})]})},u))}),e.jsxs(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mt-10",children:[e.jsx("p",{className:"text-text-body text-sm mb-4",children:"Still have questions?"}),e.jsxs(a.a,{href:`https://wa.me/${t}?text=${encodeURIComponent("Hi! I have a question about your services.")}`,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},className:`\r
                inline-flex items-center gap-2\r
                px-6 py-3\r
                bg-green-600/20 hover:bg-green-600\r
                border border-green-500/30\r
                text-green-400 hover:text-white\r
                rounded-xl\r
                text-sm font-medium\r
                transition-all duration-300\r
              `,children:[e.jsx(J,{size:18}),e.jsx("span",{children:"Ask me on WhatsApp"})]})]})]})}),e.jsx("section",{className:"py-20",children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:`\r
            bg-gradient-to-br from-primary-light to-primary\r
            border border-border\r
            rounded-3xl\r
            p-12 md:p-16 text-center\r
            relative overflow-hidden\r
          `,children:[e.jsxs("div",{className:"absolute inset-0",children:[e.jsx("div",{className:`\r
                absolute top-1/2 left-1/2\r
                -translate-x-1/2 -translate-y-1/2\r
                w-96 h-96\r
                bg-accent/5 rounded-full\r
                blur-3xl\r
              `}),e.jsx("div",{className:`\r
                absolute top-0 right-0\r
                w-64 h-64\r
                bg-green-500/5 rounded-full\r
                blur-3xl\r
              `}),e.jsx("div",{className:`\r
                absolute inset-0 opacity-5\r
              `,style:{backgroundImage:`
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,backgroundSize:"40px 40px"}})]}),e.jsx(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"relative z-10",children:e.jsxs("div",{className:`\r
                inline-flex items-center gap-2\r
                px-4 py-2 mb-6\r
                bg-accent/10 border border-accent/20\r
                rounded-full\r
              `,children:[e.jsx(de,{className:"text-accent",size:14}),e.jsx("span",{className:"font-mono text-xs text-accent uppercase tracking-wider",children:"Let's Start"})]})}),e.jsxs(a.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1},className:`\r
                font-heading font-bold\r
                text-3xl md:text-4xl lg:text-5xl\r
                text-text-heading\r
                mb-6\r
                relative z-10\r
              `,children:["Ready to Start Your",e.jsx("br",{}),e.jsx("span",{className:`\r
                bg-gradient-to-r from-accent to-green-400\r
                bg-clip-text text-transparent\r
              `,children:"Next Project?"})]}),e.jsx(a.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},className:`\r
                text-text-body text-lg\r
                max-w-2xl mx-auto\r
                mb-10\r
                relative z-10\r
              `,children:"Don't let your ideas stay as ideas. Let's transform them into powerful digital experiences that make an impact."}),e.jsxs(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.3},className:`\r
                flex flex-col sm:flex-row \r
                items-center justify-center \r
                gap-4 relative z-10\r
              `,children:[e.jsxs(a.a,{href:"#contact",whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},className:`\r
                  inline-flex items-center gap-3\r
                  px-8 py-4\r
                  bg-accent hover:bg-accent-hover\r
                  text-primary-dark font-semibold\r
                  rounded-xl\r
                  shadow-lg shadow-accent/20\r
                  transition-colors duration-300\r
                `,children:[e.jsx(Ee,{size:18}),e.jsx("span",{children:"Send Message"})]}),e.jsxs(a.a,{href:`https://wa.me/${t}?text=${encodeURIComponent("Hi! I'm ready to start a project. Let's discuss!")}`,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},className:`\r
                  inline-flex items-center gap-3\r
                  px-8 py-4\r
                  bg-green-600 hover:bg-green-500\r
                  text-white font-semibold\r
                  rounded-xl\r
                  shadow-lg shadow-green-600/20\r
                  transition-colors duration-300\r
                `,children:[e.jsx(J,{size:20}),e.jsx("span",{children:"WhatsApp Now"})]}),e.jsx(N,{variant:"secondary",size:"lg",href:"/portfolio",children:"View Portfolio"})]})]})})})]})},yi=[{title:"Information I Collect",content:"When you contact me through this website, I may receive your name, email address, phone number, project details, and any message you choose to share."},{title:"How Information Is Used",content:"Your information is used only to respond to inquiries, discuss project opportunities, provide requested support, and maintain communication related to my services."},{title:"Data Protection",content:"I do not sell or trade your personal information. Reasonable steps are taken to protect submitted data and keep access limited to legitimate business communication."},{title:"Third-Party Services",content:"This site may use trusted third-party services such as EmailJS or hosting providers to deliver messages and operate the website. They only process the data needed to perform their service."},{title:"Your Rights",content:"If you want your submitted information updated or removed, you can contact me directly and I will handle the request as soon as reasonably possible."}],vi=()=>(K({title:"Privacy Policy | Hamad Hussain",description:"Read the privacy policy for Hamad Hussain portfolio website and contact forms."}),e.jsx(a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"pt-24 pb-20",children:e.jsxs("section",{className:"relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-green-500/5"}),e.jsx("div",{className:"container mx-auto px-6 relative z-10",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 mb-6 bg-accent/10 border border-accent/20 rounded-full",children:[e.jsx(Oe,{className:"text-accent",size:14}),e.jsx("span",{className:"font-mono text-xs text-accent uppercase tracking-[0.2em]",children:"Privacy"})]}),e.jsx("h1",{className:"font-heading font-bold text-4xl md:text-5xl text-text-heading mb-6",children:"Privacy Policy"}),e.jsx("p",{className:"text-text-body text-lg leading-relaxed max-w-3xl",children:"This policy explains what information may be collected through this website and how it is used. The goal is simple: keep communication clear, secure, and limited to legitimate project-related use."}),e.jsx("div",{className:"mt-12 grid gap-6",children:yi.map(t=>e.jsxs("div",{className:"bg-primary-light/20 border border-border rounded-2xl p-6 md:p-8",children:[e.jsx("h2",{className:"font-heading font-semibold text-2xl text-text-heading mb-3",children:t.title}),e.jsx("p",{className:"text-text-body leading-relaxed",children:t.content})]},t.title))}),e.jsx("div",{className:"mt-8 bg-primary-light/20 border border-border rounded-2xl p-6 md:p-8",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent shrink-0",children:e.jsx(X,{size:20})}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-heading font-semibold text-xl text-text-heading mb-2",children:"Questions About Privacy"}),e.jsx("p",{className:"text-text-body leading-relaxed",children:"If you have any privacy-related question or want your submitted data reviewed or removed, you can reach out through the contact page."})]})]})}),e.jsxs("div",{className:"mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4",children:[e.jsx(N,{variant:"primary",size:"lg",href:"/contact",children:"Contact Me"}),e.jsx(L,{to:"/terms",className:"text-text-body hover:text-accent transition-colors",children:"Read Terms of Service"})]})]})})]})})),ji=[{title:"Website Use",content:"By using this website, you agree to use it lawfully and respectfully. The site is intended for portfolio viewing, service information, and business inquiries."},{title:"Project Discussions",content:"Sending a message through this website does not automatically create a client relationship. Project work begins only after both sides agree on scope, timing, and terms."},{title:"Intellectual Property",content:"Unless stated otherwise, the content, branding, layouts, and showcased work on this website may not be copied, republished, or redistributed without permission."},{title:"Accuracy of Information",content:"I aim to keep project details and service information accurate, but content may change over time as services evolve, new work is published, or portfolio items are updated."},{title:"Limitation of Liability",content:"This website is provided as-is for showcasing work and receiving inquiries. I am not liable for indirect damages caused by temporary downtime, third-party service interruptions, or reliance on informational content alone."}],wi=()=>(K({title:"Terms of Service | Hamad Hussain",description:"Review the terms of service for using the Hamad Hussain portfolio website and contacting for project work."}),e.jsx(a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"pt-24 pb-20",children:e.jsxs("section",{className:"relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-accent/5"}),e.jsx("div",{className:"container mx-auto px-6 relative z-10",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 mb-6 bg-accent/10 border border-accent/20 rounded-full",children:[e.jsx(fr,{className:"text-accent",size:14}),e.jsx("span",{className:"font-mono text-xs text-accent uppercase tracking-[0.2em]",children:"Terms"})]}),e.jsx("h1",{className:"font-heading font-bold text-4xl md:text-5xl text-text-heading mb-6",children:"Terms of Service"}),e.jsx("p",{className:"text-text-body text-lg leading-relaxed max-w-3xl",children:"These terms outline the general rules for using this portfolio website and contacting me about freelance, development, or collaboration opportunities."}),e.jsx("div",{className:"mt-12 grid gap-6",children:ji.map(t=>e.jsxs("div",{className:"bg-primary-light/20 border border-border rounded-2xl p-6 md:p-8",children:[e.jsx("h2",{className:"font-heading font-semibold text-2xl text-text-heading mb-3",children:t.title}),e.jsx("p",{className:"text-text-body leading-relaxed",children:t.content})]},t.title))}),e.jsxs("div",{className:"mt-8 grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-primary-light/20 border border-border rounded-2xl p-6",children:[e.jsx("div",{className:"w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent mb-4",children:e.jsx(Se,{size:20})}),e.jsx("h2",{className:"font-heading font-semibold text-xl text-text-heading mb-2",children:"Clear Communication"}),e.jsx("p",{className:"text-text-body leading-relaxed",children:"Project timelines, pricing, revisions, and deliverables are confirmed separately for each client engagement."})]}),e.jsxs("div",{className:"bg-primary-light/20 border border-border rounded-2xl p-6",children:[e.jsx("div",{className:"w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent mb-4",children:e.jsx(Oe,{size:20})}),e.jsx("h2",{className:"font-heading font-semibold text-xl text-text-heading mb-2",children:"Respectful Use"}),e.jsx("p",{className:"text-text-body leading-relaxed",children:"Spam, abuse, scraping, impersonation, or misuse of this site or its contact channels is not permitted."})]})]}),e.jsxs("div",{className:"mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4",children:[e.jsx(N,{variant:"primary",size:"lg",href:"/contact",children:"Discuss a Project"}),e.jsx(L,{to:"/privacy",className:"text-text-body hover:text-accent transition-colors",children:"View Privacy Policy"})]})]})})]})})),Ni=()=>e.jsx(a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:`\r
        min-h-screen\r
        flex items-center justify-center\r
        pt-24 pb-20\r
      `,children:e.jsx("div",{className:"container mx-auto px-6",children:e.jsxs("div",{className:`\r
          max-w-2xl mx-auto\r
          text-center\r
        `,children:[e.jsx(a.div,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:200,damping:20},className:`\r
              text-9xl font-heading font-bold\r
              bg-gradient-to-r from-accent to-accent-hover\r
              bg-clip-text text-transparent\r
              mb-8\r
            `,children:"404"}),e.jsx(a.h1,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.1},className:`\r
              font-heading font-bold\r
              text-3xl md:text-4xl\r
              text-text-heading\r
              mb-6\r
            `,children:"Page Not Found"}),e.jsx(a.p,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2},className:`\r
              text-text-body text-lg\r
              max-w-md mx-auto\r
              mb-10\r
            `,children:"The page you're looking for doesn't exist or has been moved. Let's get you back on track."}),e.jsxs(a.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},className:`\r
              flex flex-col sm:flex-row\r
              items-center justify-center\r
              gap-4\r
            `,children:[e.jsx(N,{variant:"primary",size:"lg",leftIcon:e.jsx(yr,{}),href:"/",children:"Back to Home"}),e.jsx(N,{variant:"secondary",size:"lg",leftIcon:e.jsx(le,{}),onClick:()=>window.history.back(),children:"Go Back"})]}),e.jsxs(a.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4},className:`\r
              mt-12 pt-12 border-t border-border\r
            `,children:[e.jsx("p",{className:`\r
              text-text-body text-sm mb-4\r
            `,children:"You might be looking for:"}),e.jsx("div",{className:`\r
              flex flex-wrap justify-center\r
              gap-4\r
            `,children:[{label:"Portfolio",href:"/portfolio"},{label:"Services",href:"/services"},{label:"About",href:"/about"},{label:"Contact",href:"/contact"}].map((t,n)=>e.jsx("a",{href:t.href,className:`\r
                    text-accent hover:text-accent-hover\r
                    transition-colors duration-300\r
                  `,children:t.label},n))})]})]})})}),ki=()=>{const[t,n]=j.useState(!1);j.useEffect(()=>{const o=()=>{n(window.pageYOffset>400)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return e.jsx(a.button,{onClick:r,initial:{opacity:0,scale:.8,y:20},animate:{opacity:t?1:0,scale:t?1:.8,y:t?0:20,pointerEvents:t?"auto":"none"},whileHover:{scale:1.1},whileTap:{scale:.9},className:`
        fixed bottom-8 right-8 z-50
        w-14 h-14
        flex items-center justify-center
        bg-accent text-primary-dark
        rounded-full
        shadow-lg shadow-accent/30
        hover:shadow-xl hover:shadow-accent/40
        transition-shadow duration-300
        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary
      `,"aria-label":"Scroll to top",children:e.jsx(cr,{size:24})})},G=({children:t})=>e.jsx(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},transition:{duration:.4,ease:[.4,0,.2,1]},className:"min-h-screen",children:t});function Si(){const t=pt();return j.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[t.pathname]),e.jsxs("div",{className:`
        min-h-screen
        bg-primary text-text-body
        font-sans
        flex flex-col
        relative
      `,children:[e.jsx(on,{}),e.jsx("main",{className:"flex-grow",children:e.jsx(W,{mode:"wait",children:e.jsxs(Zt,{location:t,children:[e.jsx(U,{path:"/",element:e.jsx(G,{children:e.jsx(Oa,{})})}),e.jsx(U,{path:"/about",element:e.jsx(G,{children:e.jsx(Ya,{})})}),e.jsx(U,{path:"/services",element:e.jsx(G,{children:e.jsx(Xa,{})})}),e.jsx(U,{path:"/portfolio",element:e.jsx(G,{children:e.jsx(Ka,{})})}),e.jsx(U,{path:"/portfolio/:projectId",element:e.jsx(G,{children:e.jsx(Za,{})})}),e.jsx(U,{path:"/blog",element:e.jsx(G,{children:e.jsx(ri,{})})}),e.jsx(U,{path:"/blog/:slug",element:e.jsx(G,{children:e.jsx(xi,{})})}),e.jsx(U,{path:"/contact",element:e.jsx(G,{children:e.jsx(bi,{})})}),e.jsx(U,{path:"/privacy",element:e.jsx(G,{children:e.jsx(vi,{})})}),e.jsx(U,{path:"/terms",element:e.jsx(G,{children:e.jsx(wi,{})})}),e.jsx(U,{path:"*",element:e.jsx(G,{children:e.jsx(Ni,{})})})]},t.pathname)})}),e.jsx(ln,{}),e.jsx(ki,{}),!1]})}const Ut=document.getElementById("root");if(!Ut)throw new Error("Root element not found");const Ci=Re.createRoot(Ut);Ci.render(e.jsx(T.StrictMode,{children:e.jsx(er,{children:e.jsx(Si,{})})}));
//# sourceMappingURL=index-DCejgkHg.js.map
