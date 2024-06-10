import express from 'express'
import {registerRoutes} from "./routes.js";

const app = express()

app.use(express.static("public"))
registerRoutes(app)

const port = 3200
console.log(`Server running on http://localhost:${port}`)
app.listen(port)
