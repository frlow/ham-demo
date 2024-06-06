import type {Express} from "express";

import fs from 'node:fs'
import path from 'node:path'

export const blocks = {
  get head() {
    return fs.readFileSync(path.join("..", "common", "blocks", "head.html"), 'utf8')
  },
  get top() {
    return fs.readFileSync(path.join("..", "common", "blocks", "top.html"), 'utf8')
  }
}


export const routes = (app: Express) => {
  app.get("/spa/list", (req,res)=>{
    res.setHeader('content-type', 'application/json')
    res.send(JSON.stringify(["a","b","c"]))
  })
  app.get('*', (req, res) => {
    res.setHeader('content-type', 'text/html')
    res.send(
        `<!doctype html>
        <html>
      <head>
        <title>SPA!</title>
        <script src="/spa/assets/entry.js" type="module"></script>
        ${blocks.head}
      </head>
      <body hx-boost="true">
      <header x-data="{active: 'spa'}">
        ${blocks.top}
      </header>
      <main x-data="{route:'${req.path}'}">
        <app-spa x-bind:route="route" x-on:routechange="window.history.pushState(null,undefined,\`/spa\${$event.detail}\`); route=\`/spa\${$event.detail}\`"></app-spa>
      </main>
      </body>
      </html>`,
    )
  })
}
