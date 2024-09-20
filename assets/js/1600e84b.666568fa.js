"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[1399],{5782:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=t(4848),i=t(8453);const s={},o="Logging to ElasticSearch (or any other destination)",r={id:"guides/logging-to-elasticsearch",title:"Logging to ElasticSearch (or any other destination)",description:"This guide shows how to configure a Platformatic application to",source:"@site/versioned_docs/version-1.53.3/guides/logging-to-elasticsearch.md",sourceDirName:"guides",slug:"/guides/logging-to-elasticsearch",permalink:"/docs/guides/logging-to-elasticsearch",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.53.3/guides/logging-to-elasticsearch.md",tags:[],version:"1.53.3",frontMatter:{},sidebar:"Learn",previous:{title:"Build and deploy a modular monolith",permalink:"/docs/guides/build-modular-monolith"},next:{title:"Configure JWT with Keycloak",permalink:"/docs/guides/jwt-keycloak"}},c={},l=[{value:"Create a platformatic application",id:"create-a-platformatic-application",level:2},{value:"Setup ElasticSearch and Kibana",id:"setup-elasticsearch-and-kibana",level:2},{value:"Install transport",id:"install-transport",level:2},{value:"Configure Logger Transport",id:"configure-logger-transport",level:2},{value:"Configure Kibana",id:"configure-kibana",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"logging-to-elasticsearch-or-any-other-destination",children:"Logging to ElasticSearch (or any other destination)"})}),"\n",(0,a.jsxs)(n.p,{children:["This guide shows how to configure a Platformatic application to\ndeliver logs to ",(0,a.jsx)(n.a,{href:"https://www.elastic.co/elasticsearch/",children:"ElasticSearch"}),"\nor via any other supported ",(0,a.jsx)(n.a,{href:"https://getpino.io/#/docs/transports",children:"transports"}),".\nThe logs will then be visualized via ",(0,a.jsx)(n.a,{href:"https://www.elastic.co/kibana",children:"Kibana"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"create-a-platformatic-application",children:"Create a platformatic application"}),"\n",(0,a.jsxs)(n.p,{children:["Create a platformatic application using ",(0,a.jsx)(n.code,{children:"npx create-platformatic@latest"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"setup-elasticsearch-and-kibana",children:"Setup ElasticSearch and Kibana"}),"\n",(0,a.jsxs)(n.p,{children:["If you are logging to ElasticSearch and visualizing with Kibana,\nyou might want to set it up using ",(0,a.jsx)(n.a,{href:"https://docs.docker.com/compose/",children:"Docker Compose"}),"\nfor local testing."]}),"\n",(0,a.jsxs)(n.p,{children:["Write the following as ",(0,a.jsx)(n.code,{children:"docker-compose.yml"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"---\nversion: '3.8'\nservices:\n  elasticsearch:\n    image: docker.elastic.co/elasticsearch/elasticsearch:8.3.3\n    environment:\n      - discovery.type=single-node\n      # Elasticsearch 8.x has HTTPS and auth on by default. This option is\n      # needed to use HTTP and no auth (as used in the tests).\n      - xpack.security.enabled=false\n    container_name: elasticsearch\n    ports: ['9200:9200']\n\n  kibana:\n    image: docker.elastic.co/kibana/kibana:8.3.3\n    container_name: kibana\n    ports: ['5601:5601']\n    depends_on: ['elasticsearch']\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Then, start ElasticSearch and Kibana with ",(0,a.jsx)(n.code,{children:"docker-compose -f docker-compose.yml up"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"install-transport",children:"Install transport"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm i pino-elasticsearch\n"})}),"\n",(0,a.jsx)(n.h2,{id:"configure-logger-transport",children:"Configure Logger Transport"}),"\n",(0,a.jsx)(n.p,{children:"Configuring your Platformatic application to log to ElasticSearch is straightforward,\nyou just have to configure it like the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  ...\n  "server": {\n    "hostname": "{PLT_SERVER_HOSTNAME}",\n    "port": "{PORT}",\n    "logger": {\n      "level": "{PLT_SERVER_LOGGER_LEVEL}",\n      "transport": {\n        "targets": [{\n          "target": "pino-elasticsearch",\n          "options": {\n            "node": "http://127.0.0.1:9200"\n          }\n        }, {\n          "target": "pino-pretty"\n        }]\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["This snippet can be applied either to the ",(0,a.jsx)(n.code,{children:"platformatic.runtime.json"})," config\nfor Platformatic Runtime applications, or as part of the application configuration\nfor any other application."]}),"\n",(0,a.jsx)(n.p,{children:"This setup will allow you to log both to the terminal (TTY)\nand to ElasticSearch at the same time."}),"\n",(0,a.jsxs)(n.p,{children:["Start your server with ",(0,a.jsx)(n.code,{children:"platformatic start"}),", and navigate across\nits API."]}),"\n",(0,a.jsx)(n.h2,{id:"configure-kibana",children:"Configure Kibana"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Open ",(0,a.jsx)(n.code,{children:"http://localhost:5601"})," in your browser"]}),"\n",(0,a.jsx)(n.li,{children:'Click on the hamburger menu on top left, and then "Discover"'}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Kibana start page",src:t(8649).A+"",width:"3555",height:"2069"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:'Click on the "Create Data View"'}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Create a Data View",src:t(466).A+"",width:"3596",height:"2070"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsxs)(n.li,{children:["Write ",(0,a.jsx)(n.code,{children:"pino*"})," as ",(0,a.jsx)(n.code,{children:"name"})," and select ",(0,a.jsx)(n.code,{children:"time"})," as timestamp field"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Select an index",src:t(1595).A+"",width:"3593",height:"2060"})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"Enjoy your logs"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Browse logs",src:t(5684).A+"",width:"3588",height:"2069"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8649:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/kibana-1-5ff7286dd199f9751a36fe0585e04a40.png"},466:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/kibana-2-1764c669b12ce34fb413b769b691120d.png"},1595:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/kibana-3-2c4064521053f5eddb540aa527cc84d7.png"},5684:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/kibana-4-414df9423d0fdd3ef61e2f379dfaf612.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var a=t(6540);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);