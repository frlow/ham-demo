import express from 'express'
import fs from "node:fs";
import path from "node:path";

export const blocks = {
  get head() {
    return fs.readFileSync(path.join("..", "common", "blocks", "head.html"), 'utf8')
  },
  get top() {
    return fs.readFileSync(path.join("..", "common", "blocks", "top.html"), 'utf8')
  }
}

const dev = process.argv[2] === "dev"

const app = express()
app.use(express.urlencoded({ extended: true }));
if (dev) app.use('/assets', express.static('../common/public/assets'))
app.get("/_/(:name)(/*)?", (req, res) => {
  const name = req.params.name
  res.setHeader('content-type', 'text/html')
  res.send(
    `<!doctype html>
<html>
  <head>
    <title>${name}</title>
    ${blocks.head}
  </head>
  <body hx-boost="true">
  <header x-data="{active: '${name}'}">
    ${blocks.top}
  </header>
  <app-${name}></app-${name}>
  </body>
</html>`,
  )
})

const port = 3300
console.log(`Listening on: http://localhost:${port}/_/id`)
app.listen(port)
