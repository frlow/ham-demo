import express from 'express'
import fs from 'node:fs'
import path from 'node:path'

const head = fs.readFileSync(path.join(__dirname, "blocks", "head.html"), 'utf8')
const top = fs.readFileSync(path.join(__dirname, "blocks", "top.html"), 'utf8')

const app = express()

app.use(express.static("public"))

app.get("/", (req,res)=>{
  res.setHeader("content-type", "text/html")
  res.send(`<!doctype html>
<html>
  <head>
    <title>Dev!</title>
    ${head}
  </head>
  <body hx-boost="true">
    ${top}
    <main>
        <h1>CONTENT</h1>
    </main>
  </body>
</html>`)
})

const port = 3200
console.log(`Dev server running on http://localhost:${port}`)
app.listen(port)
