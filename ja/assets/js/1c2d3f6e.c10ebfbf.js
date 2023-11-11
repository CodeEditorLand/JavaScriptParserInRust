"use strict";(self.webpackChunkjavascript_parser_in_rust=self.webpackChunkjavascript_parser_in_rust||[]).push([[472],{2581:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var n=s(1527),t=s(7660);const i={title:"Rome Tools"},c=void 0,l={permalink:"/javascript-parser-in-rust/ja/blog/rome",editUrl:"https://github.com/oxc-project/javascript-parser-in-rust/tree/main/blog/rome.md",source:"@site/i18n/ja/docusaurus-plugin-content-blog/rome.md",title:"Rome Tools",description:"Rome \u306f\u3001JavaScript \u3068 TypeScript \u306e\u30d1\u30fc\u30b9\u306b\u69d8\u3005\u306a\u6280\u8853\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u305d\u308c\u3089\u3092\u7406\u89e3\u3057\u3084\u3059\u3044\u9806\u5e8f\u3067\u8981\u7d04\u3057\u3066\u3044\u307e\u3059\u3002",date:"2023-11-11T11:17:52.000Z",formattedDate:"2023\u5e7411\u670811\u65e5",tags:[],readingTime:3.715,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Rome Tools"},unlisted:!1,nextItem:{title:"\u6587\u6cd5",permalink:"/javascript-parser-in-rust/ja/blog/grammar"}},o={authorsImageUrls:[]},a=[{value:"\u6b74\u53f2",id:"\u6b74\u53f2",level:2},{value:"\u5177\u8c61\u69cb\u6587\u6728 (CST)",id:"\u5177\u8c61\u69cb\u6587\u6728-cst",level:2},{value:"\u6587\u6cd5",id:"\u6587\u6cd5",level:2},{value:"\u30a8\u30f3\u30c8\u30ea\u30fc\u30dd\u30a4\u30f3\u30c8",id:"\u30a8\u30f3\u30c8\u30ea\u30fc\u30dd\u30a4\u30f3\u30c8",level:2},{value:"\u30b3\u30f3\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3",id:"\u30b3\u30f3\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Rome \u306f\u3001JavaScript \u3068 TypeScript \u306e\u30d1\u30fc\u30b9\u306b\u69d8\u3005\u306a\u6280\u8853\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u305d\u308c\u3089\u3092\u7406\u89e3\u3057\u3084\u3059\u3044\u9806\u5e8f\u3067\u8981\u7d04\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,n.jsx)(r.h2,{id:"\u6b74\u53f2",children:"\u6b74\u53f2"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Rome \u306e\u30b3\u30fc\u30c9\u30d9\u30fc\u30b9\u306f TypeScript \u304b\u3089 Rust \u306b\u66f8\u304d\u76f4\u3055\u308c\u307e\u3057\u305f\u3002\u8a73\u7d30\u306f ",(0,n.jsx)(r.a,{href:"https://rome.tools/blog/2021/09/21/rome-will-be-rewritten-in-rust",children:"Rome will be rewritten in Rust"})," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:["\u3053\u306e\u6c7a\u5b9a\u306f\u3001",(0,n.jsx)(r.a,{href:"https://github.com/rslint/rslint",children:"rslint"})," \u3068 ",(0,n.jsx)(r.a,{href:"https://github.com/rust-lang/rust-analyzer",children:"rust-analyzer"})," \u306e\u4f5c\u8005\u3068\u306e\u8a71\u3057\u5408\u3044\u306e\u7d50\u679c\u884c\u308f\u308c\u307e\u3057\u305f\u3002"]}),"\n",(0,n.jsx)(r.li,{children:"rust-analyzer \u306f\u3001IDE \u306e\u3088\u3046\u306a\u30c4\u30fc\u30eb\u3092\u5177\u8c61\u69cb\u6587\u6728\u3092\u30d9\u30fc\u30b9\u306b\u69cb\u7bc9\u3067\u304d\u308b\u3053\u3068\u3092\u8a3c\u660e\u3057\u307e\u3057\u305f\u3002"}),"\n",(0,n.jsx)(r.li,{children:"rslint \u306f\u3001rust-analyzer \u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u7528\u3044\u3066\u3001 Rust \u3067 JavaScript \u306e\u30d1\u30fc\u30b5\u30fc\u3092\u5b9f\u88c5\u3067\u304d\u308b\u3053\u3068\u3092\u8a3c\u660e\u3057\u307e\u3057\u305f\u3002"}),"\n",(0,n.jsx)(r.li,{children:"Rome \u306f\u3001\u4f5c\u8005\u306e\u8a31\u53ef\u3092\u5f97\u3066 rslint \u306e\u30b3\u30fc\u30c9\u30d9\u30fc\u30b9\u3092\u81ea\u5206\u305f\u3061\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u79fb\u690d\u3057\u307e\u3057\u305f\u3002"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"\u5177\u8c61\u69cb\u6587\u6728-cst",children:"\u5177\u8c61\u69cb\u6587\u6728 (CST)"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\u30d9\u30fc\u30b9\u30e9\u30a4\u30d6\u30e9\u30ea\u306f ",(0,n.jsx)(r.a,{href:"https://github.com/rust-analyzer/rowan",children:"rowan"})," \u3068\u547c\u3070\u308c\u3066\u304a\u308a\u3001\u8a73\u7d30\u306f ",(0,n.jsx)(r.a,{href:"https://github.com/rust-lang/rust-analyzer/blob/master/docs/dev/syntax.md",children:"overview of rowan"})," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:["Rowan (red-green trees \u3068\u3057\u3066\u3082\u77e5\u3089\u308c\u3066\u3044\u308b) \u306f\u3001\u8d64\u3044\u30d9\u30ea\u30fc\u3092\u5b9f\u3089\u305b\u308b ",(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Rowan",children:"Rowan"})," \u3068\u3044\u3046\u6728\u306b\u3061\u306a\u3093\u3067\u540d\u4ed8\u3051\u3089\u308c\u307e\u3057\u305f\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:["red-green trees \u306e\u7531\u6765\u306f\u3001C# \u306e\u4f5c\u8005\u306b\u3088\u308b",(0,n.jsx)(r.a,{href:"https://ericlippert.com/2012/06/08/red-green-trees/",children:"\u30d6\u30ed\u30b0\u8a18\u4e8b"}),"\u3067\u8aac\u660e\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(r.li,{children:"Rowan \u306f\u3001\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u3059\u3079\u3066\u3092\u8a18\u8ff0\u3059\u308b\u640d\u5931\u306e\u306a\u3044 CST \u3092\u5b9a\u7fa9\u3057\u3001\u69cb\u6587\u6728\u306e\u89aa\u3001\u5b50\u3001\u5144\u5f1f\u30ce\u30fc\u30c9\u306a\u3069\u3092\u8d70\u67fb\u3059\u308b\u4e00\u9023\u306e API \u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(r.li,{children:["AST \u3088\u308a\u3082 CST \u3092\u5229\u7528\u3059\u308b\u5229\u70b9\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.jsx)(r.a,{href:"https://rdambrosio016.github.io/rust/2020/09/18/pure-ast-based-linting-sucks.html",children:"Pure AST based linting sucks"})," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,n.jsx)(r.li,{children:"CST \u306f\u5b8c\u5168\u306b\u56de\u5fa9\u53ef\u80fd\u306a\u30d1\u30fc\u30b5\u30fc\u3092\u69cb\u7bc9\u3059\u308b\u624b\u6bb5\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"\u6587\u6cd5",children:"\u6587\u6cd5"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["AST \u3068\u540c\u69d8\u306b\u6587\u6cd5\u3092\u5b9a\u7fa9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u6587\u6cd5\u306f\u3001",(0,n.jsx)(r.a,{href:"https://github.com/rome/tools/tree/main/xtask/codegen",children:"xtask/codegen"})," \u3092\u4f7f\u7528\u3057\u3066\u81ea\u52d5\u751f\u6210\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:["\u6587\u6cd5\u306f ",(0,n.jsx)(r.a,{href:"https://github.com/rust-analyzer/ungrammar",children:"ungrammar"})," \u3068\u3044\u3046 DSL \u304b\u3089\u751f\u6210\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:["\u5165\u529b\u306e ",(0,n.jsx)(r.code,{children:"ungrammar"})," \u306e \u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u306f\u3001",(0,n.jsx)(r.a,{href:"https://github.com/rome/tools/blob/main/xtask/codegen/js.ungram",children:"xtask/codegen/js.ungram"})," \u306b\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:["\u751f\u6210\u3055\u308c\u308b\u30b3\u30fc\u30c9\u306f\u3001 ",(0,n.jsx)(r.a,{href:"https://github.com/rome/tools/tree/main/crates/rome_js_syntax/src/generated",children:"rome_js_syntax/src/generated"})," \u306b\u3042\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"\u30a8\u30f3\u30c8\u30ea\u30fc\u30dd\u30a4\u30f3\u30c8",children:"\u30a8\u30f3\u30c8\u30ea\u30fc\u30dd\u30a4\u30f3\u30c8"}),"\n",(0,n.jsx)(r.p,{children:"Rome \u306e\u30b3\u30fc\u30c9\u30d9\u30fc\u30b9\u306f\u5927\u304d\u304f\u306a\u308a\u3001\u30d1\u30fc\u30b5\u30fc\u306e\u30a8\u30f3\u30c8\u30ea\u30fc\u30dd\u30a4\u30f3\u30c8\u3092\u898b\u3064\u3051\u308b\u306e\u304c\u5c11\u3057\u96e3\u3057\u304f\u306a\u3063\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(r.p,{children:["\u521d\u3081\u3066\u306e\u65b9\u306e\u305f\u3081\u306b\u3001\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u30d0\u30a4\u30ca\u30ea\u306e\u30a8\u30f3\u30c8\u30ea\u30fc\u30dd\u30a4\u30f3\u30c8\u3067\u3042\u308b ",(0,n.jsx)(r.code,{children:"rome_cli"})," \u30af\u30ec\u30fc\u30c8\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"cargo run -p rome_cli\n\ntouch test.js\ncargo run -p rome_cli -- check ./test.js\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"rome_cli"})," \u306f\u6700\u7d42\u7684\u306b ",(0,n.jsx)(r.code,{children:"rome_js_parser::parse"})," \u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-rust",metastring:"reference",children:"https://github.com/rome/tools/blob/9815467c66688773bc1bb6ef9a5b2d86ca7b3682/crates/rome_js_parser/src/parse.rs#L178-L187\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u5b9f\u969b\u306e\u30d1\u30fc\u30b5\u30fc\u306e\u30b3\u30fc\u30c9\u306f\u3053\u3061\u3089\u306e\u3088\u3046\u306b\u59cb\u307e\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-rust",metastring:"reference",children:"https://github.com/rome/tools/blob/9815467c66688773bc1bb6ef9a5b2d86ca7b3682/crates/rome_js_parser/src/syntax/program.rs#L14-L17\n"})}),"\n",(0,n.jsx)(r.h2,{id:"\u30b3\u30f3\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3",children:"\u30b3\u30f3\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://github.com/rome/tools/blob/main/CONTRIBUTING.md",children:"CONTRIBUTING.md"})," \u306b\u306f\u3001\u30b3\u30f3\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u65b9\u6cd5\u306e\u8aac\u660e\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://rome.github.io/tools/rome_js_parser/index.html",children:"rome_js_parser crate doc"})," \u306b\u306f\u3001\u30d1\u30fc\u30b5\u30fc\u306b\u95a2\u3059\u308b\u5b9f\u88c5\u306e\u8aac\u660e\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:["\u30d1\u30fc\u30b5\u30fc\u306e\u30c6\u30b9\u30c8\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.jsx)(r.a,{href:"https://github.com/rome/tools/tree/main/xtask/codegen#cargo-codegen-test",children:(0,n.jsx)(r.code,{children:"cargo codegen test"})})," \u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:["\u9069\u5408\u30c6\u30b9\u30c8\u306b\u3064\u3044\u3066\u306f\u3001 ",(0,n.jsx)(r.a,{href:"https://github.com/rome/tools/tree/main/xtask/coverage",children:(0,n.jsx)(r.code,{children:"cargo coverage"})})," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:["\u5206\u304b\u3089\u306a\u3044\u3053\u3068\u304c\u3042\u308c\u3070\u3001",(0,n.jsx)(r.a,{href:"https://discord.com/invite/rome",children:"Discord \u30b5\u30fc\u30d0\u30fc"})," \u3067\u81ea\u7531\u306b\u8cea\u554f\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsx)(r.p,{children:"JavaScript / TypeScript \u30d1\u30fc\u30b5\u30fc\u306f 99% \u5b8c\u6210\u3057\u3066\u3044\u307e\u3059\u3002\u30b3\u30f3\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u6700\u5584\u306e\u65b9\u6cd5\u306f\u3001\u72ec\u81ea\u306e\u30b3\u30fc\u30c9\u30d9\u30fc\u30b9\u3067 Rome \u3092\u30c6\u30b9\u30c8\u3059\u308b\u304b\u3001Github \u306e\u554f\u984c\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u3067\u3059\u3002"})})]})}function d(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},7660:(e,r,s)=>{s.d(r,{Z:()=>l,a:()=>c});var n=s(959);const t={},i=n.createContext(t);function c(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);