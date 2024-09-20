"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[3942],{7850:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(4848),s=r(8453);const a={title:"FAQs",label:"Welcome to Platformatic"},n="FAQs",i={id:"FAQs",title:"FAQs",description:"How do I set up a custom authorization strategy in Platformatic?",source:"@site/versioned_docs/version-1.53.3/FAQs.md",sourceDirName:".",slug:"/FAQs",permalink:"/docs/FAQs",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.53.3/FAQs.md",tags:[],version:"1.53.3",frontMatter:{title:"FAQs",label:"Welcome to Platformatic"},sidebar:"Learn",previous:{title:"Glossary",permalink:"/docs/learn/glossary"}},l={},c=[{value:"How do I set up a custom authorization strategy in Platformatic?",id:"how-do-i-set-up-a-custom-authorization-strategy-in-platformatic",level:3},{value:"How do I handle dynamic roles in Platformatic?",id:"how-do-i-handle-dynamic-roles-in-platformatic",level:3},{value:"Can I use external services for dynamic role management in Platformatic?",id:"can-i-use-external-services-for-dynamic-role-management-in-platformatic",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"faqs",children:"FAQs"})}),"\n",(0,o.jsx)(t.h3,{id:"how-do-i-set-up-a-custom-authorization-strategy-in-platformatic",children:"How do I set up a custom authorization strategy in Platformatic?"}),"\n",(0,o.jsx)(t.p,{children:"To set up a custom authorization strategy in Platformatic, you use the addAuthStrategy method. This method allows you to define how the application should handle user sessions and roles. Here\u2019s an example of setting up a custom authorization strategy:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"app.addAuthStrategy({\n  name: 'custom-auth-strategy',\n  createSession: async (req, reply) => {\n    const user = ...\n\n    req.user = { id: user.id, role: user.role }\n  }\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Here, the ",(0,o.jsx)(t.code,{children:"createSession"})," function runs every time there is an HTTP request. It sets up the user session by retrieving the user\u2019s ID and role and assigning them to ",(0,o.jsx)(t.code,{children:"req.user"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"how-do-i-handle-dynamic-roles-in-platformatic",children:"How do I handle dynamic roles in Platformatic?"}),"\n",(0,o.jsx)(t.p,{children:"If your application uses dynamic roles, such as different roles for different workspaces, you can manage these roles programmatically. Here\u2019s how to approach it:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Set Up User Roles"}),": In your custom authorization strategy, store the user roles in the req.user object under the X-PLATFORMATIC-ROLE property (this property name can be configured). Use a comma-separated list for multiple roles."]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"req.user = { id: user.id, role: user.roles.join(',') };\n"})}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Configure Authorization:"}),": To use the roles, configure the authorization settings in Platformatic DB. You can specify the property name for roles using the roleKey configuration."]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yml",children:"authorization:\nroleKey: X-PLATFORMATIC-ROLE\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You can then implement programmatic rules to check the options of the user's workspace, for managing authorizations as ",(0,o.jsx)(t.a,{href:"https://www.cerbos.dev/blog/supercharging-your-policy-rules-with-self-service-custom-roles",children:"outlined here"}),". See the ",(0,o.jsx)(t.a,{href:"https://docs.platformatic.dev/docs/db/configuration/#authorization",children:"Platformatic DB docs"})," on how to use a different roleKey."]}),"\n",(0,o.jsx)(t.h3,{id:"can-i-use-external-services-for-dynamic-role-management-in-platformatic",children:"Can I use external services for dynamic role management in Platformatic?"}),"\n",(0,o.jsxs)(t.p,{children:["Yes, for more complex scenarios where roles vary significantly across different contexts (e.g., different workspaces), you might want to integrate an external service like ",(0,o.jsx)(t.a,{href:"https://github.com/platformatic/fastify-cerbos",children:"Cerbos"})," to handle dynamic role management and authorization. ",(0,o.jsx)(t.a,{href:"https://github.com/platformatic/fastify-cerbos",children:"Cerbos"})," allows you to load roles dynamically and manage authorizations programmatically."]}),"\n",(0,o.jsx)(t.p,{children:"###\xa0How does Platformatic run or compile the root-level files like index.js, which include the start and stop processes for setting up error handling and starting the services? This file also sets up handlers for SIGINT and SIGTERM signals. How does Platformatic take this file and run it?"}),"\n",(0,o.jsxs)(t.p,{children:["When you run ",(0,o.jsx)(t.code,{children:"platformatic start"}),", Platformatic does the following:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Parse Configuration"}),": Platformatic parses your configuration file to understand how your application is set up and what services need to be started."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Setup Signal Handlers"}),": It sets up signal handlers for SIGINT and SIGTERM to ensure your application can handle termination signals."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Executes Worker Thread"}),": Platformatic runs your code inside a worker thread. This allows Platformatic to monitor the execution of your application and provides the ability to automatically restart the worker thread if it crashes."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Automatic Restart"}),": If the worker thread running your code crashes, Platformatic automatically restarts it, ensuring that your services remain available with minimal downtime."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["All of these processes are open-source, so you can explore the code and contribute to the project on our ",(0,o.jsx)(t.a,{href:"https://github.com/platformatic/platformatic",children:"GitHub repository"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>i});var o=r(6540);const s={},a=o.createContext(s);function n(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);