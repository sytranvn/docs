"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[5960],{2911:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=e(4848),t=e(8453);const r={},l="Managing runtimes with the CLI",s={id:"guides/runtime-cli-managing",title:"Managing runtimes with the CLI",description:"The @plaformatic/control npm package provides a CLI tool to manage Platformatic Runtime applications.",source:"@site/versioned_docs/version-1.53.3/guides/runtime-cli-managing.md",sourceDirName:"guides",slug:"/guides/runtime-cli-managing",permalink:"/docs/guides/runtime-cli-managing",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.53.3/guides/runtime-cli-managing.md",tags:[],version:"1.53.3",frontMatter:{}},o={},c=[{value:"Enabling runtime management API",id:"enabling-runtime-management-api",level:2},{value:"Installing",id:"installing",level:2},{value:"Platformatic Control commands",id:"platformatic-control-commands",level:2},{value:"Listing running runtime applications",id:"listing-running-runtime-applications",level:3},{value:"Stopping a running runtime application",id:"stopping-a-running-runtime-application",level:3},{value:"Restarting a running runtime application",id:"restarting-a-running-runtime-application",level:3},{value:"Reloading a running runtime application",id:"reloading-a-running-runtime-application",level:3},{value:"Displaying logs for a running runtime application",id:"displaying-logs-for-a-running-runtime-application",level:3},{value:"Listing environment variables for a running runtime application",id:"listing-environment-variables-for-a-running-runtime-application",level:3},{value:"Printing runtime config file",id:"printing-runtime-config-file",level:3},{value:"Injecting an HTTP request into a running runtime application",id:"injecting-an-http-request-into-a-running-runtime-application",level:3},{value:"Listing services in a running runtime application",id:"listing-services-in-a-running-runtime-application",level:3}];function p(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"managing-runtimes-with-the-cli",children:"Managing runtimes with the CLI"})}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.code,{children:"@plaformatic/control"})," npm package provides a CLI tool to manage Platformatic Runtime applications.\nWith the CLI, you can stop, restart, and debug your applications in a local development environment."]}),"\n",(0,a.jsx)(i.h2,{id:"enabling-runtime-management-api",children:"Enabling runtime management API"}),"\n",(0,a.jsx)(i.p,{children:"Before you can use the CLI to manage your runtime applications, you need to enable\nthe runtime management API in your application's configuration file. This will\nallow the CLI to communicate with your application."}),"\n",(0,a.jsxs)(i.p,{children:["To enable the runtime management API, add the following configuration to your runtime\napplication's ",(0,a.jsx)(i.code,{children:"platformatic.json"})," file:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-json",children:'{\n  "managementApi": true\n}\n'})}),"\n",(0,a.jsx)(i.h2,{id:"installing",children:"Installing"}),"\n",(0,a.jsxs)(i.p,{children:["You can use the CLI via the ",(0,a.jsx)(i.code,{children:"platformatic"})," command with a ",(0,a.jsx)(i.code,{children:"ctl"})," subcommand or\nby using the ",(0,a.jsx)(i.code,{children:"@platformatic/control"})," npm package directly. To install the package\nglobally, run the following command:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"npm install -g @platformatic/control\n"})}),"\n",(0,a.jsxs)(i.p,{children:["In the following sections, we'll use the ",(0,a.jsx)(i.code,{children:"platformatic"})," command to manage runtime applications."]}),"\n",(0,a.jsx)(i.h2,{id:"platformatic-control-commands",children:"Platformatic Control commands"}),"\n",(0,a.jsx)(i.p,{children:"To see a list of available commands, run the following command:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"platformatic ctl\n"})}),"\n",(0,a.jsx)(i.p,{children:"Here are the available commands for managing runtime applications:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"ps"})," - Lists all running runtime applications."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"stop"})," - Stops a running runtime application."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"restart"})," - Restarts a running runtime application."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"reload"})," - Reloads a running runtime application."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"logs"})," - Displays logs for a running runtime application."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"env"})," - Lists environment variables for a running runtime application."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"config"})," - Prints runtime or runtime service config file."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"inject"})," - Injects an HTTP request into a running runtime application."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"services"})," - Lists all services in a running runtime application."]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"listing-running-runtime-applications",children:"Listing running runtime applications"}),"\n",(0,a.jsx)(i.p,{children:"To list all running runtime applications, run the following command:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"platformatic ctl ps\n"})}),"\n",(0,a.jsx)(i.p,{children:"This will display a list of all running runtime applications, including their PID,\nnpm package name, Platformatic version, running time, URL, and working directory."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:" PID    NAME        PLT     TIME    URL                  PWD                                  \n 38898  my-app-foo  1.23.0  1m 52s  http://0.0.0.0:3042  /Users/test-user/foo\n 38899  my-app-bar  1.23.0  4m 53s  http://0.0.0.0:3043  /Users/test-user/bar\n"})}),"\n",(0,a.jsx)(i.h3,{id:"stopping-a-running-runtime-application",children:"Stopping a running runtime application"}),"\n",(0,a.jsx)(i.p,{children:"To stop a running runtime application, run the following command:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"platformatic ctl stop [-p <PID> | -n <NAME>]\n"})}),"\n",(0,a.jsx)(i.p,{children:"You can stop a running runtime application by specifying either its PID or its name."}),"\n",(0,a.jsx)(i.h3,{id:"restarting-a-running-runtime-application",children:"Restarting a running runtime application"}),"\n",(0,a.jsx)(i.p,{children:"To restart a running runtime application, run the following command:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"platformatic ctl restart [-p <PID> | -n <NAME>]\n"})}),"\n",(0,a.jsx)(i.p,{children:"You can restart a running runtime application by specifying either its PID or its name.\nNote that after restarting, the application parent process will be changed to the\ncurrent CLI process."}),"\n",(0,a.jsx)(i.h3,{id:"reloading-a-running-runtime-application",children:"Reloading a running runtime application"}),"\n",(0,a.jsx)(i.p,{children:"To reload a running runtime application, run the following command:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"platformatic ctl reload [-p <PID> | -n <NAME>]\n"})}),"\n",(0,a.jsxs)(i.p,{children:["The difference between ",(0,a.jsx)(i.code,{children:"reload"})," and ",(0,a.jsx)(i.code,{children:"restart"})," is that ",(0,a.jsx)(i.code,{children:"reload"})," does not kill\nthe runtime process. It stops and starts all the runtime services. Some configurations will not be updated."]}),"\n",(0,a.jsx)(i.p,{children:"You can reload a running runtime application by specifying either its PID or its name."}),"\n",(0,a.jsx)(i.h3,{id:"displaying-logs-for-a-running-runtime-application",children:"Displaying logs for a running runtime application"}),"\n",(0,a.jsx)(i.p,{children:"To display logs for a running runtime application, run the following command:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"platformatic ctl logs [-p <PID> | -n <NAME>]\n"})}),"\n",(0,a.jsx)(i.p,{children:"You can display logs for a running runtime application by specifying either its PID or its name."}),"\n",(0,a.jsx)(i.p,{children:"You can filter logs by specifying a log level or service name:"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"Display logs for a specific service"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"platformatic ctl logs [-p <PID> | -n <NAME>] -s <service-name>\n"})}),"\n",(0,a.jsxs)(i.p,{children:["To see the list of services in a running runtime application, you can use the\n",(0,a.jsx)(i.code,{children:"platformatic ctl services"})," subcommand."]}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"Display logs for a specific log level"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"platformatic ctl logs [-p <PID> | -n <NAME>] -l <log-level>\n"})}),"\n",(0,a.jsxs)(i.p,{children:["Supported log levels are ",(0,a.jsx)(i.code,{children:"trace"}),", ",(0,a.jsx)(i.code,{children:"debug"}),", ",(0,a.jsx)(i.code,{children:"info"}),", ",(0,a.jsx)(i.code,{children:"warn"}),", ",(0,a.jsx)(i.code,{children:"error"}),", and ",(0,a.jsx)(i.code,{children:"fatal"}),"."]}),"\n",(0,a.jsx)(i.h3,{id:"listing-environment-variables-for-a-running-runtime-application",children:"Listing environment variables for a running runtime application"}),"\n",(0,a.jsx)(i.p,{children:"To list environment variables for a running runtime application, run the following command:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"platformatic ctl env [-p <PID> | -n <NAME>]\n"})}),"\n",(0,a.jsx)(i.p,{children:"You can list environment variables for a running runtime application by specifying either its PID or its name."}),"\n",(0,a.jsx)(i.h3,{id:"printing-runtime-config-file",children:"Printing runtime config file"}),"\n",(0,a.jsx)(i.p,{children:"To print the runtime config file, run the following command:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"platformatic ctl config [-p <PID> | -n <NAME>]\n"})}),"\n",(0,a.jsx)(i.p,{children:"To print the runtime service config file, run the following command:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"platformatic ctl config [-p <PID> | -n <NAME>] -s <service-name>\n"})}),"\n",(0,a.jsx)(i.p,{children:"You can print the runtime config file for a running runtime application by specifying either its PID or its name."}),"\n",(0,a.jsx)(i.h3,{id:"injecting-an-http-request-into-a-running-runtime-application",children:"Injecting an HTTP request into a running runtime application"}),"\n",(0,a.jsx)(i.p,{children:"To inject an HTTP request into a running runtime application, run the following command:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"platformatic ctl inject [-p <PID> | -n <NAME>] -X <method> -H <header> -d <data> <url>\n"})}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.code,{children:"platformatic ctl inject"})," command is designed is a way to be compatible with the ",(0,a.jsx)(i.code,{children:"curl"})," command.\nAlthough it doesn't support all ",(0,a.jsx)(i.code,{children:"curl"})," options, it supports the most common ones."]}),"\n",(0,a.jsxs)(i.p,{children:["With the inject command you can make requests not only to endpoints that are exposed by the runtime, but also to internal endpoints\nthat are not exposed via the runtime entrypoint. To do so, you can use the ",(0,a.jsx)(i.code,{children:"-s"})," option to specify the service name."]}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"Example:"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:'platformatic ctl inject -n my-app-foo -s my-service\n  -X POST\n  -H "Content-Type: application/json"\n  -d \'{"foo": "bar"}\'\n  /api/v1/foo\n'})}),"\n",(0,a.jsx)(i.p,{children:"As you can see there is no need to specify a full URL, you can just specify the path of the endpoint you want to call."}),"\n",(0,a.jsx)(i.h3,{id:"listing-services-in-a-running-runtime-application",children:"Listing services in a running runtime application"}),"\n",(0,a.jsx)(i.p,{children:"To list all services in a running runtime application, run the following command:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"platformatic ctl services [-p <PID> | -n <NAME>]\n"})}),"\n",(0,a.jsx)(i.p,{children:"The list command shows all services that are currently running in the runtime application."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:" NAME      TYPE      ENTRYPOINT        \n movies    db        no         \n payment   db        no         \n gateway   composer  yes\n"})}),"\n",(0,a.jsx)(i.p,{children:"You can list all services in a running runtime application by specifying either its PID or its name."})]})}function d(n={}){const{wrapper:i}={...(0,t.R)(),...n.components};return i?(0,a.jsx)(i,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},8453:(n,i,e)=>{e.d(i,{R:()=>l,x:()=>s});var a=e(6540);const t={},r=a.createContext(t);function l(n){const i=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function s(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),a.createElement(r.Provider,{value:i},n.children)}}}]);