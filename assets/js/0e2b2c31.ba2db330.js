"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[6695],{9341:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var i=t(4848),s=t(8453);const a={},r="Extend GraphQL Schema",d={id:"guides/add-custom-functionality/extend-graphql",title:"Extend GraphQL Schema",description:"Sum Function",source:"@site/versioned_docs/version-1.53.3/guides/add-custom-functionality/extend-graphql.md",sourceDirName:"guides/add-custom-functionality",slug:"/guides/add-custom-functionality/extend-graphql",permalink:"/docs/guides/add-custom-functionality/extend-graphql",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.53.3/guides/add-custom-functionality/extend-graphql.md",tags:[],version:"1.53.3",frontMatter:{},sidebar:"Learn",previous:{title:"Prerequisites",permalink:"/docs/guides/add-custom-functionality/prerequisites"},next:{title:"Extend REST API",permalink:"/docs/guides/add-custom-functionality/extend-rest"}},l={},c=[{value:"Sum Function",id:"sum-function",level:2},{value:"Extend Entities API",id:"extend-entities-api",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"extend-graphql-schema",children:"Extend GraphQL Schema"})}),"\n",(0,i.jsx)(n.h2,{id:"sum-function",children:"Sum Function"}),"\n",(0,i.jsxs)(n.p,{children:["Copy and paste this code into ",(0,i.jsx)(n.code,{children:"./sample-plugin.js"})," file"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"'use strict'\nmodule.exports = async(app, opts) => {\n  app.graphql.extendSchema(`\n    extend type Query {\n      add(x: Int, y: Int): Int\n    }\n  `)\n  app.graphql.defineResolvers({\n    Query: {\n      add: async (_, { x, y }) => x + y\n    }\n  })\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will add a new GraphQL query called ",(0,i.jsx)(n.code,{children:"add"})," which will simply add the two inputs ",(0,i.jsx)(n.code,{children:"x"})," and ",(0,i.jsx)(n.code,{children:"y"})," provided."]}),"\n",(0,i.jsx)(n.p,{children:"You don't need to reload the server, since it will watch this file and hot-reload itself.\nLet's query the server with the following body"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"\nquery{\n  add(x: 1, y: 2)\n}\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.code,{children:"curl"})," command to run this query"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ curl --location --request POST 'http://localhost:3042/graphql' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"query\":\"query{\\n    add(x: 1, y: 2)\\n}\"}'\n"})}),"\n",(0,i.jsx)(n.p,{children:"You will get this output, with the sum."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "add": 3\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"extend-entities-api",children:"Extend Entities API"}),"\n",(0,i.jsxs)(n.p,{children:["Let's implement a ",(0,i.jsx)(n.code,{children:"getPageByTitle"})," query"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"'use strict'\nmodule.exports = async(app, opts) => {\n  app.graphql.extendSchema(`\n    extend type Query {\n      getPageByTitle(title: String): Page\n    }\n  `)\n  app.graphql.defineResolvers({\n    Query: {\n      getPageByTitle: async(_, { title }) => {\n        const res = await app.platformatic.entities.page.find({\n          where: {\n            title: {\n              eq: title\n            }\n          }\n        })\n        if (res) {\n          return res[0]\n        }\n        return null\n      }\n    }\n  })\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Page"})," GraphQL type is already defined by Platformatic DB on start."]}),"\n",(0,i.jsx)(n.p,{children:"We are going to run this code against this GraphQL query"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'query{\n    getPageByTitle(title: "First Page"){\n        id\n        title\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.code,{children:"curl"})," command to run this query"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ curl --location --request POST 'http://localhost:3042/graphql' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"query\":\"query{\\n    getPageByTitle(title: \\\"First Page\\\"){\\n        id\\n        title\\n    }\\n}\"}'\n"})}),"\n",(0,i.jsx)(n.p,{children:"You will get an output similar to this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "data": {\n        "getPageByTitle": {\n            "id": "1",\n            "title": "First Page"\n        }\n    }\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var i=t(6540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);