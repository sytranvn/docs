"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[5460],{2575:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=t(4848),a=t(8453);const o={},r="Programmatic API",s={id:"service/programmatic",title:"Programmatic API",description:"In many cases, it's useful to start Platformatic Service using an API instead of the command line, e.g., in tests where we want to start and stop our server programmatically.",source:"@site/docs/service/programmatic.md",sourceDirName:"service",slug:"/service/programmatic",permalink:"/docs/next/service/programmatic",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/service/programmatic.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Plugin",permalink:"/docs/next/service/plugin"},next:{title:"Platformatic Client",permalink:"/docs/next/client/overview"}},c={},l=[{value:"Using <code>buildServer</code> Function",id:"using-buildserver-function",level:2},{value:"Basic Example",id:"basic-example",level:3},{value:"Custom Configuration",id:"custom-configuration",level:3},{value:"Creating a Reusable Application on Top of Platformatic Service",id:"creating-a-reusable-application-on-top-of-platformatic-service",level:2},{value:"Using <code>beforePlugins</code> Option",id:"using-beforeplugins-option",level:3},{value:"TypeScript Support",id:"typescript-support",level:2},{value:"Type Declarations",id:"type-declarations",level:3},{value:"Usage Example",id:"usage-example",level:3},{value:"Usage with Custom Configuration",id:"usage-with-custom-configuration",level:2},{value:"Custom Configuration Types",id:"custom-configuration-types",level:3},{value:"Writing a Custom Stackable with TypeScript",id:"writing-a-custom-stackable-with-typescript",level:2},{value:"Schema Definition",id:"schema-definition",level:3},{value:"Generate Matching Types",id:"generate-matching-types",level:4},{value:"Implementing Auto-Upgrade of the Configuration",id:"implementing-auto-upgrade-of-the-configuration",level:2},{value:"Writing migrations",id:"writing-migrations",level:3},{value:"Wiring it to the stackable",id:"wiring-it-to-the-stackable",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"programmatic-api",children:"Programmatic API"})}),"\n",(0,i.jsx)(n.p,{children:"In many cases, it's useful to start Platformatic Service using an API instead of the command line, e.g., in tests where we want to start and stop our server programmatically."}),"\n",(0,i.jsxs)(n.h2,{id:"using-buildserver-function",children:["Using ",(0,i.jsx)(n.code,{children:"buildServer"})," Function"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"buildServer"})," function allows starting the Platformatic Service programmatically."]}),"\n",(0,i.jsx)(n.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="server.js"',children:"import { buildServer } from '@platformatic/service'\n\nconst app = await buildServer('path/to/platformatic.service.json')\n\nawait app.start()\n\nconst res = await fetch(app.url)\nconsole.log(await res.json())\n\n// do something\n\nawait app.close()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"custom-configuration",children:"Custom Configuration"}),"\n",(0,i.jsx)(n.p,{children:"It is also possible to customize the configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { buildServer } from '@platformatic/service'\n\nconst app = await buildServer({\n  server: {\n    hostname: '127.0.0.1',\n    port: 0\n  }\n})\n\nawait app.start()\n\nconst res = await fetch(app.url)\nconsole.log(await res.json())\n\n// do something\n\nawait app.close()\n"})}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-reusable-application-on-top-of-platformatic-service",children:"Creating a Reusable Application on Top of Platformatic Service"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/next/db/overview",children:"Platformatic DB"})," is built on top of Platformatic Serivce. If you want to build a similar kind of tool, follow this example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="Example Plugin"',children:"import { buildServer, schema } from '@platformatic/service'\nimport { readFileSync } from 'node:fs'\n\nasync function myPlugin (app, opts) {\n  // app.platformatic.configManager contains an instance of the ConfigManager\n  console.log(app.platformatic.configManager.current)\n\n  await app.register(platformaticService, opts)\n}\n\n// break Fastify encapsulation\nmyPlugin[Symbol.for('skip-override')] = true\nmyPlugin.configType = 'myPlugin'\n\n// This is the schema for this reusable application configuration file,\n// customize at will but retain the base properties of the schema from\n// @platformatic/service\nmyPlugin.schema = schema\n\n// The configuration of the ConfigManager\nmyPlugin.configManagerConfig = {\n  version: JSON.parse(readFileSync(new URL(import.meta.url, 'package.json'), 'utf-8')).version\n  schema: foo.schema,\n  allowToWatch: ['.env'],\n  schemaOptions: {\n    useDefaults: true,\n    coerceTypes: true,\n    allErrors: true,\n    strict: false\n  },\n  async transformConfig () {\n    console.log(this.current) // this is the current config\n\n    // In this method you can alter the configuration before the application\n    // is started. It's useful to apply some defaults that cannot be derived\n    // inside the schema, such as resolving paths.\n  }\n}\n\n\nconst server = await buildServer('path/to/config.json', myPlugin)\n\nawait server.start()\n\nconst res = await fetch(server.listeningOrigin)\nconsole.log(await res.json())\n\n// do something\n\nawait service.close()\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"using-beforeplugins-option",children:["Using ",(0,i.jsx)(n.code,{children:"beforePlugins"})," Option"]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to provide functionality ",(0,i.jsx)(n.em,{children:"before"})," the plugins are loaded, but after metrics and telemetry are in place,\nyou can use the ",(0,i.jsx)(n.code,{children:"beforePlugins"})," option:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="Example Plugin"',children:"async function myPlugin (app, opts) {\n  await app.register(platformaticService, {\n    ...opts,\n    beforePlugins: [async function (app) {\n      app.decorate('myvalue', 42)\n    }]\n  })\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"typescript-support",children:"TypeScript Support"}),"\n",(0,i.jsxs)(n.p,{children:["To ensure this module works in a TypeScript setup (outside an application created with ",(0,i.jsx)(n.code,{children:"create-platformatic"}),"), you need to add the following to your types:"]}),"\n",(0,i.jsx)(n.h3,{id:"type-declarations",children:"Type Declarations"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { FastifyInstance } from 'fastify'\nimport { PlatformaticApp, PlatformaticServiceConfig } from '@platformatic/service'\n\ndeclare module 'fastify' {\n  interface FastifyInstance {\n    platformatic: PlatformaticApp<PlatformaticServiceConfig>\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"usage-example",children:"Usage Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"/// <reference path=\"./global.d.ts\" />\nimport { FastifyInstance } from 'fastify'\n\nexport default async function (app: FastifyInstance) {\n  app.get('/', async () => {\n    return app.platformatic.config\n  })\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can always generate a file called ",(0,i.jsx)(n.code,{children:"global.d.ts"})," with the above content via the ",(0,i.jsx)(n.code,{children:"platformatic service types"})," command."]}),"\n",(0,i.jsx)(n.h2,{id:"usage-with-custom-configuration",children:"Usage with Custom Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["If you are creating a reusable application on top of Platformatic Service, you would need to create the types for your schema,\nusing ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/json-schema-to-typescript",children:"json-schema-to-typescript"})," in a ",(0,i.jsx)(n.code,{children:"./config.d.ts"})," file and\nuse it like this:"]}),"\n",(0,i.jsx)(n.h3,{id:"custom-configuration-types",children:"Custom Configuration Types"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { FastifyInstance } from 'fastify'\nimport { PlatformaticApp } from '@platformatic/service'\nimport { YourApp } from './config'\n\ndeclare module 'fastify' {\n  interface FastifyInstance {\n    platformatic: PlatformaticApp<YourApp>\n  }\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["You can construct ",(0,i.jsx)(n.code,{children:"platformatic"})," like any other union types, adding other definitions."]})}),"\n",(0,i.jsx)(n.h2,{id:"writing-a-custom-stackable-with-typescript",children:"Writing a Custom Stackable with TypeScript"}),"\n",(0,i.jsxs)(n.p,{children:["Creating a reusable application with TypeScript requires a bit of setup. First, create a ",(0,i.jsx)(n.code,{children:"schema.ts"})," file that generates the JSON Schema for your application."]}),"\n",(0,i.jsx)(n.h3,{id:"schema-definition",children:"Schema Definition"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { schema as serviceSchema } from '@platformatic/service'\nimport esMain from 'es-main'\n\nconst baseSchema = serviceSchema.schema\n\nexport const schema = structuredClone(baseSchema)\n\nschema.$id = 'https://raw.githubusercontent.com/platformatic/acme-base/main/schemas/1.json'\nschema.title = 'Acme Base'\n\n// Needed to specify the extended module \nschema.properties.extends = {\n  type: 'string'\n}\n\nschema.properties.dynamite = {\n  anyOf: [{\n    type: 'boolean'\n  }, {\n    type: 'string'\n  }],\n  description: 'Enable /dynamite route'\n}\n\ndelete schema.properties.plugins\n\nif (esMain(import.meta)) {\n  console.log(JSON.stringify(schema, null, 2))\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"generate-matching-types",children:"Generate Matching Types"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.a,{href:"http://npm.im/json-schema-to-typescript",children:"json-schema-to-typescript"})," to generate types:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"tsc && node dist/lib/schema.js > schemas/acme.json"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"json2ts < schemas/acme.json > src/lib/config.d.ts"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Finally, you can write the actual reusable application:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import fp from 'fastify-plugin'\nimport { platformaticService, buildServer as buildServiceServer, Stackable, PlatformaticServiceConfig } from '@platformatic/service'\nimport { schema } from './schema.js'\nimport { FastifyInstance } from 'fastify'\nimport type { ConfigManager } from '@platformatic/config'\nimport type { AcmeBase as AcmeBaseConfig } from './config.js'\nimport { readFileSync } from 'node:fs'\n\nexport interface AcmeBaseMixin {\n  platformatic: {\n    configManager: ConfigManager<AcmeBaseConfig>,\n    config: AcmeBaseConfig\n  }\n}\n\nasync function isDirectory (path: string) {\n  try {\n    return (await lstat(path)).isDirectory()\n  } catch {\n    return false\n  }\n}\n\nfunction buildStackable () : Stackable<AcmeBaseConfig> {\n  async function acmeBase (_app: FastifyInstance, opts: object) {\n    // Needed to avoid declaration mergin and be compatibile with the\n    // Fastify types\n    const app = _app as FastifyInstance & AcmeBaseMixin\n\n    await app.register(platformaticService, opts)\n  }\n\n  // break Fastify encapsulation\n  fp(acmeBase)\n\n  acmeBase.configType = 'acmeBase'\n\n  // This is the schema for this reusable application configuration file,\n  // customize at will but retain the base properties of the schema from\n  // @platformatic/service\n  acmeBase.schema = schema\n\n  // The configuration of the ConfigManager\n  acmeBase.configManagerConfig = {\n    schema,\n    version: require('./package.json').version\n    //// use the following if the file is compiled as ESM:\n    // version: JSON.parse(readFileSync(new URL(import.meta.url, 'package.json'), 'utf-8')).version\n    allowToWatch: ['.env'],\n    schemaOptions: {\n      useDefaults: true,\n      coerceTypes: true,\n      allErrors: true,\n      strict: false\n    },\n    async transformConfig (this: ConfigManager<AcmeBaseConfig & PlatformaticServiceConfig>) {\n      // Call the transformConfig method from the base stackable\n      platformaticService.configManagerConfig.transformConfig.call(this)\n\n      // In this method you can alter the configuration before the application\n      // is started. It's useful to apply some defaults that cannot be derived\n      // inside the schema, such as resolving paths.\n    }\n  }\n\n  return acmeBase\n}\n\nexport const acmeBase = buildStackable()\n\nexport default acmeBase\n\nexport async function buildServer (opts: object) {\n  return buildServiceServer(opts, acmeBase)\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"implementing-auto-upgrade-of-the-configuration",children:"Implementing Auto-Upgrade of the Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["Platformatic support auto-upgrading the configuration of your stackable to the latest version. This enables\nthe use of compatibility options to turn on and off individual features. Imagine that you want to change the\ndefault behavior of your stackable: you can add a configuration option to set the ",(0,i.jsx)(n.em,{children:"previous"})," behavior.\nThen during the upgrade logic, you only have to add this new configuration."]}),"\n",(0,i.jsxs)(n.p,{children:["The key to implement this logic is ",(0,i.jsx)(n.a,{href:"https://github.com/platformatic/semgrator",children:"semgrator"}),".\n",(0,i.jsx)(n.code,{children:"semgrator"})," run migrations code based on semantic version rules.\nSo on a breaking/behavior change that results in a new compatibility option in your configuration file,\nyou can add a new migration rule that set the new option to false automatically."]}),"\n",(0,i.jsx)(n.h3,{id:"writing-migrations",children:"Writing migrations"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"export const migration = {\n  version: '1.0.0',\n  up: (input) => {\n    // Do something with Config\n    return input\n  },\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"wiring-it-to-the-stackable",children:"Wiring it to the stackable"}),"\n",(0,i.jsxs)(n.p,{children:["Add a ",(0,i.jsx)(n.code,{children:"version"})," string, specified in your ",(0,i.jsx)(n.code,{children:"package.json"})," and ",(0,i.jsx)(n.code,{children:"upgrade"})," function to your ",(0,i.jsx)(n.code,{children:"configManagerConfig"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const { join } = require('path')\nconst pkg = require('../package.json')\n\nasync function upgrade (config, version) {\n  const { semgrator } = await import('semgrator')\n\n  const iterator = semgrator({\n    version,\n    path: join(__dirname, 'versions'),\n    input: config,\n    logger: this.logger\n  })\n\n  let result\n\n  for await (const updated of iterator) {\n    // You can add a console.log here to know what is updated\n    result = updated.result\n  }\n\n  return result\n}\n\nstackable.configManagerConfig = {\n  ...\n  version: require('./package.json'),\n  upgrade\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(6540);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);