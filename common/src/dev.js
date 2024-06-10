import express from 'express'
import {getBlocks, registerRoutes} from "./routes.js";

const app = express()

app.use(express.static("public"))

app.get("/", async (req, res) => {
  const blocks = await getBlocks()
  res.setHeader("content-type", "text/html")
  res.send(`<!doctype html>
<html>
  <head>
    <title>Dev!</title>
    ${blocks.head}
  </head>
  <body hx-boost="true">
    ${blocks.top}
    <main>
        <h1>CONTENT</h1>
    </main>
  </body>
</html>`)
})

registerRoutes(app)

const port = 3200
console.log(`Dev server running on http://localhost:${port}`)
const server = app.listen(port)
import.meta.hot.on("vite:beforeFullReload", () => {
  console.log("full reload")
  server.close()
});
