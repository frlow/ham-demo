import express from 'express'
import { Layout } from './Layout'
import { Home } from './Home'
import { About } from './About'

const app = express()
app.get('/', (req, res) => {
  res.setHeader('content-type', 'text/html')
  res.send(
    `<!doctype html>${(
      <Layout>
        <Home />
      </Layout>
    )}`,
  )
})
app.get('/about', (req, res) => {
  res.setHeader('content-type', 'text/html')
  res.send(
    `<!doctype html>${(
      <Layout>
        <About />
      </Layout>
    )}`,
  )
})

const port = 3444
console.log(`Listening on: http://localhost:${port}/`)
const server = app.listen(port)

if (import.meta.hot) {
  app.use('/assets', express.static('../common/public/assets'))
  import.meta.hot.on('vite:beforeFullReload', () => {
    server.close()
  })
}
