import express from 'express'
import fs from "node:fs";
import path from "node:path";

const dev = process.argv[2] === "dev"

export const blocks = {
  get head() {
    return fs.readFileSync(path.join("..", "common", "blocks", "head.html"), 'utf8')
  },
  get top() {
    return fs.readFileSync(path.join("..", "common", "blocks", "top.html"), 'utf8')
  }
}

const app = express()
if (dev) app.use('/assets', express.static('../common/public/assets'))
app.get("/_/(:name)(/*)?", (req, res) => {
  const name = req.params.name
  const app = JSON.parse(fs.readFileSync("apps.json", 'utf8'))[name]
  if (!app) {
    res.sendStatus(404)
    return
  }
  res.setHeader('content-type', 'text/html')
  res.send(
    `<!doctype html>
<html>
  <head>
    <title>${app.title}</title>
    ${blocks.head}
    ${ dev ?  
      `<script src="http://localhost:4321/src/entry.ts" type="module"></script>`:
      `<script src="${app.src}" type="module"></script>`}
  </head>
  <body hx-boost="true">
  <header x-data="{active: '${name}'}">
    ${blocks.top}
  </header>
  ${app.component}
  </body>
</html>`,
  )
})

const port = 3300
console.log(`Listening on: http://localhost:${port}/`)
app.listen(port)
