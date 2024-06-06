import express from 'express'
import {createServer as createViteServer} from 'vite'
import {routes} from "./server/routes";
import {svelte, vitePreprocess} from '@sveltejs/vite-plugin-svelte'

async function createServer() {
  const app = express()

  const vite = await createViteServer({
    base: "/spa/assets",
    server: {middlewareMode: true},
    root: "./client",
    appType: 'spa',
    plugins: [svelte({preprocess: [vitePreprocess()]})]
  })
  app.use("/spa/assets", vite.middlewares)

  app.use('/assets', express.static('../common/public/assets'))
  routes(app)
  const port = 4321
  console.log(`listening on: http://localhost:${port}`)
  app.listen(port)
}

createServer()
