# Programmatic API

In many cases it's useful to start Platformatic Service using an API instead of
command line, e.g. in tests we want to start and stop our server.

The `buildServer` function allows that:

```js
import { buildServer } from '@platformatic/service'

const app = await buildServer('path/to/platformatic.service.json')

await app.start()

const res = await fetch(app.url)
console.log(await res.json())

// do something

await app.close()
```

It is also possible to customize the configuration:

```js
import { buildServer } from '@platformatic/service'

const app = await buildServer({
  server: {
    hostname: '127.0.0.1',
    port: 0
  }
})

await app.start()

const res = await fetch(app.url)
console.log(await res.json())

// do something

await app.close()
```

## Creating a reusable application on top of Platformatic Service

[Platformatic DB](/reference/db/introduction.md) is built on top of Platformatic Serivce.
If you want to build a similar kind of tool, follow this example:

```js
import { buildServer, schema } from '@platformatic/service'

async function myPlugin (app, opts) {
  // app.platformatic.configManager contains an instance of the ConfigManager
  console.log(app.platformatic.configManager.current)

  await platformaticService(app, opts)
}

// break Fastify encapsulation
myPlugin[Symbol.for('skip-override')] = true
myPlugin.configType = 'myPlugin'

// This is the schema for this reusable application configuration file,
// customize at will but retain the base properties of the schema from
// @platformatic/service
myPlugin.schema = schema

// The configuration of the ConfigManager
myPlugin.configManagerConfig = {
  schema: foo.schema,
  envWhitelist: ['PORT', 'HOSTNAME'],
  allowToWatch: ['.env'],
  schemaOptions: {
    useDefaults: true,
    coerceTypes: true,
    allErrors: true,
    strict: false
  },
  async transformConfig () {
    console.log(this.current) // this is the current config

    // In this method you can alter the configuration before the application
    // is started. It's useful to apply some defaults that cannot be derived
    // inside the schema, such as resolving paths.
  }
}


const server = await buildServer('path/to/config.json', myPlugin)

await server.start()

const res = await fetch(server.listeningOrigin)
console.log(await res.json())

// do something

await service.close()
```

## TypeScript support


In order for this module to work on a TypeScript setup (outside of an application created with `create-platformatic`),
you have to add the following to your types:

```ts
import { FastifyInstance } from 'fastify'
import { PlatformaticApp, PlatformaticServiceConfig } from '@platformatic/service'

declare module 'fastify' {
  interface FastifyInstance {
    platformatic: PlatformaticApp<PlatformaticServiceConfig>
  }
}
```

Then, you can use it:

```ts
/// <reference path="./global.d.ts" />
import { FastifyInstance } from 'fastify'

export default async function (app: FastifyInstance) {
  app.get('/', async () => {
    return app.platformatic.config
  })
}
```

You can always generate a file called `global.d.ts` with the above content via the `platformatic service types` command.


### Usage with custom configuration

If you are creating a reusable application on top of Platformatic Service, you would need to create the types for your schema, 
using [json-schema-to-typescript](https://www.npmjs.com/package/json-schema-to-typescript) in a `./config.d.ts` file and
use it like so:

```ts
import { FastifyInstance } from 'fastify'
import { PlatformaticApp } from '@platformatic/service'
import { YourApp } from './config'

declare module 'fastify' {
  interface FastifyInstance {
    platformatic: PlatformaticApp<YourApp>
  }
}
```

Note that you can construct `platformatic` like any other union types, adding other definitions.