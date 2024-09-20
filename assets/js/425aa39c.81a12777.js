"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[4899],{9565:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=i(4848),s=i(8453);const o={},r="Ignoring Entities and Fields",a={id:"packages/sql-openapi/ignore",title:"Ignoring Entities and Fields",description:"@platformatic/sql-openapi allows to selectively ignore entities and fields in your API",source:"@site/versioned_docs/version-1.53.3/packages/sql-openapi/ignore.md",sourceDirName:"packages/sql-openapi",slug:"/packages/sql-openapi/ignore",permalink:"/docs/packages/sql-openapi/ignore",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.53.3/packages/sql-openapi/ignore.md",tags:[],version:"1.53.3",frontMatter:{},sidebar:"docs",previous:{title:"API",permalink:"/docs/packages/sql-openapi/api"},next:{title:"Explicitly including entities",permalink:"/docs/packages/sql-openapi/explicit-include"}},l={},d=[{value:"Ignoring Entities",id:"ignoring-entities",level:2},{value:"Ignoring Individual Fields",id:"ignoring-individual-fields",level:2},{value:"Ignoring entity routes",id:"ignoring-entity-routes",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"ignoring-entities-and-fields",children:"Ignoring Entities and Fields"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@platformatic/sql-openapi"})," allows to selectively ignore entities and fields in your API"]}),"\n",(0,t.jsx)(n.h2,{id:"ignoring-entities",children:"Ignoring Entities"}),"\n",(0,t.jsx)(n.p,{children:"To ignore entities, use the following configuration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"app.register(require('@platformatic/sql-openapi'), {\n  ignore: {\n    category: true\n  }\n})\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the ",(0,t.jsx)(n.code,{children:"category"})," entity will be ignored and not included in the API."]}),"\n",(0,t.jsx)(n.h2,{id:"ignoring-individual-fields",children:"Ignoring Individual Fields"}),"\n",(0,t.jsx)(n.p,{children:"To ignore specific fields within an entity, use the configuration below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"app.register(require('@platformatic/sql-openapi'), {\n  ignore: {\n    category: {\n      name: true\n    }\n  }\n})\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the ",(0,t.jsx)(n.code,{children:"name"})," field within the ",(0,t.jsx)(n.code,{children:"category"})," entity will be ignored and not included in the API."]}),"\n",(0,t.jsx)(n.h2,{id:"ignoring-entity-routes",children:"Ignoring entity routes"}),"\n",(0,t.jsx)(n.p,{children:"You can also ignore specific auto-generated routes for an entity."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"app.register(require('@platformatic/sql-openapi'), {\n  ignoreRoutes: {\n    { method: 'GET', path: '/categories' },\n    { method: 'GET', path: '/categories/{id}' },\n    { method: 'DELETE', path: '/categories/{id}' },\n    { method: 'DELETE', path: '/posts/{id}' }\n  }\n})\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Here the routes for ",(0,t.jsx)(n.code,{children:"categories"})," and ",(0,t.jsx)(n.code,{children:"posts"})," will be ignored and not available in the API."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(6540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);