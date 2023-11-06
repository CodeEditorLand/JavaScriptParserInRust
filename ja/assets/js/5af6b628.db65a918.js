"use strict";(self.webpackChunkjavascript_parser_in_rust=self.webpackChunkjavascript_parser_in_rust||[]).push([[719],{257:(t,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var e=n(1527),s=n(7660);const i={id:"intro",title:"\u306f\u3058\u3081\u306b"},a=void 0,o={id:"intro",title:"\u306f\u3058\u3081\u306b",description:"\u79c1\u305f\u3061\u306fJavaScript \u306e\u7b2c 3 \u306e\u6642\u4ee3\u306b\u3044\u3066\u3001\u6628\u4eca\u306e\u4e00\u822c\u7684\u306a\u50be\u5411\u3068\u3057\u3066 JavaScript \u306e\u30c4\u30fc\u30eb\u3092 Rust \u3084 Go \u3067\u4f5c\u6210\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5411\u4e0a\u3092\u56f3\u308b\u30c8\u30ec\u30f3\u30c9\u304c\u3042\u308a\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/intro",permalink:"/javascript-parser-in-rust/ja/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/oxc-project/javascript-parser-in-rust/tree/main/docs/intro.md",tags:[],version:"current",frontMatter:{id:"intro",title:"\u306f\u3058\u3081\u306b"},sidebar:"tutorialSidebar",next:{title:"\u6982\u8981",permalink:"/javascript-parser-in-rust/ja/docs/overview"}},c={},p=[];function u(t){const r={a:"a",p:"p",...(0,s.a)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(r.p,{children:["\u79c1\u305f\u3061\u306f",(0,e.jsx)(r.a,{href:"https://www.swyx.io/js-third-age/",children:"JavaScript \u306e\u7b2c 3 \u306e\u6642\u4ee3"}),"\u306b\u3044\u3066\u3001\u6628\u4eca\u306e\u4e00\u822c\u7684\u306a\u50be\u5411\u3068\u3057\u3066 JavaScript \u306e\u30c4\u30fc\u30eb\u3092 Rust \u3084 Go \u3067\u4f5c\u6210\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5411\u4e0a\u3092\u56f3\u308b\u30c8\u30ec\u30f3\u30c9\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,e.jsx)(r.p,{children:"\u305f\u3060\u3057 JavaScript \u306e\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3059\u308b\u3053\u3068\u306f\u96e3\u3057\u3044\u3053\u3068\u3067\u3042\u308a\u3001\u305d\u308c\u304c Rust \u306b\u3088\u308b\u3082\u306e\u3067\u3042\u308c\u3070\u5c1a\u66f4\u3067\u3059\u3002\n\u79c1\u306f\u3053\u306e\u3088\u3046\u306a\u6280\u8853\u306e\u7fd2\u5f97\u3092\u3059\u308b\u3046\u3048\u3067\u975e\u5e38\u306b\u591a\u304f\u306e\u82e6\u52b4\u3092\u3057\u307e\u3057\u305f\u306e\u3067\u3001\u540c\u3058\u3088\u3046\u306a\u82e6\u52b4\u3092\u3059\u308b\u4eba\u304c\u5c11\u306a\u3044\u3053\u3068\u3092\u9858\u3063\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,e.jsx)(r.p,{children:"\u79c1\u306f\u3001\u7686\u3055\u3093\u304c\u79c1\u3068\u540c\u3058\u82e6\u52b4\u3092\u3059\u308b\u3053\u3068\u306e\u306a\u3044\u3088\u3046\u306b\u3001\u3053\u306e\u30ac\u30a4\u30c9\u3092\u66f8\u304f\u3053\u3068\u306b\u3088\u3063\u3066\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u3078\u79c1\u306a\u308a\u306e\u8ca2\u732e\u3092\u3057\u305f\u3044\u3068\u601d\u3063\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,e.jsx)(r.p,{children:"Rust \u306e\u65b9\u306b\u306f\u307b\u3093\u306e\u3072\u3068\u63e1\u308a\u306e\u958b\u767a\u8005\u3057\u304b\u3044\u307e\u305b\u3093\u306e\u3067\u3001\u79c1\u305f\u3061\u304c\u8ab0\u3082\u304c\u697d\u3057\u3081\u308b\u3088\u308a\u826f\u3044\u9ad8\u901f\u306a\u30c4\u30fc\u30eb\u3092\u4f5c\u3063\u3066\u3044\u3051\u308b\u3088\u3046\u306b\u7686\u3055\u3093\u306b\u3082\u3053\u3053\u3078\u6765\u3066\u53c2\u52a0\u3057\u3066\u3044\u305f\u3060\u304d\u305f\u3044\u3067\u3059\u3002"}),"\n",(0,e.jsx)(r.p,{children:"\u2764\ufe0f \ud83e\udd80 \u2764\ufe0f"})]})}function d(t={}){const{wrapper:r}={...(0,s.a)(),...t.components};return r?(0,e.jsx)(r,{...t,children:(0,e.jsx)(u,{...t})}):u(t)}},7660:(t,r,n)=>{n.d(r,{Z:()=>o,a:()=>a});var e=n(959);const s={},i=e.createContext(s);function a(t){const r=e.useContext(i);return e.useMemo((function(){return"function"==typeof t?t(r):{...r,...t}}),[r,t])}function o(t){let r;return r=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),e.createElement(i.Provider,{value:r},t.children)}}}]);